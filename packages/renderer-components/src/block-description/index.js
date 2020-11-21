/**
 * WordPress Dependencies
 */
import { Fragment } from '@wordpress/element';
import { autop } from '@wordpress/autop';

/**
 * Internal Dependencies
 */
import HtmlParser from '../html-parser';
import { useFieldRenderContext } from '../field-render/context';

const BlockDesc = () => {
	const { field } = useFieldRenderContext();
	return (
		<Fragment>
			{ field.description && field.description !== '' && (
				<div className="renderer-components-block-description">
					<HtmlParser
						className="renderer-components-block-description__content"
						value={ autop( field.description ) }
					/>
				</div>
			) }
		</Fragment>
	);
};
export default BlockDesc;
