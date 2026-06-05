import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

import Reveal from '@/components/Reveal';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  contentClassName,
  headingClassName,
  align = 'center',
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  headingClassName?: string;
  align?: 'center' | 'left' | 'split';
}) {
  return (
    <section id={id} className={cn('section-shell', className)}>
      <div className="section-container">
        <Reveal
          className={cn(
            align === 'center' && 'section-heading',
            align === 'left' && 'max-w-3xl',
            align === 'split' && 'grid gap-5 lg:grid-cols-[0.82fr_0.9fr] lg:items-end',
            headingClassName,
          )}
        >
          <div>
            {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
            <h2 className="section-title">{title}</h2>
          </div>
          {description ? (
            <p
              className={cn(
                'section-description',
                align === 'split' && 'mt-0 max-w-2xl lg:justify-self-end',
              )}
            >
              {description}
            </p>
          ) : null}
        </Reveal>
        <div className={cn('mt-10 md:mt-14', contentClassName)}>{children}</div>
      </div>
    </section>
  );
}

export function Surface({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <Card className={cn('surface-card', className)} {...props} />;
}

export function Stat({ value, label, className }: { value: string; label: string; className?: string }) {
  return (
    <div className={cn('neo-chip rounded-2xl px-4 py-4 text-left', className)}>
      <div className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{value}</div>
      <div className="mt-1 text-base text-muted-foreground">{label}</div>
    </div>
  );
}

export function SectionAction({ className, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button className={cn('btn-premium', className)} {...props}>
      {children}
      <ArrowUpRight className="h-4 w-4" />
    </Button>
  );
}
