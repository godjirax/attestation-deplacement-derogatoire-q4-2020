import 'bootstrap/dist/css/bootstrap.min.css'

import '../css/main.css'

import './icons'
import './check-updates'
import { prepareForm } from './form-util'
import { warnFacebookBrowserUserIfNecessary } from './facebook-util'
import { addVersion } from './util'
import { createForm } from './form'

warnFacebookBrowserUserIfNecessary()
createForm()
prepareForm()
addVersion(process.env.VERSION)

let form = window.localStorage.getItem('form')

try {
  form = JSON.parse(form)
} catch (err) {
  form = {}
}

Object.keys(form).forEach((key) => {
  const dom = document.querySelector(`[name='${key}']`)

  if (dom) dom.value = form[key]
  else console.log('NOT FOUND', key)
})

document.querySelector(`[name='heuresortie']`).value =
  new Date().getHours() + ':' + new Date().getMinutes()

var now = new Date()
var month = now.getMonth() + 1
var day = now.getDate()
if (month < 10) month = '0' + month
if (day < 10) day = '0' + day
var today = now.getFullYear() + '-' + month + '-' + day

document.querySelector(`[name='datesortie']`).value = today


window.showForm = () => {
document.querySelectorAll('#form-profile .form-group').forEach((r) => {
  r.style.display = ''
})
}

const hideForm = () => {
document.querySelectorAll('#form-profile .form-group').forEach((r) => {
  r.style.display = 'none'
})
}

if (document.querySelector(`[name='firstname']`).value) {
    hideForm()

    setTimeout(() => {
        document.getElementById('show-form-btn').style.display = ''
        document.getElementById('person').innerHTML = `${
          document.querySelector(`[name='firstname']`).value
        } ${document.querySelector(`[name='lastname']`).value}`
        
    }, 250)

    // document.getElementById('form-profile').innerHTML +=
    //   '<button onclick="hideForm();">Afficher formulaire</button>' +
    //   document.getElementById('form-profile').innerHTML
}
