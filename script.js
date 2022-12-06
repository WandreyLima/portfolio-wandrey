function initScrollSuave() {
  const linksInternos = document.querySelectorAll('a[href^="#"]');

  function scrollSuave(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    console.log(section);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollSuave);
  });
}
initScrollSuave()

const sections = document.querySelectorAll('js-scroll')

function animacaoScroll() {
    sections.forEach((section) => {
    const topDist = section.getBoundingClientRect().top
    console.log(topDist)
    })
}


window.addEventListener('scroll', animacaoScroll)