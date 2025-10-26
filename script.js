let fond = "./assets/img/backIntro2.png";

const { createApp } = Vue;


createApp({
  data() {
    return {
      project: [],
      flipped: false,
      dark: false
    };
  },

  mounted() {
    fetch('./projects.json')
      .then(data => data.json())
      .then(donnees => {
        this.project = donnees;
      });
  },

  methods: {
    inverse() {
      this.flipped = !this.flipped;
    },
    toggleDark() {
      this.dark = !this.dark;
      document.body.classList.toggle('dark', this.dark);

      if (this.dark) {
        fond = "./assets/img/backintro_dark.png";
      } else {
        fond = "./assets/img/backIntro2.png";
      }

      document.body.style.backgroundImage = `url('${fond}')`;
    }
  },
}).mount('#app');



document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

});

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".sectionIntro",
  start: "top center",
  end: "bottom center",
  scrub: true,
  onEnter: () => { // code exécuté lorsqu'on rentre dans la section
    if (!document.body.classList.contains("dark")) { // s'il ne contient pas dark, on met le background de base
      document.body.style.backgroundImage = "url('./assets/img/gris.png')";
    }
  },
  onEnterBack: () => { // code exécuté lorsqu'on sort de la section, je l'ai mis pour être sûr de passer au background light et éviter les bugs
    if (!document.body.classList.contains("dark")) {
      document.body.style.backgroundImage = "url('./assets/img/gris.png')";
    }
  }
});

ScrollTrigger.create({
  trigger: ".sectionProjets",
  start: "top center",
  end: "bottom center",
  scrub: true,
  onEnter: () => { // code exécuté lorsqu'on rentre dans la section
    if (!document.body.classList.contains("dark")) { // s'il ne contient pas dark, on met le background rouge light
      document.body.style.backgroundImage = "url('./assets/img/rouge.png')";
    }
  },
  onEnterBack: () => {
    if (!document.body.classList.contains("dark")) {  // code exécuté lorsqu'on sort de la section, je l'ai mis pour être sûr de passer au background light et éviter les bugs
      document.body.style.backgroundImage = "url('./assets/img/rouge.png')";
    }
  }
});

ScrollTrigger.create({
  trigger: ".sectionCompetences",
  start: "top center",
  end: "bottom center",
  scrub: true,
  onEnter: () => { // code exécuté lorsqu'on rentre dans la section
    if (!document.body.classList.contains("dark")) { // s'il ne contient pas dark, on met le background violet light
      document.body.style.backgroundImage = "url('./assets/img/violet.png')";
    }
  },
  onEnterBack: () => {
    if (!document.body.classList.contains("dark")) {  // code exécuté lorsqu'on sort de la section, je l'ai mis pour être sûr de passer au background light et éviter les bugs
      document.body.style.backgroundImage = "url('./assets/img/violet.png')";
    }
  }
});

ScrollTrigger.create({
  trigger: ".sectionContact",
  start: "top center",
  end: "bottom center",
  scrub: true,
  onEnter: () => { // code exécuté lorsqu'on rentre dans la section
    if (!document.body.classList.contains("dark")) { // s'il ne contient pas dark, on met le background vert light
      document.body.style.backgroundImage = "url('./assets/img/vert.png')";
    }
  },
  onEnterBack: () => {
    if (!document.body.classList.contains("dark")) {  // code exécuté lorsqu'on sort de la section, je l'ai mis pour être sûr de passer au background light et éviter les bugs
      document.body.style.backgroundImage = "url('./assets/img/vert.png')";
    }
  }
});