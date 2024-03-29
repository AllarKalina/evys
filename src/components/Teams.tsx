import clsx from "clsx";
import { useState } from "react";

type Team = {
  id: string;
  name: string;
  description: string;
  image: string;
};

interface Props {
  teams: Team[];
  children: React.ReactNode;
}

const Teams: React.FC<Props> = ({ teams, children }) => {
  const [activeTeamId, setActiveTeamId] = useState(teams[0].id);

  return (
    <>
      <div className="mt-3 flex overflow-x-auto">
        <div className="min-w-full flex-none">
          <div className="flex space-x-10 border-t border-zinc-300 lg:hidden">
            {teams.map((team) => {
              return (
                <button
                  onClick={() => {
                    setActiveTeamId(team.id);
                  }}
                  className={clsx(
                    "relative -mt-px flex flex-none flex-col items-start pt-4 pb-6 text-left",
                    team.id === activeTeamId && "border-t",
                    team.id === teams[0].id && "border-cyan-500",
                    team.id === teams[1].id && "border-amber-500",
                    team.id === teams[2].id && "border-violet-800",
                    team.id === teams[3].id && "border-rose-500"
                  )}
                >
                  <h3
                    className={clsx(
                      "text-base font-semibold leading-6",
                      team.id === activeTeamId
                        ? clsx(
                            team.id === teams[0].id && "text-cyan-600",
                            team.id === teams[1].id && "text-amber-600",
                            team.id === teams[2].id && "text-violet-800",
                            team.id === teams[3].id && "text-rose-600"
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
            {teams.map((team) => {
              return (
                <button
                  onClick={() => {
                    setActiveTeamId(team.id);
                  }}
                  className={clsx(
                    "group rounded-lg border border-zinc-200 p-4 text-left text-zinc-700 transition-transform",
                    team.id === teams[0].id &&
                      `hover:border-cyan-600/80 hover:text-cyan-600/80 ${
                        team.id === activeTeamId &&
                        "!border-cyan-600 !text-cyan-600"
                      }`,
                    team.id === teams[1].id &&
                      `hover:border-amber-600/80 hover:text-amber-600/80 ${
                        team.id === activeTeamId &&
                        "!border-amber-600 !text-amber-600"
                      }`,
                    team.id === teams[2].id &&
                      `hover:border-violet-600/80 hover:text-violet-600/80 ${
                        team.id === activeTeamId &&
                        "!border-violet-800 !text-violet-800"
                      }`,
                    team.id === teams[3].id &&
                      `hover:border-rose-600/80 hover:text-rose-600/80 ${
                        team.id === activeTeamId &&
                        "!border-rose-600 !text-rose-600"
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
          activeTeamId === teams[0].id && "translate-x-[0%]",
          activeTeamId === teams[1].id && "-translate-x-[100%]",
          activeTeamId === teams[2].id && "-translate-x-[200%]",
          activeTeamId === teams[3].id && "-translate-x-[300%]"
        )}
      >
        {children}
      </div>
    </>
  );
};

export default Teams;
