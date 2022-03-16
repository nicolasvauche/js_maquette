// On importe des fonctions depuis des modules
import { validateForm } from './modules/forms.js'
import { activateModals } from './modules/modals.js'

// On pointe sur le formulaire de contact
const contactForm = document.getElementById('contactform')
// On valide le formulaire de contact
validateForm(contactForm)

// On active les modales s'il y en a
activateModals()
