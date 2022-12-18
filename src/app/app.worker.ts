import * as aoc2022 from 'advent-of-code-2022';
import { Solvand } from './common/solvand.type';
import { SolverInput } from './common/solver-input.type';
import { SolverStatus } from './common/solver-status.type';

addEventListener('message', ({ data }) => {
  const input = data as SolverInput;
  const solvand: Solvand = {
    puzzle: input.puzzle,
    part: input.part,
  }
  const startResponse: SolverStatus = {
    solving: solvand,
    answer: null,
  };
  postMessage(startResponse);

  const answer: string = aoc2022[input.puzzle](new aoc2022.PuzzleInput(input.input, input.part));
  const endResponse: SolverStatus = {
    solving: solvand,
    answer
  };
  postMessage(endResponse);
});
