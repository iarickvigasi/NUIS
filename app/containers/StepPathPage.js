// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import StepPath from '../components/StepPath';
import * as ConfigureActions from '../actions/configure';

function mapStateToProps(state) {
  return {
    serverPath: state.configure.serverPath
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ConfigureActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepPath);
