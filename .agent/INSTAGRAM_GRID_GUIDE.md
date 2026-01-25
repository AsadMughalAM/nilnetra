# 📸 Instagram Grid Section - Complete Guide

## ✨ Features

### Core Features
- ✅ **Responsive Grid Layout** - Adapts from 2 to 4 columns based on screen size
- ✅ **Smooth Parallax Scrolling** - Images move at different speeds for depth
- ✅ **Hover Overlays** - Beautiful gradient overlays with icons/text
- ✅ **GSAP Animations** - Smooth, performant scroll-linked animations
- ✅ **Instagram Branding** - Authentic Instagram colors and styling
- ✅ **Fully Customizable** - Control every aspect from Shopify theme editor
- ✅ **Mobile Optimized** - Perfect experience on all devices
- ✅ **Lazy Loading** - Images load only when needed
- ✅ **SEO Friendly** - Proper image attributes and semantic HTML

### Advanced Features
- 🎨 Modern gradient overlays
- 🔗 Clickable images with custom links
- ⚡ GPU-accelerated animations
- 📱 Touch-friendly on mobile
- 🌙 Dark mode support
- ♿ Accessibility compliant

---

## 📁 Files Created

1. **`sections/instagram-grid.liquid`** - Main section file
2. **`assets/instagram-grid.css`** - Styling and animations

---

## 🎯 How to Use

### 1. Add Section to Your Theme

In Shopify theme editor:
1. Go to your page/template
2. Click "Add section"
3. Select "Instagram Grid"
4. Configure settings

### 2. Configure Section Settings

**Section Settings**:
- **Heading**: Main title (e.g., "Instagram", "Follow Us")
- **Instagram Handle**: Your username (without @)
- **Button Text**: CTA button text
- **Button Link**: Where button should link to

### 3. Add Images

Click "Add block" → "Instagram Image" for each image:

**Per Image Settings**:
- **Image**: Upload or select image
- **Link URL**: Optional click destination
- **Parallax Speed**: 0-2 (higher = more movement)
- **Show Hover Overlay**: Enable/disable overlay
- **Show Icon on Hover**: Show Instagram icon
- **Overlay Text**: Optional text on hover

---

## 🎨 Design Specifications

### Grid Layout

**Desktop (1200px+)**:
```
┌────┬────┬────┬────┐
│ 1  │ 2  │ 3  │ 4  │
├────┼────┼────┼────┤
│ 5  │ 6  │ 7  │ 8  │
└────┴────┴────┴────┘
4 columns, 2.5rem gap
```

**Tablet (768px - 1199px)**:
```
┌────┬────┬────┐
│ 1  │ 2  │ 3  │
├────┼────┼────┤
│ 4  │ 5  │ 6  │
└────┴────┴────┘
3 columns, 2rem gap
```

**Mobile (<768px)**:
```
┌────┬────┐
│ 1  │ 2  │
├────┼────┤
│ 3  │ 4  │
└────┴────┘
2 columns, 1rem gap
```

### Colors

**Instagram Brand Colors**:
- Primary Blue: `#0095f6`
- Gradient: `#0095f6` → `#d62976`
- Background: `#fafafa`
- Text: `#1a1a1a`

### Typography

- **Heading**: 2-3rem, light weight (300)
- **Handle**: 1.1rem, medium weight (500)
- **Button**: 1rem, semi-bold (600)

---

## ⚙️ Parallax Settings Guide

### Parallax Speed Values

| Speed | Effect | Best For |
|-------|--------|----------|
| 0.0 | No movement | Static images |
| 0.3 | Subtle | Background images |
| 0.5 | **Default** | Most images |
| 0.8 | Noticeable | Foreground elements |
| 1.5 | Strong | Accent images |
| 2.0 | Maximum | Hero images |

### Creating Depth

**Recommended Pattern**:
```
Row 1: [0.3] [0.7] [0.5] [0.9]
Row 2: [0.6] [0.4] [0.8] [0.3]
```

Alternate between low and high speeds for best depth effect.

---

## 🎬 Animation Details

### Parallax Animation

```javascript
gsap.to(image, {
  y: () => -100 * speed,
  ease: 'none',
  scrollTrigger: {
    trigger: item,
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1,
  }
});
```

**How it works**:
- Images start moving when they enter viewport
- Movement is scroll-linked (scrub: 1)
- Each image moves at its own speed
- Creates natural depth perception

### Hover Animation

```javascript
// Overlay fades in
gsap.to(overlay, {
  opacity: 1,
  duration: 0.3,
  ease: 'power2.out'
});

// Image scales up
transform: scale(1.05);
```

### Entrance Animation

- **Fade up**: Items animate in from below
- **Stagger**: 50ms delay between each item
- **Duration**: 0.6s per item
- **Easing**: ease-out for natural feel

---

## 📱 Responsive Behavior

### Breakpoints

```css
/* Mobile First */
Default: 2 columns, 1rem gap

/* Tablet */
@media (min-width: 768px)
  → 3 columns, 2rem gap

/* Desktop */
@media (min-width: 1200px)
  → 4 columns, 2.5rem gap
```

### Mobile Optimizations

- Reduced padding (4rem vs 6rem)
- Smaller icons (36px vs 48px)
- Smaller button (0.875rem vs 1rem)
- Tighter gaps (1rem vs 2.5rem)
- Touch-friendly hit areas

---

## 🎨 Customization Options

### Change Grid Columns

In `instagram-grid.css`:

