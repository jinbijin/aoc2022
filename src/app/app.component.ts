import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { calorie_counting, ParseContentsError, PuzzleInput, PuzzlePart, pyroclastic_flow, rock_paper_scissors } from 'advent-of-code-2022';

type Solver = (input: PuzzleInput) => string;

@Component({
  selector: 'aoc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly puzzleOptions = [
    { label: 'Day 1: Calorie Counting', solver: calorie_counting },
  ];
  readonly partOptions = [
    { label: 'Part 1', part: PuzzlePart.Part1 },
    { label: 'Part 2', part: PuzzlePart.Part2 },
  ]
  readonly form = new FormGroup({
    puzzle: new FormControl<Solver | null>(null, {validators: [Validators.required]}),
    part: new FormControl<PuzzlePart | null>(null, {validators: [Validators.required]}),
    input: new FormControl<string | null>(null, {validators: [Validators.required]}),
  });

  last_solution: string | null = null;

  constructor() { }

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
