# Textarea

A multi-line `<textarea>` for longer free-form entries. Use it when you expect customers to write more than a sentence.

![Textarea field on a product page showing a multi-line input, label, and description](../../public/img/field-textarea-frontend.png)

---

## When to Use

- Full personalised message for greeting cards
- Gift message text (paragraph length)
- Design brief or custom specification
- Order notes or special instructions
- Any entry that needs multiple lines

---

## General Settings

| Setting | Description |
|---------|-------------|
| **Label** | Text label above the textarea |
| **Placeholder** | Hint text inside the textarea (e.g. `Write your message here…`) |
| **Tooltip** | Hover `?` tooltip |
| **Description** | Helper text below the textarea |
| **Required** | Field must contain text before add-to-cart |

---

## Pricing

Open the **Pricing** tab to charge for this field.

| Price Type | Effect |
|------------|--------|
| **None** | No charge |
| **Flat Fee** | Fixed charge whenever the customer types anything |
| **Percentage** | % of product base price |
| **Character Count** | Charge per character typed — live price update as they type |
| **Math Formula** | Use `[char_count]`, `[base_price]`, `[quantity]` |

**Most useful pairing:** Character Count for long-form text:
```
Amount: 0.10  → $0.10 per character. A 200-character message = $20.00
```

→ Full reference: [Pricing Strategies](/pricing/index)

---

## Conditions

Open the **Conditions** tab to conditionally show or hide this textarea.

**Example:** Show "Special Instructions" only when "Custom Order" is selected:

| Part | Value |
|------|-------|
| Action | Show this field when… |
| Match | ALL |
| Field | Order Type |
| Operator | == (equals) |
| Value | `custom` |

→ Full reference: [Field Conditions](/fields/conditions)

---

## Stock

Linking a textarea to stock is uncommon but supported — useful if writing a custom message consumes a "slot" (e.g. a designer review quota).

→ Full reference: [Linking Options to Stock](/stocks/field-linking)

---

## Validation

- **Required** — the field must contain non-whitespace text
- **Sanitization** — value is processed with `sanitize_text_field()`: strips HTML tags

---

## Cart & Order Display

```
Gift Message:   Wishing you all the best on your special day. With love, the Smiths!
```

The full multi-line content is stored and displayed. Line breaks are preserved as spaces in the order meta display.
