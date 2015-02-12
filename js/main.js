var blueberries = {
	name: 'Blueberries',
	species: 'Vaccinium corymbosum',
	growsOnShrub: true,
	energy: '240 kJ',
	carbs: '14.49 g',
	protein: '0.74 g'
};

var grapes = {
	name: 'Grapes',
	species: 'Vitis vinifera',
	growsOnShrub: false,
	energy: '288 kJ',
	carbs: '18.1 g',
	protein: '0.72 g'
};
var redCurrant = {
	name: 'Red currant',
	species: 'Ribes rubrum',
	growsOnShrub: true,
	energy: '234 kJ',
	carbs: '13.8 g',
	protein: '1.4 g'
};

var fruit = [blueberries, grapes, redCurrant];

var writeFruit = function (fruit) {
	fruit.forEach(function (item) {
		document.write('<div class="unit unit-s-1 unit-m-1-3 island berry">');
		document.write('<h2 class="heading">' + item.name + '</h2>');
		document.write('<dl class="list">');
		document.write('<dt>Species:</dt><dd>' + item.species + '</dd>');
		document.write('<dt>Grows on shrub:</dt><dd>' + item.growsOnShrub + '</dd>');
		document.write('<dt>Energy:</dt><dd>' + item.energy + '</dd>');
		document.write('<dt>Carbohydrates:</dt><dd>' + item.carbs + '</dd>');
		document.write('<dt>Protein:</dt><dd>' + item.protein + '</dd>');
		document.write('</dl>')
		document.write('</div>')
	});
};

writeFruit(fruit);
