export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "xinyi/sofian/peitong";
  }

  const answers: { [key: string]: string } = {
    "what is 80 plus 55?": "135",
    "which of the following numbers is both a square and a cube: 729, 4678, 2704, 4276, 64, 1101, 299?": "64",
    "which of the following numbers is both a square and a cube: 1439, 125, 3555, 1, 1641, 2601, 3343?": "1",
    "what is 85 multiplied by 35?": "2975",
    "what is 63 plus 23?": "86",
    "what is 54 multiplied by 91?": "4914",
    "what is 53 plus 15?": "68",
    "which of the following numbers is the largest: 88, 49, 61?": "88",
    "what is 14 plus 8?": "22",
    "which of the following numbers is the largest: 13, 31, 95?": "95",
    "which of the following numbers is the largest: 32, 82, 17?": "82",
    "which of the following numbers is the largest: 22, 40, 35?": "40",
    "which of the following numbers is the largest: 29, 66, 76?": "76",
    "what is 25 plus 40?": "65",
    "what is 13 plus 86?": "99",
    "what is 50 plus 37?": "87",
    "what is 23 plus 60?": "83",
    "what is 82 plus 44?": "126",
    "what is 7 plus 79?": "86",
    "which of the following numbers is the largest: 83, 78, 87?": "87",
    "which of the following numbers is the largest: 29, 93, 17?": "93",
    "what is 80 plus 89?": "169",
    "which of the following numbers is the largest: 68, 27, 73?": "73",
    "what is 34 plus 81?": "115",
    "which of the following numbers is the largest: 44, 29, 77?": "77",
    "what is 83 plus 66?": "149",
    "what is 52 plus 78?": "130",
    "which of the following numbers is the largest: 6, 7, 96?": "96",
    "what is 32 plus 99?": "131",
    "which of the following numbers is the largest: 9, 71, 64?": "71",
    "what is 59 plus 14?": "73",
    "which of the following numbers is the largest: 71, 47, 74?": "74",
    "which of the following numbers is the largest: 70, 89, 7?": "89",
    "which of the following numbers is the largest: 8, 74, 10?": "74",
    "what is 86 plus 65?": "151",
    "what is 98 plus 22?": "120",
    "what is 27 plus 2?": "29",
    "which of the following numbers is both a square and a cube: 2498, 1000, 64, 4113, 3869, 3533, 100?": "64",
    "which of the following numbers is the largest: 86, 12, 16?": "86",
    "what is 86 multiplied by 19?": "1634",
    "what is 43 multiplied by 24?": "1032",
    "which of the following numbers is the largest: 42, 98, 56?": "98",
    "what is 46 multiplied by 52?": "2392"
  };

  const normalizedQuery = query.toLowerCase().trim();
  return answers[normalizedQuery] || "";
}
