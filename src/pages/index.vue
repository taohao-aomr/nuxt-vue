<template>
  <div>
    <h1>欢迎来到浩师傅的第一个页面</h1>
    <NuxtLayout name="header" />
    <NuxtLink to="/list">进入列表页</NuxtLink>
    <br />
    <br />
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="用户名称">
        <el-input v-model="formInline.userName" placeholder="请输入用户名称" clearable />
      </el-form-item>
      <el-form-item label="用户手机号">
        <el-input v-model="formInline.phone" placeholder="请输入用户手机号" clearable />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="primary" @click="onAdd">新增</el-button>
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
      <el-table-column label="操作" >
        <template #default="{ row }">
          <el-button type="primary" @click="onEdit(row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogVisible" :title="title" width="500" >
      <el-form :model="form" label-width="auto" style="max-width: 600px">
        <el-form-item label="用户名称">
          <el-input v-model="form.userName" placeholder="请输入用户名称" clearable />
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="form.sex">
            <el-radio value="1">男</el-radio>
            <el-radio value="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="用户手机号">
          <el-input v-model="form.phone" placeholder="请输入用户手机号" clearable />
        </el-form-item>
        <el-form-item label="预约时间">
          <el-date-picker v-model="form.appointTime" type="datetime" placeholder="请选择到店时间" style="width: 100%" format="YYYY-MM-DD HH:mm:ss" value-format="YYYY-MM-DD HH:mm:ss"  />
        </el-form-item>
        <el-form-item label="预约地点">
          <el-input v-model="form.appointArea" type="textarea" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="onDialogSubmit">提交</el-button>
          <el-button type="primary" @click="dialogVisible = false"> Cancel </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref, computed, watch } from "vue";

const supabase = useSupabaseClient();

const initFormInline = {
  userName: "",
  phone: "",
}
const formInline = reactive(initFormInline);
const dialogVisible = ref(false);

const initFormData = {
  id: '',
  userName: "",
  phone: "",
  sex: "",
  appointTime: "",
  appointArea: "",
}
const form = reactive(initFormData);

const onSubmit = async () => {

  const { data, error } = await supabase
    .from('USER_INFO')
    .select("*")
    .or(`userName.like.${formInline.userName},phone.eq.${formInline.phone}`)
  tableData.value = data;
};

/**
 * 编辑
 * @param {object} row  当前行数据
 */
const onEdit = (row: any) => {

  Object.assign(form, row);
  Object.assign(formInline, initFormInline)
  dialogVisible.value = true;
};

const onAdd = () => {
  Object.assign(formInline, initFormInline)
  dialogVisible.value = true;
};


const onDialogSubmit = async () => {
  console.log("submit!");

  if (form.id) {
     await supabase
      .from('USER_INFO')
      .update({...form})
      .eq('id', form.id)
      .select()
  } else {
    const { id, ...other } = form;
    await supabase
    .from("USER_INFO")
    .insert([{...other}])
    .select();
  }
 
  dialogVisible.value = false;
  Object.assign(form, initFormData)
  getData();
};

const tableData = ref([] as any);

const getData = async () => {
  const { data, error } = await supabase.from("USER_INFO").select();
  tableData.value = data;
};
const title = computed(() => {
    return form.id ? '编辑' : '新增'
})

watch(dialogVisible, (newValue: boolean) => {
  if (!newValue) {
    Object.assign(form, initFormData)
  }
})


onMounted(() => {
  getData();
});


</script>
<style lang="scss" scoped>
.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}
</style>
