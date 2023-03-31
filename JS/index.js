function sendForm(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    alert(`Name : ${name} Email : ${email} Message : ${message}`);
    alert("Message sent successfully.");
}

$(document).ready(()=>{
    $('.navbar-toggler').click(()=>{ 
        $('.collapse').toggle(500);
        $('.fa-bars').toggle();
        $('.fa-xmark').toggle();
    }) 
    $('.nav-link').click(()=>{
        $('.collapse').hide(800);
        $('.fa-bars').toggle();
        $('.fa-xmark').toggle();
    })
});