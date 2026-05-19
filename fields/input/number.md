# Number Input

A numeric `<input type="number">` with browser-native up/down spinners. Supports minimum, maximum, and step constraints enforced both in the browser and server-side.

![Number input field on a product page with a label, the number spinner, and a min/max description below](../../public/img/field-number-frontend.png)

---

## When to Use

- Number of extra copies, labels, or prints
- Dimension input (width or height in cm/inches)
- Quantity of a specific add-on service
- Any numeric input where the value drives pricing with Formula pricing

---

## General Settings

| Setting | Description |
|---------|-------------|
| **Label** | Label shown above the input |
| **Placeholder** | Hint text inside the input (e.g. `Enter quantity…`) |
| **Tooltip** | Hover `?` tooltip |
| **Description** | Helper text below — good place to state min/max limits |
| **Required** | Field must be filled before add-to-cart |
| **Min Value** | Minimum allowed number (optional) |
| **Max Value** | Maximum allowed number (optional) |
| **Step** | Increment value for the spinner (default: `1`; use `0.5` or `0.01` for decimals) |

---

## Pricing

Number fields pair especially well with **Math Formula** pricing, where the customer's entered value directly drives the cost.

| Price Type | Effect |
|------------|--------|
| **None** | No charge |
| **Flat Fee** | Fixed charge when the field is filled (regardless of the number) |
| **Percentage** | % of product base price when field is filled |
| **Character Count** | Not applicable to number fields |
| **Math Formula** | Use `[value]` to reference the customer's number |

**Common Math Formula examples:**

| Goal | Formula |
|------|---------|
| $2.50 per unit entered | `[value] * 2.50` |
| 5% of base price per unit | `[value] * [base_price] * 0.05` |
| $3 per copy × cart quantity | `[value] * [quantity] * 3` |

→ Full reference: [Pricing Strategies](/pricing/index)

---

## Conditions

Open the **Conditions** tab to conditionally show or hide this field.

**Example:** Show "Extra Pages" number input only when the product type is "Booklet":

| Part | Value |
|------|-------|
| Action | Show this field when… |
| Match | ALL |
| Field | Product Type |
| Operator | == (equals) |
| Value | `booklet` |

**Using a number field as a condition target** — you can also watch *this* field from another field using numeric operators:

```
Show "Rush Fee" when "Number of Units" >= 10
```

→ Full reference: [Field Conditions](/fields/conditions)

---

## Stock

Link this field to a [Global Stock Item](/stocks/index) to consume inventory based on how many units the customer enters. Best paired with **Formula** reduction mode:

```
Reduction Formula: val    →  deducts exactly the number the customer typed
Reduction Formula: val * qty  →  deducts number × cart quantity
```

→ Full reference: [Linking Options to Stock](/stocks/field-linking)

---

## Validation

Server-side validation checks:
1. **Required** — field must not be empty
2. **Min Value** — submitted number must be ≥ configured minimum
3. **Max Value** — submitted number must be ≤ configured maximum

Values are sanitized with `floatval()` — non-numeric input becomes `0`.

---

## Cart & Order Display

```
Number of Extra Pages:   5
```

The raw numeric value is stored and displayed.
