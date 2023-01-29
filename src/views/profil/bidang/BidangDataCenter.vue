<template>
  <!-- <div class="about"> -->
  <div class="home">
    <main id="main">
      <!-- ======= Services Section ======= -->
      <section id="services" class="services">
        <div class="container">
          <div class="section-title" data-aos="fade-in" data-aos-delay="100">
            <h2>Bidang Data Center</h2>
          </div>
          <div class="" data-aos="fade-in" data-aos-delay="100">         
          <p v-html="uraian"></p>         
          </div>
        </div>
      </section><!-- End Services Section -->

    </main><!-- End #main -->
  </div>
</template>

<script>
  const ADD_URL = URL_APP + "api/v1/publish_diskominfo_bidang/";
  const FILE_LOAD = URL_APP + "uploads/";
export default {
  components: {

  },
    data() {
      return {
        file_path: FILE_LOAD,
        list_data: [],
        page_first: 1,
        page_last: 0,
        cari_value: "",
        uraian: "",
        kategori: "Bidang Data Center",
      }
    },
methods : {
  getView: function() {
    fetch(ADD_URL + "view", {
        method: "POST",
        headers: {
        "content-type": "application/json",
        },
        body : JSON.stringify({
            kategori: this.kategori,
        }),
    })
        .then(res => res.json())
        .then(res_data => {
          this.cek_load_data = false;

          var bidang_hortikultura = res_data[0];
          this.uraian = bidang_hortikultura.uraian;
        });
    },
  },
  mounted() {
     this.getView();
  }    
  

}
</script>