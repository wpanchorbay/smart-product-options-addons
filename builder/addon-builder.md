# The Addon Builder

The **Addon Builder** is the visual editor where you create and configure Option Groups — collections of custom fields that appear on your WooCommerce product pages. Open it by clicking **Add new group** on the [Option Groups list](/builder/option-groups), or by clicking an existing group's title to edit it.

![Full Addon Builder screen showing the title input, fields list, assignment rules panel, and the field-type sidebar on the right](/public/addon-builder-full.png)

---

## Builder Layout Overview

The Addon Builder is divided into distinct areas, each serving a specific purpose. Understanding the layout will help you navigate the builder efficiently.

![Full Addon Builder screen annotated](/public/addon-builder-full.png)

- **Header Bar** _(top):_ Contains the "Back to List" navigation link, the Publish/Draft status toggle, and the Save button.
- **Group Title** _(below header):_ A large text input where you name your Option Group.
- **Assignment Rules** _(below title):_ Controls which products, categories, or tags this group appears on.
- **Fields List** _(main canvas):_ The drag-and-drop area where your individual fields live. This is where you spend most of your time.
- **Add Fields Sidebar** _(right column):_ A sticky panel with buttons for every available field type. Click any button to instantly add that field to the canvas.

::: tip Mobile-Friendly FAB
On smaller screens where the sidebar scrolls out of view, OptionBay displays a **floating action button** (blue circle with a `+` icon) in the bottom-right corner. Tapping it opens a popover with the same field-type grid, so you can always add new fields no matter where you are on the page.
:::

---

## Header Bar

![The Addon Builder header bar showing the Back to List link, status toggle, and Save button](/public/addon-builder-header.png)

The header bar is always visible at the top of the builder and contains three key controls:

- **Back to List:** An arrow link that navigates you back to the [Option Groups list](/builder/option-groups). If you have unsaved changes, the browser will show a confirmation dialog before leaving.
- **Status Toggle:** A visual switch to control the group's live status:
  - _Published (Active):_ The group is live and visible on product pages.
  - _Draft:_ The group is saved but invisible to customers.
  - When editing an existing group, toggling the status updates it immediately via the API — you don't need to click Save separately for status changes.
- **Save / Update Button:** Click to validate and save the entire group configuration. The button label changes depending on context:
  - _Create Group:_ When building a new group.
  - _Update Group:_ When editing an existing group.
  - _Saving…:_ While the save request is in progress (button is disabled).

---

## Setting the Group Title

![The Group Title input field with a descriptive name typed in](/public/addon-builder-title.png)

Type the group's name into the large title input at the top. This is an **internal label for admin use only** — it is never shown to customers on the product page.

- Use a descriptive name that helps you quickly identify the group at a glance (e.g., `Personalisation Options`, `Engraving`, `Gift Wrapping`, `Material Choice`).
- The title is displayed in the [Option Groups list](/builder/option-groups) and in the builder header.

::: warning
The group title is **required**. You cannot save without one. If you try to save with an empty title, an inline error message will appear.
:::

---

## Assignment Rules

![The Assignment Rules section showing Visibility, Reach, and Exceptions](/public/addon-builder-assignment-rules.png)

The Assignment Rules panel controls **where** this option group appears on your store. It is organized into three logical sections:

### Visibility

- **Apply to all products** _(Global):_ The group appears on every single product in your store. This is the default.
- **Apply to specific products, categories, or tags** _(Targeted):_ The group only appears on the products you explicitly specify. Selecting this option reveals the **Reach** section below.

### Reach _(Targeted mode only)_

When you choose "Targeted" visibility, the Reach section appears with three searchable multi-select fields:

- **Products:** Search and select specific WooCommerce products by name.
- **Categories:** Search and select product categories.
- **Tags:** Search and select product tags.

You can combine all three — for example, assign a group to the "T-Shirts" category _and_ two specific individual products. The group appears on any product that matches at least one of your selections.

### Exceptions

Exceptions are always available, regardless of whether you chose Global or Targeted visibility. Use the same three search fields (Products, Categories, Tags) to **exclude** specific items.

_Example:_ Apply a "Personalisation" group globally, but exclude the "Gift Cards" category — since gift cards can't be physically engraved.

::: info Learn More About Assignments
We've created a dedicated guide with advanced examples, edge cases, and troubleshooting tips for assignment rules.

**[Read the Assignment Rules Guide &rarr;](/assignments/)**
:::

---

## Add Fields Sidebar

![The Add Fields sidebar showing the 2-column grid of field type buttons](/public/addon-builder-sidebar.png)

The right-hand sidebar contains a **2-column grid** of buttons — one for every field type OptionBay supports. Click any button to instantly add a new field of that type to the bottom of the Fields List.

**Choice Fields:**

