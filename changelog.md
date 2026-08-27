# Changelog

All notable changes to the Smart Product Options and Addons plugin will be documented in this file.

## [1.0.2] - 2026-08-11

_Free plugin `1.0.2`, Pro add-on `1.0.1`._

### Fixed

- **Category & Tag assignment rules** now correctly display and validate. Groups targeted at a product category or tag previously did not appear on matching products.
- **Exclusion ("Exclude") assignment rules** are now saved and applied. An exclusion always takes precedence over an inclusion for the same group, regardless of priority.
- **Conditional logic now cascades on the server.** When a field you are watching is itself hidden, its value is treated as empty — a hidden trigger field can no longer be used to reveal a field further down the chain.
- **File uploads** now validate the file's real content type against the field's allowed types, so a file renamed to a permitted extension is rejected. Files are validated on the standard add-to-cart submission (not via AJAX).
- **Dynamic pricing** (Character Count and Math Formula) is now fully wired into the pricing engine and selectable in the builder.

### Security

- Export/Import REST endpoints now verify the request nonce, matching the rest of the API.
- Imported option groups and settings are now sanitized against the same rules as the admin UI.
- Uninstalling the Pro add-on no longer removes the free plugin's data; it only clears the Pro license.

## [1.0.0] - 2026-05-20

### Added
- Initial release of Smart Product Options and Addons.
- Comprehensive Addon Builder with drag-and-drop interface.
- 13 Field types including Swatches, File Uploads, and Choice fields.
- 4 Pricing strategies: Flat fee, Percentage, Character Count, and dynamic Math Formulas.
- Global Stock Management with direct option linking.
- Smart Routing (Assignment Rules) for targeting specific products, categories, or tags.
- Conditional logic for showing/hiding fields dynamically.
- Export and Import functionality for migrating settings.
