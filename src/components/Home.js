import React from 'react'
import "./Home.css"
import SideBare from './SideBare'
import Main from './Main'
function Home() {
  return (
    <div className='container'>
<div className='left-side'>
<SideBare/>
</div>
<div className='right-side'>
<Main/>
</div>
    </div>
  )
}

export default Home