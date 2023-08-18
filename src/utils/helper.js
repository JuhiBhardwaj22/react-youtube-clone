const nameList = [
  "Tasmanian",
  "Spartan",
  "Time",
  "Fan",
  "Pri",
  "Trust",
  "Far",
  "Team ",
  "Propa",
  "Self",
];
export function randomNameStringGenerator() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}
export const randomMessageStringGenerator = (num = 8) => {
  let res = "";
  for (let i = 0; i < num; i++) {
    const random = Math.floor(Math.random() * 20);
    res += String.fromCharCode(97 + random);
  }
  return res;
};
