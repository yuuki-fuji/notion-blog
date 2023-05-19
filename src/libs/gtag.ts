import { CONFIG } from "site.config"
// export const GA_TRACKING_ID = CONFIG.googleAnalytics.config.measurementId
export const GTM_CONTAINER_ID = CONFIG.googleTagManager.config.containerId;

declare global {
  interface Window {
    dataLayer: any[];
  }
}

// https://developers.google.com/gtagjs/reference/api-reference#event
export const pageview = (url: any) => {
  if (typeof window !== "object") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "page_view",
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: any
  category: any
  label: any
  value: any
}) => {
  if (typeof window !== "object") return
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
