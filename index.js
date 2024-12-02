let express=require("express");
const { url } = require("inspector");
let app= express();
let port=8080;
let path=require("path");

const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"public")));

let posts=[
    {   
         id: uuidv4(),
        username:"  OPERA",
        content:"24*7 AVAILABLE-all doctors are highly qualified",
        medicine:"a,b,c,d,",
        
    },
    {   
        id:uuidv4(),
        username:"AIMS",
        content:"EXCELLENT NEUROSURGEON ARE EASILY AVAILABLE-health is wealth",
        medicine:"e,f,g,h",
    },
    {   
        id:uuidv4(),
        username:"APOLO",
        content:"LUCKNOW-all highly designed machines for cityscan and traumacenters are availabel",
        medicine:"i,j,k,lZSA",
    }
];

  app.get("/posts/new",(req,res)=>{
     res.render("new");
 })

app.post("/posts",(req,res)=>{
    let{username,content,medicine}=req.body;
    let id=uuidv4();
    posts.push({id,username,content,medicine});
    res.redirect("/posts");
})

app.get("/posts",(req,res)=>{
    res.render("index",{posts});
   
})

app.get("/posts/:id",(req,res)=>{
    let{id}=req.params;
    let post=posts.find((p)=>id==p.id);
    res.render("show", {post});
})

app.listen(port,()=>{
    console.log(`listening port ${port}`);
})