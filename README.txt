1) Начало - скачайте zip-папку filtab, найдите файл filtab.js и подключите его в ваш главный javascript файл;
Пример:
	import './filtab.js';
	
2) После этого у вас будут доступны методы:
-showEvery - показывает/скрывает контент. Вызывать метод нужно в массиве елементов,
по которым происходит клик. Первым параметром принимает в себя скрытый контент, в котором должен быть data атрибут: data-tab-filter, значение которого должно быть в классе елемента, по которому происходит клик.
Пример без картинки: <li class="item title1">
		title
		<div class="content block-hidden" data-tab-fitler="title1">content</div>
	</li>

	.block-hidden {
	  display: none;
	}
	      
	const item = document.querySelectorAll('.item');
	const itemElements = [...item];
	const content = document.querySelectorAll('.content');
	      
	itemElements.showEvery(content, 'block-hidden');
	      
Вторым параметром (который является необязательным) принимает в себя картинку, которая лежит рядом с елементом, по которому происходит клик, также в картинке должен быть data атрибут: data-tab-img, значение которого также должно быть в классе елемента, по которому происходит клик. Если вы передали картинку, то должны и передать четвертый параметр - это css-класс который будет с этой картинкой взаимодействовать.
Пример с картинкой: <li class="item title1">
		title
		<img class="img" src="./img/img.png" data-tab-img="title1" alt="img" />
		<div class="content block-hidden" data-tab-filter="title1">content</div>
	</li>
	
	.block-hidden {
	  display: none;
	}
	
	.img {
	  transform: rotate(180deg);
	}
	
	.rotate-img {
	  transform: rotate(360deg);
	} 
	
	const item = document.querySelectorAll('.item');
	const itemElements = [...item];
	const content = document.querySelectorAll('.content');
	const img = document.querySelectorAll('.img');
	      
	itemElements.showEvery(content, 'block-hidden', img, 'rotate-img');

-showOne - работает также как и showEvery только при открытии контента все остальные закрываются.
Пример без картинки: <li class="item title1">
		title
		<div class="content block-hidden" data-tab-filter="title1">content</div>
	</li>
	
	.block-hidden {
	  display: none;
	}
	
	const item = document.querySelectorAll('.item');
	const itemElements = [...item];
	const content = document.querySelectorAll('.content');
	      
	itemElements.showOne(content, 'block-hidden');
