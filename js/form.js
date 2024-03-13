document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        alert(name+"/"+email+"/"+message);
        // fetch(this.action, {
        //     method: 'POST',
        //     body: formData
        // })
        // .then(response => {
        //     if (response.ok) {
        //         document.getElementById("success").style.display = "block";
        //         document.getElementById("error").style.display = "none";
        //         this.reset(); // Reset the form after successful submission
        //     } else {
        //         document.getElementById("success").style.display = "none";
        //         document.getElementById("error").style.display = "block";
        //     }
        // })
        // .catch(error => {
        //     console.error('Error:', error);
        //     document.getElementById("success").style.display = "none";
        //     document.getElementById("error").style.display = "block";
        // });
    });
});
