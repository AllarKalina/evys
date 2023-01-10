import MobileMenuItem from './MobileMenuItem';

const MobileMenu = () => {
  const menuArray = [
    { id: 0, title: 'Seltsi Info', href: '/' },
    { id: 1, title: 'Loomaarsti õpe', href: '/' },
    { id: 2, title: 'Blogi', href: '/' },
    { id: 3, title: 'Toetajad', href: '/' },
  ];

  return (
    <section className="flex-col justify-end gap-8 absolute top-[63px] px-7 pb-20 left-0 bg-emerald-600/90 backdrop-blur h-[calc(100vh-63px)] w-full flex">
      {menuArray.map((item) => (
        <MobileMenuItem {...item} />
      ))}
    </section>
  );
};

export default MobileMenu;
