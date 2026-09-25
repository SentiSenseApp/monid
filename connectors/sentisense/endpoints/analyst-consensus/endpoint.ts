import { defineEndpoint, UsageModelKind } from "@shared/core";
import { zTickerPathParams } from "../../schema/common.ts";

/** `GET /v1/analyst/{ticker}/consensus`: Street price targets + ratings. */
export default defineEndpoint({
    meta: {
        displayName: "SentiSense Analyst Consensus",
        summary:
            "Wall Street price targets and buy/hold/sell consensus for a US stock.",
        description: "Where Wall Street stands on one US stock: the low, " +
            "mean, median and high analyst price target, the number of " +
            "analysts behind the targets, the implied upside from the " +
            "current price, the consensus label, the mean recommendation " +
            "(1.0 strong buy to 5.0 strong sell), and the count of strong " +
            "buy, buy, hold, sell and strong sell ratings. A stock nobody " +
            "covers answers 404 `no_coverage`; an ETF answers 404 " +
            "`ticker_is_etf`.",
        docsUrl: "https://sentisense.ai/docs/api/analyst-ratings",
        categories: ["stock-market-data"],
        notes: [
            "The payload arrives under `data` in the `{isPreview, " +
            "previewReason, data}` envelope. On a preview the price-target " +
            "band is complete but the rating distribution and median target " +
            "are withheld.",
            "`numberOfAnalysts` counts price targets, which is a different " +
            "group from the rating counts.",
        ],
    },
    request: { method: "GET", path: "/v1/analyst/{ticker}/consensus" },
    input: { schema: { pathParams: zTickerPathParams } },
    /** Analytics class: 2 SentiSense credits per successful call. */
    usage: {
        model: {
            kind: UsageModelKind.PER_CALL,
            consumes: { credit: "default", amount: 2 },
        },
    },
});
