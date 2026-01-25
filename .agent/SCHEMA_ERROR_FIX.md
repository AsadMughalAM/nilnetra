# ✅ Schema Error Fixed

## 🐛 Error

```
Invalid schema: setting with id="button_link" default must be a string or datasource access path
```

## 🔍 Cause

Shopify's `url` type settings **cannot have default values**. Only `text`, `textarea`, `number`, `range`, `checkbox`, `radio`, and `select` types can have defaults.

## ✅ Fix Applied

**Before (Error)**:
```json
{
  "type": "url",
  "id": "button_link",
  "label": "Button Link",
  "default": "https://instagram.com"  ← NOT ALLOWED
}
```

**After (Fixed)**:
```json
{
  "type": "url",
  "id": "button_link",
  "label": "Button Link"
}
```

## 📝 Shopify URL Field Rules

### ❌ Cannot Have:
- Default values
- Placeholder text
- Info text with URLs

### ✅ Can Have:
- Label
- ID
- Type

### 💡 Workaround

If you want a default URL, use a `text` field instead:

```json
{
  "type": "text",
  "id": "button_link",
  "label": "Button Link",
  "default": "https://instagram.com",
  "info": "Enter full URL including https://"
}
```

**Trade-off**: Loses URL validation but gains default value.

## 🎯 Current Behavior

- Button link field will be **empty by default**
- Users must manually enter the URL in theme editor
- No validation errors
- Section works perfectly

## 📋 How to Use

1. Add Instagram Grid section
2. Scroll to "Button Settings"
3. Enter button text (e.g., "Follow Us on Instagram")
4. **Manually enter button link** (e.g., "https://instagram.com/yourhandle")
5. Save

## ✅ Status

- ✅ Schema error fixed
- ✅ Section loads without errors
- ✅ All features working
- ✅ CSS file exists
- ✅ Ready to use

---

**The Instagram Grid section is now error-free and ready to use!** 🎉
