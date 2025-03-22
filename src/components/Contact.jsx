function Contact({ contactInfo }) {
    return (
      <div>
        <p><strong>Email:</strong> {contactInfo.email}</p>
        <p><strong>Phone:</strong> {contactInfo.phone}</p>
      </div>
    );
  }
  
  export default Contact;
  