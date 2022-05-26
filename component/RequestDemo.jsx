import React, { useState } from "react";

import styles from "../styles/RequestDemo.module.css";
// import { IoCallOutline, IoMapOutline, IoMailOutline } from "react-icons/io5";

const RequestDemo = () => {
  const [submitterName, setSubmitterName] = useState("");

  return (
    <div  id="products/request">
      <div >
      <form name="contact" method="POST" data-netlify="true">
       <input type="hidden" name="form-name" value="contact-form"/>
        <p>
          <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Your Role: <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select> </label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send aaaaaaaaaaaaaaaaaaa</button>
        </p>
      </form>
      </div>
    </div>
  );
};

export default RequestDemo;
