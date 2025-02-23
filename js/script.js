// for nested dropdown
document.addEventListener("DOMContentLoaded", function () {
    var dropdowns = document.querySelectorAll(".dropdown-submenu .dropdown-toggle");

    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link action
            event.stopPropagation(); // Stop click from closing dropdown

            var nextMenu = this.nextElementSibling;
            if (nextMenu && nextMenu.classList.contains("dropdown-menu")) {
                nextMenu.classList.toggle("show");
            }
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        document.querySelectorAll(".dropdown-menu.show").forEach(function (menu) {
            if (!menu.parentElement.contains(event.target)) {
                menu.classList.remove("show");
            }
        });
    });
});

// for animation in hero section
// el script only runs after all elements loaded 
document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed('.typed', {
        strings: ["Designer", "Developer", "Freelancer", "Photographer"],
        typeSpeed: 100,
        backSpeed: 50,   
        backDelay: 1700, //wait 1700 then delete 
        startDelay: 500, 
        // showCursor: false,
        loop: true
    });
});

// for counter section
document.addEventListener("DOMContentLoaded", function () {
    function animateCounters() {
        const counters = document.querySelectorAll(".counter-content h3");
        const speed = 150;

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute("data-count");
                const count = +counter.innerText;
                const increment = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkCounters() {
        const countersSection = document.querySelector(".counter");
        if (isElementInViewport(countersSection)) {
            animateCounters();
            window.removeEventListener("scroll", checkCounters); // make it runs once
        }
    }

    window.addEventListener("scroll", checkCounters);
    checkCounters();  // run lw el section in view
});

// for slider
document.addEventListener("DOMContentLoaded", function () {
    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            items: 1,
            loop:true,
            autoplay: true,
            smartSpeed: 600,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            nav: false,
            dots: true
        });
    });
    
});

// for scroll button
document.addEventListener("DOMContentLoaded", function () {
    let scrollTopBtn = document.getElementById("scrollTop");

    window.addEventListener("scroll", function () {
        // btn will appear lw 3mlt scroll more than 120px 
        if (window.scrollY > 120) {
            scrollTopBtn.classList.add("show");
        } else {
            scrollTopBtn.classList.remove("show");
        }
    });

    // lma a3ml click go to the top
    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
