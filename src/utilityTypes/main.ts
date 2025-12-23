/**
 * Object transformation:
 * - Partial<T>: Makes all properties in T optional.
 * - Required<T>: Makes all properties in T required.
 * - Readonly<T>: Makes all properties in T readonly.
 * - Pick<T, K>: Picks a set of properties K from T.
 * - Omit<T, K>: Omits a set of properties K from T.
 */

export type Partial<T> = {
  [P in keyof T]?: T[P];
};

export type Required<T> = {
  [P in keyof T]-?: T[P];
};

export type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

export type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

export type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

/**
 * Union and Filter Types:
 * - Exclude<T, U>: Excludes from T those types that are assignable to U.
 * - Extract<T, U>: Extracts from T those types that are assignable to U.
 * - NonNullable<T>: Excludes null and undefined from T.
 */

export type Exclude<T, U> = T extends U ? never : T;

export type Extract<T, U> = T extends U ? T : never;

export type NonNullable<T> = T extends null | undefined ? never : T;



/**
 * Utility types for function manipulation:
 * - Parameters<T>: Extracts the parameter types of a function type T as a tuple.
 * - ReturnType<T>: Extracts the return type of a function type T.
 * - Awaited<T>: Extracts the resolved type of a Promise type T.
 * - ConstructorParameters<T>: Extracts the parameter types of a constructor function type T as a tuple.
 * - InstanceType<T>: Extracts the instance type of a constructor function type T.
 */

export type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

export type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

export type Awaited<T> = T extends Promise<infer U> ? U : T;

export type ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;

export type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;

/**
 * Advanced & This-Context:
 * - ThisParameterType<T>: Extracts the type of the 'this' parameter for function type T.
 * - OmitThisParameter<T>: Removes the 'this' parameter from function type T.
 * - ThisType<T>: Marker interface for contextual 'this' typing.
 * - NoInfer<T>: Prevents type inference for type T.
 */

export type ThisParameterType<T extends (...args: any[]) => any> = T extends (this: infer U, ...args: any[]) => any ? U : never;

export type OmitThisParameter<T extends (...args: any[]) => any> = T extends (this: any, ...args: infer A) => infer R ? (...args: A) => R : never;


export interface ThisType<T> {
  __type__: T;
}

export type NoInfer<T> = [T] extends [infer U] ? U : T;

/**
 * Intrinsic String Manipulation Types:
 * - Uppercase<S>: Converts string literal type S to uppercase.
 * - Lowercase<S>: Converts string literal type S to lowercase.
 * - Capitalize<S>: Capitalizes the first character of string literal type S.
 * - Uncapitalize<S>: Converts the first character of string literal type S to lowercase.
 */

type UppercaseCharacter<S extends string> = S extends `${infer F}${infer Rest}`
  ? `${Uppercase<F>}${Uppercase<Rest>}`
  : S;

export type Uppercase<S extends string> = string extends S ? string : `${UppercaseCharacter<S>}`;

type LowercaseCharacter<S extends string> = S extends `${infer F}${infer Rest}`
  ? `${Lowercase<F>}${Lowercase<Rest>}`
  : S;

export type Lowercase<S extends string> = string extends S ? string : `${LowercaseCharacter<S>}`;

export type Capitalize<S extends string> = S extends `${infer F}${infer Rest}` ? `${Uppercase<F>}${Rest}` : S;

export type Uncapitalize<S extends string> = S extends `${infer F}${infer Rest}` ? `${Lowercase<F>}${Rest}` : S;