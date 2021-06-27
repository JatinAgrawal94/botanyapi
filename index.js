const express=require('express');
const app=express();
const cors=require('cors');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
dotenv.config();
const Encyclopedia=require('./model');
const port=process.env.PORT || 5000;
const mongodb_url=process.env.MONGODB_URL;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
mongoose.connect(mongodb_url , {useNewUrlParser: true, useUnifiedTopology: true});

app.get('/',(req,res)=>{
    res.send("welcome to botany");
})

app.get('/botany/encyclopedia',async(req,res)=>{
    var data=await Encyclopedia.find({});
    if(data!=null){
        console.log(data);
        res.send(data);
    }else{
        res.send("Error Loadigng Data");
    }
})

app.post('/botany/add',async(req,res)=>{
    var result=await Encyclopedia({Name:"Jatin Agrawal",
    alternateName:"Love-lies-bleeding",
    sowInstructions:"Sow in garden. Sow seed at a depth approximately three times the diame...",
    spaceInstructions:"Space plants: 20 inches apart",
    harvestInstructions:"Harvest in 7-8 weeks.",
    compatiblePlants:"Compatible with (can grow beside): Onions, corn, peppers, egg plant, t...",
    avoidInstructions:"",
    culinaryHints:"Both leaves and seeds can be used. Excessive intake is not recommended...",
    culinaryPreservation:"",
    url:"http://gardenate.com/plant/Amaranth"});
    result.save();
    res.send("data saved");
})

app.listen(port,()=>{
    console.log(`Server is listening at ${port}`)
})