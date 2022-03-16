/**
 * Validation d'un champ de formulaire
 * Fonction interne au module
 *
 * @param {DOMElement} input
 * @return {boolean}
 */
const validateFormInput = input => {
  // On ne teste pas les boutons
  if (input.tagName.toLowerCase() === 'button') return

  // Nettoyage des messages d'erreurs s'il y en a et des inputs
  const lastError = document.querySelector('#' + input.id + ' ~ .error')
  if (lastError) lastError.remove()
  input.classList.remove('error')

  // On pointe sur le bouton du formulaire
  const formSubmit = input.form.querySelector('[type=submit]')

  // La validation du champ est fournie par l'API validity de JS
  const inputValidity = input.validity

  // On boucle sur les types de validation fournis par l'API validity
  // Ref: [https://developer.mozilla.org/fr/docs/Learn/Forms/Form_validation]
  for (const type in inputValidity) {
    // Si un type est à true, alors il y a une erreur (sauf le type est 'valid' :D)

    if (inputValidity[type] && type !== 'valid') {
      // On prépare un paragraphe pour le message d'erreur, et on style notre input
      const errorMsg = document.createElement('p')
      errorMsg.classList.add('error')
      input.classList.add('error')
      formSubmit.disabled = true
      formSubmit.classList.add('disabled')

      // On définit le message d'erreur en fonction du type de validation raté
      switch (type) {
        case 'valueMissing':
          errorMsg.innerHTML = 'Veuillez remplir ce champ svp'
          break

        case 'tooShort':
          errorMsg.innerHTML =
            'Veuillez saisir au moins ' + input.minLength + ' caractères svp'
          break

        case 'typeMismatch':
          if (input.type === 'email') {
            errorMsg.innerHTML = 'Veuillez saisir une adresse e-mail valide svp'
          }
          break

        default:
          console.log('unsupported error: ' + inputValidity[type])
          break
      }

      // On ajoute ce paragraphe au conteneur parent de notre input
      input.parentNode.appendChild(errorMsg)
    }
  }

  console.log(input.checkValidity())
  return input.checkValidity()
}

/**
 * Validation d'un formulaire
 * Fonction exportée
 *
 * @param {DOMElement} form
 */
export const validateForm = form => {
  // On pointe sur le bouton du formulaire
  const formSubmit = form.querySelector('[type=submit]')

  // On écoute l'évènement onSubmit du formulaire
  form.addEventListener('submit', event => {
    // On bloque la soumission auto par le navigateur
    event.preventDefault()

    // On teste chaque champ du formulaire (à la soumission, donc à la fin)
    for (const formInput of form.elements) {
      if (validateFormInput(formInput)) {
        formSubmit.disabled = false
        formSubmit.classList.remove('disabled')
      }
    }

    if (form.checkValidity()) {
      form.submit()
    }
  })

  // On écoute l'évènement onInput de chaque champ du formulaire
  for (const formInput of form.elements) {
    formInput.addEventListener('input', event => {
      // On teste notre champ (pendant la saisie)
      if (validateFormInput(formInput) && form.checkValidity()) {
        formSubmit.disabled = false
        formSubmit.classList.remove('disabled')
      }
    })
  }
}
