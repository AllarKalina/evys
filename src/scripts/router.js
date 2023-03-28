import SwupPreloadPlugin from "@swup/preload-plugin";
import Swup from "swup";

const swup = new Swup({
  /* options */
  plugins: [new SwupPreloadPlugin()],
  containers: ["#swup", "#header", "#side-nav"],
});

const swupActiveLinks = () => {
  let currentPath = swup.transition.to ?? window.location.pathname;

  const header = document.getElementById("header");
  let links = header.querySelectorAll("nav a"); // <- put your link selector here
  for (const link of links) {
    let linkPath = new URL(link.href).pathname;
    link.ariaCurrent = linkPath === currentPath ? "page" : "none";
  }
};

const swupActiveSidenav = () => {
  const sidenav = document.getElementById("side-nav");
  const links = sidenav.querySelectorAll("nav ul li a");
  let currentPath = swup.transition.to ?? window.location.pathname;
  sidenav.ariaCurrent = currentPath.split("/")[1] === "info" ? "page" : "none";

  for (const link of links) {
    let linkPath = new URL(link.href).pathname;
    link.ariaCurrent = linkPath === currentPath ? "side-page" : "no-side-page";
  }
};

swup.on("animationOutStart", () => {
  swupActiveLinks(); // trigger after swup
  swupActiveSidenav();
});

swup.on("contentReplaced", () => {
  swupActiveLinks();
  swupActiveSidenav();
});

swupActiveLinks();
swupActiveSidenav();
