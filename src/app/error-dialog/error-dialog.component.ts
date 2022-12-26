import { NestedTreeControl } from '@angular/cdk/tree';
import { NgFor, NgForOf, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule, MatTreeNestedDataSource } from '@angular/material/tree';
import { ErrorMessagePipe } from './error-message.pipe';

@Component({
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss'],
  imports: [
    NgIf,
    NgFor,
    NgForOf,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatTreeModule,
    ErrorMessagePipe,
  ],
  standalone: true,
})
export class ErrorDialogComponent {
  readonly errors = inject(MAT_DIALOG_DATA);

  readonly treeControl = new NestedTreeControl<readonly [string, any]>(
    children
  );

  readonly dataSource = new MatTreeNestedDataSource<readonly [string, any]>();

  constructor() {
    this.dataSource.data = entriesWithArraysFlattenedOnce(this.errors);
  }

  hasChildren = (_: number, node: [string, any]) => !!children(node);
}

function children(
  node: readonly [string, any]
): (readonly [string, any])[] | undefined {
  const [_, value] = node;
  return 'error' in value && value.error && typeof value.error === 'object'
    ? entriesWithArraysFlattenedOnce(value.error)
    : undefined;
}

function entriesWithArraysFlattenedOnce(x: object): (readonly [string, any])[] {
  return Object.entries(x).flatMap(([key, value]) =>
    Array.isArray(value)
      ? value.map((y) => [key.slice(0, key.length - 1), y] as const)
      : [[key, value]]
  );
}
