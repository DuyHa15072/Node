import Category from "../models/category";
import slugify from 'slugify';
import Product from '../models/product';


export const create = async (req, res ) => {  // create product
    req.body.slug = slugify(req.body.name);
    try {
        const category = await new Category(req.body).save()
        res.json(category);
    } catch (error) {
        res.status(400).json({
            message: "Them danh muc khong thanh cong"
        })
    }
}

export const list = async (req, res) => { //get all
     try {
         const categories = await Category.find().exec()
     } catch (error) {
         res.status(400).json({
             message: " loi "
         })
     }
}

export const read = async (req, res) => {

    try {
        const category = await Category.findOne({slug: req.params.slug}).exec();
        const products = await Product.find({category: category}).populate('category').select('-category').exec()
        res.json({
            category, products
        });
    } catch (error) {
        res.status(400).json({
            message: " loi"
        })
    }
}
