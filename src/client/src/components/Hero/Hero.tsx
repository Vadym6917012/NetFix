import React, { useEffect, useRef } from 'react';
import './Hero.css';

const STATS = [
  { value: '500+', label: 'Клієнтів' },
  { value: '5 р.',  label: 'На ринку' },
  { value: '24/7', label: 'Підтримка' },
];

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated network grid background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const STEP = 70;
      const cols = Math.ceil(canvas.width / STEP) + 1;
      const rows = Math.ceil(canvas.height / STEP) + 1;

      // Faint grid
      ctx.strokeStyle = 'rgba(0, 195, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let x = 0; x < cols; x++) {
        ctx.beginPath();
        ctx.moveTo(x * STEP, 0);
        ctx.lineTo(x * STEP, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < rows; y++) {
        ctx.beginPath();
        ctx.moveTo(0, y * STEP);
        ctx.lineTo(canvas.width, y * STEP);
        ctx.stroke();
      }

      // Animated nodes at intersection
      for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
          const v = Math.sin(t * 0.018 + x * 0.35 + y * 0.28) * 0.5 + 0.5;
          if (v > 0.82) {
            ctx.beginPath();
            ctx.arc(x * STEP, y * STEP, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 195, 255, ${v * 0.6})`;
            ctx.fill();
          }
        }
      }

      // Moving data streams
      for (let i = 0; i < 6; i++) {
        const p = ((t * 0.6 + i * 180) % 900) / 900;
        const baseX = (i * 0.18 * canvas.width) % canvas.width;
        const y = 60 + i * 90;
        const len = 100;
        const x = baseX + p * (canvas.width + len) - len;

        const g = ctx.createLinearGradient(x, y, x + len, y);
        g.addColorStop(0, 'transparent');
        g.addColorStop(0.5, 'rgba(0, 195, 255, 0.35)');
        g.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + len, y);
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      t++;
      animId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section className="nf-hero" id="home">
      <canvas ref={canvasRef} className="nf-hero__canvas" />
      <div className="nf-glow-blob nf-hero__blob-1" />
      <div className="nf-glow-blob nf-hero__blob-2" />

      <div className="container nf-hero__content">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-8 col-xl-7">

            <div className="nf-hero__badge anim-fade-up">
              <span className="nf-hero__badge-dot" />
              Рівне та область — швидкий виїзд
            </div>

            <h1 className="nf-hero__title anim-fade-up" style={{ animationDelay: '0.1s' }}>
              Ваша мережа —<br />
              <span>наш пріоритет</span>
            </h1>

            <p className="nf-hero__desc anim-fade-up" style={{ animationDelay: '0.2s' }}>
              Налаштування роутерів, прокладка кабелю,&nbsp;побудова корпоративних&nbsp;мереж.
              Швидко. Надійно. Без&nbsp;зайвих&nbsp;слів.
            </p>

            <div className="nf-hero__actions anim-fade-up" style={{ animationDelay: '0.3s' }}>
              <a href="#contact" className="btn-nf-primary">
                Замовити послугу
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </a>
              <a href="#services" className="btn-nf-ghost">Наші послуги</a>
            </div>

            <div className="nf-hero__stats anim-fade-up" style={{ animationDelay: '0.4s' }}>
              {STATS.map((s, i) => (
                <React.Fragment key={s.label}>
                  <div className="nf-hero__stat">
                    <span className="nf-hero__stat-value">{s.value}</span>
                    <span className="nf-hero__stat-label">{s.label}</span>
                  </div>
                  {i < STATS.length - 1 && <div className="nf-hero__stat-divider" />}
                </React.Fragment>
              ))}
            </div>

          </div>
        </div>
      </div>

      <a href="#services" className="nf-hero__scroll" aria-label="Прокрутити вниз">
        <span>Scroll</span>
        <div className="nf-hero__scroll-line" />
      </a>
    </section>
  );
};

export default Hero;
