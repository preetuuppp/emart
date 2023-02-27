import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <>
     <div className='hero'>
     <div className="card bg-dark text-white border-0">
  <img src="https://staticg.sportskeeda.com/editor/2022/04/75bb8-16502068446536-1920.jpg" className="card-img" alt="banner" height="550px"/>
  <div className="card-img-overlay ">
    <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVAL </h5>
    <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
  
  </div>
</div>
      </div>
      <Products/>
    </>
   
  )
}

export default Home
