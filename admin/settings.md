# Global Settings

Manage site-wide display preferences for OptionBay under **WooCommerce → OptionBay → Settings**.

![OptionBay Settings page showing General Settings and System & Maintenance sections](../public/img/settings-page.png)

Settings are saved by clicking the native WooCommerce **Save changes** button at the top of the page.

---

## General Settings

These settings control the visual appearance of all option groups across your store.

### Options Orientation

Controls how radio button and checkbox groups are laid out within an option group.

| Value | Description |
|-------|-------------|
| `Vertical` *(default)* | Choices stack on top of each other |
| `Horizontal` | Choices sit side-by-side in a row |

### Label Font Size

Sets the CSS font size for all field **labels** on product pages.

- Default: `inherit` (uses your theme's font size)
- Examples: `14px`, `1rem`, `0.875em`

### Input Font Size

Sets the CSS font size for all **inputs and choice labels** on product pages.

- Default: `inherit`
- Examples: `14px`, `1rem`

### Color Swatch Size

Width and height of **color swatch** buttons.

- Default: `32px`
- Examples: `40px`, `2.5rem`

### Image Swatch Size

Width and height of **image swatch** thumbnails.

- Default: `64px`
- Examples: `80px`, `5rem`

### Color Swatch Roundness

`border-radius` applied to color swatch buttons, controlling how round the corners are.

- Default: `4px`
- `0` = perfectly square
- `50%` = fully circular

### Image Swatch Roundness

`border-radius` applied to image swatch thumbnails.

- Default: `4px`
- `0` = perfectly square
- `50%` = fully circular

::: tip CSS Values
All size and font settings accept any valid CSS unit — `px`, `rem`, `em`, `%`, `inherit`. You don't need to include quotes.
:::

---

## System & Maintenance

### Debug Mode

When enabled, OptionBay writes detailed diagnostic logs to the WordPress database. Useful when troubleshooting unexpected behavior.

- **Default:** Disabled
- Logs include pricing calculations, field validation steps, stock reservation events, and REST API request traces.

::: warning Performance Impact
Keep Debug Mode disabled in production. Logging every request adds unnecessary database writes on high-traffic stores.
:::

### Delete Data on Uninstall

When enabled, **all OptionBay data is permanently erased** from the database when the plugin is deleted via **Plugins → Delete**.

Data that is deleted includes:
- All Option Groups (CPT posts and meta)
- All assignment rules (`wp_optionbay_assignments` table)
- All Global Stock Items (`wp_optionbay_inventory` table)
- All plugin settings (WordPress option)

**Default:** Disabled (your data is preserved when you delete the plugin).

::: danger Irreversible
There is no undo. Before enabling this setting, [export your data](/admin/export-import) as a backup.
:::
