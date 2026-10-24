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
export default function Portfolio() {
  return (
    <div className="pg on">
      <div className="hero">
        <div className="w">
          <div>
            <p className="crumb">
              <a href="#home">Home</a> / Portfolio
            </p>
            <span className="eb">Selected work</span>
            <h1>
              Work that speaks <em>in numbers</em>
            </h1>
            <p className="lead">
              UGC ads, live websites and SEO growth from real projects for real
              brands.
            </p>
          </div>
          <svg
            className="il"
            viewBox="0 0 520 420"
            role="img"
            aria-label="Analytics dashboard"
          >
            <use href="#il-home" />
          </svg>
        </div>
      </div>
      <section style={{ padding: "44px 0 0" }}>
        <div className="w">
          <div className="tl">
            <b>In short</b>
            <div>
              <p>
                A selection of UGC ad concepts, live websites and SEO work.
                Every project is measured against agreed numbers: ad metrics,
                Core Web Vitals and search visibility.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w">
          <PortGrid />
        </div>
      </section>
      <section>
        <div className="w">
          <div className="hd">
            <span className="eb">Reporting</span>
            <h2>
              How we <em>measure and report</em> results
            </h2>
            <p>Every project is judged against numbers agreed in advance.</p>
          </div>
          <div className="grid">
            <div className="card">
              <div className="ic">
                <svg className="i">
                  <use href="#i-video" />
                </svg>
              </div>
              <h3>UGC campaigns</h3>
              <p>
                Hook rate, hold rate, CTR, CPA and ROAS, tracked per creative so
                winners are obvious.
              </p>
            </div>
            <div className="card">
              <div className="ic gn">
                <svg className="i">
                  <use href="#i-code" />
                </svg>
              </div>
              <h3>Websites</h3>
              <p>
                PageSpeed results, Core Web Vitals, form submissions and
                conversion rate.
              </p>
            </div>
            <div className="card">
              <div className="ic">
                <svg className="i">
                  <use href="#i-chart" />
                </svg>
              </div>
              <h3>SEO</h3>
              <p>
                Impressions, clicks, average position and organic leads from
                Search Console and analytics.
              </p>
            </div>
          </div>
          <div className="note">
            <strong>A note on results.</strong> Metrics on this page come from
            our own campaigns and client work. Outcomes vary by product, offer,
            budget and market, and detailed reports are shared during
            consultation.
          </div>
        </div>
      </section>
      <section className="soft">
        <div className="w">
          <div className="hd c">
            <span className="eb">FAQ</span>
            <h2>
              Portfolio <em>questions</em>
            </h2>
          </div>
          <Faq k="port" />
        </div>
      </section>
    </div>
  );
}
