import connectDB from "@/server/dataBase";
import { ProductManager } from "@/server/manager/products.manager";
 
import { NextResponse, NextRequest } from "next/server";
const productManager= new ProductManager()

export async function GET(req,{params}){
   
    console.log(params.id);
    try {
       await  connectDB();

   let data = await productManager.getBy({_id:params.id})
        return NextResponse.json( data, {status:201})

    } catch (error) {
        return NextResponse.json({message:"Erssssror", error}, {status:500})
        
    }
}


 