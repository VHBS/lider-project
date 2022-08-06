export default interface IService<T> {
  create(entity: T): Promise<T | null>;
}
