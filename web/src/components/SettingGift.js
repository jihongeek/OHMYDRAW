import './SettingGift.css'
import GiftForm from "./GiftForm"
import { useState } from 'react'

const SettingGift = ({moveToPreviousStep,drawData}) => {
    const [giftDataArray,setGiftDataArray] = useState([...Array(drawData.winnerCount)].map(
        (_,index) => { return { id : index, giftName : "", giftFile : ""} }
    ));
    const onClickPreviousButton = () => {
        moveToPreviousStep();
    }
    return ( 
        <div className = "SettingGift">
            <p className="setting_label">추첨설정</p>
            <p className="step_label">경품 정하기</p>
            <div className = "form_wrapper">
                {
                    giftDataArray.map( (giftData,index) => {
                        return <GiftForm key={index}/>
                    })
                }
            </div>
            <div className ="button_wrapper">
                <button className = "previous_button" onClick = {onClickPreviousButton}>이전</button>
                <button className = "start_draw_button">추첨하기</button>
            </div>
        </div>
    );
}

export default SettingGift