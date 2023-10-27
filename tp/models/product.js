import { model, Schema } from 'mongoose';

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: false,
  },
});

export default model('Product', productSchema);
