/**
 * @file notificaton.js
 * @author Sanjay Sunil
 * @license MIT
 */

import { } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase.js'
import { } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js'

function successNotification(message) {
  new Noty({
    type: 'success',
    theme: "nest",
    closeWith: ['button'],
    text: message,
    timeout: 5000,
    progressBar: true
  }).show()
}

function errorNotification(message) {
  new Noty({
    type: 'error',
    theme: "nest",
    closeWith: ['button'],
    text: message,
    timeout: 5000,
    progressBar: true
  }).show()
}