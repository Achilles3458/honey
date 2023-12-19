export const softwareTypeConvert = (level) => {
  //0 : Other
  //1 : Remote Access Tool
  //2 : Scanning Tool
  //3 : Wiping Tool
  //4 : File scanning Tool
  //5 : VPN Tool
  //6 : Transfer Tool
  //7 : Capturing Tool
  //8 : Proxy Tool
  switch (level) {
    case 0:
      return 'Other';
    case 1:
      return 'Remote Access Tool';
    case 2:
      return 'Scanning Tool';
    case 3:
      return 'Wiping Tool';
    case 4:
      return 'File scanning Tool';
    case 5:
      return 'VPN Tool';
    case 6:
      return 'Transfer Tool';
    case 7:
      return 'Capturing Tool';
    case 8:
      return 'Proxy Tool';
    default:
      return 'unknown';
  }
};
