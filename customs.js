// const menuItems = document.querySelectorAll('.menuitem');
// const backdroped = document.getElementsByClassName('.backdrop');

// menuItems.forEach((item) => {
//   const dropdown = item.querySelector('.sub-menu__dropdown');

//   if (dropdown) {
//     item.addEventListener('click', (e) => {
//       e.preventDefault(); // Prevent link from navigating if needed

//       // Optional: Close other dropdowns first
//       document.querySelectorAll('.sub-menu__dropdown.open').forEach(openDrop => {
//         if (openDrop !== dropdown) {
//           openDrop.classList.remove('open');
//         }
//       });

//       // Toggle the clicked item's dropdown
//       dropdown.classList.toggle('open');
//       backdroped.classList.toggle('active');
//     });
//   }
// });
//  window.addEventListener('scroll', function () {
//         const header = document.querySelector('header');
//         if (window.scrollY > 0) {
//             header.classList.add('scrolled');
//         } else {
//             header.classList.remove('scrolled');
//         }
//     });
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menuitem');
    const backdrop = document.querySelector('.backdrop');

    menuItems.forEach((item) => {
        const dropdown = item.querySelector('.sub-menu__dropdown');

        if (dropdown) {
            item.addEventListener('click', (e) => {
                e.preventDefault();

                // Close other dropdowns
                document.querySelectorAll('.sub-menu__dropdown.open').forEach(openDrop => {
                    if (openDrop !== dropdown) {
                        openDrop.classList.remove('open');
                    }
                });

                // Toggle current dropdown
                const isOpen = dropdown.classList.toggle('open');

                // Show/hide backdrop based on dropdown state
                if (isOpen) {
                    backdrop.classList.add('act');
                } else {
                    backdrop.classList.remove('act');
                }
            });
        }
    });

    // Close dropdown when backdrop is clicked
    backdrop.addEventListener('click', () => {
        document.querySelectorAll('.sub-menu__dropdown.open').forEach(openDrop => {
            openDrop.classList.remove('open');
        });
        backdrop.classList.remove('act');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.menuitem') && !e.target.closest('.sub-menu__dropdown')) {
            document.querySelectorAll('.sub-menu__dropdown.open').forEach(openDrop => {
                openDrop.classList.remove('open');
            });
            backdrop.classList.remove('act');
        }
    });
});
$(document).ready(function () {
    $('.slider__wrapper').slick({
        dots: false,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 0,
        speed: 3000,
        cssEase:'linear',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
var clicked = document.querySelector('.drop-btn');
var navbar = document.querySelector('.responsive-menu');
clicked.addEventListener('click', ()=>{
    navbar.classList.toggle('toggle');
    clicked.classList.toggle('change');
});