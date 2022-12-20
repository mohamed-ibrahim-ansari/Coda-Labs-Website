import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./ContactusPage.css";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BiMap } from "react-icons/bi";

const ContactusPage = (props) => {
  const { setContactusShow } = props;

  const [email, setEmail] = useState("");
  const EmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const form = useRef();
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
    .sendForm(
        "service_329j6jl",
        "template_0wp590b",
        form.current,
        "NWzwhOBGBWnBMTXVb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
        );
        event.target.reset();
  };

  return (
    <div>
      <div className="pop_up_screen_wrap" id="screen8">
        <div className="pop_up_screen">
          <div className="contact-desc">
            <h5>Contact Us</h5>

            <button
              onClick={() => {
                setContactusShow(false);
              }}
              id="pop-up-close"
            >
              X
            </button>
          </div>
          <div className="whole-contact-wrap">
            <div className="contact-wrapper1">
              <div className="form-list">
                <form ref={form} onSubmit={sendEmail} name="form">
                  <input
                    type="text"
                    className="form-control-form-group"
                    placeholder=" Name"
                    name="name"
                    required
                  />

                  <input
                    id="contact_us_input_email"
                    name="email"
                    className="form-control-form-group"
                    placeholder="Email"
                    onChange={EmailHandler}
                    value={email}
                    required
                  />

                  <span id="alert_email" className="alert_email">
                    * please enter a valid email
                  </span>
                  <textarea
                    rows="3"
                    className="form-control-form-group"
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    id="submit-btn"
                    name="submit"
                    value="send"
                    className="Send-message"
                  >
                    Message
                  </button>
                  <span id="mail-success" className="mail-status">
                    Thank You for contacting CODA LABS
                  </span>
                </form>

                {/* <script>
                  if ( window.history.replaceState ){" "}
                  {window.history.replaceState(
                    null,
                    null,
                    window.location.href
                    )}
                    ;
                  </script> */}
              </div>
            </div>
            <div className="content-list">
              <h1>Contact Info</h1>

              <AiOutlinePhone aria-hidden="true" id="phone-icon" />
              <h6>+91 9876543210</h6>

              <AiOutlineMail aria-hidden="true" id="mail-icon" />
              <h6>info@codasol.com</h6>

              <BiMap aria-hidden="true" id="address-icon" />
              <h6>
                New No:37, Old No:16, 1st Floor,
                <br />
                Brindavan Street Extension,
                <br />
                West Mambalam,
                <br />
                Chennai-600033, Tamil Nadu, India
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactusPage;
