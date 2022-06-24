import { userSchema } from '../models/index.js';
import bcryp from 'bcrypt';
import jwt from 'jwt-simple';

export const createUser = async (req, res) =>{
    const {body} = req;
    
    try{
        body.password = await bcryp.hash(body.password, 3);
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

export const login = async (req, res) =>{
    const { email, password } = req.body;

    if (email == undefined || password == undefined) {
        return res.status(400).json({
        msg: 'Datos incompletos, ingrese email & password',
        });
    }
    try {
        const user = await userSchema.findOne({email: `${email}`});

        const match = await bcryp.compare(password, user.password);

        if (!match) {
        return res.status(401).json({
            msg: 'Bad credentials',
        });
        }

        delete user.password;

        const expDate = new Date();
        expDate.setMinutes(expDate.getMinutes() + 30);

        const token = jwt.encode(
        {
            user,
            expDate,
            rol,
        },
        process.env.JWT_SECRET
        );
        
        return res.json({
        msg: 'Usuario encontrado',
        token,
        });

        
    } catch (err) {
        return res.status(404).json({
        msg: 'No existe un usuario registrado con ese correo',
        });
    }

}