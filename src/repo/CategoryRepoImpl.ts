import CategoryRepo from './CategoryRepo'
import {Category} from '../model/Category'
import {CategoryRepoStub} from './CategoryRepoDoubles'

export default class CategoryRepoImpl implements CategoryRepo {
    getAll(): Promise<Category[]> {
        const stubValueToBeReplacedByNetworkCallOnceApiIsAvailable = new CategoryRepoStub().getAll_returnValue
        return stubValueToBeReplacedByNetworkCallOnceApiIsAvailable
    }
}
