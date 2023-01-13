import React from 'react'
import './top.css'

// Imported Icons
import {BiSearchAlt} from 'react-icons/bi'
import {FiMessageCircle} from 'react-icons/fi'
import {IoMdNotifications} from 'react-icons/io'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsQuestionCircle} from 'react-icons/bs'



// Imported Images =============>
import img from '../../../Assets/user.jpg'
import img2 from '../../../Assets/wing.png'
import video from '../../../Assets/video.mp4'

const Top = () => {
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <h1> Welcome to Planti.</h1>
          <p> Hello Yigit , welcome back! </p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder='Search Dashboard' />
          <BiSearchAlt className ="icon"/>
        </div>

        <div className="adminDiv flex">
          <FiMessageCircle className="icon"/>
          <IoMdNotifications className="icon"/>

          <div className="adminImage">
            <img src={img} alt="Admin Image" />
          </div>

       </div>
      </div>

      <div className="cardSection flex">

        <div className="rightCard flex">
            <h1> Create and sell extraordinary products</h1>
            <p> The world's fast growing industry today are natural made products!</p>
            
            <div className='buttons flex'>
                <button className='btn'>Explore More </button>
                <button className="btn transparent">  Top Sellers</button>
            </div>

            <div className="videoDiv">
              <video src={video} autoPlay loop muted></video>
            </div>
        </div>
        

      <div className="leftCard flex">
        <div className="main flex">

          <div className="textDiv">
            <h1> My Stat </h1>

            <div className="flex">
              <span> 
                Today <br/> <small> 4 Orders</small>
              </span>
              <span> 
                This Month <br/> <small> 127 Orders</small>
              </span>
            </div>

            <span className="flex link">
              Go to my Orders <BsArrowRightShort className="icon"/>
            </span>


           </div>

          <div className="imgDiv">
            <img src={img2} alt='Image Name'/> 
          </div>



          


          </div>

          <div className='sideBarCard'>
            <BsQuestionCircle className="icon"/>
            <div className="cardContent">
              <div className="cirlce1"></div>
              <div className="circle2"></div>

              <h3> Help Center </h3>
              <p> Having trouble in Planti , please contact us from for more question. </p>
              <button className='btn'>Go to help center</button>
         </div>
        </div>
                


        </div>
      </div>
    </div>
  )
}

export default Top;