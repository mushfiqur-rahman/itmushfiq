# Reusable backgrounds

Defined in [global.css](../src/styles/global.css), loaded by the shared layout.

```astro
<section class="site-background py-24">
  <!-- Standard dark purple background with subtle glow and grid -->
</section>

<section class="site-background site-background--soft py-24">
  <!-- Quieter alternating section -->
</section>

<section class="site-background site-background--accent py-24">
  <!-- Stronger purple/lime glow for a hero or closing CTA -->
</section>

<div class="site-surface rounded-2xl p-6">
  <!-- Translucent panel, card, or navigation surface -->
</div>
```

Keep spacing, sizing, rounding, and positioning at the call site. Remove competing background utilities when using these classes. These surfaces are intentionally dark; use white/slate text and lime accents rather than dark text. Nested elements with explicit colors retain those colors.

The backgrounds use CSS gradients without decorative markup, animation, pseudo-elements, overflow clipping, or added stacking contexts. The glass surface uses backdrop blur with a nearly opaque fallback background. Forced-colors mode uses system colors.

For a custom section, override `--site-bg-base`, `--site-bg-glow`, or `--site-bg-accent` on that element. Modifiers are used together with `site-background`.
