<template>
  <div>
    <button @click="btnClick">{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    text: String,
  },
  methods: {
    btnClick() {
      this.$emit('btnClick', this.text);
    }
  },
}
</script>