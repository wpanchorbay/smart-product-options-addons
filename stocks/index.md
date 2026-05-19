# Global Stock Management

The **Global Stock** system lets you track and limit inventory for shared resources that are consumed when customers select specific options — independently of WooCommerce's product stock.

**Example use cases:**
- Limit how many orders can include gift wrapping (shared gift wrap paper inventory)
- Cap the number of engraving slots available per week
- Limit a premium add-on service to a fixed number of customers

---

## How It Works

Instead of tracking stock per product, Global Stock Items are **shared pools** that any option (across any product) can draw from.

When a customer selects an option linked to a stock item:
1. The stock item's available quantity is **reserved in real time** while the item sits in their cart
2. On order completion, the stock is **permanently deducted** from the item's count
3. If an order is **cancelled**, the deducted stock is automatically **restored**

---

## The Inventory Modal

Access the inventory manager from the **Option Groups** list page by clicking **View Inventory** (📦 icon).

![The View Inventory modal showing a table of stock items with name, stock count, backorders toggle, and edit/delete actions](../public/img/inventory-modal.png)

The modal shows all your Global Stock Items with:

| Column | Description |
|--------|-------------|
| **Name** | The inventory item name |
| **Stock Count** | Current available stock (can be decimal, e.g. `150.5000`) |
| **Allow Backorders** | Whether orders are allowed when stock reaches 0 |
| **Actions** | Edit name/count or delete the item |

---

## Creating a Stock Item

Click **Add Item** in the inventory modal to create a new stock pool.

| Setting | Description |
|---------|-------------|
| **Name** | A descriptive internal name (e.g. "Gift Wrap Sheets", "Engraving Slots") |
| **Stock Count** | Starting inventory level |
| **Allow Backorders** | If enabled, orders proceed even when stock reaches 0 or goes negative |

::: tip Creating Items Inline
You can also create new inventory items directly inside the **Stock tab** of any field in the Addon Builder without opening the inventory modal — type a new name in the search box and click **Create new**.
:::

---

## Stock Depletion Lifecycle

```
Customer adds product → Stock reserved in cart
         │
         ▼
Customer completes checkout → Stock permanently deducted
         │
         ▼
If order cancelled → Stock automatically restored
```

**Cart-Reserved Stock:** OptionBay checks how much stock is already sitting in other customers' carts (reserved but not yet purchased) and subtracts that from the available count when determining if a new customer can add the option. This prevents overselling even before checkout.

---

## Stock Display on the Product Page

If a stock item's count falls low, the frontend JavaScript engine reads the current stock from `window.optionBaySchema` (hydrated by PHP on page load) and can show out-of-stock states on options.

When a linked option is out of stock and backorders are disabled:
- The choice is greyed out or disabled
- A "Out of stock" label appears next to the option
- The customer cannot select it
