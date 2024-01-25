const { response, request } = require('express');
const User = require('../models/User.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const salt = 10;

const usersGet = async (req = request, res = response) => {

const user = await User.find();
res .status(200).json({
    message: "Datos cargados correctamente",
    data: users
});

}

const usersPost = async (req = request, res = response) => {
    const body = req.body;
    let user = User(body);
    user.paasword = await bcrypt.hash(user.pasword, salt);
    await user.save();

    res.status(200).json({
        message:"datos agregados correctamente",
        data: body
    });

}

const usersPut = async (req = request, res = response) => {
    const { id } = req.query;
    const updateUser = await User.findByIdAndUpdate(id, userToEdit, { new: true });

    res.status(200).json({
        message:"usuario actualizado",
        data: updateUser
    });
}

const usersDelete = async (req = request, res = response) => {
    const { id } = req.query;
    await User.findByIdAndDelete(id);
    res.status(200).json({
        message: "Eliminado",
        data: id
    });
}

const loginPost = async (req = request, res = response) => {
    const body = req.body;
    const userInformationDb = await User.findOne({ email: body.email, active: true });
    
    if (userInformationDb == null) {
        res.status(400).json({
            message: "user not found",
            data: "null"
        });
    }

const (comparePassword == false) {
    res.status(400).json({
        message: "invalido Password",
        data: "null"
    });
}

const payload = {
    full_name: '${userInformationDb.name} ${userInformationDb.last_name}',
    email: userInformationDb.email
};

res.status(200).json({
    message: "login success",
    data: jwt.sign(payload, process.env.JWT_SIGNATURE)
});

}


module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete,
    loginPost
}