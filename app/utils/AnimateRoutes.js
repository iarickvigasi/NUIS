import * as React from 'react';
import { AnimatedSwitch } from 'react-router-transition';

type Props = {
  children: React.Node
};

export default (props: Props) => (
  <AnimatedSwitch
    atEnter={{ opacity: 0 }}
    atLeave={{ opacity: 0 }}
    atActive={{ opacity: 1 }}
  >
    {props.children}
  </AnimatedSwitch>
);
