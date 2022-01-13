let arrayProduct = [];
class Product{
    goods
    sender
    weight
    receiver
    phonenumber
    address
    constructor(goods,sender,weight,receiver,phonenumber,address,status){
        this.goods = goods;
        this.sender = sender;
        this.weight = weight;
        this.receiver = receiver;
        this.phonenumber = phonenumber;
        this.address = address;
        this.status = status;
    }    
    shippingCost(){
        return (10000 + this.weight*100);
    }
}