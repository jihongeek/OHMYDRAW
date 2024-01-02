import ParticipantForm from "./ParticipantForm";
import './SettingParticipant.css'
const SettingParticiant = ({moveToNextStep,moveToPreviousStep,drawData}) => {
    const formIndexArray = [...Array(drawData.participantCount)].map((x,index) => index);
    const onClickNextButton = () => { 
        moveToNextStep();
    }
    const onClickPreviousButton = () => {
        moveToPreviousStep();
    }
    return (
        <div className = "SettingParticipant">
            <p className="setting_label">추첨설정</p>
            <p className="step_label">참가인원 정보</p>
            <div className = "form_wrapper">
                {
                    formIndexArray.map((index) => {
                        return <ParticipantForm key={index}/>
                    })
                }
            </div>
            <div className ="button_wrapper">
                <button className = "previous_button" onClick = {onClickPreviousButton}>이전</button>
                <button className = "next_button" onClick = {onClickNextButton}>다음</button>
            </div>
        </div>
    );
}

export default SettingParticiant;