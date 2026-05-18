import { useEffect, useState } from 'react';

export default function Sidebar({ sections, activeSection, onNavClick, isOpen, onClose }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () =>
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <nav className={`sidebar${isOpen ? ' is-open' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <span className="logo-bracket">[</span>
          <span className="logo-text">GNS-7</span>
          <span className="logo-bracket">]</span>
        </div>
        <div className="sidebar-subtitle">COLONIAL FLEET SECURE TERMINAL</div>
        <div className="sidebar-status">
          <span className="status-dot" />
          <span>SYSTEM ONLINE</span>
        </div>
      </div>

      <ul className="nav-list">
        {sections.map(({ id, num, label }) => (
          <li key={id}>
            <button
              className={`nav-item${activeSection === id ? ' active' : ''}`}
              onClick={() => onNavClick(id)}
            >
              <span className="nav-arrow">▶</span>
              <span className="nav-num">{num}</span>
              <span className="nav-label">{label}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="sidebar-footer">
        <div>CLEARANCE: AUTHORIZED</div>
        <div>CLASS: RESTRICTED</div>
        <div className="sidebar-clock">{time}</div>
      </div>
    </nav>
  );
}
