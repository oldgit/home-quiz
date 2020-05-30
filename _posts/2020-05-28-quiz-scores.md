---
layout: post
title:  "May 28 Quiz Scores"
date:   2020-05-28 21:00:28 +0000
tags:   oldgit
---

1. 67% (51/76) Clive & Debs
2. 66% (46/70) James M
3. 51% (38/74) Dave & Gill
4. 46% (25/54) James T
5. 46% (32/70) Jon

Team           | #| C&D       | _ | JH     | _ | JM      | _ | D&G     | _ | JT      | _ |
---------------|--|-----------|---|--------|---|---------|---|---------|---|---------|---|
News           | 8|  5 | 625  |  0 |  -    |  5 |  **5** |  3 |  **3** |  4 |  **4** |
Sport          | 8|  6 | 750  |  0 |  -    |  7 | **12** |  6 |  **9** |  4 |  **8** |
Science/Nature |10|  0 | _    |  5 |  500  |  8 | **20** |  1 | **10** |  6 | **14** |
Film & TV      |12|  4 | 333  |  3 |  250  |  2 | **22** |  0 | **10** |  4 | **18** |
Geography      | 8|  3 | 375  |  1 |  125  |  0 | **22** |  3 | **13** |  4 | **22** |
History        | 8|  4 | 500  |  1 |  125  |  0 | **22** |  1 | **14** |  3 | **25** |
Picture        |32| 29 | 906  | 22 |  688  | 24 | **46** | 24 | **38** |  0 | **25** |
**Total\%**    |  |  6 | 3489 |  5 |  1688 | 70 | **46** | 74 | **38** | 54 | **25** |
**Percentage** |  |    | 58.1 |    |  33.8 |    | **66** |    | **51** |    | **46** |
**Position**   |  |  1 |      |  5 |       |  2 |        |  3 |        |  4 |        |


<table>
  {% for row in site.data.scores.d2020_05_28 %}
    {% if forloop.first %}
    <tr>
      {% for pair in row %}
        <th>{{ pair[0] }}</th>
      {% endfor %}
      <th>Final%</th>
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
          <td class="text-right">%</td>
        {% else %}
          {% assign pindex = forloop.index | minus:2 %}
          {% if points[pindex] == '-1' %}
            <td class="text-right"></td>
          {% else %}
            {% assign percent10 = points[pindex] | times:1000 | divided_by:max[pindex] %}
            <td class="text-right">{{ percent10 | divided_by:10 }}</td>
          {% endif %}
        {% endif %}
      {% endfor %}
        <td class="text-right">F</td>
      </tr>
    {% endif %}
  {% endfor %}
</table>

