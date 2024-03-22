import readline from 'readline';
import fs from "fs";
/**
 * 비동기 방식으로 사용자 입력을 받아서 반환하는 함수
 * @returns {Promise}
 */
const getInputLine = async () => {
    const readInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    return new Promise((resolve)=>{
        readInterface.on("line",(line) => {
            resolve(line);
            readInterface.close();
        }); 
    });
}
const makeConfig = async () => {
    console.log("* 오마이드로우-kit 기본 설정을 진행하시겠습니까?");
    console.log(" - 네/Yes : [y], 아니요/No : [n] 을 입력해 주세요.\x1b[37m");
    if (await getInputLine() !== "y") return

    console.log("<1> 전송 API에 사용될 환경변수 파일 생성");
    console.log("<1-1> 이메일 SMTP 서버 호스트 주소를 입력해주세요");
    console.log(" - 호스트 주소만 입력해 주세요 / 예) smtp.gmail.com");
    const emailHostAddress = await getInputLine();

    console.log("<1-2> 이메일 사용자 이름을 입력해주세요");
    const emailUsername = await getInputLine();


    console.log("<1-3> 이메일 사용자 암호를 입력해주세요");
    const emailUserPassword = await getInputLine();

    let envConfigString = `EMAIL_HOST='${emailHostAddress}'\n`;
    envConfigString += `EMAIL_USERNAME ='${emailUsername}'\n`;
    envConfigString += `EMAIL_PASSWORD ='${emailUserPassword}'`;
    fs.writeFileSync('./api/.env', envConfigString);
}
makeConfig();



