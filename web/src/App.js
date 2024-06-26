import './App.css';
import SettingCount from './components/SettingCount';
import SettingParticipant from './components/SettingParticipant';
import SettingGift from './components/SettingGift'
import Draw from './components/Draw'
import logo from './img/logo.svg'
import {useState} from 'react'
function App() {
  const [stepIndex,setStepIndex] = useState(0);
  const [drawData,setDrawData] = useState({
    participantCount : 0,
    winnerCount : 0,
    nowRound : -1,
    nowWinnerId : -1,
    pickedIndex : -1,
    participantArray : [],
    giftArray : []
});
  const moveToNextStep = () => {
    setStepIndex(stepIndex+1);  
  }
  const moveToPreviousStep = () => {
    setStepIndex(stepIndex-1);  
  }
  const pickParticipantIndex = (participantCount) => {
      return Math.floor(Math.random() * (participantCount - 0)) + 0
  }
  /**
   *당첨자 추첨 함수
   * @param {boolean} isRedraw 
   * @param {Array} participantCount 
   */
  const doDraw = (isRedraw,participantArray = drawData.participantArray) => {
    const nextRound = isRedraw === false ? drawData.nowRound + 1 : drawData.nowRound 
    const pickedIndex = pickParticipantIndex(participantArray.length); 
    setDrawData({
        ...drawData,
        nowRound : nextRound,
        nowWinnerId  : participantArray[pickedIndex].id,
        pickedIndex : pickedIndex
    })
     
  }
  return (
    <div className="App">
      <img src={logo} height="241px" width="468px" alt = "오마이드로우 로고"/>
      {
        {
          0 : <SettingCount 
                moveToNextStep={moveToNextStep}
                drawData={drawData}
                setDrawData={setDrawData}
              />,
          1 : <SettingParticipant 
                moveToNextStep={moveToNextStep} 
                moveToPreviousStep={moveToPreviousStep}
                drawData={drawData}
                setDrawData={setDrawData} 
              />,
          2 : <SettingGift 
                moveToPreviousStep={moveToPreviousStep}
                moveToNextStep = {moveToNextStep}
                drawData={drawData}
                doDraw={doDraw}
                setDrawData={setDrawData}
              />,
          3 : <Draw
                drawData={drawData}
                doDraw={doDraw}
                setDrawData={setDrawData}
              />
        }[stepIndex]
      }
    </div>
  );
}

export default App;
