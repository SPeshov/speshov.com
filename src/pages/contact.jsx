import React from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
import Obfuscate from "react-obfuscate";
import { FaEnvelopeO, FaTwitter, FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaMedium } from "react-icons/lib/fa/";
import Helmet from "react-helmet";

export default props => {
  return (
    <div className="c-content-box">
      <Helmet title="Contact me" />

      <HeadlineWithFocus>
        You can get in touch <span>anytime through</span>
      </HeadlineWithFocus>
      <ul className="c-contact-list">
        <li className="c-contact-list__item">
          <FaEnvelopeO />
          <Obfuscate email="stojan.peshov@gmail.com" />
        </li>
        <li className="c-contact-list__item">
          <FaMedium />
          <a
            href="https://medium.com/@stojanpeshov"
            target="_blank"
            rel="noopener noreferrer"
          >
            @stojanpeshov
          </a>
        </li>
        <li className="c-contact-list__item">
          <FaTwitter />
          <a
            href="https://twitter.com/SPeshov"
            target="_blank"
            rel="noopener noreferrer"
          >
            @SPeshov
          </a>
        </li>
        <li className="c-contact-list__item">
          <FaGithub />
          <a
            href="https://github.com/SPeshov"
            target="_blank"
            rel="noopener noreferrer"
          >
            SPeshov
          </a>
        </li>

        <li className="c-contact-list__item">
          <FaInstagram />
          <a
            href="https://www.instagram.com/speshov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            speshov
          </a>
        </li>
        <li className="c-contact-list__item">
          <FaFacebook />
          <a
            href="https://www.facebook.com/stojan.peshov"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stojan Peshov
          </a>
        </li>
      </ul>
      <h2
        className={`
        js-action-button-anchor
        c-content-box__subheadline 
        c-content-box__subheadline--with-button
      `}
      >
        Do not forget
      </h2>
    </div>
  );
};
