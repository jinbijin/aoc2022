import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PuzzleInput, PuzzlePart } from 'advent-of-code-2022';
import { PuzzleConfigService } from './puzzle-config.service';

type Solver = (input: PuzzleInput) => string;

@Component({
  selector: 'aoc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly form = new FormGroup({
    puzzle: new FormControl<Solver | null>(null, {validators: [Validators.required]}),
    part: new FormControl<PuzzlePart | null>(null, {validators: [Validators.required]}),
    input: new FormControl<string | null>(null, {validators: [Validators.required]}),
  });

  last_solution: string | null = null;

  constructor(public readonly config: PuzzleConfigService) { }

  solve() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.value;
    const solver = value.puzzle!;
    const part = value.part!;
    const input = value.input!;

    this.last_solution = solver(new PuzzleInput(input, part));
    console.log(this.last_solution);
  }
}

if (typeof Worker !== 'undefined') {
  // Create a new
  const worker = new Worker(new URL('./app.worker', import.meta.url));
  worker.onmessage = ({ data }) => {
    console.log(`page got message: ${data}`);
  };
  worker.postMessage('hello');
} else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
}