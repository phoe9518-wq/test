const form = document.getElementById('contacts-form');

// form.addEventListener('submit', function(event) {
//     event.preventDefault(); 

//     const formData = new FormData(form);

//     fetch("/", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: new URLSearchParams(formData).toString()
//     })
//     .then(() => {
//         alert("Messaggio inviato con successo!");
//         form.reset();
//     })
//     .catch((error) => {
//         alert("Errore durante l'invio: " + error);
//     });
// });