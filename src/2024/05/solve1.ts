import { readFileSync } from "fs";
import { splitIntoLines } from "../../lib/split-into-lines";
import { EMPTYLINE } from "../../lib/regex";

type PageRule = {
  firstPageNumber: number;
  secondPageNumber: number;
}

export const solve = (filename: string): number => {
  const [ pageRulesInput, pagesInput ] = readFileSync(filename, 'utf8').toString().split(EMPTYLINE);
  const pageRules = parsePageRules(pageRulesInput);
  const pages = parsePages(pagesInput);

  return pages.filter(page => 
    pageRules.map(pageRule => 
        !(page.includes(pageRule.firstPageNumber) && page.includes(pageRule.secondPageNumber)) ||
        page.indexOf(pageRule.firstPageNumber) < page.indexOf(pageRule.secondPageNumber)
      ).reduce((acc, curr) => acc && curr, true)
  ).map(page => page[(page.length - 1) / 2])
  .reduce((acc, curr) => acc + curr, 0);
}

const parsePageRules = (input: string): PageRule[] => {
  return splitIntoLines(input).map(line => line.split('|').map(value => parseInt(value))).map(page => ({ firstPageNumber: page[0], secondPageNumber: page[1] }));
}

const parsePages = (input: string): number[][] => {
  return splitIntoLines(input).map(line => line.split(',').map(value => parseInt(value)));
}