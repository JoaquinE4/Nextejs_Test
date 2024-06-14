import connectDB from "@/server/dataBase";
import { ProductManager } from "@/server/manager/products.manager";

import { NextResponse } from "next/server";
const productManager= new ProductManager()
export async function POST(req){
    try {
       await  connectDB();
        const {title,description,thumbnail,price,stock,categoria} = await req.json()
        let code = Date.now()
        let data = {
            title,
            description,
            thumbnail,
            price,
            stock,
            categoria,
            code

        }
        console.log(data);
        
        await productManager.add(data)
        return NextResponse.json({message:"Producto Creado", data}, {status:201})

    } catch (error) {
        return NextResponse.json({message:"Erssssror", error}, {status:500})
        
    }
}

export async function GET(){
    try {
       await  connectDB();
        let data = await productManager.getAll()
        return NextResponse.json( data, {status:201})

    } catch (error) {
        return NextResponse.json({message:"Erssssror", error}, {status:500})
        
    }
}

/* export async function GET(id){
    try {
       await  connectDB();
        let data = await productManager.getBy(id)
        return NextResponse.json( data, {status:201})

    } catch (error) {
        return NextResponse.json({message:"Erssssror", error}, {status:500})
        
    }
}


  */