import {requestToSendEmail} from './email.js'
import express from 'express';
import cors from 'cors';
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
app.use(express.json())
app.use(cors())
app.post('/sent-gifts', (req,res) => {
    console.log(req.body);
    const message = {
        from: EMAIL_USERNAME,
        to: req.body['winnerEmail'],
        subject: `축하합니다! ${req.body['winnerName']}님 당첨되셨습니다!`,
        attachments : [{path : req.body['giftFile']}]
    }
    if (requestToSendEmail(senderData,message))
    {
        res.status(201).send();
    }
    else
    {
        res.status(400).send();
    }
});

app.listen(port, ()=> {
    console.log(`${port}에서 돌아가는 앱`);
})