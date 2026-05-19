# Troubleshooting

Common issues and how to resolve them.

---

## Options Not Showing on Product Pages

**Symptom:** You've created and published an Option Group but it does not appear on any product page.

**Check these things in order:**

1. **Group Status is Published**
   Go to the [Option Groups list](/builder/option-groups) and confirm the toggle in the Status column is **on** (published). Draft groups are invisible to customers.

2. **Assignment Rules are set**
   Open the group in the Addon Builder. In the **Assignment Rules** section, make sure at least one **Include** rule exists. A group with no assignment rules never appears anywhere.

3. **The product matches an assignment rule**
   If your rule targets a specific product, category, or tag — confirm the product you're viewing actually belongs to that category or has that tag. A global rule should show on all products without any additional configuration.

4. **Page cache is serving a stale version**
   Clear your caching plugin (WP Rocket, LiteSpeed, W3 Total Cache, etc.) and your CDN cache if applicable, then hard-refresh the product page.

5. **WooCommerce is active**
   OptionBay only runs when WooCommerce is active. Confirm WooCommerce is installed and activated under **Plugins → Installed Plugins**.

---

## Options Show But Prices Are Wrong

**Symptom:** Options appear on the product page but the price adjustment shown in the cart is incorrect.

**Check these things:**

1. **Pricing is configured on the field**
   Open the group in the Addon Builder, expand the field, and go to the **Pricing** tab. Confirm the **Price Type** is not set to `None` and the amount is correct.

2. **For choice fields, pricing is on the option**
   For Select, Radio, and Checkbox fields, each individual choice has its own price. The price is not set on the field itself. Expand the field → **Options** tab → click the choice to see its pricing settings.

3. **Percentage pricing is relative to base price**
   `Percentage` pricing is calculated as a percentage of the product's **base price**, not the cart total. A 10% fee on a $50 product adds $5.00.

4. **Formula pricing — check placeholders**
   If using **Math Formula** pricing, verify the formula uses supported placeholders: `[base_price]`, `[char_count]`, `[quantity]`, `[value]`. Invalid formulas silently return $0.

---

## File Upload Not Working

**Symptom:** Customers cannot upload files, or uploads fail silently.

1. **Check PHP file upload settings**
   Your server must allow file uploads (`file_uploads = On` in `php.ini`). Also check `upload_max_filesize` and `post_max_size` — they must be at least as large as the maximum file size you configured.

2. **Check allowed file types**
   In the field's **General** tab, review the **Allowed Types** setting. The customer's file extension must be in the allowed list.

3. **WordPress upload permissions**
   The `wp-content/uploads` directory must be writable by the web server. Check folder permissions (typically `755`).

---

## Stock is Not Being Deducted

**Symptom:** Orders are placed but the Global Stock Item's count is not decreasing.

1. **Confirm stock is linked**
   Open the field in the Addon Builder → **Stock** tab → confirm **Enable Stock Management** is checked and an Inventory Item is selected.

2. **Check the order status**
   Stock is only deducted when `woocommerce_reduce_order_stock` fires, which happens when an order is set to a paid status (typically `Processing` or `Completed`). Pending orders do not deduct stock.

3. **Check Debug Mode logs**
   Enable **Debug Mode** in [Settings](/admin/settings) and place a test order. Review the log entries for `CartManager: Reducing inventory stock` and look for any `ERROR` entries that explain what failed.

---

## REST API Errors in the Admin Dashboard

**Symptom:** The OptionBay admin dashboard shows errors like "Failed to load option groups" or blank screens.

1. **WordPress REST API is accessible**
   Visit `https://yoursite.com/wp-json/` in a browser. If you get a JSON response, the REST API is working. If you get a 404 or redirected to a login page, your server or security plugin is blocking REST API access.

2. **Security plugins blocking REST API**
   Plugins like Wordfence, iThemes Security, or Cloudflare WAF can block unauthenticated or even authenticated REST requests. Temporarily disable them to test.

3. **Permalink structure**
   Go to **Settings → Permalinks** and click **Save Changes** to flush rewrite rules. A broken permalink structure can prevent REST API routes from resolving.

4. **User permissions**
   You must be logged in as an Administrator (or a user with the `manage_optionbay` capability). The REST API endpoints reject requests from users without this capability.

---

## Enable Debug Logging

For any issue not covered above:

1. Go to **WooCommerce → OptionBay → Settings**
2. Enable **Debug Mode**
3. Reproduce the issue
4. Check the WordPress database option `optionbay_debug_log` or look for log entries via a database client or WP-CLI:

```bash
wp option get optionbay_debug_log
```

Share the relevant log entries when requesting support.

---

## Still Need Help?

Visit [wpanchorbay.com](https://wpanchorbay.com) or open a support ticket. Include:

- Your WordPress version
- Your WooCommerce version  
- Your PHP version (found in **Tools → Site Health → Info → Server**)
- A description of the issue and steps to reproduce it
- Any relevant debug log entries
