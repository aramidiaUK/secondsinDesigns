export const getYears = startYear => {
    let currentYear = new Date().getFullYear(),
      years = [];
    startYear = startYear || 1960;
    while (startYear <= currentYear) {
      years.push(startYear++);
    }
    return years;
  };
  
  export const months = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];