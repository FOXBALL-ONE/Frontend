<template>
  <a-card>
    <!-- 个人信息展示部分 -->
    <div v-if="!isEditing">
      <a-space style="display: flex; justify-content: center; margin-bottom: 20px;">
        <a-avatar :size="64" :src="User.avatar"/>
      </a-space>
      <a-descriptions title="用户信息">
        <a-descriptions-item label="用户名">{{ User.name }}</a-descriptions-item>
        <a-descriptions-item label="邮箱地址">{{ User.email }}</a-descriptions-item>
        <a-descriptions-item label="身份类型">{{ User.identityType }}</a-descriptions-item>
        <a-descriptions-item label="学院">{{ User.college }}</a-descriptions-item>
        <a-descriptions-item label="年级">{{ User.grade }}</a-descriptions-item>
        <a-descriptions-item label="班级">{{ User.class }}</a-descriptions-item>
        <a-descriptions-item label="专业">{{ User.major }}</a-descriptions-item>
        <a-descriptions-item label="地址">{{ User.address }}</a-descriptions-item>
      </a-descriptions>
      <div class="action-buttons">
        <a-button type="primary" @click="startEdit">修改信息</a-button>
      </div>
    </div>

    <!-- 个人信息编辑表单 -->
    <div v-else>
      <a-form
          ref="formRef"
          :model="editForm"
          :rules="rules"
          layout="vertical"
      >
        <div style="display: flex; justify-content: center; margin-bottom: 20px;">
          <a-upload
              v-model:file-list="fileList"
              :before-upload="beforeUpload"
              :show-upload-list="false"
              action="/api/upload"
              class="avatar-uploader"
              list-type="picture-circle"
              name="avatar"
              @change="handleAvatarChange"
          >
            <img v-if="editForm.avatar" :src="editForm.avatar" alt="avatar" class="avatar-image"/>
            <div v-else>
              <plus-outlined/>
              <div style="margin-top: 8px">上传头像</div>
            </div>
          </a-upload>
        </div>

        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="用户名" name="name">
              <a-input v-model:value="editForm.name"/>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="邮箱地址" name="email">
              <a-input v-model:value="editForm.email"/>
            </a-form-item>
          </a-col>
        </a-row>

        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="身份类型" name="identityType">
              <a-select v-model:value="editForm.identityType">
                <a-select-option value="学生">学生</a-select-option>
                <a-select-option value="教师">教师</a-select-option>
                <a-select-option value="管理员">管理员</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="学院" name="college">
              <a-input v-model:value="editForm.college"/>
            </a-form-item>
          </a-col>
        </a-row>

        <a-row :gutter="16">
          <a-col :span="8">
            <a-form-item label="年级" name="grade">
              <a-select v-model:value="editForm.grade">
                <a-select-option value="大一">大一</a-select-option>
                <a-select-option value="大二">大二</a-select-option>
                <a-select-option value="大三">大三</a-select-option>
                <a-select-option value="大四">大四</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="班级" name="class">
              <a-input v-model:value="editForm.class"/>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="专业" name="major">
              <a-input v-model:value="editForm.major"/>
            </a-form-item>
          </a-col>
        </a-row>

        <a-form-item label="地址" name="address">
          <a-textarea v-model:value="editForm.address" :rows="2"/>
        </a-form-item>

        <div class="action-buttons">
          <a-space>
            <a-button type="primary" @click="handleSubmit">保存</a-button>
            <a-button @click="cancelEdit">取消</a-button>
          </a-space>
        </div>
      </a-form>
    </div>
  </a-card>
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue';
import type {FormInstance} from 'ant-design-vue';
import {message} from 'ant-design-vue';
import {PlusOutlined} from '@ant-design/icons-vue';
import type {RcFile, UploadChangeParam} from 'ant-design-vue/es/upload/interface';

interface UserProps {
  avatar: string;
  name: string;
  email: string;
  identityType: string;
  college: string;
  grade?: string;
  class?: string;
  major?: string;
  address?: string;
}

const User = ref<UserProps>({
  avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=1',
  name: '张三',
  email: '114514@gmail.com',
  identityType: '学生',
  college: '计算机学院',
  grade: '大三',
  class: '计算机科学与技术',
  major: '软件工程',
  address: '浙江省杭州市西湖区文塘路18号',
});

const isEditing = ref(false);
const formRef = ref<FormInstance>();
const fileList = ref([]);
const editForm = reactive<UserProps>({...User.value});

const rules = {
  name: [{required: true, message: '请输入用户名', trigger: 'blur'}],
  email: [
    {required: true, message: '请输入邮箱地址', trigger: 'blur'},
    {type: 'email', message: '请输入有效的邮箱地址', trigger: 'blur'}
  ],
  identityType: [{required: true, message: '请选择身份类型', trigger: 'change'}],
  college: [{required: true, message: '请输入学院', trigger: 'blur'}],
};

const beforeUpload = (file: RcFile) => {
  const isImage = file.type.startsWith('image/');
  if (!isImage) {
    message.error('只能上传图片文件！');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('图片大小不能超过 2MB！');
  }
  return isImage && isLt2M;
};

const startEdit = () => {
  Object.assign(editForm, User.value);
  isEditing.value = true;
};

const cancelEdit = () => {
  isEditing.value = false;
  formRef.value?.resetFields();
};

const handleAvatarChange = (info: UploadChangeParam) => {
  if (info.file.status === 'done') {
    // 这里应该使用实际的上传接口返回的URL
    editForm.avatar = URL.createObjectURL(info.file.originFileObj as Blob);
    message.success('头像上传成功');
  } else if (info.file.status === 'error') {
    message.error('头像上传失败');
  }
};

const handleSubmit = async () => {
  try {
    await formRef.value?.validate();
    // 这里应该调用实际的API保存数据
    Object.assign(User.value, editForm);
    message.success('保存成功');
    isEditing.value = false;
  } catch (error) {
    message.error('请检查表单填写是否正确');
  }
};
</script>

<style scoped>
.action-buttons {
  margin-top: 24px;
  display: flex;
  justify-content: center;
}

.avatar-uploader {
  display: flex;
  justify-content: center;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

:deep(.ant-upload-select) {
  width: 100px !important;
  height: 100px !important;
  border-radius: 50% !important;
}

:deep(.ant-form-item) {
  margin-bottom: 16px;
}

:deep(.ant-card-body) {
  padding: 24px;
}

:deep(.ant-input-textarea) {
  width: 100%;
}
</style>