import * as React from 'react';

type Props = {
  children: React.Node
};


export default class App extends React.Component<Props> {
  props: Props;
  constructor(props){
    super(props);
    // populate();
  }
  render() {
    const { children } = this.props;
    return <React.Fragment>{children}</React.Fragment>;
  }
}
