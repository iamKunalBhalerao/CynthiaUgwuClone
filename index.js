console.log("Cynthiaugwu.com");

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// mouse circle chapta on move

var timeout;

function circlemini() {
  // define scale value

  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);

    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    mousemove(xscale, yscale);

    timeout = setTimeout(function () {
      document.querySelector(
        "#mouse"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    }, 100);
  });
}

// Animations Part

function firtspage() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1,
    ease: Expo.easeInout,
  })
    .to(".boundelem", {
      y: 0,
      ease: Expo.easeInout,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .from("#homefooter", {
      y: "-10",
      opacity: 0,
      ease: Expo.easeInout,
      duration: 1.5,
      delay: -1,
    });
}

function mousemove(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#mouse"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}

// Second page image animations
document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: "2s",
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - diffrot;
    rotate - dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: "2s",
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.8),
    });
  });
});

circlemini();

mousemove();

firtspage();
