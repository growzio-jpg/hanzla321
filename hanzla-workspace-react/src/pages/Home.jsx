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
export default function Home() {
  return (
    <div className="pg on">
      <div className="hero">
        <div className="w">
          <div>
            <h1>
              UGC ads, websites and SEO that <em>actually grow</em> your brand
            </h1>
            <p className="lead">
              Hanzla Workspace creates scroll-stopping UGC video ads, builds
              fast websites that convert, and optimizes your brand to be found
              on Google, in AI answers and on local search.
            </p>
            <div className="btns">
              <a className="btn" href="#contact">
                Get your free audit{" "}
                <svg className="i">
                  <use href="#i-arrow" />
                </svg>
              </a>
              <a className="btn o" href="#portfolio">
                View our work
              </a>
            </div>
            <div className="trust">
              <div>
                <Count v="3.8x" />
                <span>Average UGC ad ROAS</span>
              </div>
              <div>
                <Count v="50+" />
                <span>Websites delivered</span>
              </div>
              <div>
                <Count v="+240%" />
                <span>Organic traffic growth</span>
              </div>
              <div>
                <Count v="98%" />
                <span>Client retention</span>
              </div>
            </div>
          </div>
          <svg
            className="il"
            viewBox="0 0 520 420"
            role="img"
            aria-label="Analytics dashboard and a UGC video ad on a phone"
          >
            <use href="#il-home" />
          </svg>
        </div>
      </div>
      <Marquee />
      <section style={{ padding: "44px 0 0" }}>
        <div className="w">
          <div className="tl">
            <b>In short</b>
            <div>
              <p>
                Hanzla Workspace is a Pakistan-based growth studio that creates
                UGC video ads, builds fast conversion-focused websites and
                optimizes brands for Google, AI answers and local search, with
                one point of contact from brief to results.
              </p>
              <div className="rl">
                <a href="#ugc-ads">UGC video ads →</a>
                <a href="#web-development">Web development →</a>
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
              Our work in <em>under 30 seconds</em>
            </h2>
            <p>
              A short animated overview of how ads, websites and search work
              together.
            </p>
          </div>
          <Reel
            k="home"
            d={5200}
            label="Animated overview of Hanzla Workspace services"
          />
        </div>
      </section>
      <section>
        <div className="w">
          <div className="hd">
            <span className="eb">What we do</span>
            <h2>
              Three services. <em>One growth system.</em>
            </h2>
            <p>
              Ads bring attention, your website turns it into revenue, and SEO
              keeps customers coming without paying for every click.
            </p>
          </div>
          <div className="grid">
            <div className="card">
              <div className="ic">
                <svg className="i">
                  <use href="#i-video" />
                </svg>
              </div>
              <h3>UGC Video Ads</h3>
              <p>
                Hook-driven TikTok, Instagram Reels and YouTube Shorts creatives
                with scripts built on tested frameworks, so you pay less for
                every customer.
              </p>
              <a className="lnk" href="#ugc-ads">
                Explore UGC ads{" "}
                <svg className="i" style={{ width: "16px", height: "16px" }}>
                  <use href="#i-arrow" />
                </svg>
              </a>
            </div>
            <div className="card">
              <div className="ic gn">
                <svg className="i">
                  <use href="#i-code" />
                </svg>
              </div>
              <h3>Web Development</h3>
              <p>
                Custom, mobile-first websites and Shopify or WordPress stores
                built for speed, clean UX and higher conversion rates.
              </p>
              <a className="lnk" href="#web-development">
                Explore web development{" "}
                <svg className="i" style={{ width: "16px", height: "16px" }}>
                  <use href="#i-arrow" />
                </svg>
              </a>
            </div>
            <div className="card">
              <div className="ic">
                <svg className="i">
                  <use href="#i-chart" />
                </svg>
              </div>
              <h3>SEO, AEO and GEO</h3>
              <p>
                Technical SEO, structured data and answer-engine optimization so
                you show up on Google, in AI assistants and on Maps.
              </p>
              <a className="lnk" href="#seo-services">
                Explore SEO{" "}
                <svg className="i" style={{ width: "16px", height: "16px" }}>
                  <use href="#i-arrow" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="soft">
        <div className="w">
          <div className="hd c">
            <span className="eb">Our process</span>
            <h2>
              Simple, clear and <em>deadline-driven</em>
            </h2>
          </div>
          <div className="steps">
            <div className="st">
              <i>01</i>
              <h3>Discover</h3>
              <p>
                We study your product, audience, competitors and current numbers
                to find the fastest wins.
              </p>
            </div>
            <div className="st">
              <i>02</i>
              <h3>Strategize</h3>
              <p>
                Hooks, site structure and keyword maps are planned before any
                video or code is produced.
              </p>
            </div>
            <div className="st">
              <i>03</i>
              <h3>Build</h3>
              <p>
                Creatives, pages and optimizations are delivered with revision
                rounds included in every package.
              </p>
            </div>
            <div className="st">
              <i>04</i>
              <h3>Optimize</h3>
              <p>
                We track ROAS, speed, rankings and leads, then improve what the
                data shows is working.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w">
          <div className="split">
            <svg
              className="il"
              viewBox="0 0 520 420"
              role="img"
              aria-label="Search ranking and traffic growth chart"
            >
              <use href="#il-seo" />
            </svg>
            <div>
              <span className="eb">Why Hanzla Workspace</span>
              <h2>
                Built around <em>results</em>, not vanity metrics
              </h2>
              <ul className="chk">
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  <div>
                    <h3>Speed-obsessed builds</h3>
                    <p>
                      Lightweight code and optimized assets, because slow sites
                      lose sales.
                    </p>
                  </div>
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  <div>
                    <h3>Search-ready from day one</h3>
                    <p>
                      Schema, clean headings, FAQs and entity signals built in,
                      not bolted on.
                    </p>
                  </div>
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  <div>
                    <h3>Direct access to the maker</h3>
                    <p>
                      You talk to the person doing the work. No account
                      managers, no lost messages.
                    </p>
                  </div>
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  <div>
                    <h3>Transparent reporting</h3>
                    <p>
                      Plain-language updates on views, CTR, CPA, rankings and
                      traffic.
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
          <div className="split">
            <div>
              <span className="eb">Client feedback</span>
              <h2>
                What brand owners <em>say</em>
              </h2>
              <p style={{ fontSize: "1.15rem", color: "var(--navy)" }}>
                “Hanzla crafted UGC video ads for our TikTok campaigns that
                lowered our CPA by 42% in just two weeks. Outstanding hook
                concepts.”
              </p>
              <p>
                <strong style={{ color: "var(--navy)" }}>Sarah Johnson</strong>
                <br />
                E-commerce Brand Manager
              </p>
              <a className="btn" href="#portfolio">
                See case work
              </a>
            </div>
            <svg
              className="il"
              viewBox="0 0 520 420"
              role="img"
              aria-label="UGC video ad performance"
            >
              <use href="#il-ugc" />
            </svg>
          </div>
        </div>
      </section>
      <section>
        <div className="w">
          <div className="hd c">
            <span className="eb">Who we help</span>
            <h2>
              Built for brands that <em>sell online</em>
            </h2>
            <p>
              We work best with businesses that have a real product, a clear
              customer and a goal measured in sales, leads or bookings.
            </p>
          </div>
          <div className="grid">
            <div className="card">
              <div className="ic">
                <svg className="i">
                  <use href="#i-cart" />
                </svg>
              </div>
              <h3>E-commerce and DTC brands</h3>
              <p>
                Product-led ads, fast stores and category-page SEO for Shopify,
                WordPress and custom shops.
              </p>
            </div>
            <div className="card">
              <div className="ic gn">
                <svg className="i">
                  <use href="#i-target" />
                </svg>
              </div>
              <h3>Skincare and beauty</h3>
              <p>
                Problem-solution and routine videos that build trust around
                ingredients and results.
              </p>
            </div>
            <div className="card">
              <div className="ic">
                <svg className="i">
                  <use href="#i-layers" />
                </svg>
              </div>
              <h3>Fashion and apparel</h3>
              <p>
                Unboxing, try-on and styling content that turns browsers into
                buyers.
              </p>
            </div>
            <div className="card">
              <div className="ic gn">
                <svg className="i">
                  <use href="#i-pin" />
                </svg>
              </div>
              <h3>Local service businesses</h3>
              <p>
                Google Business Profile, local landing pages and review-driven
                visibility in your city.
              </p>
            </div>
            <div className="card">
              <div className="ic">
                <svg className="i">
                  <use href="#i-cpu" />
                </svg>
              </div>
              <h3>Startups and SaaS</h3>
              <p>
                Clear messaging, product demos and technical SEO that supports
                demand generation.
              </p>
            </div>
            <div className="card">
              <div className="ic gn">
                <svg className="i">
                  <use href="#i-users" />
                </svg>
              </div>
              <h3>Agencies and freelancers</h3>
              <p>
                Reliable white-label web and creative support for your own
                client work.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="soft">
        <div className="w">
          <div className="hd">
            <span className="eb">Quick answers</span>
            <h2>
              Key terms, <em>explained simply</em>
            </h2>
          </div>
          <div className="grid">
            <article className="card">
              <h3>What is UGC advertising?</h3>
              <p>
                UGC advertising uses creator-style videos that look like real
                customer content, shot vertically and paced for TikTok, Reels
                and Shorts. Because it feels native to the feed, it earns
                attention more easily than polished brand commercials.
              </p>
            </article>
            <article className="card">
              <h3>What is AEO?</h3>
              <p>
                Answer engine optimization (AEO) structures content with clear
                questions and short, direct answers so search engines, voice
                assistants and AI tools can quote it accurately.
              </p>
            </article>
            <article className="card">
              <h3>What is GEO?</h3>
              <p>
                Generative engine optimization (GEO) helps AI-generated answers
                understand and cite your brand through consistent facts, clear
                entities, authoritative sources and well-structured pages.
              </p>
            </article>
            <article className="card">
              <h3>What are Core Web Vitals?</h3>
              <p>
                Three Google metrics for real-user experience: LCP for loading
                (2.5 seconds or less), INP for responsiveness (200 milliseconds
                or less) and CLS for visual stability (0.1 or less).
              </p>
            </article>
          </div>
        </div>
      </section>
      <section>
        <div className="w">
          <div className="hd">
            <span className="eb">How we engage</span>
            <h2>
              Start small, <em>scale what works</em>
            </h2>
          </div>
          <div className="scroll">
            <table className="tbl">
              <thead>
                <tr>
                  <th>Option</th>
                  <th>Best for</th>
                  <th>What it includes</th>
                  <th>Typical timeline</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Free growth audit</strong>
                  </td>
                  <td>Brands deciding where to start</td>
                  <td>
                    A review of your website, ads and search visibility with
                    prioritized next steps
                  </td>
                  <td>Within 24 hours</td>
                </tr>
                <tr>
                  <td>
                    <strong>Project package</strong>
                  </td>
                  <td>A website, landing page or batch of UGC videos</td>
                  <td>
                    Defined scope, fixed deliverables and two revision rounds
                  </td>
                  <td>3 days to 4 weeks, depending on scope</td>
                </tr>
                <tr>
                  <td>
                    <strong>Monthly growth support</strong>
                  </td>
                  <td>Brands scaling ads and organic traffic</td>
                  <td>
                    Ongoing creatives, testing, optimization and plain-language
                    monthly reporting
                  </td>
                  <td>Ongoing, reviewed regularly</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="soft">
        <div className="w">
          <div className="split">
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
            </div>
            <div>
              <span className="eb">Meet the founder</span>
              <h2>
                The person you brief is the person who <em>builds</em>
              </h2>
              <p>
                I’m Hanzla, a digital creator and web developer based in
                Pakistan. I handle strategy and execution myself, so nothing
                gets lost between a sales call and delivery.
              </p>
              <ul className="chk">
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  <div>
                    <h3>Direct WhatsApp access</h3>
                    <p>
                      Quick answers and quick revisions without going through an
                      account manager.
                    </p>
                  </div>
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  <div>
                    <h3>Clear, regular updates</h3>
                    <p>
                      You always know what is done, what is next and what the
                      numbers say.
                    </p>
                  </div>
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  <div>
                    <h3>You own everything</h3>
                    <p>
                      Your domain, design files and code are handed over at the
                      end of every project.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="btns">
                <a className="btn" href="#about">
                  More about Hanzla
                </a>
                <a
                  className="btn o"
                  href="https://wa.me/923195179084"
                  target="_blank"
                  rel="noopener"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w">
          <div className="hd c">
            <span className="eb">FAQ</span>
            <h2>
              Frequently asked <em>questions</em>
            </h2>
          </div>
          <Faq k="home" />
        </div>
      </section>
      <Facts />
      <Projects k="home" />
      <section style={{ paddingTop: "0" }}>
        <div className="w">
          <div className="band">
            <div>
              <h2>Ready to grow your brand?</h2>
              <p>
                Share your goals and get a free audit with clear next steps
                within 24 hours.
              </p>
            </div>
            <div className="btns" style={{ margin: "0" }}>
              <a className="btn gr" href="#contact">
                Start your project
              </a>
              <a
                className="btn o"
                href="https://wa.me/923195179084"
                target="_blank"
                rel="noopener"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
