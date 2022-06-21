import { userSchema } from '../models/index.js';

export const createUser = async (req, res) =>{
    const {body} = req;
    
    try{
        const user = await userSchema.create(body);
        res.status(201).json({
            msg: 'Usuario creado',
            data: user
        });
    } catch(error){
        return res.status(500).json({
            msg: 'Error al crear usuario'
        })
    }
}