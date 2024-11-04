document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('.group');
  let activeDropdown = null;
  let timeout = null;

  function handleDesktopMenu() {
    menuItems.forEach(item => {
      const link = item.querySelector('a');
      const dropdown = item.querySelector('ul');

      if (dropdown) {
        item.addEventListener('mouseenter', () => {
          clearTimeout(timeout);
          if (activeDropdown && activeDropdown !== dropdown) {
            activeDropdown.classList.add('hidden');
          }
          dropdown.classList.remove('hidden');
          activeDropdown = dropdown;
        });

        item.addEventListener('mouseleave', () => {
          timeout = setTimeout(() => {
            dropdown.classList.add('hidden');
            activeDropdown = null;
          }, 200);
        });

        link.addEventListener('click', (e) => {
          if (window.innerWidth >= 768) {
            e.preventDefault();
            dropdown.classList.toggle('hidden');
          }
        });

        dropdown.querySelectorAll('a').forEach(dropdownItem => {
          dropdownItem.addEventListener('click', (e) => e.stopPropagation());
        });
      }
    });
  }

  function handleMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });

      document.addEventListener('click', (event) => {
        if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
          mobileMenu.classList.add('hidden');
        }
      });

      mobileMenu.querySelectorAll('.group > a').forEach(toggle => {
        toggle.addEventListener('click', function(e) {
          if (window.innerWidth < 768 && this.nextElementSibling && this.nextElementSibling.tagName === 'UL') {
            e.preventDefault();
            this.nextElementSibling.classList.toggle('hidden');
          }
        });
      });
    }
  }

  function handleThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');

    function toggleTheme() {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    }

    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }

    if (mobileThemeToggle) {
      mobileThemeToggle.addEventListener('click', toggleTheme);
    }
  }

  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
  }

  handleDesktopMenu();
  handleMobileMenu();
  handleThemeToggle();
});
