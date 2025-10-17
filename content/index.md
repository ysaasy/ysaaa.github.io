---
layout: base.njk
permalink: index.html
title: "home"
nesting: "./"
date: 
---
# the page
i still don't know what to write here

## recent entries
<div id="recentpostlistdiv">
  {% assign top_posts = collections.posts | reverse %}
	{%- for post in top_posts limit:3 -%}
		<a href="{{ post.data.permalink }}">{{ post.data.title }}</a><br>
	{% endfor %}
</div>
<a href="/archive.html">...</a>

## currently reading
<div id="storygraph-diary" class="sg-container"></div>

<script>
fetch("/storygraph-current.json")
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