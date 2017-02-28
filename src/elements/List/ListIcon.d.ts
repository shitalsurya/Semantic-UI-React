import * as React from 'react';

import { SemanticVERTICALALIGNMENTS } from '../..';
import { IconProps } from '../Icon';

interface ListIconProps extends IconProps {
  verticalAlign?: SemanticVERTICALALIGNMENTS;
}

const ListIcon: React.StatelessComponent<ListIconProps>;

export default ListIcon;
