import { Puzzle } from "./puzzle.enum";

export interface SolverValidationMessage {
  type: 'solver-validation',
  puzzle: Puzzle,
  input: string,
}
