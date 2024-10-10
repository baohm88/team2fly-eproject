import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faChevronLeft, faChevronRight, faGift, faHippo, faStar, faStarHalfStroke, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";
import Modalmg from './Modalmg';
import Slider from './Slider';
import './Modal.css';
const Details = props => {
  return (
    <>
            <div class="body-product-dt">

            <div class="product-img-dt">
                <div class="product-img-small-dt">
                    <img
                        src={require('../../assets/80077133_original_original_4.jpg')}
                        alt="s"></img>
                    <img
                        src={require('../../assets/80095401_original_original_D.webp')}
                        alt="s"></img>
                    <img
                        src={require('../../assets/80088221_original_original_5.webp')}
                        alt="s"></img>
                    <img
                        src={require('../../assets/80033513_original_original_5.webp')}
                        alt="s"></img>
                </div>
                <div class="product-img-big-dt">
                    <img
                        src={require('../../assets/80083877_original_original_5.jpg')}
                        alt="s"></img>
                </div>
            <Modalmg></Modalmg>
            </div>
            <div class="product-text-dt">
                <div class="product-title-dt">
                    <span>Multi-Active Night Face Cream - All Skin Types</span>
                    <div className='star-dt'>
                    <div className='iconstar-dt'>   
                        <FontAwesomeIcon className='starl-dt' icon={faStar} />
                        <FontAwesomeIcon className='starl-dt' icon={faStar} />
                        <FontAwesomeIcon className='starl-dt' icon={faStar} />
                        <FontAwesomeIcon className='starl-dt' icon={faStar} />
                        <FontAwesomeIcon className='starl-dt' icon={faStarHalfStroke} />
                        </div>  
                        <Link to='#'><div className='review-dt'>2752 REVIEWS</div></Link>
                    </div>
                </div>
                <div className='product-des-dt'>
                A multi-tasking daily moisturizer for all skin types powered <br></br>
                by 2% Niacinamide and Organic Sea Holly bio-extract*<br></br>
                targets the first signs of aging to visibly smooth lines, 
                refine <br></br>pores, skin texture, and help strengthen skin's moisture barrier for a radiant, youthful glow. 
                </div>
                <div className='price-dt'>$59.00</div>
                <div className='price-des-dt'>Or 4 interest-free payments of $14.75 with <img src={require('../../assets/afterpay.png')}></img></div>
                <div className='ml-dt'>1.7 Oz.</div>
                
                    <div className='boxcontainer-dt'>
                        <div className="option-dt">
                            <label className="radio-container-dt">
                            <div className='checker-dt'>
                            <input
                                type="radio"
                                name="purchaseOption"
                                value="one-time"
                            />
                            <span className="radio-label-dt">One-time purchase</span>
                            </div>
                            <span className="price-dt">$59.00</span>
                            </label>
                        </div>
                        <hr />
                        <div className="option-dt">
                            <label className="radio-container-dt">
                            <div className='checker-dt'>
                            <input
                                type="radio"
                                name="purchaseOption"
                                value="subscription"
                                
                            />
                            <span className="radio-label-dt">Subscription</span>
                            </div>
                            <span className="price subscription-price-dt">$53.10</span>
                
                            </label>
                            
                                <ul className="subscription-details-dt">
                                    <li>10% off + free shipping + 3 free samples</li>
                                    <li>100 Club Clarins points for subscribing</li>
                                    <li>Edit, pause, skip or cancel any time</li>
                                </ul>
                        
                            <select className="shipping-frequency-dt">
                                <option>Ships every 3 months (recommended)</option> 
                                <option>Ships every 2 months (recommended)</option> 
                                <option>Ships every 1 months (recommended)</option> 
                                <option>Ships every 5 months (recommended)</option> 
                            </select>
                        </div>  
                                                                        
                    </div>
                <div className='almost-dt'>
                    <div className='volum-dt'>
                    <input type="number" id="quantity" name="quantity" value={1} min="1" max="1000"></input>
                    <button className='dt-add'>Add to bag</button>
                    </div>
                    <hr></hr>
                </div>
                <div className='last-dt'>
                    <div className='first-last-dt'>
                        <FontAwesomeIcon icon={faGift} />
                        <span>3 free samples with any order.</span>
                        <Link to='#' className='try'><span >Try a sample</span></Link>
                    </div>
                    <div className='second-last-dt'>
                        <FontAwesomeIcon icon={faTruckFast} />
                        <span>Ships free</span>
                    
                    </div>
                    <div className='third-last-dt'>
                        <FontAwesomeIcon icon={faHippo} />
                        <span>Earn 590 points or more with this purchase!</span>
                        
                    </div>
                </div>

            </div>

        </div>
        <section className='how'>
            <div className='Like'>
            <span >YOU MIGHT ALSO LIKE</span>
            </div>

            <div className='box-container'>
                <div className='glider-contain'>
                    <FontAwesomeIcon className='chevron-fa-two' icon={faChevronLeft} />
                    <FontAwesomeIcon className='chevron-fa-one' icon={faChevronRight} />
                </div>
                <div className='box-box'>
                    <div className='box-slider'>
                        <div className='product-box'>
                            <div className='p-img-container'>
                                <div className='p-img'>
                                    <a href='iragaki'> 
                                        <img src={require('../../assets/80077133_original_original_4.jpg')} alt='abc'></img>
                                    </a>
                                </div>
                            </div>
                            <div className='p-box-text'>
                                <div className='product-category'>
                                    <span>Nike Force </span>
                                </div>
                                <div className='product-type'>
                                    <span>Men's Shoes</span>
                                </div>
                                <div className='price'>
                                <span>9,666,666 <sup>đ</sup></span>
                                </div>
                            </div>
                        </div>
                        <div className='product-box'>
                            <div className='p-img-container'>
                                <div className='p-img'>
                                    <a href='iragaki'> 
                                        <img src={require('../../assets/80077133_original_original_4.jpg')} alt='abc'></img>
                                    </a>
                                </div>
                            </div>
                            <div className='p-box-text'>
                                <div className='product-category'>
                                    <span>Fire Fly  </span>
                                </div>
                                <div className='product-type'>
                                    <span>Women's Shoes</span>
                                </div>
                                <div className='price'>
                                <span>6,666,666 <sup>đ</sup></span>
                                </div>
                            </div>
                        </div>
                        <div className='product-box'>
                            <div className='p-img-container'>
                                <div className='p-img'>
                                    <a href='iragaki'> 
                                        <img src={require('../../assets/80077133_original_original_4.jpg')} alt='abc'></img>
                                    </a>
                                </div>
                            </div>
                            <div className='p-box-text'>
                                <div className='product-category'>
                                    <span>Nike Ocean </span>
                                </div>
                                <div className='product-type'>
                                    <span>Men's Shoes</span>
                                </div>
                                <div className='price'>
                                <span>6,666,666 <sup>đ</sup></span>
                                </div>
                            </div>
                        </div>
                        <div className='product-box'>
                            <div className='p-img-container'>
                                <div className='p-img'>
                                    <a href='iragaki'> 
                                        <img src={require('../../assets/80077133_original_original_4.jpg')} alt='abc'></img>
                                    </a>
                                </div>
                            </div>
                            <div className='p-box-text'>
                                <div className='product-category'>
                                    <span>Pink Dream</span>
                                </div>
                                <div className='product-type'>
                                    <span>Women's Shoes</span>
                                </div>
                                <div className='price'>
                                <span>6,666,666 <sup>đ</sup></span>
                                </div>
                            </div>
                        </div>
                    
                        
                    </div>  
                    <div className='box-slider'>
                        <div className='product-box'>
                            <div className='p-img-container'>
                                <div className='p-img'>
                                    <a href='iragaki'> 
                                        <img src={require('../../assets/80077133_original_original_4.jpg')} alt='abc'></img>
                                    </a>
                                </div>
                            </div>
                            <div className='p-box-text'>
                                <div className='product-category'>
                                    <span>Jump Man 9F</span>
                                </div>
                                <div className='product-type'>
                                    <span>Men's Shoes</span>
                                </div>
                                <div className='price'>
                                <span>6,666,666 <sup>đ</sup></span>
                                </div>
                            </div>
                        </div>
                        <div className='product-box'>
                            <div className='p-img-container'>
                                <div className='p-img'>
                                    <a href='iragaki'> 
                                        <img src={require('../../assets/80077133_original_original_4.jpg')} alt='abc'></img>
                                    </a>
                                </div>
                            </div>
                            <div className='p-box-text'>
                                <div className='product-category'>
                                    <span>Nike Royal</span>
                                </div>
                                <div className='product-type'>
                                    <span>Men's Shoes</span>
                                </div>
                                <div className='price'>
                                <span>6,666,666 <sup>đ</sup></span>
                                </div>
                            </div>
                        </div>
                        <div className='product-box'>
                            <div className='p-img-container'>
                                <div className='p-img'>
                                    <a href='iragaki'> 
                                        <img src={require('../../assets/80077133_original_original_4.jpg')} alt='abc'></img>
                                    </a>
                                </div>
                            </div>
                            <div className='p-box-text'>
                                <div className='product-category'>
                                    <span>Air Jordan 1</span>
                                </div>
                                <div className='product-type'>
                                    <span>Men's Shoes</span>
                                </div>
                                <div className='price'>
                                <span>6,666,666 <sup>đ</sup></span>
                                </div>
                            </div>
                        </div>
                        <div className='product-box'>
                            <div className='p-img-container'>
                                <div className='p-img'>
                                    <a href='iragaki'> 
                                        <img src={require('../../assets/80077133_original_original_4.jpg')} alt='abc'></img>
                                    </a>
                                </div>
                            </div>
                            <div className='p-box-text'>
                                <div className='product-category'>
                                    <span>Air Jordan 1</span>
                                </div>
                                <div className='product-type'>
                                    <span>Men's Shoes</span>
                                </div>
                                <div className='price'>
                                <span>6,666,666 <sup>đ</sup></span>
                                </div>
                            </div>
                        </div>
                    
                        
                    </div>  
                </div>
                <Slider></Slider>
            </div>
            

            
            
            
        </section>
    </> 
  )
}

Details.propTypes = {}

export default Details