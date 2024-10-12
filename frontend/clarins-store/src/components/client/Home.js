import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const location = useLocation();

    const [currentPage, setCurrentPage] = useState(1); // For tracking the current page
    const productsPerPage = 3; // Number of products per page

    // Calculate index range for the products to be displayed on the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    useEffect(() => {
        axios.get("http://localhost/project/collections/all").then((res) => {
            setProducts(res.data.data);
            setFilteredProducts(res.data.data);
        });
    }, []);

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

    // Change page handler
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Calculate total pages
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    return (
        <>
            <h1 className="center">All products</h1>
            <div className="items-container">
                {currentProducts.map((item) => {
                    const formatter = new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                    });

                    return (
                        <div className="item-card center" key={item.product_id}>
                            <Link to={"/products/" + item.product_id}>
                                <img
                                    src={
                                        item.product_images
                                            ? item.product_images.split(",")[0]
                                            : ""
                                    }
                                    alt={item.product_name}
                                    className="item-image"
                                />
                                <h4 className="item-title">
                                    {item.product_name}
                                </h4>
                            </Link>

                            <p className="item-price">
                                {formatter.format(item.price)}
                            </p>
                            <button className="cart-button">Quick View</button>
                        </div>
                    );
                })}
            </div>

            <br />
            <br />
            <br />
            {/* Pagination Controls */}
            <div className="pagination center">
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => paginate(i + 1)}
                        className={currentPage === i + 1 ? "active" : ""}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </>
    );
}
