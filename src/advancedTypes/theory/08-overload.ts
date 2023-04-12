// Brand => [B,r,a,n,d] => string => string[]
// [B,r,a,n,d] => Brand => string[] => string

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

// export function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join(''); // string
//   } else
//     if (typeof input === 'string') {
//       return input.split(''); // string[]
//     }
// }

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else if (typeof input === 'string') {
    return input.split(''); // string[]
  } else if (typeof input === 'number') {
    return false; // boolean
  }
}

const rtaArray = parseStr('Brand');
rtaArray.reverse();
// if (Array.isArray(rtaArray)) {
//   rtaArray.reverse();
// }
console.log(rtaArray);

const rtaString = parseStr(['B', 'r', 'a', 'n', 'd']);
rtaString.toLowerCase();
// if (typeof rtaString === 'string') {
//   rtaString.toLowerCase();
// }
console.log(rtaString);

const rtaBoolean = parseStr(123);
console.log(rtaBoolean);
