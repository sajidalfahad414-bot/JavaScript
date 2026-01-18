class Discipline {
    constructor(name, code) {
        this.disciplineName = name;
        this.disciplineCode = code;
    }

    showDetails() {
        console.log(` - ${this.disciplineName} (Code: ${this.disciplineCode})`);
    }
}

class Institute {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.disciplines = []; 
    }

    addDiscipline(discipline) {
        this.disciplines.push(discipline);
    }

    showInstituteInfo() {
        console.log(`Institute: ${this.name}\nLocation: ${this.location}`);
        console.log(`Available Disciplines:`);
        // Loop through the objects stored in the array
        this.disciplines.forEach(dept => dept.showDetails());
    }
}

// Usage
const webD = new Discipline("Web Development", "WD");
const graphics = new Discipline("Graphics Design", "GD");

const arodesk = new Institute('Arodesk', "Rajshahi");
arodesk.addDiscipline(webD);
arodesk.addDiscipline(graphics);

arodesk.showInstituteInfo();