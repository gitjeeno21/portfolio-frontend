import type { ReactNode } from 'react';

import Reveal from '@/components/Reveal';

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section id={id} className="section-shell">
      <div className="section-container">
        <Reveal className="section-heading">
          {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
          <h2 className="section-title">{title}</h2>
          {description ? <p className="section-description">{description}</p> : null}
        </Reveal>
        {children != null ? (
          <Reveal className="section-content">{children}</Reveal>
        ) : null}
      </div>
    </section>
  );
}
