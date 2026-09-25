import React from 'react'
// import Navbar from './Home/Navbar'
// import Hero from './Home/Hero'
import { Routes, Route } from 'react-router-dom';
import Boys from './Home/boys '
import Men from'./Home/Men'
import NewArrivals from './Home/NewArrivals'
import Collections from './Home/Collections'
import Sale from './Home/Sale'
// import CategoryBar from './Home/CategoryBar';
import Home from './Home';

const App = () => {
  return (
    <div>

         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/men' element={<Men/>}/>
          <Route path='/boys' element={<Boys/>}/>
          <Route path='/newarrivals' element={<NewArrivals/>}/>
          <Route path='/collections' element={<Collections/>}/>
          <Route path='/sale' element={<Sale/>}/>

         </Routes>
         
    </div>
  )
}

export default App