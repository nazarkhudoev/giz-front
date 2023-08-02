module.exports = {
  locales: ['en', 'ca', 'es'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
    '/': ['home'], // app/page.tsx
    '/checkout': ['checkout'], // app/checkout/page.tsx
  },
}