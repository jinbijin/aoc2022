import { Puzzle } from "./puzzle.enum";
import { Solvand } from "./solvand.type";

export interface SolverStatus {
  solving: Solvand,
  answer: string | null,
}
