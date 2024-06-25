/* global gsap */

export function shake(t) {
  const animaiton = gsap.to(t, {
    duration: 0.1,
    x: -10,
    repeat: 5,
    yoyo: true,
  });
  return animaiton;
}
