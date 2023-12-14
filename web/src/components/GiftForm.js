const GiftForm = () => {
    return (
        <div className = "GiftForm">
            <p className = "gift_name_label">경품 이름</p>
            <input type = "text" placeholder = "경품 이름"></input>
            <p className = "gift_name_error_label" style = {{display : "none"}}></p>
            <p className = "gift_file_label" >경품 파일</p>
            <input type = "file"/>
            <p className = "gift_file_error_label" style = {{display : "none"}}></p>
        </div>
    );
}

export default GiftForm