function Animal(name,color,speed){
    this.name = name;
    this.color = color;
    this.speed = speed;
}
const Animal1 = new Animal("Tiger","Yellow",300);
const Animal2 = new Animal("Deer","Black",600);
const Animal3 = new Animal("horse","Brown",200);
function Detector(AnimalX,AnimalY){

    if(AnimalX.speed>AnimalY.speed){
        return AnimalX.name +" Is Faster";
    }
    else{
        return AnimalY.name+ "Is Faster"
    }
    
}
console.log(Detector(Animal1,Animal2));