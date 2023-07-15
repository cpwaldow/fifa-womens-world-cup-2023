import { teams } from './data.js';

function formatCompactNumber(number) {
  const formatter = Intl.NumberFormat('en', { notation: 'compact' });
  return formatter.format(number);
}
