import React, { useState } from "react";

import styles from "../styles/RequestDemo.module.css";
// import { IoCallOutline, IoMapOutline, IoMailOutline } from "react-icons/io5";

const RequestDemo = () => {
  const [submitterName, setSubmitterName] = useState("");

  return (
    <div  id="products/request">
      <div >
        <form
          method="POST"
          name="contact-form"
          action="contact/?success=true"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input
            type="hidden"
            name="subject"
            value={`You've got mail from `}
          />
          <input type="hidden" name="form-name" value="contact-form" />
          <div >
            <input
             
              id="name"
              name="name"
              type="text"
              placeholder="Your Name*"
              required
            />
            <input
             
              name="email"
              type="email"
              placeholder="Your Email*"
              required
            />
                 <input
              
              name="email"
              type="email"
              placeholder="Your Email*"
              required
            />
          </div>
          <div >
            <label htmlFor="company">Company aaaaaaaaaaaaaaa *</label>

            <input
              id="company"
              name="company"
              required
              type="text"
              placeholder="Company Name*"
            />
            <input
              name="truckAmount"
              type="number"
              placeholder="Amount of trucks*"
              required
            />
          </div>

          <div >
            <input
              name="phone"
              type="text"
              placeholder="Phone*"
              required
            />
          </div>
          <div >
            <textarea
              required
              rows="5"
              name="message"
             
              placeholder="Type your message here..."
            />
          </div>
          <div >
            <input
              type="submit"
              value="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestDemo;
