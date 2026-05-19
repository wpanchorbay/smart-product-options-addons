# Installation

This guide walks you through installing OptionBay on your WordPress site, from downloading the plugin to seeing it live in your admin menu.

---

## Prerequisites

Before you begin, confirm that your environment meets these requirements:

- ✅ **WordPress 5.8+** is installed and running.
- ✅ **WooCommerce 6.1+** is installed and **active**.
- ✅ **PHP 7.0+** is running on your server.
- ✅ You have **Administrator** access to the WordPress dashboard.

::: tip Not sure about your environment?
Check the [System Requirements](/getting-started/requirements) page for a full breakdown of server, PHP extension, and browser requirements.
:::

---

## Installing from ZIP

### Step 1 — Download the Plugin

Download the `optionbay.zip` file from your purchase confirmation email or your account area on [wpanchorbay.com](https://wpanchorbay.com).

### Step 2 — Upload the Plugin

1. In your WordPress admin, go to **Plugins → Add New Plugin**.
2. Click the **Upload Plugin** button at the top of the page.
3. Click **Choose File** and select the `optionbay.zip` you downloaded.
4. Click **Install Now** and wait for the upload to complete.

![WordPress admin Upload Plugin screen showing the Choose File button and Install Now button](../public/img/install-upload.png)

### Step 3 — Activate the Plugin

After the installation completes, click **Activate Plugin**. WordPress will run OptionBay's activation routine, which performs the following setup automatically:

- **Database Tables:** Creates two custom tables — `wp_optionbay_assignments` (for assignment rules) and `wp_optionbay_inventory` (for global stock pools).
- **Default Settings:** Saves the initial plugin configuration so all settings have safe defaults.
- **Demo Data:** Imports a small set of example Option Groups from `assets/preloads/preloads.json`, assigned globally to all products. This lets you explore the plugin immediately on any product page.
- **Background Tasks:** Schedules WordPress cron tasks for background processing.
- **Capabilities:** Adds the `manage_optionbay` capability to the Administrator role.

::: info Demo Data on First Activation
The example Option Groups imported on first activation are fully editable. Feel free to modify, duplicate, or delete them as you learn the system. They are assigned globally so you can see them on any product page right away.
:::

---

## After Activation

Once activated, OptionBay adds a new submenu under **WooCommerce** in your WordPress admin sidebar:

- **WooCommerce → OptionBay → Addon Builder** — The main dashboard where you create and manage your [Option Groups](/builder/option-groups).
- **WooCommerce → OptionBay → Global Stocks** — Manage shared [inventory pools](/stocks/index) that can be linked to any option.
- **WooCommerce → OptionBay → Settings** — Configure plugin-wide preferences like display position, cart behavior, and data deletion.

Navigate to **WooCommerce → OptionBay → Addon Builder** to start building your first option group, or follow the [Quick Start Guide](/getting-started/quick-start) for a step-by-step walkthrough.

---

## Updating the Plugin

When a new version of OptionBay is available:

1. Download the new `.zip` file from [wpanchorbay.com](https://wpanchorbay.com).
2. Go to **Plugins → Add New Plugin → Upload Plugin**.
3. Upload the new ZIP — WordPress will detect the existing version and present a **Replace current with uploaded** prompt.
4. Click **Replace** and the plugin will update in place.

Your data is safe during updates — database tables are automatically migrated using WordPress's `dbDelta()` function, which only applies structural changes without touching your existing rows.

::: tip Backup Before Updating
While OptionBay's update process is safe, it's always good practice to create a full site backup before updating any plugin. Use your hosting provider's backup tool or a plugin like UpdraftPlus.
:::

---

## Uninstalling the Plugin

To remove OptionBay completely from your site:

1. Go to **Plugins → Installed Plugins**.
2. Click **Deactivate** next to OptionBay.
3. Click **Delete** to remove the plugin files.

::: warning Data Deletion on Uninstall
By default, OptionBay **preserves all your data** when the plugin is deleted — option groups, settings, inventory items, and database tables remain intact so you can reinstall later without losing anything.

If you want all data to be **permanently erased** on uninstall, navigate to **WooCommerce → OptionBay → Settings** and enable the **"Delete Data on Uninstall"** option **before** deleting the plugin.
:::
