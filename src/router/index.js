import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tentang from '../views/profil/Tentang.vue'
import Berita from '../views/informasi/berita/Berita.vue'
import Informasi from '../views/Informasi.vue'
import ProfilStruktural from '../views/profil/ProfilStruktural.vue'
import TugasFungsi from '../views/profil/TugasFungsi.vue'
import Pengumuman from '../views/informasi/pengumuman/Pengumuman.vue'
import IsiPengumuman from '../views/informasi/pengumuman/IsiPengumuman.vue'
import Foto from '../views/galeri/Foto.vue'
import Video from '../views/galeri/Video.vue'
import Kontak from '../views/kontak/Kontak.vue'
import Bidang from '../views/profil/bidang/Bidang.vue'
import StrukturOrganisasi from '../views/profil/StrukturOrganisasi.vue'
import VisiMisi from '../views/profil/VisiMisi.vue'
import IsiBerita from '../views/informasi/berita/IsiBerita.vue'
import Sekretariat from '../views/profil/bidang/Sekretariat.vue'
import BidangDataCenter from '../views/profil/bidang/BidangDataCenter.vue'
import BidangIKP from '../views/profil/bidang/BidangIKP.vue'
import BidangPersandian from '../views/profil/bidang/BidangPersandian.vue'
import BidangTIK from '../views/profil/bidang/BidangTIK.vue'
import Layanan from '../views/Layanan.vue'
import Infografis from '../views/Infografis.vue'
import dpa from '../views/dokumen/laporan/dpa.vue'
import lakip from '../views/dokumen/laporan/lakip.vue'
import lppd from '../views/dokumen/laporan/lppd.vue'
import perjanjian_kinerja from '../views/dokumen/laporan/perjanjian_kinerja.vue'
import pmprb from '../views/dokumen/laporan/pmprb.vue'
import renja from '../views/dokumen/laporan/renja.vue'
import renstra from '../views/dokumen/laporan/renstra.vue'
import rka from '../views/dokumen/laporan/rka.vue'
import peraturan from '../views/dokumen/peraturan.vue'
import sop from '../views/dokumen/sop.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tentang',
    name: 'Tentang',
    component: Tentang
  },
  {
    path: '/berita',
    name: 'Berita',
    component: Berita
  },
  {
    path: '/informasi',
    name: 'Informasi',
    component: Informasi
  },
  {
    path: '/profilstruktural',
    name: 'ProfilStruktural',
    component: ProfilStruktural
  },
  {
    path: '/tugasfungsi',
    name: 'TugasFungsi',
    component: TugasFungsi
  },
  {
    path: '/bidang',
    name: 'Bidang',
    component: Bidang
  },
  {
    path: '/strukturorganisasi',
    name: 'StrukturOrganisasi',
    component: StrukturOrganisasi
  },
  {
    path: '/visimisi',
    name: 'VisiMisi',
    component: VisiMisi
  },
  {
    path: '/pengumuman',
    name: 'Pengumuman',
    component: Pengumuman
  },
  {
    path: '/isipengumuman',
    name: 'isipengumuman',
    component: IsiPengumuman
  },
  {
    path: '/foto',
    name: 'Foto',
    component: Foto
  },
  {
    path: '/video',
    name: 'Video',
    component: Video
  },
  {
    path: '/kontak',
    name: 'Kontak',
    component: Kontak
  },
  {
    path: '/isiberita',
    name: 'IsiBerita',
    component: IsiBerita
  },
  {
    path: '/sekretariat',
    name: 'Sekretariat',
    component: Sekretariat
  },
  {
    path: '/bidangdatacenter',
    name: 'BidangDataCenter',
    component: BidangDataCenter
  },
  {
    path: '/bidangikp',
    name: 'BidangIKP',
    component: BidangIKP
  },
  {
    path: '/bidangpersandian',
    name: 'BidangPersandian',
    component: BidangPersandian
  },
  {
    path: '/bidangtik',
    name: 'BidangTIK',
    component: BidangTIK
  },
  {
    path: '/layanan',
    name: 'Layanan',
    component: Layanan
  },
  {
    path: '/infografis',
    name: 'Infografis',
    component: Infografis
  },
  {
    path: '/dpa',
    name: 'dpa',
    component: dpa
  },
  {
    path: '/lakip',
    name: 'lakip',
    component: lakip
  },
  {
    path: '/lppd',
    name: 'lppd',
    component: lppd
  },
  {
    path: '/perjanjian_kinerja',
    name: 'perjanjian_kinerja',
    component: perjanjian_kinerja
  },
  {
    path: '/pmprb',
    name: 'pmprb',
    component: pmprb
  },
  {
    path: '/renja',
    name: 'renja',
    component: renja
  },
  {
    path: '/renstra',
    name: 'renstra',
    component: renstra
  },
  {
    path: '/rka',
    name: 'rka',
    component: rka
  },
  {
    path: '/peraturan',
    name: 'peraturan',
    component: peraturan
  },
  {
    path: '/sop',
    name: 'sop',
    component: sop
  },
]

const router = new VueRouter({
  routes
})

export default router