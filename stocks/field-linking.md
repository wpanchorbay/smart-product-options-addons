# Linking Options to Stock

Any field — or individual choice within a choice field — can be linked to a [Global Stock Item](/stocks/index). When linked, selecting that field or choice consumes from the stock pool.

---

## Linking a Field to Stock

Open the field in the **Addon Builder** and switch to the **Stock** tab.

![Stock tab inside the Addon Builder showing the Enable Stock toggle, inventory search, and Reduction Mode dropdown](../public/img/stock-field-link.png)

### Step 1 — Enable Stock Management

Toggle **Enable Stock Management** to on.

### Step 2 — Select or Create an Inventory Item

The inventory search box lets you:
- **Search** existing items by name
- **Create a new item** inline by typing a new name and clicking **Create new "[name]"**

### Step 3 — Set the Reduction Mode

| Mode | Description |
|------|-------------|
| **Per Item Quantity** *(default)* | Deducts `1 unit × cart quantity`. If customer buys 3 mugs, 3 units are deducted. |
| **Per Line Item** | Always deducts exactly `1 unit`, regardless of how many the customer orders. |
| **Formula** | Evaluates a formula using `qty` and `val` variables (see below). |

---

## Linking Individual Options to Stock

For **select, radio, checkbox** fields, each individual option can be linked to its own stock item (or the same stock item, if needed).

Open a choice field → expand an option → **Stock** sub-tab for that option:

![An individual choice option expanded inside the Addon Builder, showing the stock linking settings for that specific option](../public/img/stock-option-link.png)

This allows fine-grained control:
- "Red ribbon" depletes the "Red Ribbon" stock pool
- "Blue ribbon" depletes the "Blue Ribbon" stock pool
- "No ribbon" has no stock link at all

---

## Reduction Modes Explained

### Per Item Quantity *(default)*

```
stock deducted = 1 × cart_quantity
```

**Example:** Stock item: `Engraving Slots` (100 available)
- Customer buys 3 engraved mugs → 3 slots deducted → 97 remaining

### Per Line Item

```
stock deducted = 1 (always)
```

**Example:** Stock item: `Custom Design Reviews` (10 available)
- Customer orders 5 custom products → only 1 design review slot deducted → 9 remaining
- This treats the entire cart line as a single unit regardless of quantity

### Formula

Evaluates a mathematical expression using:

| Variable | Value |
|----------|-------|
| `qty` | Cart line item quantity |
| `val` | The customer's submitted value (for number fields) |

**Examples:**

| Formula | Effect |
|---------|--------|
| `qty * 2` | Deducts 2 units per product quantity |
| `val` | Deducts the exact number the customer entered in a Number field |
| `qty * val` | Deducts quantity × the number input value |

---

## Cart-Reserved Stock

OptionBay accounts for stock already in **other customers' carts** when checking availability. This prevents two customers from both reserving the last unit simultaneously.

Reserved stock is calculated at add-to-cart time and at checkout validation. The reservation is released if the cart expires or the customer empties it.

---

## Out-of-Stock Behaviour

When a stock item reaches 0 and **Allow Backorders** is disabled:

- **On product page:** The linked option is marked visually as unavailable; the "Out of stock" text appears and the option cannot be selected
- **At add-to-cart:** A WooCommerce error notice prevents adding to cart
- **At checkout:** A final stock check runs — if stock was depleted between cart and checkout, the order is halted with an error

If **Allow Backorders** is enabled, orders proceed even when stock is 0 or negative, and the count is allowed to go below zero.

---

## Restoring Stock on Cancellation

When an order is **cancelled** in WooCommerce, OptionBay automatically reads the `_ob_stock_intents` metadata saved on the order line item and restores the exact amount that was deducted.

A `_ob_stock_restored` flag is saved on the order to prevent double-restoration if the order is re-cancelled or a webhook fires twice.
