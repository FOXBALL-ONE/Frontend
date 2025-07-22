<script lang="ts" setup>
import {ref, watch} from 'vue';
import {SmileOutlined} from '@ant-design/icons-vue';
import type {Dayjs} from 'dayjs';
import {useRouter} from 'vue-router';

const router = useRouter();

const value1 = ref<Dayjs>();

const columns = [
  {
    title: '序号',
    dataIndex: 'key',
    key: 'key',
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
    title: '空闲情况',
    key: 'status',
    dataIndex: 'status',
  }, {
    title: '实验室类型',
    key: 'type',
    dataIndex: 'type',
  }, {
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
    title: '联系方式',
    key: 'phone',
    dataIndex: 'phone',
  }
  , {
    title: '备注',
    key: 'remark',
    dataIndex: 'remark',
  },
  {
    title: '开始时间',
    key: 'startTime',
    dataIndex: 'startTime',
  }
  , {
    title: '结束时间',
    key: 'endTime',
    dataIndex: 'endTime',
  },
  {
    title: '是否维修',
    key: 'isMaintain',
    dataIndex: 'isMaintain',
  }, {
    title: '维修原因',
    key: 'reason',
    dataIndex: 'reason',
  }
];

// 定义数据项的类型
interface Laboratory {
  key: string;
  building: string;
  floor: string;
  Laboratory: string;
  status: string;
  type: string;
  capacity: string;
  leader: string;
  phone: string;
  remark: string;
  startTime: string;
  endTime: string;
  isMaintain: string;
  reason: string;
}

// 显式指定 ref 的类型
const data1 = ref<Laboratory[]>([]);

function getToken() {
  const token = localStorage.getItem("token");
  if (token) {
    return token;
  } else {
    console.error("Token not found in localStorage");
    router.push("/login")
    return "";
  }
}

watch(
    () => value1.value,
    (_value) => {
      data1.value.length = 0;
      let myHeaders = new Headers();
      myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.5845.97 Safari/537.36 Core/1.116.520.400 QQBrowser/19.2.6473.400");
      myHeaders.append("Accept", "*/*");
      myHeaders.append("Host", "127.0.0.1:8080");
      myHeaders.append("Connection", "keep-alive");
      myHeaders.append("satoken", getToken());

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow' as RequestRedirect,
      };

      const params = new URLSearchParams({
        date: String(_value?.format('YYYY-MM-DD')) + "-00-00"
      });
      console.log(params);

      fetch(`http://127.0.0.1:8080/statustable/getAllLabStatus?${params.toString()}`, requestOptions)
          .then(response => response.json())
          .then(result => {
            if (result.code === 200) {
              console.log(result.data);
              data1.value.push(
                  ...result.data.map(
                      (item: {
                        id: Number;
                        building: string;
                        floor: string;
                        name: string;
                        status: string;
                        type: string;
                        capacity: string;
                        leader: string;
                        phone: string;
                        remark: string;
                        startTime: string;
                        endTime: string;
                        isMaintain: string;
                        reason: string;
                      }) => ({
                        key: item.id,
                        building: item.building,
                        floor: item.floor,
                        name: item.name,
                        status: item.status,
                        type: item.type,
                        capacity: item.capacity,
                        leader: item.leader,
                        phone: item.phone,
                        remark: item.remark,
                        startTime: item.startTime,
                        endTime: item.endTime,
                        isMaintain: item.isMaintain,
                        reason: item.reason,
                      })
                  )
              )
            } else {
              console.log(result);
              alert("获取出错，请稍后再试");
            }
          })
          .catch(error => {
            console.error('请求错误:', error);
          });
    }
);
</script>

<template>
  <a-space :size="12" direction="vertical">
    <a-date-picker v-model:value="value1"/>
  </a-space>
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

