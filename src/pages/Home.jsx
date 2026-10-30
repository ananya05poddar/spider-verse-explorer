import WebBackground from "../components/WebBackground";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
    <WebBackground />
      <section className="hero">
        <div className="hero-content">
          <p className="tagline">
            ✦ EVERY UNIVERSE HAS A HERO ✦
          </p>

          <h1>
            EXPLORE THE
            <span> SPIDER-VERSE</span>
          </h1>

          <p className="description">
            One web. Infinite possibilities.
            Discover extraordinary heroes from
            different dimensions and explore
            the secrets of the multiverse.
          </p>

          <Link to="/gallery" className="explore-btn">
            Explore the Multiverse →
          </Link>

          <p className="small-text">
            YOUR JOURNEY STARTS HERE
          </p>
        </div>

        <div className="portal-area">
          <div className="portal portal-one">
            <div className="portal portal-two">
              <div className="portal-center">
                <span>SPIDEY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="intro">
        <p className="tagline">WELCOME, EXPLORER</p>
        <h2>INFINITE WORLDS. INFINITE HEROES.</h2>
        <p>
          Every dimension tells a different story.
          Discover the heroes who protect their worlds.
        </p>
      </section>
    </div>
  );
}

export default Home;
