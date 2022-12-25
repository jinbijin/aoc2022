import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { Observable, of, startWith, Subject, take } from 'rxjs';
import { FromWorkerMessage } from './common/messages.type';
import { SolveInputMessage } from './common/solve-input-message.type';
import { SolverStatusMessage } from './common/solver-status-message.type';
import { SolverValidationMessage } from './common/solver-validation-message.type';

@Injectable({ providedIn: 'root' })
export class PuzzleSolver {
  #worker: Worker | null = null;
  readonly #solverStatus: Subject<SolverStatusMessage> = new Subject();
  readonly solverStatus$: Observable<SolverStatusMessage> = this.#solverStatus
    .asObservable()
    .pipe(
      startWith({ type: 'solver_status', solving: null, answer: null } as const)
    );
  readonly #solverValidationErrors: Subject<ValidationErrors | null> =
    new Subject();
  readonly solverValidationErrors$: Observable<ValidationErrors | null> =
    this.#solverValidationErrors.asObservable();

  initialize(): void {
    if (typeof Worker !== 'undefined') {
      this.#worker = new Worker(new URL('./app.worker', import.meta.url));
      this.#worker.onmessage = ({ data }) => {
        const message = data as FromWorkerMessage;
        if (message.type === 'solver_status') {
          this.#solverStatus.next(message);
        } else if (message.type === 'validation-response') {
          this.#solverValidationErrors.next(message.error ?? null);
        }
      };
    } else {
      throw new Error('Web workers are required!');
    }
  }

  submit(input: SolveInputMessage): void {
    this.#worker?.postMessage(input);
  }

  validate(
    input: SolverValidationMessage
  ): Observable<ValidationErrors | null> {
    const worker = this.#worker;
    if (!worker) {
      return of(null);
    }

    return new Observable((subscriber) => {
      const subscription = this.solverValidationErrors$
        .pipe(take(1))
        .subscribe(subscriber);
      worker.postMessage(input);
      return subscription;
    });
  }
}
