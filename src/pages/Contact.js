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
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/jane-agadia"
              alt="linkedin"
            >
              <i className="linkedin icon large "></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/message/JVOKBIKMBAITH1?autoload=1&app_absent=0"
              alt="whatsapp"
            >
              <i className="whatsapp icon large"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/Agadiateejay?t=0qwgpiHLzrkPqLFzvFQAw&s=08"
              alt="twiter"
            >
              <i className="twitter icon large"></i>
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Janeagadia"
              alt="github"
            >
              <i className="github icon large"></i>
            </a>
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
