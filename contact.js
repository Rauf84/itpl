function success(){
    swal({
        title: "Thank you!",
        text: "We will get back to you within 24 hours",
        icon: "success",
        button:"Close",
    });
}


function send(){
    emailjs.send("service_a98659k","template_pkgugf9",{
        to_name: "Rauf",
        from_name: document.querySelector("#from_name").value,
        from_email: document.querySelector("#from_email").value,
        message: document.querySelector("#message").value,
    }).then (response=>{
        console.log("success", response.status);
        success();
    }, (error)=>{
        console.log(error);
    })
}

document.querySelector(".send").addEventListener("click",send)