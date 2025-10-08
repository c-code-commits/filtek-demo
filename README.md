# Filtrade - Industrial Filtration Excellence Website

A professional, modern website showcasing Filtrade's comprehensive range of industrial filtration products and solutions.

## 🌟 Features

- **Modern, Responsive Design**: Fully responsive layout that works beautifully on all devices
- **Dark/Light Mode**: Built-in theme switcher with persistent user preference
- **Google Analytics Integration**: Track visitor behavior and engagement
- **Downloadable Brochures**: PDF product documentation available for all products
- **Optimized Performance**: Fast loading times with optimized assets
- **SEO Optimized**: Comprehensive metadata and semantic HTML structure
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation

## 📋 Pages

### Main Pages
- **Home**: Landing page with hero section, features, and product preview
- **Products**: Complete product catalog with detailed descriptions
- **About**: Company information, values, and expertise
- **Contact**: Contact form with company information

### Product Pages
1. **DFU-60 Hydraulic Oil Filtration Unit**: High-performance filtration system
2. **Oil Patch Test Kit**: Rapid contamination analysis tool
3. **FilterCart Skid FC-2**: Mobile filtration solution
4. **HDI-2 Hilsorb Dryer Cartridge**: Advanced moisture removal
5. **Moisture Sensor**: Real-time moisture monitoring system

## 🚀 Quick Start

### Option 1: GitHub Pages Deployment

1. Create a new repository on GitHub
2. Upload all files from the `code` directory to your repository
3. Go to Settings > Pages
4. Select the branch to deploy (usually `main` or `master`)
5. Save and wait for deployment
6. Your site will be available at `https://yourusername.github.io/repository-name`

### Option 2: Local Development

1. Clone or download this repository
2. Open `index.html` in a web browser
3. Or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```
4. Navigate to `http://localhost:8000`

## 📁 Project Structure

```
code/
├── index.html              # Home page
├── products.html           # Products catalog
├── about.html              # About page
├── contact.html            # Contact page
├── css/
│   └── style.css           # Main stylesheet with theme variables
├── js/
│   └── main.js             # JavaScript functionality
├── assets/
│   ├── brochures/          # PDF product brochures
│   └── images/             # Image assets (placeholder)
└── products/
    ├── dfu-60.html
    ├── oil-patch-test-kit.html
    ├── filtercart-fc2.html
    ├── hdi-2.html
    └── moisture-sensor.html
```

## 🎨 Customization

### Google Analytics

Replace `GA_MEASUREMENT_ID` in all HTML files with your actual Google Analytics Measurement ID:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'YOUR_GA_ID');
</script>
```

### Colors and Branding

Modify CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #0066cc;      /* Change to your brand color */
    --secondary-color: #00a86b;    /* Secondary brand color */
    --accent-color: #ff6b35;       /* Accent color */
    /* ... other variables */
}
```

### Contact Information

Update contact details in the footer and contact page:
- Email addresses
- Phone numbers
- Physical address
- Business hours

## 🌙 Dark Mode

The website includes a fully functional dark mode that:
- Automatically saves user preference to localStorage
- Can be toggled via the button in navigation
- Smoothly transitions between themes
- Maintains optimal contrast ratios

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## ⚡ Performance

- Minimal external dependencies
- Optimized CSS with CSS variables
- Efficient JavaScript with modern ES6+
- Lazy loading ready
- Small file sizes for fast loading

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Grid and Flexbox
- **JavaScript (ES6+)**: Interactive features
- **Google Fonts**: Inter & Poppins typography
- **SVG Icons**: Lightweight, scalable icons

## 📊 Google Analytics Events

The site tracks the following events:
- Theme changes (light/dark mode)
- Form submissions
- File downloads
- Outbound link clicks
- Product page views
- Page load performance

## 🛠️ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📝 License

This website template is created for Filtrade. All rights reserved.

## 🤝 Support

For technical support or questions about the website:
- Email: filtrade9@gmail.com
- Phone: +91 99000 99000

## 📦 Deployment Checklist

Before deploying to production:

- [ ] Replace `GA_MEASUREMENT_ID` with actual Google Analytics ID
- [ ] Update contact information (email, phone, address)
- [ ] Add company logo images
- [ ] Verify all product brochure links work
- [ ] Test contact form submission (set up backend if needed)
- [ ] Test on multiple browsers and devices
- [ ] Verify all links are working
- [ ] Check page load speed
- [ ] Validate HTML and CSS
- [ ] Test accessibility features
- [ ] Set up custom domain (optional)

## 🎯 Future Enhancements

Potential additions for future versions:
- Live chat integration
- Product comparison tool
- Customer testimonials section
- Blog/news section
- Multi-language support
- Advanced search functionality
- Product configurator
- Request for quotation system
- Customer portal

---

**Built with attention to detail and modern web standards**

For questions or customization requests, please contact the development team.


