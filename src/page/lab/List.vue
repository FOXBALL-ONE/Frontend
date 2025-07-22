<template>
  <a-table :columns="columns" :data-source="data1">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'building'">
        <span>
          <smile-outlined/>
          楼栋
        </span>
      </template>
    </template>

    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'building'">
      </template>
      <template v-else-if="column.key === 'floor'">
        <span>{{ record.floor }}</span>
      </template>
      <template v-else-if="column.key === 'classroomName'">

      </template>
    </template>
  </a-table>
</template>
<script lang="ts" setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {SmileOutlined} from "@ant-design/icons-vue";

const router = useRouter();

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    name: '楼栋',
    dataIndex: 'building',
    key: 'building',
  },
  {
    title: '楼层',
    dataIndex: 'floor',
    key: 'floor',
  },
  {
    title: '实验室名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '状态',
    key: 'status',
    dataIndex: 'status',
  },
  {
    title: '实验室类型',
    key: 'type',
    dataIndex: 'type',
  },
  {
    title: '容量',
    key: 'capacity',
    dataIndex: 'capacity',
  },
  {
    title: '负责人',
    key: 'leader',
    dataIndex: 'leader',
  }
  , {
    title: '手机联系方式',
    key: 'phone',
    dataIndex: 'phone',
  }
  , {
    title: '邮件联系方式',
    key: 'email',
    dataIndex: 'email',
  },
  {
    title: '创建时间',
    key: 'createTime',
    dataIndex: 'createTime',
  },
  {
    title: '更新时间',
    key: 'updatetime',
    dataIndex: 'updatetime',
  },
];

interface Laboratory {
  id: string;
  name: string;
  building: string;
  floor: string;
  status: string;
  type: string;
  capacity: string;
  leader: string;
  phone: string;
  email: string;
  createtime: string;
  updatetime: string;
}

// 显式指定 ref 的类型
let data1 = ref<Laboratory[]>([]);

function getToken() {
  const token = localStorage.getItem("token");
  if (token) {
    return token;
  } else {
    console.error("Token not found in localStorage");
    router.push("/login");
    return ""; // 确保返回值为字符串
  }
}

data1.value.length = 0;
const requestOptions: RequestInit = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    "satoken": getToken(),
  },
  redirect: 'follow' as RequestRedirect,
};

fetch("http://localhost:8080/lab/list", requestOptions)
    .then(response => response.json())
    .then(result => {
      if (result.code === 200) {
        if (result.data) {
          console.log(result.data);
          data1.value.push(
              ...result.data.map(
                  (item: {
                    id: string;
                    name: string;
                    building: string;
                    floor: string;
                    status: string;
                    type: string;
                    capacity: string;
                    leader: string;
                    phone: string;
                    email: string;
                    createtime: string;
                    updatetime: string;
                  }) => ({
                    key: `${item.id}`,
                    id: item.id,
                    name: item.name,
                    building: item.building,
                    floor: item.floor,
                    status: item.status,
                    type: item.type,
                    capacity: item.capacity,
                    leader: item.leader,
                    phone: item.phone,
                    email: item.email,
                    createtime: item.createtime,
                    updatetime: item.updatetime
                  })
              )
          );

        }
      }
    })


</script>



