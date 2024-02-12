export function instanceOfNodeError<T extends new (...options: any) => Error>(
  value: unknown,
  errorType: T,
): value is InstanceType<T> & NodeJS.ErrnoException {
  return value instanceof errorType
}
