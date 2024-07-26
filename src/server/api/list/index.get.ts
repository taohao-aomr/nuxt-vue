
import type { Response, PageResponse } from '~/types'
import { serverSupabaseClient } from '#supabase/server'
import { RESPONSE_STATUS_CODE } from '~/enum'

export default defineEventHandler(async (event): Promise<Response<PageResponse>> => {
  const client = await serverSupabaseClient(event)
  // 获取请求参数
  const { current, pageSize, userName = '', phone = '' } = getQuery(event)

  // 判断参数
  if (!current || !pageSize) {
    return { code: RESPONSE_STATUS_CODE.FAIL, msg: '参数错误' }
  }

  // 计算分页
  const start = (current - 1) * pageSize
  const end = current * pageSize - 1

  // 查询 sql
  let sqlQuery = client
    .from('USER_INFO')
    .select('*', { count: 'exact' })
    .range(start, end)
    .order('created_at', {
      ascending: false
    })

  // 判断查询参数
  if (userName) {
    sqlQuery = sqlQuery.like('userName', `%${userName}%`)
  }
  if (phone) {
    sqlQuery = sqlQuery.eq('phone', phone)
  }

  // 请求列表
  const { data, error, count } = await sqlQuery

  // 判断请求结果
  if (error) {
    throw createError({
      statusCode: RESPONSE_STATUS_CODE.FAIL,
      statusMessage: error.message
    })
  }

  // 请求成功
  return {
    code: RESPONSE_STATUS_CODE.SUCCESS,
    message: '请求成功',
    data: {
      dataList: data,
      total: count
    }
  }
})
