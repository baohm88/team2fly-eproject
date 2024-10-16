import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { formatter } from "../../util/formatter";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import Modal from "./Modal"; // Import the Modal component

import Slider from "rc-slider"; // Import rc-slider
import "rc-slider/assets/index.css"; // Import rc-slider styles
import "../css/BodySection.css";
import "../css/BeautyMustHaves.css";
import "../css/Commitments.css";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null); // For managing modal product
    const [sortOption, setSortOption] = useState(""); // State for sorting option
    const [selectedRange, setSelectedRange] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 200]); // State for the range slider

    const location = useLocation();

    const [currentPage, setCurrentPage] = useState(1); // For tracking the current page
    const productsPerPage = 4; // Number of products per page

    // Calculate index range for the products to be displayed on the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    // fetch products from db initially
    useEffect(() => {
        axios.get("http://localhost/project/collections/all").then((res) => {
            setProducts(res.data.data);
            setFilteredProducts(res.data.data);

            document.title = "Clarins Store";
        });
    }, []);

    // Handle filtering by search text
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const searchText = params.get("q");

        if (searchText) {
            setFilteredProducts(
                products.filter(
                    (product) =>
                        (product.product_name &&
                            product.product_name
                                .toLowerCase()
                                .includes(searchText.toLowerCase())) ||
                        (product.description &&
                            product.description
                                .toLowerCase()
                                .includes(searchText.toLowerCase()))
                )
            );
        } else {
            setFilteredProducts(products);
        }
    }, [location.search, products]);

    // Handle sorting
    useEffect(() => {
        let sortedProducts = [...products]; // Sort based on the original product list
        if (sortOption === "name_asc") {
            sortedProducts.sort((a, b) =>
                a.product_name.localeCompare(b.product_name)
            );
        } else if (sortOption === "name_desc") {
            sortedProducts.sort((a, b) =>
                b.product_name.localeCompare(a.product_name)
            );
        } else if (sortOption === "price_asc") {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sortOption === "price_desc") {
            sortedProducts.sort((a, b) => b.price - a.price);
        }

        // Apply price range filter
        sortedProducts = sortedProducts.filter(
            (product) =>
                product.price >= priceRange[0] && product.price <= priceRange[1]
        );

        setFilteredProducts(sortedProducts);
    }, [sortOption, products, priceRange]); // Sort whenever sortOption, products, or price range changes

    // Change page handler
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Calculate total pages
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const openModal = (product) => {
        setSelectedProduct(product); // Set the selected product for the modal
    };

    const closeModal = () => {
        setSelectedProduct(null); // Close the modal by setting the selected product to null
    };

    // Handle price range change
    const handlePriceRangeChange = (newRange) => {
        setSelectedRange(true);
        setPriceRange(newRange);
        setFilteredProducts(
            products.filter(
                (product) =>
                    product.price >= newRange[0] && product.price <= newRange[1]
            )
        );
    };
    // Quản lý trạng thái tab đang được chọn
    const [activeTab, setActiveTab] = useState("just-for-you");

    // Hàm để chuyển tab
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className="body-section">
                {/* Phần banner lớn */}
                <div className="banner">
                    <img
                        src="Local-immersive-DS9-desktop-v2.jpg"
                        alt="Double Serum"
                        className="banner-image"
                    />
                    <div className="banner-content">
                        <h2>NEW (R)EVOLUTION DOUBLE SERUM</h2>
                        <p>The power to change your skin's future</p>
                        <p>Just one drop for younger looking skin</p>
                        <button className="discover-button">DISCOVER</button>
                    </div>
                </div>

                {/* Phần ưu đãi online */}
                <div className="online-benefits">
                    <div className="benefit">
                        <i className="icon-free-shipping"></i>
                        <p>Free shipping with any $50 order</p>
                    </div>
                    <div className="benefit">
                        <i className="icon-rewards"></i>
                        <p>Earn 10 points per dollar and redeem for rewards</p>
                    </div>
                    <div className="benefit">
                        <i className="icon-samples"></i>
                        <p>Choose 3 free samples with any order</p>
                    </div>
                    <div className="benefit">
                        <i className="icon-subscribe"></i>
                        <p>Subscribe for 10% off and free shipping</p>
                    </div>
                </div>

                {/* Phần khám phá sản phẩm */}
                <div className="expertise-section">
                    <h1>Your skin. Our expertise.</h1>
                    <p>Discover our plant-powered formulas</p>

                    <div className="product-categories">
                        <div className="category1">
                            <a href="/skincare">
                                <img
                                    src="Highlight_DOUBLE-SERUM_2024.jpg"
                                    alt="Face"
                                    className="category-image"
                                />
                            </a>
                            <h3>FACE</h3>
                            <a href="/skincare" className="shop-now">
                                SHOP NOW
                            </a>
                        </div>

                        <div className="category2">
                            <a href="/makeup">
                                <img
                                    src="CBA_HP_Highlight_LIP-OIL-BALM_2024_Cherry-APAC.jpg"
                                    alt="Makeup"
                                    className="category-image"
                                />
                            </a>
                            <h3>MAKEUP</h3>
                            <a href="/makeup" className="shop-now">
                                SHOP NOW
                            </a>
                        </div>

                        <div className="category1">
                            <a href="/skincare">
                                <img
                                    src="Body-Fit-Active-Highlight.JPG"
                                    alt="Body"
                                    className="category-image"
                                />
                            </a>
                            <h3>BODY</h3>
                            <a href="/skincare" className="shop-now">
                                SHOP NOW
                            </a>
                        </div>

                        <div className="category2">
                            <a href="/skincare">
                                <img
                                    src="CBA_HP_Highlights_Lifestyle_Body_Sun3.jpg"
                                    alt="Sun"
                                    className="category-image"
                                />
                            </a>
                            <h3>SUN</h3>
                            <a href="/skincare" className="shop-now">
                                SHOP NOW
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/*Beutymusthaves*/}

            <div className="beauty-must-haves">
                <h2>Beauty must-haves</h2>
                <p>Discover our iconic products</p>
                <div className="product-tabs">
                    <button
                        className={`tab ${
                            activeTab === "just-for-you" ? "active" : ""
                        }`}
                        onClick={() => handleTabClick("just-for-you")}
                    >
                        Just for You
                    </button>
                    <button
                        className={`tab ${
                            activeTab === "whats-new" ? "active" : ""
                        }`}
                        onClick={() => handleTabClick("whats-new")}
                    >
                        What's New
                    </button>
                    <button
                        className={`tab ${
                            activeTab === "online-exclusives" ? "active" : ""
                        }`}
                        onClick={() => handleTabClick("online-exclusives")}
                    >
                        Online Exclusives
                    </button>
                </div>

                {/* Hiển thị các sản phẩm dựa trên tab đang được chọn */}
                {activeTab === "just-for-you" && (
                    <div className="product-slider">
                        <div className="product">
                            <img
                                src="80103084_original_original_A.jpg"
                                alt="Product 1"
                            />
                            <h3>Double Serum Anti-Aging</h3>
                            <p>$135.00</p>
                            <button className="cart-button">Quick View</button>
                        </div>
                        <div className="product">
                            <img
                                src="80068482_original_original_A.jpg"
                                alt="Product 2"
                            />
                            <h3>Total Eye Lift Cream</h3>
                            <p>$92.00</p>
                            <button className="cart-button">Quick View</button>
                        </div>
                        <div className="product">
                            <img
                                src="80077133_original_original_A.jpg"
                                alt="Product 3"
                            />
                            <h3>Double Serum Eye</h3>
                            <p>$83.00</p>
                            <button className="cart-button" onClick={openModal}>
                                Quick View
                            </button>
                        </div>
                        <div className="product">
                            <img
                                src="80084587_original_original_A.jpg"
                                alt="Product 4"
                            />
                            <h3>Lip Comfort Oil</h3>
                            <p>$30.00</p>
                            <button className="cart-button">Quick View</button>
                        </div>
                    </div>
                )}

                {activeTab === "whats-new" && (
                    <div className="product-slider">
                        <div className="product">
                            <img src="new_product_1.jpg" alt="New Product 1" />
                            <h3>New Serum XYZ</h3>
                            <p>$120.00</p>
                            <p>★★★★★</p>
                        </div>
                        <div className="product">
                            <img src="new_product_2.jpg" alt="New Product 2" />
                            <h3>New Cream ABC</h3>
                            <p>$95.00</p>
                            <p>★★★★★</p>
                        </div>
                    </div>
                )}

                {activeTab === "online-exclusives" && (
                    <div className="product-slider">
                        <div className="product">
                            <img
                                src="exclusive_product_1.jpg"
                                alt="Exclusive Product 1"
                            />
                            <h3>Exclusive Product 1</h3>
                            <p>$140.00</p>
                            <p>★★★★★</p>
                        </div>
                        <div className="product">
                            <img
                                src="exclusive_product_2.jpg"
                                alt="Exclusive Product 2"
                            />
                            <h3>Exclusive Product 2</h3>
                            <p>$110.00</p>
                            <p>★★★★★</p>
                        </div>
                    </div>
                )}
            </div>

            <div>
                <div className="exclusive-services">
                    <h2>Our exclusive services</h2>
                    <p>Created to make your life more beautiful</p>
                    <div className="services-grid">
                        <div className="service">
                            <img
                                src="CBA_Services_Carousel_Gift_Card_01.jpg"
                                alt="Gift Cards"
                            />
                            <h3>Gift Cards</h3>
                            <p>
                                Take the guesswork out of gifting, and let them
                                choose their favorites.
                            </p>
                            <a href="/gift-cards" className="learn-more">
                                SHOP NOW
                            </a>
                        </div>
                        <div className="service">
                            <img
                                src="CBA_HP_Pushs-Carousel-292x292_CLUB-CLARINS-2_INTE.jpg"
                                alt="Club Clarins"
                            />
                            <h3>Club Clarins</h3>
                            <p>
                                Earn 10 points per dollar and redeem for
                                rewards.
                            </p>
                            <a href="/club-clarins" className="learn-more">
                                LEARN MORE
                            </a>
                        </div>
                        <div className="service">
                            <img
                                src="Subscription-service-carousel.webp"
                                alt="Subscription Service"
                            />
                            <h3>Subscription Service</h3>
                            <p>
                                Enjoy 10% off, free shipping, and 3 free samples
                                with recurring orders.
                            </p>
                            <a href="/subscription" className="learn-more">
                                LEARN MORE
                            </a>
                        </div>
                        <div className="service">
                            <img
                                src="live-consultation-2024-CLP.jpg"
                                alt="Live Consultation"
                            />
                            <h3>Live Consultation</h3>
                            <p>
                                Connect with a Beauty Coach for a complimentary
                                consultation.
                            </p>
                            <a href="/consultation" className="learn-more">
                                BOOK NOW
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="commitments-container">
                <h2>Our Commitments</h2>
                <div className="commitments-grid">
                    <button className="commitment-button">
                        <img
                            src="CSR_Sustainable_Sourcing_v2.png"
                            alt="Sustainable Sourcing & Traceability"
                        />
                        <h3>Sustainable Sourcing & Traceability</h3>
                    </button>
                    <button className="commitment-button">
                        <img
                            src="CSR_Supporting_Actions_v2.png"
                            alt="Charitable Initiatives"
                        />
                        <h3>Charitable Initiatives</h3>
                    </button>
                    <button className="commitment-button">
                        <img src="CSR_EcoDesign_v2.png" alt="Eco Design" />
                        <h3>Eco Design</h3>
                    </button>
                    <button className="commitment-button">
                        <img
                            src="CSR_Made_in_France_v2.png"
                            alt="Made in France"
                        />
                        <h3>Made in France</h3>
                    </button>
                </div>
                <p className="disclaimer">
                    *Excluding: ClarinsMen Foaming Shave Gel / myClarins
                    Clear-out Targets Imperfections / Bright Plus Fresh Ampoule
                    Vitamin C Complex / Nourishing Shampoo bar
                </p>
                <div>
                    <h2>Online advantages</h2>
                    <div className="commitments-grid">
                        <button className="commitment-button">
                            <img
                                src="free-shipping.webp"
                                alt="Sustainable Sourcing & Traceability"
                            />
                            <h3>Free Shipping</h3>
                            <p>with any $50 order</p>
                        </button>
                        <button className="commitment-button">
                            <img
                                src="samples.png"
                                alt="Charitable Initiatives"
                            />
                            <h3>3 Free Samples</h3>
                            <p>with any order</p>
                        </button>
                        <button className="commitment-button">
                            <img src="special-offers.webp" alt="Eco Design" />
                            <h3>Special Offers</h3>
                            <p>all year long</p>
                        </button>
                        <button className="commitment-button">
                            <img
                                src="Club-clarins-2023.webp"
                                alt="Made in France"
                            />
                            <h3>Earn Rewards</h3>
                            <p>$1 = 10 points</p>
                        </button>
                        <button className="commitment-button">
                            <img
                                src="auto-replenishment.webp"
                                alt="Made in France"
                            />
                            <h3>Subscription</h3>
                            <p>10% off and free shipping</p>
                        </button>
                    </div>
                </div>
                <div className="payment-methods">
                    <img src="visa-2.webp" alt="Visa" />
                    <img src="mastercard-2.webp" alt="MasterCard" />
                    <img src="american-express.webp" alt="American Express" />
                    <img src="discover.webp" alt="Discover" />
                    <img src="paypal.webp" alt="PayPal" />
                    <img
                        src="apple-pay-footer-advantage.webp"
                        alt="Apple Pay"
                    />
                    <img src="afterpay.webp" alt="Afterpay" />
                </div>
            </div>

            {selectedProduct && (
                <Modal product={selectedProduct} onClose={closeModal} />
            )}
        </>
    );
}
