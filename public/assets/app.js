//document.write(
//'<script src="http://' + (location.host || 'localhost').split(':')[0] +
//     ':35729/livereload.js?snipver=1"></' + 'script>'
//)
//console.log('Welcome,\nthis cv template is done through pugan can be viewed  online at ...')
//
// method for inserting an elment before dom node
const insert = (el, ref) => {
  ref.parentNode.insertBefore(el, ref)
}
  
const init = () => {
  const labelized = document.querySelectorAll('[labelize]')
  Array.from(labelized).forEach(el => {
    const labelText = el.getAttribute('labelize')
    const wrapper = document.createElement('span')
    wrapper.classList.add('labelized')
    wrapper.textContent = `${labelText.slice(0,1).toUpperCase()}${labelText.slice(1)}:`
    insert(wrapper, el)
  })
} 
init()  
