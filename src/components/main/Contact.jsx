import Title from "./Title";

const Contact = () => {
  return (
    <div className="contact">
      <Title title="contact" />
      <h2>have any question ? </h2>
      <form className="contact-form">
        <div className="right">
          <input type="text" placeholder="name" />
          <input type="email" placeholder="E-Mail" />
          <button type="submit" className="btn-submit">
            SEND
          </button>
        </div>
        <div>
          <textarea name="massage" id="massage"></textarea>
        </div>
      </form>
    </div>
  );
};

export default Contact;
