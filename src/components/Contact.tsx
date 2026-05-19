import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import book from "../images/book.png";
import { FaSpotify } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { contact } from "../store/Services/AllApi";
import { toast } from "react-toastify";
import Loader from "../reuseable-components/Loader/Loader";
import { Link } from "react-router-dom";

type FormData = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const MailIcon: any = CiMail;
  const LocationIcon: any = IoLocationOutline;
  const Spotify: any = FaSpotify;
  const Youtube: any = FaYoutube;
  const Instagram: any = FaInstagramSquare;

  const [loading, setLoading] = useState<Boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    try {
      const res: any = await contact({
        body: {
          name: data?.fullName,
          email: data?.email,
          subject: data?.subject,
          message: data?.message,
        },
      });
      toast.success(res?.message);
      reset();
    } catch (error: any) {
      toast.error(error?.data?.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loader loader={loading} />}
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
                <form className="book-form" onSubmit={handleSubmit(onSubmit)}>
                  <h3>Send a Message</h3>
                  <div className="form-group mb-15">
                    <div className="form-input">
                      <label>Full Name</label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        {...register("fullName", {
                          required: "Full name is required",
                        })}
                      />
                      {errors.fullName && (
                        <p className="error">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div className="form-input">
                      <label>Email</label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Enter a valid email",
                          },
                        })}
                      />
                      {errors.email && (
                        <p className="error">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="form-input mb-15">
                    <label>Subject</label>
                    <input
                      type="text"
                      placeholder="Enter subject"
                      {...register("subject", {
                        required: "Subject is required",
                      })}
                    />
                    {errors.subject && (
                      <p className="error">{errors.subject.message}</p>
                    )}
                  </div>
                  <div className="form-input mb-15">
                    <label>Message</label>
                    <textarea
                      placeholder="Write your message"
                      {...register("message", {
                        required: "Message is required",
                      })}
                    />
                    {errors.message && (
                      <p className="error">{errors.message.message}</p>
                    )}
                  </div>
                  <div className="form-input">
                    <button type="submit">Dispatch Message</button>
                  </div>
                </form>
                <div className="social-media">
                  <div className="col-33 icons">
                    <Link
                      to="https://open.spotify.com/artist/73FeWZD82LSc3sauibguIO"
                      target="_blank"
                    >
                      <Spotify />
                      <span>Spotify</span>
                    </Link>
                  </div>
                  <div className="col-33 icons">
                    <Link
                      to="https://www.youtube.com/channel/UC7s2pITvY7O8XTbsvRVlVxw"
                      target="_blank"
                    >
                      <Youtube />
                      <span>Youtube</span>
                    </Link>
                  </div>
                  <div className="col-33 icons">
                    <Link
                      to="https://www.instagram.com/donbarry02038"
                      target="_blank"
                    >
                      <Instagram />
                      <span>Instagram</span>
                    </Link>
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
    </>
  );
};

export default Contact;
