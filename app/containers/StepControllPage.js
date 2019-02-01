// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ConfigureActions from '../actions/configure';
import StepControll from '../components/StepControll';

function mapStateToProps(state) {
  return {
    serverPath: state.configure.serverPath,
    isServerRunning: state.configure.isServerRunning
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ConfigureActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepControll);
