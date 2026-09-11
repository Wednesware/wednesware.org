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

    function normalizeText(value) {
        return String(value || "").toLowerCase().replace(/\s+/g, " ").trim();
    }

    function getStatusPriority(statusText) {
        return /live/i.test(statusText) ? 1 : 0;
    }

    function getSearchRank(text, query) {
        if (!query || !text) {
            return 0;
        }

        const haystack = normalizeText(text);
        const normalizedQuery = normalizeText(query);
        if (!normalizedQuery) {
            return 0;
        }

        if (haystack.includes(normalizedQuery)) {
            return 1;
        }

        return 0;
    }

    function getEntryPriority(entry, query) {
        if (!query) {
            return { score: 0, statusPriority: getStatusPriority(entry.status || "") };
        }

        const titleScore = getSearchRank(entry.title, query) ? 4 : 0;
        const typeScore = getSearchRank(entry.type, query) ? 3 : 0;
        const descriptionScore = getSearchRank(entry.description, query) ? 2 : 0;
        const statusScore = getSearchRank(entry.status, query) ? 1 : 0;

        const score = Math.max(titleScore, typeScore, descriptionScore, statusScore);
        return {
            score: score,
            statusPriority: getStatusPriority(entry.status || "")
        };
    }

    function getPageItemPriority(item, query) {
        if (!query) {
            return { score: 0, statusPriority: getStatusPriority(item.querySelector(".status")?.textContent || "") };
        }

        const title = item.querySelector("h3")?.textContent || item.querySelector("h2")?.textContent || "";
        const labels = Array.from(item.querySelectorAll(".pill")).map(function (pill) {
            return pill.textContent || "";
        }).join(" ");
        const description = item.querySelector(".publication-meta")?.textContent || item.textContent || "";
        const status = item.querySelector(".status")?.textContent || "";

        let score = 0;
        if (getSearchRank(title, query)) {
            score = 4;
        } else if (getSearchRank(labels, query)) {
            score = 3;
        } else if (getSearchRank(description, query)) {
            score = 2;
        } else if (getSearchRank(status, query)) {
            score = 1;
        }

        return {
            score: score,
            statusPriority: getStatusPriority(status)
        };
    }

    function renderTag(tag) {
        const icon = tag.icon ? '<i class="' + tag.icon + ' distro-tag"></i> ' : '';
        return '<span class="pill">' + icon + tag.label.toUpperCase() + '</span>';
    }

    function renderInstallMethods(item) {
        if (!item.installMethods || !item.installMethods.length) {
            return item.codeChip ? '<span class="code-chip mono">' + item.codeChip + '</span>' : '';
        }

        const methods = item.installMethods.map(function (method) {
            const note = method.note ? '<span class="install-note"> (' + method.note + ')</span>' : '';
            return '<span><span class="code-chip mono">' + method.command + '</span>' + note + '</span>';
        }).join('');

        return '<details class="install-dropdown">'
            + '<summary><span class="mono">Install methods</span><i class="fa-solid fa-chevron-down" aria-hidden="true"></i></summary>'
            + '<div class="install-options"><p class="install-note">Choose the command that fits your workflow.</p>' + methods + '</div>'
            + '</details>';
    }

    function renderButtons(item) {
        if (!item.buttons || !item.buttons.length) {
            return '';
        }

        return '<div class="button-row" style="justify-content: flex-start; margin-top: 0.6rem;">'
            + item.buttons.map(function (button) {
                return '<a class="btn btn-ghost" href="' + button.href + '" target="_blank" rel="noopener noreferrer">' + button.label + '</a>';
            }).join('')
            + '</div>';
    }

    function renderCatalogItem(item, itemType) {
        const titleText = item.title;
        const titleMarkup = itemType === 'distros'
            ? '<h3><span class="pub pub-generic">' + titleText + '</span> <span class="pub-full-name">' + (item.subtitle || 'by Wednesware') + '</span></h3>'
            : '<h3><span class="pub pub-' + (item.color || 'generic') + '">' + titleText + '</span></h3>';

        const tagsMarkup = (item.tags || []).map(renderTag).join('');
        const installMarkup = renderInstallMethods(item);
        const buttonsMarkup = renderButtons(item);
        const statusClass = item.status === 'live' ? 'live' : 'wip';
        const statusText = item.statusLabel || (item.status === 'live' ? 'LIVE' : 'IN DEVELOPMENT');

        return '<article class="publication-item">'
            + '<div class="publication-main">'
            + tagsMarkup
            + titleMarkup
            + '<p class="publication-meta">' + item.description + '</p>'
            + installMarkup
            + buttonsMarkup
            + '</div>'
            + '<span class="status ' + statusClass + ' status-no-disappear">' + statusText + '</span>'
            + '<div class="publication-end">'
            + '<a class="publication-github" href="' + item.github + '"' + (item.github.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : ' rel="noopener noreferrer"') + '><i class="fa-solid fa-circle-info"></i> Read more</a>'
            + '</div>'
            + '</article>';
    }

    const catalogLists = document.querySelectorAll("[data-catalog-list]");
    catalogLists.forEach(function (listTarget) {
        const key = listTarget.dataset.catalogList;
        const catalog = window.WEDNESWARE_CATALOG && window.WEDNESWARE_CATALOG[key] ? window.WEDNESWARE_CATALOG[key] : [];
        if (!catalog.length) {
            return;
        }

        const emptyState = document.querySelector(listTarget.dataset.emptyState || (key === 'publications' ? '[data-publications-empty]' : key === 'projects' ? '[data-projects-empty]' : '[data-distros-empty]'));
        listTarget.insertAdjacentHTML('beforeend', catalog.map(function (item) {
            return renderCatalogItem(item, key);
        }).join(''));

        if (emptyState) {
            emptyState.hidden = true;
        }
    });

    const globalSearch = document.querySelector("[data-search-all]");
    if (globalSearch) {
        const results = document.querySelector("[data-home-results]");
        const entries = (window.WEDNESWARE_CATALOG && window.WEDNESWARE_CATALOG.all ? window.WEDNESWARE_CATALOG.all : []).map(function (item) {
            return {
                title: item.title,
                type: item.type,
                url: item.category === 'publications' ? 'publications.html' : item.category === 'projects' ? 'projects.html' : 'distros.html',
                github: item.github || (item.category === 'publications' ? 'publications.html' : item.category === 'projects' ? 'projects.html' : 'distros.html'),
                description: item.description,
                status: item.status
            };
        });

        function renderGlobalResults(query) {
            if (!results) {
                return;
            }

            const normalizedQuery = normalizeText(query);
            if (!normalizedQuery) {
                results.hidden = true;
                results.innerHTML = "";
                return;
            }

            const matches = entries
                .map(function (entry) {
                    const priority = getEntryPriority(entry, normalizedQuery);
                    return { entry: entry, ...priority };
                })
                .filter(function (item) {
                    return item.score > 0;
                })
                .sort(function (a, b) {
                    if (b.score !== a.score) {
                        return b.score - a.score;
                    }
                    if (b.statusPriority !== a.statusPriority) {
                        return b.statusPriority - a.statusPriority;
                    }
                    return 0;
                });

            if (!matches.length) {
                results.innerHTML = '<div class="search-empty">No matching Wednesware content found.</div>';
                results.hidden = false;
                return;
            }

            results.innerHTML = matches.map(function (item) {
                const targetUrl = item.entry.github || item.entry.url;
                return '<a class="search-result" href="' + targetUrl + '" target="_blank" rel="noopener noreferrer"><span class="search-result-type">' + item.entry.type + '</span><strong>' + item.entry.title + '</strong><span>' + item.entry.description + '</span></a>';
            }).join("");
            results.hidden = false;
        }

        globalSearch.addEventListener("input", function () {
            renderGlobalResults(globalSearch.value);
        });
    }

    const pageSearchInputs = document.querySelectorAll("[data-page-search]");
    pageSearchInputs.forEach(function (input) {
        const selector = input.dataset.pageSearch;
        const list = document.querySelector(input.dataset.pageList || ".publication-list");
        const emptyState = document.querySelector(input.dataset.emptyState || "[data-search-empty]");
        const originalItems = list ? Array.from(list.querySelectorAll(selector)) : [];

        const restoreOriginalOrder = function () {
            if (!list) {
                return;
            }

            originalItems.forEach(function (item) {
                if (item.parentNode === list) {
                    list.appendChild(item);
                }
            });
        };

        const updateSearch = function () {
            const query = normalizeText(input.value);
            const items = list ? Array.from(list.querySelectorAll(selector)) : [];
            let visibleCount = 0;

            if (!query) {
                items.forEach(function (item) {
                    item.style.display = "";
                    item.hidden = false;
                });
                restoreOriginalOrder();
                if (emptyState) {
                    emptyState.hidden = true;
                }
                return;
            }

            const rankedItems = items
                .map(function (item) {
                    const priority = getPageItemPriority(item, query);
                    return { item: item, ...priority };
                })
                .filter(function (entry) {
                    return entry.score > 0;
                })
                .sort(function (a, b) {
                    if (b.score !== a.score) {
                        return b.score - a.score;
                    }
                    if (b.statusPriority !== a.statusPriority) {
                        return b.statusPriority - a.statusPriority;
                    }
                    return 0;
                });

            items.forEach(function (item) {
                item.style.display = "none";
                item.hidden = true;
            });

            rankedItems.forEach(function (entry) {
                const item = entry.item;
                item.style.display = "";
                item.hidden = false;
                list.appendChild(item);
                visibleCount += 1;
            });

            if (emptyState) {
                emptyState.hidden = visibleCount !== 0;
            }
        };

        input.addEventListener("input", updateSearch);
        input.addEventListener("search", updateSearch);
        updateSearch();
    });

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
            fluorine: [255, 140, 0],
            sulfur: [0, 255, 94],
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