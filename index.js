import express from "express";
import qrcode from "qrcode";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public")); 



app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.post("/scan",(req,res)=>{
    const url = req.body.url;
    if (url.length === 0) res.send("error");
    qrcode.toDataURL(url,(err,src)=>{
        if(err) res.send("error");
        res.render("scan",{src});
    });
});

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
  });
  