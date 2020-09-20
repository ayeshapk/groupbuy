import React from 'react'
import {connect} from 'react-redux'
import {setWindowSize} from '../redux/global/actions'
import { ReactStyle } from "../theme/css";
import { AppState } from "../redux";
import { WindowState, } from '../redux/global/types';

const MOBILE_THRESHOLD = 800;

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
    //let isMobileSize = (this.props.windowDuck.windowWidth <= MOBILE_THRESHOLD);
    //console.log('APP CHECK >>> windowDuck',this.props.windowDuck ,isMobileSize)
    return (
      <div style={styles.page}>
        <link href='https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'></link>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" rel="stylesheet"></link>
        {this.props.children}
      </div>
    );

  }
}

const styles: ReactStyle = {
  page: {
    width: '100%',
    height: 'auto',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto'
  },
  text: {
    textAlign: 'center'
  },
};

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
