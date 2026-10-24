import { hideImg, toTop, goCalc } from "../util";
export default function Footer() {
  return (
    <footer>
      <div className="w">
        <div className="ftcta">
          <div>
            <h2>Let’s build your next growth channel.</h2>
            <p>Free audit, honest advice and a clear plan within 24 hours.</p>
          </div>
          <div className="btns" style={{ margin: "0" }}>
            <a className="btn gr" href="#contact">
              Start your project
            </a>
            <a
              className="btn o"
              style={{
                background: "transparent",
                color: "#fff",
                borderColor: "#35507a",
              }}
              href="https://wa.me/923195179084"
              target="_blank"
              rel="noopener"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div className="ft">
          <div>
            <a href="#home" className="logo">
              <b>
                H
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJZROLdQZ_T0HJmAeQO1iCjUBXlDobg2j7qVlzEN1-_70SqzgcmzsDo5JZ1YJTe0-MUsNnW6aScZzDXP4pbwZFrgACGO3ovXiEoFKIJDUzQosoO4qe188JDJp29HKBEGGSQ03I6o5dxaLmm_0ezcsH55d10Nc3o0mmXn82f1uqWwPFRUaRQs9IuqOfFsg/s741/hanzlaceo.png"
                  alt="Hanzla, founder of Hanzla Workspace"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={hideImg}
                />
              </b>
              <span>
                Hanzla Workspace<small>Growth Studio</small>
              </span>
            </a>
            <p style={{ marginTop: "18px", maxWidth: "320px" }}>
              A Pakistan-based growth studio creating UGC video ads, high-speed
              websites and search-optimized visibility for e-commerce and local
              brands.
            </p>
            <div className="soc">
              <a
                href="https://wa.me/923195179084"
                target="_blank"
                rel="noopener"
                aria-label="WhatsApp"
              >
                <svg className="i">
                  <use href="#i-chat" />
                </svg>
              </a>
              <a href="mailto:hanzlaworkspace@gmail.com" aria-label="Email">
                <svg className="i">
                  <use href="#i-mail" />
                </svg>
              </a>
              <a href="tel:+923195179084" aria-label="Phone">
                <svg className="i">
                  <use href="#i-phone" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#ugc-ads">UGC Video Ads</a>
              </li>
              <li>
                <a href="#web-development">Web Development</a>
              </li>
              <li>
                <a href="#seo-services">SEO, AEO and GEO</a>
              </li>
              <li>
                <a href="#seo-services">Local SEO</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#about">About Hanzla</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#contact">Free growth audit</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Get in touch</h3>
            <ul className="ct">
              <li>
                <svg className="i">
                  <use href="#i-mail" />
                </svg>
                <a href="mailto:hanzlaworkspace@gmail.com">
                  hanzlaworkspace@gmail.com
                </a>
              </li>
              <li>
                <svg className="i">
                  <use href="#i-phone" />
                </svg>
                <a href="tel:+923195179084">+92 319 5179084</a>
              </li>
              <li>
                <svg className="i">
                  <use href="#i-pin" />
                </svg>
                Pakistan, serving clients worldwide
              </li>
            </ul>
          </div>
        </div>
        <div className="fbm">
          <span>© 2026 Hanzla Workspace. All rights reserved.</span>
          <a href="#home" onClick={toTop}>
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
