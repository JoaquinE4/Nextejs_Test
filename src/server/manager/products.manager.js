import { ProductosModels } from "../model/product.model.js";



export class ProductManager{

    async add(product ){
        return  await ProductosModels.create(product)
    }
    async getAll(){
        return await ProductosModels.find()
    }

    async getBy(filtro = {}) {
        return await ProductosModels.findOne(filtro).lean();
      }


}
