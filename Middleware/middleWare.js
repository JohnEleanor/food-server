exports.keepLog = (req, res, next) => {
    const date_ = new Date();
    const data = {
      time: date_.toLocaleTimeString(),
      date: date_.toLocaleDateString(),
    };

  console.log('\x1b[31m Log : ', data.time + " | " + data.date + " | " + req.method + " | " + req.originalUrl+ " | "+ req.ip);  //cyan
  next();
};
