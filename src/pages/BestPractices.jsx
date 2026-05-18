const CARDS = [
  {
    icon: '[KEY]',
    title: 'Credential Management',
    items: [
      'Never share login credentials under any circumstance',
      'Change passwords at regular intervals as directed by the Security Team',
      'Use unique credentials for each system you access',
      'Report lost or suspected compromised credentials immediately',
    ],
  },
  {
    icon: '[NET]',
    title: 'Network Hygiene',
    items: [
      'Never connect unauthorized devices to fleet networks',
      'Ensure all systems are running approved and updated software',
      'Disable unused ports and services on all managed systems',
      'Confirm network segmentation is active before any maintenance',
    ],
  },
  {
    icon: '[COM]',
    title: 'Communication Security',
    items: [
      'Only use approved, encrypted communication channels',
      'Verify the identity of any person requesting system access',
      'Do not transmit sensitive data over unverified channels',
      'Report any requests that seem to bypass standard protocol',
    ],
  },
  {
    icon: '[LOG]',
    title: 'Routine Monitoring',
    items: [
      'Review system logs at the start and end of every shift',
      'Document and report any anomalies immediately',
      'Participate in scheduled security drills and protocol reviews',
      'Escalate unresolved anomalies to the Security Team',
    ],
  },
  {
    icon: '[PHY]',
    title: 'Physical Security',
    items: [
      'Never leave a workstation logged in and unattended',
      'Ensure access to server rooms and terminals requires clearance',
      'Report unauthorized personnel in restricted areas',
      'Lock terminals when stepping away, even briefly',
    ],
  },
  {
    icon: '[SIT]',
    title: 'Situational Awareness',
    items: [
      'Stay informed of current threat advisories from the Security Team',
      'Report anything that seems unusual or out of place',
      'Do not assume a threat is handled until formally cleared',
      'Maintain awareness of who has access to systems around you',
    ],
  },
];

export default function BestPractices({ num }) {
  return (
    <>
      <div className="page-header">
        <span className="page-num">{num}</span>
        <h2 className="page-title">BEST PRACTICES</h2>
      </div>

      <p className="section-intro">
        Preventing network compromise is more effective than responding after a breach
        occurs. All personnel interacting with fleet systems are expected to follow basic
        security practices at all times.
      </p>

      <div className="required-practices">
        <h3 className="rp-title">REQUIRED PRACTICES</h3>
        <ul className="rp-list">
          <li><strong>Maintain Secure Access</strong> — Never share access credentials or leave systems unattended while logged in</li>
          <li><strong>Limit System Access</strong> — Only use systems necessary for assigned duties</li>
          <li><strong>Monitor System Behavior</strong> — Remain aware of unusual activity during operation</li>
          <li><strong>Follow Communication Protocols</strong> — Avoid transmitting sensitive information through unsecured channels</li>
          <li><strong>Report Irregularities Immediately</strong> — Do not ignore or delay reporting suspicious behavior</li>
        </ul>
      </div>

      <div className="best-practices-grid">
        {CARDS.map(({ icon, title, items }) => (
          <div key={title} className="bp-card">
            <div className="bp-icon">{icon}</div>
            <h3>{title}</h3>
            <ul>
              {items.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="op-reminder">
        <span className="op-reminder-label">OPERATIONAL REMINDER</span>
        <p>
          Security is a shared responsibility. Even minor lapses in protocol can create
          vulnerabilities that affect the entire fleet.
        </p>
      </div>
    </>
  );
}
