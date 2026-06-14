import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'tr', 'de', 'es'],
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/', '/(en|tr|de|es)/:path*']
};
