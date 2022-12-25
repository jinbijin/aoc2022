import { NgFor, NgForOf, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';

@Component({
  templateUrl: './error-dialog.component.html',
  imports: [NgIf, NgFor, NgForOf, MatDialogModule, MatListModule],
  standalone: true,
})
export class ErrorDialogComponent {
  readonly errors = inject(MAT_DIALOG_DATA);
}
