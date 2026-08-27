# URL Input

An `<input type="url">` that accepts a web address. Both the browser and the server verify the value is a well-formed URL before the product can be added to the cart.

---

## When to Use

- "Link to the artwork you want printed"
- "Your Instagram profile for the shout-out add-on"
- "Reference site for the design brief"
- Any field where the customer must supply a web address you will later open

---

## Configuration Settings

### General Settings

- **Label:** The text heading displayed above the input on the product page. Used to identify the field in the cart and order details.
- **Description:** Helper text shown below the input (e.g. "Paste the full link, including https://").
- **Placeholder:** Grey hint text inside the empty input (e.g. `https://example.com`).

### Validation

- **Field is Required:** When enabled, the customer must supply a valid URL before adding the product to the cart.

::: warning Only http and https Are Accepted
A URL is rejected unless it uses the `http` or `https` scheme.

This is a deliberate security limit, not an oversight. The value you collect is shown to you on the order screen, and other schemes — `javascript:` in particular — turn a stored order note into something dangerous to click. Addresses such as `mailto:`, `ftp:` and `data:` are rejected for the same reason. Use an [Email Input](/fields/input/email) to collect an email address.
:::

---

## Pricing Logic

URL fields support the full pricing engine. Configure it in the **Pricing** tab.

- **Price Type:** _None_, _Flat Fee_, _Percentage_, or a Pro strategy such as _Math Formula_.
- **Price Amount / Formula Expression:** The amount, percentage, or expression, depending on the type chosen.

::: info Master the Pricing Engine
**[Read the Ultimate Pricing Guide &rarr;](/pricing/index)**
:::

---

## Conditions

URL fields can be shown or hidden based on other fields, and can themselves be used as a condition trigger — for example, `is not empty` to reveal a follow-up field once a link has been supplied.

**[Read the Field Conditions Reference &rarr;](/fields/conditions)**

---

## Stock

URL fields support global stock linking like any other input field, if supplying a link consumes a limited resource.

**[Read the Guide: Linking Options to Stock &rarr;](/stocks/field-linking)**

---

## Example & Frontend Display

**Selling a printed canvas from a customer-supplied image.**

- **Label:** `Link to your image`
- **Description:** `Paste a public link to the photo you want printed.`
- **Placeholder:** `https://example.com/my-photo.jpg`
- **Field is Required:** Enabled

On the product page the browser checks the format first. The server then re-validates with PHP's `filter_var($value, FILTER_VALIDATE_URL)`, confirms the scheme is `http` or `https`, and stores the value with `esc_url_raw()`.

**Cart & WooCommerce Order View:**

```
Link to your image:   https://example.com/my-photo.jpg
```
