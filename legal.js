/* Single source of truth for the "Last updated" line on /privacy and /terms.
   Update this one constant whenever either document changes. */
const LEGAL_LAST_UPDATED = "2026-10-14";

document.querySelectorAll("[data-last-updated]").forEach((el) => {
  const date = new Date(LEGAL_LAST_UPDATED + "T00:00:00Z");
  el.setAttribute("datetime", LEGAL_LAST_UPDATED);
  el.textContent = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
});
