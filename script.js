document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".brand-promo");
    const image = document.querySelector(".js-parallax");

    if (!section || !image) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;

    function updateParallax() {
        const rect = section.getBoundingClientRect();
        const viewportH = window.innerHeight;

        // section center compared to viewport center
        const sectionCenter = rect.top + rect.height / 2;
        const viewportCenter = viewportH / 2;
        const distance = sectionCenter - viewportCenter;

        // stronger effect
        const offset = Math.max(-90, Math.min(90, distance * -0.12));

        image.style.transform = `translate3d(0, ${offset}px, 0) scale(1.08)`;
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", requestTick);

    updateParallax();
});