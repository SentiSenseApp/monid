import { defineEndpoint } from "@shared/core";
import { zTickerPathParams } from "../../schema/common.ts";

/** `GET /v1/stocks/{ticker}/quote`: price plus headline fundamentals. */
export default defineEndpoint({
    meta: {
        displayName: "SentiSense Stock Quote",
        summary:
            "Latest price, day range and headline fundamentals for a US stock.",
        description: "The latest price for a US-listed stock with the day's " +
            "change, open, high, low, volume and previous close, the 52-week " +
            "range, market cap, P/E, EPS (TTM), dividend yield and the " +
            "200-day moving average. Outside regular trading hours an " +
            "`extendedHours` block carries the pre-market or after-hours " +
            "price. The regular-session price is delayed 15 minutes, and " +
            "fields the " +
            "stock does not have are omitted rather than null. A delisted " +
            "stock also reports `listingStatus` and `delistedDate`. ETFs " +
            "are refused with `ticker_is_etf`. For why the stock is moving, " +
            "call sentisense#v1/stocks/{ticker}/sentiment.",
        docsUrl: "https://sentisense.ai/docs/api/stocks",
        categories: ["stock-market-data"],
    },
    request: { method: "GET", path: "/v1/stocks/{ticker}/quote" },
    input: { schema: { pathParams: zTickerPathParams } },
});
