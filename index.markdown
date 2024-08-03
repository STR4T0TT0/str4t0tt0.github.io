---
layout: home_layout
title: Home
permalink: /
---  

I would like to welcome you to my cybersecurity blog. Dive into a world where every byte counts and every click matters. As a dedicated learner in the vast field of cybersecurity, I share my discoveries, insights, and the occasional epic fail; hey, learning curves! Whether you're a fellow newbie or a seasoned pro looking for fresh perspectives, join me on this adventure. Let's level up our knowledge together! Start reading my latest articles now!

<div id="postCarousel" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    {% for post in site.posts limit:5 %}
    <div class="carousel-item {% if forloop.first %}active{% endif %}">
      <img src="{{ post.image }}" class="d-block w-100" alt="{{ post.title }}">
      <div class="carousel-caption d-none d-md-block">
        <h5>{{ post.title }}</h5>
        <p>{{ post.excerpt }}</p>
        <a href="{{ post.url }}" class="btn btn-primary">Read More</a>
      </div>
    </div>
    {% endfor %}
  </div>
  <a class="carousel-control-prev" href="#postCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#postCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>