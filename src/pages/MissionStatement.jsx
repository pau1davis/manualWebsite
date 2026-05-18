export default function MissionStatement({ num }) {
  return (
    <>
      <div className="page-header">
        <span className="page-num">{num}</span>
        <h2 className="page-title">MISSION STATEMENT</h2>
      </div>

      <div className="terminal-block">
        <div className="terminal-titlebar">
          <span className="t-dot red" /><span className="t-dot yellow" /><span className="t-dot green" />
          <span className="t-label">MISSION_DIRECTIVE.log</span>
        </div>
        <div className="terminal-body">
          <p className="terminal-line"><span className="prompt">$</span> cat MISSION_DIRECTIVE.log</p>
          <p className="terminal-output">
            The Galactica Network Security Team is dedicated to protecting the integrity
            of Colonial Fleet computer systems through network security practices,
            technical procedures, and strong system design. Our manual provides guidance
            for personnel responsible for maintaining, operating, or interacting with
            digital infrastructure aboard fleet vessels. <br>
            </br><br>
            </br>

            The manual focuses on the prevention and detection of network vulnerabilities that could threaten operational security. These vulnerabilities include improper system configuration, insecure communication channels, compromised access credentials, and failures in unauthorized network access. In an environment where system compromise could lead to catastrophe, we must implement secure operational practices to guarantee the survival of humanity.
	<br>
            </br><br>
            </br>
  Our approach emphasizes clear procedures, preventative security practices, and structured responses to any network attacks. The manual focuses on core problem categories that directly affect fleet operations. These include secure system access, network isolation, incident procedures, and communication discipline.
	

          </p>
        </div>
      </div>

      <div className="info-cards">
        <div className="info-card">
         
          <h3 className="card-title">PRIMARY AUDIENCE</h3>
          <p>Fleet technicians, communications officers, and junior system administrators who manage shipboard networks.</p>
        </div>
        <div className="info-card">
          
          <h3 className="card-title">SECONDARY AUDIENCE</h3>
          <p>Command personnel and general crew members who must follow security protocols when interacting with digital systems.</p>
        </div>
        <div className="info-card">
          
          <h3 className="card-title">SCOPE</h3>
          <p>Prevention and detection of network vulnerabilities. Those being improper configuration, insecure channels, compromised credentials, and unauthorized access.</p>
        </div>
      </div>

      <div className="blockquote-box">
        <div className="bq-bar" />
        <p>
          Through clear documentation and standardized practices, the Galactica Network
          Security Team aims to ensure that all personnel interacting with digital systems
          understand their role in maintaining network security. By prioritizing consistent
          and reliable responses to network crisis, this manual supports the fleet's broader
          mission of survival and strategic coordination.
        </p>
      </div>
    </>
  );
}
