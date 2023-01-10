import React, { useState, useEffect } from "react";
import "./CreateAccountPage.css";
const CreateAccountPage = (props) => {
  const { setCreateAccountShow } = props;
  const {setConfirmationPopShow} = props;

  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState(0);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [post, setPost] = useState(0);
  const [country, setCountry] = useState("");
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState("");
  let Fname = localStorage.getItem("firstname");
  let Lname = localStorage.getItem("lastname");
  let Agevar = localStorage.getItem("age");
  let Emailvar = localStorage.getItem("email");
  let Passwordvar = localStorage.getItem("password");
  let confirmPasswordvar = localStorage.getItem("confirmPassword");
  let Mobilevar = localStorage.getItem("mobile");
  let Addressvar = localStorage.getItem("address");
  let Cityvar = localStorage.getItem("city");
  let Postvar = localStorage.getItem("post");
  let Countryvar = localStorage.getItem("country");
  let Termscheckedvar = localStorage.getItem("termsChecked");
  useEffect(() => {
    setFirstname(Fname);

    setLastname(Lname);

    setAge(Agevar);

    setEmail(Emailvar);

    setPassword(Passwordvar);

    setConfirmPassword(confirmPasswordvar);

    setMobile(Mobilevar);

    setAddress(Addressvar);

    setCity(Cityvar);

    setPost(Postvar);

    setCountry(Countryvar);

    setTerms(Termscheckedvar);
  }, [
    Fname,
    Lname,
    Agevar,
    Emailvar,
    Passwordvar,
    confirmPasswordvar,
    Mobilevar,
    Addressvar,
    Cityvar,
    Postvar,
    Countryvar,
    Termscheckedvar,
  ]);
  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
      localStorage.setItem("firstname", firstname);
      localStorage.setItem("lastname", lastname);
      localStorage.setItem("age", age);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("confirmPassword", confirmPassword);
      localStorage.setItem("mobile", mobile);
      localStorage.setItem("address", address);
      localStorage.setItem("city", city);
      localStorage.setItem("post", post);
      localStorage.setItem("country", country);
      localStorage.setItem("termsChecked", terms);
    }
  };

  //   if (password === confirmPassword) {
  //     console.log("password is equal");
  //   } else {
  //     console.log("password is not equal");
  //   }
  // };

  return (
    <div className="CreateAccountScreenWrap">
      <div className="CreateAccountScreen">
        <div className="CreateAccountDesc">
          <h5>Create Account</h5>
          <button
            onClick={() => {
              setConfirmationPopShow(true);
            
            }}
          >
            X
          </button>
        </div>
        <div className="CreateAccountForm">
          <form onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
            <div className="Name-div">
              <label htmlFor="Name">Name</label>
              <input
                onChange={(event) => {
                  localStorage.setItem("firstname", event.target.value);
                  setFirstname(event.target.value);
                }}
                // onChange={(event) =>
                //   setFormData({ ...formData, firstname: event.target.value })
                // }
                name="FirstName"
                value={firstname}
                id="Name"
                type="text"
                className="Form-input"
                placeholder="First Name"
                required
              />

              <input
                onChange={(event) => {
                  localStorage.setItem("lastname", event.target.value);
                  setLastname(event.target.value);
                }}
                // onChange={(event) =>
                //   setFormData({ ...formData, lastname: event.target.value })
                // }
                name="LastName"
                value={lastname}
                id="Name"
                type="text"
                className="Form-input"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="age-div">
              <label htmlFor="Age">Age</label>
              <input
                onChange={(event) => {
                  localStorage.setItem("age", event.target.value);
                  setAge(event.target.value);
                }}
                // onChange={(event) =>
                //   setFormData({ ...formData, age: event.target.value })
                // }
                value={age}
                name="Age"
                type="number"
                className="Form-input"
                placeholder="Age"
                min="8"
                required
              />
            </div>
            <div className="email-div">
              <label htmlFor="Email">Email</label>
              <input
                onChange={(event) => {
                  localStorage.setItem("email", event.target.value);
                  setEmail(event.target.value);
                }}
                value={email}
                // onChange={(event) =>
                //   setFormData({ ...formData, email: event.target.value })
                // }
                name="Email"
                type="email"
                placeholder="Email"
                className="Form-input"
                required
              />
            </div>
            <div className="passwordDiv">
              <label htmlFor="Password">Password</label>
              <input
                onChange={(event) => {
                  localStorage.setItem("password", event.target.value);
                  setPassword(event.target.value);
                }}
                value={password}
                // onChange={(event) =>
                //   setPassword({ ...formData, password: event.target.value })
                // }
                name="Password"
                type="password"
                placeholder="Create Password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                className="Form-input"
                required
              />

              <input
                onChange={(event) => {
                  localStorage.setItem("confirmPassword", event.target.value);
                  setConfirmPassword(event.target.value);
                }}
                value={confirmPassword}
                name="Confirm-Password"
                type="password"
                placeholder="Confirm Password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                className="Form-input"
                required
              />
            </div>
            <div className="mobile-div">
              <label htmlFor="Mobile No.">Mobile No.</label>
              <input
                onChange={(event) => {
                  localStorage.setItem("mobile", event.target.value);
                  setMobile(event.target.value);
                }}
                value={mobile}
                name="Mobile No."
                type="tel"
                placeholder="Mobile No."
                className="Form-input"
                pattern="[0-9]{10}"
                required
              />
            </div>
            <div className="address-div">
              <label htmlFor="Address">Address</label>
              <input
                onChange={(event) => {
                  localStorage.setItem("address", event.target.value);
                  setAddress(event.target.value);
                }}
                value={address}
                name="Address"
                type="text"
                placeholder="Address"
                className="Form-input"
                required
              />
            </div>
            <div className="city-div">
              <label htmlFor="City">City</label>
              <input
                onChange={(event) => {
                  localStorage.setItem("city", event.target.value);
                  setCity(event.target.value);
                }}
                value={city}
                name="City"
                type="text"
                placeholder="City"
                className="Form-input"
                required
              />
            </div>
            <div className="post-div">
              <label htmlFor="Post-Code">Post-Code</label>
              <input
                onChange={(event) => {
                  localStorage.setItem("post", event.target.value);
                  setPost(event.target.value);
                }}
                value={post}
                name="Post-Code"
                type="tel"
                placeholder="Postal/Zip Code"
                pattern="[0-9]{6}"
                className="Form-input"
                required
              />
            </div>
            <div className="country-div">
              <label for="Country">Country</label>
              <input
                onChange={(event) => {
                  localStorage.setItem("country", event.target.value);
                  setCountry(event.target.value);
                }}
                value={country}
                name="Country"
                type="text"
                className="Form-input"
                placeholder="Country"
                list="Country"
              />
              <datalist id="Country">
                <option value="India">India</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Canada">Canada</option>
              </datalist>
            </div>
            <div className="terms-div">
              <input
                type="checkbox"
                id="exampleCheck"
                onChange={(event) => {
                  localStorage.setItem("termsChecked", event.target.checked);
                  setTerms(event.target.value);
                }}
                value={terms}
              />

              <label for="exampleCheck">
                I agree to these Terms and Conditions.
              </label>
            </div>

            <button onClick={() =>{
              setCreateAccountShow(false);
              localStorage.clear();
            }} 
              type="submit"
              className="submitBtn-CreateAccount"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
