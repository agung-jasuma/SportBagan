const crypto=require('crypto');const {mint,h256}=require('./_lib');
module.exports=async(req,res)=>{res.setHeader('Cache-Control','no-store');
 if(req.method!=='POST')return res.status(405).json({error:'method'});
 const b=typeof req.body==='string'?JSON.parse(req.body||'{}'):(req.body||{});const pass=process.env.ADMIN_PASSWORD||'';
 if(pass.length>=6&&crypto.timingSafeEqual(h256(String(b.password||'')),h256(pass)))return res.status(200).json({token:mint()});
 await new Promise(r=>setTimeout(r,1000));res.status(401).json({error:'wrong'})};
