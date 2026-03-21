import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const gridRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = gridRef.current;
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

      const cols = Math.ceil(canvas.width / 60) + 1;
      const rows = Math.ceil(canvas.height / 60) + 1;

      // Grid lines
      ctx.strokeStyle = 'rgba(0, 200, 255, 0.04)';
      ctx.lineWidth = 1;

      for (let x = 0; x < cols; x++) {
        ctx.beginPath();
        ctx.moveTo(x * 60, 0);
        ctx.lineTo(x * 60, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < rows; y++) {
        ctx.beginPath();
        ctx.moveTo(0, y * 60);
        ctx.lineTo(canvas.width, y * 60);
        ctx.stroke();
      }

      // Pulsing nodes at intersections
      for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
          const wave = Math.sin(t * 0.02 + x * 0.4 + y * 0.3) * 0.5 + 0.5;
          if (wave > 0.85) {
            ctx.beginPath();
            ctx.arc(x * 60, y * 60, 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 200, 255, ${wave * 0.5})`;
            ctx.fill();
          }
        }
      }

      // Data flow lines
      const numFlows = 5;
      for (let i = 0; i < numFlows; i++) {
        const progress = ((t * 0.5 + i * 200) % 1000) / 1000;
        const startX = (i * 0.2 * canvas.width) % canvas.width;
        const endX = startX + 300;
        const y = 80 + i * 100;

        const gradient = ctx.createLinearGradient(startX, y, endX, y);
        gradient.addColorStop(0, 'transparent');
        gradient.addColorStop(0.5, 'rgba(0, 200, 255, 0.3)');
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.moveTo(startX + progress * 400, y);
        ctx.lineTo(startX + progress * 400 + 80, y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      t++;
      animId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <canvas ref={gridRef} className="hero__canvas" />

      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />

      <div className="container hero__content">
        <div className="hero__badge animate-in">
          <span className="hero__badge-dot" />
          <span>Доступно по всьому Рівному</span>
        </div>

        <h1 className="hero__title animate-in" style={{ animationDelay: '0.1s' }}>
          Ваша мережа —
          <br />
          <span className="hero__title-accent">наш пріоритет</span>
        </h1>

        <p className="hero__sub animate-in" style={{ animationDelay: '0.2s' }}>
          Налаштування роутерів, прокладка кабелю, побудова корпоративних мереж.
          Швидко. Надійно. Без зайвих слів.
        </p>

        <div className="hero__actions animate-in" style={{ animationDelay: '0.3s' }}>
          <a href="#contact" className="btn btn--primary">
            Замовити послугу
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </a>
          <a href="#services" className="btn btn--ghost">
            Наші послуги
          </a>
        </div>

        <div className="hero__stats animate-in" style={{ animationDelay: '0.4s' }}>
          {[
            { value: '500+', label: 'Клієнтів' },
            { value: '5 р.', label: 'На ринку' },
            { value: '24/7', label: 'Підтримка' },
          ].map((stat) => (
            <div key={stat.label} className="hero__stat">
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
