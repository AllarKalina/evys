import { motion } from "framer-motion";

const ImageCover = () => {
  return (
    <>
      <motion.div
        initial={{ x: 0 }}
        whileInView={{ x: "100%" }}
        transition={{
          ease: [0.74, 0.07, 0.38, 0.99],
          duration: 0.8,
          delay: 0.1,
        }}
        className="absolute inset-0 z-20 aspect-[9/10] w-full bg-zinc-700"
      ></motion.div>
      <motion.div
        initial={{ x: 0 }}
        whileInView={{ x: "100%" }}
        transition={{
          ease: [0.74, 0.07, 0.38, 0.99],
          duration: 0.7,
          delay: 0.24,
        }}
        className="absolute inset-0 z-10 aspect-[9/10] w-full bg-emerald-600"
      ></motion.div>
    </>
  );
};

export default ImageCover;
