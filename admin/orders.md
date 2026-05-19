# Order Management

OptionBay automatically attaches the customer's selected options to every WooCommerce order. No manual setup is required — this happens at checkout.

---

## How Options Appear on Orders

When a customer adds a product to their cart with custom options selected, those choices are stored in the WooCommerce cart session under the key `optionbay_addons`. At checkout, they are permanently saved as **order item metadata** on the WooCommerce order line item.

### In the WooCommerce Admin Order Screen

Open any order that contains a product with OptionBay options. In the **Order Items** section, you'll see each selected option listed under the product name:

![WooCommerce order screen showing an order line item with OptionBay custom options listed beneath the product name](../public/img/order-line-item.png)

```
Handmade Ceramic Mug × 2          $52.00
  Engraving Text:    Happy Birthday!
  Gift Wrap?:        Yes
  File Upload:       https://site.com/uploads/design.png
```

- **Text, number, and email fields** display their raw value
- **Choice fields** (select, radio, checkbox) display the selected option's label
- **File uploads** display a clickable link to the uploaded file

---

## Options in Order Emails

WordPress and WooCommerce automatically include order item metadata in order confirmation emails sent to the customer and the admin. Your selected options appear under each line item in the email, exactly as they do in the admin order screen.

No additional configuration is needed.

---

## Options in Cart and Checkout

Before the order is placed, customers can review their selected options in the **Cart** and **Checkout** pages. OptionBay adds each selected option as a row beneath the product name in the cart table.

![WooCommerce cart page with OptionBay selections listed under the product](../public/img/cart-item-options.png)

---

## Pricing on Orders

Price additions from custom options are applied directly to the product's price in the cart. WooCommerce treats the adjusted price as the product's actual price — the price breakdown in cart totals, order summaries, and receipts all reflect the final combined price correctly.

::: info No Separate Line Items
OptionBay does not create separate fee line items for option pricing. The extra cost is baked into the product line item price. This ensures maximum compatibility with all WooCommerce payment gateways, tax plugins, and reporting tools.
:::

---

## Stock Reduction on Order Completion

If any selected option is linked to a [Global Stock Item](/stocks/index), OptionBay automatically reduces the stock count when the order's payment is completed (`woocommerce_reduce_order_stock` hook).

If stock is insufficient at checkout time, the order is halted and an error is displayed to the customer.

---

## Stock Restoration on Cancellation

If an order is **cancelled**, OptionBay automatically restores the stock that was deducted for any OptionBay-linked options. This happens via the `woocommerce_order_status_cancelled` hook. Each restoration is logged and a flag (`_ob_stock_restored`) is saved on the order to prevent double-restoration.

---

## Viewing Order Meta Directly

For developers or debugging, raw OptionBay metadata is stored on each order line item:

| Meta Key | Contents |
|----------|----------|
| `[Field Label]` | The display value of the selected option (e.g. `Engraving Text → Happy Birthday!`) |
| `_ob_stock_intents` | Serialised array of stock reduction intents, used for order-level stock management |

You can view these in **WooCommerce → Orders → [Order] → Order data** using a meta viewer plugin, or via `WP_CLI`:

```bash
wp post meta get <order_id> --keys=_ob_stock_intents
```
