import clsx from 'clsx';

interface Props {
  title: string;
  href: string;
  className?: string;
}

const NavItem: React.FC<Props> = ({ title, href, className }) => {
  return (
    <a
      href={href}
      className={clsx(
        'text-white font-semibold hover:text-rose-600 transition-colors',
        className,
      )}
    >
      {title}
    </a>
  );
};

export default NavItem;
