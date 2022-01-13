let data = [["admin","user"],
["admin","user"]];
function logIn(){
    let user = document.getElementById("user").value;
    let pw = document.getElementById("pw").value;
    for (let i = 0; i < data.length; i++){
        for (let j = 0; j < data[i].length; j++){
            if (user == data[0][j]){
                if (pw == data[1][j]){
                    alert("Đăng nhập thành công");
                    break;
                }
                else {
                    alert("Sai mật khẩu");
                    break;
                }
            }
            else{
                alert("Sai tên tài khoản");
                break;
            }
        }
    }
}