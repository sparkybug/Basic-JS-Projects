const inputBox = document.querySelector("#inputBox");
const sendBtn = document.querySelector("#sendBtn");
const lastMessage = document.querySelector("#lastMessage");

sendBtn.addEventListener('click', showMessage);

    function showMessage(){
        if(inputBox.value == ''){
            alert("Please Enter A Valid Value");
        }
        else{
            lastMessage.innerHTML = inputBox.value;
        }
    }