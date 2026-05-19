# Email Input

An `<input type="email">` with built-in format validation — the browser and server both verify the value is a well-formed email address before the product can be added to cart.

![Email input field on a product page showing a label, email input, and a browser validation tooltip for an invalid address](../../public/img/field-email-frontend.png)

---

## When to Use

- "Send confirmation to a different email"
- "Enter gift recipient's email for digital delivery"
- "Notification email for order updates"
- Any field where you need the customer to provide a valid email address

---

## General Settings

| Setting | Description |
|---------|-------------|
| **Label** | Text label above the input |
| **Placeholder** | Hint text (e.g. `recipient@example.com`) |
| **Tooltip** | Hover `?` tooltip |
| **Description** | Helper text below the input |
| **Required** | Field must contain a valid email before add-to-cart |

---

## Pricing

Email fields can carry a flat fee for services that involve email delivery to a third party.

| Price Type | Effect |
|------------|--------|
| **None** | No charge (most common) |
| **Flat Fee** | Fixed charge when the field is filled (e.g. +$1.00 for digital delivery) |
| **Percentage** | % of product base price |
| **Math Formula** | Advanced formula |

→ Full reference: [Pricing Strategies](/pricing/index)

---

## Conditions

Open the **Conditions** tab to show or hide this field based on another selection.

**Example:** Show "Recipient Email" only if "Send as gift" is selected:

| Part | Value |
|------|-------|
| Action | Show this field when… |
| Match | ALL |
| Field | Order Type |
| Operator | == (equals) |
| Value | `gift` |

→ Full reference: [Field Conditions](/fields/conditions)

---

## Stock

Email fields are not typically linked to stock, but the setting is available.

→ Full reference: [Linking Options to Stock](/stocks/field-linking)

---

## Validation

Server-side validation checks:
1. **Required** — field must not be empty
2. **Format** — value must be a syntactically valid email address (checked with PHP's `filter_var($value, FILTER_VALIDATE_EMAIL)`). Invalid addresses are rejected with an error before the cart add proceeds.
3. **Sanitization** — value is processed with `sanitize_email()`

---

## Cart & Order Display

```
Recipient Email:   recipient@example.com
```
