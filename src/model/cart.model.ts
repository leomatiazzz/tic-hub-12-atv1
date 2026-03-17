import { type Product } from "@model/product.model";

export interface CartItem {
  product: Product;
  quantity: number;
}

export class Cart {
  constructor(public listProduct: CartItem[] = []) {}

  hasProduct(product: Product): boolean {
    return this.listProduct.some((item) => item.product.id === product.id);
  }

  add(product: Product, quantity: number = 1): this {
    if (!product.isActive) {
      return this;
    }

    if (!this.hasProduct(product)) {
      this.listProduct.push({ product, quantity });
      return this;
    }

    const itemIndex = this.listProduct.findIndex(
      (item) => item.product.id === product.id,
    );

    if (itemIndex !== -1) {
      this.listProduct[itemIndex]!.quantity += quantity;
    }

    return this;
  }

  get totalItems(): number {
    return this.listProduct.reduce(
      (total, item) => total + item.quantity,
      0,
    );
  }

  get finalPrice(): number {
    return this.listProduct.reduce(
      (total, item) => total + item.product.priceWithDiscount * item.quantity,
      0,
    );
  }

}
