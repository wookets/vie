
export function render (widgetConfig, pageConfig, user) {
	let html = `<div class="${widgetConfig.type}">`;

	// headline
	html += `<h2>${widgetConfig.headline}</p>`;
	// detail
	html += `<p>${widgetConfig.detail}</p>`;

	html += '</div>';
	return html;
}