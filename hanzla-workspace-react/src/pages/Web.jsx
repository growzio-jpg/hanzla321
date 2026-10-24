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
export default function Web() {
  return (
    <div className="pg on">
      <div className="hero">
        <div className="w">
          <div>
            <p className="crumb">
              <a href="#home">Home</a> / Web Development
            </p>
            <span className="eb">Web development</span>
            <h1>
              Fast, clean websites that turn <em>visitors into customers</em>
            </h1>
            <p className="lead">
              Responsive, conversion-focused websites, e-commerce stores and
              landing pages, engineered for speed, search visibility and a
              flawless mobile experience.
            </p>
            <div className="btns">
              <a className="btn" href="#contact">
                Start your website project
              </a>
              <a className="btn o" href="#portfolio">
                See live projects
              </a>
            </div>
          </div>
          <svg
            className="il"
            viewBox="0 0 520 420"
            role="img"
            aria-label="Website on a browser with code and PageSpeed score"
          >
            <use href="#il-web" />
          </svg>
        </div>
      </div>
      <section style={{ padding: "44px 0 0" }}>
        <div className="w">
          <div className="tl">
            <b>In short</b>
            <div>
              <p>
                We design and build mobile-first websites and online stores on
                Shopify, WordPress or custom code, targeting the Core Web Vitals
                thresholds (LCP 2.5 s, INP 200 ms, CLS 0.1) with on-page SEO,
                schema and analytics included.
              </p>
              <div className="rl">
                <a href="#ugc-ads">UGC video ads →</a>
                <a href="#seo-services">SEO, AEO and GEO →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="soft">
        <div className="w">
          <div className="hd c">
            <span className="eb">Watch</span>
            <h2>
              How a website goes from <em>idea to launch</em>
            </h2>
            <p>
              Four stages in one short animation: wireframe, design, speed and
              launch.
            </p>
          </div>
          <Reel
            k="web"
            d={4800}
            label="Animated walkthrough of the website build process"
          />
        </div>
      </section>
      <section>
        <div className="w">
          <div className="hd">
            <span className="eb">What we build</span>
            <h2>
              From a landing page to a <em>full online store</em>
            </h2>
          </div>
          <div className="grid">
            <div className="card">
              <div className="ic">
                <svg className="i">
                  <use href="#i-cart" />
                </svg>
              </div>
              <h3>E-commerce stores</h3>
              <p>
                Shopify and custom stores with fast checkout, product filters
                and trust-building design.
              </p>
            </div>
            <div className="card">
              <div className="ic gn">
                <svg className="i">
                  <use href="#i-globe" />
                </svg>
              </div>
              <h3>Business websites</h3>
              <p>
                Professional multi-page sites that build credibility and
                generate leads around the clock.
              </p>
            </div>
            <div className="card">
              <div className="ic">
                <svg className="i">
                  <use href="#i-target" />
                </svg>
              </div>
              <h3>Landing pages</h3>
              <p>
                Single-purpose pages tuned for ad traffic with strong calls to
                action.
              </p>
            </div>
            <div className="card">
              <div className="ic gn">
                <svg className="i">
                  <use href="#i-cpu" />
                </svg>
              </div>
              <h3>Web apps and dashboards</h3>
              <p>
                Interactive React apps with Firebase or API backends for tools,
                portals and calculators.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="soft">
        <div className="w">
          <div className="split">
            <div>
              <span className="eb">Built-in standards</span>
              <h2>
                Performance is <em>not optional</em>
              </h2>
              <ul className="chk">
                <li>
                  <svg className="i">
                    <use href="#i-bolt" />
                  </svg>
                  <div>
                    <h3>Speed</h3>
                    <p>
                      Compressed assets, lazy loading and minimal scripts for
                      strong Core Web Vitals.
                    </p>
                  </div>
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-phone" />
                  </svg>
                  <div>
                    <h3>Mobile-first</h3>
                    <p>
                      Designed on a phone first, because most of your traffic is
                      mobile.
                    </p>
                  </div>
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-search" />
                  </svg>
                  <div>
                    <h3>SEO-ready</h3>
                    <p>
                      Semantic HTML, meta tags, sitemap, schema and proper
                      heading structure at launch.
                    </p>
                  </div>
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-shield" />
                  </svg>
                  <div>
                    <h3>Secure</h3>
                    <p>HTTPS, safe forms and best-practice hosting setup.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <span className="eb">Technology</span>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "18px" }}>
                Tools we use every day
              </h3>
              <div className="chips">
                <span className="chip">HTML5 and CSS3</span>
                <span className="chip">JavaScript ES6+</span>
                <span className="chip">React</span>
                <span className="chip">WordPress</span>
                <span className="chip">Shopify</span>
                <span className="chip">Firebase</span>
                <span className="chip">Git and GitHub</span>
                <span className="chip">Schema markup</span>
                <span className="chip">Core Web Vitals</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="soft">
        <div className="w">
          <div className="hd">
            <span className="eb">Our process</span>
            <h2>
              From brief to launch in <em>five clear stages</em>
            </h2>
          </div>
          <div
            className="steps"
            style={{
              gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            }}
          >
            <div className="st">
              <i>01</i>
              <h3>Brief and sitemap</h3>
              <p>
                Goals, audience, pages and features are agreed before any design
                begins.
              </p>
            </div>
            <div className="st">
              <i>02</i>
              <h3>Wireframes and UX</h3>
              <p>
                Page layouts focused on one action per screen and an easy mobile
                journey.
              </p>
            </div>
            <div className="st">
              <i>03</i>
              <h3>Visual design</h3>
              <p>
                A clean interface aligned with your brand, tested on real phone
                sizes.
              </p>
            </div>
            <div className="st">
              <i>04</i>
              <h3>Development</h3>
              <p>Lightweight, semantic code with SEO and analytics built in.</p>
            </div>
            <div className="st">
              <i>05</i>
              <h3>QA and launch</h3>
              <p>
                Speed, forms, links and devices are checked before going live,
                then handed over.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w">
          <div className="split">
            <div>
              <span className="eb">Speed standards</span>
              <h2>
                We build to the <em>Core Web Vitals</em> targets
              </h2>
              <p>
                Core Web Vitals are Google’s three real-user experience metrics.
                They are assessed at the 75th percentile of real visitors, and a
                page needs a good result on all three to pass. INP replaced the
                older FID metric in March 2024.
              </p>
              <p>
                We build toward these targets from the first line of code with
                correctly sized images, minimal JavaScript, reserved space for
                media and stable layouts.
              </p>
            </div>
            <div>
              <div className="scroll">
                <table className="tbl">
                  <thead>
                    <tr>
                      <th>Metric</th>
                      <th>Measures</th>
                      <th>Good</th>
                      <th>Poor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>LCP</strong>
                      </td>
                      <td>Loading speed of the main content</td>
                      <td>2.5 s or less</td>
                      <td>Over 4 s</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>INP</strong>
                      </td>
                      <td>Responsiveness to taps and clicks</td>
                      <td>200 ms or less</td>
                      <td>Over 500 ms</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>CLS</strong>
                      </td>
                      <td>Visual stability while loading</td>
                      <td>0.1 or less</td>
                      <td>Over 0.25</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="soft">
        <div className="w">
          <div className="hd">
            <span className="eb">Choosing a platform</span>
            <h2>
              Shopify, WordPress or <em>custom code?</em>
            </h2>
            <p>
              The right answer depends on what you sell and how you plan to
              grow. We recommend honestly, not by default.
            </p>
          </div>
          <div className="scroll">
            <table className="tbl">
              <thead>
                <tr>
                  <th />
                  <th>Shopify</th>
                  <th>WordPress</th>
                  <th>Custom (HTML, React)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Best for</strong>
                  </td>
                  <td>Online stores selling products</td>
                  <td>Content-led and service websites</td>
                  <td>Unique features and maximum speed</td>
                </tr>
                <tr>
                  <td>
                    <strong>Launch speed</strong>
                  </td>
                  <td>Fast</td>
                  <td>Fast to medium</td>
                  <td>Medium</td>
                </tr>
                <tr>
                  <td>
                    <strong>Flexibility</strong>
                  </td>
                  <td>High within the platform</td>
                  <td>Very high with plugins</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>
                    <strong>Ongoing upkeep</strong>
                  </td>
                  <td>Low</td>
                  <td>Medium (updates and plugins)</td>
                  <td>Low to medium</td>
                </tr>
                <tr>
                  <td>
                    <strong>SEO control</strong>
                  </td>
                  <td>Good</td>
                  <td>Very good</td>
                  <td>Full control</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section>
        <div className="w">
          <div className="split">
            <div>
              <span className="eb">What is included</span>
              <h2>
                Every website ships with the <em>essentials done right</em>
              </h2>
              <ul className="chk">
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  <div>
                    <h3>Responsive design</h3>
                    <p>Layouts tested on phones, tablets and desktops.</p>
                  </div>
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  <div>
                    <h3>On-page SEO foundation</h3>
                    <p>
                      Titles, meta descriptions, heading structure, sitemap and
                      robots file.
                    </p>
                  </div>
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  <div>
                    <h3>Structured data</h3>
                    <p>
                      Organization, service and FAQ schema where it fits your
                      content.
                    </p>
                  </div>
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  <div>
                    <h3>Analytics and tracking</h3>
                    <p>Google Analytics 4 and Search Console set up for you.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div style={{ paddingTop: "34px" }}>
              <ul className="chk">
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  <div>
                    <h3>Conversion paths</h3>
                    <p>
                      Clear calls to action, contact forms and WhatsApp
                      click-to-chat.
                    </p>
                  </div>
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  <div>
                    <h3>Image and code optimization</h3>
                    <p>
                      Compressed media, lazy loading and clean, minimal code.
                    </p>
                  </div>
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  <div>
                    <h3>Security basics</h3>
                    <p>HTTPS, safe forms and sensible access practices.</p>
                  </div>
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  <div>
                    <h3>Handover</h3>
                    <p>
                      You own the domain, design and code, with a short guide to
                      managing it.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="soft">
        <div className="w">
          <div className="hd c">
            <span className="eb">FAQ</span>
            <h2>
              Web development <em>questions</em>
            </h2>
          </div>
          <Faq k="web" />
        </div>
      </section>
      <Projects k="web" />
      <section>
        <div className="w">
          <div className="band">
            <div>
              <h2>Your website should be your best salesperson</h2>
              <p>Tell us what you need and get a clear scope and timeline.</p>
            </div>
            <a className="btn gr" href="#contact">
              Get a website quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
