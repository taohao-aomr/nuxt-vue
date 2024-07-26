import { RESPONSE_STATUS_CODE } from '~/enum'

/**
 * @description: 响应体结构
 */
export type Response<T = any> = {
  code: RESPONSE_STATUS_CODE // 状态码
  msg: string // 状态信息
  data?: T // 数据
}

/**
 * @description: 分页列表
 */
export type PageResponse<T = any> = {
  list: T[]
  total: number | null // 总页数
}

/**
 * @description: 分页参数
 */
export type PaginationParams = {
  current: number // 当前页
  pageSize: number // 每页条数
}


/**
 * @description: 社交图标类型
 */
export type Social = {
  icon: string // 图标
  url?: string // 跳转地址
  tip?: string // tip 文案
}
