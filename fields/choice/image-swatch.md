# Image Swatches

Image Swatches present choices as small clickable thumbnail images. Only one image can be selected at a time (single choice). Use them when a photograph or texture preview communicates a choice better than a plain color or text label.

![Image Swatch field on a product page showing 4 fabric texture thumbnails, one highlighted with a selection border](/public/field-image-swatch-frontend-label.png)

---

## When to Use

- Fabric or material texture previews
- Pattern or print selection (plaid, stripe, polka-dot)
- Finish sample photos (polished, brushed, matte)
- Style preview thumbnails where a photo explains better than words

---

## Configuration Settings

When you add an Image Swatch field in the Addon Builder, you can configure the following inputs across different sections:

### General Settings

![Backend view of General settings for Image Swatch field](/public/field-image-swatch-general.png)

- **Label:** The main heading shown above the swatches. Used to identify the field group in the cart and order details.
- **Description:** Additional helper text shown below the swatches. Useful for providing instructions.

### Options Configuration

![Backend view of Options block for Image Swatch field](/public/field-image-swatch-options.png)

Within the main **Options** block, you define the actual image choices by clicking the **Add Choice** button. For each choice card in the list, you have access to inline inputs and an expandable settings panel.

**Inline Editor (Always Visible):**

- **Drag Handle:** Use the left-side grip icon to drag and drop choices to reorder how they appear on the frontend.
- **Image Uploader:** Click the image icon (or existing thumbnail) to open the WordPress Media Library and select/upload the swatch image.
- **Label:** The primary text shown next to the swatch on the frontend, and in the cart (e.g. `Herringbone`).
- _(System Value):_ OptionBay automatically generates a system-friendly `value` behind the scenes by lowercasing your Label and replacing spaces with underscores.

**Expanded Settings Panel:**
Click the **downward chevron icon** on the right side of any choice card to expand its advanced settings:

- **Price Type:** Choose how this specific image choice is priced (`None`, `Flat Fee`, `Percentage`, or `Formula`). [Read the Pricing Guide &rarr;](/pricing/index)
- **Price Amount / Formula Expression:** Appears if a price type is selected. Enter the monetary surcharge or the dynamic math formula.
- **Weight (kg):** Enter a numeric value to add physical shipping weight to the cart when this option is ticked.
- **Stock Tracking:** A toggle that, when enabled, opens the per-option inventory controls. [Read the Stock Linking Guide &rarr;](/stocks/field-linking)
  - _Select Pool:_ Choose which Global Stock Item to link this image choice to.
  - _Reduction Mode:_ Choose how stock is deducted (`Per Item Quantity`, `Per Line Item`, or `Formula`).

### Validation

![Backend view of Validation settings for Image Swatch field](/public/field-image-swatch-validation.png)

- **Field is Required:** A checkbox toggle. When enabled, the customer is forced to click and select an image thumbnail before they are allowed to add the product to their cart.

---

## Display Style

![Backend view of Display Style settings for Image Swatch field](/public/field-image-swatch-display-style.png)

You can choose how swatches are presented visually on the frontend product page:

- **Swatch Only:** Renders only the thumbnail box. The choice name appears as a tooltip on hover.

  ![Frontend view of Swatch Only Display Style](/public/field-image-swatch-frontend-only.png)

- **Swatch + Label:** Renders both the thumbnail box and its descriptive text label.

  ![Frontend view of Swatch + Label Display Style](/public/field-image-swatch-frontend-label.png)

---

## Swatch Appearance (Global Settings)

**Note:** The physical shape and size of the image swatches are controlled globally across your entire store to ensure design consistency.
Go to **WooCommerce → Settings → Products → Options** to configure:

- **Image Swatch Size:** Default is `64px`.
- **Image Swatch Roundness:** Change the `border-radius`. Use `50%` for circular thumbnails, or `4px` for gently rounded corners.

---

## Pricing Logic

OptionBay choice fields (like Image Swatches) do not support field-level pricing. Instead, pricing is configured individually per option within the **General** tab under the **Options Configuration** block.

