import './GiftForm.css'
const GiftForm = () => {
    return (
        <div className = "GiftForm">
            <p className = "gift_name_label">경품 이름</p>
            <input className = "gift_name_input" type = "text" placeholder = "경품 이름"></input>
            <p className = "gift_name_error_label" style = {{display : "none"}}></p>
            <p className = "gift_file_label" >경품 파일</p>
            <input className= "file_name"type = "text" placeholder = "파일 이름" disabled></input>
            <label for = "file">
                <div className = "file_upload_button">파일 업로드</div>
            </label>
            <input type = "file" id ="file"/>
            <p className = "gift_file_error_label" style = {{display : "none"}}></p>
        </div>
    );
}

export default GiftForm