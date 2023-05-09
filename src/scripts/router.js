import SwupPreloadPlugin from "@swup/preload-plugin";
import SwupScriptsPlugin from "@swup/scripts-plugin";
import SwupScrollPlugin from "@swup/scroll-plugin";
import Swup from "swup";

const swup = new Swup({
  /* options */
  plugins: [
    new SwupScriptsPlugin(),
    new SwupPreloadPlugin(),
    new SwupScrollPlugin({
      doScrollingRightAway: true,
      scrollAcceleration: 0.1,
    }),
  ],
  containers: ["#swup"],
});

const swupActiveLinks = () => {
  let currentPath = swup.transition.to ?? window.location.pathname;
  const header = document.getElementById("header");

  let links = header.querySelectorAll("nav ol li a"); // <- put your link selector here
  for (const link of links) {
    let linkPath = new URL(link.href).pathname;
    link.ariaCurrent = linkPath === currentPath ? "page" : "none";
  }
};

const swupInfoNav = () => {
  let currentPath = swup.transition.to ?? window.location.pathname;
  const infoNav = document.getElementById("info-nav");

  const isInfo = currentPath.split("/")[1] === "info";
  infoNav.ariaCurrent = isInfo ? "active" : "notActive";
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
  swupInfoNav();
});

swup.on("contentReplaced", () => {
  swupActiveLinks();
  swupActiveSidenav();
  swupInfoNav();
});

if (document.readyState === "complete") {
  swupActiveLinks();
  swupActiveSidenav();
  swupInfoNav();
} else {
  document.addEventListener("DOMContentLoaded", () => {
    swupActiveLinks();
    swupActiveSidenav();
    swupInfoNav();
  });
}
