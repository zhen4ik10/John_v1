//  Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });

    if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
    }
};

const activePage = window.location.pathname;
const menuLinks = document.querySelectorAll('ul li a').forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.toggle('active');
    };
});

// const menuList = document.getElementsByClassName("menu__list");
// const menuItem = document.getElementsByClassName("menu__item")
// for (var i = 0; i < menuItem.length; i++) {
//     menuItem[i].addEventListener("click", function () {
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     });
// }



// const menuLink = document.querySelector('.menu__link');
// if (menuLink) {
//     menuLink.addEventListener("click", function (e) {
//         menuLink.classList.toggle('active')
//     });

// }

// $(document).on('click', 'ul li', function () {
//     $(this).addClass('.active').siblings().removeClass('.active');
// });