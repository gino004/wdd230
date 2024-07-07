 document.addEventListener("DOMContentLoaded", function() {
     var now = new Date();
     var formattedDateTime = now.toISOString(); // Formato ISO 8601
     document.getElementById('timestamp').value = formattedDateTime;
 });