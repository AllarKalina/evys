import clsx from "clsx";
import { useState } from "react";
import { getAssetURL } from "../utils/get-asset-url";

interface Props {
  src: string;
  className: string;
}

const LoadedImage: React.FC<Props> = ({ src, className }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <>
      {isImageLoaded ? null : (
        <img
          loading="lazy"
          src={getAssetURL(src, "thumbnail") as string}
          className={clsx(className, isImageLoaded ? "hidden" : "block")}
        />
      )}
      <img
        loading="lazy"
        src={getAssetURL(src) as string}
        onLoad={() => setIsImageLoaded(true)}
        className={clsx(className, isImageLoaded ? "block" : "hidden")}
      />
    </>
  );
};

export default LoadedImage;
