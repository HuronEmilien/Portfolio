// Parallax avec coefficients ralentis
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;

  // Sélection des couches
  const totalLayer = document.querySelector('.parallax-layer.total');
  const contourLayer = document.querySelector('.parallax-layer.contour');
  const randonneurLayer = document.querySelector('.parallax-layer.randonneur');
  const soleilLayer = document.querySelector('.parallax-layer.soleil');

  if (totalLayer) {
    totalLayer.style.transform = `translateY(${scrolled * 0.05}px)`;
  }
  if (contourLayer) {
    contourLayer.style.transform = `translateY(${scrolled * 0.1}px)`;
  }
  if (randonneurLayer) {
    randonneurLayer.style.transform = `translateY(${scrolled * 0.2}px)`;
  }
  if (soleilLayer) {
    soleilLayer.style.transform = `translateY(${scrolled * 0.03}px)`;
  }
});

let animationFrameId;
let animationInProgress = false;

// Parallax avec coefficients ralentis
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const totalLayer = document.querySelector('.parallax-layer.total');
  const contourLayer = document.querySelector('.parallax-layer.contour');
  const randonneurLayer = document.querySelector('.parallax-layer.randonneur');
  const soleilLayer = document.querySelector('.parallax-layer.soleil');

  if (totalLayer) {
    totalLayer.style.transform = `translateY(${scrolled * 0.05}px)`;
  }
  if (contourLayer) {
    contourLayer.style.transform = `translateY(${scrolled * 0.1}px)`;
  }
  if (randonneurLayer) {
    randonneurLayer.style.transform = `translateY(${scrolled * 0.2}px)`;
  }
  if (soleilLayer) {
    soleilLayer.style.transform = `translateY(${scrolled * 0.03}px)`;
  }
});

// Défilement natif smooth pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});



let isScrolling = false;

window.addEventListener('wheel', function(e) {
  // Empêche le comportement natif et gère le défilement si une animation est déjà en cours
  if (isScrolling) return;
  e.preventDefault();
  isScrolling = true;
  
  // Sélectionnez toutes les sections du main (chaque section devrait avoir une hauteur de 100vh)
  const sections = document.querySelectorAll('main section');
  const sectionHeight = window.innerHeight;
  
  // Calcule l'index de la section actuelle en fonction du scroll vertical actuel
  let currentSectionIndex = Math.round(window.pageYOffset / sectionHeight);
  
  // Détermine la direction de défilement avec deltaY
  if (e.deltaY > 0) {
    // Vers le bas
    currentSectionIndex++;
    if (currentSectionIndex >= sections.length) {
      currentSectionIndex = sections.length - 1;
    }
  } else {
    // Vers le haut
    currentSectionIndex--;
    if (currentSectionIndex < 0) {
      currentSectionIndex = 0;
    }
  }
  
  // Défilement smooth vers la section cible
  sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
  
  // On attend 1000ms (1s) avant d'autoriser un nouveau défilement
  setTimeout(() => {
    isScrolling = false;
  }, 1000);
}, { passive: false });

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  
  const volcanLayer = document.querySelector('.parallax-layer.volcan');
  if (volcanLayer) {
    // Ajustez le coefficient de 0.2 par exemple
    volcanLayer.style.transform = `translateY(${scrolled * 0.2}px)`;
  }
});


window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.pageYOffset > 50) { // seuil de 50px
    header.classList.add('small-nav');
  } else {
    header.classList.remove('small-nav');
  }
});
