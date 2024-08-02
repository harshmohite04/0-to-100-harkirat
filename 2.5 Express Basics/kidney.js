const express = require("express");

const app = express();

const patients = [
  {
    userName: "Roy",
    kidneys: [{ healthy: false }],
  },
];

app.use(express.json());

app.get("/", (req, res) => {
  const userKidneys = patients[0].kidneys;
  const totalNoKidneys = userKidneys.length;
  let noOfHealthyKidneys = 0;

  for (let i = 0; i < userKidneys.length; i++) {
    if (userKidneys[i].healthy) {
      noOfHealthyKidneys++;
    }
  }

  const noOfUnhealthyKidneys = totalNoKidneys - noOfHealthyKidneys;

  res.json({ totalNoKidneys, noOfHealthyKidneys, noOfUnhealthyKidneys }); 
});


app.post('/',(req,res)=>{
  const isHealthy = req.body.isHealthy;
  patients[0].kidneys.push({
    healthy:isHealthy
  })
  res.json({
    msg:"Done!"
  })
})


app.put('/',(req,res)=>{
  for(let i=0;i<patients[0].kidneys.length;i++){
    patients[0].kidneys[i].healthy=true;
  }
  res.json({})
})

//remove unHealthy Kidney
app.delete('/',(req,res)=>{
  const newKidney=[]
  for(let i=0;i<patients[0].kidneys.length;i++){
    if(patients[0].kidneys[i].healthy){
      newKidney.push({
        healthy:true
      })
    }
  }
  patients[0].kidneys=newKidney

  res.json({})
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
