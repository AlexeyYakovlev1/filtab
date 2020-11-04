# Filtab.js
Filtab - library for show/hide content on website.

# Start
You will must download zip-folder filtab, find file filtab.js and connected him in your main javascript file.

Example:
```sh
import './filtab.js';
```

After that, you will have access to methods:
*   showEvery - show/hide content. Call method need in array elements,
by which happens click. First param acceps to yourself hide content, by which should be data atribute: data-tab-filter, value which should be in class element, by which happens click.
Example without picture:

```sh
	<li class="item title1">
		title
		<div class="content block-hidden" data-tab-fitler="title1">content</div>
	</li>
	<li class="item title2">
		title
		<div class="content block-hidden" data-tab-fitler="title2">content</div>
	</li>
	<li class="item title3">
		title
		<div class="content block-hidden" data-tab-fitler="title3">content</div>
	</li>
```
```sh
	.block-hidden {
	  display: none;
	}
```
	     
```sh
	const item = document.querySelectorAll('.item');
	const itemElements = [...item];
	const content = document.querySelectorAll('.content');
	      
	itemElements.showEvery(content, 'block-hidden');
```

Second param (which is an optional) takes to yourself picture, which lies next to the element, by which happens click, also in the picture should be data atribute: data-tab-img, value which also should be in class element, by which happens click. If you conveyed picture, then they must pass the fourth parameter - this is the css class that will interact with this picture.
Example with picture:

```sh
	<li class="item title1">
		title
		<img class="img" src="./img/img.png" data-tab-img="title1" alt="img" />
		<div class="content block-hidden" data-tab-filter="title1">content</div>
	</li>
	<li class="item title2">
		title
		<img class="img" src="./img/img.png" data-tab-img="title2" alt="img" />
		<div class="content block-hidden" data-tab-filter="title2">content</div>
	</li>
	<li class="item title3">
		title
		<img class="img" src="./img/img.png" data-tab-img="title3" alt="img" />
		<div class="content block-hidden" data-tab-filter="title3">content</div>
	</li>
```

```sh
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

```sh
	const item = document.querySelectorAll('.item');
	const itemElements = [...item];
	const content = document.querySelectorAll('.content');
	const img = document.querySelectorAll('.img');
	      
	itemElements.showEvery(content, 'block-hidden', img, 'rotate-img');
```

* showOne - work also how and showEvery only when opening content
all next closed.
Example without picture:

```sh
	<li class="item title1">
		title
		<div class="content block-hidden" data-tab-filter="title1">content</div>
	</li>
	<li class="item title2">
		title
		<div class="content block-hidden" data-tab-filter="title2">content</div>
	</li>
	<li class="item title3">
		title
		<div class="content block-hidden" data-tab-filter="title3">content</div>
	</li>
```

```sh
	.block-hidden {
	  display: none;
	}
```	

```sh
	const item = document.querySelectorAll('.item');
	const itemElements = [...item];
	const content = document.querySelectorAll('.content');
	      
	itemElements.showOne(content, 'block-hidden');
```

* changeText - works the same as showEvery only when 
opening the content changes the text and returns the initial text on closing. First param takes content, which need show/hide, second param takes in yourself initial header text, the third parameter is the text to which you want to change the initial, the fourth parameter is the css class that shows/hides the content.
Example without picture:

```sh
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

```sh
	.block-hidden {
		display: none;
	}
```

```sh
	const titles = document.querySelectorAll('.item-text');
	const titlesElements = [...titles];
	const content = document.querySelectorAll('.content');

	titles.forEach(title => {
		title.textContent = 'first text';

		titlesElements.changeText(content, 'first text', 'change text', 'block-hidden');  
	})
```

* showNext - works the same as showEvery only accepts in yourself
one param- is css-class, which hide/show content. But content should be  after the title itself.
Example without picture:

```sh
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

```sh
	.block-hidden {
    	display: none;
	}
```

```sh
	const titles = document.querySelectorAll('.item-text');
	const titlesElements = [...titles];

	titlesElements.showNext('block-hidden');
```