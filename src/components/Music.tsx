import React, { useEffect, useState } from "react";
import donberry from "../images/music.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import release from "../images/release.png";
import { FaMusic } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { FaChevronDown } from "react-icons/fa6";
import { songs, tracks } from "../store/Services/AllApi";
import { toast } from "react-toastify";
import { AiOutlineAmazon } from "react-icons/ai";
import { Link } from "react-router-dom";

const Music = () => {
  const Play: any = FaMusic;
  const Spotify: any = FaSpotify;
  const AppleMusic: any = AiOutlineAmazon;
  const Youtubemusic: any = SiYoutubemusic;
  const ChevronDown: any = FaChevronDown;

  const [currentEmbedUrl, setCurrentEmbedUrl]: any = useState("");
  const [latestRelease, setlatestRelease]: any = useState([]);
  const [allSong, setAllSong]: any = useState([]);

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

  useEffect(() => {
    tracks()
      .then((res: any) => {
        setlatestRelease(res?.data);
      })
      .catch((error) => {
        toast.error(JSON.stringify(error));
      });
  }, []);

  useEffect(() => {
    songs()
      .then((res: any) => {
        setAllSong(res?.data);
      })
      .catch((error) => {
        toast.error(JSON.stringify(error));
      });
  }, []);

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
          {allSong?.map((song: any) => {
            const songPlatform = [
              {
                name: "Apple Music",
                link: song.apple_music_link,
              },
              {
                name: "iTunes",
                link: song.itunes_link,
              },
              {
                name: "Pandora",
                link: song.pandora_link,
              },
              {
                name: "Tidal",
                link: song.tidal_link,
              },
              {
                name: "Deezer",
                link: song.deezer_link,
              },
              {
                name: "SoundCloud",
                link: song.soundcloud_link,
              },
              {
                name: "Audiomack",
                link: song.audiomack_link,
              },
              {
                name: "Napster",
                link: song.napster_link,
              },
              {
                name: "iHeartRadio",
                link: song.iheartradio_link,
              },
              {
                name: "Bandcamp",
                link: song.bandcamp_link,
              },
              {
                name: "Boomplay",
                link: song.boomplay_link,
              },
              {
                name: "Anghami",
                link: song.anghami_link,
              },
              {
                name: "Qobuz",
                link: song.qobuz_link,
              },
              {
                name: "JioSaavn",
                link: song.jiosaavn_link,
              },
              {
                name: "Gaana",
                link: song.gaana_link,
              },
              {
                name: "Wynk",
                link: song.wynk_link,
              },
              {
                name: "Hungama",
                link: song.hungama_link,
              },
              {
                name: "KKBox",
                link: song.kkbox_link,
              },
              {
                name: "Line Music",
                link: song.line_music_link,
              },
              {
                name: "QQ Music",
                link: song.qq_music_link,
              },
              {
                name: "NetEase Music",
                link: song.netease_music_link,
              },
              {
                name: "Melon",
                link: song.melon_link,
              },
              {
                name: "Flo",
                link: song.flo_link,
              },
              {
                name: "Genie Music",
                link: song.genie_music_link,
              },
              {
                name: "Resso",
                link: song.resso_link,
              },
              {
                name: "VK Music",
                link: song.vk_music_link,
              },
              {
                name: "Yandex Music",
                link: song.yandex_music_link,
              },
              {
                name: "Joox",
                link: song.joox_link,
              },
              {
                name: "Audius",
                link: song.audius_link,
              },
              {
                name: "Mixcloud",
                link: song.mixcloud_link,
              },
              {
                name: "ReverbNation",
                link: song.reverbnation_link,
              },
              {
                name: "Spinrilla",
                link: song.spinrilla_link,
              },
              {
                name: "Trebel",
                link: song.trebel_link,
              },
              {
                name: "MusicBrainz",
                link: song.musicbrainz_link,
              },
              {
                name: "Last.fm",
                link: song.lastfm_link,
              },
              {
                name: "YouTube",
                link: song.youtube_link,
              },
              {
                name: "Instagram",
                link: song.instagram_link,
              },
              {
                name: "Facebook",
                link: song.facebook_link,
              },
              {
                name: "TikTok",
                link: song.tiktok_link,
              },
              {
                name: "Shazam",
                link: song.shazam_link,
              },
              {
                name: "Genius",
                link: song.genius_link,
              },
            ];
            return (
              <div className="songs-grid">
                <div className="song-card">
                  <div className="song-top">
                    <div className="song-image-wrap">
                      <img src={song?.thumbnail} alt="songs title" />
                    </div>
                    <div className="song-content">
                      <h3>{song?.title}</h3>
                      <p>
                        {song?.duration
                          ? song.duration.split(":").slice(-2).join(":")
                          : "00:00"}
                      </p>
                    </div>
                  </div>
                  <div className="song-footer">
                    <div className="platforms">
                      <span
                        className="platform-icon"
                        style={{ background: "#1DB954" }}
                      >
                        <Link to={song?.spotify_link} target="_blank">
                          <Spotify />
                        </Link>
                      </span>
                      <span
                        className="platform-icon platform-icon-amazon"
                        style={{ background: "#25d1da" }}
                      >
                        <Link to={song?.amazon_music_link} target="_blank">
                          <AppleMusic />
                        </Link>
                      </span>
                      <span
                        className="platform-icon"
                        style={{ background: "#FF0000" }}
                      >
                        <Link to={song?.youtube_music_link} target="_blank">
                          <Youtubemusic />
                        </Link>
                      </span>
                      <button className="dropdown-btn">
                        <ChevronDown />
                      </button>
                      <div className="platform-dropdown">
                        {songPlatform?.map(
                          (platform: any, index: number) =>
                            platform?.link && (
                              <a
                                key={index}
                                href={platform.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {platform.name}
                              </a>
                            ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
              {latestRelease?.map((itm: any) => (
                <SwiperSlide key={itm?.id}>
                  <div
                    className="news-card"
                    onClick={() =>
                      handlePlay(itm?.embed_url || itm?.complete_url)
                    }
                  >
                    <div className="image-wrapper">
                      <img src={itm?.thumbnail} className="news-image" />
                      <div className="overlay">
                        <span>Click to Play</span>
                      </div>
                    </div>
                    <p>
                      <Play />
                      {itm?.title}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Music;
