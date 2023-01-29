<template>
  <div>
    <main id="main">
    <!-- ======= Portfolio Details Section ======= -->
    <section id="portfolio-details" class="portfolio-details">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-8">
            <div class="portfolio-details-slider swiper">
              <div class="swiper-wrapper align-items-center">
                <div class="swiper-slide">
                  
                </div>

                <!-- <div class="swiper-slide">
                    <img src="assets/img/portfolio/portfolio-2.jpg" alt="">
                  </div>

                  <div class="swiper-slide">
                    <img src="assets/img/portfolio/portfolio-3.jpg" alt="">
                  </div> -->
              </div>
              <div class="swiper-pagination"></div>
              <h2>{{form.judul}}</h2>
              <img :src="file_path+form.foto" class="img-fluid" alt="" style="margin-bottom: 20px" />
              <!-- <p>{{form.deskripsi}}</p> -->
              <p v-html="form.isi"></p>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="portfolio-info">
              <h3>Berita Lainnya</h3>
              <ul>
                <li>
                  <div class="row" v-for="data in list_data" :key="data.id">
                      <div class="d-flex">
                        <div class="flex-shrink-0">
                          <img :src="file_path+data.foto" style="
                              width: 150px;
                              height: 130px;
                              background-color: rgba(0, 0, 255, 0.1);
                              margin-bottom: 25px;
                            "
                            alt="..."/>
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <p class="col col-lg-9">
                            <a href="javascript:void(0);" @click="push_berita(data.id)">{{data.judul}}</a>                            
                          </p>
                        </div>
                      </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Portfolio Details Section -->
    </main>
  </div>
</template>

<script>

    const ADD_URL = URL_APP + "api/v1/web_publish_berita/";
    const FILE_LOAD = URL_APP+'uploads/';

    export default {
      name: "web_pengumuman",
      //   title: "My page title",
      data: function () {
        dataaa : 'aaaaaaaaa'
        return {
          title: 'My Title',
          myData: '',


              id : this.$route.query.id,
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
              unit_kerja : UNIT_KERJA,
              id :'',
              cek_load_data : true,
              cek_load_data_list : true,
              file_old: "",
              file_path: FILE_LOAD,

              list_data: [],
              page_first: 1,
              page_last: 0,
              cari_value: "",
        }
      },


      // =============================================================== METHODS =========================================================================
      methods: {

          

          getList: function() {
              this.cek_load_data_list = true;
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
                      this.cek_load_data_list = false;
                      console.log(res_data);
              });
          },
          getView: function() {
              this.cek_load_data = true;
              fetch(ADD_URL + "isi_berita", {
                  method: "POST",
                  headers: {
                  "content-type": "application/json",
                  },
                  body: JSON.stringify({
                      id: this.$route.query.id,
                  })
              })
                  .then(res => res.json())
                  .then(res_data => {
                  var berita = res_data[0];
                  //   console.log(berita);
                  this.form.createAt = berita.createAt;
                  this.form.createBy = berita.createBy;
                  this.form.deskripsi = berita.deskripsi;
                  this.form.isi = berita.isi;
                  this.form.judul = berita.judul;
                  this.form.sumber = berita.sumber;
                  this.form.foto = berita.foto;    
                  this.cek_load_data = false;

                  // this.myData = berita.judul;
                  this.getAsyncData();
              });
          },
          getAsyncData: function () {
            var self = this;
            var deskripsi = this.form.judul;
            window.setTimeout(function () {
              self.myData = deskripsi
              self.$emit('updateHead')
            }, 3000)
          },
          push_berita : function(id){
                  this.$router.push('/IsiBerita?id='+id);
                  this.getView();
          },

          to_facebook : function () {
              window.open("http://www.facebook.com/sharer.php?u="+this.HOST, '_blank');
          },
          to_twitter : function(){
              // alert(this.HOST)
              window.open("https://twitter.com/share?url="+this.HOST+"&amp;text="+this.judul, '_blank');
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

              btn_prev: function() {
              if (this.page_first > 1) {
                  this.page_first--;
              } else {
                  this.page_first = 1;
              }
              this.getView();
              },

              btn_next: function() {
              if (this.page_first >= this.page_last) {
                  this.page_first == this.page_last;
              } else {
                  this.page_first++;
              }
              this.getView();
              },

              cari_data: function() {
              this.getList();
              },
              onFileSelected : function(event){
                  this.foto = event.target.files[0];
                  console.log(this.foto);
              },
              convert_tgl : function(dateString){
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
              },

          // ================== PAGINASI ====================
      },
      // =============================================================== METHODS =========================================================================

      mounted() {
          this.getView();
          this.getList();
          // this.getAsyncData();
          // alert(this.$route)
          // console.log('id = '+this.$route.query.id)
          // console.log(this.HOST);
      },
      // metaInfo: function(){
      //   return {
      //     title: this.form.judul,
      //   meta: [
      //     // { name: "description", content: "Learn coding with our free tutorials" },
      //     // { name: "keywords", content: "react,vue,angular" },
      //     {
      //       property: 'fb:app_id',
      //       content: '1879416282388598',
      //       vmid: 'fb:app_id'
      //     },
      //     {
      //       property: 'og:url',
      //       content: 'http://konaweselatankab.go.id/#/lihatberita?id=i33wt9e4k13bmpod',
      //       vmid: 'og:url'
      //     },
      //     {
      //       property: 'og:type',
      //       content: 'article',
      //       vmid: 'og:type'
      //     },
      //     // {
      //     //   property: 'og:title',
      //     //   content: 'BERITA KABUPATEN KONAWE SELATAN',
      //     //   template: chunk => `${chunk} - My page`,
      //     //   vmid: 'og:title'
      //     // },
      //     {
      //       property: 'og:description',
      //       content: this.form.judul,
      //       vmid: 'og:description'
      //     },
      //     {
      //       property: 'og:image',
      //       content: 'https://i.stack.imgur.com/GKgIC.png',
      //       vmid: 'og:image'
      //     }
          
      //     //you can also add open graph tags heren
      //   ]
      //   }
      // },

      // head: {
      //   title: {
      //     inner: 'Apakah ini???'
      //   },
      //   // Meta tags
      //   meta: function(){
      //     return [
      //     { p: 'fb:app_id', c: '1879416282388598' },
      //     { p: 'og:url', c: 'http://konaweselatankab.go.id/#/lihatberita?id=i33wt9e4k13bmpod' },
      //     { p: 'og:type', c: 'article' },
      //     { p: 'og:title', c: 'Konawe Selatanku' },
      //     { p: 'og:description', c: this.myData },
      //     { p: 'og:image', c: 'https://i.stack.imgur.com/GKgIC.png' },

      //     ]
      //   }
       
      // }







    };



    </script>


    <style>
    .img_berita img {
        width: 100% !important;
        height: auto !important;
    }
</style>