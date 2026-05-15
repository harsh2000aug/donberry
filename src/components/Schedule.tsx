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

const Schedule = () => {
  const MailIcon: any = MdMail;
  const CallIcon: any = IoMdCall;

  const [currentEmbedUrl, setCurrentEmbedUrl]: any = useState("");
  const [loading, setLoading] = useState(true);

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
            {loading && <Loader />}
            <iframe
              src="https://calendar.google.com/calendar/embed?src=donbarrysr@gmail.com&ctz=America/New_York"
              width="100%"
              height="700"
              scrolling="no"
              title="Google Calendar"
              className={`google-calendar-frame ${
                loading ? "calendar-hidden" : "calendar-show"
              }`}
              onLoad={() => setLoading(false)}
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
              <form className="inq-form">
                <div className="inq-group">
                  <label>FULL NAME</label>
                  <input type="text" placeholder="E.g. Elena Rossi" />
                </div>
                <div className="inq-group">
                  <label>ORGANIZATION / EVENT</label>
                  <input type="text" placeholder="Festival de Musique" />
                </div>
                <div className="inq-row">
                  <div className="inq-group">
                    <label>PROPOSED DATE</label>
                    <input type="date" placeholder="mm/dd/yyyy" />
                  </div>
                  <div className="inq-group">
                    <label>LOCATION</label>
                    <input type="text" placeholder="City, Country" />
                  </div>
                </div>
                <div className="inq-group">
                  <label>INQUIRY DETAILS</label>
                  <textarea placeholder="Describe the atmosphere and requirements..." />
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
