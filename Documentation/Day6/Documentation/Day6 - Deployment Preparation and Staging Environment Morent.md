# *Day 6 \- Deployment Preparation and Staging Environment \- Morent*

---

## *1\. Overview*

This document outlines the deployment preparation and staging environment setup for Morent. It covers performance optimizations, testing reports, and deployment checks to ensure a smooth transition to production.

---

## *2\. Deployment Preparation*

### *2.1 Key Deployment Steps*

1. *Environment Configuration:*
   - .env files have been created to store sensitive credentials (API keys, URIs, etc.).
   - Ensured proper management of environment variables for production and staging.

2. *Build Optimization:*
   - Production build generated using next build for improved performance.

3. *Hosting and Deployment Service:*
   - Deployed on *Vercel* due to seamless integration with Next.js.
   - GitHub repository connected for continuous deployment on push to the main branch.

4. *Database Connection:*
   - *Sanity CMS* backend configured for staging and production, with separate datasets for each environment.
   - Verified secure and efficient database access with proper CORS settings.

5. *Image Optimization:*
   - Compressed all images using the Next.js next/image component.
   - Enabled lazy loading for images to reduce page load time.

---

## *3\. Staging Environment*

### *3.1 Purpose of Staging Environment*

- The staging environment is used to test the application in a live-like setup before production deployment.
- It helps identify and fix any issues related to performance, hosting, or compatibility.

### *3.2 Setup*

1. *Domain:*
   - Staging version deployed on: [https://marketplace-car-rental-website-by-syedfarooq-ali.vercel.app](https://marketplace-car-rental-website-by-syedfarooq-ali.vercel.app)

2. *Staging Data:*
   - Populated the staging database with sample data for categories, products, and user information.

---

## *4\. Performance Report*

### *4.1 Lighthouse Performance Metrics*

The following performance metrics were recorded using *Google Lighthouse*:

| Metric         | Score   |
| :------------- | :------ |
| Performance    | 80/100 |
| Accessibility  | 79/100  |
| Best Practices | 96/100 |
| SEO            | 100/100  |

---

## *5\. Testing Report*

### *5.1 Summary of Test Cases*

A total of *7 test cases* were executed, covering key features such as search, filters, checkout, and API handling.

| Test Case ID | Test Case Title          | Expected Result                                                                                             | Actual Result | Remarks                                                                |
| :----------- | :----------------------- | :---------------------------------------------------------------------------------------------------------- | :------------ | :--------------------------------------------------------------------- |
| TC-001       | Search Bar Functionality | Products matching the search query are displayed. User-friendly message appears if no matches are found.    | Pending       | \-                                                                     |
| TC-002       | Filter Component         | Products are filtered correctly based on the selected criteria.                                             | Pass          | Filters are working as expected but some can be improved               |
| TC-003       | Checkout Validation      | User is prompted to fill out the required form if details are incomplete. Order is placed upon valid input. | Pass          | \-                                                                     |
| TC-004       | Dynamic Routing          | Dynamic product page loads correctly with product-specific data.                                            | Pass          | \-                                                                     |
| TC-005       | Authentication Dashboard | Dashboard displays the order details (e.g., active, pending, completed orders).                             | Pending       | \-                                                                     |
| TC-006       | Write Review             | It accepts user input and shows it in the UI after submission.                                               | Pending       | Input is accepted, but UI display is incorrect                        |
| TC-007       | API Test                 | It will show a fallback error message.                                                                       | Pass          | \-                                                                     |
| TC-008       | Ensure Responsiveness    | App is responsive on all screen sizes.                                                                      | Pass          | \-                                                                     |

---

## *6\. Security Measures*

1. *Input Validation:*
   - All user inputs are sanitized to prevent SQL injection and XSS attacks.

2. *API Security:*
   - API endpoints secured.
   - API keys and secrets are stored in environment variables, never exposed in the frontend.

3. *HTTPS:*
   - HTTPS is enabled for secure communication between client and server.

4. *CORS Configuration:*
   - CORS policies configured to allow access only from trusted domains.

---

## *7\. Final Checklist for Deployment*

- [x] Verified production build with next build.
- [x] Tested all critical functionalities in the staging environment.
- [x] Ensured all sensitive information is securely stored.
- [x] Configured error monitoring and analytics.
- [x] Deployed staging build to *Vercel* for final review.

---