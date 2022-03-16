// On importe des fonctions depuis des modules
import { validateForm } from './modules/forms.js'
import { activateModals } from './modules/modals.js'
import { activateScrolls } from './modules/scrolling.js'

document.addEventListener('DOMContentLoaded', () => {
  // On active les fonctionnalités de scrolling
  activateScrolls()

  // On valide le formulaire de contact
  validateForm(document.getElementById('contactForm'))

  // On active les modales s'il y en a
  activateModals()
})
