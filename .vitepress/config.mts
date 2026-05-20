import { defineConfig } from "vitepress";

export default defineConfig({
  title: "OptionBay",
  description:
    "Friendly & Helpful Guide to Advanced Product Options for WooCommerce",
  lang: "en-US",
  base: "/optionbay/",

  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/optionbay/icon.svg",
        type: "image/svg+xml",
      },
    ],
    ["meta", { name: "theme-color", content: "#ff0000" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "OptionBay Documentation" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "Official documentation for OptionBay — the bridge between YouTube and WooCommerce.",
      },
    ],
    ["meta", { property: "og:image", content: "/optionbay/logo.svg" }],
  ],

  themeConfig: {
    logo: "/icon.svg",
    siteTitle: false,

    nav: [
      {
        text: "v1.0.0",
        items: [
          {
            text: "v1.0.0 (Latest)",
            link: "/guide/introduction",
            activeMatch: "^/(?!v\\d)",
          },
          {
            text: "Changelog",
            link: "/changelog",
          },
        ],
      },
      { text: "Guide", link: "/guide/introduction" },
      { text: "Features", link: "/features/connection" },
      { text: "Developer", link: "/developer/architecture" },
      {
        text: "More",
        items: [
          { text: "FAQ", link: "/faq" },
          { text: "Changelog", link: "/changelog" },
          { text: "Request a Feature", link: "/feature-request" },
        ],
      },
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Installation", link: "/getting-started/installation" },
          { text: "Quick Start Guide", link: "/getting-started/quick-start" },
          {
            text: "System Requirements",
            link: "/getting-started/requirements",
          },
        ],
      },
      {
        text: "Building Addons",
        items: [
          { text: "The Addon Builder", link: "/builder/addon-builder" },
          { text: "Managing Option Groups", link: "/builder/option-groups" },
        ],
      },
      {
        text: "Stock Management",
        items: [
          { text: "Global Stocks Overview", link: "/stocks/index" },
          { text: "Managing Stock Items", link: "/stocks/managing-items" },
          { text: "Linking Options to Stock", link: "/stocks/field-linking" },
        ],
      },
      {
        text: "Smart Routing",
        items: [{ text: "Product Assignments", link: "/assignments/index" }],
      },
      {
        text: "Visibility Logic",
        items: [
          { text: "Conditional Visibility", link: "/visibility/index" },
          { text: "Field Conditions Reference", link: "/fields/conditions" },
        ],
      },
      {
        text: "Pricing Strategies",
        items: [
          { text: "The Ultimate Pricing Guide", link: "/pricing/index" },
          { text: "Flat Fee", link: "/pricing/index#flat-fee" },
          { text: "Percentage", link: "/pricing/index#percentage" },
          { text: "Character Count", link: "/pricing/index#character-count" },
          { text: "Math Formula", link: "/pricing/index#math-formula" },
        ],
      },
      {
        text: "Field Types",
        items: [
          { text: "Static Content (HTML/Alerts)", link: "/fields/static" },
          { text: "Field Conditions Reference", link: "/fields/conditions" },
          {
            text: "Choice Fields",
            collapsed: true,
            items: [
              { text: "Select Dropdown", link: "/fields/choice/select" },
              { text: "Radio Buttons", link: "/fields/choice/radio" },
              { text: "Checkbox (Single)", link: "/fields/choice/checkbox" },
              { text: "Checkboxes (Multiple)", link: "/fields/choice/checkboxes" },
              { text: "Image Swatches", link: "/fields/choice/image-swatch" },
              { text: "Color Swatches", link: "/fields/choice/color-swatch" },
            ],
          },
          {
            text: "Input Fields",
            collapsed: true,
            items: [
              { text: "Text Input", link: "/fields/input/text" },
              { text: "Textarea", link: "/fields/input/textarea" },
              { text: "Number Input", link: "/fields/input/number" },
              { text: "Email Input", link: "/fields/input/email" },
            ],
          },
          {
            text: "Advanced Fields",
            collapsed: true,
            items: [
              { text: "File Upload", link: "/fields/advanced/file-upload" },
            ],
          },
        ],
      },
      {
        text: "Administration",
        items: [
          { text: "Global Settings", link: "/admin/settings" },
          { text: "Order Management", link: "/admin/orders" },
          { text: "Export & Import", link: "/admin/export-import" },
          { text: "Troubleshooting", link: "/admin/troubleshooting" },
        ],
      },
      { text: "FAQ", link: "/faq" },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/wpanchorbay/optionbay",
      },
      { icon: "wordpress", link: "https://wordpress.org/plugins/optionbay/" },
      { icon: "facebook", link: "https://facebook.com/wpanchorbay" },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><image href="/optionbay/wpanchorbay.png" width="24" height="24" /></svg>',
        },
        link: "https://wpanchorbay.com/",
        ariaLabel: "WPAnchorBay",
      },
    ],

    footer: {
      message: "Released under the GPL-2.0+ License.",
      copyright:
        'Copyright © 2026 <a href="https://wpanchorbay.com" target="_blank">WPAnchorBay</a>',
    },
    search: {
      provider: "local",
      options: {
        detailedView: true,
      },
    },
    lastUpdated: {
      text: "Last updated",
    },
  },
  lastUpdated: true,
});
