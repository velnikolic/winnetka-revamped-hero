// ============================================
// Avoca School District 37 - Static JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  
  // ============================================
  // Header Scroll Behavior
  // ============================================
  const header = document.getElementById('header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ============================================
  // Menu Overlay
  // ============================================
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('close-btn');
  const menuOverlay = document.getElementById('menu-overlay');

  menuBtn.addEventListener('click', function() {
    menuOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', function() {
    menuOverlay.classList.remove('open');
    document.body.style.overflow = '';
  });

  // Close menu on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menuOverlay.classList.contains('open')) {
      menuOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // ============================================
  // Stats Carousel
  // ============================================
  const statsCarousel = document.getElementById('stats-carousel');
  const statsPrev = document.getElementById('stats-prev');
  const statsNext = document.getElementById('stats-next');
  let statsIndex = 0;
  const statsTotal = 6;
  let statsVisible = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 2 : 1;
  let updateStatsCarousel = null;

  if (statsCarousel && statsPrev && statsNext) {
    updateStatsCarousel = function() {
      if (!statsCarousel || !statsCarousel.children.length) return;
      const cardWidth = statsCarousel.children[0].offsetWidth;
      const gap = window.innerWidth >= 768 ? 24 : 16;
      statsCarousel.style.transform = `translateX(-${statsIndex * (cardWidth + gap)}px)`;
    };

    statsPrev.addEventListener('click', function() {
      statsVisible = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 2 : 1;
      statsIndex = statsIndex === 0 ? statsTotal - statsVisible : statsIndex - 1;
      updateStatsCarousel();
    });

    statsNext.addEventListener('click', function() {
      statsVisible = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 2 : 1;
      statsIndex = statsIndex >= statsTotal - statsVisible ? 0 : statsIndex + 1;
      updateStatsCarousel();
    });

    // Initial layout
    updateStatsCarousel();
  }

  // ============================================
  // Student Stories Carousel
  // ============================================
  const stories = [
    {
      name: "Emma",
      grade: "8th Grade",
      quote: "Avoca has taught me that learning is about asking questions and exploring new ideas. My teachers here really push me to think beyond the textbook.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop"
    },
    {
      name: "Marcus",
      grade: "7th Grade",
      quote: "I've made friendships here that I know will last a lifetime. The sense of community at Avoca makes it feel like a second home.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
    },
    {
      name: "Sofia",
      grade: "6th Grade",
      quote: "The arts program here is incredible. Whether it's music, theater, or visual arts, there's always a way to express yourself and grow creatively.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop"
    }
  ];

  let storyIndex = 0;
  const storyName = document.getElementById('story-name');
  const storyGrade = document.getElementById('story-grade');
  const storyQuote = document.getElementById('story-quote');
  const storyImg = document.getElementById('story-img');
  const storyDots = document.querySelectorAll('.story-dot');
  const storyPrev = document.getElementById('story-prev');
  const storyNext = document.getElementById('story-next');

  if (storyName && storyGrade && storyQuote && storyImg && storyDots.length && storyPrev && storyNext) {
    function updateStory() {
      const story = stories[storyIndex];
      storyName.textContent = story.name;
      storyGrade.textContent = story.grade;
      storyQuote.textContent = `"${story.quote}"`;
      storyImg.src = story.image;
      storyImg.alt = story.name;

      storyDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === storyIndex);
      });
    }

    storyPrev.addEventListener('click', function() {
      storyIndex = (storyIndex - 1 + stories.length) % stories.length;
      updateStory();
    });

    storyNext.addEventListener('click', function() {
      storyIndex = (storyIndex + 1) % stories.length;
      updateStory();
    });

    storyDots.forEach((dot, index) => {
      dot.addEventListener('click', function() {
        storyIndex = index;
        updateStory();
      });
    });

    // Initialize with first story
    updateStory();
  }

  // ============================================
  // Handle Window Resize
  // ============================================
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
      if (typeof updateStatsCarousel === 'function') updateStatsCarousel();
    }, 100);
  });

  // ============================================
  // FAQ Accordion
  // ============================================
  function initFaqAccordions() {
    const faqContainers = document.querySelectorAll('.faq-accordion, .faq-list');
    faqContainers.forEach(function(accordion) {
      const items = accordion.querySelectorAll('.faq-item');
      items.forEach(function(item) {
        const question = item.querySelector('.faq-question');
        if (question) {
          // Remove existing listeners by cloning
          const newQuestion = question.cloneNode(true);
          question.parentNode.replaceChild(newQuestion, question);
          
          newQuestion.style.cursor = 'pointer';
          newQuestion.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const wasOpen = item.classList.contains('open');
            // Close all items in this accordion
            items.forEach(function(i) { i.classList.remove('open'); });
            // Open clicked item if it wasn't open
            if (!wasOpen) {
              item.classList.add('open');
            }
          });
        }
      });
    });
  }
  initFaqAccordions();

  // ============================================
  // Staff Directory Filter
  // ============================================
  const staffSearchInput = document.getElementById('staff-search-input');
  const staffCards = document.querySelectorAll('.staff-card');
  const staffCategories = document.querySelectorAll('.staff-category');
  const staffFilterBtns = document.querySelectorAll('.staff-filter-btns .filter-btn');

  if (staffSearchInput) {
    staffSearchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      staffCards.forEach(function(card) {
        const name = card.querySelector('h3').textContent.toLowerCase();
        const title = card.querySelector('.staff-title').textContent.toLowerCase();
        const department = card.querySelector('.staff-department').textContent.toLowerCase();
        if (name.includes(searchTerm) || title.includes(searchTerm) || department.includes(searchTerm)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  if (staffFilterBtns.length > 0) {
    staffFilterBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        staffFilterBtns.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        
        staffCategories.forEach(function(category) {
          if (filter === 'all' || category.dataset.category === filter) {
            category.style.display = 'block';
          } else {
            category.style.display = 'none';
          }
        });
      });
    });
  }

  // ============================================
  // Clubs Filter
  // ============================================
  const clubsFilterBtns = document.querySelectorAll('.clubs-filter .filter-btn');
  const clubCards = document.querySelectorAll('.club-card');

  if (clubsFilterBtns.length > 0) {
    clubsFilterBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        clubsFilterBtns.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        
        clubCards.forEach(function(card) {
          if (filter === 'all' || card.dataset.category === filter) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // ============================================
  // Sidemenu Group Toggle
  // ============================================
  const sidemenuGroupToggles = document.querySelectorAll('.sidemenu-group-toggle');
  sidemenuGroupToggles.forEach(function(toggle) {
    toggle.addEventListener('click', function() {
      const group = this.dataset.group;
      const links = document.getElementById(group);
      const wasActive = this.classList.contains('active');
      
      // Close all groups
      sidemenuGroupToggles.forEach(function(t) { t.classList.remove('active'); });
      document.querySelectorAll('.sidemenu-links').forEach(function(l) { l.classList.remove('active'); });
      
      // Open clicked group if it wasn't open
      if (!wasActive && links) {
        this.classList.add('active');
        links.classList.add('active');
      }
    });
  });

  // ============================================
  // Sidemenu Toggle (Collapse/Expand)
  // ============================================
  const sidemenuToggle = document.getElementById('sidemenu-toggle');
  const sidemenu = document.getElementById('sidemenu');
  
  if (sidemenuToggle && sidemenu) {
    sidemenuToggle.addEventListener('click', function() {
      sidemenu.classList.toggle('collapsed');
    });
  }

  // ============================================
  // Content Sliders
  // ============================================
  document.querySelectorAll('.content-slider, .featured-slider').forEach(function(slider) {
    const track = slider.querySelector('.slider-track, .featured-slider-track');
    const slides = track ? track.children : [];
    const prevBtn = slider.querySelector('.slider-prev, .featured-prev');
    const nextBtn = slider.querySelector('.slider-next, .featured-next');
    const dots = slider.querySelectorAll('.slider-dot, .featured-dot');
    let currentIndex = 0;

    function updateSlider() {
      if (track) track.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach(function(dot, i) {
        dot.classList.toggle('active', i === currentIndex);
      });
    }

    if (prevBtn) prevBtn.addEventListener('click', function() {
      currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
      updateSlider();
    });

    if (nextBtn) nextBtn.addEventListener('click', function() {
      currentIndex = currentIndex >= slides.length - 1 ? 0 : currentIndex + 1;
      updateSlider();
    });

    dots.forEach(function(dot, i) {
      dot.addEventListener('click', function() {
        currentIndex = i;
        updateSlider();
      });
    });
  });

  // ============================================
  // Calendar Widget
  // ============================================
  const calendarGrid = document.getElementById('calendar-grid');
  const monthYearDisplay = document.getElementById('calendar-month-year');
  const calPrevBtn = document.getElementById('cal-prev-month');
  const calNextBtn = document.getElementById('cal-next-month');

  if (calendarGrid) {
    let currentDate = new Date();
    const eventDays = [12, 15, 18, 20, 23]; // Sample event days

    function renderCalendar() {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const today = new Date();
      
      monthYearDisplay.textContent = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
      
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const daysInPrevMonth = new Date(year, month, 0).getDate();
      
      calendarGrid.innerHTML = '';
      
      // Previous month days
      for (let i = firstDay - 1; i >= 0; i--) {
        const day = document.createElement('div');
        day.className = 'calendar-day other-month';
        day.textContent = daysInPrevMonth - i;
        calendarGrid.appendChild(day);
      }
      
      // Current month days
      for (let i = 1; i <= daysInMonth; i++) {
        const day = document.createElement('div');
        day.className = 'calendar-day';
        day.textContent = i;
        
        if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
          day.classList.add('today');
        }
        if (eventDays.includes(i)) {
          day.classList.add('has-event');
        }
        calendarGrid.appendChild(day);
      }
      
      // Next month days
      const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;
      const remainingDays = totalCells - (firstDay + daysInMonth);
      for (let i = 1; i <= remainingDays; i++) {
        const day = document.createElement('div');
        day.className = 'calendar-day other-month';
        day.textContent = i;
        calendarGrid.appendChild(day);
      }
    }

    if (calPrevBtn) calPrevBtn.addEventListener('click', function() {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar();
    });

    if (calNextBtn) calNextBtn.addEventListener('click', function() {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar();
    });

    renderCalendar();
  }

  // ============================================
  // Event Filters
  // ============================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const eventItems = document.querySelectorAll('.event-item');

  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      filterBtns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      
      const filter = btn.dataset.filter;
      eventItems.forEach(function(item) {
        if (filter === 'all' || item.dataset.type === filter) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // ============================================
  // News Category Filter
  // ============================================
  const categoryBtns = document.querySelectorAll('.category-btn');
  const newsCards = document.querySelectorAll('.news-card');

  categoryBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      categoryBtns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      
      const category = btn.dataset.category;
      newsCards.forEach(function(card) {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ============================================
  // Contact Form
  // ============================================
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }

});
