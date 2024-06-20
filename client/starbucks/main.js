const alist = document.querySelectorAll('nav a');
const depthlist = document.querySelectorAll('.depth');
const header = document.querySelector('#header');
const h = (t) => (t.style.height = 0);

// alist.forEach((a) => {
//   a.addEventListener('mouseenter', () => {
//     const target = a.lastElementChild;

//     depthlist.forEach(h);

//     target.style.height = '100px';
//   });
// });

// header.addEventListener('mouseleave', () => depthlist.forEach(h));

/*global gsap*/
alist.forEach((a) => {
  const target = a.lastElementChild;
  const tl = gsap.timeline({ paused: true }).to(target, { height: 100 });

  a.addEventListener('mouseenter', () => tl.play());
  a.addEventListener('mouseleave', () => tl.reverse());
});
