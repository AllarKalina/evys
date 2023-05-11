import { ArrowLeftIcon } from "@heroicons/react/20/solid";

const BackButton = () => {
  return (
    <button
      onClick={() =>
        history.length === 1
          ? (window.location.href = "/blog/")
          : history.back()
      }
      className="group mb-12 flex items-center gap-0.5 text-emerald-600 hover:text-emerald-700"
    >
      <ArrowLeftIcon className="group h-5 w-5 stroke-2 text-inherit transition-all group-hover:-ml-2" />
      <span className="group text-base font-semibold transition-all group-hover:ml-2 lg:text-lg">
        Tagasi
      </span>
    </button>
  );
};

export default BackButton;
