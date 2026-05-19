# Text Input

A single-line free-text input — the most common field for short customer-typed entries like names, messages, or monograms.

![Text Input field on a product page showing a label, placeholder, and helper description below](../../public/img/field-text-frontend.png)

---

## When to Use

- Personalisation name or monogram
- Short engraving message (up to ~40 characters)
- Custom label or team name
- Any brief free-form entry

---

## General Settings

| Setting | Description |
|---------|-------------|
| **Label** | Text label displayed above the input |
| **Placeholder** | Grey hint text inside the input (e.g. `Max 30 characters`) |
| **Tooltip** | Hover `?` tooltip |
| **Description** | Helper text shown below the input |
| **Required** | Field must be filled before add-to-cart |

---

## Pricing

Open the **Pricing** tab to charge for this field.

| Price Type | Effect |
|------------|--------|
| **None** | No charge |
| **Flat Fee** | Fixed charge whenever the customer types anything |
| **Percentage** | % of product base price whenever the field is filled |
| **Character Count** | Charge per character typed — updates live as they type |
| **Math Formula** | Advanced — use `[char_count]`, `[base_price]`, `[quantity]` |

**Most common pairing:** Character Count — ideal for engraving:
```
Amount: 0.50  → charges $0.50 per character typed
```

→ Full reference: [Pricing Strategies](/pricing/index)

---

## Conditions

Open the **Conditions** tab to show or hide this field based on another field's value.

**Example:** Show "Engraving Text" only when the customer ticks "Add Engraving?":

| Part | Value |
|------|-------|
| Action | Show this field when… |
| Match | ALL |
| Field | Add Engraving? |
| Operator | == (equals) |
| Value | `1` |

When hidden, this field is excluded from validation, pricing, and order data — so a hidden required field will never block the customer.

→ Full reference: [Field Conditions](/fields/conditions)

---

## Stock

Text input fields are not typically linked to stock, but you can do so if the act of entering text consumes a resource (e.g. "Design Slot").

→ Full reference: [Linking Options to Stock](/stocks/field-linking)

---

## Validation

- **Required** — the field must not be empty (whitespace-only values are rejected)
- **Sanitization** — value is processed with `sanitize_text_field()`: strips HTML tags and trims extra whitespace

---

## Cart & Order Display

```
Engraving Text:   Happy Birthday, Sarah!
```

The raw typed value is stored and displayed on the cart page, checkout, and in the WooCommerce order screen.
