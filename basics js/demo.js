var nodemailer =require('nodemailer');



var transporter=nodemailer.createTransport({
    service:"gmail",
    port:465,
    secure: true,
    debug:true,
    logger:true,
    secureConnection: false,
    auth:{
        user:'prasannaprasanna14200@gmail.com',
        pass:'b1b2b3b4b5b6b7b8b9'
    }
});


var mailoptions={
    from:'prasannaprasanna14200@gmail.com',
    to:'harshithavarada2210@gmail.com',
    subject:'sending Email',
    text:'hii hello'
};


transporter.sendMail(mailoptions,function(error,info){
    if(error){
        console.log(error);

    }else{
        console.log('email sent :'+info.response)
    }
});


