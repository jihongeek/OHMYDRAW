import './ParticipantForm.css'
const ParticipantForm = ({nowIndex,errorData,setParticipantData,participantDataArray}) => {
    const errorMessages = {
        "name_wrong_character" : "이름은 특수문자를 제외한 영한문자 그리고 숫자만 가능합니다.", 
        "email_invalid" : "올바르지 않은 이메일 형식입니다."
    }
    const onNameInputChange = (e) => {
        setParticipantData(participantDataArray.map(
            (participantData,index) => {
                return index === nowIndex ? {...participantData, name : e.target.value} : participantData
            }
        ))
    }
    const onEmailInputChange = (e) => {
        setParticipantData(participantDataArray.map(
            (participantData,index) => {
                return index === nowIndex ? {...participantData, email : e.target.value} : participantData
            }
        ))
    }
    return (
        <div className = "ParticipantForm">
            <p className = "name_label">이름</p>
            <input 
                className = "name_input" 
                type = "text" 
                placeholder = "이름" 
                defaultValue={participantDataArray[nowIndex].name}
                onChange={onNameInputChange}
                style={ errorData.nameErrorStatus !== "none" ? {borderColor : "#E63535"} : null }
            />
            {  errorData.nameErrorStatus !== "none" && <p className = "name_error_label">{errorMessages[errorData.nameErrorStatus]}</p>}
            <p className = "email_label">이메일</p>
            <input 
                className = "email_input" 
                type = "text" 
                placeholder = "이메일" 
                defaultValue={participantDataArray[nowIndex].email}
                onChange={onEmailInputChange}
                style={ errorData.emailErrorStatus !== "none" ? {borderColor : "#E63535"} : null }
            />  
            {  errorData.emailErrorStatus !== "none" && <p className = "email_error_label">{errorMessages[errorData.emailErrorStatus]}</p>}
        </div>
    );
}

export default ParticipantForm;