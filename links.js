// THE SILENT GENTLEMAN — BOOK LINKS
// Replace each empty string with YOUR OWN Amazon Associates affiliate URL.
// Example format: https://www.amazon.com/dp/BOOK_ASIN?tag=YOUR_TRACKING_ID-20
// Never use another creator's tracking ID.
const bookLinks = {
  cant_hurt_me: "",
  outwitting_the_devil: "",
  think_and_grow_rich: ""
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-book]").forEach(el => {
    const url = bookLinks[el.dataset.book];
    if (url && /^https:\/\//.test(url)) {
      el.href = url;
      el.target = "_blank";
      el.rel = "noopener noreferrer sponsored";
      el.removeAttribute("data-unavailable");
      if (el.classList.contains("book-cta")) {el.textContent = "Buy on Amazon ↗"; el.classList.remove("off");}
    } else {
      el.removeAttribute("href");
    }
  });
});
