import type { Social } from '~/types'

/**
 * @description: 底部备案
 */
export const FooterRecord: Social[] = [
  {
    icon: 'icp.png',
    url: 'https://beian.miit.gov.cn/',
    tip: '皖ICP备2024054186号-1'
  }
]

/**
 * @description: 社交图标
 */
export const FooterSocial: Social[] = [
  {
    icon: 'ri:bar-chart-2-line',
    url: '',
    tip: '网站统计'
  },
  { icon: 'i-ri-github-line', url: 'https://github.com/taohao-aomr', tip: 'Github' },
  { icon: 'i-ri-wechat-line', url: '', tip: '微信' },
  { icon: 'i-ri-mail-line', url: 'HaoT541@163.com', tip: 'Email' },
  { icon: 'i-ri-quill-pen-line', url: '', tip: '博客' }
]
