
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
    }
  },

})

  .mount('#app');



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

gsap.to("body", {
  backgroundImage: "url('./assets/img/gris.png')",
  scrollTrigger: {
    trigger: ".sectionIntro",
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
});

gsap.to("body", {
  backgroundImage: "url('./assets/img/rouge.png')",
  scrollTrigger: {
    trigger: ".sectionProjets",
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
});

gsap.to("body", {
  backgroundImage: "url('./assets/img/violet.png')",
  scrollTrigger: {
    trigger: ".sectionCompetences",
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
});

gsap.to("body", {
  backgroundImage: "url('./assets/img/vert.png')",
  scrollTrigger: {
    trigger: ".sectionContact",
    start: "top bottom",
    end: "bottom bottom",
    scrub: true,
  },
});

