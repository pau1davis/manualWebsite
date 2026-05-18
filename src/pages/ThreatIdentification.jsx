const THREATS = [
  {
    level: 'level-critical',
    badge: 'CRITICAL',
    title: 'Unauthorized System Access',
    body: 'Attempts by unverified personnel to access restricted systems. Indicators include failed login sequences, unexpected access at unusual hours, and unfamiliar device signatures on the network.',
    indicators: ['Failed logins', 'Unknown devices', 'Off-hours access'],
  },
  {
    level: 'level-high',
    badge: 'HIGH',
    title: 'Compromised Credentials',
    body: 'Personnel credentials that have been stolen, shared, or exposed. These allow an attacker to move through the system as an authorized user, making detection significantly more difficult.',
    indicators: ['Shared passwords', 'Unusual user behavior', 'Duplicate sessions'],
  },
  {
    level: 'level-high',
    badge: 'HIGH',
    title: 'Insecure Communication Channels',
    body: 'Improperly secured communication links that expose data in transit. Fleet communications that bypass standard encryption protocols are considered active vulnerabilities.',
    indicators: ['Unencrypted traffic', 'Rogue relay signals', 'Protocol bypasses'],
  },
  {
    level: 'level-moderate',
    badge: 'MODERATE',
    title: 'Improper System Configuration',
    body: 'Systems configured with excessive permissions, unnecessary open ports, or outdated software create exploitable entry points. These vulnerabilities are often present before any active attack begins.',
    indicators: ['Open ports', 'Excess permissions', 'Outdated software'],
  },
  {
    level: 'level-moderate',
    badge: 'MODERATE',
    title: 'Lateral Network Spread',
    body: 'An attacker who gains access to one system may attempt to move across an unsegmented network. Without proper isolation, a single compromised node can lead to fleet-wide system failure.',
    indicators: ['Cross-segment traffic', 'Unusual data transfers', 'Cascading failures'],
  },
  {
    level: 'level-low',
    badge: 'MONITOR',
    title: 'Social Engineering',
    body: 'Manipulation of personnel to disclose credentials or bypass security procedures. Crew members may be deceived through false authority, urgency, or impersonation of trusted personnel.',
    indicators: ['Unusual requests', 'Unverified identity', 'Pressure to bypass protocol'],
  },
];

export default function ThreatIdentification({ num }) {
  return (
    <>
      <div className="page-header">
        <span className="page-num">{num}</span>
        <h2 className="page-title">THREAT IDENTIFICATION</h2>
      </div>

      <p className="section-intro">
        All personnel must be capable of recognizing the signs of a network compromise.
        The following categories represent the primary threat vectors identified by the
        Galactica Network Security Team.
      </p>

      <div className="threat-overview">
        <p>
          Early identification of a network threat is critical to preventing widespread
          system compromise. Personnel should remain alert to signs of abnormal system
          behavior and report any irregularities immediately.
        </p>
        <div className="indicators-block">
          <h3 className="indicators-title">COMMON INDICATORS OF COMPROMISE</h3>
          <ul className="indicators-list">
            <li>Unexpected system slowdowns or delays</li>
            <li>Unauthorized access attempts or login activity</li>
            <li>Unfamiliar commands or processes running on a system</li>
            <li>Loss of control over a terminal or device</li>
            <li>Unusual data transmissions or communication patterns</li>
          </ul>
        </div>
        <div className="key-considerations">
          <span className="kc-label">KEY CONSIDERATIONS</span>
          <p>
            Not all irregular behavior indicates a threat. However, any activity that
            cannot be clearly explained through normal system operations should be treated
            as a potential risk. Personnel are not expected to diagnose technical issues.
            Their responsibility is to recognize abnormal behavior and initiate response
            procedures.
          </p>
        </div>
      </div>

      <div className="threat-grid">
        {THREATS.map(({ level, badge, title, body, indicators }) => (
          <div key={title} className={`threat-card ${level}`}>
            <div className="threat-header">
              <span className="threat-level-badge">{badge}</span>
              <h3>{title}</h3>
            </div>
            <p>{body}</p>
            <div className="threat-indicators">
              {indicators.map(ind => (
                <span key={ind} className="indicator">{ind}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
