import ObjectsDataSource from './datasource/Objects'

export const objectsDataSource = new ObjectsDataSource()

export interface Context {
    objectsDataSource: ObjectsDataSource;
}

export const context: Context = {
    objectsDataSource,
}