```css
/* 5 columns on desktop */
@media (min-width: 1200px) {
  .instagram-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}

/* 3 columns on mobile */
@media (max-width: 767px) {
  .instagram-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Change Overlay Gradient

```css
.instagram-overlay {
  background: linear-gradient(135deg, 
    rgba(0, 149, 246, 0.85),  /* Change these colors */
    rgba(214, 41, 118, 0.85)
  );
}
```

### Adjust Hover Scale

```css
.instagram-grid-item:hover .instagram-image {
  transform: scale(1.05); /* Change to 1.1 for more zoom */
}
```

### Change Border Radius

```css
.instagram-grid-item {
  border-radius: 8px; /* Change to 0 for square, 16px for rounder */
}
```

---

## 🔧 Advanced Customization

### Add Custom Filters

```css
.instagram-image {
  filter: brightness(1.05) contrast(1.1);
}

.instagram-grid-item:hover .instagram-image {
  filter: brightness(1) contrast(1);
}
```

### Add Loading Animation

```css
@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}

.instagram-placeholder {
  background: linear-gradient(
    90deg,
    #f0f0f0 0px,
    #f8f8f8 40px,
    #f0f0f0 80px
  );
  background-size: 1000px 100%;
  animation: shimmer 2s infinite;
}
```

### Different Aspect Ratios

```css
/* Square (default) */
.instagram-grid-item {
  aspect-ratio: 1 / 1;
}

/* Portrait */
.instagram-grid-item {
  aspect-ratio: 4 / 5;
}

/* Landscape */
.instagram-grid-item {
  aspect-ratio: 16 / 9;
}
```

---

## 🐛 Troubleshooting

### Images Not Moving (Parallax)

**Check**:
1. GSAP and ScrollTrigger loaded?
   ```javascript
   console.log(typeof gsap, typeof ScrollTrigger);
   ```
2. Console shows "Instagram grid initialized"?
3. Parallax speed set > 0?

**Solution**: Ensure GSAP is loaded globally in theme.liquid

### Overlay Not Showing

**Check**:
1. "Show Hover Overlay" enabled in block settings?
2. Browser supports hover (not touch device)?

**Solution**: On mobile, overlay won't show (by design)

### Grid Not Responsive

**Check**:
1. CSS file loaded correctly?
2. Browser cache cleared?

**Solution**: Hard refresh (Ctrl+Shift+R)

### Images Loading Slowly

**Check**:
1. Image file sizes (should be < 200KB)
2. Lazy loading enabled?

**Solution**: Optimize images with Shopify image optimization

---

## 📊 Performance Tips

### Image Optimization

**Recommended Specs**:
- Format: WebP or JPG
- Dimensions: 800x800px
- File size: < 200KB
- Compression: 80-85%

### Reduce Parallax Items

For better performance on mobile:
- Limit to 8-12 images
- Use lower parallax speeds (0.3-0.5)
- Disable parallax on mobile if needed

### GPU Acceleration

Already optimized with:
```css
will-change: transform;
backface-visibility: hidden;
transform: translateZ(0);
```

---

## ♿ Accessibility

### Built-in Features

- ✅ Keyboard navigation (Tab key)
- ✅ Focus indicators
- ✅ Alt text support
- ✅ Semantic HTML
- ✅ ARIA labels where needed

### Testing

```javascript
// Test keyboard navigation
// Tab through items, Enter to click
```

---

## 🎯 Best Practices

### Image Selection

1. **Consistent Style**: Use similar filters/tones
2. **High Quality**: Sharp, well-lit images
3. **Variety**: Mix of products, lifestyle, behind-scenes
4. **Aspect Ratio**: Keep all images square

### Parallax Speeds

1. **Variety**: Mix slow (0.3) and fast (0.8) speeds
2. **Pattern**: Alternate speeds for depth
3. **Subtlety**: Don't go above 1.5 for most images
4. **Testing**: Preview on different screen sizes

### Content Strategy

1. **Update Regularly**: Keep content fresh
2. **Call-to-Action**: Use button to drive traffic
3. **Engagement**: Add overlay text for context
4. **Branding**: Consistent with Instagram feed

---

## 📱 Mobile Considerations

### Touch Interactions

- Overlays don't show on touch devices (by design)
- Images still clickable
- Parallax reduced on mobile for performance

### Performance

- Lazy loading enabled
- Smaller images on mobile
- Reduced animation complexity

---

## 🚀 Going Live Checklist

- [ ] Add 6-12 high-quality images
- [ ] Set Instagram handle
- [ ] Configure button link
- [ ] Test on mobile device
- [ ] Test parallax scrolling
- [ ] Verify all images load
- [ ] Check hover overlays (desktop)
- [ ] Test keyboard navigation
- [ ] Verify button works
- [ ] Check page load speed

---

## 💡 Pro Tips

1. **Vary Parallax**: Create depth by mixing speeds
2. **Quality Over Quantity**: 8 great images > 20 mediocre ones
3. **Update Often**: Keep content fresh (weekly/monthly)
4. **Use Real Instagram**: Pull from actual feed for authenticity
5. **Test Mobile First**: Most users will see mobile version
6. **Optimize Images**: Compress before uploading
7. **Add Context**: Use overlay text to tell stories
8. **Drive Traffic**: Link to Instagram profile

---

## 🎨 Example Configurations

### Minimal (6 images)
```
2x3 grid
Parallax: All 0.5
No overlays
Simple heading
```

### Standard (9 images)
```
3x3 grid
Parallax: Varied (0.3-0.8)
Overlays with icons
Instagram handle
CTA button
```

### Full (12 images)
```
3x4 grid
Parallax: Highly varied (0.2-1.5)
Overlays with text
Custom links per image
Prominent CTA
```

---

✅ **Your Instagram Grid section is ready to use!**

Add it to your theme, configure the settings, and watch your Instagram content come to life with beautiful parallax scrolling! 📸✨
