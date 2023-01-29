<template>  
  <div class="home">
    <main id="main">
      <!-- ======= Services Section ======= -->
      <section id="services" class="services">
        <div class="container">
          <div class="section-title" data-aos="fade-in" data-aos-delay="100">
            <h2>DPA</h2>
            <!-- <input v-model="form.nama" type="text" placeholder="Nama">
            <input v-model="form.keterangan" type="text" placeholder="Keterangan">
            <input v-model="form.dokumen" type="text" placeholder="Dokumen">
            <button class="cta-btn" v-on:click="inputData()">Submit</button> -->
          </div>
          <!-- <template>
            <vue-pdf-app pdf="http://example.com/sample.pdf"></vue-pdf-app>
          </template>  -->
          <table class="table table-hover" data-aos="fade-in" data-aos-delay="100">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Judul</th>
                <th scope="col">Dokumen</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(data, index) in list_data" :key="index">
                <td scope="row" style="padding: 30px">{{index+1}}</td>
                <td style="padding: 30px">{{data.judul}}</td>
                <td>
                  <button @click="selectData(data)" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <img src="assets/img/pdf.png" alt="" style="width: 50px;">
                  </button>                    
                </td>
              </tr>
            </tbody>            
          </table>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <!-- <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> -->
                <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
              </div>
              <div class="modal-body">                
                  <iframe :src="file_path+form.file" width="100%" height="500px"></iframe>                
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Keluar</button>                  
              </div>
            </div>
          </div>
        </div>
      </section><!-- End Services Section -->

    </main><!-- End #main -->  
  </div>
  <!-- </div> -->
</template>

<script>

const ADD_URL   = URL_APP + "api/v1/publish_diskominfo_laporan/";
const FILE_LOAD = URL_APP + "uploads/";

export default {
   components: {
      
    },
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
            kategori: "DPA",
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
          kategori: this.kategori
        })
      })
        .then(res => res.json())
        .then(res_data => {
            this.list_data = res_data.data;
            this.page_last = res_data.jml_data;
            console.log(res_data)
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
