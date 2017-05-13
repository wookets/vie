
import {layout} from './layout';

describe('layout', () => {

	it('should render a vie-grid wrapper div', () => {
		const pageConfig = require('./__mockdata__/page-target.json');
		const html = layout(pageConfig);
		expect(html).toContain('class="vie-grid"');
	});

	it('should render a basic layout', () => {
		const pageConfig = require('./__mockdata__/page-target.json');
		const html = layout(pageConfig);
		expect(html).toContain('<div class="widget-storycard-banner">');
	})

});