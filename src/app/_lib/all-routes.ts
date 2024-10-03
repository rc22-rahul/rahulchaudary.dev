const majorPaths = [
  '',
  'projects',
  'about'
]

export const allRoutes = [
  ...majorPaths
].map(paths => `${process.env.HOST}/${paths}`)