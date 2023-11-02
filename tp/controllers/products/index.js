import ProductModel from '../../models/product.js';

const productsController = {
  getAll: async (_req, res) => {
    const allProducts = await ProductModel.find({});
    return res.status(200).json({
      status: 200,
      total: allProducts.length,
      data: allProducts,
    });
  },

  getById: async (_req, res) => {
    try {
      const product = await ProductModel.findById(_req.params.id);
      if (product) {
        return res.status(200).json({
          status: 200,
          data: product,
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({
          message: error.message,
          error: true,
        });
      }
    }
  },

  create: async (_req, res) => {
    try {
      const newProduct = new ProductModel({ ..._req.body });
      const product = await newProduct.save();

      if (product) {
        return res.status(201).json({
          message: 'Product successfully created',
          data: product,
          error: false,
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({
          message: error.message,
          error: true,
        });
      }
    }
  },

  update: async (_req, res) => {
    try {
      const productId = _req.params.id;
      const updateData = {
        name: _req.body.name,
        price: _req.body.price,
      };

      const product = await ProductModel.findOneAndUpdate(
        { _id: productId },
        updateData,
        { new: true }
      );
      if (product) {
        return res.status(201).json({
          message: 'Product successfully updated',
          data: product,
          error: false,
        });
      }
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        return res.status(400).json({
          message: error.message,
          error: true,
        });
      }
    }
  },

  delete: async (_req, res) => {
    try {
      const product = await ProductModel.findByIdAndDelete(_req.params.id);
      if (product) {
        return res.status(201).json({
          message: 'Product successfully deleted',
          data: product,
          error: false,
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({
          message: error.message,
          error: true,
        });
      }
    }
  },
};

export default productsController;
