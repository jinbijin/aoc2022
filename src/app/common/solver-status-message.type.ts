import { Solvand } from './solvand.type';

export interface SolverStatusMessage {
  type: 'solver_status';
  solving: Solvand | null;
  answer: string | null;
}
