export const date = {
    today: () => new Date(),
    getStartOfDay: (someDate: Date) =>
      new Date(someDate.getFullYear(), someDate.getMonth(), someDate.getDate()),
    getPreviousDayDate: (today: Date) =>
      new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1),
  };



