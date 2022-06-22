import { Entry } from './entry.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';


$(document).ready(function() {
  $("form#entry").submit(function(event) {
    event.preventDefault();
    const title = $("#journalTitle").val();
    const body = $("#journalBody").val();
    let entry = new Entry(title, body);
    let wordCount = entry.body.wordCounter();
    let vowelCounter = entry.body.vowelCounter(entry.body);
    let consonantCounter = entry.body.consonantCounter(entry.body);
    $('#response').append("<li>" + wordCount + "</li>" + "<li>" + vowelCounter + "</li>" + "<li>" + consonantCounter + "</li>");
  });
});