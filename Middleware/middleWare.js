function keepLog(req, res, next) {
    const date_ = new Date();
    const data = {
      time: date_.toLocaleTimeString(),
      date: date_.toLocaleDateString(),
    };


    /**
     * * ตรวจสอบเมธอด GET เเละ URL ที่เข้ามา
     * * หากไม่มี userId ให้ส่ง status 400 กลับไป
     */
    if (req.method === "GET") {
      if (req.originalUrl === "/api/auth/login") {
        if (!req.body.userId){
          res.status(400).json({status: "fail",message: "Data is not complete GG"});
          return;
        }
      }
    }else if (req.method === "POST") {
      if (req.originalUrl === "/api/auth/register") {
        // const { userId, info, target } = req.body;
        // if (!userId || !info || !target) {
        //   res.status(400).json({status: "fail",message: "Data is not complete"});
        //   return;
        // }
      }
    }


  console.log('\x1b[31m Log : ', data.time + " | " + data.date + " | " + req.method + " | " + req.originalUrl);  //cyan
  next();
};


module.exports = { keepLog };