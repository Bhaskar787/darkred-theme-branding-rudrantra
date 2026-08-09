import { useEffect } from 'react';
import { Route, Switch, useLocation } from 'wouter';

import HomePage from '@/views/pages/HomePage';
import AboutPage from '@/views/pages/AboutPage';
import ContactPage from '@/views/pages/ContactPage';
import FAQPage from '@/views/pages/FAQPage';
import CollectionsPage from '@/views/pages/CollectionsPage';
import CategoryCollectionPage from '@/views/pages/CategoryCollectionPage';
import CustomOrderPage from '@/views/pages/CustomOrderPage';
import AllProductsPage from '@/views/pages/AllProductsPage';
import ProductDetailPage from '@/views/pages/ProductDetailPage';
import MukhiGuidePage from '@/views/pages/MukhiGuidePage';
import ConsultationPage from '@/views/pages/ConsultationPage';
import BlogListPage from '@/views/pages/BlogListPage';
import BlogDetailPage from '@/views/pages/BlogDetailPage';
import CheckoutPage from '@/views/pages/CheckoutPage';
import CartPage from '@/views/pages/CartPage';
import WishlistPage from '@/views/pages/WishlistPage';
import NotFound from '@/views/pages/not-found';

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

export function AppRouter() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/pages/cart" component={CartPage} />
        <Route path="/shopping-cart" component={CartPage} />
        <Route path="/wishlist" component={WishlistPage} />
        <Route path="/pages/wishlist" component={WishlistPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/about-us" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/contact-us" component={ContactPage} />
        <Route path="/faq" component={FAQPage} />
        <Route path="/faqs" component={FAQPage} />
        <Route path="/collections" component={CollectionsPage} />
        <Route path="/collection" component={CollectionsPage} />
        <Route path="/collection/:slug" component={CategoryCollectionPage} />
        <Route path="/collections/:slug" component={CategoryCollectionPage} />
        <Route path="/collection-explore/:slug" component={CategoryCollectionPage} />
        <Route path="/customize-order" component={CustomOrderPage} />
        <Route path="/custom-order" component={CustomOrderPage} />
        <Route path="/customize" component={CustomOrderPage} />
        <Route path="/all-products" component={AllProductsPage} />
        <Route path="/products" component={AllProductsPage} />
        <Route path="/product/:id" component={ProductDetailPage} />
        <Route path="/product" component={ProductDetailPage} />
        <Route path="/mukhi-guide" component={MukhiGuidePage} />
        <Route path="/consultation" component={ConsultationPage} />
        <Route path="/blog" component={BlogListPage} />
        <Route path="/blogs" component={BlogListPage} />
        <Route path="/article/:id" component={BlogDetailPage} />
        <Route path="/blog/:id" component={BlogDetailPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default AppRouter;
