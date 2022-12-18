import { Pipe, PipeTransform } from "@angular/core";
import { Puzzle } from "./common/puzzle.enum";
import { PuzzleConfigService } from "./puzzle-config.service";

@Pipe({
  name: 'puzzle',
  standalone: true,
})
export class PuzzlePipe implements PipeTransform {
  constructor(private readonly config: PuzzleConfigService) {}

  transform(value: Puzzle): string {
    return this.config.puzzles.find(p => p.solver === value)!.label;
  }
}
