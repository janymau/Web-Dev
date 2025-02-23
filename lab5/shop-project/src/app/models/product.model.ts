export interface Product{
    name: string;
    description: string;
    price:number;
    rating:number;
    img:string;
    link:string;
    kaspiLink:string;
    likes:number;
}

export interface Category{
    name:string;
    products: Product[];
}