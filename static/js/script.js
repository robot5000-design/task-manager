$(document).ready(function(){
    $('.sidenav').sidenav({edge: "right"});
    $('input#username, input#password').characterCounter();
    $('.collapsible').collapsible();
    $('.tooltipped').tooltip();
    $(".datepicker").datepicker({
        format: "dd mmmm, yyyy",
        yearRange: 3,
        showClearBtn: true,
        i18n: {
            done: "Select"
        }
    });
});