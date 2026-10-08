const {isAdmin,redis}=require('./_lib');
module.exports=async(req,res)=>{res.setHeader('Cache-Control','no-store');
 try{
  if(req.method==='GET'){const a=isAdmin(req),raw=await redis(['GET','bagan_state']),db=raw?JSON.parse(raw):null;
   return res.status(200).json({admin:a,version:db?db.version:0,state:db?(a?db.state:{...db.state,hook:''}):null})}
  if(req.method==='PUT'){if(!isAdmin(req))return res.status(401).json({error:'unauthorized'});
   const st=typeof req.body==='string'?JSON.parse(req.body):req.body;if(!st||!Array.isArray(st.sports))return res.status(400).json({error:'bad'});
   const version=Date.now();await redis(['SET','bagan_state',JSON.stringify({version,state:st})]);return res.status(200).json({version})}
  res.status(405).json({error:'method'})
 }catch(e){res.status(500).json({error:'server'})}};
