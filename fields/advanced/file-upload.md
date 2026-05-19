# File Upload

Lets customers attach a file to their order — artwork, a logo, a design brief, or any other document. Files are validated on upload and stored securely in your WordPress uploads folder.

![File upload field on a product page: the native file input, filename shown after selection, and the allowed types + max size hint below](../../public/field-file-frontend.png)

---

## When to Use

- Custom print artwork upload (logo, design, photo)
- Design brief or specification document
- Photo for personalised products (photo books, mugs, canvas)
- Any order requiring a customer-submitted file

---

## Configuration Settings

When you add a File Upload field in the Addon Builder, you can configure the following inputs across different sections:

### General Settings

![Backend view of General settings for File Upload field](../../public/field-file-general.png)

- **Label:** The main heading shown above the file input. Used to identify the field in the cart and order details.
- **Description:** Additional helper text shown below the input. Useful for providing instructions (e.g. "Please upload a high-resolution PDF").

### Validation

![Backend view of Validation settings for File Upload field](../../public/field-file-validation.png)

- **Field is Required:** A checkbox toggle. When enabled, the customer is forced to select and attach a file before they are allowed to add the product to their cart.

### Restrictions

![Backend view of Restrictions settings for File Upload field](../../public/field-file-restrictions.png)

- **Allowed Types:** A comma-separated list of file extensions the customer is allowed to upload (e.g., `.jpg,.png,.pdf,.svg`). Files with unlisted extensions will be rejected on both the frontend and server.
- **Max File Size:** The maximum permitted file size in megabytes (**MB**). The default is `5`.

::: tip Allowed Types Format
List extensions with leading dots, comma-separated, with no spaces:
`.jpg,.jpeg,.png,.gif,.pdf,.ai,.eps,.svg`
:::

::: warning Server Limits Apply
Your PHP `upload_max_filesize` and `post_max_size` directives are the hard ceiling. Even if you set 50 MB in OptionBay, the server won't accept more than its PHP configuration allows. Check **Tools → Site Health → Info → Server** to verify your hosting limits.
:::

---

## Pricing Logic

![Backend view of Pricing settings for File Upload field](../../public/field-file-pricing.png)

Open the **Pricing** tab to apply a flat charge when the customer uploads a file. This is useful for artwork handling or setup fees.

**Available Inputs:**

- **Price Type:** (None, Flat Fee, Percentage, Math Formula).
- **Price Amount / Formula Expression:** The fee applied when a file is successfully attached to the field.

::: info Master the Pricing Engine
OptionBay includes five different pricing strategies, including dynamic math formulas. We've created a dedicated guide to explain all of them in detail.

**[Read the Ultimate Pricing Guide &rarr;](/pricing/index)**
:::

---

## Conditions

![Backend view of Conditions tab for File Upload field](../../public/field-file-conditions.png)

Open the **Conditions** tab to dynamically show or hide this upload field based on what the customer has selected in other fields.

**Available Inputs:**

- **Enable Conditional Logic:** Toggle to turn conditions on or off.
- **Action:** Choose whether to _Show_ or _Hide_ this field when conditions are met.
- **Match Type:** Choose _ALL_ (every rule must match) or _ANY_ (at least one rule must match).
- **Rules:** Define the specific field to watch, the comparison operator, and the value to check against.

_Example:_ Only show the "Upload Logo" field if the customer ticks a "Custom Print (+$10)" checkbox. When hidden, the field is excluded from validation, ensuring customers are not blocked by a hidden required field.

::: info Learn More About Conditions
Conditional logic lets you build dynamic, branching forms that adapt as the customer interacts. See the full list of operators and examples in our detailed guide.

**[Read the Field Conditions Reference &rarr;](/fields/conditions)**
:::

---

## Stock

![Backend view of Stock tab for File Upload field](../../public/field-file-stock.png)

File upload fields are not typically linked to inventory, but the setting is available if uploading a file consumes a production slot or machine quota.

Open the **Stock** tab to link the act of uploading a file to an inventory pool.

**Available Inputs:**

- **Enable Stock Management:** Toggle to activate inventory tracking.
- **Select Pool:** Choose which Global Stock Item to link this field to.
- **Reduction Mode:** Choose how stock is deducted (Per Item Quantity, Per Line Item, or Formula).

::: tip Global Stock Management
OptionBay lets you share stock pools across multiple options and products, complete with cart-reservation to prevent overselling.

**[Read the Guide: Linking Fields to Stock &rarr;](/stocks/field-linking)**
:::

---

## Example & Frontend Display

To see how this comes together, let's look at a common scenario: **Selling custom printed coffee mugs**. You want the customer to optionally upload their own artwork, and you charge a $5.00 setup fee if they do.

You would configure the File Upload field like this:

- **Label:** `Custom Artwork`
- **Allowed Types:** `.jpg,.png,.pdf`
- **Max File Size:** `10`
- **Pricing:** `Flat Fee`, Amount `5.00`

**Frontend Product Page View:**
With those settings, here is how the field renders on your product page. The allowed types and max size are clearly printed below the button to help the customer:

![File upload field on a product page: the native file input, filename shown after selection, and the allowed types + max size hint below](../../public/field-file-frontend.png)

When a customer attaches a file and adds the product to their cart, OptionBay validates the file extension and size securely via AJAX before passing it to the server.

**File Storage:**
Files are securely stored in the standard WordPress uploads directory:
`wp-content/uploads/YYYY/MM/filename.ext`
_(Note: OptionBay does not clutter your WordPress Media Library with these customer uploads. The raw URL is saved directly to the order metadata)._

**Cart & WooCommerce Order View:**
The field label and the file name will appear clearly on the cart page and checkout:

```
Custom Artwork:   my-company-logo.pdf
```

In the WooCommerce admin order screen, the full URL is stored so you can click through to download the file:

```
Custom Artwork:   https://yoursite.com/wp-content/uploads/2026/05/my-company-logo.pdf
```
