

exports.keepLog = (req, res, next) => {
    const user = req.user ? req.user.username : 'Guest';
    const date_ = new Date();
    const data = {
        time: date_.toLocaleTimeString(),
        date: date_.toLocaleDateString(),
    };
//   console.log();
  console.log('\x1b[31m Log : ', data.time + " | " + data.date + " | " + req.method + " | " + req.originalUrl+ " | "+user);  //cyan
  next();
};
