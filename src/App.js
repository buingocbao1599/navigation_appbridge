import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

import createApp from '@shopify/app-bridge';
import { ResourcePicker } from '@shopify/app-bridge/actions';
import { Buffer } from 'buffer';
import {Provider, TitleBar} from '@shopify/app-bridge-react';


function App() {
  const config = {
    // The client ID provided for your application in the Partner Dashboard.
    apiKey: "758c79a2d4564e77a474f3e2d514a75e",
    // The host of the specific shop that's embedding your app. This value is provided by Shopify as a URL query parameter that's appended to your application URL when your app is loaded inside the Shopify admin.
    // host: new URLSearchParams(window.location.search).get("host"),
    shopOrigin: "baobn-omeaga.myshopify.com",
    host: Buffer.from('http://localhost:3000/contact').toString('base64'),
    forceRedirect: true
  };

  const app = createApp(config);

  const picker = ResourcePicker.create(app, {
    resourceType: ResourcePicker.ResourceType.Product
  });
  picker.subscribe(ResourcePicker.Action.SELECT, (payload) => {
    console.log(payload.selection);
  });
  picker.dispatch(ResourcePicker.Action.OPEN);
  return (
    <Provider config={config}>
      <TitleBar title="My page title" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </Provider>
  );
}

export default App;
