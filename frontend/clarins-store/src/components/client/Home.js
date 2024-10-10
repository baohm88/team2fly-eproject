import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        async function postData() {
            axios
                .get("http://localhost/project/collections/all")
                .then((res) => {
                    console.log(res.data.data);
                    setItems(res.data.data);
                });
        }

        postData();
    }, []);

    console.log(items);

    return (
        <>
            <h1 className="center">List of products</h1>
            <div className="items-container">
                {items.map((item) => {
                    const formatter = new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                    });

                    return (
                        <div className="item-card center" key={item.productId}>
                            <Link to={"/"}>
                                <img
                                    src="https://www.clarinsusa.com/on/demandware.static/-/Library-Sites-clarins-v3/default/dwc0d1a641/content/Cleansing-2020/Merchpage-V3/img/packshot-nettoyant-moussant-hydratant.png"
                                    alt=""
                                    className="item-image"
                                />
                                <h4 className="item-title">
                                    {item.productName}
                                </h4>
                            </Link>

                            <p className="item-price">
                                {formatter.format(item.price)}
                            </p>
                            <form method="POST">
                                <input type="hidden" name="item_id" />
                                <input type="hidden" name="quantity" />
                                <p>
                                    <button className="cart-button">
                                        Add to Cart
                                    </button>
                                </p>
                            </form>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
