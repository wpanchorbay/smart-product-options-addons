# Pricing Strategies

OptionBay supports five pricing strategies that control how a price adjustment is calculated for a field or individual choice. Every field has a **Price Type** setting in its Pricing tab, and each strategy does something distinct.

![Pricing tab inside the Addon Builder showing the Price Type dropdown and Amount input](../public/img/pricing-tab.png)

---

## Overview

| Strategy | Key | Best For |
|----------|-----|----------|
| **None** | `none` | Fields with no price impact |
| **Flat Fee** | `flat` | Fixed surcharge per selection |
| **Percentage** | `percentage` | % of product base price |
| **Character Count** | `character_count` | Per-letter pricing for text inputs |
| **Math Formula** | `formula` | Complex dynamic calculations |

---

## None

No price is applied. The field collects data but adds $0.00 to the cart.

**Use when:** You need to capture a choice (e.g. engraving placement) without charging for it.

---

## Flat Fee

Adds a **fixed amount** to the product price, regardless of what the customer types or selects.

**Formula:** `price delta = configured_amount`

**Example:**
- Field: Gift Wrapping
- Price Type: Flat Fee
- Amount: `5.00`
- Result: Customer always pays `+$5.00` when this field is selected or filled

**Works on:** All field types — text, textarea, number, email, file, radio, select, checkbox, swatches

### Label Display
The price label shown next to the field or option uses your WooCommerce currency formatting:
```
Gift Wrapping  (+ $5.00)
```

---

## Percentage

Adds a **percentage of the product's base price** to the cart.

**Formula:** `price delta = base_price × (percent / 100)`

**Example:**
- Product base price: `$100.00`
- Price Type: Percentage
- Amount: `10`
- Result: `+$10.00` added to cart

**Label display:**
```
Priority Handling  (+ 10%)
```

::: info Based on Base Price Only
The percentage is calculated against the product's **base price** — not the running cart total or any other options. Adding multiple percentage-priced options does not compound them.
:::

---

## Character Count

Multiplies a **per-character rate** by the number of characters the customer types. Ideal for engraving and monogram pricing.

**Formula:** `price delta = mb_strlen(value) × configured_amount`

**Example:**
- Price Type: Character Count
- Amount: `0.50`
- Customer types `"Happy Birthday!"` (16 characters)
- Result: `16 × $0.50 = +$8.00`

**Label display:**
```
Engraving Text  (+ $0.50 / character)
```

The live price updates in real time as the customer types, powered by the frontend JavaScript engine.

**Works on:** Text, Textarea, Number, Email fields (any field that accepts typed input)

---

## Math Formula

Evaluates a **custom mathematical expression** at cart add time using the [MathParser](https://github.com/mossadal/math-parser) library. This is the most powerful pricing strategy — use it when Flat, Percentage, and Character Count are not expressive enough.

**Label display:**
```
Custom Print Size  (Dynamic)
```

### Supported Placeholders

| Placeholder | Value |
|-------------|-------|
| `[base_price]` | Product base price (same as `[price]`) |
| `[price]` | Alias for `[base_price]` |
| `[quantity]` | Cart line item quantity |
| `[char_count]` | Number of characters in the field's text value |
| `[value]` | The customer's numeric input (for number fields) |

### Supported Operators

| Operator | Meaning |
|----------|---------|
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `( )` | Grouping |

### Formula Examples

| Goal | Formula | Notes |
|------|---------|-------|
| Charge per character | `[char_count] * 0.50` | $0.50 per character |
| 5% + flat $2 base fee | `([base_price] * 0.05) + 2` | Percentage plus fixed |
| $3 per extra copy | `[value] * 3` | Number field for quantity |
| Scale with quantity | `[quantity] * 1.50` | $1.50 per item quantity |
| Combo: chars × qty | `[char_count] * [quantity] * 0.25` | Multi-factor |

### Safety

Before evaluation, OptionBay:
1. Replaces all placeholders with their real numeric values
2. Strips all characters except numbers, `+`, `-`, `*`, `/`, `.`, `(`, `)`, and spaces
3. Detects division-by-zero expressions and returns `$0.00` safely
4. Catches any MathParser exceptions and returns `$0.00` silently

::: warning Test Your Formulas
Because formula errors silently return $0.00, always test formulas on a staging site before publishing to customers.
:::

---

## Where Pricing Is Applied

### Field-level pricing
For **text, textarea, number, email, file** fields — price is set directly on the field in its Pricing tab.

### Option-level pricing
For **select, radio, checkbox, color swatch, image swatch** fields — price is set on **each individual option/choice**. This lets you charge different amounts per choice.

```
Size:
  Small    — no extra charge
  Medium   — +$5.00
  Large    — +$10.00
  XL       — +$15.00
```

### Both simultaneously?
For choice fields, option-level pricing takes precedence. Field-level pricing on a choice field is applied when no options have their own pricing.

---

## Price Labels on the Frontend

All price adjustments are displayed next to the field label or option label before the customer adds to cart:

| Strategy | Example Label |
|----------|--------------|
| Flat Fee | `Gift Wrap (+ $5.00)` |
| Percentage | `Rush Fee (+ 15%)` |
| Character Count | `Engraving (+ $0.50 / character)` |
| Formula | `Custom Size (Dynamic)` |

The live price total shown at the bottom of the option group updates in real time as the customer interacts with fields.
