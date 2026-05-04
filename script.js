(function () {
  'use strict';

  // Ensure scroll position resets to the top on every page refresh
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);

  // (Removed Lenis smooth scroll to fix JS freeze/empty screen issue)

  /* ============================================
     PRELOADER
     ============================================ */
  function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader && preloader.style.opacity !== '0') {
      preloader.style.opacity = '0';
      preloader.style.visibility = 'hidden';
      document.body.style.overflow = ''; 
    }
  }
  
  window.addEventListener('load', () => setTimeout(hidePreloader, 2200));
  // Fallback to ensure it never blocks indefinitely
  setTimeout(hidePreloader, 2800);

  /* ============================================
     DATA
     ============================================ */
  const skills = [
    { name: 'UI/UX Design', category: 'Design', icon: 'fas fa-object-group' },
    { name: 'Graphic Design', category: 'Design', icon: 'fas fa-palette' },
    { name: 'Digital Marketing', category: 'Marketing', icon: 'fas fa-bullhorn' },
    { name: 'Market Research', category: 'Research', icon: 'fas fa-search' },
    { name: 'Lead Generation', category: 'Marketing', icon: 'fas fa-magnet' },
    { name: 'Email Marketing', category: 'Marketing', icon: 'fas fa-envelope-open-text' },
    { name: 'Google Ads & Analytics', category: 'Tools', icon: 'fas fa-chart-line' },
    { name: 'Figma', category: 'Tools', icon: 'fab fa-figma' },
    { name: 'Adobe Photoshop', category: 'Tools', icon: 'fas fa-image' },
    { name: 'Adobe Illustrator', category: 'Tools', icon: 'fas fa-pen-nib' },
    { name: 'Premiere Pro', category: 'Tools', icon: 'fas fa-video' },
    { name: 'WordPress', category: 'Tools', icon: 'fab fa-wordpress' }
  ];

  const projects = [
  {
    "title": "Hireglint Framework Test",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Creative Marketing Poster for HireGlint",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/HireGlint_Framework_Test.png"
  },
  {
    "title": "Hireglint Ai Resume Screening",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Creative Marketing Poster for HireGlint",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/HireGlint_AI_Resume_Screening.jpg"
  },
  {
    "title": "Hireglint Flutter Interviews",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Creative Marketing Poster for HireGlint",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/HireGlint_Flutter_Interviews.png"
  },
  {
    "title": "Hireglint Ai Nexa Interviewer",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Creative Marketing Poster for HireGlint",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/HireGlint_AI_NEXA_Interviewer.png"
  },
  {
    "title": "11",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: 11.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/11.jpg"
  },
  {
    "title": "12",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: 12.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/12.jpg"
  },
  {
    "title": "13",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: 13.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/13.jpg"
  },
  {
    "title": "15",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: 15.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/15.jpg"
  },
  {
    "title": "2",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: 2.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/2.jpg"
  },
  {
    "title": "Branding",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: branding.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/branding.jpg"
  },
  {
    "title": "Business",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: BUSINESS.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/BUSINESS.jpg"
  },
  {
    "title": "Choose",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: CHOOSE.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/CHOOSE.jpg"
  },
  {
    "title": "Digital Marketing Poster 1",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: Digital Marketing Poster 1.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/Digital Marketing Poster 1.jpg"
  },
  {
    "title": "Engagement",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: engagement.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/engagement.jpg"
  },
  {
    "title": "Eurokids 8",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: Eurokids 8.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/Eurokids 8.jpg"
  },
  {
    "title": "Eurokids 9",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: Eurokids 9.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/Eurokids 9.jpg"
  },
  {
    "title": "Eurokids5",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: eurokids5.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/eurokids5.jpg"
  },
  {
    "title": "Eurokids6",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: eurokids6.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/eurokids6.jpg"
  },
  {
    "title": "Eurokids7",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: Eurokids7.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/Eurokids7.jpg"
  },
  {
    "title": "Fix",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: FIX.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/FIX.jpg"
  },
  {
    "title": "Friday",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: friday.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/friday.jpg"
  },
  {
    "title": "Gandhi Jayanti Post",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: gandhi jayanti post.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/gandhi jayanti post.jpg"
  },
  {
    "title": "Ganesh Chaturthi",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: ganesh chaturthi.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/ganesh chaturthi.jpg"
  },
  {
    "title": "Img",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: img.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/img.jpg"
  },
  {
    "title": "Img0.2",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: img0.2.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/img0.2.jpg"
  },
  {
    "title": "Img_11",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: img_11.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/img_11.jpg"
  },
  {
    "title": "Img_2",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: img_2.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/img_2.jpg"
  },
  {
    "title": "Img_3",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: img_3.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/img_3.jpg"
  },
  {
    "title": "Keep In Touch",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: keep in touch.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/keep in touch.jpg"
  },
  {
    "title": "Krishna Janmashtami",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: krishna janmashtami.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/krishna janmashtami.jpg"
  },
  {
    "title": "Like Template",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: LIKE template.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/LIKE template.jpg"
  },
  {
    "title": "Logo1",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: logo1.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/logo1.jpg"
  },
  {
    "title": "Medicine",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: medicine.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/medicine.jpg"
  },
  {
    "title": "Milad Un Nabi Post 1",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: milad un nabi post 1.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/milad un nabi post 1.jpg"
  },
  {
    "title": "Minion",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: minion.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/minion.jpg"
  },
  {
    "title": "New Logo 1",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: new logo 1.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/new logo 1.jpg"
  },
  {
    "title": "Post 11",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: post 11.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/post 11.jpg"
  },
  {
    "title": "Post 12",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: post 12.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/post 12.jpg"
  },
  {
    "title": "Post1",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: post1.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/post1.jpg"
  },
  {
    "title": "Post2",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: post2.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/post2.jpg"
  },
  {
    "title": "Post3",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: post3.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/post3.jpg"
  },
  {
    "title": "Post4",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: post4.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/post4.jpg"
  },
  {
    "title": "Poster 1111",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: poster 1111.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/poster 1111.jpg"
  },
  {
    "title": "Poster 3333",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: poster 3333.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/poster 3333.jpg"
  },
  {
    "title": "Poster11",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: poster11.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/poster11.jpg"
  },
  {
    "title": "Poster2222",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: poster2222.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/poster2222.jpg"
  },
  {
    "title": "Poster223",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: poster223.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/poster223.jpg"
  },
  {
    "title": "Puzzle",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: PUZZLE.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/PUZZLE.jpg"
  },
  {
    "title": "Quotes 1",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: quotes 1.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/quotes 1.jpg"
  },
  {
    "title": "Quotes2",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: quotes2.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/quotes2.jpg"
  },
  {
    "title": "Search",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: search.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/search.jpg"
  },
  {
    "title": "Social Leader",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: social leader.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/social leader.jpg"
  },
  {
    "title": "Social Media 1",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: social media 1.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/social media 1.jpg"
  },
  {
    "title": "Social Media",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: social media.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/social media.jpg"
  },
  {
    "title": "Sunday Post",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: sunday post.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/sunday post.jpg"
  },
  {
    "title": "Tea Time",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: tea time.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/tea time.jpg"
  },
  {
    "title": "Teachers Day",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: teachers day.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/teachers day.jpg"
  },
  {
    "title": "Then Vs Now",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: then vs now.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/then vs now.jpg"
  },
  {
    "title": "Time",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: time.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/time.jpg"
  },
  {
    "title": "Week",
    "category": "posters",
    "catLabel": "Posters & Icons",
    "tags": [
      "Graphic Design",
      "Poster"
    ],
    "desc": "Graphic design artwork: week.jpg",
    "caseStudy": "<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.",
    "img": "Posters/week.jpg"
  },
  {
    "title": "1128 X 191",
    "category": "banners",
    "catLabel": "LinkedIn Banners",
    "tags": [
      "Branding",
      "Banner"
    ],
    "desc": "Professional banner design for web and LinkedIn profiles.",
    "caseStudy": "<strong>Overview:</strong><br>Designed an impactful horizontal banner focusing on employer branding and professional presence.<br><br><strong>Design Approach:</strong><br>Ensured negative space for profile elements and used a balanced layout so text remains highly readable on both desktop and mobile devices.",
    "img": "banners/1128 x 191.jpg"
  },
  {
    "title": "Hireglint 5",
    "category": "banners",
    "catLabel": "LinkedIn Banners",
    "tags": [
      "Branding",
      "Banner"
    ],
    "desc": "Professional banner design for web and LinkedIn profiles.",
    "caseStudy": "<strong>Overview:</strong><br>Designed an impactful horizontal banner focusing on employer branding and professional presence.<br><br><strong>Design Approach:</strong><br>Ensured negative space for profile elements and used a balanced layout so text remains highly readable on both desktop and mobile devices.",
    "img": "banners/Hireglint 5.jpg"
  },
  {
    "title": "Ai Programming",
    "category": "carousel",
    "catLabel": "Carousel Posts",
    "tags": [
      "Content Marketing",
      "Carousel"
    ],
    "desc": "Educational and engaging multi-slide carousel.",
    "caseStudy": "<strong>Overview:</strong><br>A multi-slide carousel crafted to deliver high-value information efficiently and maximize user engagement metrics.<br><br><strong>Design Approach:</strong><br>Maintained a consistent grid and progressive disclosure across slides to encourage users to swipe through to the end.",
    "img": "Carousel/AI Programming/1.jpg"
  },
  {
    "title": "Bring Everything Into One Platform With Hireglint Ai",
    "category": "carousel",
    "catLabel": "Carousel Posts",
    "tags": [
      "Content Marketing",
      "Carousel"
    ],
    "desc": "Educational and engaging multi-slide carousel.",
    "caseStudy": "<strong>Overview:</strong><br>A multi-slide carousel crafted to deliver high-value information efficiently and maximize user engagement metrics.<br><br><strong>Design Approach:</strong><br>Maintained a consistent grid and progressive disclosure across slides to encourage users to swipe through to the end.",
    "img": "Carousel/Bring Everything Into One Platform with HireGlint AI/1.jpg"
  },
  {
    "title": "Carousel 2",
    "category": "carousel",
    "catLabel": "Carousel Posts",
    "tags": [
      "Content Marketing",
      "Carousel"
    ],
    "desc": "Educational and engaging multi-slide carousel.",
    "caseStudy": "<strong>Overview:</strong><br>A multi-slide carousel crafted to deliver high-value information efficiently and maximize user engagement metrics.<br><br><strong>Design Approach:</strong><br>Maintained a consistent grid and progressive disclosure across slides to encourage users to swipe through to the end.",
    "img": "Carousel/carousel 2/1.jpg"
  },
  {
    "title": "Carousel Post 1",
    "category": "carousel",
    "catLabel": "Carousel Posts",
    "tags": [
      "Content Marketing",
      "Carousel"
    ],
    "desc": "Educational and engaging multi-slide carousel.",
    "caseStudy": "<strong>Overview:</strong><br>A multi-slide carousel crafted to deliver high-value information efficiently and maximize user engagement metrics.<br><br><strong>Design Approach:</strong><br>Maintained a consistent grid and progressive disclosure across slides to encourage users to swipe through to the end.",
    "img": "Carousel/Carousel Post 1/1.jpg"
  },
  {
    "title": "Hiring Ai Developers Don\u2019T Trust Just The Resume",
    "category": "carousel",
    "catLabel": "Carousel Posts",
    "tags": [
      "Content Marketing",
      "Carousel"
    ],
    "desc": "Educational and engaging multi-slide carousel.",
    "caseStudy": "<strong>Overview:</strong><br>A multi-slide carousel crafted to deliver high-value information efficiently and maximize user engagement metrics.<br><br><strong>Design Approach:</strong><br>Maintained a consistent grid and progressive disclosure across slides to encourage users to swipe through to the end.",
    "img": "Carousel/Hiring AI Developers Don\u2019t Trust Just the Resume/1.jpg"
  },
  {
    "title": "Myths About Ai Hiring \u2014 And What Actually Works",
    "category": "carousel",
    "catLabel": "Carousel Posts",
    "tags": [
      "Content Marketing",
      "Carousel"
    ],
    "desc": "Educational and engaging multi-slide carousel.",
    "caseStudy": "<strong>Overview:</strong><br>A multi-slide carousel crafted to deliver high-value information efficiently and maximize user engagement metrics.<br><br><strong>Design Approach:</strong><br>Maintained a consistent grid and progressive disclosure across slides to encourage users to swipe through to the end.",
    "img": "Carousel/Myths About AI Hiring \u2014 And What Actually Works/1.jpg"
  },
  {
    "title": "The Challenge Isn\u2019T Hiring. It\u2019S Evaluating Candidates Consistently",
    "category": "carousel",
    "catLabel": "Carousel Posts",
    "tags": [
      "Content Marketing",
      "Carousel"
    ],
    "desc": "Educational and engaging multi-slide carousel.",
    "caseStudy": "<strong>Overview:</strong><br>A multi-slide carousel crafted to deliver high-value information efficiently and maximize user engagement metrics.<br><br><strong>Design Approach:</strong><br>Maintained a consistent grid and progressive disclosure across slides to encourage users to swipe through to the end.",
    "img": "Carousel/The Challenge Isn\u2019t Hiring. It\u2019s Evaluating Candidates Consistently/1.jpg"
  },
  {
    "title": "You'Re Hiring Ai Engineers Wrong",
    "category": "carousel",
    "catLabel": "Carousel Posts",
    "tags": [
      "Content Marketing",
      "Carousel"
    ],
    "desc": "Educational and engaging multi-slide carousel.",
    "caseStudy": "<strong>Overview:</strong><br>A multi-slide carousel crafted to deliver high-value information efficiently and maximize user engagement metrics.<br><br><strong>Design Approach:</strong><br>Maintained a consistent grid and progressive disclosure across slides to encourage users to swipe through to the end.",
    "img": "Carousel/You're hiring AI Engineers wrong/Page 1.jpg"
  },
  {
    "title": "Ai Role Landscape (1)",
    "category": "video",
    "catLabel": "Landscape Video",
    "tags": [
      "Video Editing",
      "Landscape"
    ],
    "desc": "Fast-paced, engaging short-form video content.",
    "caseStudy": "<strong>Overview:</strong><br>High-retention video content crafted with precision editing to maximize audience watch time.<br><br><strong>Editing Approach:</strong><br>Utilized dynamic cuts, engaging text pop-ups, and audio syncing to keep the viewer hooked from the first second.",
    "img": "Reel/Landscape/Ai role Landscape (1).mp4"
  },
  {
    "title": "Campus Drive",
    "category": "video",
    "catLabel": "Landscape Video",
    "tags": [
      "Video Editing",
      "Landscape"
    ],
    "desc": "Fast-paced, engaging short-form video content.",
    "caseStudy": "<strong>Overview:</strong><br>High-retention video content crafted with precision editing to maximize audience watch time.<br><br><strong>Editing Approach:</strong><br>Utilized dynamic cuts, engaging text pop-ups, and audio syncing to keep the viewer hooked from the first second.",
    "img": "Reel/Landscape/Campus drive.mp4"
  },
  {
    "title": "Flutter Hiring (2)",
    "category": "video",
    "catLabel": "Landscape Video",
    "tags": [
      "Video Editing",
      "Landscape"
    ],
    "desc": "Fast-paced, engaging short-form video content.",
    "caseStudy": "<strong>Overview:</strong><br>High-retention video content crafted with precision editing to maximize audience watch time.<br><br><strong>Editing Approach:</strong><br>Utilized dynamic cuts, engaging text pop-ups, and audio syncing to keep the viewer hooked from the first second.",
    "img": "Reel/Landscape/Flutter hiring (2).mp4"
  },
  {
    "title": "Framework Landscape",
    "category": "video",
    "catLabel": "Landscape Video",
    "tags": [
      "Video Editing",
      "Landscape"
    ],
    "desc": "Fast-paced, engaging short-form video content.",
    "caseStudy": "<strong>Overview:</strong><br>High-retention video content crafted with precision editing to maximize audience watch time.<br><br><strong>Editing Approach:</strong><br>Utilized dynamic cuts, engaging text pop-ups, and audio syncing to keep the viewer hooked from the first second.",
    "img": "Reel/Landscape/Framework Landscape.mp4"
  },
  {
    "title": "Hireglint Ai ",
    "category": "video",
    "catLabel": "Landscape Video",
    "tags": [
      "Video Editing",
      "Landscape"
    ],
    "desc": "Fast-paced, engaging short-form video content.",
    "caseStudy": "<strong>Overview:</strong><br>High-retention video content crafted with precision editing to maximize audience watch time.<br><br><strong>Editing Approach:</strong><br>Utilized dynamic cuts, engaging text pop-ups, and audio syncing to keep the viewer hooked from the first second.",
    "img": "Reel/Landscape/HireGlint AI .mp4"
  },
  {
    "title": "Proctoring Landscape ",
    "category": "video",
    "catLabel": "Landscape Video",
    "tags": [
      "Video Editing",
      "Landscape"
    ],
    "desc": "Fast-paced, engaging short-form video content.",
    "caseStudy": "<strong>Overview:</strong><br>High-retention video content crafted with precision editing to maximize audience watch time.<br><br><strong>Editing Approach:</strong><br>Utilized dynamic cuts, engaging text pop-ups, and audio syncing to keep the viewer hooked from the first second.",
    "img": "Reel/Landscape/Proctoring landscape .mp4"
  },
  {
    "title": "Ai Question ",
    "category": "video",
    "catLabel": "Portrait Video",
    "tags": [
      "Video Editing",
      "Portrait"
    ],
    "desc": "Fast-paced, engaging short-form video content.",
    "caseStudy": "<strong>Overview:</strong><br>High-retention video content crafted with precision editing to maximize audience watch time.<br><br><strong>Editing Approach:</strong><br>Utilized dynamic cuts, engaging text pop-ups, and audio syncing to keep the viewer hooked from the first second.",
    "img": "Reel/Portrait/AI question .mp4"
  },
  {
    "title": "Ai Role Portrait  (1)",
    "category": "video",
    "catLabel": "Portrait Video",
    "tags": [
      "Video Editing",
      "Portrait"
    ],
    "desc": "Fast-paced, engaging short-form video content.",
    "caseStudy": "<strong>Overview:</strong><br>High-retention video content crafted with precision editing to maximize audience watch time.<br><br><strong>Editing Approach:</strong><br>Utilized dynamic cuts, engaging text pop-ups, and audio syncing to keep the viewer hooked from the first second.",
    "img": "Reel/Portrait/AI role portrait  (1).mp4"
  },
  {
    "title": "Framework (1)",
    "category": "video",
    "catLabel": "Portrait Video",
    "tags": [
      "Video Editing",
      "Portrait"
    ],
    "desc": "Fast-paced, engaging short-form video content.",
    "caseStudy": "<strong>Overview:</strong><br>High-retention video content crafted with precision editing to maximize audience watch time.<br><br><strong>Editing Approach:</strong><br>Utilized dynamic cuts, engaging text pop-ups, and audio syncing to keep the viewer hooked from the first second.",
    "img": "Reel/Portrait/framework (1).mp4"
  },
  {
    "title": "Hireglint  (1)",
    "category": "video",
    "catLabel": "Portrait Video",
    "tags": [
      "Video Editing",
      "Portrait"
    ],
    "desc": "Fast-paced, engaging short-form video content.",
    "caseStudy": "<strong>Overview:</strong><br>High-retention video content crafted with precision editing to maximize audience watch time.<br><br><strong>Editing Approach:</strong><br>Utilized dynamic cuts, engaging text pop-ups, and audio syncing to keep the viewer hooked from the first second.",
    "img": "Reel/Portrait/Hireglint  (1).mp4"
  },
  {
    "title": "Livefeed Reel (2)",
    "category": "video",
    "catLabel": "Portrait Video",
    "tags": [
      "Video Editing",
      "Portrait"
    ],
    "desc": "Fast-paced, engaging short-form video content.",
    "caseStudy": "<strong>Overview:</strong><br>High-retention video content crafted with precision editing to maximize audience watch time.<br><br><strong>Editing Approach:</strong><br>Utilized dynamic cuts, engaging text pop-ups, and audio syncing to keep the viewer hooked from the first second.",
    "img": "Reel/Portrait/livefeed reel (2).mp4"
  },
  {
    "title": "Pair Programming ",
    "category": "video",
    "catLabel": "Portrait Video",
    "tags": [
      "Video Editing",
      "Portrait"
    ],
    "desc": "Fast-paced, engaging short-form video content.",
    "caseStudy": "<strong>Overview:</strong><br>High-retention video content crafted with precision editing to maximize audience watch time.<br><br><strong>Editing Approach:</strong><br>Utilized dynamic cuts, engaging text pop-ups, and audio syncing to keep the viewer hooked from the first second.",
    "img": "Reel/Portrait/Pair Programming .mp4"
  },
  {
    "title": "Recruitment 2.0 Starts Now",
    "category": "video",
    "catLabel": "Portrait Video",
    "tags": [
      "Video Editing",
      "Portrait"
    ],
    "desc": "Fast-paced, engaging short-form video content.",
    "caseStudy": "<strong>Overview:</strong><br>High-retention video content crafted with precision editing to maximize audience watch time.<br><br><strong>Editing Approach:</strong><br>Utilized dynamic cuts, engaging text pop-ups, and audio syncing to keep the viewer hooked from the first second.",
    "img": "Reel/Portrait/Recruitment 2.0 Starts Now.mp4"
  },
  {
    "title": "E-Commerce App Redesign",
    "category": "ui-ux",
    "catLabel": "UI/UX Work",
    "tags": [
      "Figma",
      "Prototyping"
    ],
    "desc": "Modernized user interface and streamlined checkout flow to reduce cart abandonment.",
    "caseStudy": "<strong>Overview:</strong><br>A comprehensive UX audit and UI overhaul for an e-commerce mobile application, aimed at reducing friction in the user journey and decreasing cart abandonment.<br><br><strong>Design Approach & Concept:</strong><br>The redesign introduces a bottom-heavy navigation model for better thumb reachability. The checkout flow was reduced from 5 steps to a seamless 3-step process.",
    "img": "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

  /* ============================================
     THEME TOGGLE
     ============================================ */
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;

  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  root.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
  });

  /* ============================================
     TYPEWRITER
     ============================================ */
  const titles = ['Digital Marketer', 'Graphic Designer', 'Marketing Research Analyst', 'UI/UX Designer'];
  let titleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typeEl = document.getElementById('typewriterText');

  function typewrite() {
    if (!typeEl) return;
    const current = titles[titleIdx];
    
    if (isDeleting) {
      typeEl.textContent = current.substring(0, charIdx--);
    } else {
      typeEl.textContent = current.substring(0, charIdx++);
    }

    let speed = isDeleting ? 30 : 80;

    if (!isDeleting && charIdx === current.length + 1) {
      speed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIdx < 0) {
      isDeleting = false;
      titleIdx = (titleIdx + 1) % titles.length;
      speed = 400;
    }
    setTimeout(typewrite, speed);
  }

  typewrite();

  /* ============================================
     NAVBAR BEHAVIOR
     ============================================ */
  const navbar = document.getElementById('mainNavbar');
  window.addEventListener('scroll', () => {
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
    updateActiveNav();
  });

  function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY + 150;

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      const link = document.querySelector(`.navbar-nav a[href="#${id}"]`);
      
      if (link) {
        if (scrollY >= top && scrollY < top + height) {
          document.querySelectorAll('.navbar-nav .nav-link').forEach((a) => a.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  }

  /* ============================================
     RENDER SKILLS
     ============================================ */
  const skillsContainer = document.querySelector('.skills-container');
  if (skillsContainer) {
    skills.forEach((skill, i) => {
      const card = document.createElement('div');
      card.className = `skill-card reveal`;
      card.style.transitionDelay = `${i * 0.05}s`;
      card.innerHTML = `
        <div class="skill-icon"><i class="${skill.icon}"></i></div>
        <div class="skill-name">${skill.name}</div>
        <div class="skill-category">${skill.category}</div>
      `;
      skillsContainer.appendChild(card);
    });
  }

  /* ============================================
     CONTACT FORM (Web3Forms)
     ============================================ */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnHTML = submitBtn.innerHTML;

      // Basic validation
      const name = contactForm.querySelector('[name="name"]').value.trim();
      const email = contactForm.querySelector('[name="email"]').value.trim();
      const message = contactForm.querySelector('[name="message"]').value.trim();

      if (!name || !email || !message) {
        showFormFeedback('Please fill in all fields.', 'error');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showFormFeedback('Please enter a valid email address.', 'error');
        return;
      }

      // Loading state
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i> Sending...';

      try {
        const formData = new FormData(contactForm);
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });

        const result = await response.json();

        if (result.success) {
          showFormFeedback('Message sent successfully! I\'ll get back to you soon.', 'success');
          contactForm.reset();
        } else {
          showFormFeedback('Something went wrong. Please try again.', 'error');
        }
      } catch (err) {
        showFormFeedback('Network error. Please check your connection.', 'error');
      }

      // Restore button
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHTML;
    });

    function showFormFeedback(message, type) {
      // Remove any existing feedback
      const existing = contactForm.querySelector('.form-feedback');
      if (existing) existing.remove();

      const feedback = document.createElement('div');
      feedback.className = `form-feedback form-feedback-${type}`;
      feedback.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} me-2"></i>${message}`;
      contactForm.appendChild(feedback);

      // Auto-remove after 5 seconds
      setTimeout(() => {
        feedback.style.opacity = '0';
        setTimeout(() => feedback.remove(), 300);
      }, 5000);
    }
  }

  /* ============================================
     SMOOTH & BOUNCY SCROLL REVEAL (IntersectionObserver)
     ============================================ */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '50px 0px -10px 0px'
  });

  // Small delay to ensure DOM is fully ready
  setTimeout(() => {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => {
      revealObserver.observe(el);
    });
  }, 100);

  /* ============================================
     RENDER PROJECTS
     ============================================ */
  const projectsGrid = document.getElementById('projectsGrid');
  let currentFilter = 'all';
  let showAllProjects = false;
  
  function renderProjects(filter = currentFilter, forceShowAll = false) {
    if (!projectsGrid) return;
    
    currentFilter = filter;
    showAllProjects = forceShowAll;
    
    projectsGrid.innerHTML = '';
    
    const filtered = currentFilter === 'all' ? projects : projects.filter(p => p.category === currentFilter);
    const itemsToDisplay = showAllProjects ? filtered : filtered.slice(0, 4);
    
    itemsToDisplay.forEach((project, i) => {
      const globalIndex = projects.indexOf(project);
      const col = document.createElement('div');
      col.className = 'col-lg-6 col-md-6 reveal';
      col.style.transitionDelay = `${(i % 4) * 0.1}s`;
      col.innerHTML = `
        <a href="#" class="project-card" data-index="${globalIndex}">
          <div class="project-img-wrap">
            ${project.img.toLowerCase().endsWith('.mp4') ? `<video src="${project.img}" muted loop autoplay playsinline style="width:100%; height:100%; object-fit:cover;"></video>` : `<img src="${project.img}" loading="lazy" alt="${project.title}">`}
          </div>
          <div class="project-content">
            <div class="project-category">${project.catLabel}</div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${project.desc}</p>
            <div class="project-tags">
              ${project.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
            </div>
          </div>
        </a>
      `;
      projectsGrid.appendChild(col);
      
      // Observe the new element for scroll animations
      if (revealObserver) {
        revealObserver.observe(col);
      }
    });
    
    const loadMoreContainer = document.getElementById('loadMoreContainer');
    if (loadMoreContainer) {
      if (filtered.length > 4 && !showAllProjects) {
        loadMoreContainer.style.display = 'block';
      } else {
        loadMoreContainer.style.display = 'none';
      }
    }
    
    // Re-trigger observer for new elements
    setTimeout(() => {
      document.querySelectorAll('#projectsGrid .reveal').forEach(el => revealObserver.observe(el));
    }, 100);
  }

  renderProjects();

  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      renderProjects(currentFilter, true);
    });
  }

  // Filter Buttons Logic
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter, false);
    });
  });

  /* ============================================
     PROJECT MODAL LOGIC
     ============================================ */
  const modal = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');
  const modalOverlay = document.getElementById('modalOverlay');

  function openModal(index) {
    const project = projects[index];
    if(!project || !modal) return;
    
    const mediaContainer = document.getElementById('modalMediaContainer');
    if (project.img.toLowerCase().endsWith('.mp4')) {
      mediaContainer.innerHTML = `<video src="${project.img}" class="modal-main-img" controls autoplay loop playsinline></video>`;
    } else {
      mediaContainer.innerHTML = `<img src="${project.img}" alt="${project.title}" class="modal-main-img">`;
    }
    
    document.getElementById('modalCategory').textContent = project.catLabel;
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDesc').innerHTML = project.caseStudy || project.desc;
    
    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = project.tags.map(t => `<span class="project-tag">${t}</span>`).join('');
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // prevent background scrolling
  }

  function closeModal() {
    if(!modal) return;
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  if(modalClose) modalClose.addEventListener('click', closeModal);
  if(modalOverlay) modalOverlay.addEventListener('click', closeModal);

  // Delegate click for dynamically rendered project cards
  if(projectsGrid) {
    projectsGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.project-card');
      if(card) {
        e.preventDefault();
        const index = card.getAttribute('data-index');
        openModal(index);
      }
    });
  }

  /* ============================================
     STAT COUNTERS
     ============================================ */
  function animateCounters() {
    document.querySelectorAll('.stat-num').forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000;
      const start = performance.now();

      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        // easeOutQuart
        const ease = 1 - Math.pow(1 - progress, 4);
        counter.textContent = Math.floor(ease * target) + '+';
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      }
      requestAnimationFrame(step);
    });
  }

  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    const statObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
        statObserver.disconnect();
      }
    }, { threshold: 0.5 });
    statObserver.observe(aboutSection);
  }



  /* ============================================
     THREE.JS INTERACTIVE 3D GRAPHIC (ICONS & OBJECTS)
     ============================================ */
  const canvasContainer = document.getElementById('hero3DCanvas');
  if (canvasContainer && typeof THREE !== 'undefined') {
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(45, canvasContainer.clientWidth / canvasContainer.clientHeight, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    canvasContainer.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const floatingObjects = [];

    // Helper to create icon textures
    function createIconTexture(iconCode, color, isBrand = false) {
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext('2d');
      ctx.font = `900 70px ${isBrand ? '"Font Awesome 6 Brands"' : '"Font Awesome 6 Free"'}`;
      ctx.fillStyle = color;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(iconCode, 64, 64);
      return new THREE.CanvasTexture(canvas);
    }

    const icons = [
      { code: '\uf16d', color: '#ec4899', brand: true },  // Instagram
      { code: '\uf08c', color: '#0077b5', brand: true },  // LinkedIn
      { code: '\uf0a1', color: '#8b5cf6', brand: false }, // Bullhorn
      { code: '\uf201', color: '#10b981', brand: false }, // Chart line
      { code: '\uf140', color: '#ef4444', brand: false }, // Bullseye
      { code: '\uf004', color: '#f43f5e', brand: false }, // Heart
      { code: '\uf164', color: '#3b82f6', brand: false }, // Thumbs up
      { code: '\uf1e0', color: '#a855f7', brand: false }, // Share
    ];

    document.fonts.ready.then(() => {
      // Add Icon Sprites after fonts are loaded
      icons.forEach(iconData => {
        const tex = createIconTexture(iconData.code, iconData.color, iconData.brand);
        const mat = new THREE.SpriteMaterial({ map: tex, transparent: true });
        const sprite = new THREE.Sprite(mat);
        
        sprite.position.set((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 4);
        sprite.userData = { speed: 0.5 + Math.random() * 1.5, phase: Math.random() * Math.PI * 2, baseY: sprite.position.y };
        sprite.scale.set(1.2, 1.2, 1);
        
        group.add(sprite);
        floatingObjects.push(sprite);
      });
    });

    // Add some 3D geometric shapes (UI/UX vibe)
    const geometries = [
      new THREE.IcosahedronGeometry(0.5, 0),
      new THREE.TorusGeometry(0.4, 0.1, 16, 32),
      new THREE.OctahedronGeometry(0.5, 0),
      new THREE.BoxGeometry(0.6, 0.6, 0.6)
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ color: 0x8b5cf6, wireframe: true, transparent: true, opacity: 0.4 }),
      new THREE.MeshBasicMaterial({ color: 0xec4899, wireframe: true, transparent: true, opacity: 0.4 }),
      new THREE.MeshBasicMaterial({ color: 0x3b82f6, wireframe: true, transparent: true, opacity: 0.4 })
    ];

    for (let i = 0; i < 10; i++) {
      const geo = geometries[Math.floor(Math.random() * geometries.length)];
      const mat = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geo, mat);

      mesh.position.set((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 4);
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      mesh.userData = {
        speed: 0.5 + Math.random() * 1.5, phase: Math.random() * Math.PI * 2, baseY: mesh.position.y,
        rotSpeedX: (Math.random() - 0.5) * 0.02, rotSpeedY: (Math.random() - 0.5) * 0.02
      };

      group.add(mesh);
      floatingObjects.push(mesh);
    }

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX - window.innerWidth / 2);
      mouseY = (e.clientY - window.innerHeight / 2);
    });

    window.addEventListener('resize', () => {
      if (canvasContainer.clientWidth === 0) return;
      camera.aspect = canvasContainer.clientWidth / canvasContainer.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
    });

    const clock = new THREE.Clock();
    
    // Performance fix: Stop rendering 3D scene when out of view
    let isCanvasVisible = true;
    const canvasObserver = new IntersectionObserver((entries) => {
      if (entries && entries.length > 0) {
        isCanvasVisible = entries[0].isIntersecting;
      }
    });
    canvasObserver.observe(canvasContainer);

    function animate() {
      requestAnimationFrame(animate);
      if (!isCanvasVisible) return; // Skip heavy rendering

      const elapsedTime = clock.getElapsedTime();

      floatingObjects.forEach(obj => {
        obj.position.y = obj.userData.baseY + Math.sin(elapsedTime * obj.userData.speed + obj.userData.phase) * 0.5;
        if (obj.isMesh) {
          obj.rotation.x += obj.userData.rotSpeedX;
          obj.rotation.y += obj.userData.rotSpeedY;
        }
      });

      group.rotation.y += 0.05 * (mouseX * 0.001 - group.rotation.y);
      group.rotation.x += 0.05 * (mouseY * 0.001 - group.rotation.x);

      renderer.render(scene, camera);
    }
    
    setTimeout(() => {
      if (canvasContainer.clientWidth > 0) {
        camera.aspect = canvasContainer.clientWidth / canvasContainer.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
      }
    }, 100);

    animate();
  }

  /* ============================================
     STARS BACKGROUND (CANVAS)
     ============================================ */
  const starsCanvas = document.getElementById('starsCanvas');
  if (starsCanvas) {
    const ctx = starsCanvas.getContext('2d');
    let width, height;
    let stars = [];
    let mouse = { x: null, y: null };

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      starsCanvas.width = width;
      starsCanvas.height = height;
    }
    
    window.addEventListener('resize', resize);
    resize();

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener('mouseout', () => {
      mouse.x = null;
      mouse.y = null;
    });

    class Star {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.5;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 20) + 1;
        this.opacity = Math.random();
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = (Math.random() - 0.5) * 0.2;
      }
      
      draw(color) {
        ctx.fillStyle = `rgba(${color}, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
      
      update(color) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > width) this.x = 0;
        if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0;
        if (this.y < 0) this.y = height;

        // Interaction with mouse
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;
          let maxDistance = 150;
          let force = (maxDistance - distance) / maxDistance;
          let directionX = forceDirectionX * force * this.density;
          let directionY = forceDirectionY * force * this.density;

          if (distance < maxDistance) {
            this.x -= directionX;
            this.y -= directionY;
          }
        }
        this.draw(color);
      }
    }

    function initStars() {
      stars = [];
      let numStars = Math.floor((width * height) / 10000);
      for (let i = 0; i < numStars; i++) {
        stars.push(new Star());
      }
    }

    function animateStars() {
      requestAnimationFrame(animateStars);
      ctx.clearRect(0, 0, width, height);
      
      const theme = document.documentElement.getAttribute('data-theme');
      const color = theme === 'light' ? '15, 23, 42' : '255, 255, 255';
      
      for (let i = 0; i < stars.length; i++) {
        stars[i].update(color);
      }
    }

    initStars();
    animateStars();
  }

})();
