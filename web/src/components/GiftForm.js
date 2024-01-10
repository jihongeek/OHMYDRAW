import './GiftForm.css'
const GiftForm = ({giftDataArray,setGiftData,nowIndex}) => {
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
            />
            <p className = "gift_name_error_label" style = {{display : "none"}}></p>
            <p className = "gift_file_label" >경품 파일</p>
            <input 
                className= "file_name" 
                type = "text" 
                placeholder={giftDataArray[nowIndex].giftFile.name}
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
            <p className = "gift_file_error_label" style = {{display : "none"}}></p>
        </div>
    );
}

export default GiftForm 