import { Subject } from "rxjs";

export class SessionService {

    sessionSubject = new Subject<any[]>();

    private SESSIONS = [
        { id: 1, date: new Date("2022-05-20"), notes: "Frères Jacques OK, revoir Beirhut + lecture de notes.", isFinished: true },
        { id: 2, date: new Date("2022-05-13"), notes: "Reprendre lecture de notes 7-8-9 + Beihrut", isFinished: true },
        { id: 3, date: new Date("2022-05-06"), notes: "Reprendre lecture de partition + Finaliser Beihrut", duration_minutes: 10, isFinished: true },
      ];

  emitSessionSubject(){
    this.sessionSubject.next(this.SESSIONS.slice())
  }

  getSessionById(id: number){
    const session = this.SESSIONS.find((sessionObj) => {
      return sessionObj.id == id
    }); 
    return session
  }

  setStatus(id: number): void{
    const session = this.getSessionById(id);
    if (session) {
      if(session.isFinished) {
        session.isFinished = false;
      } else {
        session.isFinished = true;
      }
    }
    this.emitSessionSubject()
  }
}