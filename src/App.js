// import package
import { useState, useEffect } from "react";
import axios from "axios";

// import assets
import logo from "./assets/img/logo.png";
import setting from "./assets/img/setting.svg";
import cssModules from "./assets/css/App.module.css";

function App() {
  const [countries, setCountries] = useState([]);

  const dates = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 28, 30, 31,
  ];
  const months = [
    { id: 1, name: "January" },
    { id: 2, name: "February" },
    { id: 3, name: "March" },
    { id: 4, name: "April" },
    { id: 5, name: "May" },
    { id: 6, name: "June" },
    { id: 7, name: "July" },
    { id: 8, name: "August" },
    { id: 9, name: "September" },
    { id: 10, name: "October" },
    { id: 11, name: "November" },
    { id: 12, name: "December" },
  ];
  let years = [];
  let date = new Date().getFullYear();
  function* iterate(a, b) {
    for (let i = a; i <= b; i += 1) {
      yield i;
    }
  }

  function range(a, b) {
    let result = [...iterate(a, b)];
    years.push(result);
  }
  range(1930, date);

  // fetching data
  const getCountryDatas = async () => {
    try {
      axios("https://restcountries.com/v2/all")
        .then((response) => {
          setCountries(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountryDatas();
  }, []);

  return (
    <div className={cssModules.formContainer}>
      {/* Nav Section */}
      <div className={cssModules.formNav}>
        <img src={logo} alt={logo} />
        <div className={cssModules.translate}>
          <label htmlFor="language">Language:</label>
          <select name="language" id="language">
            <option value="English">English</option>
            <option value="Indonesia">Indonesia</option>
          </select>
          <img src={setting} alt={setting} />
        </div>
      </div>
      <div className={cssModules.prompt}>
        <h2>You don't have an account yet, please create a new account</h2>
      </div>

      {/* Data Section */}
      <div className={cssModules.formWrapper}>
        <form className={cssModules.formInput}>
          <h1 className={cssModules.labelTitle}>Create new account</h1>
          <label htmlFor="title">Title</label> <br />
          {/* checkboxes */}
          <div className={cssModules.checkWrapper}>
            <input
              type="checkbox"
              value="Mrs"
              id="Mrs"
              className={cssModules.checkBox}
            />
            <label htmlFor="Mrs">
              <span className={cssModules.checkLabel}>Mrs</span>
            </label>
            <input
              type="checkbox"
              value="Ms"
              id="Ms"
              className={cssModules.checkBox}
            />
            <label htmlFor="Ms">
              <span className={cssModules.checkLabel}>Ms</span>
            </label>
            <input
              type="checkbox"
              value="Mdm"
              id="Mdm"
              className={cssModules.checkBox}
            />
            <label htmlFor="Mdm">
              <span className={cssModules.checkLabel}>Mdm</span>
            </label>
            <input
              type="checkbox"
              value="Mr"
              id="Mr"
              className={cssModules.checkBox}
            />
            <label htmlFor="Mr">
              <span className={cssModules.checkLabel}>Mr</span>
            </label>
            <input
              type="checkbox"
              value="Dr"
              id="Dr"
              className={cssModules.checkBox}
            />
            <label htmlFor="Dr">
              <span className={cssModules.checkLabel}>Dr</span>
            </label>
          </div>
          {/* name */}
          <div className={cssModules.inputName}>
            <div className={cssModules.inputWrapper}>
              <label htmlFor="lastName">
                Last name <span>*</span>
              </label>
              <input
                type="text"
                className={cssModules.input}
                name="lastName"
                id="lastName"
                placeholder="Last name"
              />
            </div>
            <div className={cssModules.inputWrapper}>
              <label htmlFor="firstName">
                First name <span>*</span>
              </label>
              <input
                type="text"
                className={cssModules.input}
                name="firstName"
                id="firstName"
                placeholder="First name"
              />
            </div>
            <div className={cssModules.inputWrapperPhone}>
              <label htmlFor="lastName">
                Mobile phone number <span>*</span>
              </label>
              <select name="country" id="country">
                {countries?.map((item, index) => (
                  <option key={index} value={item.callingCodes}>
                    {item.name} +{item.callingCodes}
                  </option>
                ))}
              </select>
              <input
                type="number"
                className={cssModules.input}
                name="phone"
                id="phone"
                placeholder="Phone Number"
              />
            </div>
          </div>
          {/* Address */}
          <h1 className={cssModules.labelTitle}>Address</h1>
          <div className={cssModules.inputName}>
            <div className={cssModules.inputWrappers}>
              <label htmlFor="address">
                Address <span>*</span>
              </label>
              <input
                type="text"
                className={cssModules.input}
                name="address"
                id="address"
                placeholder="Address"
              />
            </div>
            <div className={cssModules.inputWrapper}>
              <label htmlFor="country">
                Country <span>*</span>
              </label>
              <select name="country" id="country">
                <option value="">Select Country/Location</option>
                {countries?.map((item, index) => (
                  <option key={index} value={item.callingCodes}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className={cssModules.inputWrapper}>
              <label htmlFor="province">
                Province/District <span>*</span>
              </label>
              <select name="country" id="country">
                <option value="">Province/District</option>
                {countries?.map((item, index) => (
                  <option key={index} value={item.capital}>
                    {item.capital}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* contact */}
          <h1 className={cssModules.labelTitle}>Contacts</h1>
          <div className={cssModules.inputName}>
            <div className={cssModules.inputWrapperEmail}>
              <label htmlFor="email">
                Email Address <span>*</span>
              </label>
              <input
                type="email"
                className={cssModules.input}
                name="email"
                id="email"
                placeholder="Email Address"
              />
            </div>
            <div className={cssModules.inputWrapperDate}>
              <div className={cssModules.dateInput}>
                <label htmlFor="date">
                  Date of birth <span>*</span>
                </label>
                <select
                  name="country"
                  id="country"
                  className={cssModules.input}
                >
                  <option value="">DD</option>
                  {dates?.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className={cssModules.dateInputs}>
                <p>Indulge in birthday treats just for you!</p>
              </div>
              <div className={cssModules.dateInput}>
                <label htmlFor="month">
                  Month <span>*</span>
                </label>
                <select
                  name="country"
                  id="country"
                  className={cssModules.input}
                >
                  <option value=""> &#128197; MM</option>
                  {months?.map((item, index) => (
                    <option key={index} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className={cssModules.dateInput}>
                <label htmlFor="date">
                  Year <span>*</span>
                </label>
                <select
                  name="country"
                  id="country"
                  className={cssModules.input}
                >
                  <option value="">&#128197; YYYY</option>
                  {years[0].map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          {/* privacy */}
          <h1 className={cssModules.labelTitle}>Standard Privacy Note</h1>
          <p className={cssModules.privacy}>
            I warrant that the above information is true and correct. I
            understand that failure to answer all question listed in this
            application form may prevent L'OCCITANE from processing my
            application; and L'OCCITANE may refuse to accept this aplication in
            the right of my individual circumstance.
          </p>
          <p className={cssModules.privacy}>
            I understand that the information collected will be used and
            retained by L'OCCITANE for the purpose of (i) my application of
            membership program of L'OCCITANE (ii) providing member-exclusive
            services; and (iii) the daily management operation and maintenance
            of membership account at L'OCCITANE.
          </p>
          <p className={cssModules.privacy}>
            I understand that it is necessary for me to provide L'OCCITANE with
            data in connection with the privilege. Failure to provide sudh data
            may result in L'OCCITANE stores or official website.
          </p>
          <p className={cssModules.privacy}>
            L'OCCITANE reserves the right to change any of the terms and
            conditions without prior notice. Changes will be postes on signage
            placed at L'OCCITANE stores or official website.
          </p>
          <p className={cssModules.privacy}>
            {" "}
            I understand that L'OCCITANE may use my personal information for the
            purpose of providing or promoting services / products made available
            by L'OCCITANE. To choose wheter to receive any promotional
            information sent by L'OCCITANE , please tick the box below.
          </p>
          <p className={cssModules.privacy}>
            I want to receive information or communication from L'OCCITANE.
          </p>
          {/* send notif */}
          <div className={cssModules.notif}>
            <section>
              <span>SMS & Mobile Call</span>
              <div className={cssModules.slideBoxWrapper}>
                <input type="checkbox" value="1" id="sms" />
                <label htmlFor="sms"></label>
              </div>
            </section>
            <section>
              <span>Emailing</span>
              <div className={cssModules.slideBoxWrapper}>
                <input type="checkbox" value="1" id="emailing" />
                <label htmlFor="emailing"></label>
              </div>
            </section>
            <section>
              <span>Mailing</span>
              <div className={cssModules.slideBoxWrapper}>
                <input type="checkbox" value="1" id="mailing" />
                <label htmlFor="mailing"></label>
              </div>
            </section>
          </div>
          <div className={cssModules.dateInputss}>
            <p>
              Subscribe to SMS & mobile call. Email & Mailing to receive updates
              about your membership perks and exclusive promotions!
            </p>
          </div>
          {/* term & condition agreement */}
          <div className={cssModules.terms}>
            <input type="checkbox" />{" "}
            <p>
              I have read and understood the above terms and conditions and
              hereby agree that I will be bounded by there conditions and
              policies once I have submitted this application form.
            </p>
          </div>
          <button type="submit">CREATE CUSTOMER</button>
        </form>
      </div>
      <h3>v1.0.7</h3>
    </div>
  );
}

export default App;
