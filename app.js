const $=s=>document.querySelector(s),rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
$('#yr').textContent=new Date().getFullYear();
$('#mb').onclick=e=>e.target.setAttribute('aria-expanded',$('#lk').classList.toggle('o'));
document.querySelectorAll('form').forEach(f=>f.addEventListener('submit',async e=>{e.preventDefault();const s=f.querySelector('.st'),b=f.querySelector('button');s.className='st';
const bad=[...f.querySelectorAll('[required]')].find(i=>i.type==='checkbox'?!i.checked:!i.value.trim());
if(bad){s.classList.add('err');s.textContent='Complete all required fields and accept the consent box.';bad.focus();return}
const em=f.querySelector('[type=email]');if(!/^\S+@\S+\.\S+$/.test(em.value)){s.classList.add('err');s.textContent='Enter a valid email address.';em.focus();return}
const d={type:f.dataset.type,website:f.website.value,fields:{}};f.querySelectorAll('input:not(.hp):not([type=checkbox]),select,textarea').forEach(i=>d.fields[i.name]=i.value);
b.disabled=true;s.textContent='Sending...';
try{const r=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(d)});
if(!r.ok)throw 0;s.classList.add('ok');s.textContent='Message sent. We will reply to the email you provided.';f.reset()}
catch{s.classList.add('err');s.textContent='Sending failed. Please email shahiqealikazmi@gmail.com directly.'}b.disabled=false}));
const cv=$('#bg'),cx=cv.getContext('2d');let W,H,N=[],mx=0,my=0;
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight;N=Array.from({length:Math.min(70,W*H/24000|0)},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,z:Math.random()*.8+.2}))}
function dr(){cx.clearRect(0,0,W,H);const ox=(mx-W/2)*.02,oy=(my-H/2)*.02;N.forEach(a=>{a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>W)a.vx*=-1;if(a.y<0||a.y>H)a.vy*=-1});
N.forEach((a,i)=>{const ax=a.x+ox*a.z,ay=a.y+oy*a.z;for(let j=i+1;j<N.length;j++){const b=N[j],bx=b.x+ox*b.z,by=b.y+oy*b.z,d=Math.hypot(ax-bx,ay-by);if(d<150){cx.strokeStyle=`rgba(0,191,255,${(1-d/150)*.25})`;cx.beginPath();cx.moveTo(ax,ay);cx.lineTo(bx,by);cx.stroke()}}
cx.fillStyle=i%3?'rgba(0,229,255,.8)':'rgba(116,59,255,.9)';cx.beginPath();cx.arc(ax,ay,1.5+a.z,0,7);cx.fill()})}
rs();addEventListener('resize',rs);dr();if(!rm){addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY});(function l(){dr();requestAnimationFrame(l)})()}
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>{$('#lk').classList.remove('o');$('#mb').setAttribute('aria-expanded','false')}));
