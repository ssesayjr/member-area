/**
 * @file logout.js
 * @author Sanjay Sunil
 * @license MIT
 */

import { } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase.js'
import { } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js'


function logout() {
  firebase.auth().signOut();
  successNotification("Successfully logged out!")
}