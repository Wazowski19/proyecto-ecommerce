import { orderSchema, productSchema } from '../models/index.js';

export const createOrder = async (req, res) =>{
    const {body} = req
    
    try{
        //const product = await productSchema.findById(ID);
        const order = await orderSchema.create(body);
        res.status(201).json({
            msg: 'Orden creada',
            data: order
        });
    } catch(error){
        return res.status(500).json({
            msg: 'Error al crear la orden'
        })
    }
}

export const getOrder = async (req, res) =>{
    const {id} = req.params;

    try {
        const order = await orderSchema.findById(id).populate('client').populate('products.product');
        if(!order){
            return res.status(404).json({
                msg: `Orden no encontrada con id ${id}`
            });
        }

        return res.json({
            msg: 'Orden encontrado',
            data: order
        })
    } catch (error) {
        
    }
}