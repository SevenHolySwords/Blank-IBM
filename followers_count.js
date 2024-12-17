let count = 0 
function increaseCount() {
    console.log("THis worked");
    count++;// increment the count by 1 
    displayCount();
    checkCountValue();
}

function displayCount(){
    document. getElementById('countDisplay').innerHTML=count; //display the count
}

function checkCountValue() {
    if (count ===10){
        alert("YOur instagram post gained 10 followers! COngratulations!");
    }else if (count===20){
        alert("Your Instagram post gained 20 followers! keep it up!");
    }

    }
function resetCount(){
    count=0;
}
