import * as aoc2022 from 'advent-of-code-2022';
import { ToWorkerMessage } from './common/messages.type';
import { Puzzle } from './common/puzzle.enum';
import { Solvand } from './common/solvand.type';
import { SolverStatusMessage } from './common/solver-status-message.type';
import { SolverValidationResponseMessage } from './common/solver-validation-response-message.type';

addEventListener('message', ({ data }) => {
  const message = data as ToWorkerMessage;
  if (message.type === 'solve-input') {
    const solvand: Solvand = {
      puzzle: message.puzzle,
      part: message.part,
    };
    const startResponse: SolverStatusMessage = {
      type: 'solver_status',
      solving: solvand,
      answer: null,
      duration: null,
    };
    postMessage(startResponse);

    performance.mark('solve-started');
    const answer: string = aoc2022[message.puzzle](
      new aoc2022.PuzzleInput(message.input, message.part)
    );
    performance.mark('solve-finished');
    const measure = performance.measure(
      'solve',
      'solve-started',
      'solve-finished'
    );

    const endResponse: SolverStatusMessage = {
      type: 'solver_status',
      solving: solvand,
      answer,
      duration: measure.duration,
    };
    postMessage(endResponse);
  }

  if (message.type === 'solver-validation') {
    if (
      message.puzzle === Puzzle.CalorieCounting ||
      message.puzzle === Puzzle.RockPaperScissors
    ) {
      const error = aoc2022[`${message.puzzle}_validate`](message.input);
      const response: SolverValidationResponseMessage = {
        type: 'validation-response',
        error,
      };
      postMessage(response);
    } else {
      const response: SolverValidationResponseMessage = {
        type: 'validation-response',
        error: null,
      };
      postMessage(response);
    }
  }
});
