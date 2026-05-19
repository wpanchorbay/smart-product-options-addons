# File Upload

Lets customers attach a file to their order — artwork, a logo, a design brief, or any other document. Files are validated on upload and stored in your WordPress uploads folder via `wp_handle_upload()`.

![File upload field on a product page: the native file input, filename shown after selection, and the allowed types + max size hint below](../../public/img/field-file-frontend.png)

---

## When to Use

- Custom print artwork upload (logo, design, photo)
- Design brief or specification document
- Photo for personalised products (photo books, mugs, canvas)
- Any order requiring a customer-submitted file

---

## General Settings

| Setting | Description |
|---------|-------------|
| **Label** | Label shown above the file input |
| **Tooltip** | Hover `?` tooltip |
| **Description** | Helper text below the input |
| **Required** | A file must be selected before add-to-cart |
| **Allowed Types** | Comma-separated file extensions customers may upload (e.g. `.jpg,.png,.pdf,.svg`) |
| **Max File Size** | Maximum file size in **MB** (default: `5`). Validated client-side and server-side. |

::: tip Allowed Types Format
List extensions with leading dots, comma-separated, no spaces:
`.jpg,.jpeg,.png,.gif,.pdf,.ai,.eps,.svg`
:::

---

## Pricing

Attach a flat fee for file-handling:

| Price Type | Effect |
|------------|--------|
| **None** | No charge |
| **Flat Fee** | Fixed artwork handling fee (e.g. +$5.00 per upload) |
| **Percentage** | % of product base price |
| **Math Formula** | Advanced formula |

**Common pattern:** A single checkbox "Upload my own artwork (+$0)" reveals this file upload field via conditions, and the pricing on the file field (or on the checkbox) covers the handling fee.

→ Full reference: [Pricing Strategies](/pricing/index)

---

## Conditions

Open the **Conditions** tab to show or hide this upload field based on another selection.

**Example:** Only show "Upload Artwork" if the customer selects "Custom Print":

| Part | Value |
|------|-------|
| Action | Show this field when… |
| Match | ALL |
| Field | Design Source |
| Operator | == (equals) |
| Value | `custom-print` |

When hidden, the field is excluded from required validation and pricing — customers following the standard path are never blocked by a hidden upload field.

→ Full reference: [Field Conditions](/fields/conditions)

---

## Stock

File upload fields are not typically linked to inventory, but the setting is available if uploading a file consumes a production slot.

→ Full reference: [Linking Options to Stock](/stocks/field-linking)

---

## Validation

Server-side validation (before the file is moved to uploads):

1. **Required** — a file must be present if the field is marked required
2. **File extension** — the uploaded file's extension must be in the Allowed Types list. Extensions outside the list are rejected with an error.
3. **File size** — file must be ≤ Max File Size (in MB)

::: warning Server Limits Apply
Your PHP `upload_max_filesize` and `post_max_size` directives are the hard ceiling — even if you set 50 MB in OptionBay, the server won't accept more than its PHP limit. Check **Tools → Site Health → Info → Server** for your current limits.
:::

---

## File Storage

Files are stored in the standard WordPress uploads directory:

```
wp-content/uploads/YYYY/MM/filename.ext
```

OptionBay does **not** create WordPress media library attachments for uploaded files. The file URL is saved directly to the cart session and order item metadata.

---

## Cart & Order Display

On the **cart page:**
```
Design File:   my-logo.pdf  ← shown as filename
```

In the **WooCommerce order screen:**
```
Design File:   https://yoursite.com/wp-content/uploads/2026/05/my-logo.pdf
```

The full URL is stored, so you can click through in the admin order screen to download the file.
