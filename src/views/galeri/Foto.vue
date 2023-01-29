<template>
  <div>
    <!-- ======= Portfolio Section ======= -->
    <section id="portfolio" class="portfolio">
      <div class="container">
        <br><br>
        <div class="section-title" data-aos="fade-in" data-aos-delay="100">
          <h2>Foto</h2>
          <!-- <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> -->
        </div>
        <div class="row portfolio-container" data-aos="fade-up">
          <div class="col-lg-4 col-md-6 portfolio-item filter-app" v-for="data in list_data" :key="data.id">
            <div class="portfolio-wrap">
              <div class="text-center">
                <img :src="file_path+data.file" class="img-fluid" alt="">
              </div>
              <div class="portfolio-links">
                <a @click="selectData(data);" class="portfolio-lightbox" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bx bx-plus"></i></a>
                <!-- <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a> -->
              </div>
            </div>
          </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <!-- <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> -->
                <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
              </div>
              <div class="modal-body">
                <div class="text-center">
                    <img :src="file_path+form.file" class="img-fluid" alt="" />
                  </div>
                <br>
                <p class="text-center fw-bolder">{{form.judul}}</p>
                <p class="text-center">{{form.deskripsi}}</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Keluar</button>                  
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
    </section><!-- End Portfolio Section -->
  </div>
</template>

<script>

const ADD_URL = URL_APP + "api/v1/publish_diskominfo_foto/";
const FILE_LOAD = URL_APP + "uploads/";


export default {

    data() {
        return {
            data_load : false,
            form : {
                id : '',
                judul : '',
                deskripsi : '',
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
            unit_kerja : data.unit_kerja,
            status : data.status,
            createBy : data.createBy,
            createAt : data.createAt,
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
