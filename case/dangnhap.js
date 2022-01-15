let data = [["admin", "admin"], 
["user", "user"]];
function logIn(){
    let account = document.getElementById("user").value;
    let pw = document.getElementById("pw").value;
    let check = false;
    for (let i = 0; i < data.length; i++){
        if (account === data[i][0] && account === "admin") {
            if (pw === data[i][1] && account === "admin") {
                alert("Đăng nhập thành công");
                check = true
                document.getElementById("form").setAttribute("action",
                "http://127.0.0.1:5500/case/giaodienadmin.html")
                break;
            }
            else {
                alert("Sai mật khẩu");
                return false;
            }          
        }
    }
    if (check === false) {
        alert("Sai tên tài khoản");
        return false;
    }
}