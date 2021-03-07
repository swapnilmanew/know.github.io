// accessing button using id
const button = document.getElementById("know_button");

// if you want to try with new friends name then
const new_friend = document.getElementById("new_friend");

// create an array which contains compliments
const compliments = [
    'you are so nice and being around you makes everything better.',
    'you are so cool and You always know the right thing to say.',
    'You are an awesome friend and You are so special to everyone you know.',
    'You are enough and You make me want to be the best version of myself.',
    'Your perspective is refreshing and You always have the best ideas.',
    'You light up the room and I wish I were more like you.',
    'You are more helpful than you realize and I’ve never met someone as kind as you are.',
    'On a scale from 1 to 10, you are an 11 and You are so special to everyone you know.',
    'You bring out the best in other people and  I appreciate your friendship more than you can know.',
    'You are really courageous and  You helped me realize my own worth.'
];

// displaying friend name
const fr_name = document.getElementById("fr_name");

// accessing div to show data
const show_result = document.getElementById("compliment");


button.addEventListener('click', () =>
{

     // accessing friend name
     var friends_name = document.getElementById("input").value;

     if(friends_name == "")
     {
         alert("yeeeee, dost ka naam to daal re...!!");
     }
     else
     {
          // disabling the button
    button.setAttribute("disabled","true");


    // generating random number

    const random_number = Math.floor(Math.random() * 10);

    console.log(random_number);

    fr_name.innerText = friends_name; 

    show_result.innerHTML = friends_name + " thinks " + compliments[random_number] + " <i class='text-danger fas fa-smile-wink'></i>";

    // hiding the button
    button.classList.add("d-none");

    // displaying the button 
    new_friend.classList.remove("d-none");
    
    const resultt = document.getElementById("second_card");

    resultt.classList.remove("d-none");

}

   

});

new_friend.addEventListener("click",  ()=>
{

    // making the input field empty
    const friends_name = document.getElementById("input").value = "";

    // hiding the button 
    new_friend.classList.add("d-none");

    button.classList.add("d-block");
    button.classList.remove("d-none");
    button.removeAttribute("disabled");

  

});
