import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PuzzleSolver } from './puzzle-solver.service';
import { PuzzlePipe } from './puzzle.pipe';
import { PuzzlePartPipe } from './puzzle-part.pipe';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

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
