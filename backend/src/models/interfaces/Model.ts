export default interface IModel<T> {
  create(entity: T): Promise<T | null>;
}
