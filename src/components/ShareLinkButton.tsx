import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const ShareLinkButton = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <button
      onClick={() => copyToClipboard()}
      className="group mt-24 mb-4 flex gap-2 font-semibold text-emerald-600 hover:text-emerald-700"
    >
      {isCopied ? (
        <>
          Link kopeeritud!
          <ClipboardDocumentCheckIcon className="group h-5 w-5 stroke-2" />
        </>
      ) : (
        <>
          Jaga postituse linki
          <ClipboardDocumentIcon className="group h-5 w-5 stroke-2 opacity-0 transition-all group-hover:opacity-100" />
        </>
      )}
    </button>
  );
};

export default ShareLinkButton;
