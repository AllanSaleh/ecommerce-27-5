export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    quantity?: number; // optional for managing quantity in cart
}