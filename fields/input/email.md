# Email Input

An `<input type="email">` with built-in format validation — the browser and server both verify the value is a well-formed email address before the product can be added to the cart.

![Email input field on a product page showing a label, email input, and a browser validation tooltip for an invalid address](../../public/img/field-email-frontend.png)

---

## When to Use

- "Send confirmation to a different email"
- "Enter gift recipient's email for digital delivery"
- "Notification email for order updates"
- Any field where you need the customer to provide a valid email address

---

## Configuration Settings

When you add an Email field in the Addon Builder, you can configure the following inputs across different sections:

### General Settings

![Backend view of General settings for Email field](../../public/img/field-email-general.png)

- **Label:** The text heading displayed above the email input on the product page. Used to identify the field in the cart and order details.
- **Description:** Additional helper text shown below the input. Useful for providing instructions (e.g. "Where should we send the digital gift card?").
- **Placeholder:** Grey hint text that appears inside the empty input (e.g., `recipient@example.com`). It disappears once the customer starts typing.

### Validation

![Backend view of Validation settings for Email field](../../public/img/field-email-validation.png)

- **Field is Required:** A checkbox toggle. When enabled, the customer is forced to type a valid email address into this field before they are allowed to add the product to their cart.

---

## Pricing Logic

![Backend view of Pricing settings for Email field](../../public/img/field-email-pricing.png)

Email fields can carry a flat fee for services that involve email delivery to a third party. Configure this in the **Pricing** tab of the field.

**Available Inputs:**
- **Price Type:** Choose how the price is calculated.
  - *None:* No charge (most common for this field type).
  - *Flat Fee:* A fixed charge added whenever the customer enters an email address.
  - *Percentage:* A percentage of the product's base price added whenever the field is filled.
  - *Math Formula:* For advanced dynamic pricing using placeholders like `[base_price]` and `[quantity]`.
- **Price Amount / Formula Expression:** Depending on the Price Type selected, enter the dollar amount, percentage value, or the exact math formula.

::: info Master the Pricing Engine
OptionBay includes five different pricing strategies, including dynamic math formulas. We've created a dedicated guide to explain all of them in detail.

**[Read the Ultimate Pricing Guide &rarr;](/pricing/index)**
:::

---

## Conditions

![Backend view of Conditions tab for Email field](../../public/img/field-email-conditions.png)

Open the **Conditions** tab to dynamically show or hide this Email field based on what the customer has selected in other fields. 

**Available Inputs:**
- **Enable Conditional Logic:** Toggle to turn conditions on or off.
- **Action:** Choose whether to *Show* or *Hide* this field when conditions are met.
- **Match Type:** Choose *ALL* (every rule must match) or *ANY* (at least one rule must match).
- **Rules:** Define the specific field to watch, the comparison operator (e.g., `==`, `is not empty`), and the value to check against.

*Example:* Show the "Recipient Email" input only if the customer checks the "Send as a digital gift" checkbox.

::: info Learn More About Conditions
Conditional logic lets you build dynamic, branching forms that adapt as the customer interacts. See the full list of operators and examples in our detailed guide.

**[Read the Field Conditions Reference &rarr;](/fields/conditions)**
:::

---

## Stock

![Backend view of Stock tab for Email field](../../public/img/field-email-stock.png)

Email fields are not typically linked to stock, but the setting is available if the act of collecting an email consumes a digital resource or quota.

**Available Inputs:**
- **Enable Stock Management:** Toggle to activate inventory tracking for this field.
- **Inventory Item:** Search and select an existing Global Stock Item, or create a new one directly from the dropdown.
- **Reduction Mode:** Choose how stock is deducted (Per Item Quantity, Per Line Item, or Formula).

::: tip Global Stock Management
OptionBay lets you share stock pools across multiple options and products, complete with cart-reservation to prevent overselling.

**[Read the Guide: Linking Options to Stock &rarr;](/stocks/field-linking)**
:::

---

## Example & Frontend Display

To see how this comes together, let's look at a common scenario: **Selling a digital gift card**. You want to let customers enter the email address of the person they are gifting it to.

You would configure the Email field like this:
- **Label:** `Recipient Email`
- **Description:** `The digital gift card will be emailed directly to this address.`
- **Placeholder:** `recipient@example.com`
- **Price Type:** `None`

**Frontend Product Page View:**
With those settings, here is how the field renders on your product page for customers to interact with:

![Email input field on a product page showing a label, email input, and a browser validation tooltip for an invalid address](../../public/img/field-email-frontend.png)

When a customer fills out the field and adds the product to their cart, the browser first ensures it is formatted correctly. Then, the server performs a secondary check using PHP's `filter_var($value, FILTER_VALIDATE_EMAIL)` and safely sanitizes the data with `sanitize_email()`.

**Cart & WooCommerce Order View:**
The field label and the customer's email address will appear clearly on the cart page, checkout, and in your WooCommerce admin order screen exactly like this:

```
Recipient Email:   jane.doe@example.com
```
