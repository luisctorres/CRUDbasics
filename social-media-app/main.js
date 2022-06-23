let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

//event listener for post button
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    console.log("button clicked");
    formValidation();
});

//this will be our form validation function
let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Post cannot be blank!";
        console.log("No Input Detected");
    } else {
        msg.innerHTML = "";
        console.log("Succesful Post");
        acceptData();
        createPost();
    }
};


let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
};

let createPost = () => {
    //this will add the data to our front end
    posts.innerHTML += 
    `
    <div>
        <p>${data.text}</p>
        <span class="options">
            <i onClick="editPost(this)" class="fa-regular fa-pen-to-square"></i>
            <i onClick="deletePost(this)" class="fa-regular fa-trash-can"></i>
        </span>

    </div> 
    `
    //clear input box
    input.value = "";
}

//This function will delete posts
let deletePost = (e) => {
    e.parentElement.parentElement.remove();
}

//This function will let you edit a post
let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}