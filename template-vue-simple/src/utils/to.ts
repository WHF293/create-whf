export default function to<T, U = Error>(fn: Promise<T>, error?: U): Promise<[null, T] | [U, null]> {
  return fn.then<[null, T]>((res: T) => [null, res]).catch<[U, null]>((err: U) => [error || err, null])
}
