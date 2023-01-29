<template>
  <header id="header" class="fixed-top header-transparent" style="background-color: #67b0d1cc !important;">
    <div class="container d-flex align-items-center justify-content-between">
      <div class="logo">        
        <router-link to="/"><img src="img/logo1.png" alt="" class="img-fluid" /></router-link>
      </div>
      <nav id="navbar" class="navbar">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li class="dropdown">
            <a href="#"><span>Profil</span><i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><router-link to="/tentang">Tentang</router-link></li>
              <li><router-link to="/profilstruktural">Profil Pejabat Struktural</router-link></li>
              <li><router-link to="/tugasfungsi">Tugas dan Fungsi</router-link></li>
              <li class="dropdown">
                <a href="#"><span>Bidang</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><router-link to="/sekretariat">Sekretariat</router-link></li>
                  <li><router-link to="/bidangikp">Bidang IKP</router-link></li>
                  <li><router-link to="/bidangtik">Bidang TIK</router-link></li>
                  <li><router-link to="bidangpersandian">Bidang Persandian</router-link></li>
                  <li><router-link to="bidangdatacenter">Bidang Data Center</router-link></li>
                </ul>
              </li>
              <li><router-link to="/strukturorganisasi">Struktur Organisasi</router-link></li>              
              <!-- <li><router-link to="/visimisi">Visi Misi</router-link></li>                             -->
            </ul>
          </li>          
          <li class="dropdown">
            <a href="#"><span>Informasi</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><router-link to="/berita">Berita</router-link></li>
              <li><router-link to="/pengumuman">Pengumuman</router-link></li>
              <li><router-link to="/infografis">Infografis</router-link></li>
              <li><a href="http://ppid.konaweselatankab.go.id">PPID</a></li>              
            </ul>
          </li>
          <li class="dropdown">            
            <router-link to="/layanan">Layanan</router-link>
          </li>
          <li class="dropdown">
            <a href="#"><span>Dokumen</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li class="dropdown">
                <a href="#"><span>Laporan</span><i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><router-link to="/dpa">DPA</router-link></li>
                  <li><router-link to="/lakip">Lakip</router-link></li>
                  <li><router-link to="/lppd">LPPD</router-link></li>
                  <li><router-link to="/perjanjian_kinerja">Perjanjian Kinerja</router-link></li>
                  <li><router-link to="/pmprb">PMPRB</router-link></li>
                  <li><router-link to="/renstra">Renstra</router-link></li>
                  <li><router-link to="/rka">RKA</router-link></li>
                  <li><router-link to="/renja">Renja</router-link></li>
                </ul>
              </li>
              <li><router-link to="/peraturan">Peraturan</router-link></li>
              <li><router-link to="/sop">SOP</router-link></li>
            </ul>            
          </li>
          <li class="dropdown">
            <a href="#"><span>Galeri</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><router-link to="/foto">Foto</router-link></li>
              <li><router-link to="/video">Video</router-link></li>
            </ul>
          </li>
          <li><router-link to="/kontak">Kontak</router-link></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    name: "NavBar",
  };
</script>

<style></style>
