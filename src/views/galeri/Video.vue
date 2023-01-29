<template>
  <!-- <div class="about"> -->
  <div class="home">
    <main id="main">      
      <div class="container">
        <div class="section-title" data-aos="fade-in" data-aos-delay="100">
          <h2>Video</h2>
        </div>
        <div class="row" data-aos="fade-up">
          <div class="col" v-for="data in list_data" :key="data.id">
            <iframe width="560" height="315" :src="data.link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <div class="text-center">
          <br><br>
            <button @click="btn_prev" type="button" class="btn btn-secondary" id="pref">
                <!-- <i class="fa fa-arrow-circle-o-left" aria-hidden="true" style="font-size:150%"></i> -->
                <i class="bi bi-arrow-left"></i>
            </button>
            &nbsp;
            <span style="font-size: 85%; color: #a5a5a5">
                <b>{{page_first}} - {{page_last}}</b>
            </span>
            &nbsp;
            <button @click="btn_next" type="button" class="btn btn-secondary" id="next">
                <!-- <i class="fa fa-arrow-circle-o-right" aria-hidden="true" style="font-size:150%"></i> -->
                <i class="bi bi-arrow-right"></i>
            </button>
            <br><br>
        </div>
      </div>

    </main><!-- End #main -->  
  </div>
  <!-- </div> -->
</template>

<script>
  const ADD_URL = URL_APP + "api/v1/publish_diskominfo_video/"
  export default {
    components: {
    },
    data() {
      return {
        form : {
          id : '',
          judul : '',
          deskripsi : '',
          link : '',
          unit_kerja : '',
          status : '',
          createBy : '',
          createAt : '',
        },
        id: '',
        list_data: [],
        page_first: 1,
        page_last: 0,
        cari_value: "",
      };
    },
    methods : {
      getView: function() {
          this.cek_load_data = true;
          fetch(ADD_URL + "view", {
              method: "POST",
              headers: {
              "content-type": "application/json",
              },
              body: JSON.stringify({
                data_ke: this.page_first,
                cari_value: this.cari_value,
              })
          })
          .then(res => res.json())
          .then(res_data => {
              console.log(res_data);
              // console.log('aaaaaaaaaaaaaa')
              this.list_data = res_data.data;
              this.page_last = res_data.jml_data;
              this.cek_load_data = false;
          });
      },
      selectData: function(data) {
        console.log(data);
        this.form = {
            id : data.id,
            judul : data.judul,
            deskripsi : data.deskripsi,
            file : data.file,
            link : data.link,
            unit_kerja : data.unit_kerja,
            status : data.status,
            createBy : data.createBy,
            createAt : data.createAt,
        };
      },
      btn_prev : function(){
              this.cek_load_data = true;
          if(this.page_first>1){
              this.page_first--
          }else{
              this.page_first = 1;
          }
          this.getView();
      },

      btn_next : function(){
          
          if(this.page_first >= this.page_last){
              this.page_first == this.page_last
          }else{
              this.page_first++;
          }
          this.getView();
      },
    },
    mounted() {
      this.getView();
    }
  };
</script>