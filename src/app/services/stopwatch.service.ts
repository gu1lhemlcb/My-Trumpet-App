import { Subject, Subscription } from "rxjs";
import { Exercice } from "../models/exercice.model";

export class StopwatchService {
    
    public stopWatch = new Subject<Exercice>();
    seconds: number = 0

    constructor(){}

    start(){

    }

    stop(){

    }

    pause(){

    }
}