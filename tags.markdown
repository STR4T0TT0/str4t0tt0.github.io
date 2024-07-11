---
layout: page
title: Topics
permalink: /tags/
---

{% assign topic_technical_tags = "Ransomware,Intrusion-Prevention,Endpoint-Security,Application Security,Network-Security" | split: "," %}
{% assign topic_job_skills_tags = "Identity-Management,System-Administration,Server-Management,IT-Infrastructure,Network-Administration" | split: "," %}
{% assign topic_trends_tags = "Threat-Intelligence" | split: "," %}
{% assign topic_studies_tags = "Cyber-Attack-Case-Studies,Manufacturing-Security" | split: "," %}
{% assign topic_tools_tags = "SSH" | split: "," %}

<h2>Technical Tags</h2>
{% for tag in topic_technical_tags %}
  <h3>{{ tag | capitalize }}</h3>
  <ul>
    {% assign tag_posts = site.tags[tag] %}
    {% for post in tag_posts %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}

<h2>Job Skills</h2>
{% for tag in topic_job_skills_tags %}
  <h3>{{ tag | capitalize }}</h3>
  <ul>
    {% assign tag_posts = site.tags[tag] %}
    {% for post in tag_posts %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}

<h2>Tools and Technologies</h2>
{% for tag in topic_tools_tags %}
  <h3>{{ tag | capitalize }}</h3>
  <ul>
    {% assign tag_posts = site.tags[tag] %}
    {% for post in tag_posts %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}

<h2>Technologies trends</h2>
{% for tag in topic_trends_tags %}
  <h3>{{ tag | capitalize }}</h3>
  <ul>
    {% assign tag_posts = site.tags[tag] %}
    {% for post in tag_posts %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}

<h2>Case studies</h2>
{% for tag in topic_studies_tags %}
  <h3>{{ tag | capitalize }}</h3>
  <ul>
    {% assign tag_posts = site.tags[tag] %}
    {% for post in tag_posts %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}