// For data that loads on demand (a language's strings, an article): a component that needs something not
// loaded yet throws the loading promise. React keeps showing the current screen (navigation runs in a
// transition, see App.tsx) and renders again once it resolves. Pages are pre-loaded before the first render
// (see preloadRoute in routes.tsx), so this only happens on navigation inside the site.
export const suspend = (promise: Promise<unknown>): never => {
  throw promise;
};
