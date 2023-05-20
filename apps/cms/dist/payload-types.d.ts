/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */
export interface Config {
    collections: {
        users: User;
        products: Product;
        categories: Category;
        media: Media;
    };
    globals: {};
}
export interface User {
    id: string;
    name?: string;
    roles: ('admin' | 'customer')[];
    cart?: {
        items?: {
            product?: string | Product;
            quantity?: number;
            id?: string;
        }[];
    };
    updatedAt: string;
    createdAt: string;
    email?: string;
    resetPasswordToken?: string;
    resetPasswordExpiration?: string;
    loginAttempts?: number;
    lockUntil?: string;
    password?: string;
}
export interface Product {
    id: string;
    title: string;
    price?: number;
    description?: {
        [k: string]: unknown;
    }[];
    categories?: string[] | Category[];
    updatedAt: string;
    createdAt: string;
}
export interface Category {
    id: string;
    title?: string;
    updatedAt: string;
    createdAt: string;
}
export interface Media {
    id: string;
    updatedAt: string;
    createdAt: string;
    url?: string;
    filename?: string;
    mimeType?: string;
    filesize?: number;
    width?: number;
    height?: number;
}
//# sourceMappingURL=payload-types.d.ts.map