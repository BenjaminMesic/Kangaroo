import $ from 'jquery'
import { getGPS } from './gps'

var myApp = new Framework7();

// If your using custom DOM library, then save it to $$ variable
var $$ = Dom7;

// Add the view
var mainView = myApp.addView('.view-main', {
  // enable the dynamic navbar for this view:
  dynamicNavbar: true
});

$("#GPS_button").click(() => getGPS())