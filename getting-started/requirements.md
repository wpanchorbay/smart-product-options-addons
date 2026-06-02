# System Requirements

Before installing Smart Product Options and Addons, make sure your hosting environment meets the following minimum requirements. Meeting the recommended specifications will ensure the best performance and compatibility.

---

## Server Requirements

Your web server must meet these software version requirements:

- **PHP:** Version 7.0 minimum (8.1 or higher recommended).
- **MySQL:** Version 5.6 minimum (8.0 or higher recommended).
- **WordPress:** Version 5.8 minimum (latest stable release recommended).
- **WooCommerce:** Version 6.1 minimum (latest stable release recommended).

::: warning WooCommerce is Required
Smart Product Options and Addons is a WooCommerce extension. It **will not activate** without WooCommerce installed and active. Make sure WooCommerce is set up and working before you install Smart Product Options and Addons.
:::

---

## WordPress Environment

The following WordPress and PHP configuration values should be checked in your hosting environment:

- **WordPress Memory Limit:** 128 MB minimum (256 MB recommended). You can check this under **WordPress Admin → Tools → Site Health → Info → Server**.
- **Max Execution Time:** 60 seconds or higher. This is needed for bulk operations like import/export and large batch saves.
- **File Uploads:** Must be enabled (`file_uploads = On` in `php.ini`) if you plan to use the [File Upload](/fields/advanced/file-upload) field type.
- **REST API:** The WordPress REST API must be accessible and not blocked by security plugins or `.htaccess` rules. Smart Product Options and Addons's admin dashboard depends entirely on REST endpoints for all data operations.

::: tip Checking Your Server Info
You can find your PHP version, memory limit, max execution time, and all other server details under **WordPress Admin → Tools → Site Health → Info → Server**.
:::

---

## PHP Extensions

The following PHP extensions must be present on your server. Most hosting environments include these by default:

- **`mbstring`** *(Required)* — Used for accurate character counting in pricing formulas (e.g., per-character pricing for engraving fields).
- **`json`** *(Required)* — Used for encoding and decoding option schemas, field data, and API responses.
- **`pdo_mysql` / `mysqli`** *(Required)* — Used for all database operations (storing groups, assignments, inventory).
- **`fileinfo`** *(Recommended)* — Used for MIME type detection when customers upload files via the File Upload field. Without this extension, Smart Product Options and Addons falls back to extension-based validation only.

---

## Browser Support (Admin UI)

The Smart Product Options and Addons admin dashboard is a React single-page application built with modern JavaScript. It requires a **modern browser** to function:

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

::: warning
Internet Explorer is **not supported** in any version. The admin dashboard will not load or function correctly in IE.
:::

---

## Hosting Compatibility

Smart Product Options and Addons works on all standard WordPress hosting environments, including:

- **Shared Hosting** — cPanel, Plesk, and similar control panels.
- **Managed WordPress Hosting** — Kinsta, WP Engine, Cloudways, Flywheel, SiteGround.
- **VPS / Dedicated Servers** — Any server running Apache or Nginx with PHP and MySQL.
- **Local Development** — LocalWP, XAMPP, MAMP, Laravel Valet, and Docker-based setups.

::: info Multisite
Smart Product Options and Addons has not been tested on WordPress Multisite (Network) installations. It is designed and supported for **single-site installations only**. If you run a Multisite network, use at your own discretion.
:::
