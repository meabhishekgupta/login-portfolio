import React from "react";
import gmailIcon from '../images/gmail-icon.png';
import linkednIcon from '../images/linkedin-icon.png';
export default function Contact() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div id="messageBox">
          <form className="m-5 p-4 rounded shadow bg-warning">
            <div className="form-group mb-3">
              <label className="form-label" for="message">Message</label>
              <input className="form-control input-lg" type="text" />
            </div>
            <div className="mb-2">
              <button className="btn btn-primary">Send</button>
            </div>
          </form>
        </div>
        <div id="textBox">
          <div className="m-4">
            <h2>Let’s Connect</h2>
          <p>
            If you’d like to discuss a project, collaborate, or just say hello,
            feel free to reach out. I’m always open to new opportunities and
            conversations.
          </p>
          <div id="contactIcons" className="d-flex">
            <img src={gmailIcon} className="m-3" alt="gmailIcon" onClick={()=>{window.open("mailto:abhi5048462@gmail.com")}}/>
            <img src={linkednIcon} className="m-3" alt="linkedInicon" onClick={()=>{window.open("www.linkedin.com/in/guptaabhi1999","_blank")}}/>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
