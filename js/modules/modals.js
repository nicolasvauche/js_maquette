/**
 * On active tous les éléments ayant la classe "modal"
 * Fonction interne au module
 */
const activateOpenModals = () => {
  // On pointe sur les boutons d'activation des modales
  const modalButtons = document.querySelectorAll('.modal')

  // Pour chaque bouton, on ajoute un EventListener pour ouvrir sa modale
  for (const modalBtn of modalButtons) {
    modalBtn.addEventListener('click', event => {
      // On bloque le scroll en cas de <a href="#">
      event.preventDefault()

      // On pointe sur la modale associée au bouton (par son attribut data-modal)
      const modalTarget = document.getElementById(modalBtn.dataset.modal)

      if (modalTarget) {
        // On désactive le scroll de la page qui reste derrière
        document.body.style.overflow = 'hidden'

        // On ouvre la modale
        modalTarget.classList.add('open')
      }
    })
  }
}

/**
 * On active les boutons "close" des modales existantes
 * Fonction interne au module
 */
const activateCloseModals = () => {
  // On pointe sur les modales
  const modals = document.querySelectorAll('.app-modal')

  // Pour chaque modale, on ajoute un EventListener sur le click du bouton close
  for (const modal of modals) {
    // On pointe sur le bouton close
    const closeBtn = modal.querySelector('.app-modal-close')

    closeBtn.addEventListener('click', event => {
      // On réactive le scroll de la page
      document.body.style.overflow = 'initial'

      // On ferme la modale si le bouton est cliqué
      modal.classList.remove('open')
    })
  }
}

/**
 * On lance la séquence d'activation des modales existantes
 * Fonction exportée
 */
export const activateModals = () => {
  activateOpenModals()
  activateCloseModals()

  console.log('modales activées')
}
