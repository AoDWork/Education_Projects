function slider() {
    //=== 513 slider carousel + 514 slider dots + 516 use RegExp
    const slides = document.querySelectorAll(".offer__slide"),
        slider = document.querySelector(".offer__slider"),
        prev = document.querySelector(".offer__slider-prev"),
        next = document.querySelector(".offer__slider-next"),
        total = document.querySelector("#total"),
        current = document.querySelector("#current"),
        slidesWrapper = document.querySelector(".offer__slider-wrapper"),
        slidesField = document.querySelector(".offer__slider-inner"),
        width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + "%";
    slidesField.style.display = "flex";
    slidesField.style.transition = "0.5s all";

    slidesWrapper.style.overflow = "hidden";

    slides.forEach((slide) => (slide.style.width = width));

    slider.style.position = "relative";

    const indicators = document.createElement("ol"),
        dots = [];

    indicators.classList.add("carousel-indicators");
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("li");
        dot.classList.add("dot");
        dot.setAttribute("data-slide-to", i + 1);
        if (i == 0) {
            dot.style.opacity = 1;
        }
        document.querySelector(".carousel-indicators").append(dot);
        dots.push(dot);
    }

    function setActiveDot() {
        dots.forEach((dot) => (dot.style.opacity = ".5"));
        dots[slideIndex - 1].style.opacity = 1;
    }

    function addZeroToCurrentIndex() {
        if (slideIndex < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }

    function shiftSlidesRow() {
        slidesField.style.transform = `translateX(-${offset}px)`;
    }

    function getNumberFromCss(str) {
        return +str.replace(/\D/g, "");
    }

    next.addEventListener("click", () => {
        if (offset == getNumberFromCss(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += getNumberFromCss(width);
        }

        shiftSlidesRow();

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        addZeroToCurrentIndex();
        setActiveDot();
    });

    prev.addEventListener("click", () => {
        if (offset == 0) {
            offset = getNumberFromCss(width) * (slides.length - 1);
        } else {
            offset -= getNumberFromCss(width);
        }

        shiftSlidesRow();

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        addZeroToCurrentIndex();
        setActiveDot();
    });

    dots.forEach((dot) => {
        dot.addEventListener("click", (e) => {
            const slideTo = e.target.getAttribute("data-slide-to");

            slideIndex = slideTo;
            offset = getNumberFromCss(width) * (slideTo - 1);

            shiftSlidesRow();
            addZeroToCurrentIndex();
            setActiveDot();
        });
    });
}

module.exports = slider