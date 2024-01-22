import './SettingGift.css'
import GiftForm from "./GiftForm"
import { useState } from 'react'

const SettingGift = ({moveToPreviousStep,drawData}) => {
    const [giftDataArray,setGiftData] = useState([...Array(drawData.winnerCount)].map(
        (_,index) => { return { id : index, giftName : "", giftFile : new File([],"파일 이름")} }
    ));
    const [errorDataArray,setErrorData] = useState(giftDataArray.map(x => { return {nameErrorStatus : "none", fileErrorStatus : "none"}}));    
    
    const maxNonNamePartLength = 4;
    const isValidImageFilename = (filename) => {
        const filenameValidationRegex = /\.JPG$|\.jpg$|\.jpeg$|\.JPEG$|\.png$|\.PNG$/
        if (filename.length < maxNonNamePartLength)
        {
            return false;
        }
        if (filenameValidationRegex.test(filename) === false)
        {
            return false;
        }
        return true;
    }
    const onClickPreviousButton = () => {
        moveToPreviousStep();
    }
    const onClickDrawButton = () => {
        const nameValidationRegex = /^([a-zA-Zㄱ-ㅎ가-힣 0-9]{1,})$/;
        setErrorData(errorDataArray.map((errorData, index)=> {
            let isErrorOccured = false;
            let errorDataToUpdate = {
                nameErrorStatus : "none",
                fileErrorStatus : "none"
            }
            if (nameValidationRegex.test(giftDataArray[index].giftName) === false)
            {
                isErrorOccured = true;
                errorDataToUpdate.nameErrorStatus = "name_wrong_character";
            }
            if (isValidImageFilename(giftDataArray[index].giftFile.name) === false)
            {
                isErrorOccured = true;
                errorDataToUpdate.fileErrorStatus = "invalid_file";
            }
            if (giftDataArray[index].giftFile.size > 1000000)
            {
                isErrorOccured = true;
                errorDataToUpdate.fileErrorStatus = "invalid_file";
            }
            if (giftDataArray[index].giftFile.size === 0 && giftDataArray[index].giftFile.name === "파일 이름")
            {
                isErrorOccured = true;
                errorDataToUpdate.fileErrorStatus = "no_file";
            }
            if (isErrorOccured === true) 
            {
                return errorDataToUpdate
            }
            return {fileErrorStatus : "none" ,nameErrorStatus : "none"}
        
        }))
        
    }
    return ( 
        <div className = "SettingGift">
            <p className="setting_label">추첨설정</p>
            <p className="step_label">경품 정하기</p>
            <div className = "form_wrapper">
                {
                    giftDataArray.map( (giftData,index) => {
                        return <GiftForm 
                            key={index}
                            giftDataArray = {giftDataArray}
                            setGiftData = {setGiftData}
                            nowIndex = {giftData.id}
                            errorData={errorDataArray[index]}
                        />
                    })
                }
            </div>
            <div className ="button_wrapper">
                <button className = "previous_button" onClick = {onClickPreviousButton}>이전</button>
                <button className = "start_draw_button" onClick={onClickDrawButton}>추첨하기</button>
            </div>
        </div>
    );
}

export default SettingGift