# Product Assignments

**Assignments** control which products an Option Group appears on. Each group can have multiple assignment rules that combine to determine its visibility across your store.

![Assignment Rules panel inside the Addon Builder showing global, category, product, and tag rules in a table](/public/assignments-panel.png)

---

## How Assignments Work

When a customer visits a product page, OptionBay queries the `wp_opopw_assignments` database table using a single indexed lookup. The query checks whether any published Option Groups match the current product's ID, category IDs, or tag IDs.

The result is a prioritised, deduplicated list of groups to render — resolved in milliseconds even on large stores.

---

## Assignment Targets

Each assignment rule targets one of four scopes:

| Target               | Description                                                          |
| -------------------- | -------------------------------------------------------------------- |
| **Global**           | The group appears on **all** products site-wide                      |
| **Specific Product** | The group appears on one or more individually selected products      |
| **Category**         | The group appears on all products in one or more selected categories |
| **Tag**              | The group appears on all products with one or more selected tags     |

You can add multiple rules of any type. OptionBay evaluates them all together.

---

## Adding Assignment Rules

Inside the Addon Builder, open the **Assignment Rules** section. Click **Add Rule** to add a new row.

![Assignment Rules panel with the Add Rule button and a dropdown to choose target type](/public/assignments-add-rule.png)

For each rule, configure:

1. **Target Type** — Select Global, Product, Category, or Tag from the dropdown
2. **Target** — _(Not applicable for Global)_ Search and select the specific product, category, or tag
3. **Type** — Choose **Include** or **Exclude** (see below)
4. **Priority** — A number (default: `10`). Lower numbers have higher priority.

---

## Inclusion vs. Exclusion Rules

Rules can be either **inclusions** (the group _should_ appear) or **exclusions** (the group _should not_ appear).

### Example

Imagine you want a group to appear on all products in the "Jewellery" category **except** for the product "Silver Ring".

| Rule     | Target      | Type    |
| -------- | ----------- | ------- |
| Category | Jewellery   | Include |
| Product  | Silver Ring | Exclude |

OptionBay processes both rules together. Since the exclusion rule exists for "Silver Ring", the group will not appear on that product even though the category rule would otherwise include it.

::: tip Exclusions Always Win
An **exclusion always takes precedence over an inclusion** for the same group — regardless of priority. If any exclusion rule matches the current product (directly, or through one of its categories or tags), the group is hidden on that product even when an inclusion rule would otherwise show it. Priority does **not** let an inclusion override an exclusion.
:::

---

## Priority

Priority is a number that controls the **order** in which applicable groups are rendered on a product page when several groups match:

- **Lower number = Higher priority** (e.g. a group with priority `1` is rendered before one with priority `10`)
- Default priority is `10`

Priority orders **included groups** relative to one another. It does **not** resolve inclusion-vs-exclusion conflicts — an exclusion always wins (see above).

**Use case:** Two groups both apply to a product. Give the more important group a lower priority number (e.g. `5`) so it appears above the other (e.g. `10`) in the options list.

---

## Removing Rules

Click the **× Remove** button at the end of any rule row to delete it. Unsaved changes are local until you click **Save**.

---

## Assignment Summary in the List

On the [Option Groups list](/builder/option-groups), the **Assigned To** column shows a human-readable summary of where each group is assigned:

| Summary shown              | Meaning                                            |
| -------------------------- | -------------------------------------------------- |
| `All Products`             | At least one Global rule exists                    |
| `3 categories, 2 products` | Category and/or product-specific rules (no global) |
| `None`                     | No assignment rules — the group never appears      |

::: warning Groups with no assignments never appear
A group must have at least one inclusion rule to display on any product page. A group with zero assignment rules is effectively invisible.
:::

---

## Technical Details

Assignment rules are stored in the `wp_opopw_assignments` custom database table:

```sql
CREATE TABLE wp_opopw_assignments (
    id          bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    group_id    bigint(20) UNSIGNED NOT NULL,   -- CPT post ID
    target_type varchar(20) NOT NULL DEFAULT 'global',  -- global | product | category | tag
    target_id   bigint(20) UNSIGNED NOT NULL DEFAULT 0, -- 0 for global
    is_exclusion tinyint(1) NOT NULL DEFAULT 0,
    priority    int(11) NOT NULL DEFAULT 10,
    PRIMARY KEY (id),
    KEY group_id (group_id),
    KEY target_lookup (target_type, target_id, is_exclusion, priority)
)
```

The composite index `target_lookup` makes the per-product resolution query extremely fast — it never scans the full table, regardless of how many groups or products you have.
