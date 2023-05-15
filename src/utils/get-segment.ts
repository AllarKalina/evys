import { AnalyticsBrowser } from "@segment/analytics-next";

export const getSegment = () => {
  const analytics = AnalyticsBrowser.load({
    writeKey: "PqSbzfy53G0tmm58QnZrlbD0FQLuk9RE",
  });

  return analytics;
};
