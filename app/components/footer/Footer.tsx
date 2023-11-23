import Link from 'next/link';
import styles from './Footer.module.css';
import type { LucideIcon } from 'lucide-react';

interface ILink {
  href: string;
  icon: LucideIcon;
}

export default function Footer({ links }: { links: ILink[] }) {
  return (
    <footer className={styles.footer}>
      {links.map(({ href, icon: Icon }) => (
        <Link target="_blank" href={href} key={href}>
          <Icon width={32} height={32} />
        </Link>
      ))}
    </footer>
  );
}
