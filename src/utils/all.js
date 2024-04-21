/** */
export const getFormattedDate = (date) =>
  date
    ? new Date(date).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : '';
