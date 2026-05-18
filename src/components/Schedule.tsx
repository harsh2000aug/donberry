import React, { useState } from "react";
import { MdMail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import barry from "../images/barry.png";
import barryBanner from "../images/barry-banner.png";
import Loader from "../reuseable-components/Loader/Loader";
import { useForm } from "react-hook-form";
import { enquiryForm } from "../store/Services/AllApi";
import { toast } from "react-toastify";

type FormData = {
  fullName: string;
  organization: string;
  date: string;
  location: string;
  phone: number;
  email: string;
  inquiryDetails: string;
};

const Schedule = () => {
  const MailIcon: any = MdMail;
  const CallIcon: any = IoMdCall;

  const [currentEmbedUrl, setCurrentEmbedUrl]: any = useState("");
  const [loader, setLoader] = useState(true);
  const [loading, setLoading] = useState<Boolean>(false);

  const closeModal = () => {
    setCurrentEmbedUrl("");
  };

  const handlePlay = (embedUrl: string) => {
    const autoplayUrl =
      embedUrl.includes("youtube") || embedUrl.includes("youtu.be")
        ? `${embedUrl}?autoplay=1`
        : embedUrl;
    setCurrentEmbedUrl(autoplayUrl);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const res: any = await enquiryForm({
        body: {
          name: data?.fullName,
          event: data?.organization,
          date: data?.date,
          location: data?.location,
          phone: data?.phone,
          email: data?.email,
          details: data?.inquiryDetails,
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
    <div>
      {currentEmbedUrl && (
        <div className="video-modal" onClick={closeModal}>
          <div className="video-wrapper" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={`${currentEmbedUrl}&rel=0`}
              title="Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button className="close-btn" onClick={closeModal}>
              ✕
            </button>
          </div>
        </div>
      )}

      <section className="gap">
        <div className="container">
          <div className="common-text">
            <div className="col-50">
              <span>THE ORCHESTRATED SILENCE</span>
              <h2>
                Performance <br />
                Schedule
              </h2>
            </div>
            <div className="col-50">
              <p>
                A curated series of intimate piano compositions and orchestral
                collaborations across the European circuit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="gap">
        <div className="container">
          <div className="calendar-wrapper">
            {loader && <Loader loading={true} />}
            <iframe
              src="https://calendar.google.com/calendar/embed?src=donbarrysr@gmail.com&ctz=America/New_York"
              width="100%"
              height="700"
              scrolling="no"
              title="Google Calendar"
              className={`google-calendar-frame ${
                loading ? "calendar-hidden" : "calendar-show"
              }`}
              onLoad={() => setLoader(false)}
            ></iframe>
          </div>
        </div>
      </section>

      <section className="gap">
        <div className="container">
          <div className="enquiry-form">
            <div className="left-enq col-50">
              <h2>Booking Inquiries</h2>
              <p>
                For private recitals, festival bookings, or architectural
                scores, please provide details regarding your event. Every
                request is reviewed personally by Don's management team.
              </p>
              <div className="helplines">
                <div className="mailer">
                  <div className="mail-icon">
                    <MailIcon />
                  </div>
                  <span>bookings@donbarry.com</span>
                </div>
                <div className="caller">
                  <div className="mail-icon">
                    <CallIcon />
                  </div>
                  <span>+49 (0) 30 887 2341</span>
                </div>
              </div>
            </div>
            <div className="right-enq col-50">
              <form className="inq-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="inq-group">
                  <label>FULL NAME</label>
                  <input
                    type="text"
                    placeholder="E.g. Elena Rossi"
                    {...register("fullName", {
                      required: "Full name is required",
                    })}
                  />
                  {errors.fullName && (
                    <p className="error">{errors.fullName.message}</p>
                  )}
                </div>
                <div className="inq-group">
                  <label>ORGANIZATION / EVENT</label>
                  <input
                    type="text"
                    placeholder="Festival de Musique"
                    {...register("organization", {
                      required: "Organization/Event is required",
                    })}
                  />
                  {errors.organization && (
                    <p className="error">{errors.organization.message}</p>
                  )}
                </div>
                <div className="inq-row">
                  <div className="inq-group">
                    <label>PROPOSED DATE</label>
                    <input
                      type="date"
                      {...register("date", {
                        required: "Date is required",
                      })}
                    />
                    {errors.date && (
                      <p className="error">{errors.date.message}</p>
                    )}
                  </div>
                  <div className="inq-group">
                    <label>LOCATION</label>
                    <input
                      type="text"
                      placeholder="City, Country"
                      {...register("location", {
                        required: "Location is required",
                      })}
                    />
                    {errors.location && (
                      <p className="error">{errors.location.message}</p>
                    )}
                  </div>
                </div>
                <div className="inq-row">
                  <div className="inq-group">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      placeholder="+49 (0) 30 887 2341"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9+\-\s()]+$/,
                          message: "Invalid phone number",
                        },
                      })}
                    />
                    {errors.phone && (
                      <p className="error">{errors.phone.message}</p>
                    )}
                  </div>
                  <div className="inq-group">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="bookings@donbarry.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="error">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                <div className="inq-group">
                  <label>INQUIRY DETAILS</label>
                  <textarea
                    placeholder="Describe the atmosphere and requirements..."
                    {...register("inquiryDetails", {
                      required: "Inquiry details are required",
                    })}
                  />
                  {errors.inquiryDetails && (
                    <p className="error">{errors.inquiryDetails.message}</p>
                  )}
                </div>
                <button type="submit" className="inq-btn">
                  SUBMIT INQUIRY
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="gap">
        <div className="container">
          <div className="best-songs">
            <h2>The Best song Ever</h2>
          </div>
          <div className="new-wrapper" id="release">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={10}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                1024: { slidesPerView: 4 },
                768: { slidesPerView: 2 },
                0: { slidesPerView: 1 },
              }}
              className="release-slider"
            >
              <SwiperSlide>
                <div
                  className="news-card"
                  onClick={() =>
                    handlePlay("https://www.youtube.com/embed/UWnskuxP6T4")
                  }
                >
                  <div className="image-wrapper">
                    <img src={barry} className="news-image" />
                    <div className="overlay">
                      <span>Click to Play</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="news-card"
                  onClick={() =>
                    handlePlay("https://www.youtube.com/embed/UWnskuxP6T4")
                  }
                >
                  <div className="image-wrapper">
                    <img src={barry} className="news-image" />
                    <div className="overlay">
                      <span>Click to Play</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="news-card"
                  onClick={() =>
                    handlePlay("https://www.youtube.com/embed/UWnskuxP6T4")
                  }
                >
                  <div className="image-wrapper">
                    <img src={barry} className="news-image" />
                    <div className="overlay">
                      <span>Click to Play</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="news-card"
                  onClick={() =>
                    handlePlay("https://www.youtube.com/embed/UWnskuxP6T4")
                  }
                >
                  <div className="image-wrapper">
                    <img src={barry} className="news-image" />
                    <div className="overlay">
                      <span>Click to Play</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="news-card"
                  onClick={() =>
                    handlePlay("https://www.youtube.com/embed/UWnskuxP6T4")
                  }
                >
                  <div className="image-wrapper">
                    <img src={barry} className="news-image" />
                    <div className="overlay">
                      <span>Click to Play</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <section className="gap">
        <div className="container">
          <div className="barry-banner">
            <img src={barryBanner} alt="barry banner" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
