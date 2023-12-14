const ParticipantForm = () => {
    return (
        <div className = "ParticipantForm">
            <p className = "name_label">이름</p>
            <input type = "text" placeholder = "이름"/>
            <p className = "name_error_label" style = {{display : "none"}}></p>
            <p className = "email_label">이메일</p>
            <input type = "text" placeholder = "이메일"/>  
            <p className = "email_error_label" style = {{display : "none"}}></p>
        </div>
    );
}

export default ParticipantForm;