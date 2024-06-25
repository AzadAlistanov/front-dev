// <!-- Скрытие и раскрытие левого меню -->

function redirectTo(url) {
  window.location.href = url;
}
let hideBtn = document.querySelector('.showButton');
let showMenu = document.querySelector('.showMenu');

let leftMenu = document.querySelector('.left_bar_block');
let content = document.querySelector('.up_bar_and_content_block');
let hideH = document.querySelectorAll('.hstyle');


leftMenu.addEventListener('mouseover', () => {
  showMenu.classList.add('showMenu-active');

})
leftMenu.addEventListener('mouseout', () => {
  showMenu.classList.remove('showMenu-active');
})


hideBtn.addEventListener('click', () => {
  hideBtn.classList.toggle('hideBtn');
  content.classList.toggle('bigW');
  leftMenu.classList.toggle('menuLow');

  for (let count = 0; count < hideH.length; count++) {
    hideH[count].classList.toggle('hideH')
  }

})

// <!-- Логика для тоггла на вечное скрытие/раскрытие левого меню -->

let switchBtnLeft = document.querySelector('.switch-btnLeft');

switchBtnLeft.addEventListener('click', () => {
  showMenu.classList.remove('showMenu-active');
  hideBtn.classList.toggle('hideBtn');
  content.classList.toggle('bigW');
  leftMenu.classList.toggle('menuLow');
  if (switchBtnLeft.nextElementSibling.innerHTML === 'Открыть') {
    switchBtnLeft.nextElementSibling.innerHTML = 'Всегда скрыт';
  } else {
    switchBtnLeft.nextElementSibling.innerHTML = 'Открыть';
  }

  switchBtnLeft.querySelector('.open-menu').classList.toggle('closed-menu');


  for (let count = 0; count < hideH.length; count++) {
    hideH[count].classList.toggle('hideH');
  }

})


// элементы для отображения количества новых уведомлений и новых согласований, 

function getNotificationCalendar(notification = 0, calendar = 0) {
  let notificationCount = document.querySelector('.icon_notification').parentNode.querySelector('.icone-active');
  let calendarCount = document.querySelector('.icon_calendar').parentNode.querySelector('.icone-active');
  if (Number(notificationCount.textContent) > 0 || notification > 0) {
    notificationCount.style.display = 'block';
    if (notification > 0) {
      notificationCount.innerHTML = notification;
    }
  } else {
    notificationCount.style.display = 'none';
  }
  if (Number(calendarCount.textContent) > 0 || calendar > 0) {
    calendarCount.style.display = 'block';
    if (calendar > 0) {
      calendarCount.innerHTML = calendar;
    }
  } else {
    calendarCount.style.display = 'none';
  }
}
getNotificationCalendar(1, 4);

