const ANNOTATIONS = [
  {
    num: '01',
    title: 'DETECT',
    body: 'Suspicious system activity is detected. Ask: is the behavior abnormal or unexpected? If no, proceed with normal operation, no action required.',
  },
  {
    num: '02',
    title: 'VERIFY',
    body: 'If yes, perform basic verification. Then ask: is the issue still unexplained? If no, there\'s no threat detected, no action required.',
  },
  {
    num: '03',
    title: 'DISCONNECT',
    body: 'If the issue remains unexplained, disconnect the system from the network. Then confirm: is the system successfully isolated?',
  },
  {
    num: '04',
    title: 'ISOLATE OR ESCALATE',
    body: 'If isolated, cease all use of the affected system. If not isolated, restrict access and notify command immediately.',
  },
  {
    num: '05',
    title: 'REPORT',
    body: 'Report to the chain of command and the Network Security Team. Were credentials used on the compromised system?',
  },
  {
    num: '06',
    title: 'CREDENTIAL CHECK',
    body: 'If yes, reset credentials immediately, then await further instruction. If no, await further instruction. End state: system contained and secured for investigation.',
  },
];

export default function FlowchartInfographic({ num }) {
  return (
    <>
      <div className="page-header">
        <span className="page-num">{num}</span>
        <h2 className="page-title">FLOWCHART</h2>
      </div>

      <p className="section-intro">
        This flowchart guides Galactica network security personnel through the steps to take when suspicious system activity is detected. Following a series of diagnostic checks, it directs teams toward isolation, command notification, and credential security.
      </p>

      <div className="visual-with-annotations">
        {/* ── FLOWCHART IMAGE ── */}
        <div className="visual-section">
          <div className="visual-label">
            <span className="vis-tag">FIG. 01</span>
            Incident Response Decision Flowchart
          </div>
          <div className="img-slot flowchart-slot">
            <img
              src="/informationChart.jpg"
              alt="Incident Response Flowchart"
              className="slot-img"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <p className="visual-caption">
            Figure 1: Step-by-step decision tree for responding to a suspected network
            compromise. Follow top to bottom when anomalous system behavior is detected.
          </p>
        </div>

        {/* ── ANNOTATION PANEL ── */}
        <div className="annotation-panel">
          <div className="annot-header">
            <span className="vis-tag">GUIDE</span>
            How to read this chart
          </div>
          <ol className="annot-steps">
            {ANNOTATIONS.map(({ num, title, body }) => (
              <li key={num} className="annot-step">
                <span className="annot-num">{num}</span>
                <div className="annot-body">
                  <h4 className="annot-title">{title}</h4>
                  <p>{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
