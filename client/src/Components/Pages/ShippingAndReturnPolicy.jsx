import React from "react";
import "./ShippingAndReturnPolicy.css";
import img from "../../assets/download.jpg";
export default function ShippingAndReturnPolicy() {
  return (
    <div className="shipping-return-policy">
      <h2>Shipping and Return Policy</h2>
      <img className="img-fluid" src={img} alt="logo" />

      <h3>Shipping Information</h3>
      <p>
        We offer fast and reliable shipping to our customers. Orders are usually
        processed within 1-2 business days.
      </p>
      <p>
        Standard shipping within the continental US takes 3-5 business days,
        while international shipping may vary.
      </p>

      <h3>Returns and Exchanges</h3>
      <p>
        If you're not satisfied with your purchase, we offer a hassle-free
        return and exchange policy.
      </p>
      <p>
        Items can be returned within 30 days of purchase. To initiate a return,
        please contact our customer service team.
      </p>
      <p>
        Returned items must be in their original condition and packaging. Once
        we receive the returned item, we'll process your refund or exchange.
      </p>

      <h3>Conditions</h3>

      <li>Shipping fees are non-refundable.</li>
      <li>
        Customers are responsible for return shipping costs, unless the item
        received was damaged or incorrect.
      </li>
      <li>
        For exchanges, any price difference between items will be charged or
        refunded accordingly.
      </li>

      <p>
        Please review our full terms and conditions for more detailed
        information.
      </p>
    </div>
  );
}
