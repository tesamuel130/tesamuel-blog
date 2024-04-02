var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contentes");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var work = document.querySelectorAll('.work');

function rotate(e){
    for(works of work){
        works.classList.remove('rotate')
    }
    e.target.classList.add('rotate');
}

// ---------------------------- email messaging------------------------------//

function sendMessage() {
    var params = {
        from_name: document.getElementById("sender_name").value,
        email_id: document.getElementById("sender_add").value,
        message: document.getElementById("message").value + " " + document.getElementById("phone_no").value
    };

    var serviceID = "service_klktxrn"    // Correct the variable name if necessary
    var templateID = "template_9z83kbv"  // Correct the variable name if necessary
    var api_key = "8L8mQyyKKi5jJYPzB"    // Correct the variable name if necessary

    var data = {
        service_id: serviceID,
        template_id: templateID,
        user_id: api_key,
        template_params: params
    };

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error.text);
    });

    alert("Success Fully Sended")
}

