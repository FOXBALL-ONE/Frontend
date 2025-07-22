<template>
  <div style="text-align: center;"> 注意：开始和结束时间是按照课程的节次来填写的，1代表第一节课，2代表第二节课，以此类推。
  </div>

  <a-table :columns="columns" :data-source="data1">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'id'">
        <span>
          <smile-outlined/>
          申请ID
        </span>
      </template>
      <template v-if="column.key === 'LabId'">
        <smile-outlined/>
        申请实验室号
      </template>
    </template>

  </a-table>
</template>
<script lang="ts" setup>
import {ref} from 'vue';
import {SmileOutlined} from '@ant-design/icons-vue';
import router from "@/router";

let columns = [
  {
    id: '申请ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '实验室号',
    dataIndex: 'LabId',
    key: 'LabId',
  },
  {
    title: '开始时间',
    key: 'startTime',
    dataIndex: 'startTime'
  }, {
    title: '结束时间',
    key: 'endTime',
    dataIndex: 'endTime'
  }, {
    title: '预约日期',
    key: 'orderDate',
    dataIndex: 'orderDate'
  }, {
    title: '状态',
    key: 'status',
    dataIndex: 'status'
  }, {
    title: '审核人',
    key: 'auditor',
    dataIndex: 'auditor',
  }, {
    title: '审核时间',
    key: 'audit_time',
    dataIndex: 'audit_time',
  }, {
    title: '理由',
    key: 'reason',
    dataIndex: 'reason',
  }, {
    title: '备注',
    key: 'remark',
    dataIndex: 'remark',
  }
];


interface RecordData {
  key: string;
  id: string;
  LabId: number;
  startTime: string;
  endTime: string;
  orderDate: string;
  orderTime: string;
  status: string;
  auditor: string;
  audit_time?: string;
  reason: string;
  remark: string;
}

let data1 = ref<RecordData[]>([]);

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
    "satoken": getToken(), // 确保 satoken 为字符串
  },
  redirect: 'follow' as RequestRedirect,
};

fetch("http://localhost:8080/applicationrecord/getAllByUserId", requestOptions)
    .then(response => response.json())
    .then(result => {
      if (result.code === 200) {
        console.log(result.data);
        if (result.data) {
          console.log(result.data);
          data1.value.push(
              ...result.data.map(
                  (item: {
                    id: string;
                    orderTime: string;
                    auditTime: string;
                    status: string;
                    auditor: string;
                    startTime: string;
                    endTime: string;
                    orderDate: string;
                    laboratoryId: string;
                    reason: string;
                    remark: string;
                  }) => ({
                    key: `${item.id}`,
                    id: item.id,
                    startTime: item.startTime,
                    endTime: item.endTime,
                    orderDate: item.orderDate,
                    orderTime: item.orderTime,
                    status: item.status,
                    auditor: item.auditor,
                    audit_time: item.auditTime,
                    reason: item.reason,
                    remark: item.remark,
                    LabId: item.laboratoryId
                    ,
                  })
              )
          );

        }
      }
    })

</script>


