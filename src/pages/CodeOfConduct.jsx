const PRINCIPLES = [
  {
    n: '01',
    title: 'OPERATION INTEGRITY',
    body: 'Personnel must prioritize the stability and functionality of fleet systems before non-essential operational shortcuts. All actions taken on a system should be aligned with established procedures.',
  },
  {
    n: '02',
    title: 'SECURITY ACCOUNTABILITY',
    body: 'Every user is responsible for maintaining the security of our systems. Credentials must not be shared, and any irregularities must be reported and handled.',
  },
  {
    n: '03',
    title: 'CONTROLLED ACCESS',
    body: 'Access to systems must be limited to authorized personnel only. Users must follow all access protocols to prevent exposure or misuse of sensitive information.',
  },
  {
    n: '04',
    title: 'COMMUNICATION DISCIPLINE',
    body: 'Personnel must communicate security incidents clearly through the proper chain of command. Delayed or incomplete reporting may increase the risk of system compromise.',
  },
  {
    n: '05',
    title: 'THREAT AWARENESS',
    body: 'Personnel must always remain alert to potential vulnerabilities. Systems should be routinely monitored, updated, and evaluated to identify risks before they become threats.',
  },
  {
    n: '06',
    title: 'COLLECTIVE RESPONSIBILITY',
    body: 'Network security is not limited to technical staff. Command personnel, communications officers, and crew members all play a role in maintaining secure operations. Personnel contribute by following established protocols, reporting irregular activity immediately, and avoiding unauthorized system access.',
  },
];

export default function CodeOfConduct({ num }) {
  return (
    <>
      <div className="page-header">
        <span className="page-num">{num}</span>
        <h2 className="page-title">CODE OF CONDUCT</h2>
      </div>

      <p className="section-intro">
        Members of the Galactica Network Security Team are responsible for the
        protection of fleet systems. All personnel interacting with digital systems
        are expected to uphold the following principles:
      </p>

      <div className="conduct-list">
        {PRINCIPLES.map(({ n, title, body }) => (
          <div key={n} className="conduct-item">
            <div className="conduct-num">{n}</div>
            <div className="conduct-body">
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="warning-box">
        <span className="warn-icon">[!!]</span>
        <p>
          This code secures the fleet's digital infrastructure. Failure to follow
          puts everyone at risk.
        </p>
      </div>
    </>
  );
}
