# About filtab

Filtab - library for show/hide and filtration content on website.

# Start

```javascript
import Filtab from './node_moules/filtab/bundle.min.js';
```

After that, you will have access to methods:

-   showEvery
    Example:

```html
<ul>
    <li class="item">
        <div class="item_title">
            <div class="item-text title1">one text</div>
            <img
                class="item-img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Arrow-down.svg/1200px-Arrow-down.svg.png"
                alt="description about photo"
                data-tab-img="title1"
            />
        </div>

        <div class="content block-hidden" data-tab-filter="title1">content 1</div>
    </li>
    <li class="item">
        <div class="item_title">
            <div class="item-text title2">two text</div>
            <img
                class="item-img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Arrow-down.svg/1200px-Arrow-down.svg.png"
                alt="description about photo"
                data-tab-img="title2"
            />
        </div>

        <div class="content block-hidden" data-tab-filter="title2">content 2</div>
    </li>
    <li class="item">
        <div class="item_title">
            <div class="item-text title3">three text</div>
            <img
                class="item-img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Arrow-down.svg/1200px-Arrow-down.svg.png"
                alt="description about photo"
                data-tab-img="title3"
            />
        </div>

        <div class="content block-hidden" data-tab-filter="title3">content 3</div>
    </li>
</ul>
```

```css
.item_title {
    display: flex;
    cursor: pointer;
}

.item_title img {
    margin-left: 10px;
    width: 20px;
    height: auto;
}

.item_title img.rotate {
    transform: rotate(180deg);
}

.block-hidden {
    display: none;
}
```

```javascript
const itemText = document.querySelectorAll('.item-text');
const content = document.querySelectorAll('.content');
const itemImg = document.querySelectorAll('.item-img');

// title, content, class for show/hide content, list photo and class for rotate photo
new Filtab().showEvery(itemText, content, 'block-hidden', itemImg, 'rotate');
// without photo
new Filtab().showEvery(itemText, content, 'block-hidden');
```

-   showOne
    Example:

```html
<ul>
    <li class="item">
        <div class="item_title">
            <div class="item-text title1">one text</div>
            <img
                class="item-img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Arrow-down.svg/1200px-Arrow-down.svg.png"
                alt="description about photo"
                data-tab-img="title1"
            />
        </div>

        <div class="content block-hidden" data-tab-filter="title1">content 1</div>
    </li>
    <li class="item">
        <div class="item_title">
            <div class="item-text title2">two text</div>
            <img
                class="item-img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Arrow-down.svg/1200px-Arrow-down.svg.png"
                alt="description about photo"
                data-tab-img="title2"
            />
        </div>

        <div class="content block-hidden" data-tab-filter="title2">content 2</div>
    </li>
    <li class="item">
        <div class="item_title">
            <div class="item-text title3">three text</div>
            <img
                class="item-img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Arrow-down.svg/1200px-Arrow-down.svg.png"
                alt="description about photo"
                data-tab-img="title3"
            />
        </div>

        <div class="content block-hidden" data-tab-filter="title3">content 3</div>
    </li>
</ul>
```

```css
.item_title {
    display: flex;
    cursor: pointer;
}

.item_title img {
    margin-left: 10px;
    width: 20px;
    height: auto;
}

.item_title img.rotate {
    transform: rotate(180deg);
}

.block-hidden {
    display: none;
}
```

```javascript
const itemText = document.querySelectorAll('.item-text');
const content = document.querySelectorAll('.content');
const itemImg = document.querySelectorAll('.item-img');

// show only one and close all (with picture)
new Filtab().showOne(itemText, content, 'block-hidden', itemImg, 'rotate');
// show only one and close all (without picture)
new Filtab().showOne(itemText, content, 'block-hidden');
```

-   withChangeText
    Example:

```html
<li class="item">
    <div class="item-text title1">title 1</div>
    <img class="item-img" src="./img.png" data-tab-img="title1" alt="arrow down" />
    <div class="content block-hidden" data-tab-filter="title1">content</div>
</li>
<li class="item">
    <div class="item-text title2">title 2</div>
    <img class="item-img" src="./img.png" data-tab-img="title2" alt="arrow down" />
    <div class="content block-hidden" data-tab-filter="title2">content</div>
</li>
<li class="item">
    <div class="item-text title3">title 3</div>
    <img class="item-img" src="./img.png" data-tab-img="title3" alt="arrow down" />
    <div class="content block-hidden" data-tab-filter="title3">content</div>
</li>
```

