<template>
<div class="submission">

  <h1>Submit your technical research works for PEPQA 2019</h1>


      <p>
      Papers are peer-reviewed and selected on the basis of technical quality, topic affinity, and applicability to the industry. Submissions are restricted to a minimum of four and a maximum of six pages, and English or Spanish will be considered for publication. It is important to highlight that, since the first edition, PEPQA's proceedings are indexed by IEEEXplore, SCOPUS, and Thomson's Conference Proceedings Citation Index among others. All papers must be original and not simultaneously submitted to another journal or conference.

PEPQA Committee recommends using the templates available here, and to follow the IEEE editing guidelines here. Other details are reported in the call for papers available on the conference website www.pepqa.co
    </p>

  <div class="row">



    <b-col>
      Paper submission deadline: February 15, 2019.
    </b-col>

    <b-col>
      Paper submission deadline: February 15, 2019.
    </b-col>

    <b-col>
      Paper submission deadline: February 15, 2019.
    </b-col>

    <b-col>
      Paper submission deadline: February 15, 2019.
    </b-col>


  </div>

</div>
</template>

<script>
export default {
  data () {
    return {
      // Note 'isActive' is left out and will not appear in the rendered table
      fields: [ 'first_name', 'last_name', 'age' ],
      items: [
        { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
      ]
    }
  }
}
</script>


<style lang="less" scoped>
.submission{

    background: url('../../assets/submission-bg-pattern.png') left top repeat;
    background-color: #fff;
    font-family: 'Lato', sans-serif !important;
    color: black;
    margin-top: 5px;
    border-radius: 5px;

    h1{
      margin: 1em 1em;
      font-size: 1.35em;
      font-weight: 600;
      text-align: left;
    }
}

.row{

  margin: 0px;
  padding: 0px;

}
.list-group-item{
  text-align: left;
}
</style>
