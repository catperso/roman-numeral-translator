import romanNumerals from './romanNumerals.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$("#number").submit(function(event) {
  event.preventDefault();

  let input = $("#input").val().replace(/[.,/#!$%?^&*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ");
  let inputArr = input.split(' ');
  let outputArr = [];

  inputArr.forEach(function(element) {
    outputArr.push(romanNumerals(element));
  });
  
  $("ul").empty();

  outputArr.forEach(function(number) {
    $("ul").append("<li>" + number + "</li>");
  });
});