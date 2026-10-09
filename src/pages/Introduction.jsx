export default function Introduction({ num }) {
  return (
    <>
      <div className="page-header">
        <span className="page-num">{num}</span>
        <h2 className="page-title">INTRODUCTION</h2>
      </div>

      <p className="section-intro">
        Modern fleet operations depend on interconnected computer systems that support communication, navigation, and tactical coordination. While these systems improve efficiency, they also introduce vulnerabilities that can be exploited by hostile forces. In a post-attack environment, where adversaries such as the Cylons have demonstrated advanced technological capabilities, maintaining network security is essential to fleet survival.
      </p>
      <p className="section-intro">
        This manual provides standardized procedures and guidelines for identifying, preventing, and responding to network threats. It is intended to support personnel responsible for interacting with fleet systems by offering clear instructions and practical protocols.
      </p>

     

      <div className="terminal-block">
        <div className="terminal-titlebar">
          <span className="t-dot-bar">{'// SYS'}</span>
          <span className="t-label">SCOPE_OF_MANUAL.log</span>
        </div>
        <div className="terminal-body">
          <p className="terminal-line"><span className="prompt">$</span> cat SCOPE_OF_MANUAL.log</p>
          <p className="terminal-output">FOCUS AREAS: Secure system access // Network isolation // Incident response // Communication discipline</p>
          <p className="terminal-output">APPROACH: Preventative security practices + structured crisis response</p>
          <p className="terminal-output">REQUIREMENT: All personnel interacting with digital systems must be familiar with this manual.</p>
        </div>
      </div>

      <div className="objectives-section">
        <h3 className="subsection-title">CORE OBJECTIVES</h3>
        <ul className="objectives-list">
          <li>Preventing unauthorized access and system compromise</li>
          <li>Identifying potential threats early</li>
          <li>Responding quickly and effectively to contain damage</li>
        </ul>
        <p className="section-intro" style={{ marginTop: '1rem', marginBottom: 0 }}>
          By following these procedures, personnel can reduce the risk of system-wide
          failure and ensure that critical operations remain functional during
          high-risk situations.
        </p>
      </div>

      <div className="info-cards" style={{ marginTop: '2rem' }}>
        <div className="info-card">
          <div className="card-icon">[!]</div>
          <h3 className="card-title">WHY THIS MATTERS</h3>
          <p>System compromise is not an abstract risk. It is an active, ongoing threat that has cost the fleet lives. These procedures exist because lives depend on them.</p>
        </div>
        <div className="info-card">
          <div className="card-icon">[?]</div>
          <h3 className="card-title">HOW TO USE THIS MANUAL</h3>
          <p>Read the Key Concepts section before any procedure. Reference the Core Procedure under active threat. Use Best Practices daily. Emergency Protocols are for immediate crisis response.</p>
        </div>
        <div className="info-card">
          <div className="card-icon">[~]</div>
          <h3 className="card-title">LIVING DOCUMENT</h3>
          <p>This manual is updated as new threat patterns emerge. Personnel are expected to review revised sections whenever the Security Team issues an update.</p>
        </div>
      </div>
    </>
  );
}
