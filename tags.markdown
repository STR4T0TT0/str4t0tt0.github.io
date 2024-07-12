---
layout: tags_layout
title: Topics
permalink: /tags/
---

{% assign topic_technical_tags = "Ransomware,Intrusion-Prevention,Endpoint-Security,Application Security,Network-Security" | split: "," %}
{% assign topic_job_skills_tags = "Identity-Management,System-Administration,Server-Management,IT-Infrastructure,Network-Administration" | split: "," %}
{% assign topic_trends_tags = "Threat-Intelligence" | split: "," %}
{% assign topic_studies_tags = "Cyber-Attack-Case-Studies,Manufacturing-Security" | split: "," %}
{% assign topic_tools_tags = "SSH" | split: "," %}

<div class="content-layout">  
<div class="main-skill">
<h2><i class="fas fa-tags"> </i>Technical Tags</h2>
    <div class="tags">
{% for tag in topic_technical_tags %}
  <h3>{{ tag | capitalize }}</h3>
  <ul>
    {% assign tag_posts = site.tags[tag] %}
    {% for post in tag_posts %}
      <li><a href="{{ post.url }}"><i class="far fa-file-alt"></i>{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
    </div>
</div>

<div class="main-skill">
    <h2><i class="fas fa-tags"></i>Job Skills</h2>
    <div class="tags">
{% for tag in topic_job_skills_tags %}
  <h3>{{ tag | capitalize }}</h3>
  <ul>
    {% assign tag_posts = site.tags[tag] %}
    {% for post in tag_posts %}
      <li><a href="{{ post.url }}"><i class="far fa-file-alt"></i>{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
    </div>
</div>

<div class="main-skill">
<h2><i class="fas fa-tags"></i>Tools and Technologies</h2>
    <div class="tags">
{% for tag in topic_tools_tags %}
  <h3>{{ tag | capitalize }}</h3>
  <ul>
    {% assign tag_posts = site.tags[tag] %}
    {% for post in tag_posts %}
      <li><a href="{{ post.url }}"><i class="far fa-file-alt"></i>{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
    </div>
</div>

<div class="main-skill">
<h2><i class="fas fa-tags"></i>Technologies trends</h2>
    <div class="tags">
{% for tag in topic_trends_tags %}
  <h3>{{ tag | capitalize }}</h3>
  <ul>
    {% assign tag_posts = site.tags[tag] %}
    {% for post in tag_posts %}
      <li><a href="{{ post.url }}"><i class="far fa-file-alt"></i>{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
    </div>
</div>

<div class="main-skill">
<h2><i class="fas fa-tags"></i>Case studies</h2>
    <div class="tags">
{% for tag in topic_studies_tags %}
  <h3>{{ tag | capitalize }}</h3>
  <ul>
    {% assign tag_posts = site.tags[tag] %}
    {% for post in tag_posts %}
      <li><a href="{{ post.url }}"><i class="far fa-file-alt"></i>{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}    
    </div>
</div>
</div>
