import React from 'react';
import useContactForm from '../../hooks/useContactForm';
import './ContactForm.css';

const SERVICES_LIST = [
  'Налаштування роутера',
  'Прокладка кабелю',
  'Корпоративна мережа',
  'Підключення до інтернету',
  'Безпека мережі',
  'Wi-Fi аудит',
  'Інше',
];

const ContactForm: React.FC = () => {
  const {
    values, errors, isLoading, isSuccess, serverError,
    handleChange, handleSubmit, resetSuccess,
  } = useContactForm();

  return (
    <section className="nf-contact section-py nf-grid-bg" id="contact">
      <div className="nf-glow-blob nf-contact__blob-1" />
      <div className="nf-glow-blob nf-contact__blob-2" />

      <div className="container position-relative">
        <div className="row align-items-center g-5">

          {/* Left: info */}
          <div className="col-lg-5">
            <div className="section-tag">Зв'яжіться з нами</div>
            <h2 className="section-title">
              Готові <span>вирішити</span><br />вашу задачу
            </h2>
            <p className="nf-contact__lead">
              Залиште заявку і ми передзвонимо протягом 15 хвилин.
              Безкоштовна консультація та оцінка вартості.
            </p>

            <div className="nf-contact__info">
              <a href="tel:+380991234567" className="nf-contact__info-item">
                <div className="nf-contact__info-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 3a1 1 0 011-1h2.5a1 1 0 011 .9l.5 3.5a1 1 0 01-.7 1.1L6 8a11 11 0 005 5l.5-1.3a1 1 0 011.1-.7l3.5.5a1 1 0 01.9 1V15a1 1 0 01-1 1C7.2 16 3 11.8 3 7V3z"
                      stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="nf-contact__info-label">Телефон</div>
                  <div className="nf-contact__info-value">+38 (067) 772-25-36</div>
                </div>
              </a>

              <a href="mailto:info@netfix.ua" className="nf-contact__info-item">
                <div className="nf-contact__info-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <div className="nf-contact__info-label">Email</div>
                  <div className="nf-contact__info-value">info@netfix.ua</div>
                </div>
              </a>

              <div className="nf-contact__info-item">
                <div className="nf-contact__info-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="9" r="3" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M10 2a7 7 0 017 7c0 4-7 10-7 10S3 13 3 9a7 7 0 017-7z"
                      stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <div className="nf-contact__info-label">Адреса</div>
                  <div className="nf-contact__info-value">м. Рівне, вул. Кулика і Гудачека, 24А</div>
                </div>
              </div>

              <div className="nf-contact__info-item">
                <div className="nf-contact__info-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <div className="nf-contact__info-label">Графік</div>
                  <div className="nf-contact__info-value">Пн–Нд: 8:00 – 21:00</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="col-lg-7">
            <div className="nf-contact__form-wrap">

              {isSuccess ? (
                <div className="nf-contact__success">
                  <div className="nf-contact__success-icon">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M14 24l7 7 13-13" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>Заявку отримано!</h3>
                  <p>Ми зателефонуємо вам протягом 15 хвилин. Дякуємо за звернення!</p>
                  <button className="btn-nf-ghost mt-3" onClick={resetSuccess}>
                    Нова заявка
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="nf-contact__form-title">
                    <span className="nf-contact__form-tag">// нова заявка</span>
                  </div>

                  <div className="row g-3">
                    {/* Name */}
                    <div className="col-sm-6">
                      <label className="nf-form-label" htmlFor="name">Ім'я *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className={`nf-form-control form-control ${errors.name ? 'is-invalid' : ''}`}
                        placeholder="Іван Петренко"
                        value={values.name}
                        onChange={handleChange}
                        autoComplete="name"
                      />
                      {errors.name && <div className="nf-invalid-feedback">{errors.name}</div>}
                    </div>

                    {/* Phone */}
                    <div className="col-sm-6">
                      <label className="nf-form-label" htmlFor="phone">Телефон *</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className={`nf-form-control form-control ${errors.phone ? 'is-invalid' : ''}`}
                        placeholder="+38 (099) 000-00-00"
                        value={values.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                      />
                      {errors.phone && <div className="nf-invalid-feedback">{errors.phone}</div>}
                    </div>

                    {/* Email */}
                    <div className="col-sm-6">
                      <label className="nf-form-label" htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className={`nf-form-control form-control ${errors.email ? 'is-invalid' : ''}`}
                        placeholder="example@email.com"
                        value={values.email}
                        onChange={handleChange}
                        autoComplete="email"
                      />
                      {errors.email && <div className="nf-invalid-feedback">{errors.email}</div>}
                    </div>

                    {/* Service */}
                    <div className="col-sm-6">
                      <label className="nf-form-label" htmlFor="service">Послуга *</label>
                      <select
                        id="service"
                        name="service"
                        className={`nf-form-control form-control form-select ${errors.service ? 'is-invalid' : ''}`}
                        value={values.service}
                        onChange={handleChange}
                      >
                        <option value="">Оберіть послугу</option>
                        {SERVICES_LIST.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      {errors.service && <div className="nf-invalid-feedback">{errors.service}</div>}
                    </div>

                    {/* Message */}
                    <div className="col-12">
                      <label className="nf-form-label" htmlFor="message">Опис завдання</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="nf-form-control form-control"
                        placeholder="Опишіть вашу проблему або завдання..."
                        value={values.message}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Server error */}
                    {serverError && (
                      <div className="col-12">
                        <div className="nf-contact__server-error">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2"/>
                            <path d="M8 5v3.5M8 11v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                          {serverError}
                        </div>
                      </div>
                    )}

                    {/* Submit */}
                    <div className="col-12 d-flex align-items-center gap-4 flex-wrap">
                      <button
                        type="submit"
                        className="btn-nf-primary"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <span className="nf-spinner" />
                            Надсилаємо...
                          </>
                        ) : (
                          <>
                            Надіслати заявку
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M2 8h12M10 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                          </>
                        )}
                      </button>
                      <span className="nf-contact__form-note">
                        * — обов'язкові поля
                      </span>
                    </div>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
