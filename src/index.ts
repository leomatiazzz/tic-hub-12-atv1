import { Category } from "@model/category.model";
import { Product } from "@model/product.model";
import { Shipment } from "@enum/shipment";
import { Cart } from "@model/cart.model";
import { User } from "@model/user.model";
import { Role } from "@enum/role";

const user: User = new User(
  "1",                // id
  "Léo",              // username
  "leomatias@teste.com",  // email
  Role.COSTUMER,      // role
);

console.group("> ( Users )\n");
console.info(user);
console.log("\n");
console.groupEnd();


const gameConsole: Category = new Category("1", "Console", "Console de Jogos");
const game: Category = new Category("2", "Jogo", "Jogo");

console.group("> ( Categories )\n");
console.info(gameConsole);
console.info(game);
console.log("\n");
console.groupEnd();

const ps5: Product = new Product(
  "1",                                                                      // id
  "Console PlayStation 5 Slim, Edição Digital",                             // title
  3_999.90,                                                                 // price
  gameConsole,                                                              // category
  Shipment.AMAZON,                                                          // shipment
  "https://m.media-amazon.com/images/I/51SM5xU-M1L.jpg",                                                                       // image
  "Armazenamento: 1 TB SSD. Resolução: até 4K 120fps com suporte a Ray Tracing", // description
  true,                                                                     // isActive
  0.09,                                                                     // discountPercentage
  20,                                                                       // discountCouponValue
);

const godOfWar: Product = new Product(
  "2",                                                                          // id
  "God of War Ragnarök Standard Edition (Físico)",                             // title
  249.90,                                                                       // price
  game,                                                                         // category
  Shipment.FREE,                                                                // shipment
  "https://m.media-amazon.com/images/I/8136lnf0n2L.jpg",                                                                           // image
  "Plataforma: PlayStation 5. Edição: Standard Edition. Formato: Físico.",      // description
  true,                                                                         // isActive
  0,                                                                            // discountPercentage
  0,                                                                            // discountCouponValue
);

const eldenRing: Product = new Product(
  "3",                                                                          // id
  "Elden Ring Standard Edition (Físico)",                                       // title
  299.90,                                                                       // price
  game,                                                                         // category
  Shipment.AMAZON,                                                              // shipment
  "https://http2.mlstatic.com/D_Q_NP_774973-MLA99586538384_122025-O.webp",                                                                           // image
  "Plataforma: PlayStation 5. Edição: Standard Edition. Formato: Físico.",      // description
  true,                                                                         // isActive
  0.05,                                                                         // discountPercentage
  15,                                                                           // discountCouponValue
);

const finalFantasyViiRemake: Product = new Product(
  "4",                                                                          // id
  "Final Fantasy VII Remake Standard Edition (Físico)",                         // title
  199.90,                                                                       // price
  game,                                                                         // category
  Shipment.FREE,                                                                // shipment
  "https://http2.mlstatic.com/D_Q_NP_2X_896295-CBT97221338878_112025-P.webp",                                                                           // image
  "Plataforma: PlayStation 5. Edição: Standard Edition. Formato: Físico.",      // description
  true,                                                                         // isActive
  0,                                                                            // discountPercentage
  0,                                                                            // discountCouponValue
);

console.group("> ( Products )\n");
console.info(ps5);
console.info(godOfWar);
console.info(eldenRing);
console.info(finalFantasyViiRemake);
console.log("\n");
console.groupEnd();

const cart: Cart = new Cart();

console.group("> ( Cart )\n");
console.info(cart);
console.log("\n");
console.groupEnd();

console.group("> ( Procedures )\n");

console.log("Add PS5 to cart");
cart.add(ps5, 1);
console.group("> ( Cart Info )\n");
console.log(`items: ${cart.totalItems}\t price: ${cart.finalPrice}`);
console.log("\n");
console.groupEnd();

console.log("Add God of War to cart");
cart.add(godOfWar, 1);
console.group("> ( Cart Info )\n");
console.log(`items: ${cart.totalItems}\t price: ${cart.finalPrice}`);
console.log("\n");
console.groupEnd();

console.log("Add Elden Ring to cart");
cart.add(eldenRing, 1);
console.group("> ( Cart Info )\n");
console.log(`items: ${cart.totalItems}\t price: ${cart.finalPrice}`);
console.log("\n");
console.groupEnd();

console.log("Add Final Fantasy VII Remake to cart");
cart.add(finalFantasyViiRemake, 1);
console.group("> ( Cart Info )\n");
console.log(`items: ${cart.totalItems}\t price: ${cart.finalPrice}`);
console.log("\n");
console.groupEnd();

console.info(cart);