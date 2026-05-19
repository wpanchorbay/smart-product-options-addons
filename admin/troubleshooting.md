# Troubleshooting

Diagnose and resolve common configuration, display, and integration issues with OptionBay.

---

## Options Not Showing on Product Pages

### Symptom
You have configured an Option Group and saved it, but no custom fields appear when viewing the product page on your store's frontend.

### Troubleshooting Checklist

1. **Verify Option Group Publication Status:**
   - Go to the [Option Groups list](/builder/option-groups).
   - Locate your group and check the toggle inside the **Status** column.
   - If the toggle is off, the group is in **Draft** state and is hidden from customers. Click the toggle to switch it to **Published** (Active).

2. **Check Assignment Rules:**
   - Open the group in the [Addon Builder](/builder/addon-builder).
   - Look at the **Assignment Rules** panel.
   - You must have at least one **Include** rule set up (either "Apply to all products" or a targeted rule specifying products, categories, or tags). If the Assignment panel is empty or contains only exclusion rules, the group will never render.

3. **Validate Product Associations:**
   - If you configured a targeted assignment rule (e.g. specific product categories or tags), open the product editor for the item you are testing.
   - Verify the product is assigned to the exact category or has the exact tags matched by the assignment rule.
   - Remember that child categories are not matched automatically by parent category rules unless explicitly selected.

4. **Clear Caching Layers:**
   - Option fields are injected dynamically. If your site uses page caching (WP Rocket, LiteSpeed Cache, W3 Total Cache, SG Optimizer) or a CDN (Cloudflare), you may be seeing a cached HTML version of the page.
   - Clear your plugin and server caches, then test the page in a browser Incognito window or using a hard refresh (`Ctrl + F5` or `Cmd + Shift + R`).

5. **Confirm WooCommerce is Activated:**
   - OptionBay relies on WooCommerce hooks (such as `woocommerce_before_add_to_cart_button`) to inject the fields.
   - Go to **Plugins → Installed Plugins** and verify that WooCommerce is installed and active.

---

## Options Show But Prices Are Incorrect

### Symptom
The custom fields appear on the product page, but the price adjustments do not match what you configured, or adding options doesn't adjust the price total.

### Troubleshooting Checklist

1. **Verify Field-Level Pricing Settings:**
   - Open your group in the Addon Builder and expand the problematic field row.
   - Switch to the **Pricing** tab.
   - Verify the **Price Type** dropdown is not set to **None** and the amount field contains the correct numeric value.

2. **Check Option-Level Pricing for Choice Fields:**
   - For choice fields (Select Dropdown, Radio Buttons, Checkboxes, Color Swatch, Image Swatch), pricing is set at the **option level** inside the General tab, not at the field level.
   - Expand the field row, locate the options configuration accordion, and click the chevron to expand each choice option.
   - Confirm the Price Type and Price Amount are set correctly on each individual option. If the field-level pricing is set but the option-level pricing is left blank, OptionBay will default to no surcharge.

3. **Understand Percentage Surcharge Logic:**
   - Percentage pricing is calculated against the product's **base price** before other options are added.
   - For example, if your product's base price is `$50.00` and you set a percentage surcharge of `10`, OptionBay will add exactly `$5.00` to the price. It will not compound with other flat fees or percentage fees.

4. **Audit Math Formulas:**
   - If using **Math Formula** pricing, verify that the expression is mathematically valid and only uses supported placeholders: `[base_price]`, `[char_count]`, `[quantity]`, or `[value]` (value is only supported on Number inputs).
   - If a formula has a syntax error or references an invalid placeholder, OptionBay's safety engine will silently catch the exception and return a surcharge of `$0.00`.

---

## File Upload Failures

### Symptom
Customers click the file upload button but the upload fails silently, shows an error, or the file link is broken in the order backend.

### Troubleshooting Checklist

1. **Verify PHP Upload Settings:**
   - OptionBay uploads files using standard WordPress processes, which are governed by your server's PHP configuration.
   - Go to **Tools → Site Health → Info → Server** and check the following settings:
     - **File Uploads (`file_uploads`):** Must be set to `On`.
     - **Max Upload Size (`upload_max_filesize`):** Must be larger than the file sizes you want customers to upload.
     - **Max Post Size (`post_max_size`):** Must be larger than the max upload size.

2. **Check Allowed File Extensions:**
   - Expand the File Upload field row in the Addon Builder.
   - Under the **Validation** section, review the **Allowed File Types** list.
   - Ensure the customer's file extension is explicitly listed (e.g. `jpg, png, pdf`). If the extension is omitted, the upload is blocked for security.

