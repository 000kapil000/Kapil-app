import React, {useContext, useState } from 'react'
import "./SideBar.css"
import { TbLayoutGridRemove } from "react-icons/tb";
import { FaList } from "react-icons/fa";
import { MyContext } from './MyContext';
import Forms from './Forms';

function SideBare() {
  const { text, setText } = useContext(MyContext);
  // const [show ,setShow]=useState(false)
  // const { text, setText } = useContext(MyContext);
    const [selectedButton, setSelectedButton] = useState('list');
  
    const handleClick = (buttonName) => {
      setSelectedButton(buttonName);
    setText(buttonName)
    }

    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleFormOpen = () => {
      setIsFormOpen(true);
    };
  
    const handleFormClose = () => {
      setIsFormOpen(false);
    };
  

 
  return (
    <div className='sidebar-main' >
    <div className='profile'>
        <h1>Hi Reader,</h1>
        <h4>Here'your News!</h4>
    </div>
 <div className="toggle-container">
 <h1 className='toggle-h'>View Toggle</h1>
      <button
        className={`toggle-button ${selectedButton === 'list' ? 'active' : ''}`}
        onClick={() => handleClick('list')}
      >
       <TbLayoutGridRemove />
      </button>
      <button
        className={`toggle-button ${selectedButton === 'grid' ? 'active' : ''}`}
        onClick={() => handleClick('grid')}
      >
     <FaList />
      </button>
    </div>

    <div className='feedback-form'>
    <h1 className='feedback-h'>Have a feedback</h1>
   <button className='feedback-btn' onClick={handleFormOpen}>We're Listening</button>
   {isFormOpen && <Forms onClose={handleFormClose} />}
    </div>
    </div>
  )
}

export default SideBare