const controller = new ScrollMagic.Controller();
const sections = document.querySelectorAll(".About, .Program, .jeong, .Profile");

sections.forEach((section) => {
    TweenLite.set(section, { opacity: 0, y: 100 });

    const sectionTween = TweenMax.to(section, 1, {
        opacity: 1,
        y: 0,
        ease: Power2.easeOut,
    });

    new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 0.5,
        reverse: true,
    })
        .setTween(sectionTween)
        .addTo(controller);
});