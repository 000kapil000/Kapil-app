import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { MyContext } from './components/MyContext';
import { useContext, useState } from 'react';
function App() {
  // const { text, setText } = useContext(MyContext);

  const [text, setText] = useState("");
 
  return (
    <div className="App">
      <MyContext.Provider value={{ text, setText }}>

     <Home/>
      </MyContext.Provider>


    </div>
  );
}

export default App;
