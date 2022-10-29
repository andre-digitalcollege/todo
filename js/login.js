$(document).ready(function () {
    $("#signup-form").submit(function () {
        var nm1 = $("#name1").val();
        var ps1 = $("#pass1").val();
        localStorage.setItem("n1", nm1);
        localStorage.setItem("p1", ps1);
    });


    $("#login-form").submit(function () {
        var enteredName = $("#name2").val();
        var enteredPass = $("#pass2").val();

        var storedName = localStorage.getItem("n1");
        var storedPass = localStorage.getItem("p1");

        if (enteredName == storedName && enteredPass == storedPass) {
            window.location.href = "index.html";
            alert("Logou"); //se tirar o alert, nao direciona a pagina!!
        
        }
        else {
            alert("incorreto!");
        }
    });
});


// $(document).ready(function () {
//     $("#signup-form").submit(function () {
//         var nm1 = $("#name1").val();
//         var ps1 = $("#pass1").val();
//         localStorage.setItem("n1", nm1);
//         localStorage.setItem("p1", ps1);
//     });


// if (statusUsuario == "Ativo") {
//     window.location.href = "todo/todo/index.html";
// }

