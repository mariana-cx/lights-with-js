import './App.css';
// import components 


export const App = () => {
  // Add logic here...
  return (
    <div className="view">
      <div className='blackCable'></div>
      <div className='lightWrapper'>
        <div className='light' style={{ background: "#3b0602" }}>
        </div>
        <div className='light' style={{ background: "#ad8605" }}>
        </div>
        <div className='light' style={{ background: "#1b5c04" }}>
        </div>
      </div>
    </div>
  );
}

