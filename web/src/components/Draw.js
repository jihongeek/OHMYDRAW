import "./Draw.css"
const Draw = ({drawData,doDraw}) => {
    return (
        <div className = "Draw">
            <p className = "send_gift_response_label" style ={{display : "none"}}>경품 발송
                <a style = {{fontWeight:"bold"}}>{}</a>
            </p>
            <div className = "winner_wrapper">
                <p className = "winner_name">{drawData.participantArray[drawData.nowWinnerId].name}</p>
                <p className = "win_label">당첨</p>
            </div>
            <div className = "button_wraper">
                <button className="redraw_button" onClick={ () => doDraw(true) }>다시 추첨</button>
                <button className="send_gift_button">경품 발송</button>
            </div>
        </div>
    );
}

export default Draw