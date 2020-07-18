//import React, {useRef, useEffect} from 'react';
import useWebAnimations, {hinge} from "@wellyshen/use-web-animations";
import './App.css';


function App() {
  //const element = useRef(null);
  const { ref, playState, getAnimation } = useWebAnimations({...hinge});
    



  return (
    <div >
        <div className="target" ref={ref}>
           
        </div>
        current animation state:{playState}
        <button onClick={()=> getAnimation().pause()}>Pause</button>
        <button onClick={()=> getAnimation().play()}>Play</button>
    </div>
  );
}

export default App;
