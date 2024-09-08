import { categoriesList, ICategory } from '@/entities/Category';
import './GridCategories.scss';
import CategoryItem from '@/features/CategoryItem';

export const GridCategories = () => {
    return (
        <div className="GridCategories">
            { categoriesList.map((category: ICategory) => <CategoryItem {...category} />) }
        </div>
    );
}