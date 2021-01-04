import {Category} from '../model/Category'

export default interface CategoryRepo {
    getAll(): Promise<Category[]>
}