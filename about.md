---
layout: page
title: About
permalink: /about/
---

This is a website to host quiz questions and answers.

The quizzes are listed by date on the [homepage](../).

A quiz is written as a file in [Markdown](https://guides.github.com/features/mastering-markdown/).

Files are stored in the github repository: [home-quiz](https://github.com/oldgit/home-quiz)

On a commit to this repository, [GitHub Pages](https://pages.github.com/) will
run [Jekyll](https://jekyllrb.com/) to rebuild the pages in the site,
from the content in the Markdown files.

* [How to create a quiz page](#how-to-create-a-quiz-page)
* [How to create a quiz scores page](#how-to-create-a-quiz-scores-page)

## How to create a quiz page

A quiz page is a Jekyll [post](https://jekyllrb.com/docs/posts).
It has a filename of format: `YEAR-MONTH-DAY-title.md` and is placed in the `_posts` directory.
For example: `_posts/2020-05-12-quiz-questions.md`

The quiz file starts with Jekyll [front matter](https://jekyllrb.com/docs/front-matter/):

```yaml
---
layout: post
title:  "May 12 Quiz Sport Round"
date:   2020-05-12 20:30:28 +0000
tags:   oldgit
---
```

The start and end of front matter are marked with 3 dashes: `---`. The layout is `post`.
You'll need a title and date and optionally you can add any tags.

After this, you write your quiz in [Markdown](https://help.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax).

Here's a Sport heading and a list of questions:

```text
## Sport

1. Who has won the most Wimbledon Mens singles tennis Championships? (Open era since 1968)
1. Who has won the most Wimbledon Ladies singles tennis Championships? (Open era since 1968)
1. In football who has won the ballon d'or a record 6 times and who comes second with 5?
1. In football name the teams that have won the FA Cup:
    - the most times (13)
    - second most (12)
    - third most (8)
1. In field hockey, how many players for a single team play on the pitch?
1. In a professional game of darts what is your starting score?
1. Who in 1985 won the Snooker World Championship with over 18 million viewers watching live well past midnight?
1. How many Formula 1 World Drivers championships did Jackie Stewart win? Hint: matches Ayrton Senna.
```

For the answers, a pinch of HTML is used to give you a `Show Answers` button by declaring a button
and wrapping your answer Markdown list in a `<div>`:

```html
<button class="answer-button">Show Answers</button>
<div class="hide" markdown="1">
1. Roger Federer - 8 times.
1. Martina Navratilova - 9 times.
1. Lionel Messi, Cristiano Ronaldo.
1. In football name the teams that have won the FA Cup:
   - Arsenal (13)
   - Manchester United (12)
   - Chelsea (8)
1. In field hockey, 11 players for a single team.
1. In a professional game of darts your starting score is 501.
1. Dennis Taylor in 1985 won the Snooker World Championship.
1. 3 - Jackie Stewart and Ayrton Senna won 3 Formula 1 World Drivers championships.
</div>
```

See this full quiz source file: [2020-05-12-quiz-questions.md](https://raw.githubusercontent.com/oldgit/home-quiz/master/_posts/2020-05-12-quiz-questions.md)

Here's the published quiz: [oldgit.github.io/home-quiz/2020/05/12/quiz-questions.html](https://oldgit.github.io/home-quiz/2020/05/12/quiz-questions.html)

## How to create a quiz scores page

A quiz scores page is also a Jekyll [post](https://jekyllrb.com/docs/posts).
It has a filename of format: `YEAR-MONTH-DAY-title.md` and is placed in the `_posts` directory.
For example: `_posts/2020-05-12-quiz-scores.md`

A complete example scores file also starts with Jekyll [front matter](https://jekyllrb.com/docs/front-matter/):

```yaml
---
layout: scores
title:  "May 12 Quiz Scores"
date:   2020-05-12 21:00:28 +0000
tags:   oldgit
---
<!-- This page remains empty and is generated automatically using the scores csv file. -->
<!-- Ensure that a scores csv file exists in the _data/scores directory. -->
<!-- The score csv file must be named based on the date: value above -->
<!-- The score csv filename format is: "d%Y-%m-%d-T%H%M.csv" -->
<!-- So for this page's date: "2020-05-12 21:00:28 +0000", -->
<!--     the csv filename is: d2020-05-12-T2100.csv -->
<!-- FullPath:   _data/scores/d2020-05-12-T2100.csv -->
```

**Note:** The layout is `scores` (not post). You'll need a title and date and optionally you can add any tags.

As stated above, this file remains empty of any Markdown.
The quiz scores page is generated automatically from a scores csv data file.

A scores csv data file must exist in the directory: `_data/scores`.

The score csv file must be named based on the `date:` value in the page's front matter.
The score csv filename format is: `d%Y-%m-%d-T%H%M.csv`
So for this example page's date: `2020-05-12 21:00:28 +0000`, the csv filename is: `d2020-05-12-T2100.csv`

The example scores csv file is as follows:

```text
Team,Sport,Picture,History,Geography,News,Film/TV,Science
maxpoints,8,8,8,8,8,8,8
C&D,6,7,-1,-1,6,7,3
JT,7,7,4,3,2,4,4
JM,6,6,3,3,3,-1,6
D&G,5,6,1,4,-1,4,5
RS,1,2,3,1,4,4,-1
JH,-1,-1,2,3,4,5,4
```

The first row of the csv file gives the columns which become the HTML table header.
There **must** be a `Team` column. The other columns are names of quiz rounds (which can vary).

The second row gives the maximum number of points a team can score in each round.

Each subsequent row represents a team in the quiz. The first column is the team's name.
If a column's value is `-1`, then the team are quiz master for that round and so score no points.

For the example scores csv file above, here's the published scores: [oldgit.github.io/home-quiz/2020/05/12/quiz-scores.html](https://oldgit.github.io/home-quiz/2020/05/12/quiz-scores.html)
