import nodemailer from 'nodemailer'

// 매개변수에 대해 더 생각해봐야 할 듯
function requestToSendEmail(senderData,message) {
    let transporter = nodemailer.createTransport(senderData);
    transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        transporter.sendMail(message);    
    }
    });
    return true;
}

export {requestToSendEmail};