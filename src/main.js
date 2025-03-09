import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const pointer = document.querySelector(".follow-pointer");

var tl = gsap.timeline();

// Mousemove event to track pointer position
document.addEventListener("mousemove", (e) => {
  gsap.to(pointer, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.2,
    ease: "power2.out",
  });
});

tl.from(".heading h1", { duration: 1, y: 20, opacity: 0 })
  .fromTo(
    ".heading p span",
    {
      y: 20,
      opacity: 0,
    },
    { duration: 1, y: 0, opacity: 1 }
  )
  .from("nav", { duration: 0.5, y: -100, opacity: 0 });

gsap.to("nav", {
  background: "#fff",
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "10px top",
    toggleActions: "play none reverse none",
  },
});

gsap.to(".links a", {
  color: "black",
  duration: 0.5,
  ease: "power1.out",
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "10px top",
    toggleActions: "play none reverse none",
  },
});

gsap.to(".nav-content img", {
  attr: { src: "https://marketifythemes.net/html/grax/img/logo/dark.png" },
  duration: 0.5,
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    toggleActions: "play none none reverse",
  },
});

gsap.to(".home", {
  color: "orange",
  duration: 0.5,
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    toggleActions: "play none none reverse",
  },
});
