import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { SolverInput } from "./common/solver-input.type";
import { SolverStatus } from "./common/solver-status.type";

@Injectable({ providedIn: 'root' })
export class PuzzleSolver {
  #worker: Worker | null = null;
  readonly #solverStatus: Subject<SolverStatus> = new Subject();
  readonly solverStatus$: Observable<SolverStatus> = this.#solverStatus.asObservable();

  initialize(): void {
    if (typeof Worker !== 'undefined') {
      this.#worker = new Worker(new URL('./app.worker', import.meta.url));
      this.#worker.onmessage = ({ data }) => {
        this.#solverStatus.next(data);
      };
    } else {
      throw new Error('Web workers are required!');
    }
  }

  submit(input: SolverInput): void {
    this.#worker?.postMessage(input);
  }
}
