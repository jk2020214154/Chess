<template>

  <ContentBase>
    <p style="text-align: center">人机对局</p>
    <ContentBase>
      <BoardBase />
    </ContentBase>
  </ContentBase>

</template>

<script>

import ContentBase from '../components/ContentBase';
import BoardBase from '../components/BoardBase';


export default {
  name: "ManMachine",
  components: {
    ContentBase,
    BoardBase,
  },
};
</script>



<style scoped>
</style>