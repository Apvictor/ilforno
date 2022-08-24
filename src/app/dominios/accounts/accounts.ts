import { Products } from './../products/products';
import { Customers } from "../customers/customers";

export class Accounts {
    id?: number;
    total?: number;
    status?: string;
    customer?: Customers;
    products?: Products[];

    constructor() {
        this.total = 0;
        this.products = [];
    }
}