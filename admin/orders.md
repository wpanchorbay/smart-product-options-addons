# Order Management

OptionBay automatically attaches the customer's selected options to every WooCommerce order. No manual setup or custom development is required — the options data is captured, calculated, and saved seamlessly during the checkout process.

---

## How Options Appear on Orders

When a customer selects options and adds a product to their cart, those choices are temporarily stored in the customer's WooCommerce cart session under the key `smart_product_options_addons_addons`.

Upon successful checkout, this session data is transformed into permanent **order item metadata** attached directly to the specific WooCommerce order line item.

### In the WooCommerce Admin Order Screen

When viewing any order containing OptionBay selections, the customer's choices are displayed directly below the product name in the **Order Items** admin panel:

![WooCommerce order screen showing an order line item with OptionBay custom options listed beneath the product name](/public/order-line-item.png)

- **Text, Area, Number, and Email fields:** Display the field's label followed by the customer's typed value (e.g. `Engraving Text: Happy Birthday!`).
- **Choice-based fields (Dropdowns, Radios, Checkboxes, Swatches):** Display the field's label followed by the text label of the selected choice (e.g. `Gift Wrap?: Yes`).
- **File Upload fields:** Display the field's label followed by a clickable, secure URL pointing directly to the uploaded file in your WordPress uploads folder (e.g. `File Upload: https://site.com/wp-content/uploads/smart-product-options-addons/design.png`).

---

---

## Options in Cart and Checkout pages

Before the order is completed, OptionBay displays selected options on frontend transactional pages:

- **Cart Page:** Each selected option appears as a formatted list row beneath the product title in the cart table.
- **Checkout Page:** The option rows are mirrored in the checkout order review table, giving the customer a final chance to verify their selections before paying.

![WooCommerce cart page with OptionBay selections listed under the product](/public/cart-item-options.png)

---

## Pricing on Orders

OptionBay bakes option pricing adjustments directly into the product line item price rather than adding them as separate order fees.

- **Unified Price Calculations:** If a `$50.00` product has a `+$5.00` option checked, WooCommerce treats the product price as `$55.00` inside the cart and checkout.
- **Receipt Totals:** The invoice displays the item at `$55.00` (or `$110.00` for quantity 2), with the option labels listed below to explain the surcharge.

::: info Maximum System Compatibility
By modifying the product line item price directly instead of generating separate "fee lines", OptionBay maintains 100% compatibility with:

- **Tax Calculators:** Tax calculation plugins (like WooCommerce Tax or TaxJar) compute taxes correctly on the adjusted total.
- **Payment Gateways:** Gateways (like Stripe, PayPal, or Authorize.Net) process the exact checkout total without mismatch errors.
- **Invoicing Plugins:** PDF Invoice generators print the correct product pricing automatically.
  :::

---

## Stock Reduction on Order Completion

For options linked to a [Global Stock Item](/stocks/index), OptionBay triggers stock deductions during WooCommerce's stock reduction hook (`woocommerce_reduce_order_stock`):

1. **Checkout Check:** OptionBay does a final live stock check at checkout submit.
2. **Hook Trigger:** Once payment is authorized and WooCommerce reduces catalog stock, OptionBay intercepts the action.
3. **Inventory Deduction:** The quantities saved in the order item metadata are permanently deducted from the corresponding rows in the `wp_opopw_inventory` table.

---

## Stock Restoration on Cancellation and Refunds

OptionBay returns inventory to the global stock pool when an order is cancelled, goes back to pending, or is refunded. Stock is only ever given back if it was actually deducted, so an order that was never paid changes no pool.

- **Cancelled or Pending:** When the order status changes to **Cancelled**, or returns to **Pending** (for example after a failed payment), all add-on stock still held by the order is returned. This runs on the `woocommerce_order_status_cancelled` and `woocommerce_order_status_pending` hooks.
- **Refunds:** When you refund an order and tick **Restock refunded items**, the stock for the refunded units is returned. This runs on the `woocommerce_can_restock_refunded_items` filter. Partial refunds return only their own share, and repeated partial refunds never return more than was originally deducted. A refund made without that box ticked returns nothing.
- **Deleting a Refund:** Deleting a refund record does **not** take stock back out of the pool, which matches how WooCommerce treats the product's own stock. Adjust the pool by hand if needed.
- **Read Stock Intents:** OptionBay reads the `_opopw_stock_intents` metadata attached to the order line items to know how much inventory belongs to each pool.
- **Duplicate Prevention:** To prevent restoring stock twice when an order status is toggled back and forth, OptionBay keeps a per-line-item stock ledger (`_opopw_stock_ledger`) recording how much was consumed and how much has already been released.

---

## Viewing Order Metadata Directly

For developers, custom integration developers, or troubleshooting purposes, OptionBay stores its raw data on the order line items inside the database:

- **Option Display Meta:** The selected options are stored as standard line item metadata, where the key is the **Field Label** and the value is the **Selected Value** (e.g. `Engraving Text` &rarr; `Happy Birthday!`).
- **`_opopw_stock_intents`:** A serialized array stored on the line item meta. It maps the Option IDs to their linked Global Stock Item IDs and the deduction amounts. This is used by OptionBay during status transitions to know how much stock to return on cancellation or refund.

You can view these keys using a database client, a WooCommerce meta viewer plugin, or via **WP-CLI**:

```bash
# Get the stock intent metadata for a specific order item
wp db query "SELECT meta_value FROM wp_woocommerce_order_itemmeta WHERE order_item_id = <item_id> AND meta_key = '_opopw_stock_intents'"
```
