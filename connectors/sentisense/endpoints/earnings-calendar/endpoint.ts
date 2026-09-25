import { defineEndpoint } from "@shared/core";
import { zEarningsCalendarQueryParams } from "./schema/inputs.ts";

/** `GET /v1/calendar/earnings`: upcoming and recent earnings dates. */
export default defineEndpoint({
    meta: {
        displayName: "SentiSense Earnings Calendar",
        summary:
            "US earnings dates by week or date range, with timing and EPS estimates.",
        description: "Earnings report dates for US stocks over a window you " +
            "choose (this week, next week, or any `from`/`to` range), " +
            "optionally for a single ticker: the company, the report date, " +
            "whether it lands before the open, after the close, during " +
            "market hours or at an unannounced time, the fiscal quarter, " +
            "whether the company has confirmed the date or it is projected, " +
            "and the consensus EPS estimate. Filter by `confirmed` and " +
            "`time` to build a watch list for the week ahead.",
        docsUrl: "https://sentisense.ai/docs/api/calendar",
        categories: ["stock-market-data"],
        notes: [
            "The calendar arrives under `data` in the `{isPreview, " +
            "previewReason, totalCount, data}` envelope, as `data.earnings` " +
            "beside `data.metadata` (the resolved window and count). On a " +
            "preview only the first week of the window is returned.",
            "`to` before `from` is a 400; a filter that matches nothing is " +
            "a 200 with an empty list.",
        ],
    },
    request: { method: "GET", path: "/v1/calendar/earnings" },
    input: { schema: { queryParams: zEarningsCalendarQueryParams } },
});
