# Image Swatches

Image Swatches present choices as small clickable thumbnail images. Only one image can be selected at a time (single choice). Use them when a photograph or texture preview communicates a choice better than a plain color or text label.

![Image Swatch field on a product page showing 4 fabric texture thumbnails, one highlighted with a selection border](../../public/img/field-image-swatch-frontend.png)

---

## When to Use

- Fabric or material texture previews
- Pattern or print selection (plaid, stripe, polka-dot)
- Finish sample photos (polished, brushed, matte)
- Style preview thumbnails where a photo explains better than words

---

## General Settings

| Setting | Description |
|---------|-------------|
| **Label** | Group heading shown above the thumbnails |
| **Tooltip** | Hover `?` tooltip text |
| **Description** | Helper text displayed below the swatch group |
| **Required** | Customer must select an image before add-to-cart |

---

## Options

Each image swatch has:

| Property | Description |
|----------|-------------|
| **Label** | Text name for this choice (shown in cart/orders and on hover) |
| **Value** | Internal identifier stored in the cart (e.g. `herringbone`) |
| **Image** | Upload or select from the WordPress Media Library |
| **Price Type** | Per-swatch pricing type |
| **Price Amount** | Surcharge for choosing this image |
| **Weight** | Shipping weight added when this image is selected |

---

## Swatch Appearance (Global Settings)

Image swatch size and shape are configured site-wide in **WooCommerce → OptionBay → Settings**:

| Setting | Default | Effect |
|---------|---------|--------|
| **Image Swatch Size** | `64px` | Width and height of each thumbnail |
| **Image Swatch Roundness** | `4px` | `border-radius` — use `50%` for circular thumbnails |

---

## Pricing

Open the **Pricing** tab to set a charge at the **field level** (same for any thumbnail selected). For individual thumbnail pricing, set price on each option.

| Price Type | Effect |
|------------|--------|
| **None** | No charge |
| **Flat Fee** | Same fixed fee for any thumbnail selected |
| **Percentage** | % of product base price |
| **Math Formula** | Advanced formula |

→ Full reference: [Pricing Strategies](/pricing/index)

---

## Conditions

Open the **Conditions** tab to conditionally show or hide this swatch group based on another field's value.

**Example:** Show "Lining Fabric" image swatches only if the customer selects "With Lining":

| Part | Value |
|------|-------|
| Action | Show this field when… |
| Match | ALL |
| Field | Lining Option |
| Operator | == (equals) |
| Value | `with-lining` |

→ Full reference: [Field Conditions](/fields/conditions)

---

## Stock

Each individual image swatch option can be linked to a separate [Global Stock Item](/stocks/index) — useful when each fabric or texture has its own limited quantity.

→ Full reference: [Linking Options to Stock](/stocks/field-linking)

---

## Validation

Server-side validation:
1. **Required** — a selection must be present
2. **Allowed values** — the submitted value must match one of the defined image swatch options. Forged values are rejected.

---

## Cart & Order Display

```
Fabric Pattern:   Herringbone
```

The swatch's **label** is shown — not the image URL or internal value.
