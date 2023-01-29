<template>  
  <div>
    <!-- ======= Team Section ======= -->
    <section id="team" class="team">
      <div class="container">
        <div class="section-title" data-aos="fade-in" data-aos-delay="100">
          <br> <br>
          <h2>Profil Pejabat Struktural</h2>
          <!-- <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> -->
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6" v-for="(data) in list_data" :key="data.id">
            <div class="member" data-aos="fade-up">
              <div class="pic"><img :src="file_path+data.foto" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>{{data.nama}}</h4>
                <span>{{data.jabatan}}</span>
                <div class="social">
                  <a :href="data.twitter" target="_blank"><i class="bi bi-twitter"></i></a>
                  <a :href="data.facebook" target="_blank"><i class="bi bi-facebook"></i></a>
                  <a :href="data.instagram" target="_blank"><i class="bi bi-instagram"></i></a>                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
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
        </div>
      </div>
    </section>
  </div>  
</template>

<script>
  const ADD_URL = URL_APP + "api/v1/publish_diskominfo_profilstruktural/";
  const FILE_LOAD = URL_APP + "uploads/";
export default {
  components: { 

  },
  data() {
    return {
      data_load : false,
      form : {
        id : '',
        foto : '',
        nama: '',
        jabatan: '',        
        facebook: '',
        instagram: '',
        linkedin: '',
      },
      id :'',
      list_data:[],
      page_first: 1,
      page_last: 0,      
      cek_load_data : true,
      file_old: "",
      file_path: FILE_LOAD,

    }
  },
  methods : {
    getView: function() {
      this.cek_load_data = true;
      fetch(ADD_URL + "view", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          // authorization: "kikensbatara " + localStorage.token,
        },
        body: JSON.stringify({
          data_ke: this.page_first,
        }),
      })
        .then((res) => res.json())
        .then((res_data) => {
          this.list_data = res_data.data;
          this.page_last = res_data.jml_data;
          console.log(res_data)
        });
    },
    selectData: function(data) {
        this.form = {
            id : data.id,
            nama : data.nama,
            jabatan : data.jabatan,            
            twitter : data.twitter,            
            facebook : data.facebook,            
            instagram : data.instagram,            
            foto : data.foto,
        };  
    },

    btn_prev : function(){
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
    this.getView()
  }  
}
</script>