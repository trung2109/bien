function displayProduct(){
    let data = "<table><tr><th>Tên hàng hóa</th><th>Tên người gửi</th><th>Khối lượng hàng(g)</th><th>Tên người nhận</th><th>Sdt người nhận</th><th>Địa chỉ nhận</th><th>Giá vận chuyển(VND)</th><th>Trạng thái đơn hàng</th></tr>" ;
    for (let i = 0; i < arrayProduct.length; i++) {
        data += "<tr>";
        data += "<td>"+ arrayProduct[i].goods +"</td>";
        data += "<td>"+ arrayProduct[i].sender +"</td>";
        data += "<td>"+ arrayProduct[i].weight +"</td>";
        data += "<td>"+ arrayProduct[i].receiver +"</td>";
        data += "<td>"+ arrayProduct[i].phonenumber +"</td>";
        data += "<td>"+ arrayProduct[i].address +"</td>";
        data += "<td>"+ arrayProduct[i].shippingCost() +"</td>";
        data += "<td>"+ arrayProduct[i].status +"</td>";
        data += "<td><button onclick='deleteProduct("+ i +")''>Delete</button></td>";
        data += "</tr>";
        }
    data += "<table>";
    document.getElementById("res").innerHTML = data;
}
displayProduct();
function addProduct(){
    let goods = document.getElementById("goods").value;
    let sender = document.getElementById("sender").value;
    let weight = document.getElementById("weight").value;
    let receiver = document.getElementById("receiver").value;
    let phonenumber = document.getElementById("phonenumber").value;
    let address = document.getElementById("address").value;
    let status = "<select><option>Đang vận chuyển</option><option>Hoàn thành</option><option>Hoàn đơn</option></select>";
    arrayProduct.push(new Product(goods,sender,weight,receiver,phonenumber,address,status));
    displayProduct();
}
function deleteProduct(index){
    if (confirm("Bạn có chắc chắc muốn xóa đơn này?")){
        arrayProduct.splice(index,1);
    }
    displayProduct();
}