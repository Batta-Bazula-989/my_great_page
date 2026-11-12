import { lazy, type ComponentType } from "react";

// React.lazy, plus preload(). Once preloaded, the component renders on the first try instead of suspending,
// which hydration and the build-time pre-renderer both need: React.lazy only skips suspending when its
// loader hands back an already-resolved value synchronously, so that is what it gets after preload().
export const lazyPage = <P extends object>(factory: () => Promise<{ default: ComponentType<P> }>) => {
  let loaded: ComponentType<P> | undefined;
  let promise: Promise<void> | undefined;
  const preload = () =>
    (promise ??= factory().then((m) => {
      loaded = m.default;
    }));
  const resolved = (): PromiseLike<{ default: ComponentType<P> }> => ({
    then: (onFulfilled) => onFulfilled({ default: loaded! }) as never,
  });
  const Page = lazy(() => (loaded ? resolved() : preload().then(() => ({ default: loaded! }))) as Promise<{ default: ComponentType<P> }>);
  return Object.assign(Page, { preload });
};
