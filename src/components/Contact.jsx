import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="mb-3 my-5">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control border-dark"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control border-dark"
          id="exampleFormControlTextarea1"
          rows="5"
        ></textarea>
      </div>
      <button type="button" class="btn btn-primary">submit</button>

    </div>
  );
};

export default Contact;
