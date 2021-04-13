console.log(data);

window.addEventListener("load", () => {
    moreEvents();
    initIsotope();
    filterItems();
});

let iso = null;

const moreEvents = () => {
    const moreToggle = document.querySelector(".more_toggle");
    const moreMenu = document.querySelector(".more_navi");

    moreToggle.addEventListener("click", (ev) => {
        ev.stopPropagation();
        moreMenu.classList.add("opened");
    });
    window.addEventListener("click", (ev) => {
        if (!ev.path.includes(moreMenu)) {
            moreMenu.classList.remove("opened");
        }
    });
};

const initIsotope = () => {
    const workList = document.querySelector(".work_list");
    iso = new Isotope(workList, {
        percentPosition: true,
        layoutMode: "masonry",
    });
};

const filterItems = () => {
    const filterItems = document.querySelectorAll(".filter_item");
    filterItems.forEach((filterItem) => {
        filterItem.addEventListener("click", (ev) => {
            
            // filter
            const catToFilter = filterItem.dataset.category;
            if (catToFilter == "cat_all") {
                iso.arrange({ filter: "*" });
            } else {
                iso.arrange({ filter: "." + catToFilter });
            }

            // ui
            ev.stopPropagation();
            filterItems.forEach(filterItem_ => filterItem_.classList.remove("active"));
            filterItem.classList.add("active");
        });
    });
    
};
