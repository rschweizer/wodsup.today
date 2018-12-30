const input = document.querySelector('section.cta input#box')
input.addEventListener(
  'keyup',
  event =>
    event.keyCode === 13 &&
    input.value !== '' &&
    (window.location = '/' + input.value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase())
)
