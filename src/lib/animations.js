import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Shared ScrollTrigger config
const SCROLL_CONFIG = {
  start: 'top 85%',
  toggleActions: 'play none none none',
};

// Shared animation easing
const EASE = 'power3.out';