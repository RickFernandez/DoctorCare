window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activeMenuAtCurrentSection(home)
  activeMenuAtCurrentSection(services)
  activeMenuAtCurrentSection(about)
  activeMenuAtCurrentSection(contact)
}

function activeMenuAtCurrentSection(section) {
  const targetline = scrollY + innerHeight / 2 // (Linha alvo)

  // É preciso verificar se a seção passou da linha
  // Quais dados vou precisar?
  const sectionTop = section.offsetTop // Valor do início da section (topo da seção)
  const sectionHeight = section.offsetHeight // Valor do final da section (altura da seção)


  // Verificação se a seção passou da linha
  const sectionTopReachOrPassedTargetLine = targetline >= sectionTop; // (o topo da seção alcançou ou ultrapassou a linha alvo)

  // informações dos dados e da lógica
  // console.log('O topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetLine);

  // Verificar se a base está abaixo da linha alvo
  // Quais dados vou precisar?
  const sectionEndsAt = sectionTop + sectionHeight; // (A seção termina onde?)

  const sectionEndPassedTargetLine = sectionEndsAt <= targetline; // (O final da seção pasou da linha alvo)

  // console.log('O fundo da seção passou da linha?',sectionEndPassedTargetLine);

  const sectionBounderies = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine; //(limites da seção)

  const sectionId = section.getAttribute('id') // (pega o Id da seção)
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`); // (elemento do menu)

  menuElement.classList.remove('active');
 if (sectionBounderies) {
   menuElement.classList.add('active');
 }
 
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 800
}).reveal(`
#home, 
#gome img, 
#home .stats, 
#services,
 #services header,
 #services .card
 #about,
 #about header,
 #about content`)