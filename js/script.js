// Ini JavaScript(JS)

// Buat nampilin command prompt nama user
let name = prompt("Siapakah nama anda?", "")
document.getElementById("name").innerHTML = name;

 

// Untuk Validasi di bagian message us
function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birtDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;
   
    if (name == ""|| birtDate == "" || gender == "" || messages == ""){
        alert("Tidak boleh ada yang kosong!");
        return false;
    }

    const time = Date.now();
    const date = new Date(time);
    const currentDate = date.toString();
    document.getElementById("real-date-time").innerHTML = currentDate;

    setSenderUI(currentDate,name,birtDate,gender,messages);
    return false;
}

//Untuk menampilkan di Message Box
function setSenderUI(currentDate,name,birtDate,gender,messages){
    document.getElementById("real-date-time").innerHTML = currentDate;
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birtDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}


let indexSlide = 1;
    showBanner(1);

function nextSlide(n) {
    showBanner(indexSlide += n);
}

function showBanner(indexBanner){
    let listImage =  document.getElementsByClassName('banner-img');
    if (indexBanner > listImage.length) indexSlide = 1;

    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = "none";
        index++;
    }

    listImage[indexSlide - 1].style.display = "block";
}

setInterval(() => nextSlide(1), 3000); //5000 adalah 5 detik.