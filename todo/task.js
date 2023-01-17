'use strict'

const formTaskControl = document.getElementById('tasks__form')
const taskInput = document.getElementById('task__input')
const listEl = document.getElementById('tasks__list')
let task, taskList, link

formTaskControl.addEventListener('submit', (e) => {
  e.preventDefault()

  if (!taskInput.value) {
    return false
  }
  task = document.createElement('div')
  task.className = 'task'
  listEl.appendChild(task)
  taskList = document.createElement('div')
  taskList.className = 'task__title'
  task.appendChild(taskList)
  taskList.innerHTML += taskInput.value
  link = document.createElement('a')
  link.href = '#'
  link.className = 'task__remove'
  link.appendChild(document.createTextNode('×'))
  task.appendChild(link)

  link.addEventListener('click', (e) => {
    e.preventDefault()
    let currentLink = e.target
    let deletedTask = currentLink.closest('.task')
    deletedTask.remove()
  })
  taskInput.value = ''
})
