import { Pipe, PipeTransform } from "@angular/core";
import { PuzzlePart } from "advent-of-code-2022";
import { PuzzleConfigService } from "./puzzle-config.service";

@Pipe({
  name: 'puzzlePart',
  standalone: true,
})
export class PuzzlePartPipe implements PipeTransform {
  constructor(private readonly config: PuzzleConfigService) {}

  transform(value: PuzzlePart) {
    return this.config.parts.find(p => p.part === value)!.label;
  }
}
