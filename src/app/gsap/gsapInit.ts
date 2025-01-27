import React from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

export const gsapInit = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
};
