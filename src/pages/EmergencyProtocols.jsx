

export default function EmergencyProtocols({ num }) {
  return (
    <>
      <div className="page-header">
        <span className="page-num">{num}</span>
        <h2 className="page-title">EMERGENCY PROTOCOLS</h2>
      </div>

     <p className="section-intro">
       This infographic outlines the Galactica Network Security Team's immediate response protocol for a suspected system compromise. It walks personnel through threat recognition, and a three-step response. 
      </p>

      {/* ── EMERGENCY REFERENCE IMAGE + ANNOTATION ── */}
      <div className="visual-with-annotations" style={{ marginBottom: '2.5rem' }}>
        <div className="visual-section">
          <div className="visual-label">
            <span className="vis-tag">FIG. 02</span>
            Network Compromise Reference Poster
          </div>
          <div className="img-slot emergency-slot">
            <img
              src="/emergency-protocols.png"
              alt="Emergency Protocol Reference"
              className="slot-img"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <p className="visual-caption">
            Figure 2: Immediate response reference for a suspected network compromise.
            Display at all active security stations.
          </p>
        </div>

        {/* ── ANNOTATION PANEL ── */}
        <div className="annotation-panel">
          <div className="annot-header">
            <span className="vis-tag">GUIDE</span>
            How to use this poster
          </div>
          <ol className="annot-steps">
            <li className="annot-step">
              <span className="annot-num">01</span>
              <div className="annot-body">
                <h4 className="annot-title">VERIFY</h4>
                <p>Confirm abnormal behavior. This includes unusual system activity, unauthorized access, unexpected commands, or loss of system control. Do not attempt full troubleshooting.</p>
              </div>
            </li>
            <li className="annot-step">
              <span className="annot-num">02</span>
              <div className="annot-body">
                <h4 className="annot-title">ISOLATE</h4>
                <p>Disconnect the system from the network immediately. Do NOT power off the system unless explicitly instructed. This prevents spread while preserving evidence.</p>
              </div>
            </li>
            <li className="annot-step">
              <span className="annot-num">03</span>
              <div className="annot-body">
                <h4 className="annot-title">REPORT</h4>
                <p>Notify the Network Security Team and the chain of command. Provide full system details and a description of the incident.</p>
              </div>
            </li>
            <li className="annot-step">
              <span className="annot-num">04</span>
              <div className="annot-body">
                <h4 className="annot-title">CREDENTIAL CHECK</h4>
                <p>Were credentials used on the compromised system? If yes, reset immediately. If no, continue monitoring and await further instruction from the Security Team.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>

    
    </>
  );
}
