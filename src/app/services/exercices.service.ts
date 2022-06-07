import { Subject } from "rxjs";

export class ExerciceService {

    exerciceSubject = new Subject<any[]>();

    private EXERCICES = [
        { id: 12, name: 'Échauffement', duration_minutes: 5, description: "Éffectue des DoRéMiFaSol puis des do-mi-sol-do aigue-sol-mi-do aigue.", isFinished: false },
        { id: 13, name: 'Lecture de notes', duration_minutes: 10,description: "Lis quelques partitions sur le cahier.", isFinished: false },
        { id: 14, name: 'Frères Jacques', description: "Joue le morceau.", duration_minutes: 10, isFinished: false },
        { id: 15, name: 'Beihrut', description: "Joue les débuts en tenant bien compte du rythme et en suivant la partition.", duration_minutes: 20, isFinished: false },
      ];

  emitExerciceSubject(){
    this.exerciceSubject.next(this.EXERCICES.slice())
  }

  getExerciceById(id: number){
    const exercice = this.EXERCICES.find((exerciceObj) => {
      return exerciceObj.id == id
    }); 
    return exercice
  }

  setStatus(id: number): void{
    const exercice = this.getExerciceById(id);
    if (exercice) {
      if(exercice.isFinished) {
        exercice.isFinished = false;
      } else {
        exercice.isFinished = true;
      }
    }
    this.emitExerciceSubject();
  }

  // TODO - CHANGE "any"
  addExercice(exercice: any){
    this.EXERCICES.push(exercice);
    this.emitExerciceSubject();
  }

  getLastId(){
    return this.EXERCICES[this.EXERCICES.length -1].id
  }
}