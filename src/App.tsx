import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Loading } from './component/common';
import './style';
import SignUp from './component/form/SignUp';


let loadingBtnStyle = {
  width: "100px",
  zIndex: "99999999",
  position: 'fixed',
  top: 0,
  right: 0,
  background: "none",
  color: "inherit",
  // border: "none",
  // padding: 0,
  fontFamily: "inherit", // changed from font to fontFamily
  cursor: "pointer",
  outline: "inherit",
  border: "1px solid lighblue",
  borderRadius: '5px',
  padding: '5px'
} as React.CSSProperties;


function App() {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])



  return (
    <div className="App">
      {/* <Loading state={state} /> */}
      <Loading status={isLoading ? 'loading' : 'ready'} />
      <button
        onClick={() => {
          setIsLoading(!isLoading)
        }}
        style={{ ...loadingBtnStyle }}
      >
        Loading {isLoading ? "off" : "on "}
      </button>




      <button
        onClick={() => {
          console.log("Testing222")
        }}
      >
        testing2
      </button>




      <SignUp />


    </div>
  );
}

export default App;
