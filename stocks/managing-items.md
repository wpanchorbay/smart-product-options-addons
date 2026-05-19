# Managing Stock Items

This page covers creating, editing, and adjusting your Global Stock Items from the inventory modal and the Addon Builder.

---

## Opening the Inventory Manager

Go to **WooCommerce → OptionBay → Addon Builder** (the Option Groups list), then click **View Inventory** (📦) in the top toolbar.

![The inventory modal opened from the Option Groups list, showing the table and Add Item button](../public/img/inventory-modal-open.png)

---

## Creating a New Item

1. Click **Add Item** in the modal
2. Fill in the form:

| Field | Description |
|-------|-------------|
| **Name** | Internal name (e.g. `Gift Wrap Sheets`, `Laser Engraving Slots`) |
| **Stock Count** | The starting quantity (decimals are supported, e.g. `150.5`) |
| **Allow Backorders** | Toggle on to allow orders even when stock is 0 or negative |

3. Click **Save**

The new item appears in the table immediately.

---

## Editing an Item

Click the **Edit** (pencil ✏️) icon on any row to update that item's name, stock count, or backorder setting inline. Click **Save** to confirm changes.

::: tip Adjusting Stock After Refunds
If you manually process a refund outside WooCommerce's normal cancellation flow, remember to manually increment the stock count here — OptionBay only auto-restores on `woocommerce_order_status_cancelled` hook.
:::

---

## Deleting an Item

Click the **Delete** (🗑️) icon to remove a stock item. A confirmation prompt appears.

::: warning Removing Linked Items
Deleting a stock item does **not** automatically unlink it from fields. Any field still referencing the deleted item's ID will simply skip stock validation (the check will pass as if there is no stock restriction). Remove or update the field link manually in the Addon Builder.
:::

---

## Creating Items Inline from the Builder

Inside the **Addon Builder**, open any field's **Stock tab**. In the inventory search box:

1. Start typing a name
2. If no matching item exists, click **Create new "[name]"**
3. OptionBay creates the inventory item and links it immediately

![Stock tab inside the Addon Builder showing the inventory search input with a "Create new" option in the dropdown](../public/img/inventory-create-inline.png)

---

## Manually Adjusting Stock

The inventory modal lets you set the stock count to any number at any time. This is useful when:

- You receive new stock and want to top up the count
- You need to temporarily block orders (set count to `0` with backorders off)
- You want to reset stock at the start of a new production period

Simply click **Edit** on the item and change the **Stock Count** value.

---

## Viewing Current Stock Levels

The table in the inventory modal always shows the **live** current count — this is the real database value, accounting for all orders that have already been placed and fulfilled.

The count shown does **not** account for items currently reserved in customers' open carts (that deduction only happens at checkout). For a view of what's effectively available right now including active carts, use the debug log after enabling **Debug Mode** in Settings.
