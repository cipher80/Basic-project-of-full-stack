import express from "express";
const app = express();


app.use(express.static('dist')); 

// app.get('/',(req,res)=>{
//     res.send("Server is ready");
// })


const port = process.env.PORT || 3000;

// get a list of three jokes
app.get("/api/jokes",(req,res)=>{
    const jokes = [
        {
          id :1,
          title:"First joke ",
          content : "This is  First joke"
        },
        {
            id :2,
            title:"Second joke ",
            content : "This is Second joke"
        },
        {
            id :3,
            title:"Third joke ",
            content : "This is Third joke"
        },
    ]
    res.send(jokes);
})


app.listen(port,()=>{
    console.log(`server is running at port http://localhost:${port}`);
});
