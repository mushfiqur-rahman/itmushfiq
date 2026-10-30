import { chromium } from '@playwright/test';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const browser = await chromium.launch({ channel: 'msedge', headless: true });
let failures = 0;
try {
  for (const slug of ['exchange-to-workspace', 'lms-docker-vps-deployment-case-study']) {
    for (const width of [1280, 390, 320]) {
      const page = await browser.newPage({ viewport: { width, height: 900 } });
      await page.goto(`http://localhost:4321/blog/${slug}/`);
      await page.evaluate(() => document.fonts.ready);
      await page.addScriptTag({ path: require.resolve('axe-core/axe.min.js') });
      const result = await page.evaluate(async () => {
        const report = await window.axe.run(document, {
          runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa', 'best-practice'] },
        });
        return {
          violations: report.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => ({ target: n.target, reason: n.failureSummary })) })),
          manualReview: report.incomplete.map(v => ({ id: v.id, count: v.nodes.length })),
          overflow: document.documentElement.scrollWidth > innerWidth,
          fontLoaded: document.fonts.check('16px Merriweather'),
          fontFamily: getComputedStyle(document.querySelector('.custom-prose')).fontFamily,
        };
      });
      await page.keyboard.press('Tab');
      const skipFocused = await page.locator('.skip-link').evaluate(el => el === document.activeElement);
      await page.keyboard.press('Enter');
      const skipWorks = await page.locator('#main-content').evaluate(el => el === document.activeElement);
      if (result.violations.length || result.overflow || !result.fontLoaded || !skipFocused || !skipWorks) failures++;
      console.log(JSON.stringify({ slug, width, ...result, skipFocused, skipWorks }));
      await page.close();
    }
  }
} finally { await browser.close(); }
process.exitCode = failures ? 1 : 0;
