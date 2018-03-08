// JavaScript source code



function save() {

    var element = document.getElementsByTagName("ul");

    var name = document.getElementById("name");
    element[0].innerHTML = name.value;

    var age = document.getElementById("age");
    element[1].innerHTML = age.value;

    var birthDate = document.getElementById("birth");
    element[2].innerHTML = birthDate.value;

    var color = document.getElementById("color");
    element[0].style.color = color.value;
    element[1].style.color = color.value;
    element[2].style.color = color.value;



    var detailsArr = [];
    detailsArr[0] = document.getElementById("name").value;
    localStorage.setItem("Name", detailsArr[0]);
    detailsArr[1] = document.getElementById("age").value;
    localStorage.setItem("Age", detailsArr[1]);
    detailsArr[2] = document.getElementById("birth").value;
    localStorage.setItem("Birth", detailsArr[2]);
    detailsArr[3] = document.getElementById("color").value;
    localStorage.setItem("Color", detailsArr[3]);

    localStorage["details"] = JSON.stringify(detailsArr);


}