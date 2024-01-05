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
    participantArray : [],
    giftArray : []
});
  const moveToNextStep = () => {
    setStepIndex(stepIndex+1);  
  }
  const moveToPreviousStep = () => {
    setStepIndex(stepIndex-1);  
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
          2 : <SettingGift moveToPreviousStep={moveToPreviousStep}/>,
          3 : <Draw/>
        }[stepIndex]
      }
    </div>
  );
}

export default App;
