// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => {
  const env = process.env.NODE_ENV;
  return `Hello World! We're in ${env}!`;
};
