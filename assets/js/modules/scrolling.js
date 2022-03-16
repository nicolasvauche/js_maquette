/**
 * On active le smooth scroll custom
 * Fonction interne au module
 */
const activateSmoothScroll = () => {
  zenscroll.setup(1000, 0)
  const navigationLinks = document.querySelectorAll(
    '#appNavigation > ul > li > a'
  )
  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', e => {
      if (navigationLinks[i].getAttribute('href') !== './') {
        e.preventDefault()
        const targetId = navigationLinks[i]
          .getAttribute('href')
          .replace('./#', '')
        const targetElement = document.getElementById(targetId)
        zenscroll.to(targetElement, 200)
      }
    })
  }
}

/**
 * On active l'effet au scroll sur la navigation
 * Fonction interne au module
 */
const activateNavigationScroll = () => {
  window.addEventListener('scroll', () => {
    // On change la couleur de fond de la navigation en scrollant
    if (window.scrollY > 580) {
      document.querySelector('body').setAttribute('class', 'scrolled')
    } else {
      document.querySelector('body').removeAttribute('class')
    }
  })
}

/**
 * On active toutes les fonctions de scrolling
 * Fonction exportée
 */
export const activateScrolls = () => {
  activateSmoothScroll()
  activateNavigationScroll()
}
