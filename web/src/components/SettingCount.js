import './SettingCount.css'

const SettingCount = ({moveToNextStep}) => {
    const onClickNextButton = () => {
        moveToNextStep();
    }
    return (
        <div className = "SettingCount">
            <p className="setting_label">추첨설정</p>
            <p className="step_label">인원 정하기</p>
            <div className="form_wrapper">
                <div className="participant_wrapper">
                    <p className="participant_label" >참가인원</p>
                    <input type="number"></input>
                    <p className="participant_error_label" style = {{display:"none"}}></p>
                </div>
                <div className="winner_wrapper">
                    <p className="winner_label"  >당첨자</p>
                    <input type="number"></input>
                    <p className="winner_error_label" style = {{display : "none"}}></p>
                </div>
            </div>
            <div className ="button_wrapper">
                <button className ="next_button" onClick={onClickNextButton}>다음</button>
            </div>
        </div>
    );
}

export default SettingCount;