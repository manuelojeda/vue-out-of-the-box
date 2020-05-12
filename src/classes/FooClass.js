import { ref } from '@vue/composition-api'

class Foo {
  bar;

  constructor () {
    this.bar = ref('Foo')
  }

  getter() {
    return {
      bar: this.bar
    }
  }

  handleForm() {
    console.log(
      this.bar
    )
  }
}

export default Foo
