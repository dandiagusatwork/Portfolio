import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://34fe9ea3bac5bcf1fd880ce74c76f259@o4508133810700288.ingest.us.sentry.io/4508133849300993", // DSN langsung ditulis di sini

  tracesSampleRate: 1, // Sesuaikan ini di produksi
  debug: false, // Ubah ke true untuk debugging saat pengaturan

  // Uncomment the line below to enable Spotlight
  // spotlight: process.env.NODE_ENV === 'development',
});
