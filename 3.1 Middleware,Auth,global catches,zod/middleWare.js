const express = require("express");

const app = express();

app.use(avgTime);

let noOfReq = 0;

function avgTime(req,res,next){
    const start=Date.now();

    res.on('finish',()=>{
        const duration = Date.now()-start
        console.log(duration)
    })
    next()
}

function middle(req, res, next) {
  noOfReq++;
  console.log(noOfReq);
  next();
}
app.get("/health-checkup", middle, (req, res) => {
  const kidneyNo = req.query.kidneyNo;
  const username = req.query.username;
  const password = req.query.password;

  if (username === "harsh" && password === "pass") {
    res.status(403).json({
      msg: "invalid username",
    });
    return;
  }

  if (kidneyNo != 1 && kidneyNo != 2) {
    res.status(403).json({
      msg: "invalid input",
    });
    return;
  }

  res.send("gg");
});

app.listen(3000);
