import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../App";
import { formatter } from "../../util/formatter";
import { FaStar } from "react-icons/fa"; // Import star icon
import Modal from "react-modal"; // Import react-modal

// Custom styles for the modal
const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "50%",
    },
};

export default function ProductDetails() {
    const [product, setProduct] = useState("");
    const [ratingSummary, setRatingSummary] = useState({
        totalRatings: 0,
        averageRating: 0,
        starCounts: {
            5: 0,
            4: 0,
            3: 0,
            2: 0,
            1: 0,
        },
    });

    // State for modal visibility, rating, and review
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRating, setSelectedRating] = useState(0);
    const [reviewText, setReviewText] = useState("");
    const { user } = useContext(UserContext);

    const { id } = useParams();
    const { addToCart } = useContext(UserContext); // Destructure addToCart from context

    useEffect(() => {
        axios
            .get("http://localhost:8080/project/collections/product/id=" + id)
            .then((res) => {
                const productData = res.data.data;
                setProduct(productData);
                calculateRatingSummary(productData.product_ratings);
            });
    }, [id]);

    const handleAddToCart = () => {
        addToCart(product); // Call addToCart with the current product
        alert(product.product_name + " has been added to cart!");
    };

    // Function to render stars based on the rating value
    const renderStars = (rating, setRating) => {
        return (
            <div className="stars">
                {Array.from({ length: 5 }, (_, index) => (
                    <FaStar
                        key={index}
                        onClick={() => setRating(index + 1)} // Set rating when star is clicked
                        color={index < rating ? "#A6212B" : "#e4e5e9"}
                        style={{ cursor: "pointer" }} // Make stars clickable
                    />
                ))}
            </div>
        );
    };

    // Calculate the rating summary (counts and average)
    const calculateRatingSummary = (ratings) => {
        if (!ratings || ratings.length === 0) return;

        let totalRatings = ratings.length;
        let starCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
        let totalStars = 0;

        ratings.forEach((rating) => {
            const starRating = rating.rating;
            starCounts[starRating]++;
            totalStars += starRating;
        });

        const averageRating = (totalStars / totalRatings).toFixed(1); // Calculate average rating

        setRatingSummary({
            totalRatings,
            averageRating,
            starCounts,
        });
    };

    // Function to calculate the percentage for each star rating
    const getPercentage = (count) => {
        return ratingSummary.totalRatings > 0
            ? ((count / ratingSummary.totalRatings) * 100).toFixed(1)
            : 0;
    };

    // Open modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Close modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Handle submit review
    const handleSubmitReview = () => {
        if (selectedRating === 0) {
            alert("Please select a rating.");
            return;
        }

        const review = {
            product_id: id,
            user_id: user.user_id,
            rating: selectedRating,
            rating_comment: reviewText,
            // username: "CurrentUser", // Replace this with the current user's name if available
            // review_date: new Date().toLocaleDateString(),
        };

        console.log(review);

        // Send review data to the backend
        // axios.post(`http://localhost/project/collections/product/${id}/add-review`, review)
        //     .then((response) => {
        //         alert("Thank you for your review!");
        //         // Clear the modal and close it
        //         setSelectedRating(0);
        //         setReviewText("");
        //         closeModal();
        //         // Optionally refresh the product details with new reviews
        //     })
        //     .catch((error) => {
        //         alert("Failed to submit the review. Please try again.");
        //     });
    };

    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    return (
        <>
            <h1>Product # {id}</h1>
            <div>
                <p>
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </p>
                <p>Name: {product.product_name}</p>
                <p>Main cat: {product.main_category}</p>
                <p>Sub cat: {product.sub_category}</p>
                <p>Qty available: {product.quantity_in_stock}</p>
                <p>Price: {formatter.format(product.price)}</p>

                <div>
                    <h3>Product Images:</h3>
                    {product.product_images &&
                    product.product_images.length > 0 ? (
                        product.product_images
                            .split(",")
                            .map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Product ${index + 1}`}
                                    style={{ width: "200px", margin: "10px" }}
                                />
                            ))
                    ) : (
                        <p>No images available</p>
                    )}
                </div>

                <button
                    style={{
                        backgroundColor: "#A6212B",
                        border: "none",
                        padding: "5px 10px",
                        color: "white",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                    onClick={openModal}
                >
                    Write a review
                </button>

                {/* Modal for writing a review */}
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Write a Review"
                >
                    <h2>My review for </h2>
                    <div>
                        <p>Select Rating:</p>
                        {renderStars(selectedRating, setSelectedRating)}
                    </div>
                    <div>
                        <p>Your Review:</p>
                        <textarea
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            rows="4"
                            cols="50"
                            placeholder="Write your review here"
                        ></textarea>
                    </div>
                    <div>
                        <button onClick={handleSubmitReview}>Submit</button>
                        <button
                            onClick={closeModal}
                            style={{ marginLeft: "10px" }}
                        >
                            Cancel
                        </button>
                    </div>
                </Modal>

                {/* Rating Summary Section */}
                <div className="rating-summary">
                    <h2>Ratings Summary</h2>
                    <p>Average Rating: {ratingSummary.averageRating} / 5</p>
                    <p>Total Ratings: {ratingSummary.totalRatings}</p>

                    <div>
                        <table>
                            {[5, 4, 3, 2, 1].map((star) => (
                                <tr key={star} className="star-row">
                                    <td
                                        style={{
                                            width: "3rem",
                                            textAlign: "right",
                                            paddingRight: "5px",
                                        }}
                                    >
                                        {star} <FaStar color={"#A6212B"} />:
                                    </td>

                                    <td style={{ maxWidth: "5rem" }}>
                                        <div
                                            className="progress-bar"
                                            style={{
                                                backgroundColor: "#e4e5e9",
                                            }}
                                        >
                                            <div
                                                className="progress"
                                                style={{
                                                    width: `${getPercentage(
                                                        ratingSummary
                                                            .starCounts[star]
                                                    )}%`,
                                                    backgroundColor: "#A6212B",
                                                    height: "10px",
                                                }}
                                            ></div>
                                        </div>
                                    </td>
                                    <td
                                        style={{
                                            width: "5rem",

                                            paddingLeft: "5px",
                                        }}
                                    >
                                        {ratingSummary.starCounts[star]} (
                                        {getPercentage(
                                            ratingSummary.starCounts[star]
                                        )}
                                        %)
                                    </td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>

                {/* Individual Ratings Section */}
                <div className="ratings-container">
                    <h2>Ratings & Reviews</h2>
                    {product.product_ratings &&
                    product.product_ratings.length > 0 ? (
                        product.product_ratings.map((rating) => (
                            <div className="rating-card" key={rating.rating_id}>
                                <br />
                                <p>{renderStars(rating.rating)} </p>
                                <h5>
                                    By: {rating.username} on{" "}
                                    {rating.review_date}
                                </h5>

                                <i>{rating.rating_comment}</i>
                                <br />
                                <br />
                                <hr />
                            </div>
                        ))
                    ) : (
                        <p>No ratings available</p>
                    )}
                </div>
            </div>
            <div className={classes['product-des-dt']}>
            A multi-tasking daily moisturizer for all skin types powered <br></br>
            by 2% Niacinamide and Organic Sea Holly bio-extract*<br></br>
            targets the first signs of aging to visibly smooth lines, 
            refine <br></br>pores, skin texture, and help strengthen skin's moisture barrier for a radiant, youthful glow. 
            </div>
            <div className={classes['price-dt']}>{formatter.format(product.price)}</div>
            <div className={classes['price-des-dt']}>Or 4 interest-free payments of $14.75 with <img src={require('../../assets/afterpay.png')}></img></div>
            <div className={classes['ml-dt']}>1.7 Oz.</div>
            
                <div className={classes['boxcontainer-dt']}>
                    <div className={classes["option-dt"]}>
                        <label className={classes["radio-container-dt"]}>
                        <div className={classes['checker-dt']}>
                        <input
                            type="radio"
                            name="purchaseOption"
                            value="one-time"
                        />
                        <span className={classes["radio-label-dt"]}>One-time purchase</span>
                        </div>
                        {/* <span className={classes["price-dt"]}>$59.00</span> */}
                        <span className={classes["price-dt"]}>{formatter.format(product.price)}</span>
                        </label>
                    </div>
                    <hr />
                    <div className={classes["option-dt"]}>
                        <label className={classes["radio-container-dt"]}>
                        <div className={classes['checker-dt']}>
                        <input
                            type="radio"
                            name="purchaseOption"
                            value="subscription"
                            
                        />
                        <span className={classes["radio-label-dt"]}>Subscription</span>
                        </div>
                        <span className={classes["price subscription-price-dt"]}>{formatter.format(product.price * 0.9)}</span>
            
                        </label>
                        
                            <ul className={classes["subscription-details-dt"]}>
                                <li>10% off + free shipping + 3 free samples</li>
                                <li>100 Club Clarins points for subscribing</li>
                                <li>Edit, pause, skip or cancel any time</li>
                            </ul>
                    
                        <select className={classes["shipping-frequency-dt"]}>
                            <option>Ships every 3 months (recommended)</option> 
                            <option>Ships every 2 months (recommended)</option> 
                            <option>Ships every 1 months (recommended)</option> 
                            <option>Ships every 5 months (recommended)</option> 
                        </select>
                    </div>  
                                                                    
                </div>
            <div className={classes['almost-dt']}>
                <div className={classes['volum-dt']}>
                <input type="number" id="quantity" name="quantity" value={1} min="1" max="1000"></input>
                <button onClick={handleAddToCart} className={classes['dt-add']}>Add to bag</button>
                </div>
                <hr></hr>
            </div>
            <div className={classes['last-dt']}>
                <div className={classes['first-last-dt']}>
                    <FontAwesomeIcon icon={faGift} />
                    <span>3 free samples with any order.</span>
                    <Link to='#' className={classes['try']}><span >Try a sample</span></Link>
                </div>
                <div className={classes['second-last-dt']}>
                    <FontAwesomeIcon icon={faTruckFast} />
                    <span>Ships free</span>
                
                </div>
                <div className={classes['third-last-dt']}>
                    <FontAwesomeIcon icon={faHippo} />
                    <span>Earn 590 points or more with this purchase!</span>
                    
                </div>
            </div>
    
        </div>
    
    </div>
    <section className={classes['how']}>
        <div className={classes['Like']}>
        <span >YOU MIGHT ALSO LIKE</span>
        </div>
    
        <div className={classes['box-container']}>
            <div className={classes['glider-contain']}>
                <FontAwesomeIcon className='chevron-fa-two' icon={faChevronLeft} />
                <FontAwesomeIcon className='chevron-fa-one' icon={faChevronRight} />
            </div>
            <div className= 'box-box'>
                <div className='box-slider'>
                    <div className={classes['product-box']}>
                        <div className={classes['p-img-container']}>
                            <div className={classes['p-img']}>
                                <a href={classes['iragaki']}> 
                                    <img src={require('../../assets/80077133_original_original_4.jpg')} alt='abc'></img>
                                </a>
                            </div>
                        </div>
                        <div className={classes['p-box-text']}>
                            <div className={classes['product-category']}>
                                <span>Nike Force </span>
                            </div>
                            <div className={classes['product-type']}>
                                <span>Men's Shoes</span>
                            </div>
                            <div className={classes['price']}>
                            <span>9,666,666 <sup>đ</sup></span>
                            </div>
                        </div>
                    </div>
                    <div className={classes['product-box']}>
                        <div className={classes['p-img-container']}>
                            <div className={classes['p-img']}>
                                <a href='iragaki'> 
                                    <img src={require('../../assets/80077133_original_original_4.jpg')} alt='abc'></img>
                                </a>
                            </div>
                        </div>
                        <div className={classes['p-box-text']}>
                            <div className={classes['product-category']}>
                                <span>Fire Fly  </span>
                            </div>
                            <div className={classes['product-type']}>
                                <span>Women's Shoes</span>
                            </div>
                            <div className={classes['price']}>
                            <span>6,666,666 <sup>đ</sup></span>
                            </div>
                        </div>
                    </div>
                    <div className={classes['product-box']}>
                        <div className={classes['p-img-container']}>
                            <div className={classes['p-img']}>
                                <a href='iragaki'> 
                                    <img src={require('../../assets/80077133_original_original_4.jpg')} alt='abc'></img>
                                </a>
                            </div>
                        </div>
                        <div className={classes['p-box-text']}>
                            <div className={classes['product-category']}>
                                <span>Nike Ocean </span>
                            </div>
                            <div className={classes['product-type']}>
                                <span>Men's Shoes</span>
                            </div>
                            <div className={classes['price']}>
                            <span>6,666,666 <sup>đ</sup></span>
                            </div>
                        </div>
                    </div>
                    <div className={classes['product-box']}>
                        <div className={classes['p-img-container']}>
                            <div className={classes['p-img']}>
                                <a href='iragaki'> 
                                    <img src={require('../../assets/80077133_original_original_4.jpg')} alt='abc'></img>
                                </a>
                            </div>
                        </div>
                        <div className={classes['p-box-text']}>
                            <div className={classes['product-category']}>
                                <span>Pink Dream</span>
                            </div>
                            <div className={classes['product-type']}>
                                <span>Women's Shoes</span>
                            </div>
                            <div className={classes['price']}>
                            <span>6,666,666 <sup>đ</sup></span>
                            </div>
                        </div>
                    </div>
                
                    
                </div>  
                <div className='box-slider'>
                    <div className={classes['product-box']}>
                        <div className={classes['p-img-container']}>
                            <div className={classes['p-img']}>
                                <a href='iragaki'> 
                                    <img src={require('../../assets/80077133_original_original_4.jpg')} alt='abc'></img>
                                </a>
                            </div>
                        </div>
                        <div className={classes['p-box-text']}>
                            <div className={classes['product-category']}>
                                <span>Jump Man 9F</span>
                            </div>
                            <div className={classes['product-type']}>
                                <span>Men's Shoes</span>
                            </div>
                            <div className={classes['price']}>
                            <span>6,666,666 <sup>đ</sup></span>
                            </div>
                        </div>
                    </div>
                    <div className={classes['product-box']}>
                        <div className={classes['p-img-container']}>
                            <div className={classes['p-img']}>
                                <a href='iragaki'> 
                                    <img src={require('../../assets/80077133_original_original_4.jpg')} alt='abc'></img>
                                </a>
                            </div>
                        </div>
                        <div className={classes['p-box-text']}>
                            <div className={classes['product-category']}>
                                <span>Nike Royal</span>
                            </div>
                            <div className={classes['product-type']}>
                                <span>Men's Shoes</span>
                            </div>
                            <div className={classes['price']}>
                            <span>6,666,666 <sup>đ</sup></span>
                            </div>
                        </div>
                    </div>
                    <div className={classes['product-box']}>
                        <div className={classes['p-img-container']}>
                            <div className={classes['p-img']}>
                                <a href='iragaki'> 
                                    <img src={require('../../assets/80077133_original_original_4.jpg')} alt='abc'></img>
                                </a>
                            </div>
                        </div>
                        <div className={classes['p-box-text']}>
                            <div className={classes['product-category']}>
                                <span>Air Jordan 1</span>
                            </div>
                            <div className={classes['product-type']}>
                                <span>Men's Shoes</span>
                            </div>
                            <div className={classes['price']}>
                            <span>6,666,666 <sup>đ</sup></span>
                            </div>
                        </div>
                    </div>
                    <div className={classes['product-box']}>
                        <div className={classes['p-img-container']}>
                            <div className={classes['p-img']}>
                                <a href='iragaki'> 
                                    <img src={require('../../assets/80077133_original_original_4.jpg')} alt='abc'></img>
                                </a>
                            </div>
                        </div>
                        <div className={classes['p-box-text']}>
                            <div className={classes['product-category']}>
                                <span>Air Jordan 1</span>
                            </div>
                            <div className={classes['product-type']}>
                                <span>Men's Shoes</span>
                            </div>
                            <div className={classes['price']}>
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
    );
}
