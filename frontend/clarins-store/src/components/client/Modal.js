import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGift, faHippo, faStar, faStarHalfStroke, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";
import Modalmg from './Modalmg';
import './Modal.css';

const Modal = () => {
    const [modal , setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal)
    }
  return (
    <>
        <button onClick={toggleModal} className='btn-modal'>
            Quick view
        </button>
        {modal && (
            <div className='modal' >
                <div className='overlay'  onClick={toggleModal}></div>
                <div className='modal-content'>
                    <div className='ob'>
                    <button className='close-modal' onClick={toggleModal}>X</button>
                    </div>
                    <div class="body-product">

                        <div class="product-img">
                            <div class="product-img-small">
                                <img
                                    src={require('../../assets/80033513_original_original_5.webp')}
                                    alt="s"></img>
                                <img
                                    src={require('../../assets/80038815_original_original_1.webp')}
                                    alt="s"></img>
                                <img
                                    src={require('../../assets/80053013_original_original_3.webp')}
                                    alt="s"></img>
                                <img
                                    src={require('../../assets/80095401_original_original_D.webp')}
                                    alt="s"></img>
                            </div>
                            <div class="product-img-big">
                                <img
                                    src={require('../../assets/80083877_original_original_5.jpg')}
                                    alt="s"></img>
                            </div>
                        <Modalmg></Modalmg>
                        </div>
                        <div class="product-text">
                            <div class="product-title">
                                <span>Multi-Active Night Face Cream - All Skin Types</span>
                                <div className='star'>
                                   <div className='iconstar'>   
                                    <FontAwesomeIcon className='starl' icon={faStar} />
                                    <FontAwesomeIcon className='starl' icon={faStar} />
                                    <FontAwesomeIcon className='starl' icon={faStar} />
                                    <FontAwesomeIcon className='starl' icon={faStar} />
                                    <FontAwesomeIcon className='starl' icon={faStarHalfStroke} />
                                    </div>  
                                    <Link to='#'><div className='review'>2752 REVIEWS</div></Link>
                                </div>
                            </div>
                            <div className='product-des'>
                            A multi-tasking daily moisturizer for all skin types powered <br></br>
                             by 2% Niacinamide and Organic Sea Holly bio-extract*<br></br>
                             targets the first signs of aging to visibly smooth lines, 
                            refine <br></br>pores, skin texture, and help strengthen skin's moisture barrier for a radiant, youthful glow. 
                            </div>
                            <div className='price'>$59.00</div>
                            <div className='price-des'>Or 4 interest-free payments of $14.75 with <img src={require('../../assets/afterpay.png')}></img></div>
                            <div className='ml'>1.7 Oz.</div>
                             
                                <div className='boxcontainer'>
                                    <div className="option">
                                        <label className="radio-container">
                                        <div className='checker'>
                                        <input
                                            type="radio"
                                            name="purchaseOption"
                                            value="one-time"
                                        />
                                        <span className="radio-label">One-time purchase</span>
                                        </div>
                                        <span className="price">$59.00</span>
                                        </label>
                                    </div>
                                    <hr />
                                    <div className="option">
                                        <label className="radio-container">
                                        <div className='checker'>
                                        <input
                                            type="radio"
                                            name="purchaseOption"
                                            value="subscription"
                                            
                                        />
                                        <span className="radio-label">Subscription</span>
                                        </div>
                                        <span className="price subscription-price">$53.10</span>
                            
                                        </label>
                                        
                                            <ul className="subscription-details">
                                                <li>10% off + free shipping + 3 free samples</li>
                                                <li>100 Club Clarins points for subscribing</li>
                                                <li>Edit, pause, skip or cancel any time</li>
                                            </ul>
                                    
                                        <select className="shipping-frequency">
                                            <option>Ships every 3 months (recommended)</option> 
                                            <option>Ships every 2 months (recommended)</option> 
                                            <option>Ships every 1 months (recommended)</option> 
                                            <option>Ships every 5 months (recommended)</option> 
                                        </select>
                                    </div>  
                                                                                    
                                </div>
                            <div className='almost'>
                                <div className='volum'>
                                <input type="number" id="quantity" name="quantity" value={1} min="1" max="1000"></input>
                                <button>Add to bag</button>
                                </div>
                                <hr></hr>
                            </div>
                            <div className='last'>
                                <div className='first-last'>
                                    <FontAwesomeIcon icon={faGift} />
                                    <span>3 free samples with any order.</span>
                                    <Link to='#' className='try'><span >Try a sample</span></Link>
                                </div>
                                <div className='second-last'>
                                    <FontAwesomeIcon icon={faTruckFast} />
                                    <span>Ships free</span>
                                   
                                </div>
                                <div className='third-last'>
                                    <FontAwesomeIcon icon={faHippo} />
                                    <span>Earn 590 points or more with this purchase!</span>
                                    
                                </div>
                            </div>
                            <div className='detail'> 
                                <Link className='see'><span>SEE PRODUCT DETAILS</span></Link>
                            </div>
                        </div>

                    </div>
                </div>
            
        </div>

        )}
        
    </>
  )
}

export default Modal