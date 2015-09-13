import $ from 'jquery'

export function helloWorld(selector) {
	var element = $(selector)

	element.text('Hello World');
}
