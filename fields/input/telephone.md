# Telephone Input

An `<input type="tel">` for collecting a phone number. On phones and tablets it opens the numeric keypad rather than the full keyboard, which makes it noticeably easier to complete than a plain text field.

---

## When to Use

- "Contact number for delivery"
- "Mobile number for the SMS notification add-on"
- "Phone number for the engraving confirmation call"
- Any field where the customer must supply a number you will dial

---

## Configuration Settings

### General Settings

- **Label:** The text heading displayed above the input. Used to identify the field in the cart and order details.
- **Description:** Helper text shown below the input (e.g. "We only call if there is a problem with your order").
- **Placeholder:** Grey hint text inside the empty input (e.g. `+44 20 7946 0958`).

### Validation

- **Field is Required:** When enabled, the customer must supply a number before adding the product to the cart.

::: tip Validation Is Deliberately Permissive
The field accepts digits and the characters `+`, `-`, `(`, `)`, `.` and spaces, up to 32 characters. Anything else — letters in particular — is rejected.

It does not enforce a country format, and this is intentional. Phone numbers are written differently everywhere: `+44 20 7946 0958`, `(555) 123-4567` and `555.123.4567` are all valid numbers that a stricter pattern would reject. Rejecting a customer's real phone number is a far more common and costly failure than accepting an oddly formatted one.

Note that the `tel` input type performs **no** validation of its own in any browser — the HTML specification defines no format for it. Every check described here is applied by Smart Product Options and Addons.
:::

---

## Pricing Logic

Telephone fields support the full pricing engine. Configure it in the **Pricing** tab.

- **Price Type:** _None_, _Flat Fee_, _Percentage_, or a Pro strategy such as _Math Formula_.
- **Price Amount / Formula Expression:** The amount, percentage, or expression, depending on the type chosen.

::: info Master the Pricing Engine
**[Read the Ultimate Pricing Guide &rarr;](/pricing/index)**
:::

---

## Conditions

Telephone fields can be shown or hidden based on other fields, and can themselves be used as a condition trigger.

**[Read the Field Conditions Reference &rarr;](/fields/conditions)**

---

## Stock

Telephone fields support global stock linking like any other input field.

**[Read the Guide: Linking Options to Stock &rarr;](/stocks/field-linking)**

---

## Example & Frontend Display

**A delivery-day phone confirmation add-on.**

- **Label:** `Contact number`
- **Description:** `The courier will text this number on the morning of delivery.`
- **Placeholder:** `+44 20 7946 0958`
- **Price Type:** `Flat Fee`
- **Price Amount:** `2.00`

**Cart & WooCommerce Order View:**

```
Contact number:   +44 20 7946 0958
```
