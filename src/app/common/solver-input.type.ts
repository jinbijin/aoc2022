import { PuzzlePart } from "advent-of-code-2022";
import { Puzzle } from "./puzzle.enum";

export interface SolverInput {
  puzzle: Puzzle,
  part: PuzzlePart,
  input: string,
}
