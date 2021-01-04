import CategoryRepo from './CategoryRepo'
import {Category} from '../model/Category'

export class CategoryRepoStub implements CategoryRepo {
    getAll_returnValue: Promise<Category[]>


    constructor() {
        this.getAll_returnValue = Promise.resolve([])
    }

    getAll(): Promise<Category[]> {
        return this.getAll_returnValue
    }
}
