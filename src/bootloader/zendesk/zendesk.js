import '../global.less';
import './zendesk.less';

import * as twb from '../../utils/content';

twb.observe(
  'section.ticket',
  section => {
    const title = section.querySelector('input[name=subject]');

    const button = twb.create({
      task() {
        return {
          name: title.value,
        };
      },
      anchor: 'screen',
    });

    const container = section.querySelector('footer > .pane');
    const previous = container.querySelector('.post-save-actions');
    twb.insert(button, previous);

    return button;
  },
  button => {
    twb.remove(button);
  }
);
