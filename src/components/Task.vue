<template>
  <div @dblclick="$emit('toggle-reminder', task?.id)" :class="[task?.reminder && 'reminder', 'task']">
    <h3>
      {{ task?.text }}
      <!-- $emit() pushes events to the parent component -->
      <font-awesome-icon :icon="['fas', 'times']" color="red" @click="$emit('delete-task', task?.id)" />
    </h3>
    <p>{{ task?.day }}</p>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "Task",
  props: {
    task: Object,
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style scoped>
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>