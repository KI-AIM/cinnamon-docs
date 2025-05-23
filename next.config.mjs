import nextra from 'nextra'

const withNextra = nextra({
  // ... Other Nextra config options
  latex: true,
  search: {
    codeblocks: false
  },
})

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  // ... Other Next.js config options
  output: 'export',
  images: { unoptimized: true },
  basePath: '/cinnamon-docs',
  assetPrefix: '/cinnamon-docs', //<Image> tags need to manually apply this property
})
