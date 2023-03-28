import SwupPreloadPlugin from "@swup/preload-plugin";
import Swup from "swup";

const swup = new Swup({
  /* options */
  plugins: [new SwupPreloadPlugin()],
  containers: ["#swup", "#nav", "#side-nav"],
});

const swupActiveLinks = () => {
  let currentPath = swup.transition.to;
  console.log(swup.transition);
  let links = document.querySelectorAll("nav a"); // <- put your link selector here
  for (const link of links) {
    let linkPath = new URL(link.href).pathname;
    link.ariaCurrent = linkPath == currentPath ? "page" : false;
  }
};

const swupActiveSidenav = () => {
  const sidenav = document.getElementById("side-nav");
  sidenav.ariaCurrent = transition.to.split("/")[1] === "info" ? "page" : false;
};

swup.on("animationOutStart", () => {
  swupActiveLinks(); // trigger after swup
  swupActiveSidenav();
});

swup.on("contentReplaced", () => {
  swupActiveLinks();
  swupActiveSidenav();
});
