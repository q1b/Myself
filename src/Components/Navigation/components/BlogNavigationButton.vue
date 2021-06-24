<script>
import { h } from 'vue'
export default {
  props: {
    show: { required: true },
  },
  data() {
    return { to: '/Blogs' }
  },
  methods: {
    dismiss() {
      this.$emit('update:show', !this.show)
    },
    routerPush() {
      if (this.$router.currentRoute.value.path === '/') {
        this.$router.push('/Blogs')
      } else {
        this.$router.push('/')
      }
    },
  },
  emits: ['update:show'],
  render() {
    return h(
      'button',
      {
        class: [
          !this.show
            ? 'z-40 max-h-11 h-11 py-2 gap-y-2 focus:outline-none '
            : '!max-h-0',
          'flex transition-max-height flex-col place-items-center focus:outline-none',
        ],
        onClick: [this.dismiss, this.routerPush],
      },
      this.$slots.icon()
    )
  },
}
</script>
