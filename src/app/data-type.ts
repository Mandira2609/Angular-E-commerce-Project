export interface signUp{
    name: string,
    password: string,
    email:string
}
export interface login{
    email: any
    name:string,
    password:string
}
export interface product{
    productId: any
   
    name: string,
    price: number,
    category: string,
    color: string,
    description: string,
    image: string,
    id: number,
    quantity: undefined |number
}
export interface cart{
 
    name: string,
    price: number,
    category: string,
    color: string,
    description: string,
    image: string,
    id: number | undefined,
    quantity: undefined |number,
    userId : number,
    productId :number
}
export interface priceSummary{
    price: number,
    discount: number,
    tax: number,
    delivery: number,
    total: number
}
export interface order{
    email: string,
    address: string,
    contact: string,
    totalPrice: number,
    userId: number,
    id: undefined
}