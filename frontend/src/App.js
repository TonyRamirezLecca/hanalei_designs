import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { signout } from "./actions/userActions";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import OrderDetailsScreen from "./screens/OrderDetailsScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProductScreen from "./screens/ProductScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import SignInScreen from "./screens/SignInScreen";

function App() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const signoutHandler = () => {
        dispatch(signout());
    };

    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="row">
                    <div>
                        <Link className="brand" to="/">
                            Hanalei Designs
                        </Link>
                    </div>
                    <div>
                        <Link to="/cart">
                            Cart
                            {cartItems.length > 0 && (
                                <span className="badge">{cartItems.length}</span>
                            )}
                        </Link>
                        {userInfo ? (
                            <div className="dropdown">
                                <Link to="/">
                                    {userInfo.name} <i className="fa fa-caret-down"></i>
                                </Link>
                                <ul className="dropdown-content">
                                    <Link to="/" onClick={signoutHandler}>
                                        Sign Out
                                    </Link>
                                </ul>
                            </div>
                        ) : (
                            <Link to="/signin">Sign In</Link>
                        )}
                    </div>
                </header>
                <main>
                    <Route path="/product/:id" component={ProductScreen} />
                    <Route path="/cart/:id?" component={CartScreen} />
                    <Route path="/signin" component={SignInScreen} />
                    <Route path="/register" component={RegisterScreen} />
                    <Route path="/shipping" component={ShippingAddressScreen} />
                    <Route path="/payment" component={PaymentMethodScreen} />
                    <Route path="/placeorder" component={PlaceOrderScreen} />
                    <Route path="/order/:id" component={OrderDetailsScreen} />
                    <Route path="/" component={HomeScreen} exact />
                </main>
                <footer className="row center">All rights reserved</footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
