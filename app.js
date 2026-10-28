const zh=document.body.dataset.language==='zh';
const tr=(en,cn)=>zh?cn:en;
const $=s=>document.querySelector(s);
const papers=[...document.querySelectorAll('[data-paper]')];
let filter='all',expanded=false;
function renderPapers(){
 const query=$('#publication-search').value.trim().toLowerCase();
 const matches=p=>(filter==='all'||p.dataset.category===filter)&&(!query||p.dataset.search.includes(query));
 const published=papers.filter(p=>p.dataset.draft==='false'&&matches(p)),drafts=papers.filter(p=>p.dataset.draft==='true'&&matches(p));
 const unrestricted=filter==='all'&&!query,limit=unrestricted&&!expanded?6:Infinity;
 papers.forEach(p=>p.hidden=true);published.forEach((p,i)=>p.hidden=i>=limit);drafts.forEach(p=>p.hidden=false);
 $('#pub-count').textContent=tr(`${Math.min(published.length,limit)} of ${published.length} publications${drafts.length?` · ${drafts.length} manuscripts under revision`:''}`,`显示 ${Math.min(published.length,limit)} / ${published.length} 篇论文${drafts.length?` · ${drafts.length} 篇修回稿`:''}`);
 $('#no-results').hidden=published.length+drafts.length>0;$('#manuscripts').hidden=drafts.length===0;
 $('#show-more').hidden=!unrestricted||published.length<=6;$('#show-more').setAttribute('aria-expanded',String(expanded));
 $('#show-more').textContent=expanded?tr('Show selected publications ↑','收起为代表论文 ↑'):tr('View all 14 publications ↓','查看全部 14 篇论文 ↓');
 document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b.dataset.filter===filter);b.setAttribute('aria-pressed',String(b.dataset.filter===filter))});
}
$('#pub-controls').hidden=false;
$('#filters').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(b){filter=b.dataset.filter;renderPapers()}});
$('#publication-search').addEventListener('input',renderPapers);
$('#show-more').addEventListener('click',()=>{expanded=!expanded;renderPapers();if(!expanded)$('#publications').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})});
document.querySelectorAll('[data-reveal-paper]').forEach(a=>a.addEventListener('click',()=>{filter='all';expanded=true;$('#publication-search').value='';renderPapers()}));
const menu=$('.menu-toggle'),mobile=$('#mobile-nav');
function closeMenu(){menu.setAttribute('aria-expanded','false');mobile.hidden=true}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));mobile.hidden=open});
mobile.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!mobile.hidden){closeMenu();menu.focus()}});
let toastTimer;
$('#copy-email').addEventListener('click',async()=>{let message;try{await navigator.clipboard.writeText('jhgong@umich.edu');message=tr('Email address copied.','邮箱地址已复制。')}catch{message='jhgong@umich.edu'}$('#toast').textContent=message;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),3500)});
const languageLink=$('#language-switch');languageLink.addEventListener('click',()=>languageLink.hash=location.hash);
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)document.querySelectorAll('.desktop-nav a').forEach(a=>a.classList.toggle('active',a.hash===`#${entry.target.id}`))}),{rootMargin:'-15% 0px -65% 0px'});document.querySelectorAll('#research,#publications,#experience,#contact').forEach(s=>observer.observe(s))}
function revealFragment(){const target=papers.find(p=>'#'+p.id===location.hash);if(!target)return false;filter='all';expanded=true;$('#publication-search').value='';renderPapers();return true}
window.addEventListener('hashchange',()=>{const target=papers.find(p=>'#'+p.id===location.hash),wasHidden=target?.hidden;if(revealFragment()&&wasHidden)target.scrollIntoView()});
if(!revealFragment())renderPapers();
