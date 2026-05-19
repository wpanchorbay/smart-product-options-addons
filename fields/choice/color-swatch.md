# Color Swatches

Color Swatches present choices as small colored squares or circles that customers click to select. Only one swatch can be active at a time (single choice). Each swatch maps to a hex color value; the visual color is rendered by CSS.

![Color Swatch field on a product page showing 6 colored swatches, one selected with a checkmark overlay](../../public/img/field-color-swatch-frontend.png)

---

## When to Use

- Product color selection (when not using WooCommerce variations)
- Thread, ribbon, or ink color for personalised products
- Paint or finish color for custom orders
- Any single-choice color picker where a colored visual is clearer than a dropdown label

---

## General Settings

| Setting | Description |
|---------|-------------|
| **Label** | Group heading shown above the swatches |
| **Tooltip** | Hover `?` tooltip text |
| **Description** | Helper text below the swatch group |
| **Required** | Customer must select a color before add-to-cart |

---

## Options

Each swatch choice has:

| Property | Description |
|----------|-------------|
| **Label** | The text name for this color (shown in cart/orders and on hover) |
| **Value** | Internal identifier stored in the cart (e.g. `navy-blue`) |
| **Color** | Hex color code rendered as the visual swatch (e.g. `#1B3A6B`) |
| **Price Type** | Per-swatch pricing type |
| **Price Amount** | Surcharge for choosing this color |
| **Weight** | Shipping weight added when this color is selected |

---

## Display Style

Color swatches have two visual modes:

| Style | Display |
|-------|---------|
| **Swatch Only** *(default)* | Just the colored box — label appears in the `title` tooltip on hover |
| **Swatch + Label** | Colored box with the text label displayed below it |

---

## Swatch Appearance (Global Settings)

Swatch size and shape are controlled site-wide in **WooCommerce → OptionBay → Settings**:

| Setting | Default | Effect |
|---------|---------|--------|
| **Color Swatch Size** | `32px` | Width and height of each swatch |
| **Color Swatch Roundness** | `4px` | `border-radius` — use `50%` for perfect circles |

---

## Pricing

Open the **Pricing** tab to set a flat charge at the **field level** (same charge for any swatch picked). For color-specific pricing, set the price on each individual swatch option.

| Price Type | Effect |
|------------|--------|
| **None** | No charge |
| **Flat Fee** | Same fixed fee for any swatch selected |
| **Percentage** | % of product base price, same for any swatch |
| **Math Formula** | Advanced formula |

→ Full reference: [Pricing Strategies](/pricing/index)

---

## Conditions

Open the **Conditions** tab to conditionally show or hide this swatch group.

**Example:** Show "Thread Color" swatches only if "Add Embroidery" checkbox is ticked:

| Part | Value |
|------|-------|
| Action | Show this field when… |
| Match | ALL |
| Field | Add Embroidery? |
| Operator | == (equals) |
| Value | `1` |

→ Full reference: [Field Conditions](/fields/conditions)

---

## Stock

Each individual swatch option can be linked to a separate [Global Stock Item](/stocks/index). For example: "Midnight Black" finish has 50 slots; "Pearl White" has 200.

→ Full reference: [Linking Options to Stock](/stocks/field-linking)

---

## Validation

Server-side validation:
1. **Required** — a selection must be present
2. **Allowed values** — the submitted value must match one of the defined swatch options. Forged values are rejected.

---

## Cart & Order Display

```
Thread Color:   Navy Blue
```

The swatch's **label** is displayed — not the hex code or internal value.
