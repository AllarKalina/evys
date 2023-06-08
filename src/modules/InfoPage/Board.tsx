import clsx from "clsx";
import { useState } from "react";
import { getAssetURL } from "../../utils/get-asset-url";

type Leader = {
  name: string;
  team: string;
  image: string;
  order: number;
  currently_active: boolean;
  active_date: string;
};

interface Props {
  boardMembers: Leader[];
}

const Board: React.FC<Props> = ({ boardMembers }) => {
  const dateList = new Set(
    boardMembers
      .map((boardMember) => boardMember.active_date)
      .sort((a, b) => Number(b.split("/")[0]) - Number(a.split("/")[0]))
  );

  const [currentlyActiveBoard, setCurrentlyActiveBoard] = useState(
    boardMembers.filter((boardMember) => boardMember.currently_active)
  );

  const handleDateClick = (date: string) => {
    setCurrentlyActiveBoard(
      boardMembers.filter((boardMember) => boardMember.active_date === date)
    );
  };

  return (
    <>
      <p className="mt-5 text-base font-medium leading-7 text-emerald-600 lg:text-lg">
        Juhatuse koosseisud
      </p>
      <ul className="mt-2 flex gap-2">
        {[...dateList].map((date) => {
          return (
            <button
              onClick={() => {
                handleDateClick(date);
              }}
              className={clsx(
                currentlyActiveBoard[0].active_date === date
                  ? "bg-emerald-50 text-emerald-600 ring-emerald-500/10"
                  : "bg-slate-50 text-slate-600 ring-slate-500/10 hover:bg-emerald-50 hover:text-emerald-600 hover:ring-emerald-500/10",
                "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset"
              )}
            >
              {date}
            </button>
          );
        })}
      </ul>
      <ul
        role="list"
        className="mt-8 mb-5 space-y-8 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
      >
        {currentlyActiveBoard.map((leader, idx) => (
          <li>
            <div className="space-y-3">
              <div className="w-full max-w-[360px] overflow-hidden rounded-lg lg:h-auto">
                <img
                  loading="eager"
                  src={getAssetURL({
                    id: leader.image,
                    width: 360,
                    height: 300,
                    fit: "cover",
                    quality: 90,
                  })}
                  className="shadow-lg"
                />
              </div>

              <div className="space-y-3">
                <div className="space-y-1 leading-6 text-zinc-700">
                  <h3 className="text-lg font-semibold lg:text-xl">
                    {leader.name}
                  </h3>
                  <p
                    className={clsx(
                      "font-medium !leading-6",
                      idx === 0 && "text-emerald-600 ",
                      idx === 1 && "text-cyan-600",
                      idx === 2 && "text-amber-600",
                      idx === 3 && "text-violet-800",
                      idx === 4 && "text-rose-600",
                      idx === 5 && "text-slate-600"
                    )}
                  >
                    {leader.team}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Board;
