export default function Bio() {
  return (
    <>
      <div className="row header"></div>
      <div className="row section">
        <div className="seven columns contacts">
          <div className="row">
            <h4>Fedor Golishevskii</h4>
          </div>
          <p>
            <a href="mailto:fed0000r@gmail.com">fed0000r@gmail.com</a>
            <br />
            <a href="tel:+31643535432">+31(64)35-35-432</a> <br />
            Software Engineer (6y+)
            <br />
            {/* <span style={{whiteSpace: 'nowrap'}}>I've been doing IT for years send help</span> */}
          </p>
          <div className="row link-icons">
            <a href="https://t.me/aurabirb">
              <i className="fa fa-telegram fa-xs"></i>
            </a>
            <a href="https://www.linkedin.com/in/golishevskii/">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/aurabirb">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
        <div className="five columns">
          <div className="avatar">
            <img
              alt="avatar"
              title=""
              src="/zaney-aura.jpg"
            />
          </div>
        </div>
      </div>
      <div className="row section">
        <div className="six columns">
          <h4>Areas of expertise</h4>
          <ul className="nobullets">
            <li title="Don't judge it by this site; I've started it when Bootstrap was popular and never had a reason to update it.">
              <code>Frontend development</code>
              <code>IDP</code>
            </li>
            <li>
              <code>Tooling</code>
              <code>DevOps</code>
              <code>SRE</code>
              <code>IaC</code>
              <code title="that's a cloud" style={{ fontFamily: "emoji" }}>
                ☁️
              </code>
            </li>
            <li>
              <code>Observability</code>
              <code>Microservices</code>
            </li>
            <li>
              <code>Software architecture</code>
            </li>
          </ul>
        </div>
        <div className="six columns">
          <h4>Technologies</h4>
          <ul className="nobullets">
            <li>
              <code>aws</code>
              <code>react</code>
              <code>ts</code>
              <code>backstage</code>
              <code>go</code>
              <code>k8s</code>
            </li>
            {/* </ul>
          <ul className="nobullets"> */}
            <li>
              <code>bash</code>
              <code>terraform</code>
              <code>airflow</code>
              <code>ansible</code>
              <code>ci/cd</code>
            </li>
            <li>
              <code>grafana</code>
              <code>loki</code>
              <code>prometheus</code>
              <code>tracing</code>
              <code>python</code>
            </li>
            <li>
              <code>nginx</code>
              <code>websockets</code>
              <code>grpc</code>
              <code>graphql</code>
              <code>c++</code>
            </li>
            <li>
              <code>mongo</code>
              <code>docker</code>
              <code>consul</code>
              <code>vault</code>
              <code>...</code>
            </li>
          </ul>
        </div>
      </div>
      <div className="row section">
        <div className="six columns">
          <h4>Education</h4>
          <ul>
            <li>2015 MSc Biochemistry</li>
            <li>Languages: en, ru</li>
          </ul>
        </div>
        <div className="six columns">
          <h4>Jobs</h4>
          <ul>
            <li>
              Senior Software Engineer{" "}
              <a href="https://www.reaktor.com/">
                <span className="workplace">@reaktor</span>
              </a>
            </li>
            <li>
              Lead DevOps{" "}
              <a href="https://sberdevices.ru">
                <span className="workplace">@sberDevices</span>
              </a>
            </li>
            <li>
              Full-stack dev{" "}
              <a href="https://biocad.ru">
                <span className="workplace">@biocad</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row section">
        <div className="six columns">
          <h4>Want to learn about</h4>
          <ul className="split">
            <li>Neural networks</li>
            <li>Biocomputing</li>
            <li>Hypervisors</li>
            <li>Niche industries</li>
          </ul>
        </div>
        <div className="six columns">
          <h4 className="captionhack">Want to learn</h4>
          <ul className="split">
            <li>FPGA (Verilog/VHDL)</li>
            <li>Linux driver development</li>
            <li>Zig language</li>
            <li>Haskell :^)</li>
          </ul>
        </div>
      </div>

      <div className="row footer"></div>
    </>
  );
}
