import React from 'react';
import type { ServiceItem } from '../../types';
import './Services.css';

const SERVICES: ServiceItem[] = [
  {
    id: 1,
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="4" y="10" width="24" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 10V8a2 2 0 012-2h8a2 2 0 012 2v2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="16" cy="17" r="2" fill="currentColor" opacity="0.5"/>
      <path d="M4 17h4M24 17h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>`,
    title: 'Налаштування роутерів',
    description: 'Конфігурація Wi-Fi роутерів будь-яких виробників. Оптимізація покриття, налаштування безпеки та гостьових мереж.',
    features: ['TP-Link, ASUS, MikroTik', 'Mesh-мережі', 'VPN та фаєрвол', 'Батьківський контроль'],
  },
  {
    id: 2,
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M6 26L26 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="6" cy="26" r="2.5" fill="currentColor" opacity="0.5"/>
      <circle cx="26" cy="6" r="2.5" fill="currentColor" opacity="0.5"/>
      <path d="M14 18L18 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 22L22 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
    </svg>`,
    title: 'Прокладка кабелю',
    description: 'Акуратна прокладка мережевого кабелю (UTP/FTP Cat5e/Cat6) у квартирах, офісах та приміщеннях будь-якої складності.',
    features: ['Cat5e / Cat6 / Cat6A', 'Схована прокладка', 'Монтаж розеток RJ-45', 'Обварювання патч-кордів'],
  },
  {
    id: 3,
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="4" y="12" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="20" y="4" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="20" y="20" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 16h4M16 16V8h4M16 16v8h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>`,
    title: 'Корпоративні мережі',
    description: 'Проєктування та монтаж локальних мереж для офісів, складів та підприємств. Від 5 до 500+ робочих місць.',
    features: ['Комутатори Cisco / MikroTik', 'VLAN та ACL', 'Структурована кабельна система', 'Документація та схеми'],
  },
  {
    id: 4,
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M16 6v2M16 24v2M6 16h2M24 16h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      <path d="M16 16l-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="16" cy="16" r="2" fill="currentColor"/>
    </svg>`,
    title: 'Інтернет-підключення',
    description: 'Підключення до провайдерів, налаштування PPPoE/DHCP, усунення проблем із підключенням та швидкістю.',
    features: ['PPPoE / IPoE / DHCP', 'Діагностика швидкості', 'Резервні канали', 'Wi-Fi 6 / Wi-Fi 6E'],
  },
  {
    id: 5,
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 4L28 10v6c0 6-5 11-12 14C9 27 4 22 4 16v-6L16 4z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M11 16l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>`,
    title: 'Безпека мережі',
    description: 'Захист мережевої інфраструктури: фаєрвол, VPN, фільтрація трафіку, аудит безпеки та усунення вразливостей.',
    features: ['OpenVPN / WireGuard', 'Firewall-правила', 'Аудит мережі', 'IDS/IPS системи'],
  },
  {
    id: 6,
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M8 20a8 8 0 1116 0" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M12 20a4 4 0 018 0" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <circle cx="16" cy="20" r="1.5" fill="currentColor"/>
      <path d="M6 24h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
    </svg>`,
    title: 'Wi-Fi аудит та оптимізація',
    description: 'Аналіз покриття та якості сигналу, усунення мертвих зон, налаштування mesh-систем та точок доступу.',
    features: ['Heat-map покриття', 'Усунення мертвих зон', 'Mesh і Roaming', 'QoS налаштування'],
  },
];

const Services: React.FC = () => (
  <section className="nf-services section-py nf-grid-bg" id="services">
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-7">
          <div className="section-tag">Що ми робимо</div>
          <h2 className="section-title">Наші <span>послуги</span></h2>
          <p className="nf-services__lead">
            Повний цикл мережевих рішень — від аналізу до монтажу та підтримки.
            Один дзвінок вирішує всі ваші проблеми з&nbsp;інтернетом.
          </p>
        </div>
      </div>

      <div className="row g-4">
        {SERVICES.map((svc, i) => (
          <div key={svc.id} className="col-md-6 col-xl-4">
            <div
              className="nf-card nf-service-card anim-fade-up"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div
                className="nf-service-card__icon"
                dangerouslySetInnerHTML={{ __html: svc.icon }}
              />
              <h3 className="nf-service-card__title">{svc.title}</h3>
              <p className="nf-service-card__desc">{svc.description}</p>
              <ul className="nf-service-card__features">
                {svc.features.map((f) => (
                  <li key={f}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
