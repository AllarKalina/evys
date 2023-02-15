import clsx from 'clsx';

interface Props {
  currentPath: string;
}

const SideNav: React.FC<Props> = ({ currentPath }) => {
  const MENU_ITEMS = [
    {
      id: 0,
      title: 'Seltsist',
      href: '/info',
      isActive: currentPath === '/info',
    },
    {
      id: 1,
      title: 'Juhatus ja meeskonnad',
      href: '/info/teams',
      isActive: currentPath === '/info/teams',
    },
    {
      id: 0,
      title: 'Dokumendid',
      href: '/',
      isActive: currentPath === '/in',
    },
  ];

  return (
    <div className="fixed left-0 top-[30%] hidden xl:block">
      <ul className="space-y-5">
        {MENU_ITEMS.map((item) => {
          return (
            <li key={item.id}>
              <a
                href={item.href}
                className="group flex gap-2 items-center cursor-pointer"
              >
                <div
                  className={clsx(
                    'w-6 h-[1px] rounded-full group-hover:w-12 group-hover:bg-emerald-600 transition-all',
                    item.isActive ? 'bg-emerald-600 w-12' : 'bg-zinc-600',
                  )}
                ></div>
                <p
                  className={clsx(
                    ' group-hover:text-emerald-600 font-medium',
                    item.isActive ? 'text-emerald-600' : 'text-zinc-600',
                  )}
                >
                  {item.title}
                </p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideNav;
