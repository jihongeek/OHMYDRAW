import ParticipantForm from "./ParticipantForm";
import './SettingParticipant.css'
const SettingParticiant = () => {
    const mockProps = [undefined,undefined,undefined,undefined,undefined,undefined];
    return (
        <div className = "SettingParticipant">
            <p className="setting_label">추첨설정</p>
            <p className="step_label">참가인원 정보</p>
            <div className = "form_wrapper">
                {
                    mockProps.map( () => {
                        return <ParticipantForm/>
                    })
                }
            </div>
            <div className ="button_wrapper">
                <button className = "previous_button">이전</button>
                <button className = "next_button">다음</button>
            </div>
        </div>
    );
}

export default SettingParticiant;