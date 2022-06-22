import { productSchema } from '../models/index.js';

export const createProduct = async (req, res) =>{
    const {body} = req;
    
    try{
        const product = await productSchema.create(body);
        res.status(201).json({
            msg: 'Producto creado',
            data: product
        });
    } catch(error){
        return res.status(500).json({
            msg: 'Error al crear producto'
        })
    }
}