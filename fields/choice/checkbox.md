# Checkboxes

The Checkbox field operates in two distinct modes depending on whether you add options to it:

| Mode | When | Use for |
|------|------|---------|
| **Single Checkbox (Toggle)** | No options defined | Yes/no opt-ins |
| **Multi-Checkbox Group** | Options defined | Select multiple add-ons |

---

## Mode 1 — Single Checkbox (Toggle)

A standalone checkbox — the customer ticks it or leaves it blank.

![A single checkbox toggle on a product page: "Add gift message? (+$2.00)" with the checkbox ticked](../../public/img/field-checkbox-single.png)

**Use cases:**
- "Add gift message? (+$2.00)"
- "I confirm this is a custom order"
- "Include rush processing? (+$15.00)"

### General Settings

| Setting | Description |
|---------|-------------|
| **Label** | The text shown beside the checkbox (acts as both label and description) |
| **Tooltip** | Hover `?` tooltip |
| **Description** | Additional helper text shown below the checkbox |
| **Required** | Customer must tick the checkbox (useful for consent fields) |

### Value
- Checked → submits `"1"`
- Unchecked → submits nothing (field is treated as empty)

---

## Mode 2 — Multi-Checkbox Group

Multiple independent checkboxes — customers can tick any combination.

![A multi-checkbox group showing four add-on options, two of which are ticked, each with a price badge](../../public/img/field-checkbox-multi.png)

**Use cases:**
- "Add-on accessories": Carrying Case (+$10), Screen Protector (+$5), Warranty (+$20)
- "Dietary extras" for food orders
- "Optional services": Installation, Assembly, White-glove delivery

### General Settings

| Setting | Description |
|---------|-------------|
| **Label** | Group heading shown above all checkboxes |
| **Tooltip** | Hover `?` tooltip |
| **Description** | Helper text below the group |
| **Required** | At least one checkbox must be selected |

### Options

Each choice has:

| Property | Description |
|----------|-------------|
| **Label** | Text next to the checkbox |
| **Value** | Internal value submitted (e.g. `carrying-case`) |
| **Price Type** | Per-option pricing type |
| **Price Amount** | Charge added when this option is ticked |
| **Weight** | Shipping weight added when ticked |

---

## Pricing

For a **single checkbox**, set pricing in the **Pricing** tab — the charge applies when the box is checked.

For a **multi-checkbox**, pricing is set **per option**. Each ticked checkbox adds its own price delta cumulatively.

| Price Type | Effect |
|------------|--------|
| **None** | No charge |
| **Flat Fee** | Fixed amount per tick |
| **Percentage** | % of product base price per tick |
| **Math Formula** | Advanced formula (uncommon for checkboxes) |

→ Full reference: [Pricing Strategies](/pricing/index)

---

## Conditions

Open the **Conditions** tab to show or hide this field based on another field.

**Single checkbox example — show "Rush Fee?" only if size is XL:**

| Part | Value |
|------|-------|
| Action | Show this field when… |
| Match | ALL |
| Field | Size |
| Operator | == (equals) |
| Value | `xl` |

**Watching a multi-checkbox from another field — show a note if "Assembly" is selected:**

| Part | Value |
|------|-------|
| Action | Show this field when… |
| Field | Optional Services |
| Operator | contains |
| Value | `assembly` |

→ Full reference: [Field Conditions](/fields/conditions)

---

## Stock

Each individual option in a multi-checkbox group can be independently linked to a [Global Stock Item](/stocks/index). Checking that option will deduct from the linked pool.

→ Full reference: [Linking Options to Stock](/stocks/field-linking)

---

## Validation

**Single checkbox:** Required validation checks that the value is `"1"` (checked).

**Multi-checkbox:** 
- Required validation requires at least one option to be ticked
- All submitted values are checked against the allowed options list — values not in the list are rejected server-side

---

## Cart & Order Display

**Single checkbox:**
```
Add gift message?:   Yes
```

**Multi-checkbox:**
```
Add-on Accessories:   Carrying Case, Screen Protector
```

Comma-separated **labels** of all selected options are shown.
