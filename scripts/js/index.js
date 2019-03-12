function Carousel(parent, nav) {
    this.parent = parent;
    this.items = Array.prototype.slice.call(this.parent.children);
    this.nav = nav;
}

Carousel.prototype.init = function () {
    this.nav.addEventListener('click', (e) => this.next(e));
}

Carousel.prototype.next = function (e) {
    e.preventDefault();

    let active = this.parent.querySelector(".active");
    let index = this.items.indexOf(active);
    let newIndex = index < this.items.length - 1 ? index + 1 : 0;
    let offset = Math.round(this.items[0].clientWidth * newIndex);
    this.parent.scrollTo({ left: offset, top: 0, behavior: "smooth" });
}

window.addEventListener('load', function () {

    let parent = document.querySelector("#vitalii-carousel");
    let nav = document.querySelector("#vitalii-next");

    if (parent && nav) {
        let signinCarousel = new Carousel(parent, nav);
        signinCarousel.init();

        const intersectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                entry.target.classList.remove("active");
                if (entry.intersectionRatio > 0.6) {
                    entry.target.classList.add("active");
                }

            });
        }, { threshold: 0.6 });

        signinCarousel.items.forEach((element) => intersectionObserver.observe(element));
    }

})