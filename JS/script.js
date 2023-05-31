
function login1(){

    var meil = document.getElementById("mail").value;
    var paroli = document.getElementById("pswd").value;
    

    if (meil == "" || meil.lenght == 0) {
        window.alert("ჩაწერილი ელფოსიტის ფორმატი არასწორია, გთხოვთ შეიყვანოთ ელფოსტა");
    }else if (paroli == "" || paroli.lenght < 6) {
        window.alert("შეყვანილი მონაცემები არასწორია, გთხოვთ შეიყვანეთ პაროლი");
    }

}