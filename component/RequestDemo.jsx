import React, { useState } from "react";

import styles from "../styles/RequestDemo.module.css";
// import { IoCallOutline, IoMapOutline, IoMailOutline } from "react-icons/io5";

const RequestDemo = () => {
  const [submitterName, setSubmitterName] = useState("");

  return (
    <div className={styles.container} id="products/request">
      <h2 className={styles.title}>Request demo</h2>
      <p className={styles.desc}>
        Any questions? We`re here to help. Fill out the form and we will be in
        touch.
      </p>
      <div className={styles.line}></div>
      <div className={styles.row}>
        <div className={styles.mainContact}>
          <div className={styles.contact}>
            <div className={styles.icons}>
              {/* <IoCallOutline /> */}
            </div>
            <p className={styles.c_title}>Call Us</p>
            <p className={styles.c_text}>(833) 888-8353</p>
          </div>
          <div className={styles.contact}>
            <div className={styles.icons}>
              {/* <IoMailOutline /> */}
            </div>
            <p className={styles.c_title}>Email Us</p>
            <p className={styles.c_text}>info@tteld.com</p>
          </div>
          <div className={styles.contact}>
            <div className={styles.icons}>
              {/* <IoMapOutline /> */}
            </div>
            <p className={styles.c_title}>Visit Office</p>
            <p className={styles.c_text}>
              799 N Court Street,
              <br /> Medina OH 44256{" "}
            </p>
            <p className={styles.c_text}> </p>
          </div>
        </div>
        <form className={styles.newUser}  method="POST"
      name="contact-form"
      action="contact/?success=true"
      data-netlify="true"
      data-netlify-honeypot="bot-field">
          <input
        type="hidden"
        name="subject"
        value= {`You've got mail from ${submitterName}`} 
      />
       <input type="hidden" name="form-name" value="contact-form" />
          <div className={styles.newUser}>
            <input
              className={styles.input}
        id="name"
        onChange={(e) => setSubmitterName(e.target.value)}

              name='name'
              type="text"
              placeholder="Your Name*"
              required

            />
            <input
              className={styles.input}
              name='email'
              type="email"
              placeholder="Your Email*"
              required

            />
          </div>
          <div className={styles.newUserItem}>
      <label htmlFor="company">Company aaaaaaaaaaaaaaa *</label>

            <input
              className={styles.input}
              id="company" name="company" required type="text"
              placeholder="Company Name*"
             

            />
            <input
              className={styles.input}
              name='truckAmount'
              type="number"
              placeholder="Amount of trucks*"
              required

            />
          </div>
          
          <div className={styles.newUserItem}>
            <input
              className={styles.inputs}
              name='phone'
              type="text"
              placeholder="Phone*"
              required

            />
          </div>
          <div className={styles.newUserItem}>
          <textarea required   rows="5" name="message" className={styles.textarea} placeholder="Type your message here..."/>
          </div>
          <div className={styles.inpWrapper}>
          <input type="submit" className={styles.btn_btn} value="Send Message"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestDemo;
