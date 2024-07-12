---
layout: default
title: Home
---

<section id="featured-articles" class="featured-articles">
  <h2>Featured Articles</h2>
  <div class="articles-grid">
    {% for post in site.posts limit: 3 %}
    <div class="article-card">
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <p>{{ post.excerpt }}</p>
      <a href="{{ post.url }}" class="read-more">Read More</a>
    </div>
    {% endfor %}
  </div>
</section>