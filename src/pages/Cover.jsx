import { useEffect, useState } from 'react';

const FULL = 'FLEET SYSTEM DEFENSE MANUAL';

export default function Cover() {
  const [typed, setTyped] = useState('');
  const [done, setDone]   = useState(false);
  const [logoOk, setLogoOk] = useState(false);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(FULL.slice(0, i));
      if (i >= FULL.length) { setDone(true); clearInterval(id); }
    }, 55);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="cover-page">
      <div className="cover-top-bar">
        <span>DOCUMENT REF: GNS-FSD-001</span>
        <span>CLASSIFICATION: RESTRICTED</span>
        <span>REV: 1.0</span>
      </div>

      {/* ── LOGO SLOT ── drop your PNG as public/logo.png to activate */}
      <div className="cover-logo-slot">
        <img
          src="/logo.png"
          alt="Team Logo"
          className="cover-logo-img"
          onLoad={() => setLogoOk(true)}
          onError={(e) => { e.target.style.display = 'none'; setLogoOk(false); }}
          style={{ display: logoOk ? 'block' : 'none' }}
        />
        {!logoOk && (
          <div className="cover-logo-placeholder" style={{ border: '1px dashed rgba(0,230,118,0.3)', borderRadius: 8, width: '100%', height: '100%' }}>
            <span className="logo-ph-icon">[LOGO]</span>
            <span className="logo-ph-text">INSERT LOGO</span>
            <span className="logo-ph-sub">Place logo.png in manualWebsite/public/</span>
          </div>
        )}
      </div>

      <div className="cover-emblem">
        <div className="emblem-ring ring-1" />
        <div className="emblem-ring ring-2" />
        <div className="emblem-ring ring-3" />
        <div className="emblem-core">GNS</div>
      </div>

      <h1 className="cover-title">
        {typed}
        {!done && <span className="cursor">█</span>}
      </h1>

      <div className="cover-divider" />
      <p className="cover-team">GALACTICA NETWORK SECURITY TEAM</p>
      <p className="cover-subtitle">Protocols for System Protection and Threat Response</p>

      <div className="cover-meta">
        <div className="meta-row">
          <span className="meta-label">AUTHOR</span>
          <span className="meta-value">Paul Davis</span>
        </div>
        <div className="meta-row">
          <span className="meta-label">ORGANIZATION</span>
          <span className="meta-value">Galactica Network Security Team</span>
        </div>
        <div className="meta-row">
          <span className="meta-label">STATUS</span>
          <span className="meta-value status-active">● ACTIVE DEPLOYMENT</span>
        </div>
      </div>

      <div className="cover-warning">
        ⚠ UNAUTHORIZED ACCESS TO COLONIAL FLEET SYSTEMS IS A VIOLATION OF FLEET SECURITY DIRECTIVE 7-ALPHA ⚠
      </div>

      <div className="scroll-hint">SCROLL OR USE NAVIGATION ▼</div>
    </div>
  );
}
