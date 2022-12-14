export const snakeCaseToTitleCase = (str: string) =>
  str.replace(/^(.)|-+(.)/g, (_, p1, p2) =>
    p1 ? p1.toUpperCase() : ` ${p2.toUpperCase()}`
  )

export const toSentenceCase = (str: string = '') =>
  (str.charAt(0).toUpperCase() + str.slice(1)).replace(/-/g, ' ')

export const removeSlash = (str: string = '') => {
  const [, generationNumber] = str.split('-')

  return `Generation ${generationNumber.toUpperCase()}`
}
