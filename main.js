// Бургер

const iconMenu = document.querySelector ('.menu_icon');
if (iconMenu) {
  const menuBody = document.querySelector ('.menu_body');
  iconMenu.addEventListener ("click", function (a) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

// Языковая кнопка

const landMenu = document.querySelector ('.land_btn_menu__btn');
if (landMenu) {
  const dropdownMenu = document.querySelector ('.dropdown-menu');
  landMenu.addEventListener ("click", function (a) {
    landMenu.classList.toggle('dropdownMenu_active');
    dropdownMenu.classList.toggle('dropdownMenu_active');
  });
}

// Accordion



const accordion = document.querySelector ('.accordion-item');
if (accordion) {
  const menuBody = document.querySelector ('.accordion-item__content');
  accordion.addEventListener ("click", function (a) {
    accordion.classList.toggle('accordion-item--active');
    menuBody.classList.toggle('accordion-item--active');
  });
}




// document.querySelectorAll('accordion-item_trigger').forEach((item) =>
//   item.addEventListener('click', () => {
//       const parent = item.parentNode;

//       if (parent.classList.contains('accordion-item--active')) {
//         parent.classList.remove('accordion-item--active');
//       } else {
//         document
//           .querySelectorAll('accordion-item')
//           .forEach((child) => child.classList.remove('accordion-item--active'))

//           parent.classList.add('accordion-item--active');
//       }
      
//   })
// )