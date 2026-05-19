# Installation

This guide walks you through installing OptionBay on your WordPress site.

## Prerequisites

Before you begin, confirm:

- ✅ WordPress **5.8+** is installed
- ✅ WooCommerce **6.1+** is installed and active
- ✅ PHP **7.0+** is running on your server
- ✅ You have **Administrator** access to the WordPress dashboard

::: tip Not sure about your environment?
Check the [System Requirements](/getting-started/requirements) page first.
:::

---

## Installing from ZIP

### Step 1 — Download the Plugin

Download the `optionbay.zip` file from your purchase confirmation email or your account area on [wpanchorbay.com](https://wpanchorbay.com).

### Step 2 — Upload the Plugin

1. In your WordPress admin, go to **Plugins → Add New Plugin**
2. Click **Upload Plugin** at the top of the page
3. Click **Choose File** and select the `optionbay.zip` you downloaded
4. Click **Install Now**

![Upload plugin screen](../public/img/install-upload.png)

### Step 3 — Activate the Plugin

After the installation completes, click **Activate Plugin**.

WordPress will run OptionBay's activation routine, which:
- Creates two custom database tables (`wp_optionbay_assignments`, `wp_optionbay_inventory`)
- Saves the default plugin settings
- Loads a set of example addon groups so you have something to explore immediately
- Schedules background cron tasks
- Adds the `manage_optionbay` capability to the Administrator role

::: info Demo Data on First Activation
On your first activation, OptionBay automatically imports a small set of example Option Groups from `assets/preloads/preloads.json`. These are assigned globally to all products so you can instantly see the plugin in action on any product page. You can delete or modify them freely.
:::

---

## After Activation

Once activated, OptionBay adds a new submenu under **WooCommerce** in your WordPress admin sidebar:

```
WooCommerce
├── Orders
├── Products
├── ...
└── OptionBay          ← New
    ├── Addon Builder
    ├── Global Stocks
    └── Settings
```

Navigate to **WooCommerce → OptionBay → Addon Builder** to start building your first option group.

---

## Updating the Plugin

When a new version of OptionBay is available:

1. Download the new ZIP from [wpanchorbay.com](https://wpanchorbay.com)
2. Go to **Plugins → Add New Plugin → Upload Plugin**
3. Upload the new ZIP — WordPress will detect the existing version and ask you to **Replace current with uploaded**
4. Click **Replace** and the plugin will update in place

Database tables are automatically migrated using `dbDelta()` — your data is safe during updates.

---

## Uninstalling the Plugin

To remove OptionBay completely:

1. Go to **Plugins → Installed Plugins**
2. Click **Deactivate** next to OptionBay
3. Click **Delete**

::: warning Data Deletion on Uninstall
By default, OptionBay **preserves your data** when the plugin is deleted (option groups, settings, inventory). If you want all data to be permanently deleted on uninstall, enable **Delete Data on Uninstall** in **WooCommerce → OptionBay → Settings** before deleting the plugin.
:::
