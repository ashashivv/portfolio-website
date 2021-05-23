import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Message Sent ✔`);
    setData({
      fullname: "",
      phone: "",
      email: "",
      msg: "",
    });
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center mt-5 contact">Contact Me</h1>
      </div>
      <div className="container contact">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="form-group">
                <label for="exampleFormControlInput1">FullName</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="Mobile Number"
                />
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="name@example.com"
                />
              </div>

              <div className="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                ></textarea>
              </div>
              <div className="col-12">
                <button
                  class="btn btn-outline-primary mb-5 mt-5 "
                  type="submit"
                >
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
