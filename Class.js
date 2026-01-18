class Discipline {
    constructor(name, code) {
        this.disciplineName = name;
        this.disciplineCode = code;
    }

    showDetails() {
        
        console.log(`Discipline: ${this.disciplineName} (${this.disciplineCode})`);
    }
}

class Institute extends Discipline {
    constructor(instituteName, id, location) {
        
        super(instituteName, 'INST-000'); 
        this.id = id;
        this.location = location;
        this.disciplines = []; 
    }

    addDiscipline(discipline) {
        this.disciplines.push(discipline);
    }

    showInstituteInfo() {
        console.log(`Institute: ${this.disciplineName}, Location: ${this.location}`);
        console.log(`Available Disciplines: ${this.disciplines.length}`);
    }
}


const webD = new Discipline("Web Development", "WD");
webD.showDetails(); 


let arodesk = new Institute('Arodesk', '000', "Rajshahi");
arodesk.addDiscipline(webD);
arodesk.showInstituteInfo();