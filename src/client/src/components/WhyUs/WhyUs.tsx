import React from 'react';
import './WhyUs.css';

const REASONS = [
  {
    num: '01',
    title: 'Швидкий виїзд',
    desc: 'Виїжджаємо в день звернення. У більшості випадків вирішуємо задачу за 1–2 години.',
  },
  {
    num: '02',
    title: 'Прозора ціна',
    desc: 'Оцінка вартості до початку робіт. Без прихованих платежів та несподіванок у рахунку.',
  },
  {
    num: '03',
    title: 'Гарантія 6 місяців',
    desc: 'На всі виконані роботи та встановлене обладнання надається гарантія 6 місяців.',
  },
  {
    num: '04',
    title: 'Certified спеціалісти',
    desc: 'Команда сертифікованих Cisco і MikroTik інженерів з досвідом від 5 років.',
  },
];

const PROCESS = [
  { step: 'Заявка', desc: 'Залишаєте заявку або телефонуєте' },
  { step: 'Консультація', desc: 'Уточнюємо задачу і рахуємо вартість' },
  { step: 'Виїзд', desc: 'Майстер приїжджає у зручний час' },
  { step: 'Результат', desc: 'Мережа працює. Підписуємо акт' },
];

const WhyUs: React.FC = () => (
  <section className="nf-whyus section-py" id="why-us">
    <div className="nf-glow-blob nf-whyus__blob" />
    <div className="container position-relative">

      {/* Reasons */}
      <div className="row mb-5">
        <div className="col-lg-5">
          <div className="section-tag">Чому NetFix</div>
          <h2 className="section-title">Ми вирішуємо,<br /><span>а не обіцяємо</span></h2>
        </div>
        <div className="col-lg-6 offset-lg-1 d-flex align-items-center">
          <p className="nf-whyus__lead">
            За 5 років ми виконали понад 1000 проєктів — від домашніх роутерів до мереж
            торгових центрів. Кожен клієнт отримує результат, а не відмазки.
          </p>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {REASONS.map((r, i) => (
          <div key={r.num} className="col-sm-6 col-xl-3">
            <div
              className="nf-whyus-card anim-fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <span className="nf-whyus-card__num">{r.num}</span>
              <h3 className="nf-whyus-card__title">{r.title}</h3>
              <p className="nf-whyus-card__desc">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Process */}
      <div className="nf-process">
        <div className="section-tag mb-4">Як ми працюємо</div>
        <div className="nf-process__steps">
          {PROCESS.map((p, i) => (
            <div key={p.step} className="nf-process__step">
              <div className="nf-process__step-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="nf-process__step-line" />
              <div className="nf-process__step-title">{p.step}</div>
              <div className="nf-process__step-desc">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default WhyUs;
