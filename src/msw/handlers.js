import { cartApiHandlers } from '../services/cart/msw/cartServiceHandlers.js';
import { productApiHandlers } from '../services/products/msw/productServiceHandlers.js';

export const handlers = [...productApiHandlers, ...cartApiHandlers];
