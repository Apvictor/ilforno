import { Categories } from 'src/app/dominios/categories/categories';

export class Products {
    id?: number;
    name?: string;
    image?: string;
    price?: number;
    description?: string;
    amount?: number;
    categoryId?: Categories;
}