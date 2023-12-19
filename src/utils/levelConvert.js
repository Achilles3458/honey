export const levelConvert = (level) => {
  switch (level) {
    case 0:
      return "Low";
    case 1:
      return "Medium";
    case 2:
      return "High";
    case 3:
      return "Critical";
    default:
      return "unknown";
  }
};
