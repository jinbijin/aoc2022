import { Solvand } from "./solvand.type";

export interface SolverStatusMessage {
  type: 'solver_status',
  solving: Solvand,
  answer: string | null,
}
