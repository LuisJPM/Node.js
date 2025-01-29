import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    nombre: {
        type: String,
        required : [ true, "El nombre es requerido"],
    },
    correo:{
        type: String,
        required : [ true, "El correo es requerido"],
    },
    password:{
        type: String,
        required : [ true, "la contraseña es requerida"],
    },
    img: {
        type: String,
    },
    phone:{
        type: String,
        minLength: 8,
        maxLength: 8, 
        required: true, 
    },
    role: {
        type: String, 
        required: true,
        enum: ["ADMIN_ROLE", "USER_ROLE"]
    },
    estado:{
        type: Boolean,
        default: true, 
    },
    google: {
        type: Boolean,
        default: false,
    },

})

UserSchema.methods.toJSON = function(){
    const {_v, password, _id, ...usuario} = this.toObject();
    usuario.uid = _id;
    return usuario;
} 

export default mongoose.model('User', UserSchema);