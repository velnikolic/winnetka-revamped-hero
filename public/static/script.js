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
  const statsVisible = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 2 : 1;

  function updateStatsCarousel() {
    const cardWidth = statsCarousel.children[0].offsetWidth;
    const gap = window.innerWidth >= 768 ? 24 : 16;
    statsCarousel.style.transform = `translateX(-${statsIndex * (cardWidth + gap)}px)`;
  }

  statsPrev.addEventListener('click', function() {
    statsIndex = statsIndex === 0 ? statsTotal - statsVisible : statsIndex - 1;
    updateStatsCarousel();
  });

  statsNext.addEventListener('click', function() {
    statsIndex = statsIndex >= statsTotal - statsVisible ? 0 : statsIndex + 1;
    updateStatsCarousel();
  });

  // ============================================
  // Calendar Carousel
  // ============================================
  const calendarCarousel = document.getElementById('calendar-carousel');
  const calendarPrev = document.getElementById('calendar-prev');
  const calendarNext = document.getElementById('calendar-next');
  let calendarIndex = 0;
  const calendarTotal = calendarCarousel ? calendarCarousel.children.length : 6;

  function getCalendarVisible() {
    return window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 2 : 1;
  }

  function updateCalendarCarousel() {
    if (!calendarCarousel || !calendarCarousel.children.length) return;
    const cardWidth = calendarCarousel.children[0].offsetWidth;
    const gap = 16;
    calendarCarousel.style.transform = `translateX(-${calendarIndex * (cardWidth + gap)}px)`;
  }

  if (calendarPrev) {
    calendarPrev.addEventListener('click', function() {
      const visible = getCalendarVisible();
      calendarIndex = calendarIndex === 0 ? Math.max(0, calendarTotal - visible) : calendarIndex - 1;
      updateCalendarCarousel();
    });
  }

  if (calendarNext) {
    calendarNext.addEventListener('click', function() {
      const visible = getCalendarVisible();
      calendarIndex = calendarIndex >= calendarTotal - visible ? 0 : calendarIndex + 1;
      updateCalendarCarousel();
    });
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

  // ============================================
  // Handle Window Resize
  // ============================================
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
      updateStatsCarousel();
      updateCalendarCarousel();
    }, 100);
  });

});
