import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Products() {
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

    return (
        <>
            <h1 className="center">list of products</h1>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th colSpan="2">Name</th>
                            <th>Price</th>
                            <th>Stock Qty</th>
                            <th>Category</th>
                            <th colSpan="3" className="center">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {items.map((item) => (
                            <tr key={item.productId}>
                                <td>{item.productId}</td>
                                <td>
                                    <img
                                        src="https://www.clarinsusa.com/on/demandware.static/-/Library-Sites-clarins-v3/default/dwc0d1a641/content/Cleansing-2020/Merchpage-V3/img/packshot-nettoyant-moussant-hydratant.png"
                                        alt=""
                                        style={{
                                            width: "5rem",
                                            height: "auto",
                                        }}
                                    />
                                </td>
                                <td>{item.productName}</td>
                                <td>{item.price}</td>
                                <td>{item.quantityInStock}</td>
                                <td>{item.category}</td>
                                <td className="center">
                                    <button>View</button>
                                </td>
                                <td className="center">
                                    <button>Edit</button>
                                </td>
                                <td className="center">
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
