/** @type {HTMLButtonElement} */ const buttonJump = document.getElementById('btn-jmp')
/** @type {HTMLInputElement} */const textJump = document.getElementById('text-jmp')
/** @type {HTMLButtonElement} */ const buttonLink = document.getElementById('btn-link')
/** @type {HTMLInputElement} */const textLink = document.getElementById('text-link')
/** @type {HTMLTextAreaElement} */const outLink = document.getElementById('out-link')

function normalizeURL(target) {
  let result = target
  if (!result.includes('://')) {
    result = 'https://'.concat(result)
  }
  return result
}

function jump() {
  let target = normalizeURL(textJump.value)
  window.open(target, '_self')
}

textJump.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') jump()
})

buttonJump.addEventListener('click', (e) => {
  jump()
})

function createLink() {
  let target = normalizeURL(textLink.value)
  let resultURL = new URL(location.href)
  let targetURL = new URL(target)
  resultURL.searchParams.set('t', btoa(targetURL.href))

  outLink.value = resultURL.href
  navigator.clipboard.writeText(resultURL.href)
}

textLink.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') createLink()
})

buttonLink.addEventListener('click', (e) => {
  createLink()
})