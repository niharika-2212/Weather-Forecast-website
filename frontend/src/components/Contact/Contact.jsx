import { useState } from "react";
import "./Contact.css";
function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  function handleChange(event) {
    setFormData((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value }
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="contact">
      <div className="header-contact">
        <div className="heading1">Get in Touch</div>
        <div className="subtitle1">
          Have questions about SkyCast? We're here to help! Fill out the form
          below and we'll get back to you as soon as possible.
        </div>
      </div>
      <div className="contact-form">
        <form className="form" onSubmit={handleSubmit}>
          <label>Name:</label>
          <input className="input-form" type="text" name="name" value={formData.name} placeholder="Your Name" onChange={handleChange} required />
          <label>Email:</label>
          <input className="input-form" type="email" name="email" value={formData.email} placeholder="Your Email" onChange={handleChange} required />
          <label>Message:</label>
          <textarea className="input-form"
            placeholder="Your message"
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit">Send message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
