function Vehicle(Weels,color,price){
    this.Weels = Weels;
    this.color = color;
    this.price = price;
}
const MyVehicle = new Vehicle(4,"RED",5000);
if(MyVehicle.Weels == 4)
{
    console.log("THIS IS A CAR");
}
else{
    console.log("THIS IS A BIKE");
}