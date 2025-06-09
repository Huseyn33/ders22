let user =[
    ["sona12@gmail.com"],
    ["ali12@mail.ru"],
    ["tunar13@hotmail.com"]
]
function checkuser() {
    let mail= document.getElementById("exampleInputEmail1").value
    let finduser=user.find(element => element[0]==mail)
    if (finduser) {
        alert("istifadeci tapildi")
        window.location.href="https://www.snap.com/terms?lang=tr-TR"
    } else {
        alert("istifadeci tapilmadi") 
        window.location.href="https://accounts.snapchat.com/v2/signup"
    }
}
