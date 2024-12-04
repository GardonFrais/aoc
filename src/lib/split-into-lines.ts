import { NEWLINE } from "./regex";

export const splitIntoLines = (s: string): string[]  => {
  return s.split(NEWLINE);
};