import clsx from "clsx";
import { useState } from "react";

const Teams = () => {
  const [activeTeamIndex, setActiveTeamIndex] = useState(0);

  const TEAMS = [
    {
      id: 0,
      name: "Haridusmeeskond",
      description:
        "Haridustiim koosneb suurest meeskonnast, kelle suurimaks ülesandeks on rikastada tudengite õppetööd. /nKorraldame erinevaid loenguid, seminare ja praktikume teemadel, millest räägitakse meie õppetöös vähe või tulevad alles hilisematel kursustel. Korraldame harivaid loengud ja üritusi ka väljaspool seltsi, täiendades sellega rahva teadmisi looma tervishoiust, pidamiskultuuridest ja loomade heaolust. Ühtlasi seisame sellega ka hea rahvatervise eest.",
      image: "/images/Haridus.webp",
    },
    {
      id: 1,
      name: "Turundus- ja kommunikatsioonimeeskond",
      description:
        "Turundus- ja kommunikatsioonimeeskonna ülesandeks on teha koostööd ning luua ja hoida suhteid teiste organisatsioonide ja seltsidega. Lisaks sellele tegeleb meeskond seltsi tegevuse ja õppetööd puudutava informatsiooni levitamisega ning seltsi infosüsteemi haldamisega, hoides seltsi tegevuste kajastamise meedias ja kodulehel päevakajalisena. Väga oluliseks ülesandeks on ka seltsi ning sealjuures ka veterinaarmeditsiini eriala ja kooli tutvustamine erinevatel konverentsidel, messidel ja muudel üritustel.",
      image: "/images/Turundus.webp",
    },
    {
      id: 2,
      name: "Partnerlus- ja sponsorlusmeeskond",
      description:
        "Partnerlus- ja sponsorlusmeeskonna peamiseks tegevusalaks on suhete hoidmine olemasolevate ning tulevaste sponsorite ja toetajatega. Samuti otsib meeskond vastavalt üritusele erinevaid koostööpartnereid. Meie tiimi ülesandeks on ka seltsi liikmetele erinevate toodete tellimine, alates logoga riietest kuni erinevate toodeteni, mis aitavad meid õpingutel kaasa.",
      image: "/images/Partnerlus.webp",
    },
    {
      id: 3,
      name: "Personalimeeskond",
      description:
        "Personalimeeskonna peamiseks ülesandeks on uute liikmete vastuvõtt ja nende juhendamine. Samuti vastutab meeskond seltsi ruumi korrashoiu eest ning korraldab ka seltsi liikmetele erinevaid meelelahutuslikke üritusi. Personalimeeskonna liikmete poole võib alati pöörduda erinevate muredega, nii kooli, seltsi või ka eraeluga seoses.",
      image: "/images/Personal.webp",
    },
  ];

  return (
    <>
      <div className="mt-3 flex overflow-x-auto">
        <div className="min-w-full flex-none">
          <div className="flex space-x-10 border-t border-zinc-300 lg:hidden">
            {TEAMS.map((team) => {
              return (
                <button
                  onClick={() => {
                    setActiveTeamIndex(team.id);
                  }}
                  className={clsx(
                    "relative -mt-px flex flex-none flex-col items-start pt-4 pb-6 text-left",
                    team.id === activeTeamIndex && "border-t",
                    team.id === 0 && "border-cyan-500",
                    team.id === 1 && "border-amber-500",
                    team.id === 2 && "border-violet-800",
                    team.id === 3 && "border-rose-500"
                  )}
                >
                  <h3
                    className={clsx(
                      "text-base font-semibold leading-6",
                      team.id === activeTeamIndex
                        ? clsx(
                            team.id === 0 && "text-cyan-600",
                            team.id === 1 && "text-amber-600",
                            team.id === 2 && "text-violet-800",
                            team.id === 3 && "text-rose-600"
                          )
                        : "text-zinc-700"
                    )}
                  >
                    {team.name}
                  </h3>
                </button>
              );
            })}
          </div>
          <div className="hidden gap-4 lg:grid lg:grid-cols-2">
            {TEAMS.map((team) => {
              return (
                <button
                  onClick={() => {
                    setActiveTeamIndex(team.id);
                  }}
                  className={clsx(
                    "group rounded-lg border border-zinc-200 p-4 text-left text-zinc-700 transition-transform",
                    team.id === 0 &&
                      `hover:border-cyan-600/80 hover:text-cyan-600/80 ${
                        team.id === activeTeamIndex &&
                        "border-cyan-600 text-cyan-600"
                      }`,
                    team.id === 1 &&
                      `hover:border-amber-600/80 hover:text-amber-600/80 ${
                        team.id === activeTeamIndex &&
                        "border-amber-600 text-amber-600"
                      }`,
                    team.id === 2 &&
                      `hover:border-violet-600/80 hover:text-violet-600/80 ${
                        team.id === activeTeamIndex &&
                        "border-violet-800 text-violet-800"
                      }`,
                    team.id === 3 &&
                      `hover:border-rose-600/80 hover:text-rose-600/80 ${
                        team.id === activeTeamIndex &&
                        "border-rose-600 text-rose-600"
                      }`
                  )}
                >
                  <h3 className="group text-base font-semibold leading-6">
                    {team.name}
                  </h3>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "-mx-6 flex transition-transform duration-500",
          activeTeamIndex === 0 && "translate-x-[0%]",
          activeTeamIndex === 1 && "-translate-x-[100%]",
          activeTeamIndex === 2 && "-translate-x-[200%]",
          activeTeamIndex === 3 && "-translate-x-[300%]"
        )}
      >
        {TEAMS.map((team) => {
          return (
            <div className="mt-6 w-full flex-none lg:mt-8 lg:grid lg:grid-cols-5">
              <p className="mx-6 text-base leading-7 text-zinc-600 lg:col-span-3 lg:text-lg">
                {team.description}
              </p>
              <div className="relative mt-4 flex h-fit w-full justify-center overflow-hidden rounded-lg pl-2 pr-6 lg:col-span-2 lg:mt-0">
                <img
                  src={team.image}
                  alt="image"
                  width={400}
                  height={300}
                  className="rounded-lg object-contain"
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Teams;
