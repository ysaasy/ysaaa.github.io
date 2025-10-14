const fs = require("fs");
const Parser = require("rss-parser");
const parser = new Parser();

(async () => {
  const feed = await parser.parseURL("https://letterboxd.com/sapphia/rss/");
  const entries = feed.items.slice(0, 3).map(item => {
    const posterMatch = item.content.match(/<img[^>]+src="([^"]+)"/);
    const reviewMatch = item.content.replace(/<img[^>]+>/g, '').trim();
    return {
      title: item.title,
      link: item.link,
      date: item.pubDate,
      poster: posterMatch ? posterMatch[1] : null,
      review: reviewMatch || null
    };
  });

  fs.writeFileSync("boxd.json", JSON.stringify(entries, null, 2));
  console.log("✅ boxd.json saved.");
})();