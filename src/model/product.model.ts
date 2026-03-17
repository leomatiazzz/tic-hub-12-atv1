import { Category } from "@model/category.model";
import { Shipment } from "@enum/shipment";

export class Product {
  constructor(
    public id: string,
    public title: string,
    public price: number,
    public category: Category,
    public shipment: Shipment,
    public image: string = "",
    public description: string = "",
    public isActive: boolean = true,
    public discountPercentage: number = 0,
    public discountCouponValue: number = 0,
  ) {}

  get priceWithDiscount(): number {
    return (
      this.price -
      this.price * this.discountPercentage -
      this.discountCouponValue
    );
  }
}
