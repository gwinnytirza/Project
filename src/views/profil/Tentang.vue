<template>      
  <div class="home">  
    <main id="main">      
      <!-- ======= Portfolio Section ======= -->
      <section id="portfolio" class="portfolio">
        <div class="container">
          <div class="section-title" data-aos="fade-in" data-aos-delay="100">
            <h2>Tentang</h2>
          </div>        
          <p v-html="uraian" data-aos="fade-in" data-aos-delay="100"></p>
        </div>
      </section><!-- End Portfolio Section -->
    </main><!-- End #main -->  
  </div>
</template>

<script>
  const URL_TENTANG = URL_APP + "api/v1/publish_diskominfo_tentang/";
  const FILE_LOAD   = URL_APP + "uploads/";

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
        fetch(URL_TENTANG + "view", {
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