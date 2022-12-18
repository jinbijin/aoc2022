import { Puzzle } from "./puzzle.enum";

export interface SolverStatus {
  solving: Puzzle,
  answer: string | null,
}
