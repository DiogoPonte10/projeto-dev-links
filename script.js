function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector('#profile img')
  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/Avatar-light.jpg')
    img.setAttribute('alt', 'Foto de perfil de Diogo Ponte usando terno virado de frente para a imagem')
  } else {
    img.setAttribute('src', './assets/Avatar.jpg')
    img.setAttribute('alt', 'Foto de perfil de Diogo Ponte usando terno virado na diagonal direita')
  }
}