(function () {
    const menuButton = document.querySelector("[data-menu-toggle]");
    const links = document.querySelector("[data-nav-links]");

    if (menuButton && links) {
        menuButton.addEventListener("click", function () {
            const expanded = menuButton.getAttribute("aria-expanded") === "true";
            menuButton.setAttribute("aria-expanded", String(!expanded));
            links.classList.toggle("open");
        });

        links.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                links.classList.remove("open");
                menuButton.setAttribute("aria-expanded", "false");
            });
        });
    }

    const page = document.body.dataset.page;
    if (page && links) {
        links.querySelectorAll("a[data-page]").forEach(function (link) {
            if (link.dataset.page === page) {
                link.classList.add("active");
            }
        });
    }

    const yearTarget = document.querySelector("[data-year]");
    if (yearTarget) {
        yearTarget.textContent = String(new Date().getFullYear());
    }

    const reveals = document.querySelectorAll(".reveal");
    if (reveals.length && "IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in");
                    }
                });
            },
            { threshold: 0.12 }
        );

        reveals.forEach(function (item) {
            observer.observe(item);
        });
    } else {
        reveals.forEach(function (item) {
            item.classList.add("in");
        });
    }

    const bg = document.getElementById("bgTint");
    const sections = Array.from(document.querySelectorAll("section[data-color]"));

    if (bg && sections.length) {
        const colors = {
            base: [7, 8, 9],
            nitrogen: [24, 25, 27],
            lithium: [32, 34, 36],
            magnesium: [27, 28, 30],
            helium: [34, 35, 38],
            hydrogen: [38, 30, 33],
            neon: [36, 37, 40],
            oxygen: [31, 32, 35],
            iodine: [24, 2, 10]
        };

        function lerp(a, b, t) {
            return a + (b - a) * t;
        }

        function mix(c1, c2, t) {
            return [
                Math.round(lerp(c1[0], c2[0], t)),
                Math.round(lerp(c1[1], c2[1], t)),
                Math.round(lerp(c1[2], c2[2], t))
            ];
        }

        function getScrollColor() {
            const y = window.scrollY + window.innerHeight / 2;
            let a = sections[0];
            let b = sections[sections.length - 1];

            for (let i = 0; i < sections.length; i += 1) {
                if (sections[i].offsetTop <= y) {
                    a = sections[i];
                }

                if (sections[i].offsetTop > y) {
                    b = sections[i];
                    break;
                }
            }

            const startY = a.offsetTop;
            const endY = b.offsetTop || startY + 1;
            const t = Math.min(1, Math.max(0, (y - startY) / (endY - startY)));
            const c1 = colors[a.dataset.color] || colors.base;
            const c2 = colors[b.dataset.color] || c1;
            return mix(c1, c2, t);
        }

        function updateBg() {
            const rgb = getScrollColor();
            bg.style.background = "radial-gradient(circle at center, rgba(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ", 0.35), rgba(7, 8, 9, 1) 70%)";
        }

        window.addEventListener("scroll", updateBg, { passive: true });
        window.addEventListener("resize", updateBg);
        updateBg();
    }

    const grid = document.querySelector(".bg-grid");
    if (grid) {
        window.addEventListener("mousemove", function (event) {
            const x = event.clientX / window.innerWidth;
            const y = event.clientY / window.innerHeight;
            const tiltX = (x - 0.5) * 8;
            const tiltY = (0.5 - y) * 8;

            document.documentElement.style.setProperty("--grid-tilt-x", tiltX.toFixed(2));
            document.documentElement.style.setProperty("--grid-tilt-y", tiltY.toFixed(2));
            grid.style.backgroundPosition = tiltX * 1.8 + "px " + tiltY * 1.8 + "px";
        });

        window.addEventListener("mouseleave", function () {
            document.documentElement.style.setProperty("--grid-tilt-x", "0");
            document.documentElement.style.setProperty("--grid-tilt-y", "0");
            grid.style.backgroundPosition = "0px 0px";
        });
    }

    const chips = document.querySelectorAll(".code-chip");
    chips.forEach(function (chip) {
        chip.classList.add("copyable");
        chip.addEventListener("click", function (event) {
            const text = chip.textContent.trim();
            if (!text) {
                return;
            }

            navigator.clipboard.writeText(text).then(function () {
                const popup = document.createElement("div");
                popup.className = "copy-popup";
                popup.textContent = "Copied";
                popup.style.left = event.clientX + "px";
                popup.style.top = event.clientY - 26 + "px";
                document.body.appendChild(popup);
                setTimeout(function () {
                    popup.remove();
                }, 950);
            });
        });
    });

    document.querySelectorAll(".publication-item").forEach(function (card) {
        const githubLink = card.querySelector(".publication-github");
        if (!githubLink) {
            return;
        }

        card.addEventListener("click", function (event) {
            if (event.target.closest("a") || event.target.closest(".code-chip") || event.target.closest("details")) {
                return;
            }

            githubLink.click();
        });
    });
})();