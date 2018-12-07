<script>
export default {
  name: 'vFooter',
  data(){
    return{

    }
  }
}
</script>


<template>
  <div class="wrapper">
    <footer>
      <div class="row footer-info">

  <b-dropdown id="ddown1" text="Dropdown Button" class="m-md-2">
    <b-dropdown-item>First Action</b-dropdown-item>
    <b-dropdown-item>Second Action</b-dropdown-item>
    <b-dropdown-item>Third Action</b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item>Something else here...</b-dropdown-item>
    <b-dropdown-item disabled>Disabled action</b-dropdown-item>
  </b-dropdown>

      </div>
      <div class="row footer-copyright">
        © Copyright {{ new Date() | moment("YYYY") }} Universidad de los Andes – All rights reserved. Design & Development By Jorge Luis Mayorga Taborda
      </div>
    </footer>
  </div>
</template>

<style scoped lang="less">
  footer{
    display: block;
    width: 100%;
    background-color: white;
    box-sizing: border-box;
    padding: 1em 1.25em;
    margin: 1em 0em;
    border-radius: 0.25em;
  }
</style>


