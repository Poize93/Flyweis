const express=require("express")
const mongo=require('./shared/connect')
const vendorRouter=require("./router/vendor")
const app=express();
app.use(express.json());
mongo.connect();

app.use("/",vendorRouter)


app.listen(process.env.PORT || 4200);