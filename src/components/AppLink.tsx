import mixpanel from "mixpanel-browser";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

export default ({ link, className, children }: PropsWithChildren<{ link: string; className?: string }>) =>
  link.startsWith("https") ? (
    <a href={link} onClick={() => mixpanel.track("external_nav", { link })} target="_blank" className={className}>
      {children}
    </a>
  ) : (
    <Link
      to={link}
      onClick={() => {
        mixpanel.track("internal_nav", { link });
      }}
      className={className}
    >
      {children}
    </Link>
  );
