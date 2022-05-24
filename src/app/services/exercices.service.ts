export class ExerciceService {
    EXERCICES = [
        { id: 12, name: 'Beihrut', duration_minutes: 10, isFinished: false },
        { id: 13, name: 'Miles Davis', duration_minutes: 10, isFinished: false },
        { id: 14, name: 'Amandla', duration_minutes: 10, isFinished: false },
        { id: 15, name: 'Chet Baker', duration_minutes: 10, isFinished: false },
        { id: 16, name: 'Tenderly', duration_minutes: 10, isFinished: false }
      ];

  setStatus(index: number): void{
    if (this.EXERCICES[index].isFinished){
      this.EXERCICES[index].isFinished = false;
    } else {
      this.EXERCICES[index].isFinished = true;
    }
  } 
}