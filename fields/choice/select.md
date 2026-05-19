# Select Dropdown

A native HTML `<select>` dropdown — customers pick **one option** from a collapsed list. Best when you have many choices and want to save vertical space on the page.

![A Select Dropdown field on a WooCommerce product page, dropdown open showing price-labelled options](../../public/img/field-select-frontend.png)

---

## When to Use

- Colour or size options (when WooCommerce variations are not used)
- Turnaround time or service level selection
- Any single-choice decision with 4+ options where open radio buttons would feel cluttered

---

## General Settings

| Setting | Description |
|---------|-------------|
| **Label** | Text shown above the dropdown |
| **Placeholder** | The default "—Choose an option—" text shown before a selection is made. Customise it here (e.g. "Select your size…") |
| **Tooltip** | A `?` icon appears next to the label; hover reveals this text |
| **Description** | Helper text displayed below the dropdown |
| **Required** | If enabled, the customer must select a non-empty choice before add-to-cart is allowed |

---

## Options

Add choices by clicking **Add Option** inside the field. Each option has:

| Property | Description |
|----------|-------------|
| **Label** | The text displayed inside the dropdown (e.g. `Large`) |
| **Value** | Internal identifier stored in the cart and order (e.g. `large`). No spaces recommended. |
| **Price Type** | Per-option pricing: `None`, `Flat Fee`, `Percentage` |
| **Price Amount** | The surcharge or discount for this specific choice |
| **Weight** | Shipping weight added (in your store's weight unit) when this option is selected |

::: tip Placeholder Option
OptionBay automatically renders an empty `— Choose an option —` (or your custom placeholder text) as the first `<option>`. If the field is **Required**, the customer cannot submit with this placeholder selected.
:::

---

## Pricing

Open the **Pricing** tab to set a price at the **field level** — this applies when all choices carry the same charge. For choice-specific pricing, set the price on each individual option in the Options list instead.

| Price Type | Effect |
|------------|--------|
| **None** | No charge |
| **Flat Fee** | Fixed dollar amount added for any selection |
| **Percentage** | % of the product's base price added for any selection |
| **Character Count** | Not applicable to select fields |
| **Math Formula** | Advanced — uses `[base_price]`, `[quantity]` placeholders |

Price labels appear inline in the dropdown option text: `Large (+$10.00)`.

→ Full reference: [Pricing Strategies](/pricing/index)

---

## Conditions

Open the **Conditions** tab to show or hide this field based on other fields in the group.

**Example:** Show a "Frame Colour" dropdown only after the customer selects a product style that includes a frame.

| Part | Value |
|------|-------|
| Action | Show this field when… |
| Match | ALL |
| Field | Product Style |
| Operator | == (equals) |
| Value | `framed` |

When hidden, this field is excluded from validation, pricing, and order data.

→ Full reference: [Field Conditions](/fields/conditions)

---

## Stock

Open the **Stock** tab to link this field or an individual option to a [Global Stock Item](/stocks/index).

- Toggle **Enable Stock Management** on
- Search for an existing inventory item or create one inline
- Set the **Reduction Mode**: Per Item Quantity *(default)*, Per Line Item, or Formula

For Select fields, you can link **each individual option** to a different stock pool.

→ Full reference: [Linking Options to Stock](/stocks/field-linking)

---

## Validation

Server-side validation checks that:
1. A value is present when **Required** is enabled
2. The submitted value exists in the defined options list — forged values that don't match an allowed option are rejected

---

## Cart & Order Display

```
Engraving Font:   Classic Serif
```

The selected option's **label** (not its internal value) is shown on the cart page, checkout, and in the WooCommerce admin order screen.
