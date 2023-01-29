<template>  
  <div class="home">
    <main id="main">
      <!-- ======= Services Section ======= -->
      <section id="services" class="services">
        <div class="container">
          <div class="" data-aos="fade-in" data-aos-delay="100">            
            <h4>Detile Pengumuman</h4>            
            <div class="d-flex justify-content-center">
                <p>{{form.judul}}</p>
            </div>
          </div>          
        </div>
      </section><!-- End Services Section -->

    </main><!-- End #main -->  
  </div>
  <!-- </div> -->
</template>

<script>

const ADD_URL = URL_APP + "api/v1/publish_diskominfo_pengumuman/";
const FILE_LOAD = URL_APP + "uploads/";


export default {

    data() {
        return {
            data_load : false,
            form : {
                id : '',                
                judul : '',
                sumber : '',
                deskripsi : '',
                uraian : '',
                foto : '',
                unit_kerja : '',
                status : '',
                keterangan : '',
            },
            id :'',
            file_path: FILE_LOAD,

            list_data: [],
            page_first: 1,
            page_last: 0,
            cari_value: "",
        }
    },
    methods: {
    getView: function() {
      fetch(ADD_URL + "view", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          data_ke: this.page_first,
          cari_value: this.cari_value,
        //   kategori: this.kategori
        })
      })
        .then(res => res.json())
        .then(res_data => {
            this.list_data = res_data.data;
            this.page_last = res_data.jml_data;
        });
    },

    selectData: function(data) {
        this.form = {
            id : data.id,
            judul : data.judul,
            keterangan : data.keterangan,
            file : data.file,
        };
    },

    push_pengumuman : function(id){
      this.$router.push('/IsiPengumuman?id='+id);
    },

    mdl_exit: function() {
      this.judul = "";
      this.uraian = "";
      this.file = "";
      this.file_old = "";
    },

    //   ====================== MODAL ======================

        buka_modal: function(modalku) {
            var modal = document.getElementById(modalku);
            modal.style.display = "block";
        },

        tutup_modal: function(modalku) {
            var modal = document.getElementById(modalku);
            modal.style.display = "none";
    },


    //   ====================== MODAL ======================
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
  // ================== PAGINASI ====================
  },
  // =============================================================== METHODS =========================================================================

  mounted() {

        this.getView();

    }
};
</script>