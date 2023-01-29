<template>
  <div class="home">
    <br><br>
    <main id="">
    <!-- ======= Contact Section ======= -->
      <section id="contact" class="contact section-bg">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Kontak</h2>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="info-box mb-4">
                <i class="bx bx-map"></i>
                <h3>Alamat Kami</h3>
                <p>Jl. Poros Andoolo No.1, Potoro, Kec. Andoolo, Kabupaten Konawe Selatan, Sulawesi Tenggara 93819</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="info-box  mb-4">
                <i class="bx bx-envelope"></i>
                <h3>Email Kami</h3>
                <p>diskominfo@konaweselatankab.go.id</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="info-box  mb-4">
                <i class="bx bx-phone-call"></i>
                <h3>Hubungi Kami</h3>
                <p>082293564421</p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6 ">
              <!-- <iframe class="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style="border:0; width: 100%; height: 384px;" allowfullscreen></iframe> -->
              <iframe class="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.4183058532226!2d122.27907291429375!3d-4.33228714775304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2da28169975cfe0d%3A0x76454e8b1b597acc!2sKantor%20Bupati%20Kabupaten%20Konawe%20Selatan!5e0!3m2!1sid!2sid!4v1659332930391!5m2!1sid!2sid" frameborder="0" style="border:0; width: 100%; height: 384px;" allowfullscreen></iframe>
            </div>

            <div class="col-lg-6">
              <form @submit.prevent="addData()" role="form" class="php-email-form">
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input v-model="form.nama" type="text" name="name" class="form-control" placeholder="Nama" required>
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input v-model="form.email" type="email" class="form-control" name="email" placeholder="Email" required>
                  </div>
                </div>
                <div class="form-group mt-3">
                  <input v-model="form.subjek" type="text" class="form-control" name="subject" placeholder="Subjek" required>
                </div>
                <div class="form-group mt-3">
                  <textarea v-model="form.pesan" class="form-control" name="message" rows="5" placeholder="Pesan" required></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div class="text-center"><button type="submit">Kirim Pesan</button></div>
              </form>
            </div>

          </div>

        </div>
      </section><!-- End Contact Section -->
    </main><!-- End #main -->  
  </div>
  <!-- </div> -->
</template>

<script>

const ADD_URL = URL_APP + "api/v1/publish_diskominfo_kontak/";
const FILE_LOAD = URL_APP + "uploads/";


export default {
  data() {
      return {
          data_load : false,
          form : {
              id         : '',
              nama       : '',
              email      : '',
              subjek     : '',
              pesan      : '',
              unit_kerja : 'rakyat',
              status     : '0',
              keterangan : 'NULL',
          },
          id             :'',
          cek_load_data  : true,
          file_old       : "",
          file_path      : FILE_LOAD,

          list_data      : [],
          page_first     : 1,
          page_last      : 0,
          cari_value     : "",
      }
  },
  methods: {
      getView: function() {
          this.cek_load_data = true;
          fetch(ADD_URL + "view", {
              method: "POST",
              headers: {
                  "content-type": "application/json",
                  authorization: "kikensbatara " + localStorage.token
              },
              body: JSON.stringify({
                  data_ke: this.page_first,
                  cari_value: this.cari_value
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

      addData: function() {
          var formData = new FormData();

          formData.append("nama", this.form.nama);
          formData.append("email", this.form.email);
          formData.append("subjek", this.form.subjek);
          formData.append("pesan", this.form.pesan);
          formData.append("unit_kerja", this.form.unit_kerja);

          fetch(ADD_URL + "addData", {
              method: "POST",
              // headers: {
                  // authorization: "kikensbatara " + localStorage.token
              // },
              body: formData
          }).then(res_data => {
              this.alertku(
                  this.$swal.fire(
                      'SELAMAT',
                      'Anda berhasil melaporkan pengaduan',
                      'success'
                  )
              );
              // this.getView();
              // alert("DATA PENGADUAN TELAH BERHASIL DIBUAT");
          });
      },

      selectData: function(data) {
          this.form = {
              id : data.id,
              nama : data.nama,
              alamat : data.alamat,
              kecamatan : data.kecamatan,
              kelurahan : data.kelurahan,
              email : data.email,
              no_hp : data.no_hp,
              pesan : data.pesan,
              status_jawaban : data.status_jawaban,
              jawaban : data.jawaban,
          };
          this.file_old =  data.foto;
          // CKEDITOR.instances.editor1.setData(data.uraian);
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

      mdl_exit: function() {
          this.judul = "";
          this.uraian = "";
          this.file = "";
          this.file_old = "";
      },

      onFileSelected: function(event) {
          this.form.file = event.target.files[0];
      },

      buka_modal: function(modalku) {
          var modal = document.getElementById(modalku);
          modal.style.display = "block";
      },

      tutup_modal: function(modalku) {
          var modal = document.getElementById(modalku);
          modal.style.display = "none";
      },
  },
  mounted(){
      this.getView();
  }
};
</script>