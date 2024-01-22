import './GiftForm.css'
const GiftForm = ({giftDataArray,errorData,setGiftData,nowIndex}) => {
    const errorMessages = {
        "name_wrong_character" : "경품명은 특수문자를 제외한 영한문자 그리고 숫자만 가능합니다.", 
        "no_file" : "파일을 업로드 해주세요",
        "invalid_file" : "1mb 이하의 jpg, png 파일만 업로드 가능합니다."
    }
    const onGiftFileChange = (e) => {
        setGiftData(giftDataArray.map((giftData,index)=>{
            if (index === nowIndex && e.target.files.length > 0)
                return {...giftData, giftFile : e.target.files[0]}
            return giftData
        }))
    }
    const onGiftNameChange = (e) => {
        setGiftData(giftDataArray.map( (giftData,index) => {
            if (index === nowIndex)
                return {...giftData, giftName : e.target.value}
            return giftData 
        }))
    }
    return (
        <div className = "GiftForm">
            <p className = "gift_name_label">경품 이름</p>
            <input 
                className = "gift_name_input" 
                type = "text" 
                placeholder = "경품 이름"
                defaultValue={giftDataArray[nowIndex].giftName}
                onChange={onGiftNameChange}      
                style={ errorData.nameErrorStatus !== "none" ? {borderColor : "#E63535"} : null }
            />
            {  errorData.nameErrorStatus !== "none" && <p className = "gift_name_error_label">{errorMessages[errorData.nameErrorStatus]}</p>}
            <p className = "gift_name_error_label" style = {{display : "none"}}></p>
            <p className = "gift_file_label" >경품 파일</p>
            <input 
                className= "file_name" 
                type = "text" 
                placeholder={giftDataArray[nowIndex].giftFile.name}
                style={ errorData.fileErrorStatus !== "none" ? {borderColor : "#E63535"} : null }
                disabled
            />
            <label htmlFor = "file">
                <div className = "file_upload_button">파일 업로드</div>
            </label>
            <input 
                type = "file" 
                id ="file" 
                accept="image/png, image/jpeg"
                onChange={onGiftFileChange}
            />
            {  errorData.fileErrorStatus !== "none" && <p className = "gift_file_error_label">{errorMessages[errorData.fileErrorStatus]}</p>}
        </div>
    );
}

export default GiftForm 