interface Props {
  title: string;
  href: string;
}

const MobileMenuItem: React.FC<Props> = ({ title, href }) => {
  return (
    <a href={href} className="text-white font-semibold text-4xl">
      {title}
    </a>
  );
};

export default MobileMenuItem;
