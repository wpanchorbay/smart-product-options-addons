# Quick Start Guide

Get OptionBay working on your store in under 10 minutes. This guide walks from zero to a live product option on a product page.

---

## What You'll Build

By the end of this guide you'll have a custom option group attached to a product. Customers will see it on the product page, directly above the **Add to Cart** button, like this:

```
┌────────────────────────────────────────────────┐
│ 🖊 Personalization                             │
│                                                │
│ Engraving Text                                 │
│ [ Enter your message here...            ]      │
│                                                │
│ Gift Wrap?                                     │
│ ○ No   ● Yes (+$4.00)                          │
│                                                │
│                     [ Add to Cart ]            │
└────────────────────────────────────────────────┘
```

---

## Step 1 — Open the Addon Builder

In your WordPress admin, navigate to **WooCommerce → OptionBay → Addon Builder**.

You'll see the list of all your Option Groups. If this is a fresh install, OptionBay has already created a few example groups for you to reference.

Click **Create New Group** to start fresh.

---

## Step 2 — Name Your Group

Give your group a clear, descriptive name. This name is for admin reference only — it is never shown to customers on the product page.

**Example:** `Personalization Options`

Set the **Status** to **Active** (Published) so it appears on the frontend.

---

## Step 3 — Add Your Fields

Click **Add Field** and choose a field type from the panel:

| Field Type | Use Case |
|------------|----------|
| **Text Input** | Short custom text (names, messages) |
| **Textarea** | Longer custom text (instructions, notes) |
| **Select Dropdown** | Choose one from a list |
| **Radio Buttons** | Single-choice visual selector |
| **Checkboxes** | Multiple choice with optional pricing per choice |
| **Color Swatch** | Visual color picker |
| **Image Swatch** | Image-based choice selector |
| **File Upload** | Let customers upload a file |
| **Number Input** | Quantity or numeric inputs |
| **Email Input** | Validated email address field |
| **Static Content** | Display HTML content or an alert banner |

For this example, add a **Text Input** field:

1. Set the **Label** to `Engraving Text`
2. Set the **Placeholder** to `Enter your message (max 30 characters)`
3. Optionally, enable **Required** if the field must be filled

Then add a **Radio Buttons** field:

1. Set the **Label** to `Gift Wrap?`
2. Add two options:
   - `No` — Price: `none`
   - `Yes` — Price type: `Flat Fee`, Amount: `4.00`

---

## Step 4 — Assign the Group to Products

Switch to the **Assignments** tab inside the Addon Builder.

You can assign an Option Group to:

| Target | Description |
|--------|-------------|
| **Global** | Appears on **all** products |
| **Specific Products** | Only appears on the products you pick |
| **Categories** | Appears on all products in selected categories |
| **Tags** | Appears on all products with selected tags |

You can combine multiple rules. You can also create **Exclusion** rules to hide a group from specific products even if a broader rule would include them.

For this quick start, set a single assignment to a **Specific Product** and search for any product on your store.

---

## Step 5 — Save the Group

Click **Save** (or use the native WooCommerce **Save changes** button at the top of the page).

OptionBay saves:
- The field schema as JSON in post meta (`_ob_schema`)
- The assignment rules in the `wp_optionbay_assignments` database table

---

## Step 6 — View It on the Product Page

Navigate to the product page you assigned the group to in Step 4. You should see your fields rendered directly above the **Add to Cart** button.

::: tip Not showing up?
- Make sure the group's **Status** is **Active** (Published)
- Confirm the assignment is correctly set to the product you're viewing
- Clear any page caching if you use a caching plugin (WP Rocket, LiteSpeed Cache, etc.)
:::

---

## Step 7 — Test Adding to Cart

Fill in your custom options and click **Add to Cart**. Then open the cart — you'll see the selected options listed under the product name:

```
Handmade Ceramic Mug × 1
  Engraving Text:  "Happy Birthday!"
  Gift Wrap?:      Yes
```

The `+$4.00` gift wrap price is automatically added to the cart total.

---

## What's Next?

Now that you've got the basics working, explore more of what OptionBay can do:

- [Managing Option Groups](/builder/addon-builder) — Duplicate, reorder, bulk-activate groups
- [Pricing Strategies](/pricing/index) — Flat fees, percentages, character-count pricing, and math formulas
- [Conditional Visibility](/visibility/index) — Show or hide fields based on what the customer has selected
- [Smart Routing (Assignments)](/assignments/index) — Advanced include/exclude rules with priority ordering
- [Global Stock Management](/stocks/index) — Limit how many times a specific option can be ordered
