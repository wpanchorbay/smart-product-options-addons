# The Addon Builder

The **Addon Builder** is where you create and configure Option Groups — collections of custom fields that appear on your WooCommerce product pages. Open it by clicking **Add new group** on the [Option Groups list](/builder/option-groups), or by clicking an existing group's title to edit it.

![Full Addon Builder screen showing the title input, fields list, assignment rules panel, and the field-type sidebar on the right](../public/img/addon-builder-full.png)

---

## Builder Layout

The builder is divided into three main areas:

```
┌─────────────────────────────────────┬─────────────────┐
│  Group Title (text input)            │                 │
│─────────────────────────────────────│   Field Type    │
│  Assignment Rules (where to show)    │    Sidebar      │
│─────────────────────────────────────│                 │
│  Fields  (drag-and-drop list)        │  (add buttons)  │
│                                      │                 │
└─────────────────────────────────────┴─────────────────┘
```

| Area | Purpose |
|------|---------|
| **Group Title** | The internal name of this Option Group (never shown to customers) |
| **Assignment Rules** | Controls which products, categories, or tags this group appears on |
| **Fields list** | The drag-and-drop canvas where you add and configure fields |
| **Field Type Sidebar** | Buttons to add new fields of each type |

---

## Setting the Group Title

Type the group's name into the large title input at the top. This is an internal label for admin use only — it helps you identify the group in the list.

**Examples:** `Personalization Options`, `Engraving`, `Gift Wrapping`, `Material Choice`

::: warning
The group title is **required**. You cannot save without one.
:::

---

## Adding Fields

Click any field type button in the right sidebar to add a new field of that type to the bottom of the fields list. The available field types are:

### Choice Fields
| Type | Description |
|------|-------------|
| **Select Dropdown** | A native `<select>` dropdown — one choice from a list |
| **Radio Buttons** | Inline radio-button group — one choice, visually selectable |
| **Checkboxes** | Multi-select checkbox group |
| **Color Swatches** | Clickable color boxes that map to hex values |
| **Image Swatches** | Clickable thumbnail images as choices |

### Input Fields
| Type | Description |
|------|-------------|
| **Text Input** | Single-line free text |
| **Textarea** | Multi-line text area |
| **Number Input** | Numeric input with optional min/max/step constraints |
| **Email Input** | Email address with format validation |
| **File Upload** | Upload a file (configurable allowed types and max size) |

### Display
| Type | Description |
|------|-------------|
| **Static Content** | Output raw HTML — use for headings, dividers, or informational callouts |

You can also click **Add field** at the bottom of the fields list to add a default Text Input quickly.

---

## Reordering Fields

Drag the **handle** (⠿ grip icon) on the left of any field row to reorder it. The order in the builder is exactly the order they render on the product page.

![Dragging a field row to reorder within the fields list](../public/img/addon-builder-drag-reorder.png)

---

## Configuring a Field

Each field row is collapsed by default showing only its name and type. Click the row (or the expand ▾ arrow) to open its configuration panel.

![Expanded field row showing all configuration tabs: General, Pricing, Stock, Visibility](../public/img/addon-builder-field-expanded.png)

The configuration panel is organised into tabs:

### General Tab
Configure the basic display and validation properties of the field:

| Setting | Description |
|---------|-------------|
| **Label** | The visible label shown to the customer above the field |
| **Tooltip** | A `?` hover tooltip explaining what the field is for |
| **Placeholder** | Input placeholder text (text/number/email/textarea) |
| **Description** | Helper text shown below the field |
| **Required** | Whether the customer must fill this field before adding to cart |
| **Options** | *(Choice fields only)* The list of choices — each has a label, value, and optional price |

### Pricing Tab
Attach a price adjustment to the field or to individual choices:

| Setting | Description |
|---------|-------------|
| **Price Type** | `None`, `Flat Fee`, `Percentage`, `Character Count`, `Math Formula` |
| **Price Amount** | The numerical value for flat/percentage/character-count pricing |
| **Formula** | *(Formula pricing only)* Mathematical expression using placeholders like `[char_count]`, `[base_price]` |

See [Pricing Strategies](/pricing/index) for a full reference.

### Stock Tab
Link the field (or individual choices) to a Global Stock Item:

| Setting | Description |
|---------|-------------|
| **Enable Stock Management** | Toggle to link this field to a stock item |
| **Inventory Item** | Select from existing Global Stock Items or create a new one inline |
| **Reduction Mode** | `Per Item Quantity` (default), `Per Line Item`, or `Formula` |

See [Linking Options to Stock](/stocks/field-linking) for details.

### Visibility Tab
Define conditions that must be met for this field to be shown. For example: "Only show **Engraving Text** if the customer selected **Yes** for **Add Engraving**."

See [Conditional Visibility](/visibility/index) for a full guide.

---

## Deleting a Field

Click the **trash icon** (🗑) on the right side of any field row to remove it. This action is immediate but reversible until you save the group.

---

## Saving the Group

Click the **Save** button in the builder header, or use the native WooCommerce **Save changes** button. OptionBay validates all fields before saving:

- Checks for a non-empty title
- Validates that required field properties (like label, options) are filled
- Validates assignment rules

If validation fails, the first field with an error is automatically expanded and error messages appear inline. Toast notifications also list the first 3 errors for quick scanning.

::: tip Unsaved Changes
If you navigate away with unsaved changes, a browser confirmation dialog will warn you.
:::

---

## Publish vs. Draft

Use the **Status** control in the builder header to switch between:

- **Published (Active)** — The group is live and visible on product pages
- **Draft** — The group is saved but invisible to customers

You can also toggle status from the [Option Groups list](/builder/option-groups) without opening the builder.

---

## Duplicating a Group

From the [Option Groups list](/builder/option-groups), hover a row and click **Duplicate**. OptionBay creates a complete copy — same fields, same settings, same assignments — with "(Copy)" appended to the title. The duplicate starts in the same status (published/draft) as the original.
