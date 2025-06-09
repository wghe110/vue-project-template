import axios from 'axios'
import { Message } from 'element-ui';

const instance = axios.create({
  timeout: 35000
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  config.headers.Authorization = localStorage.getItem('token')
  config.url = import.meta.env.VITE_BASE_URL + config.url
  return config;
});

// 响应拦截器
const specialApis = ['/api/catpcha/digitalCaptcha', '/api/system/deblockingAccount/', '/api/validation/role', '/api/system/cscpUserPasswordRule', '/api/ctyun/file/getFileDownload']; // 特殊请求，返回字段不规范
const apiNoError = ['/api/electronicfences/getAreaFenceData', '/api/login/login']
instance.interceptors.response.use((response) => {
  const { status, data } = response
  if (status === 200 || status === 201) {
    const isSpecial = specialApis.some(item => response.config.url.includes(item))
    if (isSpecial) {
      return Promise.resolve(data)
    }

    if (response.config.download) {
      //下载文件
      return Promise.resolve(data)
    }

    if (data.code === 0 || data.code === 200) {
      return Promise.resolve(data.data)
    } else {
      const noError = apiNoError.includes(response.config.url)
      if (noError === false) Message.error(data.msg || '请求失败')
      Promise.reject(data);
    }
  }

  return Promise.reject(response);
}, (error) => {
  const { response = {} } = error;

  const isLogin = location.hash === '#/login'
  if (response.status === 401) {
    if (isLogin) return Promise.reject(response);
    // TODO login
    return 
  }
  if (response.status === 444) {
    return Promise.resolve(response);
  }
  if (error.message.indexOf('timeout') != -1) {
    Message.error('请求超时')
    return Promise.reject(response);
  }
  const url = error.config.url.split('?')[0]
  const isError = !apiNoError.includes(url)
  if (!isLogin && isError) {
    Message.error(response?.data?.message || '请求错误')
  }
  return Promise.reject(response);
})

export default instance;