<template>
  <div class="home">
    <!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="footer-info">
                <h3>Diskominfo & Sandi</h3>
                <!-- <p class="pb-3"><em>Qui repudiandae et eum dolores alias sed ea. Qui suscipit veniam excepturi quod.</em></p> -->
                <p>
                  Jl. Poros Andoolo<br>
                  Kab. Konawe Selatan, Sulawesi Tenggara<br><br>
                  <strong>Phone:</strong> - <br>
                  <strong>Email:</strong> diskominfo@konaweselatankab.go.id<br>
                </p>
                <div class="social-links mt-3">
                  <a href="https://www.facebook.com/diskominfokonsel" class="facebook" target="_blank"><i class="bx bxl-facebook"></i></a>
                  <a href="https://www.instagram.com/kominfokonsel/" class="instagram" target="_blank"><i class="bx bxl-instagram"></i></a>
                  <a href="https://www.youtube.com/channel/UC2Dx4uErM_nepKVNNX_hjeQ" class="youtube" target="_blank"><i class="bx bxl-youtube"></i></a>
                  <!-- <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a> -->
                  <!-- <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a> -->
                  <!-- <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a> -->
                </div>
              </div>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Tautan</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="https://www.kominfo.go.id/" target="_blank">Kementrian Kominfo</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="https://www.sultraprov.go.id/" target="_blank">Sulawesi Tenggara</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Diskominfo Sulawesi Tenggara</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="https://www.konaweselatankab.go.id/" target="_blank">Kabupaten Konawe Selatan</a></li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Ikuti Kami</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="https://www.facebook.com/diskominfokonsel/">Facebook Diskominfo Konawe Selatan</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="https://www.instagram.com/kominfokonsel/">Instagram Diskominfo Konawe Selatan</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="https://www.youtube.com/channel/UC2Dx4uErM_nepKVNNX_hjeQ/">Youtube Diskominfo Konawe Selatan</a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Kepala Dinas</h4>
            <img :src="file_path + sambutan_foto" class="img-fluid" alt="" style="width: 200%; height: 200;" />
          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Squadfree</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/squadfree-free-bootstrap-template-creative/ -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer><!-- End Footer -->
  </div>
</template>

<script>
  const URL_SAMBUTAN = URL_APP + "api/v1/publish_diskominfo_sambutan/";
  const FILE_LOAD = URL_APP + "uploads/";
  export default {
  data(){
    return{
      sambutan_foto: "",
      file_path: FILE_LOAD,
      unit_kerja: UNIT_KERJA,
    };
   },
   methods:{
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
   },
   mounted(){
     this.getSambutan();
   }
  }
</script>

<style>

</style>