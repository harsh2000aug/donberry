import React from "react";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import book from "../images/book.png";
import { FaSpotify } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Contact = () => {
  const MailIcon: any = CiMail;
  const LocationIcon: any = IoLocationOutline;
  const Spotify: any = FaSpotify;
  const Youtube: any = FaYoutube;
  const Instagram: any = FaInstagramSquare;
  return (
    <div>
      <section className="gap">
        <div className="container">
          <div className="contact-text">
            <h2>Inquiries & Correspondence</h2>
            <p>
              For professional engagements, scoring commissions, and general
              archival requests.
            </p>
          </div>
          <div className="ct-section">
            <div className="q-form">
              <div className="book-form">
                <h3>Send a Message</h3>
                <div className="form-group mb-15">
                  <div className="form-input">
                    <label htmlFor="">Full Name</label>
                    <input type="text" name="" id="" />
                  </div>
                  <div className="form-input">
                    <label htmlFor="">Email</label>
                    <input type="email" name="" id="" />
                  </div>
                </div>
                <div className="form-input mb-15">
                  <label htmlFor="">Subject</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="form-input mb-15">
                  <label htmlFor="">Message</label>
                  <textarea name="" id=""></textarea>
                </div>
                <div className="form-input">
                  <button>Dispatch Message</button>
                </div>
              </div>
              <div className="social-media">
                <div className="col-33 icons">
                  <Spotify />
                  <span>Spotify</span>
                </div>
                <div className="col-33 icons">
                  <Youtube />
                  <span>Youtube</span>
                </div>
                <div className="col-33 icons">
                  <Instagram />
                  <span>Instagram</span>
                </div>
              </div>
            </div>
            <div className="p-book">
              <div className="performance">
                <h3>Performance Booking</h3>
                <p>
                  Available for orchestral solos, chamber recitals, and modern
                  collaborations. Please specify date, venue, and repertoire
                  requirements.
                </p>
                <div className="helpers">
                  <div className="mail">
                    <MailIcon />
                    <p>mgmt@elenavance.com</p>
                  </div>
                  <div className="mail">
                    <LocationIcon />
                    <p>Berlin / London</p>
                  </div>
                </div>
              </div>
              <div className="performance resonbate">
                <img src={book} alt="" />
                <h3>Resonant Shadows</h3>
                <p>
                  A limited edition vinyl exploration of low-frequency ambient
                  structures. Now shipping globally.
                </p>
              </div>
              <div className="performance working">
                <h3>Correspondence Hours</h3>
                <div className="common-text">
                  <div>
                    <h3>Mon — Fri</h3>
                    <h3>Sat — Sun</h3>
                  </div>
                  <div>
                    <p> 10:00 - 16:00 CET</p>
                    <p>Closed for Rehearsal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
