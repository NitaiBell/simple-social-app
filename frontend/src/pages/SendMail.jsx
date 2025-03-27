import React from "react";
import "./SendMail.css";

export default function SendMail() {
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=nitaibell18@gmail.com&su=Hello&body=I%20love%20your%20site!`;

  return (
    <div className="send-mail-page">
      <h1 className="send-mail-title">📬 Contact Me</h1>
      <p className="send-mail-text">Click the button below to send me an email via Gmail:</p>

      <a href={gmailLink} target="_blank" rel="noopener noreferrer" className="gmail-button">
        <span>Send Email</span>
        <div className="gmail-icons-in-button">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Gmail" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Mail" />
        </div>
      </a>
    </div>
  );
}


