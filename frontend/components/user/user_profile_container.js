import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { logout } from '../../actions/session_actions';
import { fetchUser, updateUser } from '../../actions/user_actions';

const mapStateToProps = (state) => ({
  user: state.user,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchUser: (user) => dispatch(fetchUser(user)),
  updateUser: (user) => dispatch(updateUser(user)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (UserProfile);
