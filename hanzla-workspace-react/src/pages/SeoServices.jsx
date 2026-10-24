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
export default function SeoServices() {
  return (
    <div className="pg on">
      <div className="hero">
        <div className="w">
          <div>
            <p className="crumb">
              <a href="#home">Home</a> / SEO Services
            </p>
            <span className="eb">SEO, AEO and GEO</span>
            <h1>
              Be found on Google, in <em>AI answers</em> and on local maps
            </h1>
            <p className="lead">
              Technical, on-page and authority SEO, plus answer-engine and
              generative-engine optimization, so customers find you wherever
              they search.
            </p>
            <div className="btns">
              <a className="btn" href="#contact">
                Request a free SEO audit
              </a>
              <a className="btn o" href="#seo-calc" onClick={goCalc}>
                Try the estimator
              </a>
            </div>
          </div>
          <svg
            className="il"
            viewBox="0 0 520 420"
            role="img"
            aria-label="Google search result ranked number one with traffic growth"
          >
            <use href="#il-seo" />
          </svg>
        </div>
      </div>
      <section style={{ padding: "44px 0 0" }}>
        <div className="w">
          <div className="tl">
            <b>In short</b>
            <div>
              <p>
                SEO ranks your pages in search, AEO makes your content the
                direct answer, and GEO helps AI tools understand and cite your
                brand. We start with a 90-day plan: audit, foundations, content,
                then authority.
              </p>
              <div className="rl">
                <a href="#ugc-ads">UGC video ads →</a>
                <a href="#web-development">Web development →</a>
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
              How search visibility is <em>built step by step</em>
            </h2>
            <p>From the first search to compounding organic growth.</p>
          </div>
          <Reel
            k="seo"
            d={4800}
            label="Animated walkthrough of the SEO process"
          />
        </div>
      </section>
      <section id="seo-calc">
        <div className="w">
          <div className="hd">
            <span className="eb">Growth estimator</span>
            <h2>
              Estimate your <em>organic potential</em>
            </h2>
            <p>
              A quick, indicative estimate. Real results depend on competition,
              content and site health.
            </p>
          </div>
          <Calc />
        </div>
      </section>
      <section className="soft">
        <div className="w">
          <div className="hd c">
            <span className="eb">Our process</span>
            <h2>
              The <em>three pillars</em> of SEO
            </h2>
          </div>
          <div className="grid">
            <div className="card">
              <div className="ic">
                <svg className="i">
                  <use href="#i-cpu" />
                </svg>
              </div>
              <h3>Technical SEO</h3>
              <ul>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  Core Web Vitals and speed fixes
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  XML sitemap, robots and canonicals
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  Crawl and indexing issues
                </li>
              </ul>
            </div>
            <div className="card">
              <div className="ic gn">
                <svg className="i">
                  <use href="#i-doc" />
                </svg>
              </div>
              <h3>On-page and content</h3>
              <ul>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  Keyword and intent mapping
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  Titles, meta and heading structure
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  Schema markup and internal links
                </li>
              </ul>
            </div>
            <div className="card">
              <div className="ic">
                <svg className="i">
                  <use href="#i-link" />
                </svg>
              </div>
              <h3>Authority building</h3>
              <ul>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  Ethical backlink outreach
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  Guest posts and digital PR
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  Brand entity and citations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w">
          <div className="hd">
            <span className="eb">Search is changing</span>
            <h2>
              AEO and GEO: <em>become the answer</em>
            </h2>
            <p>
              People now ask AI assistants and read summaries instead of
              clicking ten links. We optimize for both.
            </p>
          </div>
          <div className="grid">
            <div className="card">
              <div className="ic">
                <svg className="i">
                  <use href="#i-mic" />
                </svg>
              </div>
              <h3>AEO: answer engine optimization</h3>
              <p>
                Content structured as clear questions and direct answers, with
                FAQ schema, to win featured snippets and voice search.
              </p>
            </div>
            <div className="card">
              <div className="ic gn">
                <svg className="i">
                  <use href="#i-cpu" />
                </svg>
              </div>
              <h3>GEO: generative engine optimization</h3>
              <p>
                Entity clarity, consistent brand mentions and authoritative
                citations so AI assistants can understand and recommend you.
              </p>
            </div>
            <div className="card">
              <div className="ic">
                <svg className="i">
                  <use href="#i-pin" />
                </svg>
              </div>
              <h3>Local SEO</h3>
              <p>
                Google Business Profile, local citations, reviews and location
                pages to win near-me searches in your city.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="soft">
        <div className="w">
          <div className="hd">
            <span className="eb">Understand the difference</span>
            <h2>
              SEO, AEO, GEO and local SEO, <em>side by side</em>
            </h2>
          </div>
          <div className="scroll">
            <table className="tbl">
              <thead>
                <tr>
                  <th>Discipline</th>
                  <th>Primary goal</th>
                  <th>Where you appear</th>
                  <th>Core tactics</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>SEO</strong>
                  </td>
                  <td>Rank pages in organic results</td>
                  <td>Google and Bing results, Maps</td>
                  <td>Technical health, keyword intent, content and links</td>
                </tr>
                <tr>
                  <td>
                    <strong>AEO</strong>
                  </td>
                  <td>Be the direct answer</td>
                  <td>Featured snippets, People Also Ask, voice assistants</td>
                  <td>
                    Question-style headings, short direct answers, FAQ content,
                    schema
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>GEO</strong>
                  </td>
                  <td>Be cited by AI answers</td>
                  <td>AI Overviews and AI assistants</td>
                  <td>
                    Consistent entity facts, authoritative mentions,
                    well-structured pages
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Local SEO</strong>
                  </td>
                  <td>Win near-me searches</td>
                  <td>Map pack and local results</td>
                  <td>
                    Google Business Profile, citations, reviews, location pages
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="note b">
            <strong>Honest note on FAQ markup.</strong> Structured data helps
            machines understand your content, but Google now shows FAQ rich
            results only for a limited set of well-known authoritative sites. We
            use FAQ content for clarity and answer-readiness, not as a promise
            of special snippets.
          </div>
        </div>
      </section>
      <section>
        <div className="w">
          <div className="hd">
            <span className="eb">Roadmap</span>
            <h2>
              Your first <em>90 days</em>
            </h2>
            <p>
              A realistic plan that fixes the foundations first and builds
              visibility on top of them.
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
              <h3>Days 1 to 14: Audit</h3>
              <p>
                Technical crawl, keyword and competitor research, and a baseline
                of current traffic and rankings.
              </p>
            </div>
            <div className="st">
              <i>02</i>
              <h3>Days 15 to 45: Foundations</h3>
              <p>
                Speed, indexing, metadata, internal links and schema fixed on
                your most important pages.
              </p>
            </div>
            <div className="st">
              <i>03</i>
              <h3>Days 46 to 75: Content</h3>
              <p>
                Intent-matched pages and answer-ready sections built around the
                questions buyers ask.
              </p>
            </div>
            <div className="st">
              <i>04</i>
              <h3>Days 76 to 90: Authority</h3>
              <p>
                Ethical link and citation work, then a clear report with
                next-quarter priorities.
              </p>
            </div>
          </div>
          <div className="note">
            <strong>What we do not promise.</strong> We never guarantee a number
            one ranking, instant results or paid-link schemes. Search engines
            control rankings, so we commit to a transparent process, ethical
            methods and measurable progress.
          </div>
        </div>
      </section>
      <section className="soft">
        <div className="w">
          <div className="split">
            <div>
              <span className="eb">Semantic on-page SEO</span>
              <h2>
                The checklist behind <em>every page we optimize</em>
              </h2>
              <p>
                Semantic SEO means writing for topics and intent, not just
                keywords. Each page is built so both readers and machines
                understand exactly what it covers.
              </p>
            </div>
            <div>
              <ul className="chk">
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  <div>
                    <h3>One clear H1 per page</h3>
                    <p>
                      Followed by question-style H2s that mirror how people
                      search.
                    </p>
                  </div>
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  <div>
                    <h3>Direct answers first</h3>
                    <p>
                      A short, plain answer under each question heading, then
                      the detail.
                    </p>
                  </div>
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  <div>
                    <h3>Descriptive titles and meta</h3>
                    <p>
                      Unique titles and descriptions written to earn the click.
                    </p>
                  </div>
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  <div>
                    <h3>Entity consistency</h3>
                    <p>
                      Brand name, services, location and contact details stated
                      the same way everywhere.
                    </p>
                  </div>
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  <div>
                    <h3>Internal linking</h3>
                    <p>Related pages linked with descriptive anchor text.</p>
                  </div>
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  <div>
                    <h3>Schema and image alt text</h3>
                    <p>
                      Structured data and meaningful alt text on every important
                      image.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w">
          <div className="hd">
            <span className="eb">Local SEO</span>
            <h2>
              Win customers in <em>your city</em>
            </h2>
            <p>
              Local visibility works differently from national SEO. These are
              the four areas we focus on.
            </p>
          </div>
          <div className="grid">
            <div className="card">
              <div className="ic">
                <svg className="i">
                  <use href="#i-pin" />
                </svg>
              </div>
              <h3>Google Business Profile</h3>
              <p>
                Accurate categories, services, photos, hours and posts so your
                listing converts searchers into calls and visits.
              </p>
            </div>
            <div className="card">
              <div className="ic gn">
                <svg className="i">
                  <use href="#i-doc" />
                </svg>
              </div>
              <h3>Citations and consistency</h3>
              <p>
                Matching business name, address and phone details across trusted
                directories.
              </p>
            </div>
            <div className="card">
              <div className="ic">
                <svg className="i">
                  <use href="#i-search" />
                </svg>
              </div>
              <h3>Local keyword research</h3>
              <p>
                City names, near-me phrasing and, where real searches show it,
                Roman Urdu variations.
              </p>
            </div>
            <div className="card">
              <div className="ic gn">
                <svg className="i">
                  <use href="#i-users" />
                </svg>
              </div>
              <h3>Reviews and reputation</h3>
              <p>
                A simple process for earning genuine reviews and replying
                professionally.
              </p>
            </div>
          </div>
          <div style={{ marginTop: "40px" }}>
            <h3 style={{ textAlign: "center" }}>What we report on</h3>
            <div
              className="chips"
              style={{ justifyContent: "center", marginTop: "14px" }}
            >
              <span className="chip">Impressions</span>
              <span className="chip">Clicks</span>
              <span className="chip">Average position</span>
              <span className="chip">Organic leads</span>
              <span className="chip">Branded vs non-branded traffic</span>
              <span className="chip">Core Web Vitals</span>
            </div>
          </div>
        </div>
      </section>
      <section className="soft">
        <div className="w">
          <div className="hd c">
            <span className="eb">FAQ</span>
            <h2>
              SEO <em>questions</em>
            </h2>
          </div>
          <Faq k="seo" />
        </div>
      </section>
      <Projects k="seo" />
      <section>
        <div className="w">
          <div className="band">
            <div>
              <h2>Find out why you are not ranking</h2>
              <p>
                Get a free audit covering technical issues, keyword gaps and
                quick wins.
              </p>
            </div>
            <a className="btn gr" href="#contact">
              Request free audit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
