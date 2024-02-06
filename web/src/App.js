import './App.css';
import SettingCount from './components/SettingCount';
import SettingParticipant from './components/SettingParticipant';
import SettingGift from './components/SettingGift'
import Draw from './components/Draw'

import {useState} from 'react'
function App() {
  const [stepIndex,setStepIndex] = useState(0);
  const [drawData,setDrawData] = useState({
    participantCount : 0,
    winnerCount : 0,
    nowRound : -1,
    nowWinnerId : -1,
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
  const doDraw = (isRedraw) => {
    const nextRound = isRedraw === false ? drawData.nowRound + 1 : drawData.nowRound 
    setDrawData({
        ...drawData,
        nowRound : nextRound,
        nowWinnerId  : pickParticipantIndex(drawData.participantCount)
    })
  }
  return (
    <div className="App">
      <h1 className="main_label">행운의 추첨</h1>
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
              />
        }[stepIndex]
      }
    </div>
  );
}

export default App;
