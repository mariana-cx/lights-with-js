import './App.css';
import { useState, useEffect } from 'react';
// import components 


export const App = () => {
  // Add logic here...
  const RED = "#3b0602"
  const GREEN = "#113b02"
  const YELLOW = "#ad8605"
  const [redLigth, setRedLight] = useState(RED)
  const [yellowLight, setYellowLight] = useState(YELLOW)
  const [greenLight, setGreenLight] = useState(GREEN)
  const [light, setLight] = useState("red");


  useEffect(() => {
    let intervalId;
    if (light === "red") {
      setRedLight("red")
      intervalId = setInterval(() => {
        setRedLight(RED)
        setLight("#3cd406")
      }, 7000)
    } else if (light === "#3cd406") {
      setGreenLight("#3cd406")
      intervalId = setInterval(() => {
        setGreenLight(GREEN)
        setLight("yellow")
      }, 5000)
    } else {
      setYellowLight('yellow')
      intervalId = setInterval(() => {
        setYellowLight(YELLOW);
        setLight('red')
      }, 2000)
    }
    return () => {
      clearInterval(intervalId)
    }
  }, [light])

  return (
    <div className="view">
      <div className='blackCable'></div>
      <div className='lightWrapper'>
        <div className='light' style={{ background: redLigth }}>
        </div>
        <div className='light' style={{ background: yellowLight }}>
        </div>
        <div className='light' style={{ background: greenLight }}>
        </div>
      </div>
    </div>
  );
}

