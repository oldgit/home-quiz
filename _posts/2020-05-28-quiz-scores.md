---
layout: post
title:  "May 28 Quiz Scores"
date:   2020-05-28 21:00:28 +0000
tags:   oldgit
---

### Positions

{% assign p10_list = "" %}
{% for row in site.data.scores.d2020_05_28 %}
  {% if forloop.index == 1 %}
    {% capture lmax %}{% for pair in row %}{% if forloop.first == false %}{{ pair[1] }},{% endif %}{% endfor %}{% endcapture %}
    {% assign lmax = lmax | append:"1" | split:"," %}
  {% endif %}
  {% if forloop.index > 1 %}
    {% capture lpercent10 %}{% for pair in row %}{% if forloop.first == false %}{% assign i = forloop.index | minus:2 %}{% assign percent10 = pair[1] | times:1000 | divided_by:lmax[i] %}{{ percent10 }},{% endif %}{% endfor %}{% endcapture %}
    {% assign lpercent10 = lpercent10 | append:row["Team"] | split:"," %}
    {% assign rounds = 0 %}
    {% assign total_percent10 = 0 %}
    {% for p in lpercent10 %}
      {% if forloop.last %}
        {% assign mean_p10 = total_percent10 | divided_by:rounds  %}
        {% assign team = p %}
      {% else %}
        {% if p > "0" %}
          {% assign rounds = rounds | plus:1 %}
          {% assign total_percent10 = total_percent10 | plus:p %}
        {% endif %}
      {% endif %}
    {% endfor %}
    {% assign p10_list = p10_list | append: mean_p10 | append:"-" | append:team %}
    {% if forloop.last == false %}
    {% assign p10_list = p10_list | append:"," %} 
    {% endif %}
  {% endif %}
{% endfor %}
{% assign p10_list = p10_list | split:"," | sort | reverse %}
<ol>
{% for i in p10_list %}
  {% assign line = i | split:"-" %}
  <li>{{ line[0] | divided_by:10 }}.{{ line[0] | modulo:10 }}% {{line[1]}}</li>
{% endfor %}
</ol>


Table:

<table>
  {% for row in site.data.scores.d2020_05_28 %}
    {% if forloop.first %}
    <tr>
      {% for pair in row %}
        <th>{{ pair[0] }}</th>
      {% endfor %}
      <th>Mean</th>
    </tr>
    {% endif %}
    {% if forloop.index == 1 %}
      {% capture max %}{% for pair in row %}{% if forloop.first == false %}{{ pair[1] }}{%if forloop.last == false %},{% endif %}{% endif %}{% endfor %}{% endcapture %}
      {% assign max = max | split: "," %}
    {% endif %}
    {% if forloop.index > 1 %}
      {% capture points %}{% for pair in row %}{% if forloop.first == false %}{{ pair[1] }}{%if forloop.last == false %},{% endif %}{% endif %}{% endfor %}{% endcapture %}
      {% assign points = points | split: "," %}
      <tr>
      {% for pair in row %}
        {% if forloop.first %}
          <td>{{pair[1]}}</td>
        {% else %}
          {% assign pindex = forloop.index | minus:2 %}
          {% if pair[1] == '-1' %}
            <td>QM</td>
          {% else %}
            <td>{{ pair[1] }} / {{ max[pindex] }}</td>
          {% endif %}
        {% endif %}
      {% endfor %}
        <td></td>
      </tr>
      <tr>
      {% for pair in row %}
        {% if forloop.first %}
          {% assign rounds = 0 %}
          {% assign total_percent10 = 0 %}
          <td class="text-right"></td>
        {% else %}
          {% assign pindex = forloop.index | minus:2 %}
          {% if points[pindex] == '-1' %}
            <td class="text-right">-</td>
          {% else %}
            {% assign percent10 = points[pindex] | times:1000 | divided_by:max[pindex] %}
            {% assign rounds = rounds | plus:1 %}
            {% assign total_percent10 = total_percent10 | plus:percent10 %}
            <td class="text-right">{{ percent10 | divided_by:10 }}%</td>
          {% endif %}
        {% endif %}
      {% endfor %}
        {% assign mean_p10 = total_percent10 | divided_by:rounds  %}
        <td class="text-right">{{ mean_p10 | divided_by:10 }}.{{ mean_p10 | modulo:10 }}%</td>
      </tr>
    {% endif %}
  {% endfor %}
</table>

