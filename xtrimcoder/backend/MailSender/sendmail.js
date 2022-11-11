module.exports=function(){
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'info.xtrimcoder@gmail.com',
    pass: 'hhzhtswqenmnmmcw'
  }
});


var mailOptions = {
  from: 'info.xtrimcoder@gmail.com',
  to: 'parmarsinghbhan@gmail.com',
  subject: 'OTP',
  text: `Thank`
  // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'        
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    res.json("4512");
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}