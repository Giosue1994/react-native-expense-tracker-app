export function getDateMinusDays(date, days) {
  // creare una nuova data in cui vengono sottratti i giorni assegnati
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
