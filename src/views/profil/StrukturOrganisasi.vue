<template>
  <!-- <div class="about"> -->
  <div class="home">  
    <main id="main">
      <!-- ======= Portfolio Section ======= -->
      <section id="portfolio" class="portfolio">
        <div class="container">
          <div class="section-title" data-aos="fade-in" data-aos-delay="100">
            <h2>Struktur Organisasi</h2>
          </div>        
          <p v-html="uraian" data-aos="fade-in" data-aos-delay="100"></p>
        </div>
      </section><!-- End Portfolio Section -->
    </main><!-- End #main -->  
  </div>
  <!-- </div> -->
</template>

<script>
const ADD_URL = URL_APP + "api/v1/publish_diskominfo_struktur_organisasi/";
const FILE_LOAD = URL_APP + "uploads/";

export default {
  components: {

  },
    data() {
      return {
        uraian: "",
        file_path : FILE_LOAD, 
      }
    },
methods : {
  getView: function() {
    fetch(ADD_URL + "view", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
    })
        .then(res => res.json())
        .then(res_data => {
          this.cek_load_data = false;
          var struktur_organisasi = res_data[0];
          this.uraian = struktur_organisasi.uraian;
        });
    },
},
mounted() {
  this.getView();
}    
  

}
</script>