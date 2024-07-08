export const date = {
    today: () => new Date(),
    getStartOfDay: (someDate: Date) =>
      new Date(someDate.getFullYear(), someDate.getMonth(), someDate.getDate()),
    getPreviousDayDate: (today: Date) =>
      new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1),
  };



  export const getPercentage = (
    value: number,
    total: number,
    isCapped: boolean = true,
  ) => {
    if (value > total && isCapped) {
      return 100;
    } else if (value === 0 && total === 0) {
      return 0;
    }
    return (value / total) * 100;
  };
  export const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  export const checkWeek = (toCheckDate: Date, checkDateWith: Date) => {
    if (
      checkDateWith.getMonth() !== toCheckDate.getMonth() ||
      checkDateWith.getFullYear() !== toCheckDate.getFullYear()
    ) {
      return false;
    }
    if (checkDateWith.getDate() - toCheckDate.getDate() <= 7) {
      return true;
    }
  };