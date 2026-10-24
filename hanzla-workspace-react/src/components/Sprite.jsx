export default function Sprite() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: "absolute" }}
      aria-hidden="true"
    >
      <defs>
        <symbol id="i-video" viewBox="0 0 24 24">
          <rect x="2" y="5" width="14" height="14" rx="3" />
          <path d="M16 10l6-3v10l-6-3z" />
        </symbol>
        <symbol id="i-code" viewBox="0 0 24 24">
          <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
        </symbol>
        <symbol id="i-chart" viewBox="0 0 24 24">
          <path d="M3 20h18M5 16l4-5 4 3 6-8" />
          <path d="M15 6h4v4" />
        </symbol>
        <symbol id="i-bolt" viewBox="0 0 24 24">
          <path d="M13 2L4 14h7l-1 8 9-12h-7z" />
        </symbol>
        <symbol id="i-target" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1" />
        </symbol>
        <symbol id="i-search" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-5-5" />
        </symbol>
        <symbol id="i-chat" viewBox="0 0 24 24">
          <path d="M21 12a8 8 0 01-11.6 7.1L4 20l1.1-4.6A8 8 0 1121 12z" />
        </symbol>
        <symbol id="i-shield" viewBox="0 0 24 24">
          <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
          <path d="M9 12l2 2 4-4" />
        </symbol>
        <symbol id="i-phone" viewBox="0 0 24 24">
          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
        </symbol>
        <symbol id="i-mail" viewBox="0 0 24 24">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </symbol>
        <symbol id="i-pin" viewBox="0 0 24 24">
          <path d="M12 22s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z" />
          <circle cx="12" cy="10" r="2.5" />
        </symbol>
        <symbol id="i-users" viewBox="0 0 24 24">
          <circle cx="9" cy="8" r="3.5" />
          <path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6M16 4.5a3.5 3.5 0 010 7M18 14c2.5.6 4 2.5 4 6" />
        </symbol>
        <symbol id="i-layers" viewBox="0 0 24 24">
          <path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5" />
        </symbol>
        <symbol id="i-check" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12l3 3 5-6" />
        </symbol>
        <symbol id="i-arrow" viewBox="0 0 24 24">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </symbol>
        <symbol id="i-cart" viewBox="0 0 24 24">
          <path d="M3 4h3l2.5 11h9L20 8H7" />
          <circle cx="9.5" cy="19" r="1.5" />
          <circle cx="17" cy="19" r="1.5" />
        </symbol>
        <symbol id="i-globe" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
        </symbol>
        <symbol id="i-link" viewBox="0 0 24 24">
          <path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1" />
        </symbol>
        <symbol id="i-doc" viewBox="0 0 24 24">
          <path d="M6 3h8l5 5v13H6z" />
          <path d="M14 3v5h5M9 13h7M9 17h7" />
        </symbol>
        <symbol id="i-mic" viewBox="0 0 24 24">
          <rect x="9" y="3" width="6" height="11" rx="3" />
          <path d="M5 11a7 7 0 0014 0M12 18v3" />
        </symbol>
        <symbol id="i-cpu" viewBox="0 0 24 24">
          <rect x="6" y="6" width="12" height="12" rx="2" />
          <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
        </symbol>
        <symbol id="il-home" viewBox="0 0 520 420">
          <circle cx="262" cy="212" r="186" fill="#e4efff" />
          <circle cx="440" cy="70" r="46" fill="#dff4e7" />
          <rect
            x="36"
            y="64"
            width="372"
            height="268"
            rx="16"
            fill="#fff"
            stroke="#cfdcf0"
            strokeWidth="2"
          />
          <path
            d="M36 80a16 16 0 0116-16h340a16 16 0 0116 16v26H36z"
            fill="#f1f5fb"
          />
          <circle cx="58" cy="85" r="5" fill="#cbd5e4" />
          <circle cx="76" cy="85" r="5" fill="#cbd5e4" />
          <circle cx="94" cy="85" r="5" fill="#cbd5e4" />
          <rect x="52" y="122" width="64" height="192" rx="10" fill="#f4f8ff" />
          <rect x="62" y="136" width="44" height="8" rx="4" fill="#1f6feb" />
          <rect x="62" y="156" width="36" height="6" rx="3" fill="#cfdcf0" />
          <rect x="62" y="172" width="40" height="6" rx="3" fill="#cfdcf0" />
          <rect x="62" y="188" width="32" height="6" rx="3" fill="#cfdcf0" />
          <rect x="130" y="122" width="82" height="62" rx="10" fill="#f4f8ff" />
          <rect x="222" y="122" width="82" height="62" rx="10" fill="#eef9f2" />
          <rect x="314" y="122" width="82" height="62" rx="10" fill="#f4f8ff" />
          <rect x="140" y="134" width="30" height="6" rx="3" fill="#9db3d1" />
          <rect x="140" y="150" width="46" height="14" rx="4" fill="#0b1f3a" />
          <rect x="232" y="134" width="30" height="6" rx="3" fill="#8fcfa9" />
          <rect x="232" y="150" width="40" height="14" rx="4" fill="#12a150" />
          <rect x="324" y="134" width="30" height="6" rx="3" fill="#9db3d1" />
          <rect x="324" y="150" width="50" height="14" rx="4" fill="#1f6feb" />
          <rect
            x="130"
            y="196"
            width="266"
            height="118"
            rx="10"
            fill="#fff"
            stroke="#e3e9f2"
          />
          <path
            d="M144 296l46-34 40 14 52-46 44 18 56-44v92H144z"
            fill="#e3f6ea"
          />
          <path
            d="M144 296l46-34 40 14 52-46 44 18 56-44"
            fill="none"
            stroke="#12a150"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M144 306l60-12 60 6 70-20 60-8"
            fill="none"
            stroke="#1f6feb"
            strokeWidth="2.5"
            strokeDasharray="5 6"
            strokeLinecap="round"
          />
          <rect
            x="352"
            y="140"
            width="130"
            height="250"
            rx="24"
            fill="#0b1f3a"
          />
          <rect
            x="361"
            y="152"
            width="112"
            height="226"
            rx="17"
            fill="#1f6feb"
          />
          <rect x="392" y="146" width="50" height="6" rx="3" fill="#0b1f3a" />
          <circle cx="417" cy="236" r="26" fill="#fff" />
          <path d="M410 224l20 12-20 12z" fill="#1f6feb" />
          <rect
            x="374"
            y="326"
            width="68"
            height="7"
            rx="3.5"
            fill="#fff"
            opacity=".85"
          />
          <rect
            x="374"
            y="342"
            width="44"
            height="6"
            rx="3"
            fill="#fff"
            opacity=".5"
          />
          <rect
            x="14"
            y="296"
            width="168"
            height="66"
            rx="14"
            fill="#fff"
            stroke="#e3e9f2"
            strokeWidth="2"
          />
          <circle cx="46" cy="329" r="16" fill="#e3f6ea" />
          <path
            d="M39 335l7-9 5 5 6-8"
            fill="none"
            stroke="#12a150"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="72"
            y="324"
            fontFamily="Manrope,sans-serif"
            fontSize="11"
            fill="#6b7d96"
          >
            Return on ad spend
          </text>
          <text
            x="72"
            y="346"
            fontFamily="Manrope,sans-serif"
            fontSize="20"
            fontWeight="800"
            fill="#0b1f3a"
          >
            3.8x
          </text>
          <rect
            x="262"
            y="26"
            width="170"
            height="52"
            rx="14"
            fill="#fff"
            stroke="#e3e9f2"
            strokeWidth="2"
          />
          <circle cx="290" cy="52" r="14" fill="#e4efff" />
          <circle
            cx="288"
            cy="50"
            r="5"
            fill="none"
            stroke="#1f6feb"
            strokeWidth="2"
          />
          <path
            d="M292 54l5 5"
            stroke="#1f6feb"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <text
            x="314"
            y="48"
            fontFamily="Manrope,sans-serif"
            fontSize="10"
            fill="#6b7d96"
          >
            Google ranking
          </text>
          <text
            x="314"
            y="66"
            fontFamily="Manrope,sans-serif"
            fontSize="15"
            fontWeight="800"
            fill="#0b1f3a"
          >
            Position #1
          </text>
        </symbol>
        <symbol id="il-ugc" viewBox="0 0 520 420">
          <circle cx="262" cy="214" r="184" fill="#e4efff" />
          <circle cx="96" cy="326" r="52" fill="#dff4e7" />
          <rect
            x="166"
            y="22"
            width="196"
            height="376"
            rx="32"
            fill="#0b1f3a"
          />
          <rect
            x="177"
            y="38"
            width="174"
            height="344"
            rx="23"
            fill="#cfe3ff"
          />
          <rect x="228" y="30" width="72" height="9" rx="4.5" fill="#0b1f3a" />
          <circle cx="264" cy="150" r="34" fill="#f1c9a5" />
          <path
            d="M232 142c2-24 18-32 34-32s30 10 32 30c-10-12-24-16-36-14-12 2-22 8-30 16z"
            fill="#2b3a55"
          />
          <path d="M196 300c0-46 30-86 68-86s68 40 68 86z" fill="#1f6feb" />
          <rect x="288" y="228" width="26" height="62" rx="9" fill="#12a150" />
          <rect x="293" y="218" width="16" height="14" rx="4" fill="#0e8a43" />
          <rect
            x="291"
            y="246"
            width="20"
            height="14"
            rx="3"
            fill="#fff"
            opacity=".85"
          />
          <circle cx="264" cy="324" r="22" fill="#fff" />
          <path d="M258 314l17 10-17 10z" fill="#1f6feb" />
          <rect
            x="190"
            y="358"
            width="148"
            height="5"
            rx="2.5"
            fill="#fff"
            opacity=".6"
          />
          <rect x="190" y="358" width="84" height="5" rx="2.5" fill="#12a150" />
          <rect x="190" y="56" width="62" height="22" rx="11" fill="#fff" />
          <text
            x="221"
            y="71"
            textAnchor="middle"
            fontFamily="Manrope,sans-serif"
            fontSize="10"
            fontWeight="700"
            fill="#1f6feb"
          >
            Hook 0-3s
          </text>
          <g fill="#fff">
            <circle cx="388" cy="246" r="17" />
            <circle cx="388" cy="292" r="17" />
          </g>
          <path
            d="M388 252c-8-5-9-11-5-14 3-2 5 0 5 2 0-2 2-4 5-2 4 3 3 9-5 14z"
            fill="#ff5a6e"
            transform="translate(0 0)"
          />
          <rect x="378" y="284" width="20" height="14" rx="4" fill="#1f6feb" />
          <rect
            x="352"
            y="76"
            width="152"
            height="62"
            rx="14"
            fill="#fff"
            stroke="#e3e9f2"
            strokeWidth="2"
          />
          <text
            x="368"
            y="98"
            fontFamily="Manrope,sans-serif"
            fontSize="11"
            fill="#6b7d96"
          >
            Click-through rate
          </text>
          <text
            x="368"
            y="124"
            fontFamily="Manrope,sans-serif"
            fontSize="22"
            fontWeight="800"
            fill="#12a150"
          >
            +2.9%
          </text>
          <rect
            x="14"
            y="120"
            width="150"
            height="62"
            rx="14"
            fill="#fff"
            stroke="#e3e9f2"
            strokeWidth="2"
          />
          <text
            x="30"
            y="142"
            fontFamily="Manrope,sans-serif"
            fontSize="11"
            fill="#6b7d96"
          >
            Cost per purchase
          </text>
          <text
            x="30"
            y="168"
            fontFamily="Manrope,sans-serif"
            fontSize="22"
            fontWeight="800"
            fill="#1f6feb"
          >
            -42%
          </text>
        </symbol>
        <symbol id="il-web" viewBox="0 0 520 420">
          <circle cx="262" cy="214" r="184" fill="#e4efff" />
          <circle cx="450" cy="340" r="48" fill="#dff4e7" />
          <rect
            x="30"
            y="52"
            width="400"
            height="290"
            rx="16"
            fill="#fff"
            stroke="#cfdcf0"
            strokeWidth="2"
          />
          <path
            d="M30 68a16 16 0 0116-16h368a16 16 0 0116 16v28H30z"
            fill="#f1f5fb"
          />
          <circle cx="52" cy="74" r="5" fill="#ff8d8d" />
          <circle cx="70" cy="74" r="5" fill="#ffd56b" />
          <circle cx="88" cy="74" r="5" fill="#59d38b" />
          <rect
            x="116"
            y="64"
            width="220"
            height="20"
            rx="10"
            fill="#fff"
            stroke="#e3e9f2"
          />
          <rect x="50" y="116" width="170" height="16" rx="8" fill="#0b1f3a" />
          <rect x="50" y="142" width="130" height="16" rx="8" fill="#0b1f3a" />
          <rect x="50" y="172" width="190" height="7" rx="3.5" fill="#cfdcf0" />
          <rect x="50" y="188" width="160" height="7" rx="3.5" fill="#cfdcf0" />
          <rect x="50" y="212" width="92" height="30" rx="8" fill="#1f6feb" />
          <rect
            x="152"
            y="212"
            width="80"
            height="30"
            rx="8"
            fill="#fff"
            stroke="#cfdcf0"
          />
          <rect
            x="268"
            y="112"
            width="146"
            height="140"
            rx="14"
            fill="#e4efff"
          />
          <circle cx="341" cy="162" r="26" fill="#1f6feb" />
          <rect x="296" y="204" width="90" height="10" rx="5" fill="#fff" />
          <rect x="312" y="222" width="58" height="8" rx="4" fill="#9db3d1" />
          <rect x="50" y="268" width="104" height="60" rx="10" fill="#f4f8ff" />
          <rect
            x="166"
            y="268"
            width="104"
            height="60"
            rx="10"
            fill="#eef9f2"
          />
          <rect
            x="282"
            y="268"
            width="132"
            height="60"
            rx="10"
            fill="#f4f8ff"
          />
          <rect
            x="318"
            y="232"
            width="190"
            height="130"
            rx="14"
            fill="#0b1f3a"
          />
          <circle cx="338" cy="250" r="4" fill="#ff8d8d" />
          <circle cx="352" cy="250" r="4" fill="#ffd56b" />
          <circle cx="366" cy="250" r="4" fill="#59d38b" />
          <rect x="334" y="268" width="50" height="7" rx="3.5" fill="#6aa5ff" />
          <rect x="390" y="268" width="70" height="7" rx="3.5" fill="#59d38b" />
          <rect x="346" y="286" width="86" height="7" rx="3.5" fill="#9db3d1" />
          <rect x="346" y="304" width="62" height="7" rx="3.5" fill="#6aa5ff" />
          <rect x="334" y="322" width="44" height="7" rx="3.5" fill="#59d38b" />
          <rect x="384" y="322" width="76" height="7" rx="3.5" fill="#9db3d1" />
          <circle
            cx="76"
            cy="372"
            r="34"
            fill="#fff"
            stroke="#e3e9f2"
            strokeWidth="2"
          />
          <circle
            cx="76"
            cy="372"
            r="24"
            fill="none"
            stroke="#e3f6ea"
            strokeWidth="7"
          />
          <circle
            cx="76"
            cy="372"
            r="24"
            fill="none"
            stroke="#12a150"
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray="148"
            strokeDashoffset="8"
            transform="rotate(-90 76 372)"
          />
          <text
            x="76"
            y="378"
            textAnchor="middle"
            fontFamily="Manrope,sans-serif"
            fontSize="16"
            fontWeight="800"
            fill="#0b1f3a"
          >
            98
          </text>
          <text
            x="122"
            y="368"
            fontFamily="Manrope,sans-serif"
            fontSize="11"
            fill="#6b7d96"
          >
            PageSpeed
          </text>
          <text
            x="122"
            y="386"
            fontFamily="Manrope,sans-serif"
            fontSize="14"
            fontWeight="800"
            fill="#0b1f3a"
          >
            Mobile score
          </text>
        </symbol>
        <symbol id="il-seo" viewBox="0 0 520 420">
          <circle cx="262" cy="214" r="184" fill="#e4efff" />
          <circle cx="70" cy="90" r="40" fill="#dff4e7" />
          <rect
            x="44"
            y="40"
            width="432"
            height="52"
            rx="26"
            fill="#fff"
            stroke="#cfdcf0"
            strokeWidth="2"
          />
          <circle
            cx="76"
            cy="66"
            r="9"
            fill="none"
            stroke="#1f6feb"
            strokeWidth="3"
          />
          <path
            d="M83 73l8 8"
            stroke="#1f6feb"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <text
            x="104"
            y="71"
            fontFamily="Inter,sans-serif"
            fontSize="15"
            fill="#41536d"
          >
            best ugc video agency near me
          </text>
          <rect
            x="44"
            y="110"
            width="432"
            height="76"
            rx="14"
            fill="#fff"
            stroke="#12a150"
            strokeWidth="2.5"
          />
          <circle cx="76" cy="148" r="16" fill="#12a150" />
          <text
            x="76"
            y="154"
            textAnchor="middle"
            fontFamily="Manrope,sans-serif"
            fontSize="16"
            fontWeight="800"
            fill="#fff"
          >
            1
          </text>
          <rect x="106" y="130" width="140" height="10" rx="5" fill="#1f6feb" />
          <rect
            x="106"
            y="150"
            width="320"
            height="7"
            rx="3.5"
            fill="#cfdcf0"
          />
          <rect
            x="106"
            y="165"
            width="250"
            height="7"
            rx="3.5"
            fill="#cfdcf0"
          />
          <rect
            x="44"
            y="198"
            width="432"
            height="56"
            rx="14"
            fill="#fff"
            stroke="#e3e9f2"
            strokeWidth="2"
          />
          <circle cx="76" cy="226" r="14" fill="#eef2f8" />
          <rect
            x="106"
            y="214"
            width="110"
            height="9"
            rx="4.5"
            fill="#9db3d1"
          />
          <rect
            x="106"
            y="232"
            width="280"
            height="7"
            rx="3.5"
            fill="#e3e9f2"
          />
          <rect
            x="44"
            y="270"
            width="432"
            height="130"
            rx="16"
            fill="#fff"
            stroke="#e3e9f2"
            strokeWidth="2"
          />
          <text
            x="64"
            y="298"
            fontFamily="Manrope,sans-serif"
            fontSize="12"
            fontWeight="700"
            fill="#0b1f3a"
          >
            Organic traffic
          </text>
          <path
            d="M64 378l60-18 60 8 70-44 70 6 80-52v100z"
            fill="#e3f6ea"
            opacity=".9"
            transform="translate(0 -4)"
          />
          <path
            d="M64 374l60-18 60 8 70-44 70 6 80-52"
            fill="none"
            stroke="#12a150"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(0 -4)"
          />
          <circle
            cx="404"
            cy="316"
            r="7"
            fill="#fff"
            stroke="#12a150"
            strokeWidth="3.5"
          />
          <rect x="372" y="278" width="92" height="26" rx="13" fill="#0b1f3a" />
          <text
            x="418"
            y="296"
            textAnchor="middle"
            fontFamily="Manrope,sans-serif"
            fontSize="12"
            fontWeight="700"
            fill="#fff"
          >
            +240%
          </text>
        </symbol>
        <symbol id="il-about" viewBox="0 0 520 420">
          <circle cx="262" cy="214" r="184" fill="#e4efff" />
          <circle cx="430" cy="90" r="44" fill="#dff4e7" />
          <rect
            x="110"
            y="70"
            width="300"
            height="190"
            rx="16"
            fill="#0b1f3a"
          />
          <rect x="122" y="82" width="276" height="166" rx="8" fill="#fff" />
          <rect x="138" y="100" width="110" height="14" rx="7" fill="#0b1f3a" />
          <rect
            x="138"
            y="124"
            width="150"
            height="7"
            rx="3.5"
            fill="#cfdcf0"
          />
          <rect
            x="138"
            y="138"
            width="120"
            height="7"
            rx="3.5"
            fill="#cfdcf0"
          />
          <rect x="138" y="160" width="68" height="24" rx="7" fill="#1f6feb" />
          <rect x="290" y="98" width="94" height="80" rx="10" fill="#eef9f2" />
          <path
            d="M298 164l22-22 16 12 34-34"
            fill="none"
            stroke="#12a150"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="138" y="200" width="246" height="34" rx="8" fill="#f4f8ff" />
          <rect x="236" y="260" width="48" height="36" fill="#1b2f4d" />
          <rect x="200" y="294" width="120" height="10" rx="5" fill="#1b2f4d" />
          <rect x="40" y="318" width="440" height="14" rx="7" fill="#0b1f3a" />
          <rect x="70" y="332" width="12" height="62" fill="#0b1f3a" />
          <rect x="438" y="332" width="12" height="62" fill="#0b1f3a" />
          <rect
            x="356"
            y="286"
            width="44"
            height="32"
            rx="6"
            fill="#fff"
            stroke="#cfdcf0"
            strokeWidth="2"
          />
          <path
            d="M400 296c14 0 14 16 0 16"
            fill="none"
            stroke="#cfdcf0"
            strokeWidth="3"
          />
          <path
            d="M370 276c0-6 6-6 6-12M382 276c0-6 6-6 6-12"
            fill="none"
            stroke="#9db3d1"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect x="76" y="284" width="42" height="34" rx="6" fill="#12a150" />
          <path
            d="M97 284c-14-30-34-34-40-30 6 8 16 14 34 30zM97 284c14-34 34-38 42-34-6 10-18 18-36 34z"
            fill="#34c27a"
          />
          <rect x="150" y="272" width="64" height="46" rx="4" fill="#1f6feb" />
          <rect
            x="162"
            y="284"
            width="40"
            height="5"
            rx="2.5"
            fill="#fff"
            opacity=".8"
          />
          <rect
            x="162"
            y="296"
            width="28"
            height="5"
            rx="2.5"
            fill="#fff"
            opacity=".5"
          />
        </symbol>
        <symbol id="il-contact" viewBox="0 0 520 420">
          <circle cx="262" cy="214" r="184" fill="#e4efff" />
          <circle cx="440" cy="330" r="46" fill="#dff4e7" />
          <rect
            x="56"
            y="70"
            width="270"
            height="110"
            rx="22"
            fill="#fff"
            stroke="#cfdcf0"
            strokeWidth="2"
          />
          <path
            d="M96 180l-10 34 38-34z"
            fill="#fff"
            stroke="#cfdcf0"
            strokeWidth="2"
          />
          <rect x="60" y="150" width="60" height="30" fill="#fff" />
          <rect x="84" y="96" width="160" height="10" rx="5" fill="#0b1f3a" />
          <rect x="84" y="118" width="210" height="7" rx="3.5" fill="#cfdcf0" />
          <rect x="84" y="134" width="170" height="7" rx="3.5" fill="#cfdcf0" />
          <rect
            x="196"
            y="204"
            width="270"
            height="100"
            rx="22"
            fill="#1f6feb"
          />
          <path d="M420 304l12 32-38-32z" fill="#1f6feb" />
          <rect x="226" y="228" width="150" height="9" rx="4.5" fill="#fff" />
          <rect
            x="226"
            y="248"
            width="196"
            height="7"
            rx="3.5"
            fill="#fff"
            opacity=".6"
          />
          <rect
            x="226"
            y="264"
            width="130"
            height="7"
            rx="3.5"
            fill="#fff"
            opacity=".6"
          />
          <rect
            x="76"
            y="260"
            width="108"
            height="84"
            rx="12"
            fill="#fff"
            stroke="#cfdcf0"
            strokeWidth="2"
          />
          <path
            d="M76 272l54 38 54-38"
            fill="none"
            stroke="#12a150"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <circle cx="170" cy="258" r="12" fill="#12a150" />
          <path
            d="M164 258l4 4 7-8"
            fill="none"
            stroke="#fff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </symbol>
      </defs>
    </svg>
  );
}
