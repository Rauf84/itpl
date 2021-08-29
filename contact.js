function sendMail (params) {
    var tempParams = {
        from_name: document.getElementById("from_name").value,
        to_name: document.getElementById("to_name").value,
        message: document.getElementById("message").value,
    };

    emailjs.send('service_a98659k','template_pkgugf9', tempParams)
    .then (function(res){
        console.log("success", res.status);
    });
}