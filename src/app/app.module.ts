import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
    import {MatButtonModule} from '@angular/material/button';
import { PuzzleSolver } from './puzzle-solver.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: (solver: PuzzleSolver) => () => solver.initialize(), deps: [PuzzleSolver], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
