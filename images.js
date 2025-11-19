const express=require("express");
const multer=require("multer");
const path=require("path");
const router=express.Router();

const storage = multer.diskStorage({
  destination: (req,file,cb)=>cb(null,"public/uploads"),
  filename: (req,file,cb)=>cb(null,"hero.jpg")
});
const upload = multer({storage});

router.post("/upload-hero", upload.single("image"), (req,res)=>{
  res.json({success:true, url:"/public/uploads/hero.jpg"});
});
module.exports=router;