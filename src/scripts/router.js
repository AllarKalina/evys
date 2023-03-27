// import * as turbo from "@hotwired/turbo";

// const handleHomeNavigation = (event) => {
//   event.detail.resume();
// };

// const handleInfoNavigation = (event) => {
//   document.startViewTransition(async () => {
//     await event.detail.resume();
//   });
// };

// const beforeRender = async (event) => {
//   event.preventDefault();
//   document.removeEventListener("turbo:before-render", beforeRender);

//   // no Shared Element Transition API support in browser
//   if (!document.startViewTransition) {
//     event.detail.resume();
//     return;
//   }

//   if (location.pathname === "/") {
//     handleHomeNavigation(event);
//   } else {
//     handleInfoNavigation(event);
//   }
// };

// document.addEventListener("turbo:load", () => {
//   document.addEventListener("turbo:before-render", beforeRender);
// });

// turbo.start();

import SwupPreloadPlugin from "@swup/preload-plugin";
import Swup from "swup";

const swup = new Swup({
  /* options */
  plugins: [new SwupPreloadPlugin()],
  containers: ["#swup", "#nav"],
});

swup.on("transitionStart", () => {
  swup.options.containers.forEach((selector) => {
    console.log(selector);
    // load scripts for all elements with 'selector'
  });
});
