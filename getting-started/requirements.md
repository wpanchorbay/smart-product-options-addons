# System Requirements

Before installing OptionBay, make sure your hosting environment meets the following requirements.

## Server Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| **PHP** | 7.0 | 8.1 or higher |
| **MySQL** | 5.6 | 8.0 or higher |
| **WordPress** | 5.8 | Latest stable |
| **WooCommerce** | 6.1 | Latest stable |

::: warning WooCommerce is Required
OptionBay is a WooCommerce extension. It **will not activate** without WooCommerce installed and active. Make sure WooCommerce is set up and working before you install OptionBay.
:::

## WordPress Environment

- **WordPress Memory Limit:** 128 MB minimum (256 MB recommended)
- **Max Execution Time:** 60 seconds or higher (needed for bulk operations)
- **File Uploads:** Must be enabled if you use the File Upload field type
- **REST API:** The WordPress REST API must be accessible. OptionBay's admin dashboard depends entirely on it.

::: tip Checking Your PHP Version
You can find your PHP version under **WordPress Admin → Tools → Site Health → Info → Server**.
:::

## PHP Extensions

The following PHP extensions are required or recommended:

| Extension | Status | Why |
|-----------|--------|-----|
| `mbstring` | Required | Character counting for pricing formulas |
| `json` | Required | Schema and option data storage |
| `pdo_mysql` / `mysqli` | Required | Database operations |
| `fileinfo` | Recommended | MIME type detection for file uploads |

## Browser Support (Admin UI)

The OptionBay admin dashboard is a React single-page application and requires a **modern browser**:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Internet Explorer is **not supported**.

## Hosting Compatibility

OptionBay works on all standard WordPress hosting environments including:

- Shared Hosting (cPanel, Plesk)
- Managed WordPress Hosting (Kinsta, WP Engine, Cloudways)
- VPS / Dedicated Servers
- Local development environments (LocalWP, XAMPP, MAMP)

::: note Multisite
OptionBay has not been tested on WordPress Multisite (Network) installations. Single-site installations only.
:::
