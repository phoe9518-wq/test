const btn = document.getElementById('btn');

btn.addEventListener('click', function(event) {
    event.preventDefault(); 
    
    console.log("Bottone cliccato senza ricaricare!");
});