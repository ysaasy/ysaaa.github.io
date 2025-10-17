---
layout: base.njk
permalink: media.html
title: "media"
nesting: "./"
date: 
---
# {{ title }}
everything i've been consuming lately
<br><br>

## recently played
<iframe src="https://petrapixel.neocities.org/widgets/lastfm?center=1&marquee=1&font-family=Arial&font-size=16px&color=#c1cee2&username=ysaasy&swapPositions=1&delimiter=-&underline=0&" height="40" frameborder="0" title="Last.Fm Status"></iframe>

<!-- recent 5 reads -->
## recently read
<div id="storygraph-diary" class="sg-container"></div>

## recently watched
<div id="letterboxd-diary" class="boxd-container"></div>

<script>
fetch("/boxd.json")
  .then(res => res.json())
  .then(entries => {
    const container = document.getElementById("letterboxd-diary");
    let html = "";

    entries.forEach(entry => {
      const date = new Date(entry.date);
      const formattedDate = date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric"
      });

      html += `
        <div class="boxd-entry">
          ${entry.poster ? `<img src="${entry.poster}" alt="Poster for ${entry.title}">` : ""}
          <div class="boxd-content">
            <a href="${entry.link}" target="_blank">${entry.title}</a>
            <div class="boxd-date">${formattedDate}</div>
            ${entry.review ? `<div class="boxd-review">${entry.review}</div>` : ""}
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  })
  .catch(err => {
    document.getElementById("letterboxd-diary").innerText = "Error loading diary.";
    console.error(err);
  });
</script>

<script>
fetch("/storygraph-recent.json")
  .then(res => res.json())
  .then(entries => {
    const container = document.getElementById("storygraph-diary");
    let html = "";
    
    entries.forEach(entry => {
      
      html += `
        <div class="sg-entry">
          <div class="sg-content">
            <a href="https://app.thestorygraph.com/books/${entry.book_id}" target="_blank">${entry.title}</a>
          </div>
        </div>
      `;
    });
    container.innerHTML = html;
  })
  .catch(err => {
    document.getElementById("storygraph-diary").innerText = "Error loading books.";
    console.error(err);
  });
</script>