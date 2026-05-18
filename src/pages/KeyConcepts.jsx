const TERMS = [
  {
    tag: 'NET-SEG',
    term: 'Network Segmentation',
    def: 'Dividing a network into isolated sections so that intrusions in one area cannot spread to other systems.',
  },
  {
    tag: 'SEC-ACC',
    term: 'Secure Access',
    def: 'The process of verifying identity before allowing someone to use a system, typically through passwords, access codes, or clearance levels.',
  },
  {
    tag: 'COMP-SYS',
    term: 'Compromised System',
    def: 'Any device that has been accessed, altered, or controlled by an unauthorized user.',
  },
  {
    tag: 'INC-RES',
    term: 'Incident Response',
    def: 'The actions taken after a security issue is detected, including isolating vulnerable systems, reporting the issue, and restoring normal operations.',
  },
  {
    tag: 'FSI',
    term: 'Fail-Safe Isolation',
    def: 'A system feature that automatically shuts down critical components when a threat is detected to prevent further damage.',
  },
  {
    tag: 'COM-DIS',
    term: 'Communication Discipline',
    def: 'The practice of following strict rules when sending or receiving information.',
  },

  {
    tag: '[PLACEHOLDER]',
    term: 'Additional Term — To Be Added',
    def: 'This entry is reserved for additional key concepts to be defined by the Network Security Team. Update this section as new terminology is adopted in fleet operations.',
  },
];

export default function KeyConcepts({ num }) {
  return (
    <>
      <div className="page-header">
        <span className="page-num">{num}</span>
        <h2 className="page-title">KEY CONCEPTS</h2>
      </div>

      <p className="section-intro">
       The following terms define core concepts necessary for understanding fleet network security procedures. Familiarity with these terms is required before engaging with any security procedure or incident response.
      </p>

      <div className="glossary">
        {TERMS.map(({ tag, term, def }) => (
          <div key={tag} className={`gloss-entry${tag === '[PLACEHOLDER]' ? ' gloss-placeholder' : ''}`}>
            <div className="gloss-term">
              <span className={`gloss-tag${tag === '[PLACEHOLDER]' ? ' tag-placeholder' : ''}`}>{tag}</span>
              {term}
            </div>
            <p className="gloss-def">{def}</p>
          </div>
        ))}
      </div>
    </>
  );
}
