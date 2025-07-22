<template>
  <div>
    <h2>预约审核管理</h2>
    <a-table :columns="columns" :data-source="dataList">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <span>
            <a-button size="small" style="margin-right: 8px" type="primary"
                      @click="handleCheck(record.id, 'pass')">同意</a-button>
            <a-button danger size="small" @click="handleCheck(record.id, 'reject')">拒绝</a-button>
          </span>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';

//定义数据类型
interface CheckData {
  key: string;
  id: string;
  startTime: string;
  endTime: string;
  orderDate: string;
  orderTime: string;
  status: string;
  building: string;
  floor: string;
  labName: string;
  reason: string;
  remark: string;
}

const router = useRouter();
const dataList = ref<CheckData[]>([]);

function getToken() {
  const token = localStorage.getItem("token");
  if (token) return token;
  console.error("Token not found in localStorage");
  router.push("/login");
  return "";
}

const requestOptions: RequestInit = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    "satoken": getToken(),
  },
  redirect: 'follow' as RequestRedirect
};


const columns = [
  {title: '申请ID', dataIndex: 'id', key: 'id'},
  {title: '楼栋', dataIndex: 'building', key: 'building'},
  {title: '楼层', dataIndex: 'floor', key: 'floor'},
  {title: '教室名', dataIndex: 'labName', key: 'classroomName'},
  {title: '开始时间', dataIndex: 'startTime', key: 'startTime'},
  {title: '结束时间', dataIndex: 'endTime', key: 'endTime'},
  {title: '预约日期', dataIndex: 'orderDate', key: 'orderDate'},
  {title: '预约提交时间', dataIndex: 'orderTime', key: 'orderTime'},
  {
    title: '操作',
    key: 'action',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
  }
]

fetch("http://localhost:8080/applicationrecord/getAllUnprocessed", requestOptions)
    .then(response => response.json())
    .then(result => {
      if (result.code == 200) {
        dataList.value.push(
            ...result.data.map(
                // 将箭头移到参数定义的同一行
                (item: {
                  id: string;
                  orderTime: string;
                  status: string;
                  StatusTableId: string;
                  startTime: string;
                  endTime: string;
                  orderDate: string;
                  building: string;
                  floor: string;
                  labName: string;
                  reason: string;
                  remark: string;
                }) => ({
                  key: `${item.id}`,
                  id: item.id,
                  building: item.building,
                  floor: item.floor,
                  labName: item.labName,
                  startTime: item.startTime,
                  endTime: item.endTime,
                  orderDate: item.orderDate,
                  orderTime: item.orderTime,
                  status: item.status,
                  reason: item.reason,
                  remark: item.remark,
                })
            )
        );
      }
    })

async function handleCheck(id: string, action: string) {
  try {

    let endpoint;
    if (action === 'pass') {
      endpoint = '/applicationrecord/checked';
    } else if (action === 'reject') {
      endpoint = '/applicationrecord/reject';
    }
    const response = await fetch(`http://localhost:8080${endpoint}?id=${id}`, requestOptions);
    const result = await response.json();

    if (result.code === 200) {
      const index = dataList.value.findIndex(item => item.id === id);
      if (index !== -1) {
        dataList.value[index].status = action === 'pass'
            ? "审核通过"
            : "审核未通过";
        window.location.reload()
      }
    } else {
    }
  } catch (error) {
    console.error('请求错误:', error);
  }
}


</script>
