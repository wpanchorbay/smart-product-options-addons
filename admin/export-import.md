# Export & Import

OptionBay can export your configuration to a JSON file and import it back — useful for backups, staging-to-production migrations, or sharing configurations between sites.

Access Export & Import from the **Import** and **Export** buttons at the top of the [Option Groups list](/builder/option-groups) page.

![The Export panel expanded inline on the Option Groups page, showing entity checkboxes and a Download JSON button](../public/img/export-panel.png)

---

## Exporting Data

### What Can Be Exported

You can export any combination of:

| Entity | What it includes |
|--------|-----------------|
| **Option Groups** | All groups (title, status, field schema, assignment rules) |
| **Inventory Items** | All Global Stock Items (name, stock count, backorder setting) |
| **Settings** | Plugin settings (orientation, font sizes, swatch sizes, etc.) |

### How to Export

1. Click **Export** at the top of the Option Groups list
2. Check the entities you want to include
3. Click **Download JSON**

A `.json` file will be downloaded to your computer. The filename includes the current date (e.g. `optionbay-export-2026-05-19.json`).

### Export Format

The export file is a structured JSON document:

```json
{
  "groups": [
    {
      "title": "Personalisation Options",
      "status": "publish",
      "schema": [ ... ],
      "assignments": [ ... ]
    }
  ],
  "inventory": [
    {
      "name": "Engraving Slots",
      "stock_count": "150.0000",
      "allow_backorders": 0
    }
  ],
  "settings": {
    "global_optionsOrientation": "vertical",
    "global_swatchSize": "32px"
  }
}
```

---

## Importing Data

### How to Import

1. Click **Import** at the top of the Option Groups list
2. Either:
   - Paste your JSON directly into the text area, **or**
   - Use the file picker to select your `.json` export file
3. Click **Import**

![The Import panel with a textarea for pasting JSON and a file upload button](../public/img/import-panel.png)

### What Happens During Import

- **Option Groups** are created as new posts. Existing groups with the same title are **not** overwritten — the import always creates new entries.
- **Inventory Items** are created as new rows in the `wp_optionbay_inventory` table.
- **Settings** are merged into the existing settings — only keys present in the import file are updated; other settings are left unchanged.

::: warning Import Creates Duplicates
If you import a file that was previously imported, you will end up with duplicate groups and inventory items. Review the Option Groups list after importing and delete any unwanted duplicates.
:::

---

## Migration Workflow (Staging → Production)

A typical workflow to safely move your OptionBay configuration from a staging site to production:

1. On the **staging** site, build and test your Option Groups
2. Export **Option Groups + Inventory + Settings** from staging
3. On the **production** site, click **Import** and upload the file
4. Verify the groups appear correctly on the production Option Groups list
5. Test on a product page to confirm options display and pricing works

::: tip Export Often
Export your configuration after any significant change, not just before migrations. Treat exports as lightweight version snapshots.
:::
