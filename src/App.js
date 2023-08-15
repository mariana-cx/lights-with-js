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


  useEffect(() => {

    setTimeout(() => {
      setRedLight("red");

      setTimeout(() => {
        setRedLight(RED);
        setGreenLight("#3cd406");

        setTimeout(() => {
          setGreenLight(GREEN);
          setYellowLight("yellow");

          setTimeout(() => {
            setYellowLight(YELLOW);

          }, 3000);

        }, 4000);

      }, 4000);

    }, 11000);

  }, [])

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

