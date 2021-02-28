import React, { useState, useEffect } from "react";
import "./styles/GlobalStyles.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { commerce } from "./lib/commerce";
import {
  Products,
  Navbar,
  Mug,
  Hoodie,
  Tshirt,
  Sticker,
  HoodieDetails,
  MugDetails,
  StickerDetails,
  TshirtDetails,
  ProductDetails,
  Cart,
  Favorites,
  FavoritesDetails,
  Search,
  SearchDetails,
  Checkout,
  PaymentForm,
  AddressForm
} from "./components";
// components
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Team from "./components/Team/Team"
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalProvider } from "./context/GlobalState";

export default function App() {
  const [hasAccount, setHasAccount] = useState(false);

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list({ limit: 100 }, { page: 5 });
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  const handleUpdateQuantity = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  const handleRemoveItem = async productId => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(products);
  console.log(cart);

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Navbar products={products} totalItems={cart.total_items} />
        <div className="container">
          <div className="row">
            <Switch>
              <Route exact path="/">
                <Products products={products} onAddToCart={handleAddToCart} />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/search">
                <Search products={products} onAddToCart={handleAddToCart} />
              </Route>
              <Route exact path="/favorites">
                <Favorites products={products} onAddToCart={handleAddToCart} />
              </Route>
              <Route exact path="/tshirts">
                <Tshirt products={products} onAddToCart={handleAddToCart} />
              </Route>
              <Route exact path="/mugs">
                <Mug products={products} onAddToCart={handleAddToCart} />
              </Route>
              <Route exact path="/hoodie">
                <Hoodie products={products} onAddToCart={handleAddToCart} />
              </Route>
              <Route exact path="/sticker">
                <Sticker products={products} onAddToCart={handleAddToCart} />
              </Route>
              <Route path="/accesory/:accesoryID">
                <ProductDetails
                  products={products}
                  onAddToCart={handleAddToCart}
                />
              </Route>
              <Route path="/hoodie/:hoodieID">
                <HoodieDetails
                  products={products}
                  onAddToCart={handleAddToCart}
                />
              </Route>
              <Route path="/mug/:mugID">
                <MugDetails products={products} onAddToCart={handleAddToCart} />
              </Route>
              <Route path="/sticker/:stickerID">
                <StickerDetails
                  products={products}
                  onAddToCart={handleAddToCart}
                />
              </Route>
              <Route path="/tshirt/:tshirtID">
                <TshirtDetails
                  products={products}
                  onAddToCart={handleAddToCart}
                />
              </Route>
              <Route path="/favorites/:favoritesID">
                <FavoritesDetails
                  products={products}
                  onAddToCart={handleAddToCart}
                />
              </Route>
              <Route path="/search/:searchID">
                <SearchDetails
                  products={products}
                  onAddToCart={handleAddToCart}
                />
              </Route>
              <Route path="/cart">
                <Cart
                  cart={cart}
                  handleUpdateQuantity={handleUpdateQuantity}
                  handleRemoveItem={handleRemoveItem}
                  handleEmptyCart={handleEmptyCart}
                />
              </Route>
              <Route path="/checkout">
                <Checkout cart={cart} />
              </Route>
              <Route path="/paymentform">
                <PaymentForm />
              </Route>
              <Route path="/addressform">
                <AddressForm />
              </Route>
              <Route path="/team">
              <Team />
              </Route>
            </Switch>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </GlobalProvider>
  );
}
