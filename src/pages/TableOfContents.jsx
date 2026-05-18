export default function TableOfContents({ onNavClick }) {
  const entries = [
    { id: 'mission',    num: '03', name: 'Mission Statement',              desc: 'Team purpose, audience, and scope' },
    { id: 'conduct',    num: '04', name: 'Code of Conduct',                desc: 'Personnel responsibilities and operating principles' },
    { id: 'intro',      num: '05', name: 'Introduction',                   desc: 'Purpose, scope, and how to use this manual' },
    { id: 'concepts',   num: '06', name: 'Key Concepts',                   desc: 'Definitions of core security terminology' },
    { id: 'threats',    num: '07', name: 'Threat Identification',           desc: 'Recognizing active and passive network threats' },
    { id: 'procedure',  num: '08', name: 'Core Procedure',                 desc: 'Responding to a suspected network compromise' },
    { id: 'flowchart',  num: '09', name: 'Flowchart',         desc: 'Visual decision tree' },
    { id: 'report',     num: '10', name: 'Incident Report',     desc: 'Response strategy evaluation' },
    { id: 'prevention', num: '11', name: 'Best Practices',    desc: 'Proactive security measures for all personnel' },
    { id: 'emergency',  num: '12', name: 'Emergency Protocols',            desc: 'Active crisis response procedures' },
    { id: 'afterword',  num: '13', name: 'Afterword',                      desc: 'Closing notes from the Security Team' },
  ];

  return (
    <>
      <div className="page-header">
        <span className="page-num">02</span>
        <h2 className="page-title">TABLE OF CONTENTS</h2>
      </div>

      <div className="toc-grid">
        {entries.map(({ id, num, name, desc }) => (
          <button
            key={id}
            className="toc-entry"
            onClick={() => onNavClick(id)}
          >
            <span className="toc-num">{num}</span>
            <div className="toc-info">
              <span className="toc-name">{name}</span>
              <span className="toc-desc">{desc}</span>
            </div>
            <span className="toc-arrow">→</span>
          </button>
        ))}
      </div>
    </>
  );
}