```javascript
const itemText = document.querySelectorAll('.item-text');
const content = document.querySelectorAll('.content');
const itemImg = document.querySelectorAll('.item-img');

// titles, content, first text, second text, hidden class, photo, class for rotate photo
new Filtab().showEvery(
    itemText,
    content,
    'first text',
    'second text',
    'block-hidden',
    itemImg,
    'rotate',
);
// titles, content, first text, second text, hidden class
new Filtab().showEvery(itemText, content, 'first text', 'second text', 'block-hidden');
```

-   showNext
    Example:

```html
<ul>
    <li class="item">
        <div class="item-text title1">text 1</div>

        <div class="content block-hidden" data-tab-filter="title1">content 1</div>
    </li>
    <li class="item">
        <div class="item-text title2">text 2</div>

        <div class="content block-hidden" data-tab-filter="title2">content 2</div>
    </li>
    <li class="item">
        <div class="item-text title3">text 3</div>

        <div class="content block-hidden" data-tab-filter="title3">content 3</div>
    </li>
</ul>
```

```javascript
// content should be  after the title itself
const itemText = document.querySelectorAll('.item-text');

new Filtab().showEvery(itemText, 'block-hidden');
```

-   showValid
    Example:

```html
<li class="item">
    <div class="item-text title1">title1</div>
    <div class="content block-hidden" data-tab-filter="title1">content</div>
</li>
<li class="item">
    <div class="item-text title2">title2</div>
    <div class="content block-hidden" data-tab-filter="title2">content</div>
</li>
<li class="item">
    <div class="item-text title3">title3</div>
    <div class="content block-hidden" data-tab-filter="title3">content</div>
</li>
```

```javascript
const itemText = document.querySelectorAll('.item-text');
const content = document.querySelectorAll('.content');

function open() {
    console.log('open!');
}

function close() {
    console.log('close!');
}

// or function can replace to undefined
new Filtab().showEvery(itemText, content, 'block-hidden', close, open);
```

-   filtration
    Example:

```html
<ul class="title-list">
    <li class="title-list-item">
        <div class="title-list-item-text" data-fil-info="green">Green</div>
    </li>
    <li class="title-list-item">
        <div class="title-list-item-text" data-fil-info="red">Red</div>
    </li>
    <li class="title-list-item">
        <div class="title-list-item-text" data-fil-info="yellow">Yellow</div>
    </li>
    <li class="title-list-item">
        <div class="title-list-item-text" data-view-all="view">View all</div>
    </li>
</ul>

<ul class="color-list">
    <li class="color-list-item yellow"></li>
    <li class="color-list-item green"></li>
    <li class="color-list-item yellow"></li>
    <li class="color-list-item yellow"></li>
    <li class="color-list-item red"></li>
    <li class="color-list-item green"></li>
    <li class="color-list-item red"></li>
    <li class="color-list-item red"></li>
    <li class="color-list-item yellow"></li>
    <li class="color-list-item green"></li>
    <li class="color-list-item red"></li>
    <li class="color-list-item yellow"></li>
</ul>
```

```css
.title-list,
.color-list {
    display: flex;
    margin-bottom: 15px;
}

.title-list li {
    user-select: none;
    cursor: pointer;
}

.color-list li {
    width: 25px;
    height: 25px;
}

.color-list li.yellow {
    background-color: yellow;
}
.color-list li.green {
    background-color: green;
}
.color-list li.red {
    background-color: red;
}

.title-list li:not(:first-child),
.color-list li:not(:first-child) {
    margin-left: 10px;
}
```

```javascript
const itemText = document.querySelectorAll('.title-list-item-text');
const filterItem = document.querySelectorAll('.color-list-item');

// you can to end add true for view all
new Filtab().filtration(itemText, filterItem, 'block-hidden');
```
