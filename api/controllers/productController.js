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

export const searchProduct = async (req, res) =>{
    const data = req.query;

    try {
        const product = await productSchema.find(data);

        if(product.length === 0){
            return res.status(404).json({
                msg: `Productos no encontrado`
            });
        }

        return res.status(200).json({
            message: "Ok",
            product,
        });
    } catch (error) {
        return res.status(400).json({
            message: "Error al obtener los productos solicitados",
        });
    }
}