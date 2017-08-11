$(document).ready(function () {
    $(function () {

        $("#start_datepicker").datepicker({
            inline: true,
            showOtherMonths: true,
            dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            showAnim: "slide",
            changeYear: true

            /*
             showButtonPanel: true,
             dateFormat: "dd/mm/yy",
             showOn: 'button',
             buttonImage: "pic/1.jpg",
             buttonImageOnly: true
             */
        });
        
         $("#end_datepicker").datepicker({
            inline: true,
            showOtherMonths: true,
            dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            showAnim: "slide",
            changeYear: true

      
        });
    });
});