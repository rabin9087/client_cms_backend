import { getAProduct, getAllProducts, getAllProductByCatId } from "../../models/product/productModel.js"

export const getAllProductController = async (req, res, next) => {
    try {
        const { slug } = req.params
        const products = slug ? await getAProduct(slug) : await getAllProducts()
        res.status(200).json({
            status: "success",
            message: "Here is all Products",
            products
        })
    } catch (error) {
        next(error)
    } 
}

export const getAllProductByID = async (req, res, next) => {
    try {
        const { _id } = req.params

        const products = await getAllProductByCatId(_id)
        
        res.status(200).json({
            status: "success",
            message: "Here is all Products",
            products
        })
    } catch (error) {
        next(error)
    }
}