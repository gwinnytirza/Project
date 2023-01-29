<template>
   <div class="berita">
      <main id="main">
        <!-- ======= Services Section ======= -->
        <section id="services" class="services">
          <div class="container">
            <div class="section-title" data-aos="fade-in" data-aos-delay="100">
              <h2>Berita</h2>
            </div>
            <div class="row">
              <div class="col-md-6 col-lg-6 d-flex align-items-stretch mb-6 mb-lg-0" v-for="data in list_data" :key="data.id">
                <div class="icon-box" data-aos="fade-up" style="margin-bottom: 20px">
                  <img :src="file_path+data.foto" class="img-fluid" alt="" style="margin-bottom: 20px" />
                  <h4 class="title">
                    <a @click="push_berita(data.id)" href="javascript:void(0);">{{data.judul}}</a>
                  </h4>
                  <p class="description">{{data.deskripsi}}</p>
                </div>                        
              </div>
            </div>
            <div class="text-center">
                <button @click="btn_prev" type="button" class="btn btn-secondary" id="pref">                    
                    <i class="bi bi-arrow-left"></i>
                </button>
                &nbsp;
                <span style="font-size: 85%; color: #a5a5a5">
                    <b>{{page_first}} - {{page_last}}</b>
                </span>
                &nbsp;
                <button @click="btn_next" type="button" class="btn btn-secondary" id="next">
                    <i class="bi bi-arrow-right"></i>
                </button>
            </div>
          </div>
        </section><!-- End Services Section -->

      </main><!-- End #main -->
   </div>
  <!-- </div> -->
</template>

<script>
const ADD_URL = URL_APP + "api/v1/web_publish_berita/";
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
                    isi : '',
                    foto : '',
                    unit_kerja : '',
                    status : '',
                    keterangan : '',
                    createBy : '',
                    createAt : '',
                },
                id :'',
                cek_load_data : true,
                file_old: "",
                file_path: FILE_LOAD,

                unit_kerja : UNIT_KERJA,

                list_data: [],
                page_first: 1,
                page_last: 0,
                cari_value: "",
			}
		},
		methods: {
			getView: function() {
                this.cek_load_data = true;
                fetch(ADD_URL + "viewOPD", {
                    method: "POST",
                    headers: {
                    "content-type": "application/json",
                    authorization: "kikensbatara " + localStorage.token
                    },
                        body: JSON.stringify({
                        data_ke: this.page_first,
                        cari_value: this.cari_value,
                        unit_kerja : this.unit_kerja
                    })
                })
                    .then(res => res.json())
                    .then(res_data => {
                        this.list_data = res_data.data;
                        this.page_last = res_data.jml_data;
                        this.cek_load_data = false;
                        console.log(res_data);
                });
            },
            push_berita : function(id){
                this.$router.push('/IsiBerita?id='+id);
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
                    var getBulan = date.getMonth() + 1; var bulan = '';
                    if (getBulan == '1') {bulan = 'Jan'} 
                    else if(getBulan == '2') {bulan = 'Feb'}
                    else if(getBulan == '3') {bulan = 'Mar'}
                    else if(getBulan == '4') {bulan = 'Apr'}
                    else if(getBulan == '5') {bulan = 'Mei'}
                    else if(getBulan == '6') {bulan = 'Jun'}
                    else if(getBulan == '7') {bulan = 'Jul'}
                    else if(getBulan == '8') {bulan = 'Agt'}
                    else if(getBulan == '9') {bulan = 'Sep'}
                    else if(getBulan == '10') {bulan = 'Okt'}
                    else if(getBulan == '11') {bulan = 'Nov'}
                    else if(getBulan == '12') {bulan = 'Des'}



                    return date.getDate() + " " + bulan + " " + date.getFullYear();
                    // return bulan+ " " + date.getDate() + ". " + date.getFullYear();
                }
            // ================== PAGINASI ====================













		},
		mounted() {
            this.getView();

		},

	}
</script>