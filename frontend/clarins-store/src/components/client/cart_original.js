import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { formatter } from "../../util/formatter";
import axios from "axios";
import { Link } from "react-router-dom";
import classes from "./Cart.module.css"; // Importing CSS Module
import Button from "../UI/Button";

export default function Cart() {
    const {
        cart,
        incrementQuantity,
        decrementQuantity,
        removeItem,
        clearCart,
    } = useContext(UserContext);
    const [totalAmount, setTotalAmount] = useState(0);
    const [serverError, setServerError] = useState();
    const { user } = useContext(UserContext);

    useEffect(() => {
        const calculateTotalAmount = () => {
            const total = cart.reduce(
                (sum, item) => sum + item.product_price * item.quantity,
                0
            );
            setTotalAmount(total);
        };

        calculateTotalAmount();
    }, [cart]);

    const handleCheckout = async () => {
        try {
            const orderData = {
                user_id: user.user_id,
                order_value: totalAmount,
                cart_items: cart,
            };

            const response = await axios.post(
                `http://localhost/project/user/orders/user_idd=${user.user_id}`,
                orderData
            );

            console.log(response.data.type);

            if (response.data.type === "success") {
                alert("Order created successfully!");
                clearCart();
            } else {
                console.log("Creating order failed: ", response.data.message);
                setServerError(response.data.message);
            }
        } catch (error) {
            console.error("Error creating the order:", error);
            alert(
                "An error occurred during checkout. Please try again.\n" + error
            );
        }
    };

    if (!cart || cart.length === 0) {
        return <p>Your cart is empty</p>;
    }

    return (
        <div className={classes.cart}>
            {serverError && (
                <span className="error-message">({serverError})</span>
            )}

            <div className={classes.cartContainer}>
                <h1>Your products</h1>
                <table>
                    <tbody>
                        {cart.map((item) => {
                            return (
                                <tr key={item.product_id}>
                                    <td>
                                        <Link
                                            to={"/products/" + item.product_id}
                                        >
                                            <img
                                                src={
                                                    item.product_images
                                                        ? item.product_images.split(
                                                              ","
                                                          )[0]
                                                        : ""
                                                }
                                                alt={item.product_name}
                                                style={{ width: "5rem" }}
                                            />
                                        </Link>
                                    </td>
                                    <td>
                                        <Link
                                            to={"/products/" + item.product_id}
                                        >
                                            {item.product_name}
                                        </Link>
                                    </td>
                                    <td className={classes.center}>
                                        <button
                                            onClick={() =>
                                                decrementQuantity(
                                                    item.product_id
                                                )
                                            }
                                        >
                                            -
                                        </button>{" "}
                                        {item.quantity}{" "}
                                        <button
                                            onClick={() =>
                                                incrementQuantity(
                                                    item.product_id
                                                )
                                            }
                                        >
                                            +
                                        </button>
                                    </td>
                                    <td className={classes.center}>
                                        {formatter.format(item.product_price)}
                                    </td>
                                    <td className={classes.center}>
                                        {formatter.format(
                                            item.product_price * item.quantity
                                        )}
                                    </td>
                                    <td className={classes.center}>
                                        <button
                                            onClick={() =>
                                                removeItem(item.product_id)
                                            }
                                        >
                                            X
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div className={classes.orderSummary}>
                <h3>Order Summary</h3>
                <hr />
                <p className={classes.flexContainerBetween}>
                    <span>Subtotal</span> <span>${totalAmount}</span>
                </p>
                <p className={classes.flexContainerBetween}>
                    <span>Shipping</span> <span>$0</span>
                </p>
                <hr />
                <p>Tax will be calculated during checkout</p>
                <p className={classes.flexContainerBetween}>
                    <span>Estimated Total</span> <span>${totalAmount}</span>
                </p>

                <Button className="button" onClick={handleCheckout}>
                    Checkout
                </Button>
            </div>
        </div>
    );
}
