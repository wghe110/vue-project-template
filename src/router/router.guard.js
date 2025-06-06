import router from './index'
import store from '../store/index'
import loadMenusFn from './preload/menus'

const ignorePath = [
  '/login',
  '/third-login'
];

router.beforeEach(async (to, from, next) => {
  const { path, name } = to;
  if(ignorePath.includes(path) || name === '404') {
    next();
    return;
  }

  if(store.state.inited === false) {
    await Promise.allSettled([
      loadMenusFn()
    ])
    store.commit('setInited', true)
    next({ ...to, replace: true })
    return;
  }
  next();
})