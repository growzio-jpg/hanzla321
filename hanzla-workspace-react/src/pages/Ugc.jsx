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
export default function Ugc() {
  return (
    <div className="pg on">
      <div className="hero">
        <div className="w">
          <div>
            <p className="crumb">
              <a href="#home">Home</a> / UGC Ads
            </p>
            <span className="eb">UGC video ads</span>
            <h1>
              UGC video ads that <em>stop the scroll</em> and drive sales
            </h1>
            <p className="lead">
              Authentic, relatable video content engineered for TikTok,
              Instagram Reels, YouTube Shorts and Meta Ads, built to raise
              click-through rate and lower cost per purchase.
            </p>
            <div className="btns">
              <a className="btn" href="#contact">
                Order a UGC campaign
              </a>
              <a
                className="btn o"
                href="https://drive.google.com"
                target="_blank"
                rel="noopener"
              >
                View Drive portfolio
              </a>
            </div>
          </div>
          <svg
            className="il"
            viewBox="0 0 520 420"
            role="img"
            aria-label="UGC video ad on a phone with performance metrics"
          >
            <use href="#il-ugc" />
          </svg>
        </div>
      </div>
      <section style={{ padding: "44px 0 0" }}>
        <div className="w">
          <div className="tl">
            <b>In short</b>
            <div>
              <p>
                UGC video ads are creator-style vertical videos for TikTok,
                Reels, Shorts and Meta. We write the script, shoot and edit it,
                and give you a testing plan built around hook rate, hold rate,
                CTR and CPA.
              </p>
              <div className="rl">
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
              Anatomy of a <em>UGC ad</em>, scene by scene
            </h2>
            <p>
              Follow one script from the opening hook to the call to action. The
              product copy shown is an illustrative example.
            </p>
          </div>
          <Reel
            k="ugc"
            d={4600}
            label="Animated walkthrough of a five-part UGC ad script"
          />
        </div>
      </section>
      <section>
        <div className="w">
          <div className="hd">
            <span className="eb">Ad formats</span>
            <h2>
              Formats that match <em>buyer mindset</em>
            </h2>
            <p>
              We mix formats to find your winning angle quickly, then scale it.
            </p>
          </div>
          <div className="grid">
            <div className="card">
              <div className="ic">
                <svg className="i">
                  <use href="#i-target" />
                </svg>
              </div>
              <h3>Problem and Solution</h3>
              <p>
                A relatable pain point, quickly amplified, then your product as
                the fix. Best for skincare, wellness and utility products.
              </p>
            </div>
            <div className="card">
              <div className="ic gn">
                <svg className="i">
                  <use href="#i-cart" />
                </svg>
              </div>
              <h3>Unboxing and Reaction</h3>
              <p>
                Genuine first reactions that create trust and desire. Ideal for
                apparel, gadgets and gifting products.
              </p>
            </div>
            <div className="card">
              <div className="ic">
                <svg className="i">
                  <use href="#i-layers" />
                </svg>
              </div>
              <h3>Us vs Them</h3>
              <p>
                A clear side-by-side that shows why your product wins without
                sounding like a hard sell.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="soft">
        <div className="w">
          <div className="hd c">
            <span className="eb">Hook frameworks</span>
            <h2>
              The first three seconds <em>decide everything</em>
            </h2>
          </div>
          <div className="grid g2">
            <div className="card">
              <h3>1. Pattern interrupt</h3>
              <p>
                Unexpected motion or a bold claim in the opening frames to break
                the scrolling habit.
              </p>
            </div>
            <div className="card">
              <h3>2. Problem, agitate, solve</h3>
              <p>
                Show a daily frustration, make it felt, then introduce your
                product as the answer.
              </p>
            </div>
            <div className="card">
              <h3>3. Social proof</h3>
              <p>
                Organic-style reactions and results that make viewers say "I
                need that."
              </p>
            </div>
            <div className="card">
              <h3>4. Curiosity gap</h3>
              <p>
                Open a question the viewer must watch to resolve, which lifts
                watch time and retention.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w">
          <div className="hd">
            <span className="eb">Every package includes</span>
            <h2>
              Everything to <em>launch, test and scale</em>
            </h2>
          </div>
          <div className="scroll">
            <table className="tbl">
              <thead>
                <tr>
                  <th>Stage</th>
                  <th>What you get</th>
                  <th>Delivered as</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Script and hooks</strong>
                  </td>
                  <td>
                    Three hook variations per video, research-backed angles, CTA
                    tuned to your offer
                  </td>
                  <td>Google Doc</td>
                </tr>
                <tr>
                  <td>
                    <strong>Production and edit</strong>
                  </td>
                  <td>
                    Vertical 9:16, captions, sound design, platform-native
                    pacing, two revision rounds
                  </td>
                  <td>Ad-ready MP4</td>
                </tr>
                <tr>
                  <td>
                    <strong>Testing plan</strong>
                  </td>
                  <td>
                    Which creatives to run first, budgets to start with, and
                    what to measure
                  </td>
                  <td>Short PDF</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="soft">
        <div className="w">
          <div className="split">
            <div>
              <span className="eb">The basics</span>
              <h2>
                What is a UGC video ad, and <em>why does it work?</em>
              </h2>
              <p>
                A UGC (user-generated content) video ad is a short vertical
                video that looks and sounds like a real person sharing an honest
                experience with a product. It is produced for paid placement on
                TikTok, Instagram Reels, YouTube Shorts and Meta.
              </p>
              <p>
                Public benchmark studies in 2026 report UGC-style ads earning
                higher hook rates and click-through rates than polished brand
                creative, although exact figures vary by study, platform and
                niche.
              </p>
              <ul className="chk">
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  <div>
                    <h3>It feels native</h3>
                    <p>
                      Viewers treat it like organic content, so it is less
                      likely to be scrolled past as an ad.
                    </p>
                  </div>
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  <div>
                    <h3>It builds trust quickly</h3>
                    <p>
                      A real reaction does more than a slogan, especially for
                      beauty, wellness and apparel.
                    </p>
                  </div>
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  <div>
                    <h3>It is easy to test in volume</h3>
                    <p>
                      Lower production overhead means more hooks and angles
                      tested for the same budget.
                    </p>
                  </div>
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  <div>
                    <h3>It adapts to your audience</h3>
                    <p>
                      Scripts can be written in English, Urdu or Roman Urdu
                      depending on who you sell to.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <svg
              className="il"
              viewBox="0 0 520 420"
              role="img"
              aria-label="UGC ad with performance metrics"
            >
              <use href="#il-ugc" />
            </svg>
          </div>
        </div>
      </section>
      <section>
        <div className="w">
          <div className="hd">
            <span className="eb">Script anatomy</span>
            <h2>
              The structure of a <em>30-second UGC ad</em>
            </h2>
            <p>
              Every script follows a proven order. We adjust the length and
              emphasis to your product and platform.
            </p>
          </div>
          <div
            className="steps"
            style={{
              gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))",
            }}
          >
            <div className="st">
              <i>01</i>
              <h3>Hook, 0 to 3s</h3>
              <p>
                A pattern interrupt, bold claim or relatable moment that earns
                the next second.
              </p>
            </div>
            <div className="st">
              <i>02</i>
              <h3>Problem, 3 to 8s</h3>
              <p>
                The frustration your buyer already feels, stated in their own
                words.
              </p>
            </div>
            <div className="st">
              <i>03</i>
              <h3>Solution, 8 to 18s</h3>
              <p>A quick, visual demonstration of the product doing the job.</p>
            </div>
            <div className="st">
              <i>04</i>
              <h3>Proof, 18 to 25s</h3>
              <p>
                Results, texture, before and after, or a genuine reaction that
                builds belief.
              </p>
            </div>
            <div className="st">
              <i>05</i>
              <h3>Call to action, 25 to 30s</h3>
              <p>One clear next step and a reason to take it now.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="soft">
        <div className="w">
          <div className="hd">
            <span className="eb">Measurement</span>
            <h2>
              The metrics we <em>use to improve every ad</em>
            </h2>
          </div>
          <div className="scroll">
            <table className="tbl">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>How it is calculated</th>
                  <th>What it tells you</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Hook rate</strong>
                  </td>
                  <td>
                    3-second plays divided by impressions (TikTok uses 2-second
                    views)
                  </td>
                  <td>Whether the opening stops the scroll</td>
                </tr>
                <tr>
                  <td>
                    <strong>Hold rate</strong>
                  </td>
                  <td>ThruPlays divided by 3-second plays</td>
                  <td>Whether the story keeps people watching</td>
                </tr>
                <tr>
                  <td>
                    <strong>CTR</strong>
                  </td>
                  <td>Link clicks divided by impressions</td>
                  <td>Whether the offer and call to action create intent</td>
                </tr>
                <tr>
                  <td>
                    <strong>CPA</strong>
                  </td>
                  <td>Ad spend divided by purchases or leads</td>
                  <td>What each customer actually costs you</td>
                </tr>
                <tr>
                  <td>
                    <strong>ROAS</strong>
                  </td>
                  <td>Revenue divided by ad spend</td>
                  <td>Whether the campaign is profitable</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="note">
            <strong>About benchmarks.</strong> Public 2026 studies suggest a
            healthy Meta hook rate sits at roughly 25 to 30 percent or higher,
            with TikTok usually running higher. Compare each ad only against the
            same platform and niche, because averages vary widely.
          </div>
        </div>
      </section>
      <section>
        <div className="w">
          <div className="hd">
            <span className="eb">Platforms</span>
            <h2>
              Made for <em>each placement</em>
            </h2>
            <p>
              Our recommended formats and lengths for the platforms we create
              for most often.
            </p>
          </div>
          <div className="scroll">
            <table className="tbl">
              <thead>
                <tr>
                  <th>Platform</th>
                  <th>Format we deliver</th>
                  <th>Recommended length</th>
                  <th>Works best for</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>TikTok</strong>
                  </td>
                  <td>9:16 vertical with captions and native sound</td>
                  <td>15 to 30 seconds</td>
                  <td>Impulse-friendly products, trends and fast demos</td>
                </tr>
                <tr>
                  <td>
                    <strong>Instagram Reels</strong>
                  </td>
                  <td>9:16 vertical with clean text overlays</td>
                  <td>15 to 30 seconds</td>
                  <td>Beauty, fashion, lifestyle and gifting</td>
                </tr>
                <tr>
                  <td>
                    <strong>YouTube Shorts</strong>
                  </td>
                  <td>9:16 vertical with a strong first frame</td>
                  <td>20 to 45 seconds</td>
                  <td>Explainers, comparisons and how-to demos</td>
                </tr>
                <tr>
                  <td>
                    <strong>Meta feed and Stories</strong>
                  </td>
                  <td>9:16 and 4:5 cutdowns</td>
                  <td>6 to 30 seconds</td>
                  <td>Retargeting and conversion campaigns</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: "44px" }}>
            <div className="hd">
              <span className="eb">Testing method</span>
              <h2>
                How we <em>find your winning ad</em>
              </h2>
            </div>
            <ul className="chk">
              <li>
                <svg className="i">
                  <use href="#i-check" />
                </svg>
                <div>
                  <h3>Test hooks first</h3>
                  <p>
                    We keep the body of the ad constant and vary only the first
                    three seconds, so you learn what actually stops the scroll.
                  </p>
                </div>
              </li>
              <li>
                <svg className="i">
                  <use href="#i-check" />
                </svg>
                <div>
                  <h3>Then test angles</h3>
                  <p>
                    Problem-solution, social proof, comparison and curiosity
                    formats are compared against each other.
                  </p>
                </div>
              </li>
              <li>
                <svg className="i">
                  <use href="#i-check" />
                </svg>
                <div>
                  <h3>Scale only proven winners</h3>
                  <p>
                    Budget moves to creatives with strong hook rate, hold rate
                    and CPA, and the rest are retired.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="soft">
        <div className="w">
          <div className="hd c">
            <span className="eb">FAQ</span>
            <h2>
              UGC ads <em>questions</em>
            </h2>
          </div>
          <Faq k="ugc" />
        </div>
      </section>
      <Projects k="ugc" />
      <section>
        <div className="w">
          <div className="band">
            <div>
              <h2>Get ads that feel real and sell hard</h2>
              <p>
                Share your product and receive concept ideas within 24 hours.
              </p>
            </div>
            <a className="btn gr" href="#contact">
              Order UGC campaign
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