**Option-Level Pricing:** Set specific price surcharges on individual choices (e.g., "+$5.00 for Premium Pattern") by expanding the choice card and selecting a Price Type:

- **Price Type:** (None, Flat Fee, Percentage, or Math Formula).
- **Price Amount / Formula Expression:** The fee applied when this specific option is selected.

::: info Master the Pricing Engine
OptionBay includes multiple pricing strategies, including dynamic math formulas. We've created a dedicated guide to explain all of them in detail.

**[Read the Ultimate Pricing Guide &rarr;](/pricing/index)**
:::

---

## Conditions

![Backend view of Conditions tab for Image Swatch field](/public/field-image-swatch-conditions.png)

Open the **Conditions** tab to dynamically show or hide this swatch group based on what the customer has selected in other fields.

**Available Inputs:**

- **Enable Conditional Logic:** Toggle to turn conditions on or off.
- **Action:** Choose whether to _Show_ or _Hide_ this field when conditions are met.
- **Match Type:** Choose _ALL_ (every rule must match) or _ANY_ (at least one rule must match).
- **Rules:** Define the specific field to watch, the comparison operator, and the value to check against.

_Example:_ Show the "Lining Fabric Pattern" image swatches only if the customer selects "With Lining" from a previous Dropdown.

::: info Learn More About Conditions
Conditional logic lets you build dynamic, branching forms that adapt as the customer interacts. See the full list of operators and examples in our detailed guide.

**[Read the Field Conditions Reference &rarr;](/fields/conditions)**
:::

---

## Stock

![Backend view of Stock tab for Image Swatch field](/public/field-image-swatch-stock.png)

Because an Image Swatch field contains multiple distinct options, stock is linked **per option** instead of for the whole field.

Open the **Stock** tab to link individual patterns/materials to their respective inventory pools.

**Available Inputs:**

- **Enable Stock Management:** Toggle to activate inventory tracking.
- **Per-Option Links:** You will see a row for every image you uploaded. For each row, you can select an existing Global Stock Item and define the Reduction Mode (Per Item Quantity, Per Line Item, or Formula).

::: warning Option-Level Stock Visibility
If you enable **Stock Tracking** inside any individual choice card under the **General** tab, it activates option-level stock. When this happens, the field-level **Stock** tab shown above is automatically hidden in the backend to prevent conflicting inventory rules.
:::

_Example:_ Link the "Herringbone" fabric choice to an inventory item tracking your bolts of Herringbone cloth.

::: tip Global Stock Management
OptionBay lets you share stock pools across multiple options and products, complete with cart-reservation to prevent overselling.

**[Read the Guide: Linking Options to Stock &rarr;](/stocks/field-linking)**
:::

---

## Example & Frontend Display

To see how this comes together, let's look at a common scenario: **Selecting a wood finish for custom furniture**. You want customers to pick one wood texture, and you charge an extra $50.00 specifically if they choose the "Premium Walnut" finish.

You would configure the Image Swatch field like this:

- **Label:** `Wood Finish`
- **Display Style:** `Swatch + Label`
- **Option 1:** Label `Classic Oak`, Image `oak-texture.jpg`, Price Type `None`
- **Option 2:** Label `Distressed Pine`, Image `pine-texture.jpg`, Price Type `None`
- **Option 3:** Label `Premium Walnut`, Image `walnut-texture.jpg`, Price Type `Flat Fee`, Price Amount `50.00`

**Frontend Product Page View:**
With those settings, here is how the field renders on your product page for customers to interact with:

![Image Swatch field on a product page showing 4 fabric texture thumbnails, one highlighted with a selection border](/public/field-image-swatch-frontend-label.png)

When a customer clicks an image thumbnail and adds the product to their cart, OptionBay validates that the submitted value exactly matches one of the allowed options you defined, preventing forged submissions.

**Cart & WooCommerce Order View:**
The field label and the text label of the chosen image (not the image file itself) will appear clearly on the cart page, checkout, and in your WooCommerce admin order screen exactly like this:

```
Wood Finish:   Premium Walnut
```
