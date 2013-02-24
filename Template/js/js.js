$("form").submit(function(e) {
    e.preventDefault(); 
    var $this = $(this);
    $.post(
        $this.attr("action"),
        $this.serialize(),
        function(data) {
        	console.log(data)
        	form_alert.style.display = 'block'
        	form_alert_message.innerHTML = form_alert.getAttribute("message")
        },
        "json" 
    );
});