import * as turbo from "@hotwired/turbo";

const handleHomeNavigation = (event) => {
  event.detail.resume();
};

const handleInfoNavigation = (event) => {
  document.startViewTransition(async () => {
    await event.detail.resume();
  });
};

const beforeRender = (event) => {
  document.removeEventListener("turbo:before-render", beforeRender);

  event.preventDefault();

  // no Shared Element Transition API support in browser
  if (!document.startViewTransition) {
    event.detail.resume();
    return;
  }

  if (location.pathname === "/") {
    handleHomeNavigation(event);
  } else {
    handleInfoNavigation(event);
  }
};

document.addEventListener("turbo:load", () => {
  document.addEventListener("turbo:before-render", beforeRender);
});

turbo.start();
