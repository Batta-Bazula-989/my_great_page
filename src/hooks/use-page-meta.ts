import { useEffect } from "react";
import { SITE_URL } from "@/content";

const setMeta = (selector: string, attr: string, value: string) => {
  document.querySelector(selector)?.setAttribute(attr, value);
};

// Keeps <title>, description, canonical and social tags in sync on client-side navigation.
// The pre-rendered HTML already carries the same values for crawlers.
export const usePageMeta = (title: string, description: string, path: string) => {
  useEffect(() => {
    // Unknown pages render <NotFound />, which sets its own title; leave the head alone.
    if (!title) return;
    const url = `${SITE_URL}${path}`;
    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
  }, [title, description, path]);
};
