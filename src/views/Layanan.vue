<template>
  <!-- <div class="about"> -->
    <div class="home">
      <main id="main">
        <!-- ======= Portfolio Section ======= -->
        <section id="portfolio" class="portfolio">
          <div class="container">

            <div class="section-title" data-aos="fade-in" data-aos-delay="100">
              <h2>Layanan</h2>
            </div>
            <div class="row portfolio-container" data-aos="fade-up">
              <div class="col-lg-4 col-md-6 portfolio-item filter-app" v-for="data in list_data" :key="data.id">
                  <div class="portfolio-wrap">
                    <div class="text-center">
                      <img :src="file_path+data.file" class="img-fluid" alt="">
                    </div>
                    <div class="portfolio-links">
                      <a :href="data.link" target="_blank" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </section><!-- End Portfolio Section -->

      </main><!-- End #main -->  
    </div>
    <!-- </div> -->
</template>

<script>

const ADD_URL = URL_APP + "api/v1/publish_diskominfo_layanan/";
const FILE_LOAD = URL_APP + "uploads/";


export default {

    data() {
        return {
            data_load : false,
            form : {
                id : '',
                judul : '',
                link : '',
                file : '',
                unit_kerja : '',
                status : '',
                createBy : '',
                createAt : '',
            },
            id :'',
            cek_load_data : true,
            file_old: "",
            file_path: FILE_LOAD,

            list_data: [],
            page_first: 1,
            page_last: 0,
            cari_value: "",
        }
    },
    methods: {
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
            this.list_data = res_data.data;
            this.page_last = res_data.jml_data;
            this.cek_load_data = false;
            // console.log(res_data);
        });
    },

    selectData: function(data) {
        console.log(data);
        this.form = {
            id         : data.id,
            judul      : data.judul,
            link       : data.link,
            file       : data.file,
            unit_kerja : data.unit_kerja,
            status     : data.status,
            createBy   : data.createBy,
            createAt   : data.createAt,
        };
      },
      ke_alamat : function(data){
            window.open(data);
        },

    mdl_exit: function() {
      this.judul = "";
      this.uraian = "";
      this.file = "";
      this.file_old = "";
    },

  // ================== PAGINASI ====================
    alertku: function(type, title) {
      this.$swal({
        type: type,
        title: title,
        showConfirmButton: false,
        timer: 800
      });
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

    cari_data : function(){

        this.page_first = 1;
        this.getView();
    },
    onFileSelected: function(event) {
      this.form.file = event.target.files[0];
    },
    convert_tgl: function(dateString) {
      var date = new Date(dateString);
      return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    },
  // ================== PAGINASI ====================

  // ================== MODAL ====================
      buka_modal: function(modalku) {
        var modal = document.getElementById(modalku);
        modal.style.display = "block";
      },

      tutup_modal: function(modalku) {
        var modal = document.getElementById(modalku);
        modal.style.display = "none";
      },

  // ================== MODAL ====================
  },
  // =============================================================== METHODS =========================================================================

  mounted() {

        this.getView();

    }
};
</script>
