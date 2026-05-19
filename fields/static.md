# Static Content

Static Content outputs a fixed block of HTML directly on the product page. It is a **display-only** element — customers cannot interact with it, it produces no cart data, and it never appears on orders.

![Static Content field on a product page showing a styled heading and an information callout above the product option fields](../../public/img/field-static-content-frontend.png)

---

## When to Use

- Section headings to divide a long group into logical parts
- Informational banners (e.g. "⚠️ Allow 3–5 business days for custom orders")
- Horizontal dividers between groups of fields
- Terms or instructions the customer should read before selecting options
- Decorative separators or callout blocks

---

## General Settings

| Setting | Description |
|---------|-------------|
| **Label** | Internal admin-only name — never shown on the frontend. Helps you identify this block in the builder. |
| **Content** | The raw HTML to render on the product page |

::: warning HTML is Output Directly
The content is rendered as raw HTML. Use standard tags: `<h4>`, `<p>`, `<strong>`, `<em>`, `<ul>`, `<li>`, `<hr>`, `<div>`, etc.

Do **not** include `<script>` tags or event attributes (`onclick`, `onmouseover`, etc.).
:::

---

## Content Examples

### Section Heading
```html
<h4 style="margin: 0 0 4px;">Personalisation Options</h4>
<p style="margin: 0; color: #666; font-size: 0.875em;">All fields below are optional.</p>
```

### Notice Banner
```html
<div style="background:#fff3cd;border-left:4px solid #ffc107;padding:10px 14px;border-radius:4px;">
  <strong>Custom orders take 3–5 business days.</strong>
  Rush options are available below.
</div>
```

### Horizontal Divider
```html
<hr style="border:none;border-top:1px solid #e0e0e0;margin:8px 0;" />
```

### Info List
```html
<ul style="padding-left:1.2em;margin:6px 0;">
  <li>Engraving is permanent — please double-check spelling</li>
  <li>Maximum 30 characters per line</li>
  <li>Emojis are not supported</li>
</ul>
```

---

## Pricing

Not applicable. Static Content fields carry no pricing — they are display-only.

---

## Conditions

Static Content fields **fully support** the Conditions tab. You can show or hide a notice based on another field's value.

**Example:** Show a "Rush fee applies" banner only when the order quantity is 20 or more:

| Part | Value |
|------|-------|
| Action | Show this field when… |
| Match | ALL |
| Field | Quantity Needed |
| Operator | >= (greater than or equal) |
| Value | `20` |

**Example:** Show a "Please allow extra time" notice only when a custom monogram is entered:

| Part | Value |
|------|-------|
| Action | Show this field when… |
| Field | Monogram Text |
| Operator | is not empty |

→ Full reference: [Field Conditions](/fields/conditions)

---

## Stock

Not applicable. Static Content fields carry no stock linkage.

---

## Validation

Not applicable. Static Content fields produce no submitted value and are never validated.

---

## Cart & Order Display

Static Content fields are **never saved to the cart or order**. They exist only on the product page and disappear entirely after the customer adds to cart.
