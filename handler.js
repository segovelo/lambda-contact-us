window.onload=function(){
    const form = document.getElementById("form");
    form.addEventListener("submit", (event) => {
    // prevent the form submit from refreshing the page
    event.preventDefault();

    const { name, email, message } = event.target;

        // Use your API endpoint URL you copied from the previous step
    const endpoint =
        "https://whispering-earth-18742.herokuapp.com/https://v3rkledk06.execute-api.us-east-1.amazonaws.com/default/sendContactEmail";
    // We use JSON.stringify here so the data can be sent as a string via HTTP
        const body = JSON.stringify({
        senderName: name.value,
        senderEmail: email.value,
        message: message.value
    });
    const requestOptions = {
        method: "POST",
        body: body
    };

    fetch(endpoint, requestOptions)
        .then((response) => {
        if (!response.ok) throw new Error("Error in fetch");
        return response.json();
        })
        .then((response) => {
        document.getElementById("result-text").innerText =
            "Email sent successfully!";
        })
        .catch((error) => {
        document.getElementById("result-text").innerText =
            "An unkown error occured.";
        });
    });
}