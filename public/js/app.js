window.onscroll = () => {
    stickSidebar()
}

const sidebar = document.getElementById('sidebar-filtering');
const navbar = document.getElementById('nav-bar');
const sidebarStick = sidebar.offsetTop;
const navbarStick = navbar.offsetTop;

function stickSidebar() {
    if (window.scrollY >= sidebarStick) {
        sidebar.classList.add('sidebar-sticky');
    } else {
        sidebar.classList.remove('sidebar-sticky');
    }
}