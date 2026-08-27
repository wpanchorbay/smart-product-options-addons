# Heading

A Heading renders a section title within an option group. It is a **display-only** element — customers cannot interact with it, it produces no cart data, and it never appears on orders.

---

## When to Use

- Titling the sections of a long configurator ("Dimensions", "Finish", "Delivery")
- Introducing a block of related options
- Giving a form structure that a plain [Separator](/fields/separator) alone cannot convey

For arbitrary markup, use [Static Content](/fields/static).

---

## Configuration Settings

### General Settings

- **Label:** The text displayed as the heading on the product page. Unlike most fields, this label **is** shown to customers — it is the heading itself.
- **Heading Level:** The HTML tag used, from `H2` to `H5`. The default is `H3`.

::: tip Choose the Level to Match Your Page
The heading level is configurable rather than fixed because your product page already has a heading structure — typically an `H1` for the product title and `H2`s for sections such as Description and Reviews.

Picking a level that fits keeps the page's outline correct, which matters for screen readers and for search engines. As a rule, choose one level below the nearest heading above your options. A fixed level would produce a broken outline on most themes.
:::

Headings are plain text. HTML tags in the label are escaped rather than rendered — use [Static Content](/fields/static) if you need markup.

### Unsupported Features

Because a Heading holds no value, several tabs do not apply and are hidden in the builder:

- **Validation:** There is nothing to validate. A Heading can never block Add to Cart.
- **Pricing:** There is no selection to charge for.
- **Stock:** There is nothing to deduct.

::: warning Not Available as a Condition Trigger
A Heading cannot be chosen as the watched field in another field's conditional logic, for the same reason as a [Separator](/fields/separator) — it submits no value, so any rule against it would match permanently. Both the browser and the server ignore any such rule saved by an older version.
:::

---

## Example & Frontend Display

A desk configurator split into two labelled sections:

- **Label:** `Dimensions` — **Heading Level:** `H3`
- **Label:** `Finish` — **Heading Level:** `H3`

```
Dimensions
  Width:     [ 120cm ▾ ]
  Depth:     [ 60cm  ▾ ]

Finish
  Material:  [ Oak   ▾ ]
  Edge:      [ Round ▾ ]
```

The heading renders with its margins and font size reset within the options list, so it looks consistent even on themes that style headings heavily.
