export abstract class Repository<TDto, TEntity> {
   abstract create(data: TDto): Promise<TDto>;
   abstract findAll(filter?: Partial<TEntity>): Promise<TEntity[]>;
   abstract findOne(filter: Partial<TEntity>): Promise<TEntity>;
   abstract update(id: number, data: Partial<TEntity>): Promise<TEntity>;
   abstract remove(id: number): Promise<void>;
}
