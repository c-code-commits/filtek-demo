# Deployment Guide - Filtrade Website

This guide will help you deploy the Filtrade website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer (optional, can use GitHub web interface)
- Basic knowledge of GitHub

## Step-by-Step Deployment

### Method 1: Using GitHub Web Interface (Easiest)

1. **Create a New Repository**
   - Go to https://github.com and sign in
   - Click the "+" icon in the top right corner
   - Select "New repository"
   - Name it (e.g., `filtrade-website`)
   - Choose "Public" for the repository
   - Do NOT initialize with README (we already have one)
   - Click "Create repository"

2. **Upload Files**
   - On the empty repository page, click "uploading an existing file"
   - Drag and drop all files and folders from the `code` directory
   - Or click "choose your files" and select all files
   - Add a commit message like "Initial website deployment"
   - Click "Commit changes"

3. **Enable GitHub Pages**
   - Go to your repository's Settings (gear icon)
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select the branch (usually `main` or `master`)
   - Keep the folder as `/ (root)`
   - Click "Save"
   - Wait 1-2 minutes for deployment

4. **Access Your Website**
   - Your site will be available at: `https://yourusername.github.io/filtrade-website`
   - The URL will be shown on the Pages settings page

### Method 2: Using Git Command Line

1. **Create Repository on GitHub**
   - Follow step 1 from Method 1 above

2. **Initialize Local Repository**
   ```bash
   cd /path/to/code
   git init
   git add .
   git commit -m "Initial commit: Filtrade website"
   ```

3. **Connect to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/filtrade-website.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Follow step 3 from Method 1 above

## Post-Deployment Configuration

### 1. Update Google Analytics

Replace `GA_MEASUREMENT_ID` in all HTML files with your actual tracking ID:

```bash
# Find all occurrences
grep -r "GA_MEASUREMENT_ID" .

# Then manually update each file or use sed:
find . -name "*.html" -exec sed -i 's/GA_MEASUREMENT_ID/YOUR-ACTUAL-ID/g' {} +
```

Get your Google Analytics ID from:
- Go to https://analytics.google.com
- Create a new property
- Copy the Measurement ID (format: G-XXXXXXXXXX)

### 2. Custom Domain (Optional)

To use a custom domain like `www.filtrade.com`:

1. **In Your Domain Registrar**
   - Add a CNAME record pointing to `yourusername.github.io`
   - Or add A records pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

2. **In GitHub**
   - Go to repository Settings > Pages
   - Under "Custom domain", enter your domain
   - Check "Enforce HTTPS" (recommended)
   - Save changes

3. **Create CNAME File**
   - In your repository root, create a file named `CNAME`
   - Add your domain name (e.g., `www.filtrade.com`)
   - Commit and push

### 3. Verify Brochure Files

Make sure all PDF brochures are accessible:
- Navigate to `https://yourusername.github.io/filtrade-website/assets/brochures/`
- Test download links on each product page

### 4. Update Contact Information

Edit these files to update contact details:
- `index.html` (footer)
- `products.html` (footer)
- `about.html` (footer)
- `contact.html` (contact details section)

Update:
- Email addresses
- Phone numbers
- Physical address
- Business hours

### 5. SEO Configuration

Update meta tags in all HTML files:
- Open Graph URLs
- Canonical URLs
- Sitemap references

## Testing Checklist

After deployment, verify:

- [ ] Home page loads correctly
- [ ] All navigation links work
- [ ] Dark/light mode toggle functions
- [ ] All product pages are accessible
- [ ] Brochure downloads work
- [ ] Contact form displays properly
- [ ] Mobile responsive design works
- [ ] All images load (if added)
- [ ] Google Analytics tracks visits
- [ ] No console errors in browser

## Common Issues & Solutions

### Issue: 404 Errors

**Solution**: 
- Check that all file paths are relative and correct
- Ensure file names match exactly (case-sensitive)
- Verify all files are committed and pushed

### Issue: Styles Not Loading

**Solution**:
- Check CSS file path in HTML files
- Clear browser cache (Ctrl+F5)
- Verify CSS file is in the repository

### Issue: GitHub Pages Not Deploying

**Solution**:
- Wait 1-2 minutes after enabling Pages
- Check repository settings for any error messages
- Ensure branch name is correct
- Try disabling and re-enabling GitHub Pages

### Issue: Custom Domain Not Working

**Solution**:
- DNS changes can take up to 48 hours to propagate
- Verify DNS records are correct
- Check that CNAME file exists in repository root
- Ensure "Enforce HTTPS" is enabled after DNS propagates

## Performance Optimization

### Enable Caching

Add a `.htaccess` file (if using custom domain with Apache):

```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType application/pdf "access plus 1 month"
</IfModule>
```

### Compress Assets

For better performance, consider:
- Minifying CSS and JavaScript
- Optimizing images
- Using a CDN for assets

## Maintenance

### Regular Updates

1. **Update Content**
   ```bash
   git pull origin main
   # Make changes to files
   git add .
   git commit -m "Update product information"
   git push origin main
   ```

2. **Monitor Analytics**
   - Check Google Analytics regularly
   - Review user behavior
   - Identify popular products

3. **Security**
   - Keep dependencies updated
   - Monitor for broken links
   - Check for security advisories

## Rollback Procedure

If you need to revert changes:

```bash
# View commit history
git log

# Revert to specific commit
git revert <commit-hash>

# Or reset to previous version (use with caution)
git reset --hard <commit-hash>
git push --force origin main
```

## Support & Resources

- **GitHub Pages Documentation**: https://docs.github.com/en/pages
- **Google Analytics Help**: https://support.google.com/analytics
- **DNS Configuration**: Consult your domain registrar's documentation

## Next Steps

After successful deployment:

1. Share the website URL with stakeholders
2. Submit sitemap to Google Search Console
3. Set up Google Analytics goals
4. Create social media profiles with website link
5. Consider SEO optimization
6. Plan content updates schedule
7. Set up automated backups (GitHub already provides version control)

## Contact

For technical support with the website:
- Review the README.md file
- Check GitHub Issues (if enabled)
- Contact: filtrade9@gmail.com

---

**Congratulations on deploying your Filtrade website!** 🎉

The website is now live and accessible to visitors worldwide. Remember to keep content updated and monitor analytics for continuous improvement.


