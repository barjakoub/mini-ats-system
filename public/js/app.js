const navbarScreen = window.matchMedia(`(max-width: 1024px)`);
console.info(`is on small screen: ${navbarScreen.matches}`);
/**
 * Getting the sidebar element:!
 */
const sidebarItems = document.querySelector(`#filter-items-container`);
console.info(`is sidebar items exists: ${typeof sidebarItems === `object`}`);
const smallSidebarItems = document.querySelector(`#small-filter-items-container`);
console.info(`is small sidebar has child nodes: ${!smallSidebarItems.hasChildNodes()}`);
/**
 * 
 * @param {Element} e MediaQueryList Object concist of two property, media and matches
 * @description This function used to move the filter items checkbox from large sidebar to small sidebar.
 */
function filterItemsLargeToSmall(e) {
    /* Getting large sidebar container element */
    const largeSidebarItems = document.querySelector(`#sidebar-items-container`);
    /**
     * check if screen width less than 1024px
     * PROBLEM: when the screen already on small screeen, the filter items didn't showed
     */
    if (e.matches && typeof sidebarItems === `object` && !smallSidebarItems.hasChildNodes()) {
        console.info(`the statement working on true .....`);
        smallSidebarItems.appendChild(sidebarItems);
    } else {
        console.info(`the statement working on false .....`);
        if (typeof sidebarItems === `object`) {
            largeSidebarItems.appendChild(sidebarItems);
        } else {
            console.info(`There is no element that need to be moved.:!`);
        }
    }
}
/* listen to the "change" event */
navbarScreen.addEventListener(`change`, filterItemsLargeToSmall);

/**
 * @description When the screen already small (max-width: 1024px)
 */
function sidebarOnSmall() {
    if (navbarScreen.matches && typeof sidebarItems === `object` && !smallSidebarItems.hasChildNodes()) {
        console.info(`moving the sidebar element from large screen .....`);
        smallSidebarItems.appendChild(sidebarItems);
        console.info(`moving completed:!`);
    }
}

sidebarOnSmall();

/**
 * Function called to html class
 */
// function hideElement() {
//     return true;
// }