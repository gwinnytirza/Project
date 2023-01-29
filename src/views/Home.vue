<template>
  <div>
    <!-- ======= Hero Section ======= -->
    <section id="hero">
      <div class="hero-container" data-aos="fade-up">
        <!-- <h1>Diskominfo & Sandi</h1>
        <h1>Kab. Konawe Selatan</h1> -->
        <a href="#about" class="btn-get-started scrollto">
          <i class="bx bx-chevrons-down"></i>
        </a>
      </div>
    </section>
    <!-- End Hero -->

    <main id="main">
      <!-- ======= About Section ======= -->
      <section id="about" class="about">
        <div class="container">
          <div class="row">
            <div class="col align-item-stretch" data-aos="fade-up">
              <div class="content">
                <img :src="file_path + sambutan_foto" class="img-fluid" alt="" />
                <h2 class="text-center" style="margin-top: 20px">{{ sambutan_nama }}</h2>
              </div>
            </div>
            <div class="col align-item-stretch" data-aos="fade-up">
              <h2 style="margin-top: 20px">Sambutan Kepala Dinas</h2>
              <p v-html="sambutan_isi"></p>
            </div>
          </div>
        </div>
      </section>
      <!-- End About Section -->

      <!-- ======= Services Section ======= -->
      <section id="services" class="services">
        <div class="container">
          <div class="section-title" data-aos="fade-in" data-aos-delay="100">
            <h2>Berita</h2>
            <!-- <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> -->
          </div>

          <div class="row">
            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" v-for="data in list_berita" :key="data.id">
              <div class="icon-box" data-aos="fade-up">
                <img :src="file_path + data.foto" class="img-fluid" alt="" />
                <h4 class="title">
                  <a @click="push_berita(data.id)" href="javascript:void(0);">{{data.judul}}</a>
                </h4>
                <p class="description">{{ data.deskripsi }}</p>
                <a @click="push_berita(data.id)" href="javascript:void(0);"
                  ><p class="description">Selengkapnya</p></a
                >
              </div>
            </div>
            <div class="text-center">
              <br /><br /><router-link to="/berita">
                <a class="cta-btn">Berita Lainnya</a>
              </router-link>
            </div>
          </div>
        </div>
      </section>
      <!-- End Services Section -->

      <!-- ======= Team Section ======= -->
      <section id="team" class="team">
        <div class="container">
          <div class="section-title" data-aos="fade-in" data-aos-delay="100">
            <h2>Foto Terbaru</h2>
          </div>

          <div class="row">
            <div
              class="col-lg-4 col-md-6"
              v-for="data in list_foto"
              :key="data.id"
            >
              <div class="member" data-aos="fade-up">
                <div class="pic">
                  <a
                    @click="selectDataFoto(data)"
                    class="portfolio-lightbox"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <img
                      :src="file_path + data.file"
                      class="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- Modal -->
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <!-- <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> -->
                  <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                </div>
                <div class="modal-body">
                  <img
                    :src="file_path + galeryku.file"
                    class="img-fluid"
                    alt=""
                  />
                  <p class="text-center fw-bolder">{{ galeryku.judul }}</p>
                  <p class="text-center">{{ galeryku.deskripsi }}</p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Keluar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center">
            <section id="portfolio" class="portfolio">
              <router-link to="/foto">
              <a class="cta-btn">Foto Lainnya</a>
            </router-link>
            </section>            
          </div>
        </div>
      </section>
      <!-- End Team Section -->

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

      <section id="portfolio" class="portfolio">
        <div class="container">
          <div class="section-title" data-aos="fade-in" data-aos-delay="100">
            <h2>Link Terkait</h2>
          </div>
          <div class="row portfolio-container" data-aos="fade-up">
            <div class="col-lg-3 col-md-4 portfolio-item filter-app" v-for="data in list_link_terkait" :key="data.id">
              <div class="portfolio-wrap">
                <img :src="file_path + data.file" class="img-fluid" alt="">
                <div class="portfolio-links">                  
                  <a :href="data.url"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
const ADD_URL_BERITA = URL_APP + "api/v1/web_publish_berita/";
const URL_SAMBUTAN = URL_APP + "api/v1/publish_diskominfo_sambutan/";
const ADD_URL_FOTO = URL_APP + "api/v1/publish_diskominfo_foto/";
const ADD_URL_LINK_TERKAIT = URL_APP + "api/v1/web_publish_link_terkait/";
const FILE_LOAD = URL_APP + "uploads/";

export default {
  components: {},

  data() {
    return {
      id: "",
      list_slider: [],
      list_berita: [],
      list_foto: [],
      list_link_terkait: [],
      foto: "",

      sambutan_nama: "",
      sambutan_foto: "",
      sambutan_isi: "",

      galeryku: {
        id: "",
        judul: "",
        deskripsi: "",
        file: "",
        unit_kerja: "",
        status: "",
        createBy: "",
        createAt: "",
      },
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

      file_path: FILE_LOAD,
      unit_kerja: UNIT_KERJA,
    };
  },
  methods: {
    getSambutan: function () {
      fetch(URL_SAMBUTAN + "view", {
        method: "get",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res_data) => {
          var sambutan = res_data[0];

          this.sambutan_nama = sambutan.nama;
          this.sambutan_foto = sambutan.foto;
          this.sambutan_isi = sambutan.isi;
          // console.log(res_data);
        });
    },
    getFoto: function () {
      fetch(ADD_URL_FOTO, {
        method: "get",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res_data) => {
          this.list_foto = res_data;
          // console.log(res_data);
        });
    },
    getListBerita: function () {
      this.cek_load_data_list = true;
      fetch(ADD_URL_BERITA + "homeOPDKu", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: "kikensbatara " + localStorage.token,
        },
        body: JSON.stringify({
          unit_kerja: this.unit_kerja,
        }),
      })
        .then((res) => res.json())
        .then((res_data) => {
          this.list_berita = res_data;
          // this.cek_load_data = false;
          // console.log(res_data);
        });
    },
    getLinkTerkait: function () {
      fetch(ADD_URL_LINK_TERKAIT, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: "kikensbatara " + localStorage.token,
        },
        body: JSON.stringify({
          unit_kerja: this.unit_kerja,
        }),
      })
        .then((res) => res.json())
        .then((res_data) => {
          this.list_link_terkait = res_data;
          // this.cek_load_data = false;
          // console.log(res_data);
        });
    },
    getView: function() {
          console.log('=============================================')
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

    selectDataFoto: function (data) {
      console.log(data);
      this.galeryku = {
        id        : data.id,
        judul     : data.judul,
        deskripsi : data.deskripsi,
        file      : data.file,
        unit_kerja: data.unit_kerja,
        status    : data.status,
        createBy  : data.createBy,
        createAt  : data.createAt,
      };
    },
    push_berita: function (id) {
      this.$router.push("/IsiBerita?id=" + id);
    },
  },
  mounted() {
;
    this.getSambutan();
    this.getFoto();
    this.getListBerita();
    this.getLinkTerkait();
    this.getView();
  },
};
</script>
