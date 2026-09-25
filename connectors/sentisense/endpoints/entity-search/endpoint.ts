import { defineEndpoint } from "@shared/core";
import { zEntitySearchQueryParams } from "./schema/inputs.ts";

/** `GET /v1/kb/entities/search`: resolve a name to a ticker or entity. */
export default defineEndpoint({
    meta: {
        displayName: "SentiSense Entity Search",
        summary:
            "Resolve a company name to its US ticker, or look up people, products and topics.",
        description: "Look up companies, ETFs, people, products, " +
            "organizations, countries and topics by name, best match " +
            "first. Use it to turn a company name into the ticker every " +
            "per-ticker endpoint takes: company and ETF matches carry " +
            "`ticker`, while people, products and topics resolve with " +
            "`ticker: null`. A company entry also says whether it can be " +
            "queried by ticker (`listingCoverage`): `public_tracked` is a " +
            "US listing the other endpoints accept, `public_untracked` is " +
            "listed on a market not priced here (`listing` names it, e.g. " +
            "`KRX: 005930`), and `private` is not listed.",
        docsUrl: "https://sentisense.ai/docs/api/entities",
        categories: ["stock-market-data"],
    },
    request: { method: "GET", path: "/v1/kb/entities/search" },
    input: { schema: { queryParams: zEntitySearchQueryParams } },
});
