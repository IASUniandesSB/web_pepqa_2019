<template>
<div class="info">

  <div class="row">
    <b-col col lg="8">
      <div class="">
      <h1 >
        IEEE Workshop on Power Electronics and Power Quality Applications
      </h1>
      </div>
    </b-col>
    <b-col col lg="4"> SLIDER DE SPONSORS</b-col>
  </div>

  <div class="row">
    <b-col col lg="3">
      <img src="../../assets/pepqalogo.gif" width="180px">
      <button type="button" class="btn btn-success" style="max-width:10em">
        <i class="far fa-file-alt"></i>
        <h3>SUBMIT YOUR PAPER</h3>
      </button>
      <button type="button" class="btn btn-success" style="max-width:10em;background-color: #305f3a;">
        <i class="far fa-file-alt"></i>
        <h3>DOWNLOAD <br> CALL FOR PAPER</h3>
      </button>
    </b-col>
    <b-col col lg="6">

      <p>
        The 4th International IEEE Workshop on Power Electronics and Power Quality Applications will be held on
        <strong style="font-weight:900">
           {{ DEADLINES.conference.from.month }}
           {{ DEADLINES.conference.from.day }} to
           {{ DEADLINES.conference.to.day }},
           {{ DEADLINES.conference.from.year }}
        </strong>
        , at
        {{ LOCATION.venue.name.long }}
        <br>
        <br>
        This biannual workshop provides a space for students, academics,
        and industry professionals to collaborate on meeting the ever-increasing
        power electronics and power quality challenges in the Latin America region.
        <br>
        <br>
        The workshop covers a range of topics, including power electronics (PE) converters, adjustable speed drives,
        PE in transmission and distribution, power quality (PQ) analysis, PQ design and modeling, and simulation & education in PE/PQ.
      </p>

    </b-col>
    <b-col col lg="3">

      <div class="well">

        <strong style="font-weight:800"> Submit your technical research works for PEPQA 2019</strong>

        <br>
        <ul>
          <li> + Proceedings are going to be indexed by IEEE Xplore, and they will be submitted to SCOPUS and Thompson's Conference Proceedings Citation Index.</li>
          <li> + Top papers presented at this Conference will be eligible for review for inclusion in the IEEE Transactions on Industry Applications or the Industry Applications Magazine.</li>
          <li> + Paper submission deadline: February 15, 2019</li>
        </ul>

      </div>

    </b-col>
  </div>

</div>
</template>




<script>
// ------------------------------------------------------- //
// -- Config & Settings ---------------------------------- //
// ------------------------------------------------------- //
  const ieeeLinksJSON = require('@/config/IEEE_LINKS.json');
  const socialLinksJSON = require('@/config/Contact_Info/SOCIAL_LINKS.json');
  const locationJSON = require('@/config/Event_Info/LOCATION.json');
  const deadlinesJSON = require('@/config/Deadlines_Info/DEADLINES.json');
// ------------------------------------------------------- //



export default {


  name: 'info',

  data(){
    return{
      DEADLINES : deadlinesJSON,
      LOCATION : locationJSON
    }
  }



}
</script>

<style lang="less" scoped>
.info{
    background: url('../../assets/info-bg-pattern.png');
    background-repeat: no-repeat;
    margin-top: 5px;
    border-radius: 5px;
    font-family: 'Lato', sans-serif !important;
}
.row{
  color: black;
}
h1{
    font-size: 32px;
    padding: 0.5em 0em;
    padding-left: 0.25em;
    text-align: left;
    font-weight: 400;
    line-height: 100%;
}
h3{
  font-size: 10px;
}
p{
  text-align: justify;
    text-justify: inter-word;
    font-size: 16px;
    word-break: keep-all;
}
.well{
      background-color: #305f3a;
    color: #fff;
        min-height: 20px;
    padding: 19px;
    margin-bottom: 20px;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    text-align: left;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.05);

    ul li{
      font-size: 10px;
    }
}
button{
  margin: 1em 0em;
  width: 10em;
}
</style>