- [**Dropdown**](/fields/choice/select) — A native `<select>` dropdown for single selection from a list.
- [**Radio Buttons**](/fields/choice/radio) — Inline radio buttons for a single, visually selectable choice.
- [**Checkboxes**](/fields/choice/checkboxes) — Multi-select checkbox group for picking multiple options.
- [**Checkbox (Single)**](/fields/choice/checkbox) — A standalone toggle for yes/no decisions (e.g. "Add Gift Wrapping?").
- [**Color Swatch**](/fields/choice/color-swatch) — Clickable color circles/boxes that map to hex values.
- [**Image Swatch**](/fields/choice/image-swatch) — Clickable thumbnail images as choices.

**Input Fields:**

- [**Text Input**](/fields/input/text) — Single-line free text for names, monograms, short messages.
- [**Textarea**](/fields/input/textarea) — Multi-line text area for longer messages or notes.
- [**Number**](/fields/input/number) — Numeric-only input with optional min/max/step constraints.
- [**Email**](/fields/input/email) — Email address input with built-in format validation.
- [**File Upload**](/fields/advanced/file-upload) — Attach a file (artwork, design brief, photo) with configurable allowed types and size limits.

**Display:**

- [**Static Content**](/fields/static) — Output raw HTML for headings, notices, dividers, or informational callouts.

---

## The Fields List

The Fields List is the main working area of the builder. Every field you add appears here as a collapsible card (called a "Field Row").

### Collapsed View (Default)

![Multiple field rows in their default collapsed state](/public/addon-builder-field-collapsed.png)

Each collapsed field row shows:

- **Drag Handle (⠿):** The grip icon on the far left. Click and hold to drag this field to a new position.
- **Field Icon:** A small icon representing the field type (e.g., a palette icon for Color Swatch, a hash for Number).
- **Field Label:** The label text you configured for this field (or a placeholder if no label has been set yet).
- **Type Badge:** A subtle tag indicating the field type (e.g., "Text Input", "Dropdown").
- **Expand/Collapse Chevron (▾):** Click to open the full configuration panel.
- **Delete Button (🗑):** Click the trash icon to remove this field from the group.

::: tip Reordering Fields
The order of the fields in the builder is **exactly** the order they appear on the product page. Drag and drop to rearrange them until the layout feels right.

![Dragging a field row to reorder within the fields list](/public/addon-builder-drag-reorder.png)
:::

### Expanded View (Configuration)

![An expanded field row showing all configuration tabs](/public/addon-builder-field-expanded.png)

Click on any field row (or its chevron) to expand its full configuration panel. The panel is organized into tabs. The exact tabs available depend on the field type, but the common structure is:

- **General:** Core display settings — Label, Description, Placeholder, Options (for choice fields), Layout, and Validation (Required, Min/Max Length, etc.).
- **Pricing:** Attach a price adjustment (Flat Fee, Percentage, Per Character, or Math Formula). For choice fields, pricing is configured per-option inside the General tab instead. [Read the Pricing Guide &rarr;](/pricing/index)
- **Stock:** Link this field (or individual choices) to a Global Stock Item with a reduction mode. [Read the Stock Guide &rarr;](/stocks/field-linking)
- **Conditions:** Define rules to dynamically show or hide this field based on other field values. [Read the Conditions Guide &rarr;](/fields/conditions)

::: info Detailed Field Documentation
Each field type has its own dedicated documentation page explaining every input, restriction, and configuration option in detail. Click any field type link in the [Add Fields Sidebar](#add-fields-sidebar) section above to jump to its full reference.
:::

---

## Deleting a Field

Click the **trash icon** (🗑) on the right side of any collapsed field row to remove it. The field disappears from the list immediately, but the deletion is **not permanent until you save** the group. If you accidentally delete a field, simply navigate away without saving (the browser will prompt you) and re-open the builder to restore the previous state.

---

## Saving & Validation

Click the **Save** / **Update Group** button in the header bar to persist all changes. Before saving, OptionBay runs a comprehensive validation pass:

- **Group Title** must not be empty.
- **Assignment Rules** must have at least one target (when in Targeted mode).
- **Field Labels** must not be empty for fields that require them.
- **Choice Options** (for Select, Radio, Checkboxes, Swatches) must have at least one option defined.

If validation fails:

- The first field with an error is **automatically expanded** so you can see the problem.
- Inline error messages appear directly below the problematic input.
- A toast notification at the top lists up to 3 errors for quick scanning.

::: tip Unsaved Changes
If you navigate away with unsaved changes, a browser confirmation dialog will warn you before leaving the page.
:::

---

## Duplicating a Group

You don't need to rebuild common configurations from scratch. From the [Option Groups list](/builder/option-groups), hover over any group row and click **Duplicate**.

OptionBay creates a complete copy — same fields, same settings, same assignment rules — with "(Copy)" appended to the title. The duplicate starts in the same status (Published/Draft) as the original.

This is especially useful when you want to create similar option sets for different product categories with minor tweaks.
