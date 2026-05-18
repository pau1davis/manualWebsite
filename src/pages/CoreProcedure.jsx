const STEPS = [
  {
    n: 'STEP 01',
    title: 'Confirm Suspicious Activity',
    body: 'Verify that the issue is not caused by standard system operations or user error. Do not attempt to troubleshoot beyond basic confirmation.',
    alert: null,
  },
  {
    n: 'STEP 02',
    title: 'Isolate the System',
    body: 'Immediately disconnect the affected device from the network. Disable wireless or wired connections.',
    alert: 'Do not power off the system unless instructed.',
  },
  {
    n: 'STEP 03',
    title: 'Cease All Unnecessary Actions',
    body: 'Stop all activity on the affected system to avoid further compromise or data corruption.',
    alert: null,
  },
  {
    n: 'STEP 04',
    title: 'Report the Incident',
    body: 'Notify your chain of command and the Network Security Team immediately. Provide the location of the system, a description of the issue, and the time the issue was first observed.',
    alert: null,
  },
  {
    n: 'STEP 05',
    title: 'Secure Access Credentials',
    body: 'Do not reuse or share any credentials associated with the affected system. Be prepared to reset access credentials if instructed by the Security Team.',
    alert: null,
  },
  {
    n: 'STEP 06',
    title: 'Await Further Instructions',
    body: 'Do not reconnect the system until cleared by authorized personnel.',
    alert: null,
  },
];

export default function CoreProcedure({ num }) {
  return (
    <>
      <div className="page-header">
        <span className="page-num">{num}</span>
        <h2 className="page-title">CORE PROCEDURE</h2>
      </div>

      <h3 className="subsection-title">RESPONDING TO A SUSPECTED NETWORK COMPROMISE</h3>

      <div className="proc-meta-grid">
        <div className="proc-meta-item">
          <span className="proc-meta-label">PURPOSE</span>
          <p>Outlines the required steps for identifying, containing, and reporting a suspected network compromise. Prompt action is critical to preventing the spread of system-wide threats.</p>
        </div>
        <div className="proc-meta-item">
          <span className="proc-meta-label">AUDIENCE</span>
          <p>Communications officers, technical personnel, and any crew member authorized to access fleet systems.</p>
        </div>
        <div className="proc-meta-item">
          <span className="proc-meta-label">WHEN TO USE</span>
          <p>Use these steps if you observe unusual system behavior, unexpected system commands, or loss of control over a device.</p>
        </div>
      </div>

      <div className="steps-container">
        {STEPS.map(({ n, title, body, alert }, i) => (
          <div key={n} className={`step${i === STEPS.length - 1 ? ' last-step' : ''}`}>
            <div className="step-number">{n}</div>
            <div className="step-content">
              <h3>{title}</h3>
              <p>{body}</p>
              {alert && <p className="text-red" style={{ marginTop: '0.4rem' }}>{alert}</p>}
            </div>
          </div>
        ))}
      </div>

      <div className="end-state-box">
        <div className="es-label">END STATE</div>
        <p>
          The affected system is successfully isolated, reported, and secured, preventing
          further spread of the attack and allowing the Network Security Team to begin
          formal incident response procedures.
        </p>
      </div>
    </>
  );
}
