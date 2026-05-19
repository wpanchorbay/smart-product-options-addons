# Radio Buttons

Radio buttons display all choices openly — customers click one to select it. Unlike a dropdown, every option is visible at once, making it easy to compare choices and price labels side by side.

![Radio button field on a product page showing three choices, with price badges beside two of them, one radio selected](../../public/img/field-radio-frontend.png)

---

## When to Use

- Gift wrapping: No / Yes (+$5.00)
- Finish type: Matte / Gloss / Satin
- Delivery speed: Standard / Express (+$10.00)
- Any single-choice decision with 2–6 options where visual comparison matters

---

## General Settings

| Setting | Description |
|---------|-------------|
| **Label** | Group heading shown above all the radio buttons |
| **Tooltip** | Hover `?` tooltip text |
| **Description** | Helper text displayed below the group |
| **Required** | Customer must select one option before add-to-cart |

---

## Options

Add choices by clicking **Add Option**. Each option has:

| Property | Description |
|----------|-------------|
| **Label** | Text shown next to the radio button |
| **Value** | Internal identifier stored in the cart (e.g. `express`) |
| **Price Type** | Per-option pricing type |
| **Price Amount** | Price delta for this specific choice |
| **Weight** | Shipping weight addition when this choice is selected |

Price labels appear automatically next to each radio option label:
```
○ Standard shipping
○ Express shipping  (+ $10.00)
● Next-day courier  (+ $18.00)
```

---

## Pricing

Open the **Pricing** tab to apply a charge at the **field level** (the same charge regardless of which option is picked). For different prices per choice, set pricing on each individual option.

| Price Type | Effect |
|------------|--------|
| **None** | No charge |
| **Flat Fee** | Same fixed fee for any choice selected |
| **Percentage** | % of product base price, same for any choice |
| **Math Formula** | Advanced formula (less common for radio) |

→ Full reference: [Pricing Strategies](/pricing/index)

---

## Layout

The orientation of choices is controlled globally in **Settings → Options Orientation**:

| Setting | Result |
|---------|--------|
| **Vertical** *(default)* | Choices stack top to bottom |
| **Horizontal** | Choices sit side by side |

---

## Conditions

Open the **Conditions** tab to conditionally show or hide this field based on another field's value.

**Example:** Show a "Delivery Speed" radio group only after the customer selects "Ship to me" (not "In-store pickup"):

| Part | Value |
|------|-------|
| Action | Show this field when… |
| Match | ALL |
| Field | Fulfilment Method |
| Operator | == (equals) |
| Value | `ship` |

→ Full reference: [Field Conditions](/fields/conditions)

---

## Stock

Each individual radio option can be linked to a separate [Global Stock Item](/stocks/index). For example, each delivery speed could draw from a different capacity pool.

→ Full reference: [Linking Options to Stock](/stocks/field-linking)

---

## Validation

Server-side validation checks:
1. A value is present when **Required** is enabled
2. The submitted value belongs to the defined options list — invalid or forged values are rejected

---

## Cart & Order Display

```
Delivery Speed:   Express shipping
```

The selected option's **label** is shown — not the internal value.
