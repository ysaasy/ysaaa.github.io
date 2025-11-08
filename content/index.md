---
layout: base.njk
permalink: index.html
title: "home"
nesting: "./"
date: 
---
# ysaaa


## recent notes
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

## status.cafe
<!-- start sw-rss-feed code --> 
<script type="text/javascript"> 
<!-- 
rssfeed_url = new Array(); 
rssfeed_url[0]="https://status.cafe/users/ysaaa.atom";  
rssfeed_frame_width="260"; 
rssfeed_frame_height="260"; 
rssfeed_scroll="off"; 
rssfeed_scroll_step="6"; 
rssfeed_scroll_bar="off"; 
rssfeed_target="_blank"; 
rssfeed_font_size="12"; 
rssfeed_font_face="Helvetica,Arial,Sans-serif"; 
rssfeed_border="on"; 
rssfeed_css_url="https://ysaaa.neocities.org/css/style.css"; 
rssfeed_title="off"; 
rssfeed_title_name="ysaaa"; 
rssfeed_title_bgcolor="#1a1c1f"; 
rssfeed_title_color="#fff"; 
rssfeed_title_bgimage=""; 
rssfeed_footer="on"; 
rssfeed_footer_name="powered by Surfing Waves"; 
rssfeed_footer_bgcolor="#1a1c1f"; 
rssfeed_footer_color="#5a6674ff";
rssfeed_footer_bgimage=""; 
rssfeed_item_title_length="8"; 
rssfeed_item_title_color="#DF6E9F"; 
rssfeed_item_bgcolor="#1a1c1f"; 
rssfeed_item_bgimage=""; 
rssfeed_item_border_bottom="on"; 
rssfeed_item_source_icon="off"; 
rssfeed_item_date="on"; 
rssfeed_item_description="on"; 
rssfeed_item_description_length="120"; 
rssfeed_item_description_color="#c1cee2"; 
rssfeed_item_description_link_color="#DF6E9F"; 
rssfeed_item_description_tag="off"; 
rssfeed_no_items="0"; 
rssfeed_cache = "8e30fc44512d4b0aefd978d9c62ce31b"; 
//--> 
</script> 
<script type="text/javascript" src="//feed.surfing-waves.com/js/rss-feed.js"></script> 
<!-- end sw-rss-feed code -->


## hi