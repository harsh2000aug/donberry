import React, { useState } from "react";
import donberry from "../images/music.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import musician from "../images/musician.png";
import release from "../images/release.png";
import { FaPlay } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { BsAppleMusic } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { SiYoutubemusic } from "react-icons/si";
import { SiTidal } from "react-icons/si";
import { FaDeezer } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

const Music = () => {
  const Play: any = FaPlay;
  const Spotify: any = FaSpotify;
  const AppleMusic: any = BsAppleMusic;
  const Heart: any = CiHeart;
  const Youtubemusic: any = SiYoutubemusic;
  const Tidal: any = SiTidal;
  const Deezer: any = FaDeezer;
  const Soundcloud: any = FaSoundcloud;
  const ChevronDown: any = FaChevronDown;

  const [currentEmbedUrl, setCurrentEmbedUrl]: any = useState("");

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
          <div className="landing-area">
            <div className="left-side col-50">
              <img src={donberry} alt="" />
            </div>
            <div className="right-side col-50">
              <h1>
                The <br /> Sound of <br /> Shadow
              </h1>
              <p>
                A collection of recorded works spanning three decades of jazz
                exploration, featuring intimate solo sessions and expansive
                ensemble compositions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="gap">
        <div className="container">
          <div className="common-text">
            <h2>Latest Releases</h2>
            <p>SELECTED WORKS</p>
          </div>
          <div className="latest-release">
            <img src={release} alt="latest-release" />
          </div>
        </div>
      </section>

      <section className="gap">
        <div className="container">
          <div className="common-text">
            <h2>Latest Releases (Songs)</h2>
          </div>
          <div className="songs-grid">
            <div className="song-card">
              <div className="song-top">
                <div className="song-image-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=500&auto=format&fit=crop"
                    alt=""
                  />
                </div>
                <div className="song-content">
                  <h3>Beautiful Things</h3>
                  <p>The Midnight Collective • 2023</p>
                </div>
                <button className="play-btn">
                  <Play />
                </button>
              </div>
              <div className="song-footer">
                <div className="platforms">
                  <span
                    className="platform-icon"
                    style={{ background: "#1DB954" }}
                  >
                    <Spotify />
                  </span>

                  <span
                    className="platform-icon"
                    style={{ background: "#ff2d55" }}
                  >
                    <AppleMusic />
                  </span>

                  <button className="dropdown-btn">
                    <ChevronDown />
                  </button>

                  <div className="platform-dropdown">
                    <p>
                      <Youtubemusic />
                      YouTube Music
                    </p>
                    <p>
                      <Tidal />
                      Tidal
                    </p>
                    <p>
                      <Deezer />
                      Deezer
                    </p>
                    <p>
                      <Soundcloud />
                      SoundCloud
                    </p>
                  </div>
                </div>
                <button className="heart-btn">
                  <Heart />
                </button>
              </div>
            </div>
            <div className="song-card">
              <div className="song-top">
                <div className="song-image-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=500&auto=format&fit=crop"
                    alt=""
                  />
                </div>
                <div className="song-content">
                  <h3>Beautiful Things</h3>
                  <p>The Midnight Collective • 2023</p>
                </div>
                <button className="play-btn">
                  <Play />
                </button>
              </div>
              <div className="song-footer">
                <div className="platforms">
                  <span
                    className="platform-icon"
                    style={{ background: "#1DB954" }}
                  >
                    <Spotify />
                  </span>

                  <span
                    className="platform-icon"
                    style={{ background: "#ff2d55" }}
                  >
                    <AppleMusic />
                  </span>

                  <button className="dropdown-btn">
                    <ChevronDown />
                  </button>

                  <div className="platform-dropdown">
                    <p>
                      <Youtubemusic />
                      YouTube Music
                    </p>
                    <p>
                      <Tidal />
                      Tidal
                    </p>
                    <p>
                      <Deezer />
                      Deezer
                    </p>
                    <p>
                      <Soundcloud />
                      SoundCloud
                    </p>
                  </div>
                </div>
                <button className="heart-btn">
                  <Heart />
                </button>
              </div>
            </div>
            <div className="song-card">
              <div className="song-top">
                <div className="song-image-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=500&auto=format&fit=crop"
                    alt=""
                  />
                </div>
                <div className="song-content">
                  <h3>Beautiful Things</h3>
                  <p>The Midnight Collective • 2023</p>
                </div>
                <button className="play-btn">
                  <Play />
                </button>
              </div>
              <div className="song-footer">
                <div className="platforms">
                  <span
                    className="platform-icon"
                    style={{ background: "#1DB954" }}
                  >
                    <Spotify />
                  </span>

                  <span
                    className="platform-icon"
                    style={{ background: "#ff2d55" }}
                  >
                    <AppleMusic />
                  </span>

                  <button className="dropdown-btn">
                    <ChevronDown />
                  </button>

                  <div className="platform-dropdown">
                    <p>
                      <Youtubemusic />
                      YouTube Music
                    </p>
                    <p>
                      <Tidal />
                      Tidal
                    </p>
                    <p>
                      <Deezer />
                      Deezer
                    </p>
                    <p>
                      <Soundcloud />
                      SoundCloud
                    </p>
                  </div>
                </div>
                <button className="heart-btn">
                  <Heart />
                </button>
              </div>
            </div>
            <div className="song-card">
              <div className="song-top">
                <div className="song-image-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=500&auto=format&fit=crop"
                    alt=""
                  />
                </div>
                <div className="song-content">
                  <h3>Beautiful Things</h3>
                  <p>The Midnight Collective • 2023</p>
                </div>
                <button className="play-btn">
                  <Play />
                </button>
              </div>
              <div className="song-footer">
                <div className="platforms">
                  <span
                    className="platform-icon"
                    style={{ background: "#1DB954" }}
                  >
                    <Spotify />
                  </span>

                  <span
                    className="platform-icon"
                    style={{ background: "#ff2d55" }}
                  >
                    <AppleMusic />
                  </span>

                  <button className="dropdown-btn">
                    <ChevronDown />
                  </button>

                  <div className="platform-dropdown">
                    <p>
                      <Youtubemusic />
                      YouTube Music
                    </p>
                    <p>
                      <Tidal />
                      Tidal
                    </p>
                    <p>
                      <Deezer />
                      Deezer
                    </p>
                    <p>
                      <Soundcloud />
                      SoundCloud
                    </p>
                  </div>
                </div>
                <button className="heart-btn">
                  <Heart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gap">
        <div className="container">
          <div className="common-text">
            <h2>Latest Videos</h2>
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
                    <img src={musician} className="news-image" />
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
                    <img src={musician} className="news-image" />
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
                    <img src={musician} className="news-image" />
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
                    <img src={musician} className="news-image" />
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
                    <img src={musician} className="news-image" />
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
    </div>
  );
};

export default Music;
