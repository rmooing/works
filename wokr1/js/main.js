let nav = document.getElementById("bottom-nav");
let home = document.getElementById("home");


document.addEventListener("DOMContentLoaded", () => {

  let timeline1 = new TimelineMax();
  timeline1
    .from(".title", 1.5, { y: 200, ease: Power3.easeInout })
    .from("nav", 1, { y: 30, autoAlpha: 0, ease: Power3.easeInout }, "-=0.5")
    .from(".sub-title",1,{ y: 200, autoAlpha: 0, ease: Power3.easeInout },"-=0.5",)
    .from(".bottom-nav",1,{ width: "0%", autoAlpha: 0, ease: Power3.easeInout },"-=1.5",);
});

nav.addEventListener("click", () => {
  let timeline2 = new TimelineMax();
  timeline2
    .set(".grid", { display: "grid" })
    .to(".forest img", 3, { y: -400, scale: 1.1, ease: Expo.easeInOut })
    .to(".bg-image", 3, { y: -600, ease: Expo.easeInOut }, "-=3")
    .to(".sub-title", 3, { autoAlpha: 0, y: -100, ease: Expo.easeInOut }, "-=3")
    .to(".bottom-nav", 3, { width: "0%", ease: Expo.easeInOut }, "-=3")
    .to("nav", 3, { color: "#31592e" }, "-=3")
    .to(".imgs", 2, { height: "100%", ease: Expo.easeInOut }, "-=2")
    .to(".imgs-2", 2, { height: "100%", ease: Expo.easeInOut }, "-=1.8")
    .to(".imgs-3", 2, { height: "100%", ease: Expo.easeInOut }, "-=1.7")
    .to(".imgs-4", 2, { height: "100%", ease: Expo.easeInOut }, "-=1.6")
    .to(
      ".destination",
      2,
      { autoAlpha: 1, y: -20, ease: Expo.easeOut },
      "-=1.6",
    );
  home.addEventListener("click", () => {
    timeline2.reverse();
  });
});