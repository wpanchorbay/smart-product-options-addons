# Managing Option Groups

The **Option Groups** list is the main dashboard for OptionBay. Navigate here via **WooCommerce → OptionBay → Addon Builder**.

![The Option Groups list screen showing the table, status filters, search bar, and action buttons](../public/img/option-groups-list.png)

---

## The List Table

Each row in the table represents one Option Group. The columns are:

| Column | Description |
|--------|-------------|
| **Title** | The internal name of the group. Click to open it in the Addon Builder. |
| **Fields** | Number of fields (inputs, swatches, etc.) inside the group. |
| **Assigned To** | Where the group is routed — e.g. "All Products", "3 categories", "2 products". |
| **Status** | A live toggle — flip between **Published** and **Draft** in one click. |

You can show or hide additional columns (Created By, Created At, Updated By, Updated At) using the **column picker** icon (⋮) at the top-right of the table.

![Column picker popover open, showing the list of toggleable columns](../public/img/option-groups-columns.png)

---

## Status Filters

Above the table you'll find quick filter tabs:

- **All** — Shows both Published and Draft groups
- **Published** — Active groups currently showing on product pages
- **Draft** — Inactive groups, not visible to customers
- **Trash** — Deleted groups awaiting permanent deletion (only shown when trash is non-empty)

Click any tab to filter the list instantly.

---

## Searching Groups

Use the **search box** in the top-right to find groups by name. Press **Enter** or click **Search groups** to run the search.

---

## Row Actions

Hover over any row to reveal inline actions:

| Action | Description |
|--------|-------------|
| **Edit** | Open the group in the Addon Builder |
| **Duplicate** | Create an exact copy of the group (same fields, same assignments) with the title suffix "(Copy)" |
| **Move to Trash** | Soft-delete the group (customers can no longer see it; restore it any time) |
| **Restore** | *(Trash view only)* Move the group back to its previous status |
| **Delete Permanently** | *(Trash view only)* Erase the group and all its assignment rules from the database |

::: info Status Toggle
The **Status** column contains a live toggle switch. Flipping it immediately publishes or drafts the group — no page reload required.
:::

---

## Bulk Actions

To perform an action on multiple groups at once:

1. Check the boxes next to the groups you want to select (or use the header checkbox to **Select All**)
2. Choose an action from the **Bulk actions** dropdown:
   - **Publish** — Activate all selected groups
   - **Draft** — Deactivate all selected groups
   - **Move to Trash** — Soft-delete all selected groups
3. Click **Apply**

A confirmation dialog will appear before any destructive action.

![Bulk action confirmation modal asking to confirm moving 3 groups to trash](../public/img/option-groups-bulk-confirm.png)

---

## Pagination

Results are paginated at 20 groups per page. Use the **← Previous** and **Next →** buttons to navigate. The current page and total are displayed between the buttons.

---

## View Inventory

Click the **View Inventory** button (📦 icon) to open the **Global Stock Inventory** modal directly from the list page. See [Global Stocks Overview](/stocks/index) for details on managing inventory items.

---

## Import & Export

Click **Import** or **Export** at the top of the page to expand the respective panel inline.

- **Export** — Downloads a `.json` file containing your Option Groups, Inventory Items, and/or Settings. Useful for backups or migrating between sites.
- **Import** — Paste or upload a previously exported JSON file to restore or migrate your data.

See [Export & Import](/admin/export-import) for full instructions.
