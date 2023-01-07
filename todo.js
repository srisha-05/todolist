var elements = [];
window.onload = function () {
    if (JSON.parse(localStorage.getItem("elements")) != null) {
        elements = JSON.parse(localStorage.getItem("elements"));
        console.log(elements);
        display();
    }
}
function addelement() {
    if (document.querySelector(".addtxt").value.trim() != "") {
        elements.push(document.querySelector(".addtxt").value.trim());
        localStorage.setItem("elements", JSON.stringify(elements));
        display();
    }
}
function display() {
    document.querySelector(".list").innerHTML = "";
    for (var i = 0; i < elements.length; i++)
        document.querySelector(".list").innerHTML +=
            "<center><div class='element'>" +
            elements[i] +
            "<img class='del' src='delete.png' onclick='del(" + i
            +
            ")'></div></center>";


}
function del(index) {
    elements.splice(index, 1);
    localStorage.setItem("elements", JSON.stringify(elements));
    display();
}
