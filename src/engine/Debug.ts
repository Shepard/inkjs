export namespace Debug {
  export function AssertType<T>(
    variable: any,
    type: new () => T,
    message: string
  ): void | never {
    Assert(variable instanceof type, message);
  }

  export function Assert(condition: boolean, message?: string): void | never {
    if (!condition) {
      throw new Error(message);
    }
  }
}
