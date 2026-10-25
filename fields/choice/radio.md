# Radio Buttons

Radio buttons display all choices openly — customers click one to select it. Unlike a dropdown, every option is visible at once, making it easy to compare choices and price labels side by side.

![Radio button field on a product page showing three choices, with price badges beside two of them, one radio selected](/public/field-radio-frontend.png)

---

## When to Use

- Gift wrapping: No / Yes (+$5.00)
- Finish type: Matte / Gloss / Satin
- Delivery speed: Standard / Express (+$10.00)
- Any single-choice decision with 2–6 options where visual comparison matters and open visibility is preferred over a collapsed dropdown.

---

## Configuration Settings

When you add a Radio Buttons field in the Addon Builder, you can configure the following inputs across different sections:

### General Settings

![Backend view of General settings for Radio Buttons field](/public/field-radio-general.png)

- **Label:** The main heading shown above the entire group of radio buttons. Used to identify the field group in the cart and order details.
- **Description:** Additional helper text shown below the group. Useful for providing instructions (e.g. "Select one finish").

### Options Configuration

![Backend view of Options block for Radio Buttons field](/public/field-radio-options.png)

Within the main **Options** block, you define the actual radio choices by clicking the **Add Choice** button. For each choice card in the list, you have access to inline inputs and an expandable settings panel.

**Inline Editor (Always Visible):**

- **Drag Handle:** Use the left-side grip icon to drag and drop choices to reorder how they appear on the frontend.
- **Label:** The primary text shown next to the specific radio button on the frontend, and in the cart (e.g. `Express Delivery`).
- _(System Value):_ OptionBay automatically generates a system-friendly `value` behind the scenes by lowercasing your Label and replacing spaces with underscores.

**Expanded Settings Panel:**
Click the **downward chevron icon** on the right side of any choice card to expand its advanced settings:

- **Price Type:** Choose how this specific option is priced (`None`, `Flat Fee`, `Percentage`, or `Formula`). [Read the Pricing Guide &rarr;](/pricing/index)
- **Price Amount / Formula Expression:** Appears if a price type is selected. Enter the monetary surcharge or the dynamic math formula.
- **Weight (kg):** Enter a numeric value to add physical shipping weight to the cart when this option is selected.
- **Stock Tracking:** A toggle that, when enabled, opens the per-option inventory controls. [Read the Stock Linking Guide &rarr;](/stocks/field-linking)
  - _Select Pool:_ Choose which Global Stock Item to link this choice to.
  - _Reduction Mode:_ Choose how stock is deducted (`Per Item Quantity`, `Per Line Item`, or `Formula`).

### Validation

![Backend view of Validation settings for Radio Buttons field](/public/field-radio-validation.png)

- **Field is Required:** A checkbox toggle. When enabled, the customer is forced to click and select one of the radio buttons before they are allowed to add the product to their cart.

---

## Layout (Global Settings)

**Note:** The orientation of radio button choices is controlled globally across your entire store to ensure design consistency.
Go to **WooCommerce → Settings → Products → Options** to configure the **Options Orientation**:

- **Vertical (default):** Choices stack top to bottom.
- **Horizontal:** Choices sit side by side in a row.

---

## Pricing Logic

OptionBay choice fields (like Radio Buttons) do not support field-level pricing. Instead, pricing is configured individually per option within the **General** tab under the **Options Configuration** block.

**Option-Level Pricing:** Set specific price surcharges on individual choices (e.g., "+$4.00 for Express") by expanding the choice card and selecting a Price Type:

- **Price Type:** (None, Flat Fee, Percentage, or Math Formula).
- **Price Amount / Formula Expression:** The fee applied when this specific option is selected.

::: info Master the Pricing Engine
OptionBay includes multiple pricing strategies, including dynamic math formulas. We've created a dedicated guide to explain all of them in detail.

**[Read the Ultimate Pricing Guide &rarr;](/pricing/index)**
:::

---

## Conditions

![Backend view of Conditions tab for Radio Buttons field](/public/field-radio-conditions.png)

Open the **Conditions** tab to dynamically show or hide this radio group based on what the customer has selected in other fields.

**Available Inputs:**

- **Enable Conditional Logic:** Toggle to turn conditions on or off.
- **Action:** Choose whether to _Show_ or _Hide_ this field when conditions are met.
- **Match Type:** Choose _ALL_ (every rule must match) or _ANY_ (at least one rule must match).
- **Rules:** Define the specific field to watch, the comparison operator, and the value to check against.

_Example:_ Show a "Delivery Speed" radio group only after the customer selects "Ship to me" (and not "In-store pickup") from a previous field.

::: info Learn More About Conditions
Conditional logic lets you build dynamic, branching forms that adapt as the customer interacts. See the full list of operators and examples in our detailed guide.

**[Read the Field Conditions Reference &rarr;](/fields/conditions)**
:::

---

## Stock

![Backend view of Stock tab for Radio Buttons field](/public/field-radio-stock.png)

Because a Radio Buttons field contains multiple distinct options, stock is typically linked **per option** instead of for the whole field.

Open the **Stock** tab to link individual choices to their respective inventory pools.

**Available Inputs:**

- **Enable Stock Management:** Toggle to activate inventory tracking.
- **Per-Option Links:** You will see a row for every option you created. For each row, you can select an existing Global Stock Item and define the Reduction Mode (Per Item Quantity, Per Line Item, or Formula).

::: warning Option-Level Stock Visibility
If you enable **Stock Tracking** inside any individual choice card under the **General** tab, it activates option-level stock. When this happens, the field-level **Stock** tab shown above is automatically hidden in the backend to prevent conflicting inventory rules.
:::

::: tip Global Stock Management
OptionBay lets you share stock pools across multiple options and products, complete with cart-reservation to prevent overselling.

**[Read the Guide: Linking Options to Stock &rarr;](/stocks/field-linking)**
:::

---

## Example & Frontend Display

To see how this comes together, let's look at a common scenario: **Selecting a delivery speed for a custom order**. You want customers to pick one speed, and charge a different price based on what they choose.

You would configure the Radio Buttons field like this:

- **Label:** `Delivery Speed`
- **Option 1:** Label `Standard (3-5 days)`, Price Type `None`
- **Option 2:** Label `Express (2 days)`, Price Type `Flat Fee`, Price Amount `10.00`
- **Option 3:** Label `Overnight`, Price Type `Flat Fee`, Price Amount `25.00`

**Frontend Product Page View:**
With those settings, here is how the field renders on your product page for customers to interact with:

![Radio button field on a product page showing three choices, with price badges beside two of them, one radio selected](/public/field-radio-frontend.png)

When a customer makes a selection and adds the product to their cart, OptionBay validates that the submitted value exactly matches one of the allowed options you defined, preventing forged submissions.

**Cart & WooCommerce Order View:**
The field label and the text label of the chosen option (not the system value) will appear clearly on the cart page, checkout, and in your WooCommerce admin order screen exactly like this:

```
Delivery Speed:   Express (2 days)
```
