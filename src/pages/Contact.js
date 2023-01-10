import Button from "../layout/button";

function Contact() {
  return (
    <div className="pages contact-page">
      <h1>Reach Out!</h1>
      <p>
        I'm Open To freelance, internship and junior Developer Roles. Got
        something that sounds exciting, or just want to say hello? Get In Touch
        With Me.
      </p>

      <div className="contact-icons">
        <ul>
          <li>
            {" "}
            <i class="linkedin icon large "></i>
          </li>
          <li>
            <i class="instagram icon large "></i>
          </li>
          <li>
            <i class="twitter icon large"></i>
          </li>

          <li>
            <i class="github icon large"></i>
          </li>
        </ul>
      </div>
      <div className="link-div">
        <Button text="Contact me " />
      </div>
    </div>
  );
}

export default Contact;
