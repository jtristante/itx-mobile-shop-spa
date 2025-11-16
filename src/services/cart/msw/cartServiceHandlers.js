import { HttpResponse, http } from 'msw';

let cartCount = 0;

export const ADD_TO_CART_HANDLER = http.post('*/api/cart', () => {
  cartCount += 1;
  return HttpResponse.json({ count: cartCount });
});

export const cartApiHandlers = [ADD_TO_CART_HANDLER];
