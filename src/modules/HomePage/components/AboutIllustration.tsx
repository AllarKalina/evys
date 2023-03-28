import { motion, useScroll, useTransform } from "framer-motion";

const AboutIllustration = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [2200, 3500], [0, 400]);

  return (
    <div className="pointer-events-none absolute top-0 left-0 h-full w-1/2 overflow-hidden">
      <motion.figure
        style={{ y: y1, rotate: "12deg" }}
        className="pointer-events-none absolute top-48 left-24 hidden h-[400px] w-[360px] origin-top-left rotate-12 xl:block"
      >
        <div className="aspect-w-4 aspect-h-5">
          <div
            className="absolute top-0 left-[-200%] -right-1/4 h-px opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(148, 163, 184, 0) 33%, rgb(148, 163, 184) 80%, rgba(148, 163, 184, 0) 100%)",
            }}
          ></div>
          <div
            className="absolute top-[-125%] right-0 -bottom-1/3 w-px opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(closest-corner at 50% 66%, rgb(148, 163, 184), rgba(148, 163, 184, 0))",
            }}
          ></div>
          <div
            className="absolute bottom-0 left-[-200%] -right-1/2 h-px opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(148, 163, 184, 0) 33%, rgb(148, 163, 184) 80%, rgba(148, 163, 184, 0) 100%)",
            }}
          ></div>
          <div
            className="absolute top-[-100%] left-0 -bottom-1/2 w-px opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(closest-corner at 50% 66%, rgb(148, 163, 184), rgba(148, 163, 184, 0))",
            }}
          ></div>
          <div className="absolute top-[-0.5px] left-0 h-[2px] w-28 -translate-x-1/3 rounded-full bg-gradient-to-r from-cyan-600"></div>
          <div className="absolute bottom-[-0.5px] right-0 h-[2px] w-28 translate-x-4 rounded-full bg-gradient-to-l from-rose-400"></div>
        </div>
      </motion.figure>
    </div>
  );
};

export default AboutIllustration;
