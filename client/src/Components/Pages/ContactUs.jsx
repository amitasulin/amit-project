// import React from "react";
// import "./ContactUs.css";
// export default function contactUs() {
//   return (
//     <div>
//

//       <div className="write">
//         <h1> CONTACT INFORMATION </h1> <br></br>
//         <h2> General Inquiries (Monday to Friday, 8:30 AM to 4:30 PM) </h2>
//         <br></br>
//         <br></br>
//         <h3>Afula, Sderot Rova Yizrael 14 Postal code 1804300 Main entrance</h3>
//         <br></br>
//         <h4> Telephone: +972542116116</h4>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <div>
      <div className="about">
        <h4> Welcome to Amit 🌱 Cannabis shop </h4>
        <p>
          On November 23, 2017, the Government of Newfoundland and Labrador
          authorized NLC to regulate the possession, sale and delivery of
          non-medical cannabis. Included in these new responsibilities was the
          authority to list products, set pricing and to be the exclusive online
          retailer of non-medical cannabis in the province. This new mandate
          spawned the need to create a unique brand to differentiate the lines
          of business within the Corporation, which includes NLC Liquor Stores,
          Liquor Express, Rock Spirits, and now Cannabis NL.
        </p>
      </div>
      <div className="contact">
        <h1> CONTACT INFORMATION </h1> <br></br>
        <h2> General Inquiries (Monday to Friday, 8:30 AM to 4:30 PM) </h2>
        <br></br>
        <br></br>
        <h3>Afula, Sderot Rova Yizrael 14 Postal code 1804300 Main entrance</h3>
        <br></br>
        <h4> Telephone: +972542116116</h4>
      </div>{" "}
      <br></br>
      <h2>WRITE TO US</h2>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <br></br>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <br></br>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <br></br>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
