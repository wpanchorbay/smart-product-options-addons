# Color Swatches

Color Swatches present choices as small colored squares or circles that customers click to select. Only one swatch can be active at a time (single choice). Each swatch maps to a hex color value; the visual color is rendered automatically by CSS.

![Color Swatch field on a product page showing 6 colored swatches, one selected with a checkmark overlay](../../public/field-color-swatch-frontend.png)

---

## When to Use

- Product color selection (when not using WooCommerce variations)
- Thread, ribbon, or ink color for personalised products
- Paint or finish color for custom orders
- Any single-choice selection where a colored visual is clearer than a dropdown label

---

## Configuration Settings

When you add a Color Swatch field in the Addon Builder, you can configure the following inputs across different sections:

### General Settings & Display Style

![Backend view of General settings for Color Swatch field](../../public/field-color-swatch-general.png)

- **Label:** The main heading shown above the swatches. Used to identify the field group in the cart and order details.
- **Description:** Additional helper text shown below the swatches. Useful for providing instructions.
- **Display Style:** Choose how the swatches render visually.
  - _Swatch Only:_ Just the colored box — the color's name appears only in a tooltip on hover.
  - _Swatch + Label:_ The colored box with the text name printed clearly beside or below it.

### Options Configuration

![Backend view of Options block for Color Swatch field](../../public/field-color-swatch-options.png)

Within the main **Options** block, you define the actual color choices by clicking the **Add Choice** button. For each choice card in the list, you have access to inline inputs and an expandable settings panel.

**Inline Editor (Always Visible):**

- **Drag Handle:** Use the left-side grip icon to drag and drop choices to reorder how they appear on the frontend.
- **Color Picker:** Click the circular color bubble to open a visual picker, or type the exact Hex/RGBA code (e.g. `#1B3A6B`).
- **Label:** The primary text shown next to the swatch on the frontend, and in the cart (e.g. `Navy Blue`).
- _(System Value):_ OptionBay automatically generates a system-friendly `value` behind the scenes by lowercasing your Label and replacing spaces with underscores.

**Expanded Settings Panel:**
Click the **downward chevron icon** on the right side of any choice card to expand its advanced settings:

- **Price Type:** Choose how this specific color is priced (`None`, `Flat Fee`, `Percentage`, or `Formula`). [Read the Pricing Guide &rarr;](/pricing/index)
- **Price Amount / Formula Expression:** Appears if a price type is selected. Enter the monetary surcharge or the dynamic math formula.
- **Weight (kg):** Enter a numeric value to add physical shipping weight to the cart when this option is ticked.
- **Stock Tracking:** A toggle that, when enabled, opens the per-option inventory controls. [Read the Stock Linking Guide &rarr;](/stocks/field-linking)
  - _Select Pool:_ Choose which Global Stock Item to link this color to.
  - _Reduction Mode:_ Choose how stock is deducted (`Per Item Quantity`, `Per Line Item`, or `Formula`).

### Validation

![Backend view of Validation settings for Color Swatch field](../../public/field-color-swatch-validation.png)

- **Field is Required:** A checkbox toggle. When enabled, the customer is forced to click and select a color before they are allowed to add the product to their cart.

---

## Swatch Appearance (Global Settings)

**Note:** The physical shape and size of the swatches are controlled globally across your entire store to ensure design consistency.
Go to **WooCommerce → Settings → Products → Options** to configure:

- **Color Swatch Size:** Default is `32px`.
- **Color Swatch Roundness:** Change the `border-radius`. Use `50%` for perfect circles, or `4px` for rounded squares.

---

## Pricing Logic

![Backend view of Pricing settings for Color Swatch field](../../public/field-color-swatch-pricing.png)

You can charge a fee globally for the field, or individually per color.

**Per-Option Pricing:** (Recommended) Set a specific price delta on individual colors (e.g. "+$5 for Gold") inside the Options block.

**Field-Level Pricing:** Open the **Pricing** tab to set a flat charge that applies _no matter which color is selected_.

- **Price Type:** (None, Flat Fee, Percentage, Math Formula).
- **Price Amount / Formula Expression:** The fee applied when the field is answered.

::: info Master the Pricing Engine
OptionBay includes five different pricing strategies, including dynamic math formulas. We've created a dedicated guide to explain all of them in detail.

**[Read the Ultimate Pricing Guide &rarr;](/pricing/index)**
:::

---

## Conditions

![Backend view of Conditions tab for Color Swatch field](../../public/field-color-swatch-conditions.png)

Open the **Conditions** tab to dynamically show or hide this swatch group based on what the customer has selected in other fields.

**Available Inputs:**

- **Enable Conditional Logic:** Toggle to turn conditions on or off.
- **Action:** Choose whether to _Show_ or _Hide_ this field when conditions are met.
- **Match Type:** Choose _ALL_ (every rule must match) or _ANY_ (at least one rule must match).
- **Rules:** Define the specific field to watch, the comparison operator, and the value to check against.

_Example:_ Show the "Thread Color" swatches only if the customer checks the "Add Embroidery" checkbox.

::: info Learn More About Conditions
Conditional logic lets you build dynamic, branching forms that adapt as the customer interacts. See the full list of operators and examples in our detailed guide.

**[Read the Field Conditions Reference &rarr;](/fields/conditions)**
:::

---

## Stock

![Backend view of Stock tab for Color Swatch field](../../public/field-color-swatch-stock.png)

Because a Color Swatch field contains multiple distinct options, stock is linked **per option** instead of for the whole field.

Open the **Stock** tab to link individual colors to their respective inventory pools.

**Available Inputs:**

- **Enable Stock Management:** Toggle to activate inventory tracking.
- **Per-Option Links:** You will see a row for every color you created. For each row, you can select an existing Global Stock Item and define the Reduction Mode (Per Item Quantity, Per Line Item, or Formula).

_Example:_ Link "Midnight Black" to an inventory item with 50 slots, and "Pearl White" to one with 200.

::: tip Global Stock Management
OptionBay lets you share stock pools across multiple options and products, complete with cart-reservation to prevent overselling.

**[Read the Guide: Linking Options to Stock &rarr;](/stocks/field-linking)**
:::

---

## Example & Frontend Display

To see how this comes together, let's look at a common scenario: **Selecting a thread color for custom embroidery**. You want customers to pick one color, and you charge an extra $2.00 specifically if they choose the "Metallic Gold" thread.

You would configure the Color Swatch field like this:

- **Label:** `Thread Color`
- **Display Style:** `Swatch Only`
- **Option 1:** Label `Navy Blue`, Color `#1B3A6B`, Price Type `None`
- **Option 2:** Label `Crimson Red`, Color `#DC143C`, Price Type `None`
- **Option 3:** Label `Metallic Gold`, Color `#D4AF37`, Price Type `Flat Fee`, Price Amount `2.00`

**Frontend Product Page View:**
With those settings, here is how the field renders on your product page for customers to interact with:

![Color Swatch field on a product page showing 6 colored swatches, one selected with a checkmark overlay](../../public/field-color-swatch-frontend.png)

When a customer clicks a swatch and adds the product to their cart, OptionBay validates that the submitted value exactly matches one of the allowed options you defined, preventing forged submissions.

**Cart & WooCommerce Order View:**
The field label and the text label of the chosen color (not the hex code) will appear clearly on the cart page, checkout, and in your WooCommerce admin order screen exactly like this:

```
Thread Color:   Metallic Gold
```
