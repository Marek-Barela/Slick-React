import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
  icon: IconProp;
}

const Icon: FC<Props> = (props) => (<FontAwesomeIcon {...props}></FontAwesomeIcon>)

export default Icon;