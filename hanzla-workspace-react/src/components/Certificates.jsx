import { useSite } from "../store";
import { fixUrl } from "../util";

export default function Certificates() {
  const { certificates } = useSite();
  if (!certificates.length) return null;
  return (
    <section id="certificates" className="soft">
      <div className="w">
        <div className="hd">
          <span className="eb">Credentials</span>
          <h2>
            Certificates & <em>achievements</em>
          </h2>
          <p>Verified training and certifications behind the work.</p>
        </div>
        <div className="certs">
          {certificates.map((c) => {
            const href = fixUrl(c.link_url);
            return (
              <article className="cert" key={c.id}>
                {c.image_url && (
                  <div className="cimg">
                    <img src={c.image_url} alt={c.title} loading="lazy" />
                  </div>
                )}
                <div className="cbody">
                  {(c.issuer || c.issue_date) && (
                    <small>{[c.issuer, c.issue_date].filter(Boolean).join(" · ")}</small>
                  )}
                  <h3>{c.title}</h3>
                  {c.description && <p>{c.description}</p>}
                  {c.credential_id && <span className="mc">ID: {c.credential_id}</span>}
                  {href && (
                    <div>
                      <a className="lnk" href={href} target="_blank" rel="noopener noreferrer">
                        {c.link_label || "View certificate"}
                      </a>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
