import { Router } from "@reach/router"
import { navigate } from "gatsby"
import React from "react"
import { useHotkeys } from "react-hotkeys-hook"
import PrivateRoute from "../components/private-route"
import SEO from "../components/seo"
import Layout from "../components/templates/layout"
import Collections from "../domain/collections"
import Customers from "../domain/customers"
import Discounts from "../domain/discounts"
import GiftCards from "../domain/gift-cards"
import Inquiries from "../domain/messages/Inquiries"
import Oauth from "../domain/oauth"
import Orders from "../domain/orders"
import DraftOrders from "../domain/orders/draft-orders"
import Pricing from "../domain/pricing"
import Products from "../domain/products"
import Settings from "../domain/settings"
import Contact from '../domain/messages/Contact';
import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.bundle.min.js" 

const IndexPage = () => {
  useHotkeys("g + o", () => navigate("/a/orders"))
  useHotkeys("g + p", () => navigate("/a/products"))
  return (
    <Layout>
      <SEO title="toya" />
      <Router basepath="a" className="h-full">
        <PrivateRoute path="oauth/:app_name" component={Oauth} />
        <PrivateRoute path="products/*" component={Products} />
        <PrivateRoute path="collections/*" component={Collections} />
        <PrivateRoute path="gift-cards/*" component={GiftCards} />
        <PrivateRoute path="orders/*" component={Orders} />
        <PrivateRoute path="draft-orders/*" component={DraftOrders} />
        <PrivateRoute path="discounts/*" component={Discounts} />
        <PrivateRoute path="customers/*" component={Customers} />
        <PrivateRoute path="pricing/*" component={Pricing} />
        <PrivateRoute path="settings/*" component={Settings} />
        <PrivateRoute path="settings/*" component={Settings} />
        <PrivateRoute path="inquiries/*" component={Inquiries} />
        <PrivateRoute path="contact/*" component={Contact} />

      </Router>
    </Layout>
  )
}

export default IndexPage
