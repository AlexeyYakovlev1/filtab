# Filtab.js
Filtab - library for show/hide content on website.

# Start
You will must download zip-folder filtab, find file filtab.js and connected him in your main javascript file.

Example:
```sh
import './node_modules/filtab/bundle.min.js';
```

After that, you will have access to methods:
*   showEvery - show/hide content. Call method need in array elements,
by which happens click. First param acceps to yourself hide content, by which should be data atribute: data-tab-filter, value which should be in class element, by which happens click.
Example without picture:

```html
	<li class="item">
        <div class="item-text title1">title</div>
        <div class="content block-hidden" data-tab-filter="title1">content</div>
    </li>
    <li class="item">
        <div class="item-text title2">title</div>
        <div class="content block-hidden" data-tab-filter="title2">content</div>
    </li>
    <li class="item">
        <div class="item-text title3">title</div>
        <div class="content block-hidden" data-tab-filter="title3">content</div>
    </li>
```
```css
	.block-hidden {
	  display: none;
	}
```
	     
```javascript
	const itemText = document.querySelectorAll('.item-text');
	const itemTextElements = [...itemText];
	const content = document.querySelectorAll('.content');
	      
	itemTextElements.showEvery(content, 'block-hidden');
```

Second param (which is an optional) takes to yourself picture, which lies next to the element, by which happens click, also in the picture should be data atribute: data-tab-img, value which also should be in class element, by which happens click. If you conveyed picture, then they must pass the fourth parameter - this is the css class that will interact with this picture.
Example with picture:

```html
	<li class="item">
		<div class="item-text title1">title</div>
		<img class="img" src="./img/img.png" data-tab-img="title1" alt="img" />
		<div class="content block-hidden" data-tab-filter="title1">content</div>
	</li>
	<li class="item">
		<div class="item-text title2">title</div>
		<img class="img" src="./img/img.png" data-tab-img="title2" alt="img" />
		<div class="content block-hidden" data-tab-filter="title2">content</div>
	</li>
	<li class="item">
		<div class="item-text title3">title</div>
		<img class="img" src="./img/img.png" data-tab-img="title3" alt="img" />
		<div class="content block-hidden" data-tab-filter="title3">content</div>
	</li>
```

```css
	.block-hidden {
	  display: none;
	}
	
	.img {
	  transform: rotate(180deg);
	}
	
	.rotate-img {
	  transform: rotate(360deg);
	} 
```

```javascript
	const itemText = document.querySelectorAll('.item-text');
	const itemTextElements = [...itemText];
	const content = document.querySelectorAll('.content');
	const img = document.querySelectorAll('.img');
	      
	itemTextElements.showEvery(content, 'block-hidden', img, 'rotate-img');
```

* showOne - work also how and showEvery only when opening content
all next closed.
Example without picture:

```html
	<li class="item">
		<div class="item-text title1">title</div>
		<div class="content block-hidden" data-tab-filter="title1">content</div>
	</li>
	<li class="item">
		<div class="item-text title2">title</div>
		<div class="content block-hidden" data-tab-filter="title2">content</div>
	</li>
	<li class="item">
		<div class="item-text title3">title</div>
		<div class="content block-hidden" data-tab-filter="title3">content</div>
	</li>
```

```css
	.block-hidden {
	  display: none;
	}
```	

```javascript
	const itemText = document.querySelectorAll('.item-text');
	const itemTextElements = [...itemText];
	const content = document.querySelectorAll('.content');
	      
	itemTextElements.showOne(content, 'block-hidden');
```

* changeText - works the same as showEvery only when 
opening the content changes the text and returns the initial text on closing. First param takes content, which need show/hide, second param takes in yourself initial header text, the third parameter is the text to which you want to change the initial, the fourth parameter is the css class that shows/hides the content. It also accepts a picture and a class that will interact with it, picture must takes in yourself data atribute - data-tab-img, which have value which have in class title.
Example without picture:

```html
	<li class="item">
        <span class="item-text title1"></span>
        <div class="content block-hidden" data-tab-filter="title1">content</div>
    </li>
	<li class="item">
        <span class="item-text title2"></span>
        <div class="content block-hidden" data-tab-filter="title2">content</div>
    </li>
	<li class="item">
        <span class="item-text title3"></span>
        <div class="content block-hidden" data-tab-filter="title3">content</div>
    </li>
```

```css
	.block-hidden {
		display: none;
	}
```

```javascript
	const titles = document.querySelectorAll('.item-text');
	const titlesElements = [...titles];
	const content = document.querySelectorAll('.content');

	titles.forEach(title => {
		title.textContent = 'first text';

		titlesElements.changeText(content, 'first text', 'change text', 'block-hidden');  
	})
```

Example with picture:
```html
	<li class="item">
        <div class="item-text title1"></div>
        <img class="item-img" src="./img.png" data-tab-img="title1" alt="arrow down" />
        <div class="content block-hidden" data-tab-filter="title1">content</div>
	</li>
    <li class="item">
        <div class="item-text title2"></div>
    	<img class="item-img" src="./img.png" data-tab-img="title2" alt="arrow down" />
        <div class="content block-hidden" data-tab-filter="title2">content</div>
    </li>
    <li class="item">
        <div class="item-text title3"></div>
        <img class="item-img" src="./img.png" data-tab-img="title3" alt="arrow down" />
        <div class="content block-hidden" data-tab-filter="title3">content</div>
    </li>
```

```css
	.block-hidden {
		display: none;
	}

	.item {
		max-width: 200px;
		cursor: pointer;
		display: flex;
		justify-content: space-between;
	}

	.img-rotate {
		transform: rotate(180deg);
	}
```

```javascript
	const itemText = document.querySelectorAll('.item-text');
	const itemTextElements = [...itemText];
	const content = document.querySelectorAll('.content');
	const itemImg = document.querySelectorAll('.item-img');

	itemText.forEach(text => {
		text.textContent = 'first text';

		itemTextElements.changeText(content, 'first text', 'change text', 'block-hidden', itemImg, 'img-rotate');
	})
```

* showNext - works the same as showEvery only accepts in yourself
one param- is css-class, which hide/show content. But content should be  after the title itself.
Example without picture:

```html
	<li class="item">
        <span class="item-text">title1</span>
        <div class="content block-hidden">content</div>
    </li>
    <li class="item">
        <span class="item-text">title2</span> 
        <div class="content block-hidden">content</div>
    </li>
    <li class="item">
        <span class="item-text">title3</span> 
        <div class="content block-hidden">content</div>
    </li>
```

```css
	.block-hidden {
    	display: none;
	}
```

```javascript
	const titles = document.querySelectorAll('.item-text');
	const titlesElements = [...titles];

	titlesElements.showNext('block-hidden');
```
