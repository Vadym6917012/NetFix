import React from "react";
import "./Footer.css";

const LINKS = [
  { label: "Послуги", href: "#services" },
  { label: "Про нас", href: "#why-us" },
  { label: "Контакти", href: "#contact" },
];

const Footer: React.FC = () => (
  <footer className="nf-footer">
    <div className="container">
      <div className="nf-footer__top row g-4 align-items-start">
        {/* Brand */}
        <div className="col-lg-4">
          <a href="#" className="nf-footer__logo">
            <svg width="22" height="22" viewBox="0 0 26 26" fill="none">
              <path
                d="M13 2L24 13L13 24L2 13Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M13 7L19 13L13 19L7 13Z"
                fill="currentColor"
                opacity="0.35"
              />
              <circle cx="13" cy="13" r="2.5" fill="currentColor" />
            </svg>
            Net<span>Fix</span>
          </a>
          <p className="nf-footer__tagline">
            Мережеві рішення для бізнесу та дому.
            <br />
            Рівне та область.
          </p>
          <div className="nf-footer__social">
            <a
              href="https://t.me/netfixrs"
              rel="noopener noreferrer"
              target="_blank"
              className="nf-footer__social-link"
              aria-label="Telegram"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.94 8.19l-2.02 9.52c-.15.68-.54.85-1.09.53l-3-2.21-1.45 1.39c-.16.16-.3.3-.61.3l.21-3.02 5.5-4.97c.24-.21-.05-.33-.37-.12L6.44 14.4l-2.96-.92c-.64-.2-.65-.64.14-.95l11.57-4.46c.53-.2 1 .13.75.12z" />
              </svg>
            </a>
            <a
              href="viber://chat?number=+380677722536"
              rel="noopener noreferrer"
              target="_blank"
              className="nf-footer__social-link"
              aria-label="Viber"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11.985 0C8.6 0 3 2.01 3 8.82c0 3.56 1.66 6.36 4.36 7.72v3.11c0 .41.5.62.79.33l3.14-3.22c.24.02.47.03.71.03 7.44 0 9-5.82 9-8.81C21 2.81 16.1 0 11.985 0zm.015 15.52c-.44 0-.88-.04-1.31-.1l-2.86 2.93v-2.64C5.3 14.6 4 12.14 4 8.82 4 3.2 8.36 1 11.985 1 15.61 1 20 3.2 20 8.82c0 2.98-1.44 6.7-6 6.7z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/netfix.rs?igsh=NGRhYzVqMm45N2E0&utm_source=qr"
              rel="noopener noreferrer"
              target="_blank"
              className="nf-footer__social-link"
              aria-label="Instagram"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Nav */}
        <div className="col-6 col-lg-2">
          <div className="nf-footer__col-title">Навігація</div>
          <ul className="nf-footer__links">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div className="col-6 col-lg-3">
          <div className="nf-footer__col-title">Контакти</div>
          <ul className="nf-footer__links">
            <li>
              <a href="tel:+380991234567">+38 (067) 772-25-36</a>
            </li>
            <li>
              <a href="mailto:info@netfix.ua">info@netfix.ua</a>
            </li>
            <li>
              <span>м. Рівне, вул. Соборна 1</span>
            </li>
          </ul>
        </div>

        {/* Working hours */}
        <div className="col-lg-3">
          <div className="nf-footer__col-title">Графік роботи</div>
          <ul className="nf-footer__schedule">
            <li>
              <span>Пн – Пт</span>
              <span>08:00 – 21:00</span>
            </li>
            <li>
              <span>Сб – Нд</span>
              <span>09:00 – 18:00</span>
            </li>
            <li className="nf-footer__schedule-note">
              Терміновий виїзд — цілодобово
            </li>
          </ul>
        </div>
      </div>

      <div className="nf-footer__bottom">
        <span>© {new Date().getFullYear()} NetFix. Всі права захищені.</span>
        <span className="nf-footer__built">Рівне, Україна 🇺🇦</span>
      </div>
    </div>
  </footer>
);

export default Footer;
