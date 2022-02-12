window.addEventListener('load', function () {
  (function () {
    const ibg = document.querySelectorAll('.ibg');
    ibg.forEach(function (item) {
      if (item.querySelector('img').length > 0) {
        item.css('background-image', 'url("' + item.querySelector('img').attr('src') + '")');
      }
    });
  })();

  const wow = new WOW({ mobile: false });

  wow.init();

  const modalRegistrationBack    = document.querySelector('.modal-register');
  const closeRegistration        = document.querySelectorAll('.modal-close');
  const signInButton             = document.getElementById('signIn');
  const signUpButton             = document.getElementById('signUp');
  const tabs                     = document.querySelectorAll('.tabs-menu');

  const showRegistration = (element) => {
    modalRegistrationBack.classList.add('show');
    setTimeout(function () {
      document.querySelector(element).classList.add('showed');
    }, 200);
    document.body.style.width = `${document.documentElement.clientWidth}px`;
    document.body.classList.add('lock');
  };

  const hideRegistration = () => {
    document.querySelector('.modal-register .showed').classList.remove('showed');
    setTimeout(function () {
      modalRegistrationBack.classList.remove('show');
    }, 200);
    document.body.classList.remove('lock');
    document.body.style.width = `auto`;
  };

  signInButton.addEventListener('click', () => {
    showRegistration('.form-sign-in');
  });

  signUpButton.addEventListener('click', () => {
    showRegistration('.form-sign-up');
  });

  closeRegistration.forEach((item) => {
    item.addEventListener('click', hideRegistration);
  });

  const switchTabs = (tab) => {
    tab.closest('.tabs-menu').querySelector('.active').classList.remove('active');
    tab.parentElement.classList.toggle('active');
  };

  tabs.forEach((item) => {
    item.addEventListener('click', (e) => {
      switchTabs(e.target);
    });
  })
});
