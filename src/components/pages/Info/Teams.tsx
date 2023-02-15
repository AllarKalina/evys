import clsx from 'clsx';
import { useState } from 'react';

const Teams = () => {
  const [activeTeamIndex, setActiveTeamIndex] = useState(0);

  const TEAMS = [
    {
      id: 0,
      name: 'Haridusmeeskond',
      description:
        'Õppetöö toimkonna ülesanneteks on hinnata veterinaarmeditsiini ja loomakasvatuse instituudis antava hariduse kvaliteeti ning esitada ülikooli vastavatele struktuuridele ettepanekuid õppe kvaliteedi ja selle korralduse parendamiseks. Teiseks väga tähtsaks ülesandeks on rikastada tudengite õppetööd, korraldades erinevaid loengusarju ja praktikume.',
    },
    {
      id: 1,
      name: 'Turundus- ja kommunikatsioonimeeskond',
      description:
        'Avalike suhete toimkonna ülesandeks on teha koostööd ning luua uusi suhteid teiste organisatsioonide ja seltsidega. Lisaks sellele tegeletakse seltsi tegevust ning õppetööd puudutava informatsiooni levitamisega ja seltsi infosüsteemide haldamisega. Väga oluliseks ülesandeks on ka meie seltsi ja sealjuures ka meie eriala ja kooli tutvustamine erinevatel konverentsidel, festivalidel ja muudel üritustel.',
    },
    {
      id: 2,
      name: 'Partnerlus- ja sponsorlusmeeskond',
      description:
        'Partnerlusmeeskonna ülesanneteks on suhtlus olemasolevate sponsorite ja partneritega, vastavalt üritustele erinevate uute potensiaalsete partnerite leidmine ja nendega suhtlemine, sponsorite kajastamine ja reklaamimine nii üritustel kui ka internetis ning ka logodega riiete tellimine seltsi liikmetele.',
    },
    {
      id: 3,
      name: 'Personalimeeskond',
      description:
        'Personalimeeskonna peamiseks vastutusalaks on uute liikmete vastuvõtt, nende juhendamine ja olemasolevate liikmete haldamine. Lisaks tegeleb meeskond siseürituste korraldamisega ja vastutab seltsiruumi heakorra eest. Personalimeeskonna poole võib alati pöörduda erinevate jooksvate muredega - olgu selleks siis probleemid koolis, praktikakohas või eraelus.',
    },
  ];

  return (
    <>
      <div className="flex overflow-x-auto mt-12">
        <div className="min-w-full flex-none">
          <div className="flex space-x-10 border-t border-zinc-300">
            {TEAMS.map((team) => {
              return (
                <button
                  onClick={() => {
                    console.log(team.id);

                    setActiveTeamIndex(team.id);
                  }}
                  className={clsx(
                    'relative -mt-px flex flex-none flex-col items-start pt-4 pb-6 text-left',
                    team.id === activeTeamIndex && 'border-t',
                    team.id === 0 && 'border-cyan-500',
                    team.id === 1 && 'border-amber-500',
                    team.id === 2 && 'border-emerald-500',
                    team.id === 3 && 'border-rose-500',
                  )}
                >
                  <h3
                    className={clsx(
                      'text-base font-semibold leading-6',
                      team.id === activeTeamIndex
                        ? clsx(
                            team.id === 0 && 'text-cyan-600',
                            team.id === 1 && 'text-amber-600',
                            team.id === 2 && 'text-emerald-600',
                            team.id === 3 && 'text-rose-600',
                          )
                        : 'text-zinc-700',
                    )}
                  >
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
          '-mx-4 flex transition-transform duration-500',
          activeTeamIndex === 0 && 'translate-x-[0%]',
          activeTeamIndex === 1 && '-translate-x-[100%]',
          activeTeamIndex === 2 && '-translate-x-[200%]',
          activeTeamIndex === 3 && '-translate-x-[300%]',
        )}
      >
        {TEAMS.map((team) => {
          return (
            <div className="w-full flex-none">
              <p className="mx-4 text-sm leading-6 text-zinc-700">
                {team.description}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Teams;
