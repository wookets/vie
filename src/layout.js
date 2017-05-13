
import * as storycardBanner from './widgets/widget-storycard-banner';

export function layout (pageConfig, user) {

	let html = '<div class="vie-grid">';

	// loop over the page config layout object
	pageConfig.layout.forEach((row, rowIndex) => {
		html += '<div class="vie-row">';

		row.forEach((column, columnIndex) => {
			column.widgets.forEach((widget, widgetIndex) => {

				if (widget.type === 'widget-storycard-banner') {
					html += storycardBanner.render(widget, pageConfig, user);
				}
				
			})

		});

		html += '</div>';
	})

	html += '</div>';
	return html;
}
