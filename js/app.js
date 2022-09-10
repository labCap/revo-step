(() => {
    "use strict";
    let addWindowScrollEvent = false;
    function headerScroll() {
        addWindowScrollEvent = true;
        const header = document.querySelector("header.header");
        const headerShow = header.hasAttribute("data-scroll-show");
        const headerShowTimer = header.dataset.scrollShow ? header.dataset.scrollShow : 500;
        const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
        let scrollDirection = 0;
        let timer;
        document.addEventListener("windowScroll", (function(e) {
            const scrollTop = window.scrollY;
            clearTimeout(timer);
            if (scrollTop >= startPoint) {
                !header.classList.contains("_header-scroll") ? header.classList.add("_header-scroll") : null;
                if (headerShow) {
                    if (scrollTop > scrollDirection) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null; else !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                    timer = setTimeout((() => {
                        !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                    }), headerShowTimer);
                }
            } else {
                header.classList.contains("_header-scroll") ? header.classList.remove("_header-scroll") : null;
                if (headerShow) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null;
            }
            scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
        }));
    }
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const burger = document.querySelector(".icon-menu"), nav = document.querySelector(".nav"), tabTitle = document.querySelectorAll(".giftset-tabs__title"), tab = document.querySelectorAll(".giftset__tab");
    burger.addEventListener("click", (() => {
        burger.classList.toggle("menu-open");
        nav.classList.toggle("menu-open");
        document.body.classList.toggle("_lock");
    }));
    new Swiper(".offers__slider", {
        direction: "horizontal",
        slidesPerView: 2,
        breakpoints: {
            1400: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            },
            425: {
                slidesPerView: 1
            },
            375: {
                slidesPerView: 1
            },
            320: {
                slidesPerView: 1
            }
        },
        navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next"
        },
        scrollbar: {
            el: ".swiper-scrollbar"
        }
    });
    new Swiper(".combo__slider", {
        direction: "horizontal",
        spaceBetween: 1,
        slidesPerView: 3,
        centeredSlides: true,
        breakpoints: {
            1024: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 2
            },
            425: {
                slidesPerView: 1
            },
            375: {
                slidesPerView: 1
            },
            320: {
                slidesPerView: 1
            }
        },
        navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next"
        },
        scrollbar: {
            el: ".swiper-scrollbar"
        }
    });
    tabTitle.forEach((i => {
        i.addEventListener("click", (() => {
            let thisTabTitle = i;
            let tabId = thisTabTitle.getAttribute("data-tab");
            let thisTab = document.querySelector(tabId);
            tabTitle.forEach((j => {
                j.classList.remove("_active");
            }));
            tab.forEach((j => {
                j.classList.remove("_active");
            }));
            thisTabTitle.classList.add("_active");
            thisTab.classList.add("_active");
        }));
    }));
    window["FLS"] = true;
    headerScroll();
})();