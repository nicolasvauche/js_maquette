// On importe notre fonction depuis un module
import { validateFormInput } from './modules/forms.js'

// On pointe sur le formulaire de contact
const contactForm = document.getElementById('contactform')

contactForm.addEventListener('submit', event => {
  event.preventDefault()

  for (const formInput of contactForm.elements) {
    console.log(validateFormInput(formInput))
  }
})
