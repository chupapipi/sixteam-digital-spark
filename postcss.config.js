export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? {
      cssnano: {
        preset: ['default', {
          discardComments: { removeAll: true },
          normalizeWhitespace: true,
          colormin: true,
          convertValues: true,
          discardDuplicates: true,
          discardEmpty: true,
          mergeRules: true,
          minifyFontValues: true,
          minifyParams: true,
          minifySelectors: true,
          normalizeUnicode: false, // Evitar problemas con Unicode
          svgo: false, // Evitar problemas con SVG inline
        }],
      },
    } : {}),
  },
}
