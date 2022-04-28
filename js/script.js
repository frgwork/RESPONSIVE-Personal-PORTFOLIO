const showMenu = (toggleId, navId) => {
   const toggle = document.getElementById(toggleId);
   const nav = document.getElementById(navId);

   if (toggle && nav) {
      toggle.addEventListener('click', () => {
         nav.classList.toggle('show');
      })
   }
}
showMenu('nav-toggle', 'nav-menu');


const navLinck = document.querySelectorAll('.nav__link');
navLinck.forEach(el => el.addEventListener('click', linkAction));

function linkAction() {
   navLinck.forEach(el => el.classList.remove('active'));
   this.classList.add('active');

   const navMenu = document.getElementById('nav-menu');
   navMenu.classList.remove('show');
}


//************************** */

const sections = document.querySelectorAll('section[id]')
console.log(sections);

function scrollActive() {
   const scrollY = window.pageYOffset

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute('id')

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
         document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
      } else {
         document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
      }
   })
}
window.addEventListener('scroll', scrollActive)

//************************** */

const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2000,
   delay: 200,
   //reset: true
})

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 }); 
