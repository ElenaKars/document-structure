'use strict'

const hasTooltipEls = Array.from(document.querySelectorAll('.has-tooltip'))
let tooltipEl

hasTooltipEls.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
    let target = e.target

    tooltipEl = document.createElement('div')
    tooltipEl.className = 'tooltip'
    tooltipEl.classList.add('tooltip_active')

    tooltipEl.innerHTML = target.getAttribute('title')
    target.after(tooltipEl)
    let coords = target.getBoundingClientRect()
    let left = coords.left + (target.offsetWidth - tooltipEl.offsetWidth) / 2
    if (left < 0) {
      left = 0
    }
    let bottom = coords.top + target.offsetHeight
    tooltipEl.style.left = left + 'px'
    tooltipEl.style.top = bottom + 'px'

    hasTooltipEls.forEach((item) => {
      item.addEventListener('mouseout', (e) => {
        if (tooltipEl) {
          tooltipEl.remove()
          tooltipEl = null
        }
      })
    })
  })
})
