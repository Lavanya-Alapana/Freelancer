const express=require('express');
const app=express();
const mongoose=require('mongoose');
const devServer=require('./devusermodel');
const jwt=require('jsonwebtoken');
const middleware=require('./middleware');
const cors=require('cors');
const review=require('./reviewmodel');
mongoose.connect('mongodb+srv://Lavanya:lavanya*123@cluster0.xcdrg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
).then(
    ()=>console.log('DB connected successfully')
).catch(err => console.error('DB connection error:', err));

app.use(express.json()); 
app.use(cors({origin:'*'}));
app.get('/',(req,res)=>{
    res.send('hello get request')
})

app.post('/register',async(req,res)=>{
    try{
        const{fullname,email,mobile,skill,password,confirmPassword}=req.body;
        const exist=await devServer.findOne({email});
        if(exist)
        {
            return res.status(400).send('User already regisered');
        }
        if(password!=confirmPassword)
        {
            return res.status(403).send('Password does not match');
        }
        let newUser=new devServer({
            fullname,email,mobile,skill,password,confirmPassword

        })
        newUser.save();
        return res.status(200).send('User Registered');
    }
    catch{
        console.log('error');
        return res.status(500).send('Server Error')
    }
})


app.post('/login',async(req,res)=>
{
    try{
        const{email,password}=req.body;
        const exist=await devServer.findOne({email});
        if(!exist)
        {
            return res.status(400).send("user not exist");
        }
        if(exist.password!=password)
        {
            return res.status(400).send('Password Invalid');
        }
        let payload={
            user:{
                id:exist.id
            }

        }
        jwt.sign(payload,'jwtPassword',{expiresIn:3600000000},(err,token)=>{
            if(err) throw err
            return res.json({token});
        })

    }
    catch(err)
    {
        console.log(err);
        return res.status(500).send('Server error');
    }
})

app.get('/allprofiles',middleware,async(req,res)=>{
    try{
        let allprofile=await devServer.find();
        return res.json(allprofile);
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).send('Server Error')
    }
})

app.get('/myprofile',middleware,async(req,res)=>{
    try{
        let user=await devServer.findById(req.user.id);
        return res.json(user);
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).send('Server Error')
    }
    
})

app.post('/addreview',middleware,async(req,res)=>{
    try{
        const{taskworker,rating}=req.body;
        const exist=await devServer.findById(req.user.id);
        const newReview=new review({
            taskprovider:exist.fullname,
            taskworker,rating
        })
        newReview.save();
        return res.status(200).send('Review updated suucessfully');
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).send('Server Error')
    }
})

app.get('/myreview',middleware,async(req,res)=>{
    try{
        let allreviews=await review.find();
        let myreviews=allreviews.filter(review=>review.taskworker.toString()=== req.user.id.toString());
        return res.status(200).json(myreviews);
    }
     catch(err)
    {
        console.log(err);
        return res.status(500).send('Server Error')
    }
    
})
app.listen(5000,()=>console.log('server starting..'))