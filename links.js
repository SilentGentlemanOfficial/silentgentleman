// Regular Amazon search links. Replace with Colin's own affiliate URLs when available.
const bookLinks = {
  "cant_hurt_me": "https://www.amazon.com/s?k=Can%E2%80%99t%20Hurt%20Me%20David%20Goggins",
  "outwitting_the_devil": "https://www.amazon.com/s?k=Outwitting%20the%20Devil%20Napoleon%20Hill",
  "think_and_grow_rich": "https://www.amazon.com/s?k=Think%20and%20Grow%20Rich%20Napoleon%20Hill",
  "good_to_great": "https://www.amazon.com/s?k=Good%20to%20Great%20Jim%20Collins",
  "millionaire_mind": "https://www.amazon.com/s?k=Secrets%20of%20the%20Millionaire%20Mind%20T.%20Harv%20Eker",
  "laws_of_power": "https://www.amazon.com/s?k=The%2048%20Laws%20of%20Power%20Robert%20Greene",
  "kjv_bible": "https://a.co/d/0fjUh6SH",
  "four_hour_workweek": "https://www.amazon.com/s?k=The%204-Hour%20Workweek%20Timothy%20Ferriss",
  "rich_dad": "https://www.amazon.com/s?k=Rich%20Dad%20Poor%20Dad%20Robert%20T.%20Kiyosaki",
  "atomic_habits": "https://www.amazon.com/s?k=Atomic%20Habits%20James%20Clear",
  "huckleberry_finn": "https://www.amazon.com/s?k=The%20Adventures%20of%20Huckleberry%20Finn%20Mark%20Twain",
  "moby_dick": "https://www.amazon.com/s?k=Moby-Dick%20Herman%20Melville",
  "art_of_war": "https://www.amazon.com/s?k=The%20Art%20of%20War%20and%20Other%20Classics%20of%20Eastern%20Thought%20Sun%20Tzu%20and%20other%20authors",
  "patriot_history": "https://www.amazon.com/s?k=A%20Patriot%E2%80%99s%20History%20of%20the%20United%20States%20Larry%20Schweikart%20%26%20Michael%20Allen",
  "nineteen_eighty_four": "https://www.amazon.com/s?k=1984%20George%20Orwell",
  "uncle_tom": "https://www.amazon.com/s?k=Uncle%20Tom%E2%80%99s%20Cabin%20Harriet%20Beecher%20Stowe",
  "animal_farm": "https://www.amazon.com/s?k=Animal%20Farm%20George%20Orwell",
  "win_friends": "https://www.amazon.com/s?k=How%20to%20Win%20Friends%20%26%20Influence%20People%20Dale%20Carnegie",
  "tuttle_twins": "https://a.co/d/0ee6ZMpV"
};
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-book]").forEach(el => {
    const url = bookLinks[el.dataset.book];
    if (url && /^https:\/\//.test(url)) {
      el.href = url; el.target = "_blank"; el.rel = "noopener noreferrer";
      el.removeAttribute("data-unavailable");
      if (el.classList.contains("book-cta")) { el.textContent = "Find on Amazon ↗"; el.classList.remove("off"); }
    } else { el.removeAttribute("href"); }
  });
});
