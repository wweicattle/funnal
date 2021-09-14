

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  render(h) {
    return h("div", { class: "title-contain" }, this.value);
  },
};
</script>

<style scoped lang="scss">
.title-contain {
  height: 40px;
  background: #f0f7ff;
  color: var(--sle-text-color);
  line-height: 40px;
  font-size: 15px;
  font-weight: 600;
  margin: 15px 0;
  padding-left: 15px;
}
</style>
