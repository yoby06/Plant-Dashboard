import React from 'react'
import './listing.css'

// Imported Images =========>
import img from '../../../Assets/planty.png'
import img1 from '../../../Assets/plant (1).png'
import img2 from '../../../Assets/plant (2).png'
import img3 from '../../../Assets/plant (3).png'
import img4 from '../../../Assets/user2.jpg'


// Imported Icons ===>
import {AiFillHeart} from 'react-icons/ai';
import {BsArrowRightShort} from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai'

const Listing = () => {
  return (
    <div className='listiningSection'>
      <div className="heading flex">
        <h1> My Listings</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort className="icon"/>
        </button>
      </div>


      <div className="secContainer flex">
        
        <div className="singleItem">
          <AiFillHeart className="icon"/>
          <img src={img }alt="Image Name"/>
          <h3> Annual Vince </h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon"/>
          <img src={img1} alt="Image Name"/>
          <h3> Coffee Plant </h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon"/>
          <img src={img2 }alt="Image Name"/>
          <h3> Yoby Fern </h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon"/>
          <img src={img3 }alt="Image Name"/>
          <h3> Yoby Plant </h3>
        </div>

      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
              <h3> Top Sellers</h3>
                <button className='btn flex'>
                      See All <BsArrowRightShort className="icon"/>
                </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={img4} alt="User Image" />
              <img src={img4} alt="User Image" />
              <img src={img4} alt="User Image" />
              <img src={img4} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                14.556 Plants sold <br/>
                <small>
                  21 Sellers <span className="date"> 7 Days </span>
                </small>
              </span>
            </div>
          </div>
        </div>


        <div className="featuredSellers">
          <div className="heading flex">
              <h3> Featured Sellers</h3>
                <button className='btn flex'>
                      See All <BsArrowRightShort className="icon"/>
                </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={img4} alt="User Image" />
              <img src={img4} alt="User Image" />
              <img src={img4} alt="User Image" />
              <img src={img4} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                19.05 Plants sold <br/>
                <small>
                   19 Sellers <span className="date"> 5 Days </span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing;