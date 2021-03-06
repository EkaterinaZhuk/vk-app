export default {
  render(templateName, model) {
    templateName = templateName + "Template";

    const templateElement = document.getElementById(templateName);
    const templateSourse = templateElement.innerHTML;
    const renderFn = Handlebars.compile(templateSourse);

    return renderFn(model);
  },
};
