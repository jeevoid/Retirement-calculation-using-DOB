# Retirement-calculation-using-DOB
datepicker-onselect-functionCall-retirement calculation using jqueryUI

 <head>
<script>

$( function doDates() {

        $("#dob").datepicker({yearRange: "1900:+nn",
        dateFormat: "dd-mm-yy",
        maxDate:'now',
        changeMonth: true,
        constrainInput: true,
         changeYear: true,
        onSelect: function (dateStr) {
        var startDob = $("#dob").datepicker("getDate");
        var retDate = new Date(startDob.getFullYear() + 60, startDob.getMonth(), startDob.getDate()-1);
        var dat = new Date(retDate);
        retire= (dat.getDate() + '-' +  (dat.getMonth() + 1)+ '-' +  dat.getFullYear());
        $("#dor").val(retire)
        }

    });
        } );
    </script>

        <title>jQuery UI Datepicker - Animation</title>
        <link rel="stylesheet" href="https://code.jquery.com/ui/1.11.1/themes/ui-darkness/jquery-ui.css">
        <script src="https://code.jquery.com/jquery-2.1.1.js"></script>
        <script src="https://code.jquery.com/ui/1.11.1/jquery-ui.js"></script>
       
    </head>
    
