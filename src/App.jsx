import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MatrixRain from './components/MatrixRain';
import Cover from './pages/Cover';
import TableOfContents from './pages/TableOfContents';
import MissionStatement from './pages/MissionStatement';
import CodeOfConduct from './pages/CodeOfConduct';
import Introduction from './pages/Introduction';
import KeyConcepts from './pages/KeyConcepts';
import ThreatIdentification from './pages/ThreatIdentification';
import CoreProcedure from './pages/CoreProcedure';
import FlowchartInfographic from './pages/FlowchartInfographic';
import IncidentReport from './pages/IncidentReport';
import BestPractices from './pages/BestPractices';
import EmergencyProtocols from './pages/EmergencyProtocols';
import Afterword from './pages/Afterword';
import './styles.css';

const SECTIONS = [
  { id: 'cover',      num: '01', label: 'COVER',               Component: Cover },
  { id: 'toc',        num: '02', label: 'TABLE OF CONTENTS',   Component: TableOfContents },
  { id: 'mission',    num: '03', label: 'MISSION STATEMENT',   Component: MissionStatement },
  { id: 'conduct',    num: '04', label: 'CODE OF CONDUCT',     Component: CodeOfConduct },
  { id: 'intro',      num: '05', label: 'INTRODUCTION',        Component: Introduction },
  { id: 'concepts',   num: '06', label: 'KEY CONCEPTS',        Component: KeyConcepts },
  { id: 'threats',    num: '07', label: 'THREAT ID',           Component: ThreatIdentification },
  { id: 'procedure',  num: '08', label: 'CORE PROCEDURE',      Component: CoreProcedure },
  { id: 'flowchart',  num: '09', label: 'FLOWCHART',           Component: FlowchartInfographic },
  { id: 'report',     num: '10', label: 'INCIDENT REPORT',     Component: IncidentReport },
  { id: 'prevention', num: '11', label: 'BEST PRACTICES',      Component: BestPractices },
  { id: 'emergency',  num: '12', label: 'EMERGENCY PROTOCOLS', Component: EmergencyProtocols },
  { id: 'afterword',  num: '13', label: 'AFTERWORD',           Component: Afterword },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('cover');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const observers = SECTIONS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.25 }
      );
      obs.observe(el);
      return obs;
    }).filter(Boolean);
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setSidebarOpen(false);
  };

  return (
    <div className="app">
      <MatrixRain />
      <div className="scanlines" />

      <Sidebar
        sections={SECTIONS}
        activeSection={activeSection}
        onNavClick={handleNavClick}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <button
        className={`menu-toggle${sidebarOpen ? ' is-open' : ''}`}
        onClick={() => setSidebarOpen(o => !o)}
        aria-label="Toggle navigation"
      >
        <span /><span /><span />
      </button>

      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      <main className="main-content">
        {SECTIONS.map(({ id, num, Component }) => (
          <section key={id} id={id} className="page-section">
            <div className="page-inner">
              {id !== 'cover' && (
                <img
                  src={`${process.env.PUBLIC_URL}/logo.png`}
                  alt=""
                  className="page-header-logo"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              )}
              <Component num={num} onNavClick={handleNavClick} />
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
