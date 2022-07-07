import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../features/Cart/cartSlice";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

function MyCart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  let value = Math.floor(Math.random() * 31) + 50;
  let total = Math.floor(Math.random() * 1910) + 50;
  return (
    <div>
      {cart.cartItems.length === 0 ? (
        <div className="d-flex justify-content-center align-align-items-center ">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="p-5">Your Cart is Empty</h1>
            <ReportGmailerrorredIcon className=""></ReportGmailerrorredIcon>
          </div>
        </div>
      ) : (
        <div className=" col-12">
          <h2 className="text-center"> Shopping Cart</h2>
          <div className="px-4 px-lg-0">
            <div className="pb-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                    {/* Shopping cart table */}
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col" className="border-0 bg-light">
                              <div className="p-2 px-3 text-uppercase">
                                Game
                              </div>
                            </th>
                            <th scope="col" className="border-0 bg-light">
                              <div className="py-2 text-uppercase">Price</div>
                            </th>
                            <th
                              scope="col"
                              className="border-0 bg-light text-xl-center"
                            >
                              <div className="py-2 text-uppercase">
                                Quantity
                              </div>
                            </th>

                            <th
                              scope="col"
                              className="border-0 bg-light text-xl-center"
                            >
                              <div className="py-2 text-uppercase">Total</div>
                            </th>

                            <th scope="col" className="border-0 bg-light">
                              <div className="py-2 text-uppercase">Remove</div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {cart.cartItems?.map((cartItem) => (
                            <tr key={cartItem.id}>
                              <th>
                                <div className="d-flex align-items-center gap-3">
                                  <img
                                    src={cartItem.background_image}
                                    alt=""
                                    className="w-25"
                                  />
                                  <div>
                                    {cartItem?.name}

                                    <Typography
                                      variant="body2"
                                      color="text.secondary"
                                    >
                                      {cartItem?.genres?.map((genre) => {
                                        let out = genre?.name + ",";

                                        return out;
                                      })}
                                    </Typography>
                                  </div>
                                </div>
                              </th>
                              <th className="pt-5"> $ {value}</th>
                              <th className="pt-5">
                                <div className="d-flex align-items-center justify-content-center gap-3">
                                  <Button
                                    variant="text"
                                    onClick={() => handleDecreaseCart(cartItem)}
                                    className="d-none"
                                  >
                                    -
                                  </Button>
                                  <p>{cartItem.cartQuantity} </p>

                                  <Button variant="text" className="d-none">
                                    +
                                  </Button>
                                </div>
                              </th>
                              <th className="pt-5">
                                {" "}
                                <div className="text-center">
                                  $ {value * cartItem.cartQuantity}
                                </div>
                              </th>

                              <th className="pt-5 text-center">
                                <IconButton
                                  aria-label="delete"
                                  onClick={() => handleRemoveFromCart(cartItem)}
                                >
                                  <DeleteIcon />
                                </IconButton>
                              </th>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {/* End */}
                  </div>
                </div>
                <div className="row py-5 p-4 bg-white rounded shadow-sm">
                  <div className="col-lg-12">
                    <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                      Order summary{" "}
                    </div>
                    <div className="p-4">
                      <p className="font-italic mb-4">
                        Shipping and additional costs are calculated based on
                        values you have entered.
                      </p>
                      <ul className="list-unstyled mb-4">
                        <li className="d-flex justify-content-between py-3 border-bottom">
                          <strong className="text-muted">
                            Order Subtotal{" "}
                          </strong>
                          <strong>${total - 10}</strong>
                        </li>
                        <li className="d-flex justify-content-between py-3 border-bottom">
                          <strong className="text-muted">
                            Shipping and handling
                          </strong>
                          <strong>$10.00</strong>
                        </li>
                        <li className="d-flex justify-content-between py-3 border-bottom">
                          <strong className="text-muted">Tax</strong>
                          <strong>$0.00</strong>
                        </li>
                        <li className="d-flex justify-content-between py-3 border-bottom">
                          <strong className="text-muted">Total</strong>
                          <h5 className="font-weight-bold">$ {total}</h5>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyCart;
