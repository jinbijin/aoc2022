import * as aoc2022 from 'advent-of-code-2022';
import { SolverInput } from './common/solver-input.type';
import { SolverStatus } from './common/solver-status.type';

addEventListener('message', ({ data }) => {
  const input = data as SolverInput;
  const startResponse: SolverStatus = {
    solving: input.puzzle,
    answer: null,
  };
  postMessage(startResponse);

  const answer: string = aoc2022[input.puzzle](new aoc2022.PuzzleInput(input.input, input.part));
  const endResponse: SolverStatus = {
    solving: input.puzzle,
    answer
  };
  postMessage(endResponse);
});
