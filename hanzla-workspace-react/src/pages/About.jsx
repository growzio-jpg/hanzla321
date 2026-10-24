import {
  Faq,
  Reel,
  Calc,
  PortGrid,
  ContactForm,
  Count,
  Facts,
  Projects,
  Marquee,
} from "../components";
import { hideImg, toTop, goCalc } from "../util";
export default function About() {
  return (
    <div className="pg on">
      <div className="hero">
        <div className="w">
          <div>
            <p className="crumb">
              <a href="#home">Home</a> / About
            </p>
            <span className="eb">About us</span>
            <h1>
              Meet <em>Hanzla</em>: creator, developer and growth partner
            </h1>
            <p className="lead">
              I help e-commerce brands and local businesses grow with
              performance-focused creative, fast websites and strong search
              visibility.
            </p>
            <div className="btns">
              <a
                className="btn gr"
                href="https://wa.me/923195179084"
                target="_blank"
                rel="noopener"
              >
                Chat on WhatsApp
              </a>
              <a
                className="btn o"
                href="https://shorturl.at/ESq2A?usp=sharing"
                target="_blank"
                rel="noopener"
              >
                Download resume
              </a>
            </div>
          </div>
          <div className="pf">
            <div className="fr">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJZROLdQZ_T0HJmAeQO1iCjUBXlDobg2j7qVlzEN1-_70SqzgcmzsDo5JZ1YJTe0-MUsNnW6aScZzDXP4pbwZFrgACGO3ovXiEoFKIJDUzQosoO4qe188JDJp29HKBEGGSQ03I6o5dxaLmm_0ezcsH55d10Nc3o0mmXn82f1uqWwPFRUaRQs9IuqOfFsg/s741/hanzlaceo.png"
                alt="Hanzla, founder of Hanzla Workspace"
                decoding="async"
                referrerPolicy="no-referrer"
                onError={hideImg}
              />
            </div>
            <div className="pc a">
              <svg className="i">
                <use href="#i-check" />
              </svg>
              <div>
                <b>Hanzla</b>
                <span>Founder and developer</span>
              </div>
            </div>
            <div className="pc b">
              <svg className="i">
                <use href="#i-bolt" />
              </svg>
              <div>
                <b>UGC + Web + SEO</b>
                <span>One growth partner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section style={{ padding: "44px 0 0" }}>
        <div className="w">
          <div className="tl">
            <b>In short</b>
            <div>
              <p>
                Hanzla is a digital creator and web developer in Pakistan who
                runs Hanzla Workspace, offering UGC ads, web development and SEO
                with direct access to the person doing the work.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w">
          <div className="split">
            <div>
              <span className="eb">Our story</span>
              <h2>
                One partner for the <em>full customer journey</em>
              </h2>
              <p>
                Hanzla Workspace started with a simple observation: most small
                brands have good products but weak digital presence, with slow
                websites, forgettable ads and no search visibility.
              </p>
              <p>
                So we combined the three skills that matter most, UGC ad
                creation, web development and SEO, under one roof. Instead of
                juggling three freelancers, you work with one partner who
                understands how attention becomes revenue.
              </p>
              <p>
                Based in Pakistan, we serve clients locally and worldwide with
                clear communication and honest reporting.
              </p>
            </div>
            <div className="grid g2">
              <div className="card">
                <h2 style={{ color: "var(--blue)" }}>3</h2>
                <p>Core services</p>
              </div>
              <div className="card">
                <h2 style={{ color: "var(--green)" }}>50+</h2>
                <p>Websites delivered</p>
              </div>
              <div className="card">
                <h2 style={{ color: "var(--green)" }}>24h</h2>
                <p>Average reply time</p>
              </div>
              <div className="card">
                <h2 style={{ color: "var(--blue)" }}>PK</h2>
                <p>Serving clients worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="soft">
        <div className="w">
          <div className="hd c">
            <span className="eb">Values</span>
            <h2>
              How we <em>work</em>
            </h2>
          </div>
          <div className="grid">
            <div className="card">
              <div className="ic">
                <svg className="i">
                  <use href="#i-target" />
                </svg>
              </div>
              <h3>Results over vanity</h3>
              <p>
                We care about sales, leads and rankings, not just attractive
                deliverables.
              </p>
            </div>
            <div className="card">
              <div className="ic gn">
                <svg className="i">
                  <use href="#i-chat" />
                </svg>
              </div>
              <h3>Honest communication</h3>
              <p>
                We tell you what will work and what will not, even when it is
                not what you hoped to hear.
              </p>
            </div>
            <div className="card">
              <div className="ic">
                <svg className="i">
                  <use href="#i-bolt" />
                </svg>
              </div>
              <h3>Speed with quality</h3>
              <p>
                Fast turnarounds without cutting corners on craft or strategy.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w">
          <div className="hd c">
            <span className="eb">What I do</span>
            <h2>
              Three skills, <em>one growth partner</em>
            </h2>
          </div>
          <div className="grid">
            <div className="card">
              <div className="ic">
                <svg className="i">
                  <use href="#i-video" />
                </svg>
              </div>
              <h3>Creative</h3>
              <ul>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  UGC concepts and scripts
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  Short-form editing
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  Hook testing plans
                </li>
              </ul>
            </div>
            <div className="card">
              <div className="ic gn">
                <svg className="i">
                  <use href="#i-code" />
                </svg>
              </div>
              <h3>Development</h3>
              <ul>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  Custom websites and landing pages
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  Shopify and WordPress stores
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  Speed and Core Web Vitals
                </li>
              </ul>
            </div>
            <div className="card">
              <div className="ic">
                <svg className="i">
                  <use href="#i-chart" />
                </svg>
              </div>
              <h3>Search</h3>
              <ul>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  Technical and on-page SEO
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  AEO and GEO content structure
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  Local SEO and reporting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="soft">
        <div className="w">
          <div className="hd c">
            <span className="eb">Working together</span>
            <h2>
              How a project <em>runs with me</em>
            </h2>
          </div>
          <div
            className="steps"
            style={{
              gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))",
            }}
          >
            <div className="st">
              <i>01</i>
              <h3>Message</h3>
              <p>Share your brand and goals by WhatsApp, email or the form.</p>
            </div>
            <div className="st">
              <i>02</i>
              <h3>Audit and call</h3>
              <p>A free review and a short call to agree priorities.</p>
            </div>
            <div className="st">
              <i>03</i>
              <h3>Proposal</h3>
              <p>
                Clear scope, deliverables, timeline and price before work
                begins.
              </p>
            </div>
            <div className="st">
              <i>04</i>
              <h3>Delivery and support</h3>
              <p>Regular updates, revisions included and help after launch.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w">
          <div className="hd c">
            <span className="eb">FAQ</span>
            <h2>
              About <em>us</em>
            </h2>
          </div>
          <Faq k="about" />
        </div>
      </section>
      <Facts />
      <Projects k="about" />
    </div>
  );
}
