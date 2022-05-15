var express=require("express")
const router=express.Router();
var  vendorModule=require("../module/vendor");

//vendor details
router.get("/",vendorModule.getvendors)
router.get("/:id",vendorModule.getvendor)
router.post("/create",vendorModule.createvendor)

// //artist
router.post("/createArtist",vendorModule.createartist)
router.get("/artist/:id",vendorModule.getartist)



// /////company details
router.get("/aboutus",vendorModule.aboutus) //
router.post("/createdetails",vendorModule.createAboutUs) //

// /// creating and fetching Blog  
router.get("/getblog",vendorModule.getBlog)
router.post("/createblog",vendorModule.createBlog)






module.exports=router;