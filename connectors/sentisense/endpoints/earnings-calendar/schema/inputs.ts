import { z } from "zod";

const zIsoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);

/** `GET /v1/calendar/earnings` query parameters. */
export const zEarningsCalendarQueryParams = z.strictObject({
    ticker: z.string().min(1).describe(
        "Limit the calendar to one US stock ticker.",
    ).optional(),
    week: z.enum(["this", "next"]).describe(
        "Shortcut for the current or next Monday to Sunday week. Ignored " +
            "when `from` or `to` is set.",
    ).optional(),
    from: zIsoDate.describe(
        "Window start, `YYYY-MM-DD`. The API defaults to the start of the " +
            "current week.",
    ).optional(),
    to: zIsoDate.describe(
        "Window end, `YYYY-MM-DD`, on or after `from`.",
    ).optional(),
    confirmed: z.boolean().describe(
        "`true` for dates the company has confirmed only, `false` for " +
            "projected dates only. Omit for both.",
    ).optional(),
    time: z.enum(["before_open", "after_close", "during_market", "unknown"])
        .describe("Only reports at this time of day.").optional(),
});
