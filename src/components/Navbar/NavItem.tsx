import clsx from 'clsx';

interface Props {
  title: string;
  href: string;
  className?: string;
  active?: boolean;
}

const NavItem: React.FC<Props> = ({ title, href, className, active }) => {
  return (
    <a
      href={href}
      className={clsx(
        'text-white font-semibold hover:text-rose-600 transition-colors tracking-wide text-sm',
        active && 'text-rose-600',
        className,
      )}
    >
      {title}
    </a>
  );
};

export default NavItem;
