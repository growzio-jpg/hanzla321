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
export default function Contact() {
  return (
    <div className="pg on">
      <div className="hero">
        <div className="w">
          <div>
            <p className="crumb">
              <a href="#home">Home</a> / Contact
            </p>
            <span className="eb">Let's talk</span>
            <h1>
              Get your free <em>growth audit</em>
            </h1>
            <p className="lead">
              Tell us about your brand. You will receive a clear plan and honest
              recommendations within 24 hours.
            </p>
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
                <span>You talk to the founder</span>
              </div>
            </div>
            <div className="pc b">
              <svg className="i">
                <use href="#i-bolt" />
              </svg>
              <div>
                <b>Free audit</b>
                <span>Reply within 24 hours</span>
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
                Send a short brief by form, WhatsApp, email or phone. You
                receive a free audit and a clear recommendation within 24 hours,
                with no obligation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w">
          <div className="split" style={{ alignItems: "start" }}>
            <div>
              <div className="cm">
                <div className="ic">
                  <svg className="i">
                    <use href="#i-mail" />
                  </svg>
                </div>
                <div>
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:hanzlaworkspace@gmail.com">
                      hanzlaworkspace@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="cm">
                <div className="ic gn">
                  <svg className="i">
                    <use href="#i-phone" />
                  </svg>
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>
                    <a href="tel:+923195179084">+92 319 5179084</a>
                  </p>
                </div>
              </div>
              <div className="cm">
                <div className="ic">
                  <svg className="i">
                    <use href="#i-chat" />
                  </svg>
                </div>
                <div>
                  <h3>WhatsApp</h3>
                  <p>
                    <a
                      href="https://wa.me/923195179084"
                      target="_blank"
                      rel="noopener"
                      style={{ color: "var(--blue)", fontWeight: "600" }}
                    >
                      Chat with us instantly
                    </a>
                  </p>
                </div>
              </div>
              <div className="cm">
                <div className="ic gn">
                  <svg className="i">
                    <use href="#i-pin" />
                  </svg>
                </div>
                <div>
                  <h3>Location</h3>
                  <p>Pakistan, serving clients worldwide</p>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="soft">
        <div className="w">
          <div className="hd c">
            <span className="eb">What happens next</span>
            <h2>
              Three steps from <em>message to plan</em>
            </h2>
          </div>
          <div
            className="steps"
            style={{
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            }}
          >
            <div className="st">
              <i>01</i>
              <h3>We reply</h3>
              <p>
                Usually within hours on WhatsApp and within 24 hours by email.
              </p>
            </div>
            <div className="st">
              <i>02</i>
              <h3>Free audit and call</h3>
              <p>
                We review your site, ads or search presence and discuss what to
                fix first.
              </p>
            </div>
            <div className="st">
              <i>03</i>
              <h3>Clear proposal</h3>
              <p>
                You receive scope, timeline and pricing with no obligation to
                proceed.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w">
          <div className="split">
            <div>
              <span className="eb">Before you message</span>
              <h2>
                Helpful details <em>to include</em>
              </h2>
              <p>
                None of this is required, but the more we know, the more
                specific our first reply can be.
              </p>
            </div>
            <div>
              <ul className="chk">
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  <div>
                    <h3>Your website and social links</h3>
                    <p>So we can review what already exists.</p>
                  </div>
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  <div>
                    <h3>Your main goal</h3>
                    <p>Sales, leads, bookings, traffic or brand awareness.</p>
                  </div>
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  <div>
                    <h3>Your audience and market</h3>
                    <p>Who you sell to and where.</p>
                  </div>
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  <div>
                    <h3>Budget range and timeline</h3>
                    <p>So recommendations fit reality.</p>
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
              Contact <em>questions</em>
            </h2>
          </div>
          <Faq k="contact" />
        </div>
      </section>
      <Facts />
      <Projects k="contact" />
    </div>
  );
}
