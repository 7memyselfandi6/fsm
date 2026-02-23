# Project Rules for Website Builder AI Agent

## 1. Technology Stack
- Use **only** HTML, CSS, and JavaScript for all website development tasks.
- No additional frameworks, libraries, or backend languages are allowed unless explicitly specified.

## 2. Layout Consistency
- The **header** and **sidebar** components must remain static and persist across all pages.
- These components should not reload or change when navigating between pages.
- Implement page changes using client-side routing or dynamic content loading to maintain this consistency.

## 3. Code Quality and Best Practices
- Use semantic HTML5 elements to enhance accessibility and SEO.
- Separate structure (HTML), styling (CSS), and behavior (JavaScript) clearly.
- Avoid inline styles and scripts; prefer external CSS and JS files for better caching.
- Follow naming conventions like BEM (Block Element Modifier) for CSS classes.
- Use reusable CSS classes and minimize redundancy.
- Apply event delegation in JavaScript for efficient event handling.
- Batch DOM updates to reduce reflows and improve performance.
- Ensure responsive design with CSS media queries to support all device sizes.
- Add comments and modularize code for maintainability.
- Validate and sanitize dynamic content to prevent security vulnerabilities.

## 4. Performance Optimization
- Minify CSS and JavaScript files to reduce file size.
- Use caching strategies for static assets.
- Load JavaScript asynchronously or defer execution to prevent blocking page rendering.
- Implement lazy loading for non-critical resources.

## 5. User Experience
- Ensure smooth transitions between pages without flickering or layout shifts.
- Maintain consistent navigation and visual hierarchy across the site.

## 6. Security
- Handle all dynamic content carefully to avoid XSS and other common vulnerabilities.
- Follow best security practices in coding and content management.

## 7. Customization Guidelines
- The header and sidebar are fixed by default and should only be changed with explicit instructions.
- Main content areas are fully customizable for each page.
- Any modification to static components must maintain overall layout integrity.

---

*These rules ensure the creation of efficient, maintainable, and user-friendly websites using the defined technology stack and design principles.*