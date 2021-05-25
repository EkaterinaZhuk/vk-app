export default{
	render(templateName, data) {
		templateName = templateName + 'Template';
		const templateElement = document.querySelector(#templateName);
		const templateSourse = templateElement.innerHTML;
		const renderFn = Handlebars.compile(templateSourse);

		return renderFn(data);
	}
};

