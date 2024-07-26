<template>
  <div>
    <h1>欢迎来到浩师傅的第一个页面</h1>
    <NuxtLayout name="header" />
    <NuxtLink to="/list">进入列表页</NuxtLink>
    <br />
    <NuxtLink to="/ms">进入MS</NuxtLink>
    <br />
    <br />
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="用户名称" prop="userName">
        <el-input v-model="formInline.userName" placeholder="请输入用户名称" clearable />
      </el-form-item>
      <el-form-item label="用户手机号" prop="phone">
        <el-input v-model="formInline.phone" placeholder="请输入用户手机号" clearable />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handlerSearch">查询</el-button>
        <el-button type="primary" @click="handlerAdd">新增</el-button>
      </el-form-item>
    </el-form>

    <!-- 表格 -->
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="userName" label="名称" />
      <el-table-column prop="sex" label="性别" />
      <el-table-column prop="phone" label="手机号" />
      <el-table-column prop="createTime" label="创建时间" />
      <el-table-column prop="appointTime" label="预约时间" />
      <el-table-column prop="appointArea" label="预约地点" />
      <el-table-column label="操作">
        <template #default="{ row }">
          <el-button type="primary" @click="handlerEdit(row)">编辑</el-button>
          <el-button type="primary" @click="handlerDelete(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row justify="end">
      <el-pagination v-model:current-page="current" size="small" background layout="total,prev, pager, next"
        :total="total || 0" :page-size="pageSize" @change="handleChangePage" />
    </el-row>

    <el-dialog :model-value="dialogVisible" @close="handleClose" :title="title" width="500">
      <el-form ref="ruleFormRef" :model="form" label-width="auto" style="max-width: 600px" :rules="rules">
        <el-form-item label="用户名称" prop="userName" required>
          <el-input v-model="form.userName" placeholder="请输入用户名称" clearable />
        </el-form-item>
        <el-form-item label="性别" prop="sex" required>
          <el-radio-group v-model="form.sex">
            <el-radio :value="1">男</el-radio>
            <el-radio :value="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="用户手机号" prop="phone" required>
          <el-input v-model="form.phone" placeholder="请输入用户手机号" maxlength="11" clearable />
        </el-form-item>
        <el-form-item label="预约时间" prop="appointTime" required>
          <el-date-picker v-model="form.appointTime" type="datetime" placeholder="请选择到店时间" style="width: 100%"
            format="YYYY-MM-DD HH:mm:ss" value-format="YYYY-MM-DD HH:mm:ss" />
        </el-form-item>
        <el-form-item label="预约地点" prop="appointArea">
          <el-input v-model="form.appointArea" type="textarea" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button :loading="confirmLoading" @click="handlerDialogSubmit(ruleFormRef)">提交</el-button>
          <el-button type="primary" @click="handleClose"> 取消 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref, computed, onMounted } from "vue";
import { RESPONSE_STATUS_CODE } from '~/enum'
import { ElMessage, ElMessageBox, type FormInstance, type FormRules } from 'element-plus'

const current = ref(1) // 当前页
const pageSize = ref(10) // 每页条数
const total = ref(0) //
const tableData = ref([]);
type INIT_FORM = {
  userName: string,
  phone: string
}

const initFormInline = () => ({
  userName: "",
  phone: "",
})
const formInline = reactive<INIT_FORM>(initFormInline());
const dialogVisible = ref(false);
const confirmLoading = ref(false)

type INIT_FORM_DATA = {
  id?: string,
  userName: string,
  phone: string,
  sex: string,
  appointTime: string,
  appointArea: string,
}

const initFormData = () => ({
  userName: "",
  phone: "",
  sex: "",
  appointTime: "",
  appointArea: "",
})
const form = reactive<INIT_FORM_DATA>(initFormData());

const ruleFormRef = ref<FormInstance>()


// 表单规则校验
const rules = reactive<FormRules>({
  userName: [
    { required: true, message: '请输入用户名称', trigger: 'blur' },
    { min: 1, max: 12, message: '长度1-12个字符', trigger: 'blur' }
  ],
  phone: [
    { required: true, message: '请输入用户手机号', trigger: 'blur' },
    { min: 11, max: 11, message: '长度11个字符', trigger: 'blur' }
  ],
  sex: [
    { required: true, message: '请选择用户性别', trigger: 'blur' },
  ],
  appointTime: [
    { required: true, message: '请选择预约时间', trigger: 'blur' },
  ],
})

/**
 * 编辑
 * @param {object} row  当前行数据
 */
const handlerEdit = (row: INIT_FORM_DATA) => {
  Object.assign(form, {
    id: row.id,
    userName: row.userName,
    phone: row.phone,
    sex: row.sex,
    appointTime: row.appointTime,
    appointArea: row.appointArea,
  });
  Object.assign(formInline, initFormInline())
  dialogVisible.value = true;
};

const handlerAdd = () => {
  Object.assign(form, initFormData());
  Object.assign(formInline, initFormInline())
  dialogVisible.value = true;
};


// 请求列表
const { refresh } = await useFetch(
  '/api/list',
  {
    query: Object.assign(formInline, { current, pageSize }),
    watch: [current, pageSize],
    // 处理响应数据
    onResponse: ({ response }) => {
      const { code, msg, message, data } = response._data
      if (code !== RESPONSE_STATUS_CODE.SUCCESS) {
        ElMessage.error(msg || message)
      }
      tableData.value = Array.isArray(data.dataList) ? data.dataList : []
    }
  }
)

onMounted(async () => {
  refresh()
});


const handlerSearch = async () => {
  current.value = 1
  refresh()
};

const handleClose = () => {
  dialogVisible.value = false;
  Object.assign(form, initFormData())
  ruleFormRef.value?.resetFields()
}

const handlerDialogSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid) => {
    if (valid) {
      confirmLoading.value = true
      await $fetch('/api/list', {
        method: !!form.id ? 'put' : 'post',
        body: Object.assign(form, { id: form.id })
      })
        .then(({ code, msg }) => {
          if (code === RESPONSE_STATUS_CODE.SUCCESS) {
            ElMessage.success('操作成功')
            handleClose()
            refresh()
          } else {
            ElMessage.error(msg)
          }
        })
        .finally(() => {
          confirmLoading.value = false
        })
    }
  })
};



/**
 * 删除
 */
const handlerDelete = (row: Object) => {
  ElMessageBox.confirm('确认要删除当前数据吗?', '温馨提示', {
    type: 'warning',
    beforeClose: async (action, instance, done) => {
      if (action === 'confirm') {
        instance.confirmButtonLoading = true
        await $fetch('/api/list', {
          method: 'delete',
          body: { id: row.id }
        })
          .then(({ code, msg }) => {
            if (code === RESPONSE_STATUS_CODE.SUCCESS) {
              ElMessage.success('删除成功')
              refresh()
            } else {
              ElMessage.error(msg)
            }
            done()
          })
          .finally(() => {
            instance.confirmButtonLoading = false
          })
      } else {
        done()
      }
    }
  })
}

const title = computed(() => {
  return form.id ? '编辑' : '新增'
})

// 改变分页时回调
const handleChangePage = (currentPage: number, page: number) => {
  current.value = currentPage
  pageSize.value = page
}



</script>
<style lang="scss" scoped>
.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}
</style>
