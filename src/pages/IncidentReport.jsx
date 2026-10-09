const STRATEGIES = [
  {
    cls: 'strat-red',
    icon: '[X]',
    title: 'Full System Shutdown',
    body: 'Every terminal and connected system is taken offline until a manual inspection clears them. While this eliminates all pathways for the threat to spread, it also means navigation, communications, and defense go dark simultaneously.',
    adv: ['Maximizes containment of the threat', 'Prevents further spread'],
    dis: ['Disables critical systems such as navigation, communication, and defense', 'Reduces the fleet\'s ability to respond to external threats'],
    verdict: 'NOT RECOMMENDED',
    vCls: 'verdict-no',
  },
  {
    cls: 'strat-yellow',
    icon: '[~]',
    title: 'Continued Operation with Monitoring',
    body: 'The security team observes network activity and attempts to trace and neutralize the threat without taking anything offline. This option preserves full capability in the short term, but assumes the team can detect and respond faster than the threat can spread. It is only viable when the threat confidence is very low and operational stakes are exceptionally high.',
    adv: ['Maintains full operational capability', 'Minimizes immediate disruption'],
    dis: ['High risk of threat escalation', 'Increased likelihood of widespread system compromise'],
    verdict: 'USE WITH CAUTION',
    vCls: 'verdict-caution',
  },
  {
    cls: 'strat-green',
    icon: '[OK]',
    title: 'Isolation of Affected Systems',
    body: 'Compromised terminals are physically disconnected, and their functions are transferred manually or to backup systems where possible. This mirrors the broader air-gap philosophy already in use: if one compartment is compromised, you seal it. This approach is also the most relevant if the fleet ever establishes a temporary connection for a specific mission, as isolation protocols can be pre-planned before the connection is made.',
    adv: ['Contains the threat without disabling the entire network', 'Maintains critical system operations'],
    dis: ['Requires accurate identification of compromised systems', 'May allow exposure if isolation is incomplete'],
    verdict: 'RECOMMENDED',
    vCls: 'verdict-yes',
  },
];

export default function IncidentReport({ num }) {
  return (
    <>
      <div className="page-header">
        <span className="page-num">{num}</span>
        <h2 className="page-title">INCIDENT REPORT</h2>
      </div>

      <div className="terminal-block">
        <div className="terminal-titlebar">
          <span className="t-dot-bar">{'// SYS'}</span>
          <span className="t-label">INCIDENT_REPORT.log</span>
        </div>
        <div className="terminal-body">
          <p className="terminal-line"><span className="prompt">$</span> cat INCIDENT_REPORT.log</p>
          <p className="terminal-output">SUBJECT: Suspected Network Compromise — Response Strategy Evaluation</p>
          <p className="terminal-output">DATE: [REDACTED] | CLASSIFICATION: RESTRICTED</p>
        </div>
      </div>

      <div className="report-section">
        <h3 className="report-heading">Introduction</h3>
        <p>
         This report addresses how the fleet should respond to a suspected network compromise. As fleet operations increasingly rely on computer networks, the risk of a system-wide breach presents a threat to both operational stability and survival. In an environment where Cylons have gained advanced technological capabilities, even a small bug could lead to catastrophic consequences. The purpose of this report is to evaluate possible response strategies in the event of a suspected compromise and to recommend a plan that balances security with operational functionality. Considering the slim margin of error, it is essential that the fleet adopts a structured and disciplined approach to network threats. Specifically, this report concerns attacks targeting shipboard intranet systems, those being the limited internal networks that individual ships maintain for communication, navigation, and tactical coordination. It also considers scenarios in which temporary intership connections may be established for specific, high-value operational goals, and the heightened risk such connections introduce.
        </p>
      </div>

      <div className="report-section">
        <h3 className="report-heading">The Problem</h3>
        <p>
          Fleet systems are interconnected to support communication, navigation, and
          tactical operations. While this connectivity proves useful, it also creates
          vulnerabilities. A compromise in one system could spread to others if not
          contained. Inappropriate responses to these threats may allow them to escalate,
          potentially resulting in total system failure. Given these conditions, the fleet
          must respond quickly to any indication of compromise. However, the response must
          also consider the need to maintain critical operations.
        </p>
        <div className="decision-criteria">
          <span className="dc-label">DECISION CRITERIA</span>
          <ul className="dc-list">
            <li><strong>System Security</strong> — The ability to prevent or contain the spread of a threat</li>
            <li><strong>Fleet Functionality</strong> — The extent to which the fleet could continue functioning</li>
            <li><strong>Speed of Response</strong> — How quickly the strategy can be implemented</li>
            <li><strong>Risk of Escalation</strong> — The chance that the threat will worsen under the chosen response</li>
          </ul>
        </div>
      </div>

      <div className="report-section">
        <h3 className="report-heading">Strategy Evaluation</h3>
        <p>
          The fleet has three primary strategies available when responding to network
          attacks. Each presents distinct trade-offs between security, capability, and
          operational risk.
        </p>
        <div className="strategy-compare">
          {STRATEGIES.map(({ cls, icon, title, body, adv, dis, verdict, vCls }) => (
            <div key={title} className="strategy-item">
              <div className={`strategy-header ${cls}`}>
                <span className="strat-icon">{icon}</span>
                <h4>{title}</h4>
              </div>
              <p>{body}</p>
              <div className="strat-pros-cons">
                <div className="strat-pros">
                  <span className="pros-label">ADVANTAGES</span>
                  <ul>{adv.map(a => <li key={a}>{a}</li>)}</ul>
                </div>
                <div className="strat-cons">
                  <span className="cons-label">DISADVANTAGES</span>
                  <ul>{dis.map(d => <li key={d}>{d}</li>)}</ul>
                </div>
              </div>
              <div className={`strat-verdict ${vCls}`}>{verdict}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="report-section">
        <h3 className="report-heading">Summary &amp; Recommendation</h3>
        <p>
          This report recommends adopting an <strong>isolation strategy</strong> as the
          standard response protocol. This approach aligns with established security
          procedures while preserving critical operational functions. Isolation allows the
          Network Security Team to investigate, contain, and resolve threats without
          rendering the fleet inoperable during a crisis.
        
          Commander Adama's instinct to keep systems disconnected has been the fleet's
          strongest defense. Isolation is not a departure from that doctrine, but is the
          disciplined application of it. Rather than waiting for a full shutdown to become
          necessary, a standing isolation protocol allows the fleet to respond, containing
          threats before they can force a choice between security and survival.
        </p>
      </div>

      <div className="report-section">
        <h3 className="report-heading">Conclusion</h3>
        <p>
          The threat of network compromise presents a serious risk to the fleet's survival.
          While no response strategy is perfect, isolation offers the most effective
          approach. It allows the fleet to maintain essential operations while limiting
          the spread of potential threats. Adopting this strategy as the standard protocol
          will improve response consistency, reduce risk, and ensure system security.
          Given our high-risk environment, disciplined responses are essential to ensuring
          the continued survival of the fleet.
        </p>
      </div>
    </>
  );
}
