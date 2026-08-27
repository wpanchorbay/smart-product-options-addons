# Separator

A Separator draws a horizontal rule between fields. It is a **display-only** element — customers cannot interact with it, it produces no cart data, and it never appears on orders.

---

## When to Use

- Dividing a long option group into visually distinct sections
- Setting apart a block of premium or upsell options
- Giving a form breathing room without adding wording

For a divider that carries a title, use a [Heading](/fields/heading) instead. For arbitrary markup, use [Static Content](/fields/static).

---

## Configuration Settings

### General Settings

- **Label:** An internal, admin-only name used to identify this element in the Addon Builder. It is **never shown on the frontend**, and it is optional — a Separator can be saved without one.

### Unsupported Features

Because a Separator holds no value, several tabs do not apply and are hidden in the builder:

- **Validation:** There is nothing to validate. A Separator can never block Add to Cart.
- **Pricing:** There is no selection to charge for.
- **Stock:** There is nothing to deduct.

::: warning Not Available as a Condition Trigger
A Separator cannot be chosen as the watched field in another field's conditional logic.

It submits no value, so every rule against it would compare against an empty string — meaning `is empty` or `== ""` would match permanently and the rule would do nothing useful. Both the browser and the server ignore any such rule saved by an older version.
:::

---

## Example & Frontend Display

Placed between a group's standard options and its premium ones:

```
Size:        [ Medium ▾ ]
Colour:      [ Navy   ▾ ]
─────────────────────────────
Gift wrap:   [ ] Yes (+5.00)
```

The Separator renders as a plain `<hr>` element, styled to sit consistently within the options list regardless of your theme's own rules for horizontal rules.
