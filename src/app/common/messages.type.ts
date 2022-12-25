import { SolveInputMessage } from './solve-input-message.type';
import { SolverStatusMessage } from './solver-status-message.type';
import { SolverValidationMessage } from './solver-validation-message.type';
import { SolverValidationResponseMessage } from './solver-validation-response-message.type';

export type ToWorkerMessage = SolveInputMessage | SolverValidationMessage;
export type FromWorkerMessage =
  | SolverStatusMessage
  | SolverValidationResponseMessage;
