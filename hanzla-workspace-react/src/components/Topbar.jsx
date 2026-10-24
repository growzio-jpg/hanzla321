import { hideImg, toTop, goCalc } from "../util";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="w">
        <div className="l">
          <a href="mailto:hanzlaworkspace@gmail.com">
            <svg className="i">
              <use href="#i-mail" />
            </svg>
            hanzlaworkspace@gmail.com
          </a>
          <a href="tel:+923195179084">
            <svg className="i">
              <use href="#i-phone" />
            </svg>
            +92 319 5179084
          </a>
          <a href="#contact">
            <svg className="i">
              <use href="#i-pin" />
            </svg>
            Pakistan, serving clients worldwide
          </a>
        </div>
        <span className="bd">Free growth audit, reply within 24 hours</span>
      </div>
    </div>
  );
}
