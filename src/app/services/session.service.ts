import { Subject } from "rxjs";
import { Session } from "../models/session.model";

export class SessionService {

    sessionSubject = new Subject<any[]>();

    private SESSIONS = [
        { id: 1, date: new Date("2022-05-20"), todo: "", feedback: "Frères Jacques OK, revoir Beirhut + lecture de notes.", isFinished: true },
        { id: 2, date: new Date("2022-05-13"), todo: "", feedback: "Reprendre lecture de notes 7-8-9 + Beihrut", isFinished: true },
        { id: 3, date: new Date("2022-05-06"), todo: "", feedback: "Reprendre lecture de partition + Finaliser Beihrut", duration_minutes: 10, isFinished: true },
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

  addSession(session: Session){
    this.SESSIONS.push(session);
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