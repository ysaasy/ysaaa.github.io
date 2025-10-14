---
layout: base.njk
permalink: index.html
title: ""
nesting: "./"
date: 
---
{% block Head %}
<style>
</style>
{% endblock%}

# the page

i still don't know what to write here.

## recent entries
<div id="recentpostlistdiv">
  {% assign top_posts = collections.posts | reverse %}
	{%- for post in top_posts limit:3 -%}
		<a href="{{ post.data.permalink }}">{{ post.data.title }}</a><br>
	{% endfor %}
</div>
<a href="/archive.html">...</a>

## recently played
<iframe src="https://petrapixel.neocities.org/widgets/lastfm?center=1&marquee=1&font-family=Arial&font-size=16px&color=#c1cee2&username=ysaasy&swapPositions=1&delimiter=-&underline=0" frameborder="0" height="20" title="Last.Fm Status"></iframe>

<div id="letterboxd-diary" class="boxd-container" width="80%">

<div id="literal-widget" handle="ysaasy" status="FINISHED" layout="row"></div>
<script src="https://literal.club/js/widget.js"></script>

<script>
fetch("/boxd.json")
  .then(res => res.json())
  .then(entries => {
    const container = document.getElementById("letterboxd-diary");
    let html = "<h2>recently watched</h2>";

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