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


  export const getTimePassed = (timeInMillis: number): string => {
    const currentTime = new Date().getTime();
    const timePassedInSecs = (currentTime - timeInMillis) / 1000;
    const timePassedInMns = Math.ceil(timePassedInSecs / 60);
    const timePassedInHrs = Math.floor(timePassedInMns / 60);
    if (timePassedInSecs <= 60) {
      return `${Math.floor(timePassedInSecs)} ${
        Math.floor(timePassedInSecs) > 1 ? 'seconds' : 'second'
      } ago`;
    } else if (timePassedInMns <= 60) {
      return `${timePassedInMns} ${
        Math.floor(timePassedInMns) > 1 ? 'minutes' : 'minute'
      } ago`;
    } else if (timePassedInHrs <= 23) {
      return `${timePassedInHrs} ${
        Math.floor(timePassedInHrs) > 1 ? 'hours' : 'hour'
      } ago`;
    } else {
      return `${Math.floor(timePassedInHrs / 24)} ${
        Math.floor(timePassedInHrs / 24) > 1 ? 'days' : 'day'
      } ago`;
    }
  };