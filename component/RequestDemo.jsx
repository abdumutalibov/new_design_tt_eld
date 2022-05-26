import React, { useState } from "react";

import styles from "../styles/RequestDemo.module.css";
// import { IoCallOutline, IoMapOutline, IoMailOutline } from "react-icons/io5";

const RequestDemo = () => {
  const [submitterName, setSubmitterName] = useState("");

  return (
    <div className={styles.container} id="products/request">
      <div className={styles.row}>
        <form
          className={styles.newUser}
          method="POST"
          name="contact-form"
          action="contact/?success=true"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input
            type="hidden"
            name="subject"
            value={`You've got mail from ${submitterName}`}
          />
          <input type="hidden" name="form-name" value="contact-form" />
          <div className={styles.newUser}>
            <input
              className={styles.input}
              id="name"
              onChange={(e) => setSubmitterName(e.target.value)}
              name="name"
              type="text"
              placeholder="Your Name*"
              required
            />
            <input
              className={styles.input}
              name="email"
              type="email"
              placeholder="Your Email*"
              required
            />
                 <input
              className={styles.input}
              name="email"
              type="email"
              placeholder="Your Email*"
              required
            />
          </div>
          <div className={styles.newUserItem}>
            <label htmlFor="company">Company aaaaaaaaaaaaaaa *</label>

            <input
              className={styles.input}
              id="company"
              name="company"
              required
              type="text"
              placeholder="Company Name*"
            />
            <input
              className={styles.input}
              name="truckAmount"
              type="number"
              placeholder="Amount of trucks*"
              required
            />
          </div>

          <div className={styles.newUserItem}>
            <input
              className={styles.inputs}
              name="phone"
              type="text"
              placeholder="Phone*"
              required
            />
          </div>
          <div className={styles.newUserItem}>
            <textarea
              required
              rows="5"
              name="message"
              className={styles.textarea}
              placeholder="Type your message here..."
            />
          </div>
          <div className={styles.inpWrapper}>
            <input
              type="submit"
              className={styles.btn_btn}
              value="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestDemo;
