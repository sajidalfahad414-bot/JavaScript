function Vehicle(Weels,color,price){
    this.Weels = Weels;
    this.color = color;
    this.price = price;
}
const MyVehicle = new Vehicle(4,"RED",5000);
if(MyVehicle.Weels ===2 )
{
    console.log("THIS IS A BIKE");
}
else if(Vehicle.Weels >= 4){
      console.log("THIs IS A CAR");
}
else{
    console.log("INVALID");
}