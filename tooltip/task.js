'use strict'

const hasTooltipEls = Array.from(document.querySelectorAll('.has-tooltip'))

let tooltipEl

document.body.addEventListener('click', (e) => {
  e.preventDefault()
  let tooltipDelete = document.querySelector('.tooltip')
  let target = e.target.closest('.has-tooltip')
  if (!target) {
    return
  }
  if (tooltipDelete) {
    tooltipDelete.remove()
    if (target.title === tooltipDelete.innerHTML) {
      return
    }
  }
  tooltipEl = document.createElement('div')
  tooltipEl.innerHTML = target.title
  tooltipEl.className = 'tooltip tooltip_active'
  let coords = target.getBoundingClientRect()
  let bottom = coords.top + target.offsetHeight + 5
  let left = coords.left + (target.offsetWidth - tooltipEl.offsetWidth) / 2
  if (left < 0) {
    left = 0
  }
  tooltipEl.style.left = left + 'px'
  tooltipEl.style.top = bottom + 'px'

  document.body.append(tooltipEl)
})
