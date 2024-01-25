const { response, request } = require('express');
const Product = require('../models/product.model');

const productsGet = async (req = request, res = response) => {

    const products = await Product.find();
    res.status(200).json({
        message: "datos cargado",
        data: products
    });
}

const productsPost = async (req = request, res = response) => {
    const body = req.body;
    let product = Product(body);
    await product.save();

    res.status(200).json({
        message: "datos agregados",
        data: body
    });
}


const productsPut = (req = request, res = response) => {
    res.send('PUT /products');
}

const productsDelete = async (req = request, res = response) => {
    const { id } = req.query;
    await Product.findByIdAndDelete(id);
    res.status(200).json({
        message: "Registro eliminado",
        data: id


});
}

    module.exports = {
        productsGet,
        productsPost,
        productsDelete,
        productsPut

    }