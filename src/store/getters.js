const getters = {
  // 画布
  terminal: state => state.container.terminal,
  activeComponent: state => state.container.activeComponent,
  componentsData: state => state.container.componentsData,
  
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name
}
export default getters
