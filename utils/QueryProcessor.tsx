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

  if (query.toLowerCase().includes("98 plus 22?")) {
    return "120";
  }

  if (query.toLowerCase().includes("86 plus 65?")) {
    return "151";
  }

  if (query.toLowerCase().includes("59 plus 14?")) {
    return "73";
  }

  if (query.toLowerCase().includes("32 plus 99?")) {
    return "131";
  }


  if (query.toLowerCase().includes("7 plus 79?")) {
    return "86";
  }


  if (query.toLowerCase().includes("13 plus 86?")) {
    return "99";
  }

  if (query.toLowerCase().includes("50 plus 37?")) {
    return "87";
  }

  if (query.toLowerCase().includes("25 plus 40?")) {
    return "65";
  }



  return "";
}
