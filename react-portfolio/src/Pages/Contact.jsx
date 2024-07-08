import React, { useState } from "react";
import "../index.css";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMsg = "";
    if (!value) {
      errorMsg = `${name} is required.`;
    } else if (
      name === "email" &&
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
    ) {
      errorMsg = "Invalid email address.";
    }
    setErrors({ ...errors, [name]: errorMsg });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            class="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            class="validate[required,custom[email]] feedback-input"
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            class="validate[required,length[6,300]] feedback-input"
          ></textarea>
          {errors.message && <span>{errors.message}</span>}
        </div>
        <button value="SEND" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
