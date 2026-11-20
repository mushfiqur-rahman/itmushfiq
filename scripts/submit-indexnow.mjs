import { readFile } from 'node:fs/promises';
const config=JSON.parse(await readFile(new URL('./indexnow-key.json',import.meta.url),'utf8'));
const {host,key}=config;
const base=`https://${host}`;
const keyLocation=`${base}/${key}.txt`;
const keyResponse=await fetch(keyLocation);
if(!keyResponse.ok || (await keyResponse.text()).trim()!==key) throw new Error('Deploy the build first: public IndexNow key is not yet verifiable. No submission sent.');
const sitemapIndex=await fetch(`${base}/sitemap.xml`);
if(!sitemapIndex.ok) throw new Error('Cannot retrieve live sitemap index');
const locations=xml=>[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1].replaceAll('&amp;','&'));
const sitemapXml=await sitemapIndex.text();
const isIndex=/<sitemapindex[\s>]/.test(sitemapXml);
const sitemapUrls=isIndex?locations(sitemapXml):[];
const urlList=isIndex?[]:locations(sitemapXml);
for(const url of sitemapUrls){
 if(new URL(url).origin!==base) throw new Error('Unexpected sitemap origin');
 const response=await fetch(url);if(!response.ok) throw new Error(`Cannot retrieve ${url}`);
 urlList.push(...locations(await response.text()));
}
if(!urlList.length || urlList.some(u=>new URL(u).origin!==base)) throw new Error('Empty sitemap or unexpected URL origin');
if(!process.argv.includes('--submit')){console.log(JSON.stringify({mode:'preview',keyLocation,urlList},null,2));process.exit(0);}
const response=await fetch('https://api.indexnow.org/indexnow',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({host,key,keyLocation,urlList})});
console.log(JSON.stringify({status:response.status,submitted:urlList.length,message:await response.text()}));
if(![200,202].includes(response.status)) process.exitCode=1;
