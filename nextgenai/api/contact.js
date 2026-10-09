const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
module.exports=async(req,res)=>{
if(req.method!=='POST')return res.status(405).json({error:'Method not allowed'});
const b=req.body||{};if(b.website)return res.status(200).json({ok:true});
const f=b.fields||{},email=String(f.Email||'').slice(0,200);
if(!f.Name||!f.Message||!/^\S+@\S+\.\S+$/.test(email))return res.status(400).json({error:'Invalid input'});
const key=process.env.RESEND_API_KEY;if(!key)return res.status(500).json({error:'Mail service not configured'});
const rows=Object.entries(f).slice(0,10).map(([k,v])=>`<p><b>${esc(k)}:</b> ${esc(String(v).slice(0,3000))}</p>`).join('');
const r=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:'Bearer '+key,'Content-Type':'application/json'},
body:JSON.stringify({from:process.env.MAIL_FROM||'NextGenAI <onboarding@resend.dev>',to:[process.env.CONTACT_TO||'shahiqealikazmi@gmail.com'],reply_to:email,subject:'NextGenAI '+esc(b.type||'inquiry'),html:rows})});
return r.ok?res.status(200).json({ok:true}):res.status(502).json({error:'Send failed'})};
