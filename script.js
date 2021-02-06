var tl = gsap.timeline();

tl.from('.section', {
    opacity: 0,
    stagger: .3,
    duration: 2,
    ease: 'Expo.easeInOut',
    width: 0
})
.from('nav a' , {
    opacity:0,
    x:30,
    duration:1.5,
    ease: 'Expo.easeInOut',
    stagger:.1
} , '-=1')

.from('#circle' , {
    opacity:0,
    rotate: '90deg',
    duration:1.5,
    ease: 'Expo.easeInOut',
} , '-=1')

.from('#vcircle' , {
    opacity:0,
    rotate: '-90deg',
    duration:1.5,
    ease: 'Expo.easeInOut',
} , '-=1')

.from('#vcircle #img' , {
    scale: 1.5,
    ease: 'Expo.easeInOut',
    duration:1
})

.from('#smcircle img' , {
    opacity:0,
    y:800,
    duration:1.5,
    ease: 'Expo.easeInOut',
} , '-=1')

.from('.rt' , {
    opacity:0,
    y:30,
    stagger:.1,
    duration: 1.5,
    ease: 'Expo.easeInOut',
})