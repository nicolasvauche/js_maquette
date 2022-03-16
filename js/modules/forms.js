export const validateFormInput = input => {
  const inputType = input.tagName.toLowerCase()

  if (inputType !== 'button') {
    return inputType
  }

  return true
}
