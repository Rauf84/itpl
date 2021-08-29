
function send(){
    emailjs.send("service_a98659k","template_pkgugf9",{
        to_name: "Rauf",
        from_name: document.querySelector("#from_name").value,
        message: document.querySelector("#message").value,
    }).then (response=>{
        console.log("success", response.status);
    }, (error)=>{
        console.log(error);
    })
}

document.querySelector(".send").addEventListener("click",send)