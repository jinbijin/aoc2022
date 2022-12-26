import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errorMessage',
  standalone: true,
})
export class ErrorMessagePipe implements PipeTransform {
  transform(x: [string, any]): string {
    const [key, value] = x;
    switch (key) {
      case 'section_error':
        return `Section ${value.section + 1} (starting at line ${
          value.first_line + 1
        }):`;
      case 'line_error':
        return typeof value.error === 'string'
          ? `Line ${value.line + 1}: ${value.error}`
          : `Line ${value.line + 1}:`;
      case 'format':
        return formatErrorMessage('input', value);
      case 'opponent_choice':
      case 'target':
        return formatErrorMessage(key, value);
    }
    throw new Error(`Handling error key ${key} is not yet implemented!`);
  }
}

interface FormatError {
  format_description: string;
  actual: string;
}

function formatErrorMessage(description: string, formatError: FormatError) {
  return `${description} "${formatError.actual}" is not in expected format "${formatError.format_description}"`;
}
