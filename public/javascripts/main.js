document.getElementById('gameForm').addEventListener('submit', function(event) 
{
    
    event.preventDefault();
    const userChoice = document.querySelector('input[name="userResponse"]:checked').value;
    console.log(userChoice);
});
