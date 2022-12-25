export interface SolverValidationResponseMessage {
  type: 'validation-response';
  error: { [key: string]: any } | null;
}
