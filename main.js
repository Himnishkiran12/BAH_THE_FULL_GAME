function addUser() {
    name_1 = document.getElementById("name1").value;
    name_2 = document.getElementById("name2").value;
    if (name_1 == "" || name_2 == "") {
        document.getElementById("mah").innerHTML = "Please enter name";
    } else {
        localStorage.setItem("name1", name_1);
        localStorage.setItem("name2", name_2);
        window.location = "himnish.html";
    }
}