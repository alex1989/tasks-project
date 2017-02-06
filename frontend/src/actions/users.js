import make_endpoint from './entryPoint';
import ajaxPromise from './ajaxPromise';

const loginUser = (user) =>
  ajaxPromise({
    url: make_endpoint('/api/auth/login/'),
    type: 'POST',
    data: user
  });

const userApi = {
    loginUser
};

export default userApi;