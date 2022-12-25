import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PuzzlePartPipe } from './puzzle-part.pipe';
import { PuzzleSolver } from './puzzle-solver.service';
import { PuzzlePipe } from './puzzle.pipe';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSelectModule,
    PuzzlePipe,
    PuzzlePartPipe,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (solver: PuzzleSolver) => () => solver.initialize(),
      deps: [PuzzleSolver],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
