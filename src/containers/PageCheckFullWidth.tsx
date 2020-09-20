import React from 'react'
import {connect} from 'react-redux'
import {setWindowSize} from '../redux/global/actions'
import { AppState } from "../redux";
import { WindowState, } from '../redux/global/types';

interface AppProps {
  setWindowSize:typeof setWindowSize;
    windowDuck: WindowState;
    children: React.ReactNode;
}


type ComponentState = {
    sideMenuVisible:boolean;
    subMenuVisible:boolean;
    hiddenNonLoginVisible:boolean;
}


class PageCheck extends React.Component<AppProps, ComponentState> {

  state: ComponentState;
  constructor(props: AppProps) {
    super(props);
    this.state = {
        sideMenuVisible: false,
        subMenuVisible: false,
        hiddenNonLoginVisible: false,
    };
  }

componentDidMount = () => {
    this._updateWindowDimensions();
    window.addEventListener('resize', this._updateWindowDimensions);
};

componentWillUnmount = () => {
    window.removeEventListener('resize', this._updateWindowDimensions);
};

_updateWindowDimensions = () => {
    this.props.setWindowSize({
      windowHeight:window.innerHeight,
      windowWidth:window.innerWidth
    })
};

/*
toggleSideMenu = () => {
    this.setState({sideMenuVisible: !this.state.sideMenuVisible})
};

toggleSubMenu = () => {
    this.setState({subMenuVisible: !this.state.subMenuVisible})
};

toggleHiddenNonLoginMenu = () => {
    this.setState({hiddenNonLoginVisible: !this.state.hiddenNonLoginVisible})
};
*/


  render() {
    return (
      <div>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" rel="stylesheet" type='text/css'></link>
        <link href='https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'></link>
        {this.props.children}
      </div>
    );

  }
}



const mapStateToProps = (state:AppState) => ({
  windowDuck: state.globalReducer,  
});

const mapDispathToProps = (dispatch: Function) => ({
  setWindowSize: (screen:WindowState ) => dispatch(setWindowSize(screen)),
});

export default connect(
  mapStateToProps,
  mapDispathToProps
)(PageCheck);
