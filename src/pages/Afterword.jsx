export default function Afterword({ num }) {
  return (
    <>
      <div className="page-header">
        <span className="page-num">{num}</span>
        <h2 className="page-title">AFTERWORD</h2>
      </div>

      <div className="afterword-body">
        <div className="afterword-emblem">
          <div className="emblem-ring ring-sm-1" />
          <div className="emblem-ring ring-sm-2" />
          <div className="emblem-ring ring-sm-3" />
          <div className="emblem-core-sm">GNS</div>
        </div>

        <div className="afterword-text">
          <p>
            The continued survival of the Colonial Fleet depends not only on military
            strength, but also on the integrity of its systems. As technology becomes
            increasingly central to fleet operations, the risks associated with network
            compromise grow accordingly. This manual establishes a structured approach
            to managing those risks. However, its effectiveness depends on the discipline
            and consistency of the personnel who use it.
          </p>
          <p>
            Procedures must be followed exactly, and irregularities must be taken
            seriously, regardless of how minor they may appear. There is no margin for
            error in a compromised environment. A single oversight can result in
            widespread system failure and jeopardize fleet operations.
          </p>
          <p>
            By maintaining vigilance, following established protocols, and acting
            decisively when threats arise, personnel can ensure that fleet systems
            remain secure, functional, and reliable in the face of ongoing threats.
          </p>
          <div className="afterword-sig">
            <div className="sig-line">— Galactica Network Security Team</div>
            <div className="sig-line">Paul Davis</div>
            <div className="sig-tag">GNS-FSD-001 // END OF DOCUMENT</div>
          </div>
        </div>
      </div>

      <div className="doc-footer">
        <div className="footer-line">
          DOCUMENT: GNS-FSD-001 &nbsp;|&nbsp; CLASSIFICATION: RESTRICTED &nbsp;|&nbsp; COLONIAL FLEET — ALL RIGHTS RESERVED
        </div>
      </div>
    </>
  );
}
