import { connect } from 'react-redux';
import EditUser from './edit_user';
import { logout } from '../../actions/session_actions';
import { fetchUser, updateUser } from '../../actions/user_actions';

const mapStateToProps = (state) => ({
  user: state.user,
  currentUser: state.session.currentUser,
  errors: state.user.errors
});

const mapDispatchToProps = dispatch => ({
  fetchUser: (user) => dispatch(fetchUser(user)),
  updateUser: (user) => dispatch(updateUser(user)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (EditUser);
