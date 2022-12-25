import { Component } from '@angular/core';
import {
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PuzzlePart } from 'advent-of-code-2022';
import { Puzzle } from './common/puzzle.enum';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { PuzzleConfigService } from './puzzle-config.service';
import { PuzzleSolver } from './puzzle-solver.service';

@Component({
  selector: 'aoc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly form = new FormGroup(
    {
      puzzle: new FormControl<Puzzle | null>(null, {
        validators: [Validators.required],
      }),
      part: new FormControl<PuzzlePart | null>(null, {
        validators: [Validators.required],
      }),
      input: new FormControl<string | null>(null, {
        validators: [Validators.required],
      }),
    },
    { asyncValidators: [this.validate()] }
  );

  get controlsValid(): boolean {
    return (
      this.form.controls.part.valid &&
      this.form.controls.puzzle.valid &&
      this.form.controls.input.valid
    );
  }

  get inputValid(): boolean {
    return this.form.valid && this.controlsValid;
  }

  get solveReady(): boolean {
    return this.controlsValid && !this.form.pending;
  }

  get icon(): string {
    return this.controlsValid && this.form.invalid ? 'error' : 'play_arrow';
  }

  get tooltip(): string {
    return this.controlsValid && this.form.invalid ? 'View errors' : 'Solve';
  }

  constructor(
    private readonly dialog: MatDialog,
    public readonly config: PuzzleConfigService,
    public readonly solver: PuzzleSolver
  ) {}

  solve() {
    if (!this.form.valid && !this.controlsValid) {
      this.form.markAllAsTouched();
      return;
    }

    if (!this.form.valid && this.controlsValid) {
      this.dialog.open(ErrorDialogComponent, { data: this.form.errors });
      return;
    }

    const value = this.form.value;
    this.solver.submit({
      type: 'solve-input',
      puzzle: value.puzzle!,
      part: value.part!,
      input: value.input!,
    });
  }

  validate(): AsyncValidatorFn {
    return (control) => {
      const form = control as AppComponent['form'];
      const value = form.value;
      return this.solver.validate({
        type: 'solver-validation',
        puzzle: value.puzzle!,
        input: value.input!,
      });
    };
  }
}
