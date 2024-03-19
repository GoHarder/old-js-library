/**
 * A library of object related functions.
 * @packageDocumentation
 */
/**
 * A safe way to call `structuredClone()` method.
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)
 * @param value - The object to clone.
 */
export declare const clone: <T = any>(value: T, options?: StructuredSerializeOptions) => any;
/**
 * Deeply merges two objects.
 * @param target - The object to merge in to.
 * @param sources - The objects to merge into the target.
 */
export declare const deepMerge: <T1 extends object, T2>(target: T1, ...sources: T2[]) => T1;
