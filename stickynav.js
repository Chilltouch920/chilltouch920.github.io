/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(window).scroll(function () {
    var windowSize = $(window).width();
if (windowsize <= 480){
if ($(window).scrollTop() > 250) {
$('#headercontainer').addClass('headercontainerfixed');
}
}
if (windowsize <= 480){
if ($(window).scrollTop() < 293) {
$('#headercontainer').removeClass('headercontainerfixed');
}
}
if(windowsize <= 480){
    $('#')
}
});
 