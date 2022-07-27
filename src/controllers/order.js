import Order from '../models/order';
import slugify from 'slugify';

export const creatOrder = async (req, res) => { // create product
    req.body.slug = slugify(req.body.name);
    console.log(req.body);
    try {
      const order = await new Order(req.body).save()
      res.json(order);
      console.log(order);
    } catch (error) {
      res.status(400).json({
        message: "Thêm  hóa đơn không thành công"
      })
    }
  }

  
export const listOrder = async (req, res) => { 
      try {
        const order = await Order.find().exec();
        res.json(order);
      } catch (error) {
        res.status(400).json({
          message: 'Hiện hóa đơn không thành công',
        });
      }
  };

  export const removeOrder = async (req, res) => { 
    try {
      const order = await Order.findOneAndDelete({
        _id: req.params.id,
      }).exec();
      res.json(order);
    } catch (error) {
      res.status(400).json({
        message: 'Xóa hóa đơn thành công',
      });
    }
  };

  export const updateOrder = async (req, res) => { 
    const condition = { _id: req.params.id };
    const update = req.body;
    const optional = { new: true };
    try {
      const order = await Order.findOneAndUpdate(
        condition,
        update,
        optional,
      ).exec();
      res.json(order);
    } catch (error) {
      res.status(400).json({
        message: 'update hóa đơn không thành công',
      });
    }
  };
