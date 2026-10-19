import fontUrl from '/fonts/Fraunces-Cyrillic.woff2?url'

const style = document.createElement('style')
style.textContent = `
@font-face {
  font-family: 'Fraunces';
  font-style: normal;
  font-weight: 100 900;
  src: url('${fontUrl}') format('woff2');
  font-display: swap;
}
`
document.head.appendChild(style)
