export default function to<T>(fn: Promise<T>): Promise<[null, T] | [Error, null]> {
    return fn.then<[null, T]>((res: T) => [null, res]).catch<[Error, null]>((err: Error) => [err, null])
}