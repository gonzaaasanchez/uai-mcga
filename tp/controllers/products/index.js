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

  create: async (req, res) => {
    try {
      const newProduct = new ProductModel({ ...req.body });

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
};

export default productsController;
