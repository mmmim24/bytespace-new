export const currentYear = new Date().getFullYear();

export const minutesToHours = (minutes: number) => {
  if (minutes < 60) return `${minutes} minutes`;
  else {
    let m = minutes % 60,
      h = Math.trunc(minutes / 60);
    return `${h} hours ${m} mins`;
  }
};
