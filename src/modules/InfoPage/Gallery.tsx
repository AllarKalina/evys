import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { Fragment, useState } from "react";
import { getAssetURL } from "../../utils/get-asset-url";

interface Props {
  kuusepuud: {
    image: string;
  }[];
}

const Gallery: React.FC<Props> = ({ kuusepuud }) => {
  const [open, setOpen] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isPlaceholderLoaded, setIsPlaceholderLoaded] = useState(false);
  const [activeImage, setActiveImage] = useState<{ image: string } | undefined>(
    undefined
  );

  return (
    <>
      <ul role="list" className="columns-2 gap-4 sm:columns-3">
        {kuusepuud.map((kuusepuu) => (
          <li className="relative mb-4">
            <div
              onClick={() => {
                setActiveImage({ image: kuusepuu.image });
                setOpen(true);
              }}
              className="aspect-w-10 aspect-h-7 group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
            >
              <img
                loading="lazy"
                src={
                  getAssetURL({
                    id: kuusepuu.image,
                    width: 310,
                    fit: "cover",
                    quality: 80,
                  }) as string
                }
                className="pointer-events-none object-cover transition-transform group-hover:scale-[102%]"
              />
            </div>
          </li>
        ))}
      </ul>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[60]"
          onClose={() => {
            setOpen(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => {
              setIsImageLoaded(false);
            }}
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-8">
                  <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div
                    className={clsx(
                      "rounded-lg bg-slate-200 sm:flex sm:max-h-[464px] sm:min-h-[464px] sm:min-w-[464px] sm:max-w-[464px] sm:items-start",
                      isPlaceholderLoaded ? "" : "animate-pulse"
                    )}
                  >
                    {activeImage && (
                      <div className="relative">
                        {!isImageLoaded && (
                          <img
                            loading="lazy"
                            onLoad={() => {
                              setIsPlaceholderLoaded(true);
                            }}
                            src={
                              getAssetURL({
                                id: activeImage.image,
                                width: 600,
                                fit: "cover",
                                quality: 1,
                                height: 600,
                              }) as string
                            }
                            className="relative z-10 rounded-lg blur"
                          />
                        )}
                        {isPlaceholderLoaded && (
                          <img
                            loading="lazy"
                            onLoad={() => {
                              setIsImageLoaded(true);
                            }}
                            className={clsx(
                              isImageLoaded
                                ? "relative z-20 rounded-lg opacity-100"
                                : "absolute top-0 left-0 z-0 opacity-0"
                            )}
                            src={
                              getAssetURL({
                                id: activeImage.image,
                                width: 600,
                                height: 600,
                                fit: "cover",
                                quality: 100,
                              }) as string
                            }
                          />
                        )}
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Gallery;