3. **Verify Upload Directory Permissions:**
   - OptionBay saves uploaded files to the standard WordPress uploads directory.
   - Ensure the server has permission to write to `/wp-content/uploads/`. The directory permissions must be set to `755` (or `775` depending on your host) and the files owned by the web server user (usually `www-data` or `apache`).

---

## Stock Deductions Not Occurring

### Symptom
Orders are placed with linked options, but the inventory count inside your Global Stock Items remains unchanged.

### Troubleshooting Checklist

1. **Confirm Stock Association:**
   - Expand your field in the Addon Builder and click the **Stock** tab.
   - Ensure the **Enable Stock Management** toggle is active and you have selected a valid **Global Stock Item** from the search box.
   - For choice fields, make sure you expanded the individual option accordion and verified the stock link under the option's Stock sub-tab.

2. **Verify Order Status triggers:**
   - OptionBay deducts inventory only when WooCommerce triggers the `woocommerce_reduce_order_stock` hook.
   - This hook runs when an order transitions to a paid status (typically **Processing** or **Completed**). Pending, on-hold, or failed orders will not deduct stock.
   - Verify that your payment gateway is successfully transitioning orders to Processing.

3. **Audit the Database Logs:**
   - Enable **Debug Mode** in settings.
   - Place a test order and then inspect the database log option `optionbay_debug_log`.
   - Search for entries containing `CartManager: Reducing inventory stock` to see if deductions were attempted, or look for `ERROR` codes indicating database lock issues or missing records.

---

## REST API Errors in Admin Dashboard

### Symptom
The Option Groups list, Addon Builder, or Settings screen fails to load, showing a blank area or alerts like "Failed to load option groups."

### Troubleshooting Checklist

1. **Test the public REST API Endpoint:**
   - Open your browser and navigate to `https://yoursite.com/wp-json/`.
   - If the endpoint returns a raw JSON document showing site information, the REST API is functional.
   - If you get a `404 Not Found` error, a `403 Forbidden` error, or are redirected to the homepage, a security plugin or firewall rule is blocking REST access.

   ![Browser window showing the default public output of the WordPress REST API index endpoint](../public/img/troubleshooting-wp-rest-check.png)

2. **Check Security Plugin Rule Blocks:**
   - Plugins like Wordfence, iThemes Security (Solid Security), or Sucuri have settings to "Restrict REST API access."
   - Disable these settings temporarily to see if OptionBay loads. If it does, whitelist the OptionBay API namespace: `/wp-json/optionbay/v1/`.

3. **Flush URL Rewrites (Permalinks):**
   - OptionBay's API requires custom URL rewrites to resolve endpoints.
   - Go to WordPress Admin **Settings → Permalinks**.
   - Make sure your settings are set to **Post Name** or another structure (the default "Plain" query-parameter style can sometimes conflict with API endpoints).
   - Click the **Save Changes** button at the bottom of the Permalinks page. This flushes and rebuilds your site's rewrite rules, correcting broken endpoint routing.

   ![The WordPress Permalinks settings screen highlighting the Save Changes button](../public/img/troubleshooting-permalink-settings.png)

4. **Verify User Permissions:**
   - The OptionBay API endpoints require authentication and authorization.
   - Make sure you are logged in as a user with the **Administrator** role, or a role containing the `manage_optionbay` capability. Unauthenticated requests or requests from editors/customers are blocked.

---

## Enable Debug Logging

For complex issues, use OptionBay's logging engine:

1. Go to **WooCommerce → Settings → Products → Options**.
2. Toggle the **Debug Mode** switch to on and save changes.
3. Perform the action that is causing the problem on the frontend or backend (e.g. save a group, add to cart, check out).
4. View the generated logs. You can fetch them using a database plugin to look at the `optionbay_debug_log` option inside your `wp_options` table, or run this **WP-CLI** command:

```bash
# Retrieve the detailed logs from WP-CLI
wp option get optionbay_debug_log
```

---

## Requesting Support

If you have completed the checklists and still require assistance, visit the support portal at [wpanchorbay.com](https://wpanchorbay.com) or open a ticket. When submitting a request, provide the following details:

- **System Context:** Your WordPress version, WooCommerce version, and PHP version (found under **Tools → Site Health → Info → Server**).
- **Log Files:** The contents of your `optionbay_debug_log` collected during the issue.
- **Steps to Reproduce:** A step-by-step description of what you clicked or configured to trigger the problem.
