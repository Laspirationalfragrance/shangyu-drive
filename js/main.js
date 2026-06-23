// === Navbar scroll highlight ===
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function updateActiveLink() {
    let current = '';
    const offset = 100;
    sections.forEach(function (section) {
      if (window.scrollY >= section.offsetTop - offset) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink();
})();

// === Mobile hamburger menu ===
(function () {
  var hamburger = document.querySelector('.hamburger');
  var navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    }
  });
})();

// === Form submission ===
(function () {
  var form = document.getElementById('reg-form');
  var success = document.getElementById('form-success');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form data
    var data = {
      name: document.getElementById('name').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      course: document.getElementById('course-select').value,
      message: document.getElementById('message').value.trim()
    };

    // Basic validation
    if (!data.name || !data.phone) {
      alert('请填写姓名和手机号');
      return;
    }

    if (!/^1\d{10}$/.test(data.phone)) {
      alert('请输入正确的手机号');
      return;
    }

    // TODO: Replace with real form submission endpoint
    // For now, show success message
    form.style.display = 'none';
    success.style.display = 'block';

    // Log data for debugging
    console.log('报名数据：', data);
  });
})();
