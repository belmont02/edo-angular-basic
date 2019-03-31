import { Product } from '../models/product.model';

export interface ResponseProducts {
    products: Product[];
}

export interface ResponseProduct {
    product: Product;
}

export interface ResponseOk {
    ok: boolean;
    error?: string;
    id?: number;
}
