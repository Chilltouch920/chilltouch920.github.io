/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(window).scroll(function () {

    if ($(window).scrollTop() > 250) {
      $('#headercontainer').addClass('headercontainerfixed');
    }
    if ($(window).scrollTop() < 293) {
      $('#headercontainer').removeClass('headercontainerfixed');
    }
  });
 