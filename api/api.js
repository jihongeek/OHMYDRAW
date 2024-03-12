import {requestToSendEmail} from './email.js'
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({path : './api/.env'});
const { EMAIL_PASSWORD, EMAIL_USERNAME,EMAIL_HOST } = process.env;
const app = express();
const port = 3001;
const senderData = {
        host : EMAIL_HOST,
        port : 465,
        secure : true,
        auth : {
            user : EMAIL_USERNAME,
            pass : EMAIL_PASSWORD 

    }
}
app.use(express.json({limit: '2mb'}))
app.use(express.urlencoded({
  limit: '2mb',
  extended: false
}))
app.use(cors())
app.use(express.json());
app.post('/sent-gifts', (req,res) => {
    const message = {
        from: EMAIL_USERNAME,
        to: req.body['winnerEmail'],
        subject: `축하합니다! ${req.body['winnerName']}님 당첨되셨습니다!`,
        attachments : [{path : req.body['giftFile']}]
    }
    requestToSendEmail(senderData,message).then(()=>{
        res.status(201).send();
    })
    .catch((error)=>{
        console.log(error);
        res.status(400).send()
    })
    
});

app.listen(port, ()=> {
    console.log(`${port}포트에서 API 서버가 정상적으로 가동 중입니다.`);
})
