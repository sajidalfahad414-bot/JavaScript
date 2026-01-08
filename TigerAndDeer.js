function Animal(name,color,speed){
    this.name = name;
    this.color = color;
    this.speed = speed;
}
const Animal1 = new Animal("Tiger","Yellow",300);
const Animal2 = new Animal("Deer","Black",600);
if(Animal1.speed>Animal2.speed)
{
    console.log(Animal1.name + " is Fast");
}
else{
    console.log(Animal2.name + " is Fast");
}