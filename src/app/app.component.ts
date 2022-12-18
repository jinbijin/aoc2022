import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PuzzleInput, PuzzlePart } from 'advent-of-code-2022';
import { Puzzle } from './common/puzzle.enum';
import { PuzzleConfigService } from './puzzle-config.service';
import { PuzzleSolver } from './puzzle-solver.service';

@Component({
  selector: 'aoc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly form = new FormGroup({
    puzzle: new FormControl<Puzzle | null>(null, {validators: [Validators.required]}),
    part: new FormControl<PuzzlePart | null>(null, {validators: [Validators.required]}),
    input: new FormControl<string | null>(null, {validators: [Validators.required]}),
  });

  constructor(public readonly config: PuzzleConfigService, public readonly solver: PuzzleSolver) { }

  solve() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.value;
    this.solver.submit({
      puzzle: value.puzzle!,
      part: value.part!,
      input: value.input!,
    });
  }
}
