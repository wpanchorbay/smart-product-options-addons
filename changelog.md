# Changelog

All notable changes to the OptionBay plugin will be documented in this file.

## [1.0.3] - 2026-10-25

_Free plugin `1.0.3`, Pro add-on `1.0.2`. Pro 1.0.2 requires the free plugin at 1.0.3 or later._

### Added

- **URL** and **Telephone** field types. URLs are restricted to `http` and `https`; telephone validation is deliberately permissive so international formats are not rejected.
- **Heading** and **Separator** display fields, with a configurable heading level (`H2`–`H5`) so the product page keeps a correct heading outline.
- **Word Count pricing** (Pro) — charge per word, counted Unicode-aware so non-Latin scripts are handled correctly.
- **Math Formula pricing on individual options** (Pro), with a new `[option_price]` placeholder. Formula pricing is now available on every field type, not only the dedicated Formula field.
- **File Upload** now has configurable **Allowed Extensions** and **Max File Size**, and shows the server's real upload ceiling.

### Fixed

- Option-level formula pricing saved the price type but discarded the formula, so the option silently charged nothing.
- Add-on stock is now released for cancelled, pending and refunded orders, including partial refunds. Previously only cancellation released it, and a cancel/reinstate/cancel cycle leaked stock permanently.
- Cancelling an unpaid order — or a failed payment returning it to pending — credited stock that was never taken, inflating global pools and allowing overselling.
- A discount option larger than the product price could produce a negative cart line. Totals are now floored at zero.
- With the Pro add-on deactivated, a field saved with a Pro pricing strategy charged its amount as a flat fee at checkout while the product page showed no charge.
- A conditional-logic group whose rules all targeted display-only fields could hide the field permanently. Such rules are now ignored and the field stays visible.
- Display-only fields (Static Content, Heading, Separator) can no longer be chosen as conditional-logic triggers, where they matched permanently.
- Cart-reserved stock now honours custom reduction formulas, so the availability check and the actual deduction agree.
- Discount options with a negative price can now be saved.
- Frontend CSS and JS are now cached by browsers instead of being re-fetched on every page view.
- Reactivating the plugin no longer resets your saved settings or creates another set of the six draft demo option groups.
- Uninstall with **delete all data** enabled now also removes the activation-time and deactivation-feedback options and the review-notice dismissal user meta.
- An empty stock-tracked field no longer blocks add-to-cart when its stock pool has none left.
- A checkbox value submitted twice is now counted and priced once.
- Values sent for Separator and Heading fields are ignored by the cart.
- The live price preview handles negative option prices and never shows a total below zero.

### Changed

- **Exclusion** rules and **priority** are documented more precisely — see [Assignment Rules](/assignments/index).
- Deleting a refund does not take add-on stock back out of its pool, matching how WooCommerce treats product stock.

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
- Initial release of OptionBay.
- Comprehensive Addon Builder with drag-and-drop interface.
- 13 Field types including Swatches, File Uploads, and Choice fields.
- 4 Pricing strategies: Flat fee, Percentage, Character Count, and dynamic Math Formulas.
- Global Stock Management with direct option linking.
- Smart Routing (Assignment Rules) for targeting specific products, categories, or tags.
- Conditional logic for showing/hiding fields dynamically.
- Export and Import functionality for migrating settings.
