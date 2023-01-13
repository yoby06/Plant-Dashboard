import React from 'react'
import './activity.css'

// Imported Icons
import {BsArrowRightShort} from 'react-icons/bs'

// Imported Images
import img4 from '../../../Assets/user2.jpg'
import mumtaz from '../../../Assets/mumtaz.png'
import dolunay from '../../../Assets/dolunay.png'


const Activity = () => {
  return (
    <div className = "activitySection ">
      <div className="heading flex">
        <h1> Resent Activity</h1>
        <button className="btn flex">
          See all 
          <BsArrowRightShort className="icon"/>
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={img4} alt="Customer Image"></img>
          <div className="customerDetails">
            <span className="name"> Yiğit Oğul Bayarlar</span>
            <small> Ordered a new plant </small>
          </div>
          <div className='duration'>
            2 min ago  
          </div>
        </div>
        <div className="singleCustomer flex">
          <img src={mumtaz} alt="Customer Image"></img>
          <div className="customerDetails">
            <span className="name"> Mumtaz Torunglu</span>
            <small> 5 min ago</small>
          </div>
          <div className='duration'>
            2 min ago  
          </div>
        </div>
        <div className="singleCustomer flex">
          <img src={dolunay} alt="Customer Image"></img>
          <div className="customerDetails">
            <span className="name"> Dolunay Sabuncuoglu</span>
            <small> Ordered a new plant </small>
          </div>
          <div className='duration'>
            8 min ago  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity