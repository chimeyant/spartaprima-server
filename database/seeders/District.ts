import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import District from 'App/Models/District'

export default class DistrictSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await District.createMany(
      [
        {
          "code": 1101010,
          "regencyCode": 1101,
          "name": "TEUPAH SELATAN"
        },
        {
          "code": 1101020,
          "regencyCode": 1101,
          "name": "SIMEULUE TIMUR"
        },
        {
          "code": 1101021,
          "regencyCode": 1101,
          "name": "TEUPAH BARAT"
        },
        {
          "code": 1101022,
          "regencyCode": 1101,
          "name": "TEUPAH TENGAH"
        },
        {
          "code": 1101030,
          "regencyCode": 1101,
          "name": "SIMEULUE TENGAH"
        },
        {
          "code": 1101031,
          "regencyCode": 1101,
          "name": "TELUK DALAM"
        },
        {
          "code": 1101032,
          "regencyCode": 1101,
          "name": "SIMEULUE CUT"
        },
        {
          "code": 1101040,
          "regencyCode": 1101,
          "name": "SALANG"
        },
        {
          "code": 1101050,
          "regencyCode": 1101,
          "name": "SIMEULUE BARAT"
        },
        {
          "code": 1101051,
          "regencyCode": 1101,
          "name": "ALAFAN"
        },
        {
          "code": 1102010,
          "regencyCode": 1102,
          "name": "PULAU BANYAK"
        },
        {
          "code": 1102011,
          "regencyCode": 1102,
          "name": "PULAU BANYAK BARAT"
        },
        {
          "code": 1102020,
          "regencyCode": 1102,
          "name": "SINGKIL"
        },
        {
          "code": 1102021,
          "regencyCode": 1102,
          "name": "SINGKIL UTARA"
        },
        {
          "code": 1102022,
          "regencyCode": 1102,
          "name": "KUALA BARU"
        },
        {
          "code": 1102030,
          "regencyCode": 1102,
          "name": "SIMPANG KANAN"
        },
        {
          "code": 1102031,
          "regencyCode": 1102,
          "name": "GUNUNG MERIAH"
        },
        {
          "code": 1102032,
          "regencyCode": 1102,
          "name": "DANAU PARIS"
        },
        {
          "code": 1102033,
          "regencyCode": 1102,
          "name": "SURO"
        },
        {
          "code": 1102042,
          "regencyCode": 1102,
          "name": "SINGKOHOR"
        },
        {
          "code": 1102043,
          "regencyCode": 1102,
          "name": "KOTA BAHARU"
        },
        {
          "code": 1103010,
          "regencyCode": 1103,
          "name": "TRUMON"
        },
        {
          "code": 1103011,
          "regencyCode": 1103,
          "name": "TRUMON TIMUR"
        },
        {
          "code": 1103012,
          "regencyCode": 1103,
          "name": "TRUMON TENGAH"
        },
        {
          "code": 1103020,
          "regencyCode": 1103,
          "name": "BAKONGAN"
        },
        {
          "code": 1103021,
          "regencyCode": 1103,
          "name": "BAKONGAN TIMUR"
        },
        {
          "code": 1103022,
          "regencyCode": 1103,
          "name": "KOTA BAHAGIA"
        },
        {
          "code": 1103030,
          "regencyCode": 1103,
          "name": "KLUET SELATAN"
        },
        {
          "code": 1103031,
          "regencyCode": 1103,
          "name": "KLUET TIMUR"
        },
        {
          "code": 1103040,
          "regencyCode": 1103,
          "name": "KLUET UTARA"
        },
        {
          "code": 1103041,
          "regencyCode": 1103,
          "name": "PASIE RAJA"
        },
        {
          "code": 1103042,
          "regencyCode": 1103,
          "name": "KLUET TENGAH"
        },
        {
          "code": 1103050,
          "regencyCode": 1103,
          "name": "TAPAK TUAN"
        },
        {
          "code": 1103060,
          "regencyCode": 1103,
          "name": "SAMA DUA"
        },
        {
          "code": 1103070,
          "regencyCode": 1103,
          "name": "SAWANG"
        },
        {
          "code": 1103080,
          "regencyCode": 1103,
          "name": "MEUKEK"
        },
        {
          "code": 1103090,
          "regencyCode": 1103,
          "name": "LABUHAN HAJI"
        },
        {
          "code": 1103091,
          "regencyCode": 1103,
          "name": "LABUHAN HAJI TIMUR"
        },
        {
          "code": 1103092,
          "regencyCode": 1103,
          "name": "LABUHAN HAJI BARAT"
        },
        {
          "code": 1104010,
          "regencyCode": 1104,
          "name": "LAWE ALAS"
        },
        {
          "code": 1104011,
          "regencyCode": 1104,
          "name": "BABUL RAHMAH"
        },
        {
          "code": 1104012,
          "regencyCode": 1104,
          "name": "TANOH ALAS"
        },
        {
          "code": 1104020,
          "regencyCode": 1104,
          "name": "LAWE SIGALA-GALA"
        },
        {
          "code": 1104021,
          "regencyCode": 1104,
          "name": "BABUL MAKMUR"
        },
        {
          "code": 1104022,
          "regencyCode": 1104,
          "name": "SEMADAM"
        },
        {
          "code": 1104023,
          "regencyCode": 1104,
          "name": "LAUSER"
        },
        {
          "code": 1104030,
          "regencyCode": 1104,
          "name": "BAMBEL"
        },
        {
          "code": 1104031,
          "regencyCode": 1104,
          "name": "BUKIT TUSAM"
        },
        {
          "code": 1104032,
          "regencyCode": 1104,
          "name": "LAWE SUMUR"
        },
        {
          "code": 1104040,
          "regencyCode": 1104,
          "name": "BABUSSALAM"
        },
        {
          "code": 1104041,
          "regencyCode": 1104,
          "name": "LAWE BULAN"
        },
        {
          "code": 1104050,
          "regencyCode": 1104,
          "name": "BADAR"
        },
        {
          "code": 1104051,
          "regencyCode": 1104,
          "name": "DARUL HASANAH"
        },
        {
          "code": 1104052,
          "regencyCode": 1104,
          "name": "KETAMBE"
        },
        {
          "code": 1104053,
          "regencyCode": 1104,
          "name": "DELENG POKHKISEN"
        },
        {
          "code": 1105080,
          "regencyCode": 1105,
          "name": "SERBA JADI"
        },
        {
          "code": 1105081,
          "regencyCode": 1105,
          "name": "SIMPANG JERNIH"
        },
        {
          "code": 1105082,
          "regencyCode": 1105,
          "name": "PEUNARON"
        },
        {
          "code": 1105090,
          "regencyCode": 1105,
          "name": "BIREM BAYEUN"
        },
        {
          "code": 1105100,
          "regencyCode": 1105,
          "name": "RANTAU SELAMAT"
        },
        {
          "code": 1105101,
          "regencyCode": 1105,
          "name": "SUNGAI RAYA"
        },
        {
          "code": 1105110,
          "regencyCode": 1105,
          "name": "PEUREULAK"
        },
        {
          "code": 1105111,
          "regencyCode": 1105,
          "name": "PEUREULAK TIMUR"
        },
        {
          "code": 1105112,
          "regencyCode": 1105,
          "name": "PEUREULAK BARAT"
        },
        {
          "code": 1105120,
          "regencyCode": 1105,
          "name": "RANTO PEUREULAK"
        },
        {
          "code": 1105130,
          "regencyCode": 1105,
          "name": "IDI RAYEUK"
        },
        {
          "code": 1105131,
          "regencyCode": 1105,
          "name": "PEUDAWA"
        },
        {
          "code": 1105132,
          "regencyCode": 1105,
          "name": "BANDA ALAM"
        },
        {
          "code": 1105133,
          "regencyCode": 1105,
          "name": "IDI TUNONG"
        },
        {
          "code": 1105134,
          "regencyCode": 1105,
          "name": "DARUL IHSAN"
        },
        {
          "code": 1105135,
          "regencyCode": 1105,
          "name": "IDI TIMUR"
        },
        {
          "code": 1105140,
          "regencyCode": 1105,
          "name": "DARUL AMAN"
        },
        {
          "code": 1105150,
          "regencyCode": 1105,
          "name": "NURUSSALAM"
        },
        {
          "code": 1105151,
          "regencyCode": 1105,
          "name": "DARUL FALAH"
        },
        {
          "code": 1105160,
          "regencyCode": 1105,
          "name": "JULOK"
        },
        {
          "code": 1105161,
          "regencyCode": 1105,
          "name": "INDRA MAKMUR"
        },
        {
          "code": 1105170,
          "regencyCode": 1105,
          "name": "PANTE BIDARI"
        },
        {
          "code": 1105180,
          "regencyCode": 1105,
          "name": "SIMPANG ULIM"
        },
        {
          "code": 1105181,
          "regencyCode": 1105,
          "name": "MADAT"
        },
        {
          "code": 1106010,
          "regencyCode": 1106,
          "name": "LINGE"
        },
        {
          "code": 1106011,
          "regencyCode": 1106,
          "name": "ATU LINTANG"
        },
        {
          "code": 1106012,
          "regencyCode": 1106,
          "name": "JAGONG JEGET"
        },
        {
          "code": 1106020,
          "regencyCode": 1106,
          "name": "BINTANG"
        },
        {
          "code": 1106031,
          "regencyCode": 1106,
          "name": "LUT TAWAR"
        },
        {
          "code": 1106032,
          "regencyCode": 1106,
          "name": "KEBAYAKAN"
        },
        {
          "code": 1106040,
          "regencyCode": 1106,
          "name": "PEGASING"
        },
        {
          "code": 1106041,
          "regencyCode": 1106,
          "name": "BIES"
        },
        {
          "code": 1106050,
          "regencyCode": 1106,
          "name": "BEBESEN"
        },
        {
          "code": 1106051,
          "regencyCode": 1106,
          "name": "KUTE PANANG"
        },
        {
          "code": 1106060,
          "regencyCode": 1106,
          "name": "SILIH NARA"
        },
        {
          "code": 1106061,
          "regencyCode": 1106,
          "name": "KETOL"
        },
        {
          "code": 1106062,
          "regencyCode": 1106,
          "name": "CELALA"
        },
        {
          "code": 1106063,
          "regencyCode": 1106,
          "name": "RUSIP ANTARA"
        },
        {
          "code": 1107050,
          "regencyCode": 1107,
          "name": "JOHAN PAHLAWAN"
        },
        {
          "code": 1107060,
          "regencyCode": 1107,
          "name": "SAMATIGA"
        },
        {
          "code": 1107061,
          "regencyCode": 1107,
          "name": "BUBON"
        },
        {
          "code": 1107062,
          "regencyCode": 1107,
          "name": "ARONGAN LAMBALEK"
        },
        {
          "code": 1107070,
          "regencyCode": 1107,
          "name": "WOYLA"
        },
        {
          "code": 1107071,
          "regencyCode": 1107,
          "name": "WOYLA BARAT"
        },
        {
          "code": 1107072,
          "regencyCode": 1107,
          "name": "WOYLA TIMUR"
        },
        {
          "code": 1107080,
          "regencyCode": 1107,
          "name": "KAWAY XVI"
        },
        {
          "code": 1107081,
          "regencyCode": 1107,
          "name": "MEUREUBO"
        },
        {
          "code": 1107082,
          "regencyCode": 1107,
          "name": "PANTAI CEUREMEN"
        },
        {
          "code": 1107083,
          "regencyCode": 1107,
          "name": "PANTON REU"
        },
        {
          "code": 1107090,
          "regencyCode": 1107,
          "name": "SUNGAI MAS"
        },
        {
          "code": 1108010,
          "regencyCode": 1108,
          "name": "LHOONG"
        },
        {
          "code": 1108020,
          "regencyCode": 1108,
          "name": "LHOKNGA"
        },
        {
          "code": 1108021,
          "regencyCode": 1108,
          "name": "LEUPUNG"
        },
        {
          "code": 1108030,
          "regencyCode": 1108,
          "name": "INDRAPURI"
        },
        {
          "code": 1108031,
          "regencyCode": 1108,
          "name": "KUTA COT GLIE"
        },
        {
          "code": 1108040,
          "regencyCode": 1108,
          "name": "SEULIMEUM"
        },
        {
          "code": 1108041,
          "regencyCode": 1108,
          "name": "KOTA JANTHO"
        },
        {
          "code": 1108042,
          "regencyCode": 1108,
          "name": "LEMBAH SEULAWAH"
        },
        {
          "code": 1108050,
          "regencyCode": 1108,
          "name": "MESJID RAYA"
        },
        {
          "code": 1108060,
          "regencyCode": 1108,
          "name": "DARUSSALAM"
        },
        {
          "code": 1108061,
          "regencyCode": 1108,
          "name": "BAITUSSALAM"
        },
        {
          "code": 1108070,
          "regencyCode": 1108,
          "name": "KUTA BARO"
        },
        {
          "code": 1108080,
          "regencyCode": 1108,
          "name": "MONTASIK"
        },
        {
          "code": 1108081,
          "regencyCode": 1108,
          "name": "BLANG BINTANG"
        },
        {
          "code": 1108090,
          "regencyCode": 1108,
          "name": "INGIN JAYA"
        },
        {
          "code": 1108091,
          "regencyCode": 1108,
          "name": "KRUENG BARONA JAYA"
        },
        {
          "code": 1108100,
          "regencyCode": 1108,
          "name": "SUKA MAKMUR"
        },
        {
          "code": 1108101,
          "regencyCode": 1108,
          "name": "KUTA MALAKA"
        },
        {
          "code": 1108102,
          "regencyCode": 1108,
          "name": "SIMPANG TIGA"
        },
        {
          "code": 1108110,
          "regencyCode": 1108,
          "name": "DARUL IMARAH"
        },
        {
          "code": 1108111,
          "regencyCode": 1108,
          "name": "DARUL KAMAL"
        },
        {
          "code": 1108120,
          "regencyCode": 1108,
          "name": "PEUKAN BADA"
        },
        {
          "code": 1108130,
          "regencyCode": 1108,
          "name": "PULO ACEH"
        },
        {
          "code": 1109010,
          "regencyCode": 1109,
          "name": "GEUMPANG"
        },
        {
          "code": 1109011,
          "regencyCode": 1109,
          "name": "MANE"
        },
        {
          "code": 1109070,
          "regencyCode": 1109,
          "name": "GLUMPANG TIGA"
        },
        {
          "code": 1109071,
          "regencyCode": 1109,
          "name": "GLUMPANG BARO"
        },
        {
          "code": 1109080,
          "regencyCode": 1109,
          "name": "MUTIARA"
        },
        {
          "code": 1109081,
          "regencyCode": 1109,
          "name": "MUTIARA TIMUR"
        },
        {
          "code": 1109090,
          "regencyCode": 1109,
          "name": "TIRO/TRUSEB"
        },
        {
          "code": 1109100,
          "regencyCode": 1109,
          "name": "TANGSE"
        },
        {
          "code": 1109111,
          "regencyCode": 1109,
          "name": "KEUMALA"
        },
        {
          "code": 1109112,
          "regencyCode": 1109,
          "name": "TITEUE"
        },
        {
          "code": 1109120,
          "regencyCode": 1109,
          "name": "SAKTI"
        },
        {
          "code": 1109130,
          "regencyCode": 1109,
          "name": "MILA"
        },
        {
          "code": 1109140,
          "regencyCode": 1109,
          "name": "PADANG TIJI"
        },
        {
          "code": 1109150,
          "regencyCode": 1109,
          "name": "DELIMA"
        },
        {
          "code": 1109151,
          "regencyCode": 1109,
          "name": "GRONG GRONG"
        },
        {
          "code": 1109160,
          "regencyCode": 1109,
          "name": "INDRAJAYA"
        },
        {
          "code": 1109170,
          "regencyCode": 1109,
          "name": "PEUKAN BARO"
        },
        {
          "code": 1109180,
          "regencyCode": 1109,
          "name": "KEMBANG TANJONG"
        },
        {
          "code": 1109190,
          "regencyCode": 1109,
          "name": "SIMPANG TIGA"
        },
        {
          "code": 1109200,
          "regencyCode": 1109,
          "name": "KOTA SIGLI"
        },
        {
          "code": 1109210,
          "regencyCode": 1109,
          "name": "PIDIE"
        },
        {
          "code": 1109220,
          "regencyCode": 1109,
          "name": "BATEE"
        },
        {
          "code": 1109230,
          "regencyCode": 1109,
          "name": "MUARA TIGA"
        },
        {
          "code": 1110010,
          "regencyCode": 1110,
          "name": "SAMALANGA"
        },
        {
          "code": 1110011,
          "regencyCode": 1110,
          "name": "SIMPANG MAMPLAM"
        },
        {
          "code": 1110020,
          "regencyCode": 1110,
          "name": "PANDRAH"
        },
        {
          "code": 1110030,
          "regencyCode": 1110,
          "name": "JEUNIEB"
        },
        {
          "code": 1110031,
          "regencyCode": 1110,
          "name": "PEULIMBANG"
        },
        {
          "code": 1110040,
          "regencyCode": 1110,
          "name": "PEUDADA"
        },
        {
          "code": 1110050,
          "regencyCode": 1110,
          "name": "JULI"
        },
        {
          "code": 1110060,
          "regencyCode": 1110,
          "name": "JEUMPA"
        },
        {
          "code": 1110061,
          "regencyCode": 1110,
          "name": "KOTA JUANG"
        },
        {
          "code": 1110062,
          "regencyCode": 1110,
          "name": "KUALA"
        },
        {
          "code": 1110070,
          "regencyCode": 1110,
          "name": "JANGKA"
        },
        {
          "code": 1110080,
          "regencyCode": 1110,
          "name": "PEUSANGAN"
        },
        {
          "code": 1110081,
          "regencyCode": 1110,
          "name": "PEUSANGAN SELATAN"
        },
        {
          "code": 1110082,
          "regencyCode": 1110,
          "name": "PEUSANGAN SIBLAH KRUENG"
        },
        {
          "code": 1110090,
          "regencyCode": 1110,
          "name": "MAKMUR"
        },
        {
          "code": 1110100,
          "regencyCode": 1110,
          "name": "GANDA PURA"
        },
        {
          "code": 1110101,
          "regencyCode": 1110,
          "name": "KUTA BLANG"
        },
        {
          "code": 1111010,
          "regencyCode": 1111,
          "name": "SAWANG"
        },
        {
          "code": 1111020,
          "regencyCode": 1111,
          "name": "NISAM"
        },
        {
          "code": 1111021,
          "regencyCode": 1111,
          "name": "NISAM ANTARA"
        },
        {
          "code": 1111022,
          "regencyCode": 1111,
          "name": "BANDA BARO"
        },
        {
          "code": 1111030,
          "regencyCode": 1111,
          "name": "KUTA MAKMUR"
        },
        {
          "code": 1111031,
          "regencyCode": 1111,
          "name": "SIMPANG KERAMAT"
        },
        {
          "code": 1111040,
          "regencyCode": 1111,
          "name": "SYAMTALIRA BAYU"
        },
        {
          "code": 1111041,
          "regencyCode": 1111,
          "name": "GEUREUDONG PASE"
        },
        {
          "code": 1111050,
          "regencyCode": 1111,
          "name": "MEURAH MULIA"
        },
        {
          "code": 1111060,
          "regencyCode": 1111,
          "name": "MATANGKULI"
        },
        {
          "code": 1111061,
          "regencyCode": 1111,
          "name": "PAYA BAKONG"
        },
        {
          "code": 1111062,
          "regencyCode": 1111,
          "name": "PIRAK TIMU"
        },
        {
          "code": 1111070,
          "regencyCode": 1111,
          "name": "COT GIREK"
        },
        {
          "code": 1111080,
          "regencyCode": 1111,
          "name": "TANAH JAMBO AYE"
        },
        {
          "code": 1111081,
          "regencyCode": 1111,
          "name": "LANGKAHAN"
        },
        {
          "code": 1111090,
          "regencyCode": 1111,
          "name": "SEUNUDDON"
        },
        {
          "code": 1111100,
          "regencyCode": 1111,
          "name": "BAKTIYA"
        },
        {
          "code": 1111101,
          "regencyCode": 1111,
          "name": "BAKTIYA BARAT"
        },
        {
          "code": 1111110,
          "regencyCode": 1111,
          "name": "LHOKSUKON"
        },
        {
          "code": 1111120,
          "regencyCode": 1111,
          "name": "TANAH LUAS"
        },
        {
          "code": 1111121,
          "regencyCode": 1111,
          "name": "NIBONG"
        },
        {
          "code": 1111130,
          "regencyCode": 1111,
          "name": "SAMUDERA"
        },
        {
          "code": 1111140,
          "regencyCode": 1111,
          "name": "SYAMTALIRA ARON"
        },
        {
          "code": 1111150,
          "regencyCode": 1111,
          "name": "TANAH PASIR"
        },
        {
          "code": 1111151,
          "regencyCode": 1111,
          "name": "LAPANG"
        },
        {
          "code": 1111160,
          "regencyCode": 1111,
          "name": "MUARA BATU"
        },
        {
          "code": 1111170,
          "regencyCode": 1111,
          "name": "DEWANTARA"
        },
        {
          "code": 1112010,
          "regencyCode": 1112,
          "name": "MANGGENG"
        },
        {
          "code": 1112011,
          "regencyCode": 1112,
          "name": "LEMBAH SABIL"
        },
        {
          "code": 1112020,
          "regencyCode": 1112,
          "name": "TANGAN-TANGAN"
        },
        {
          "code": 1112021,
          "regencyCode": 1112,
          "name": "SETIA"
        },
        {
          "code": 1112030,
          "regencyCode": 1112,
          "name": "BLANG PIDIE"
        },
        {
          "code": 1112031,
          "regencyCode": 1112,
          "name": "JEUMPA"
        },
        {
          "code": 1112040,
          "regencyCode": 1112,
          "name": "SUSOH"
        },
        {
          "code": 1112050,
          "regencyCode": 1112,
          "name": "KUALA BATEE"
        },
        {
          "code": 1112060,
          "regencyCode": 1112,
          "name": "BABAH ROT"
        },
        {
          "code": 1113010,
          "regencyCode": 1113,
          "name": "KUTA PANJANG"
        },
        {
          "code": 1113011,
          "regencyCode": 1113,
          "name": "BLANG JERANGO"
        },
        {
          "code": 1113020,
          "regencyCode": 1113,
          "name": "BLANGKEJEREN"
        },
        {
          "code": 1113021,
          "regencyCode": 1113,
          "name": "PUTRI BETUNG"
        },
        {
          "code": 1113022,
          "regencyCode": 1113,
          "name": "DABUN GELANG"
        },
        {
          "code": 1113023,
          "regencyCode": 1113,
          "name": "BLANG PEGAYON"
        },
        {
          "code": 1113030,
          "regencyCode": 1113,
          "name": "PINING"
        },
        {
          "code": 1113040,
          "regencyCode": 1113,
          "name": "RIKIT GAIB"
        },
        {
          "code": 1113041,
          "regencyCode": 1113,
          "name": "PANTAN CUACA"
        },
        {
          "code": 1113050,
          "regencyCode": 1113,
          "name": "TERANGUN"
        },
        {
          "code": 1113051,
          "regencyCode": 1113,
          "name": "TRIPE JAYA"
        },
        {
          "code": 1114010,
          "regencyCode": 1114,
          "name": "TAMIANG HULU"
        },
        {
          "code": 1114011,
          "regencyCode": 1114,
          "name": "BANDAR PUSAKA"
        },
        {
          "code": 1114020,
          "regencyCode": 1114,
          "name": "KEJURUAN MUDA"
        },
        {
          "code": 1114021,
          "regencyCode": 1114,
          "name": "TENGGULUN"
        },
        {
          "code": 1114030,
          "regencyCode": 1114,
          "name": "RANTAU"
        },
        {
          "code": 1114040,
          "regencyCode": 1114,
          "name": "KOTA KUALA SIMPANG"
        },
        {
          "code": 1114050,
          "regencyCode": 1114,
          "name": "SERUWAY"
        },
        {
          "code": 1114060,
          "regencyCode": 1114,
          "name": "BENDAHARA"
        },
        {
          "code": 1114061,
          "regencyCode": 1114,
          "name": "BANDA MULIA"
        },
        {
          "code": 1114070,
          "regencyCode": 1114,
          "name": "KARANG BARU"
        },
        {
          "code": 1114071,
          "regencyCode": 1114,
          "name": "SEKERAK"
        },
        {
          "code": 1114080,
          "regencyCode": 1114,
          "name": "MANYAK PAYED"
        },
        {
          "code": 1115010,
          "regencyCode": 1115,
          "name": "DARUL MAKMUR"
        },
        {
          "code": 1115011,
          "regencyCode": 1115,
          "name": "TRIPA MAKMUR"
        },
        {
          "code": 1115020,
          "regencyCode": 1115,
          "name": "KUALA"
        },
        {
          "code": 1115021,
          "regencyCode": 1115,
          "name": "KUALA PESISIR"
        },
        {
          "code": 1115022,
          "regencyCode": 1115,
          "name": "TADU RAYA"
        },
        {
          "code": 1115030,
          "regencyCode": 1115,
          "name": "BEUTONG"
        },
        {
          "code": 1115031,
          "regencyCode": 1115,
          "name": "BEUTONG ATEUH BANGGALANG"
        },
        {
          "code": 1115040,
          "regencyCode": 1115,
          "name": "SEUNAGAN"
        },
        {
          "code": 1115041,
          "regencyCode": 1115,
          "name": "SUKA MAKMUE"
        },
        {
          "code": 1115050,
          "regencyCode": 1115,
          "name": "SEUNAGAN TIMUR"
        },
        {
          "code": 1116010,
          "regencyCode": 1116,
          "name": "TEUNOM"
        },
        {
          "code": 1116011,
          "regencyCode": 1116,
          "name": "PASIE RAYA"
        },
        {
          "code": 1116020,
          "regencyCode": 1116,
          "name": "PANGA"
        },
        {
          "code": 1116030,
          "regencyCode": 1116,
          "name": "KRUENG SABEE"
        },
        {
          "code": 1116040,
          "regencyCode": 1116,
          "name": "SETIA BAKTI"
        },
        {
          "code": 1116050,
          "regencyCode": 1116,
          "name": "SAMPOINIET"
        },
        {
          "code": 1116051,
          "regencyCode": 1116,
          "name": "DARUL HIKMAH"
        },
        {
          "code": 1116060,
          "regencyCode": 1116,
          "name": "JAYA"
        },
        {
          "code": 1116061,
          "regencyCode": 1116,
          "name": "INDRA JAYA"
        },
        {
          "code": 1117010,
          "regencyCode": 1117,
          "name": "TIMANG GAJAH"
        },
        {
          "code": 1117011,
          "regencyCode": 1117,
          "name": "GAJAH PUTIH"
        },
        {
          "code": 1117020,
          "regencyCode": 1117,
          "name": "PINTU RIME GAYO"
        },
        {
          "code": 1117030,
          "regencyCode": 1117,
          "name": "BUKIT"
        },
        {
          "code": 1117040,
          "regencyCode": 1117,
          "name": "WIH PESAM"
        },
        {
          "code": 1117050,
          "regencyCode": 1117,
          "name": "BANDAR"
        },
        {
          "code": 1117051,
          "regencyCode": 1117,
          "name": "BENER KELIPAH"
        },
        {
          "code": 1117060,
          "regencyCode": 1117,
          "name": "SYIAH UTAMA"
        },
        {
          "code": 1117061,
          "regencyCode": 1117,
          "name": "MESIDAH"
        },
        {
          "code": 1117070,
          "regencyCode": 1117,
          "name": "PERMATA"
        },
        {
          "code": 1118010,
          "regencyCode": 1118,
          "name": "MEUREUDU"
        },
        {
          "code": 1118020,
          "regencyCode": 1118,
          "name": "MEURAH DUA"
        },
        {
          "code": 1118030,
          "regencyCode": 1118,
          "name": "BANDAR DUA"
        },
        {
          "code": 1118040,
          "regencyCode": 1118,
          "name": "JANGKA BUYA"
        },
        {
          "code": 1118050,
          "regencyCode": 1118,
          "name": "ULIM"
        },
        {
          "code": 1118060,
          "regencyCode": 1118,
          "name": "TRIENGGADENG"
        },
        {
          "code": 1118070,
          "regencyCode": 1118,
          "name": "PANTERAJA"
        },
        {
          "code": 1118080,
          "regencyCode": 1118,
          "name": "BANDAR BARU"
        },
        {
          "code": 1171010,
          "regencyCode": 1171,
          "name": "MEURAXA"
        },
        {
          "code": 1171011,
          "regencyCode": 1171,
          "name": "JAYA BARU"
        },
        {
          "code": 1171012,
          "regencyCode": 1171,
          "name": "BANDA RAYA"
        },
        {
          "code": 1171020,
          "regencyCode": 1171,
          "name": "BAITURRAHMAN"
        },
        {
          "code": 1171021,
          "regencyCode": 1171,
          "name": "LUENG BATA"
        },
        {
          "code": 1171030,
          "regencyCode": 1171,
          "name": "KUTA ALAM"
        },
        {
          "code": 1171031,
          "regencyCode": 1171,
          "name": "KUTA RAJA"
        },
        {
          "code": 1171040,
          "regencyCode": 1171,
          "name": "SYIAH KUALA"
        },
        {
          "code": 1171041,
          "regencyCode": 1171,
          "name": "ULEE KARENG"
        },
        {
          "code": 1172010,
          "regencyCode": 1172,
          "name": "SUKAJAYA"
        },
        {
          "code": 1172020,
          "regencyCode": 1172,
          "name": "SUKAKARYA"
        },
        {
          "code": 1173010,
          "regencyCode": 1173,
          "name": "LANGSA TIMUR"
        },
        {
          "code": 1173011,
          "regencyCode": 1173,
          "name": "LANGSA LAMA"
        },
        {
          "code": 1173020,
          "regencyCode": 1173,
          "name": "LANGSA BARAT"
        },
        {
          "code": 1173021,
          "regencyCode": 1173,
          "name": "LANGSA BARO"
        },
        {
          "code": 1173030,
          "regencyCode": 1173,
          "name": "LANGSA KOTA"
        },
        {
          "code": 1174010,
          "regencyCode": 1174,
          "name": "BLANG MANGAT"
        },
        {
          "code": 1174020,
          "regencyCode": 1174,
          "name": "MUARA DUA"
        },
        {
          "code": 1174021,
          "regencyCode": 1174,
          "name": "MUARA SATU"
        },
        {
          "code": 1174030,
          "regencyCode": 1174,
          "name": "BANDA SAKTI"
        },
        {
          "code": 1175010,
          "regencyCode": 1175,
          "name": "SIMPANG KIRI"
        },
        {
          "code": 1175020,
          "regencyCode": 1175,
          "name": "PENANGGALAN"
        },
        {
          "code": 1175030,
          "regencyCode": 1175,
          "name": "RUNDENG"
        },
        {
          "code": 1175040,
          "regencyCode": 1175,
          "name": "SULTAN DAULAT"
        },
        {
          "code": 1175050,
          "regencyCode": 1175,
          "name": "LONGKIB"
        },
        {
          "code": 1201060,
          "regencyCode": 1201,
          "name": "IDANO GAWO"
        },
        {
          "code": 1201061,
          "regencyCode": 1201,
          "name": "BAWOLATO"
        },
        {
          "code": 1201062,
          "regencyCode": 1201,
          "name": "ULUGAWO"
        },
        {
          "code": 1201070,
          "regencyCode": 1201,
          "name": "GIDO"
        },
        {
          "code": 1201071,
          "regencyCode": 1201,
          "name": "SOGAEADU"
        },
        {
          "code": 1201081,
          "regencyCode": 1201,
          "name": "MA U"
        },
        {
          "code": 1201082,
          "regencyCode": 1201,
          "name": "SOMOLO - MOLO"
        },
        {
          "code": 1201130,
          "regencyCode": 1201,
          "name": "HILIDUHO"
        },
        {
          "code": 1201131,
          "regencyCode": 1201,
          "name": "HILI SERANGKAI"
        },
        {
          "code": 1201132,
          "regencyCode": 1201,
          "name": "BOTOMUZOI"
        },
        {
          "code": 1202010,
          "regencyCode": 1202,
          "name": "BATAHAN"
        },
        {
          "code": 1202011,
          "regencyCode": 1202,
          "name": "SINUNUKAN"
        },
        {
          "code": 1202020,
          "regencyCode": 1202,
          "name": "BATANG NATAL"
        },
        {
          "code": 1202021,
          "regencyCode": 1202,
          "name": "LINGGA BAYU"
        },
        {
          "code": 1202022,
          "regencyCode": 1202,
          "name": "RANTO BAEK"
        },
        {
          "code": 1202030,
          "regencyCode": 1202,
          "name": "KOTANOPAN"
        },
        {
          "code": 1202031,
          "regencyCode": 1202,
          "name": "ULU PUNGKUT"
        },
        {
          "code": 1202032,
          "regencyCode": 1202,
          "name": "TAMBANGAN"
        },
        {
          "code": 1202033,
          "regencyCode": 1202,
          "name": "LEMBAH SORIK MARAPI"
        },
        {
          "code": 1202034,
          "regencyCode": 1202,
          "name": "PUNCAK SORIK MARAPI"
        },
        {
          "code": 1202040,
          "regencyCode": 1202,
          "name": "MUARA SIPONGI"
        },
        {
          "code": 1202041,
          "regencyCode": 1202,
          "name": "PAKANTAN"
        },
        {
          "code": 1202050,
          "regencyCode": 1202,
          "name": "PANYABUNGAN"
        },
        {
          "code": 1202051,
          "regencyCode": 1202,
          "name": "PANYABUNGAN SELATAN"
        },
        {
          "code": 1202052,
          "regencyCode": 1202,
          "name": "PANYABUNGAN BARAT"
        },
        {
          "code": 1202053,
          "regencyCode": 1202,
          "name": "PANYABUNGAN UTARA"
        },
        {
          "code": 1202054,
          "regencyCode": 1202,
          "name": "PANYABUNGAN TIMUR"
        },
        {
          "code": 1202055,
          "regencyCode": 1202,
          "name": "HUTA BARGOT"
        },
        {
          "code": 1202060,
          "regencyCode": 1202,
          "name": "NATAL"
        },
        {
          "code": 1202070,
          "regencyCode": 1202,
          "name": "MUARA BATANG GADIS"
        },
        {
          "code": 1202080,
          "regencyCode": 1202,
          "name": "SIABU"
        },
        {
          "code": 1202081,
          "regencyCode": 1202,
          "name": "BUKIT MALINTANG"
        },
        {
          "code": 1202082,
          "regencyCode": 1202,
          "name": "NAGA JUANG"
        },
        {
          "code": 1203010,
          "regencyCode": 1203,
          "name": "BATANG ANGKOLA"
        },
        {
          "code": 1203011,
          "regencyCode": 1203,
          "name": "SAYUR MATINGGI"
        },
        {
          "code": 1203012,
          "regencyCode": 1203,
          "name": "TANO TOMBANGAN ANGKOLA"
        },
        {
          "code": 1203070,
          "regencyCode": 1203,
          "name": "ANGKOLA TIMUR"
        },
        {
          "code": 1203080,
          "regencyCode": 1203,
          "name": "ANGKOLA SELATAN"
        },
        {
          "code": 1203090,
          "regencyCode": 1203,
          "name": "ANGKOLA  BARAT"
        },
        {
          "code": 1203091,
          "regencyCode": 1203,
          "name": "ANGKOLA SANGKUNUR"
        },
        {
          "code": 1203100,
          "regencyCode": 1203,
          "name": "BATANG TORU"
        },
        {
          "code": 1203101,
          "regencyCode": 1203,
          "name": "MARANCAR"
        },
        {
          "code": 1203102,
          "regencyCode": 1203,
          "name": "MUARA BATANG TORU"
        },
        {
          "code": 1203110,
          "regencyCode": 1203,
          "name": "SIPIROK"
        },
        {
          "code": 1203120,
          "regencyCode": 1203,
          "name": "ARSE"
        },
        {
          "code": 1203160,
          "regencyCode": 1203,
          "name": "SAIPAR DOLOK HOLE"
        },
        {
          "code": 1203161,
          "regencyCode": 1203,
          "name": "AEK BILAH"
        },
        {
          "code": 1204010,
          "regencyCode": 1204,
          "name": "PINANG SORI"
        },
        {
          "code": 1204011,
          "regencyCode": 1204,
          "name": "BADIRI"
        },
        {
          "code": 1204020,
          "regencyCode": 1204,
          "name": "SIBABANGUN"
        },
        {
          "code": 1204021,
          "regencyCode": 1204,
          "name": "LUMUT"
        },
        {
          "code": 1204022,
          "regencyCode": 1204,
          "name": "SUKABANGUN"
        },
        {
          "code": 1204030,
          "regencyCode": 1204,
          "name": "PANDAN"
        },
        {
          "code": 1204031,
          "regencyCode": 1204,
          "name": "TUKKA"
        },
        {
          "code": 1204032,
          "regencyCode": 1204,
          "name": "SARUDIK"
        },
        {
          "code": 1204040,
          "regencyCode": 1204,
          "name": "TAPIAN NAULI"
        },
        {
          "code": 1204041,
          "regencyCode": 1204,
          "name": "SITAHUIS"
        },
        {
          "code": 1204050,
          "regencyCode": 1204,
          "name": "KOLANG"
        },
        {
          "code": 1204060,
          "regencyCode": 1204,
          "name": "SORKAM"
        },
        {
          "code": 1204061,
          "regencyCode": 1204,
          "name": "SORKAM BARAT"
        },
        {
          "code": 1204062,
          "regencyCode": 1204,
          "name": "PASARIBU TOBING"
        },
        {
          "code": 1204070,
          "regencyCode": 1204,
          "name": "BARUS"
        },
        {
          "code": 1204071,
          "regencyCode": 1204,
          "name": "SOSOR GADONG"
        },
        {
          "code": 1204072,
          "regencyCode": 1204,
          "name": "ANDAM DEWI"
        },
        {
          "code": 1204073,
          "regencyCode": 1204,
          "name": "BARUS UTARA"
        },
        {
          "code": 1204080,
          "regencyCode": 1204,
          "name": "MANDUAMAS"
        },
        {
          "code": 1204081,
          "regencyCode": 1204,
          "name": "SIRANDORUNG"
        },
        {
          "code": 1205030,
          "regencyCode": 1205,
          "name": "PARMONANGAN"
        },
        {
          "code": 1205040,
          "regencyCode": 1205,
          "name": "ADIANKOTING"
        },
        {
          "code": 1205050,
          "regencyCode": 1205,
          "name": "SIPOHOLON"
        },
        {
          "code": 1205060,
          "regencyCode": 1205,
          "name": "TARUTUNG"
        },
        {
          "code": 1205061,
          "regencyCode": 1205,
          "name": "SIATAS BARITA"
        },
        {
          "code": 1205070,
          "regencyCode": 1205,
          "name": "PAHAE JULU"
        },
        {
          "code": 1205080,
          "regencyCode": 1205,
          "name": "PAHAE JAE"
        },
        {
          "code": 1205081,
          "regencyCode": 1205,
          "name": "PURBATUA"
        },
        {
          "code": 1205082,
          "regencyCode": 1205,
          "name": "SIMANGUMBAN"
        },
        {
          "code": 1205090,
          "regencyCode": 1205,
          "name": "PANGARIBUAN"
        },
        {
          "code": 1205100,
          "regencyCode": 1205,
          "name": "GAROGA"
        },
        {
          "code": 1205110,
          "regencyCode": 1205,
          "name": "SIPAHUTAR"
        },
        {
          "code": 1205120,
          "regencyCode": 1205,
          "name": "SIBORONGBORONG"
        },
        {
          "code": 1205130,
          "regencyCode": 1205,
          "name": "PAGARAN"
        },
        {
          "code": 1205180,
          "regencyCode": 1205,
          "name": "MUARA"
        },
        {
          "code": 1206030,
          "regencyCode": 1206,
          "name": "BALIGE"
        },
        {
          "code": 1206031,
          "regencyCode": 1206,
          "name": "TAMPAHAN"
        },
        {
          "code": 1206040,
          "regencyCode": 1206,
          "name": "LAGUBOTI"
        },
        {
          "code": 1206050,
          "regencyCode": 1206,
          "name": "HABINSARAN"
        },
        {
          "code": 1206051,
          "regencyCode": 1206,
          "name": "BORBOR"
        },
        {
          "code": 1206052,
          "regencyCode": 1206,
          "name": "NASSAU"
        },
        {
          "code": 1206060,
          "regencyCode": 1206,
          "name": "SILAEN"
        },
        {
          "code": 1206061,
          "regencyCode": 1206,
          "name": "SIGUMPAR"
        },
        {
          "code": 1206070,
          "regencyCode": 1206,
          "name": "PORSEA"
        },
        {
          "code": 1206071,
          "regencyCode": 1206,
          "name": "PINTU POHAN MERANTI"
        },
        {
          "code": 1206072,
          "regencyCode": 1206,
          "name": "SIANTAR NARUMONDA"
        },
        {
          "code": 1206073,
          "regencyCode": 1206,
          "name": "PARMAKSIAN"
        },
        {
          "code": 1206080,
          "regencyCode": 1206,
          "name": "LUMBAN JULU"
        },
        {
          "code": 1206081,
          "regencyCode": 1206,
          "name": "ULUAN"
        },
        {
          "code": 1206082,
          "regencyCode": 1206,
          "name": "AJIBATA"
        },
        {
          "code": 1206083,
          "regencyCode": 1206,
          "name": "BONATUA LUNASI"
        },
        {
          "code": 1207050,
          "regencyCode": 1207,
          "name": "BILAH HULU"
        },
        {
          "code": 1207070,
          "regencyCode": 1207,
          "name": "PANGKATAN"
        },
        {
          "code": 1207080,
          "regencyCode": 1207,
          "name": "BILAH BARAT"
        },
        {
          "code": 1207130,
          "regencyCode": 1207,
          "name": "BILAH HILIR"
        },
        {
          "code": 1207140,
          "regencyCode": 1207,
          "name": "PANAI HULU"
        },
        {
          "code": 1207150,
          "regencyCode": 1207,
          "name": "PANAI TENGAH"
        },
        {
          "code": 1207160,
          "regencyCode": 1207,
          "name": "PANAI HILIR"
        },
        {
          "code": 1207210,
          "regencyCode": 1207,
          "name": "RANTAU SELATAN"
        },
        {
          "code": 1207220,
          "regencyCode": 1207,
          "name": "RANTAU UTARA"
        },
        {
          "code": 1208010,
          "regencyCode": 1208,
          "name": "BANDAR PASIR MANDOGE"
        },
        {
          "code": 1208020,
          "regencyCode": 1208,
          "name": "BANDAR PULAU"
        },
        {
          "code": 1208021,
          "regencyCode": 1208,
          "name": "AEK SONGSONGAN"
        },
        {
          "code": 1208022,
          "regencyCode": 1208,
          "name": "RAHUNING"
        },
        {
          "code": 1208030,
          "regencyCode": 1208,
          "name": "PULAU RAKYAT"
        },
        {
          "code": 1208031,
          "regencyCode": 1208,
          "name": "AEK KUASAN"
        },
        {
          "code": 1208032,
          "regencyCode": 1208,
          "name": "AEK LEDONG"
        },
        {
          "code": 1208040,
          "regencyCode": 1208,
          "name": "SEI KEPAYANG"
        },
        {
          "code": 1208041,
          "regencyCode": 1208,
          "name": "SEI KEPAYANG BARAT"
        },
        {
          "code": 1208042,
          "regencyCode": 1208,
          "name": "SEI KEPAYANG TIMUR"
        },
        {
          "code": 1208050,
          "regencyCode": 1208,
          "name": "TANJUNG BALAI"
        },
        {
          "code": 1208060,
          "regencyCode": 1208,
          "name": "SIMPANG EMPAT"
        },
        {
          "code": 1208061,
          "regencyCode": 1208,
          "name": "TELUK DALAM"
        },
        {
          "code": 1208070,
          "regencyCode": 1208,
          "name": "AIR BATU"
        },
        {
          "code": 1208071,
          "regencyCode": 1208,
          "name": "SEI DADAP"
        },
        {
          "code": 1208080,
          "regencyCode": 1208,
          "name": "BUNTU PANE"
        },
        {
          "code": 1208081,
          "regencyCode": 1208,
          "name": "TINGGI RAJA"
        },
        {
          "code": 1208082,
          "regencyCode": 1208,
          "name": "SETIA JANJI"
        },
        {
          "code": 1208090,
          "regencyCode": 1208,
          "name": "MERANTI"
        },
        {
          "code": 1208091,
          "regencyCode": 1208,
          "name": "PULO BANDRING"
        },
        {
          "code": 1208092,
          "regencyCode": 1208,
          "name": "RAWANG PANCA ARGA"
        },
        {
          "code": 1208100,
          "regencyCode": 1208,
          "name": "AIR JOMAN"
        },
        {
          "code": 1208101,
          "regencyCode": 1208,
          "name": "SILAU LAUT"
        },
        {
          "code": 1208160,
          "regencyCode": 1208,
          "name": "KISARAN BARAT"
        },
        {
          "code": 1208170,
          "regencyCode": 1208,
          "name": "KISARAN TIMUR"
        },
        {
          "code": 1209010,
          "regencyCode": 1209,
          "name": "SILIMAKUTA"
        },
        {
          "code": 1209011,
          "regencyCode": 1209,
          "name": "PEMATANG SILIMAHUTA"
        },
        {
          "code": 1209020,
          "regencyCode": 1209,
          "name": "PURBA"
        },
        {
          "code": 1209021,
          "regencyCode": 1209,
          "name": "HARANGGAOL HORISON"
        },
        {
          "code": 1209030,
          "regencyCode": 1209,
          "name": "DOLOK PARDAMEAN"
        },
        {
          "code": 1209040,
          "regencyCode": 1209,
          "name": "SIDAMANIK"
        },
        {
          "code": 1209041,
          "regencyCode": 1209,
          "name": "PEMATANG SIDAMANIK"
        },
        {
          "code": 1209050,
          "regencyCode": 1209,
          "name": "GIRSANG SIPANGAN BOLON"
        },
        {
          "code": 1209060,
          "regencyCode": 1209,
          "name": "TANAH JAWA"
        },
        {
          "code": 1209061,
          "regencyCode": 1209,
          "name": "HATONDUHAN"
        },
        {
          "code": 1209070,
          "regencyCode": 1209,
          "name": "DOLOK PANRIBUAN"
        },
        {
          "code": 1209080,
          "regencyCode": 1209,
          "name": "JORLANG HATARAN"
        },
        {
          "code": 1209090,
          "regencyCode": 1209,
          "name": "PANEI"
        },
        {
          "code": 1209091,
          "regencyCode": 1209,
          "name": "PANOMBEAN PANEI"
        },
        {
          "code": 1209100,
          "regencyCode": 1209,
          "name": "RAYA"
        },
        {
          "code": 1209110,
          "regencyCode": 1209,
          "name": "DOLOK SILAU"
        },
        {
          "code": 1209120,
          "regencyCode": 1209,
          "name": "SILAU KAHEAN"
        },
        {
          "code": 1209130,
          "regencyCode": 1209,
          "name": "RAYA KAHEAN"
        },
        {
          "code": 1209140,
          "regencyCode": 1209,
          "name": "TAPIAN DOLOK"
        },
        {
          "code": 1209150,
          "regencyCode": 1209,
          "name": "DOLOK BATU NANGGAR"
        },
        {
          "code": 1209160,
          "regencyCode": 1209,
          "name": "SIANTAR"
        },
        {
          "code": 1209161,
          "regencyCode": 1209,
          "name": "GUNUNG MALELA"
        },
        {
          "code": 1209162,
          "regencyCode": 1209,
          "name": "GUNUNG MALIGAS"
        },
        {
          "code": 1209170,
          "regencyCode": 1209,
          "name": "HUTABAYU RAJA"
        },
        {
          "code": 1209171,
          "regencyCode": 1209,
          "name": "JAWA MARAJA BAH JAMBI"
        },
        {
          "code": 1209180,
          "regencyCode": 1209,
          "name": "PEMATANG BANDAR"
        },
        {
          "code": 1209181,
          "regencyCode": 1209,
          "name": "BANDAR HULUAN"
        },
        {
          "code": 1209190,
          "regencyCode": 1209,
          "name": "BANDAR"
        },
        {
          "code": 1209191,
          "regencyCode": 1209,
          "name": "BANDAR MASILAM"
        },
        {
          "code": 1209200,
          "regencyCode": 1209,
          "name": "BOSAR MALIGAS"
        },
        {
          "code": 1209210,
          "regencyCode": 1209,
          "name": "UJUNG PADANG"
        },
        {
          "code": 1210030,
          "regencyCode": 1210,
          "name": "SIDIKALANG"
        },
        {
          "code": 1210031,
          "regencyCode": 1210,
          "name": "BERAMPU"
        },
        {
          "code": 1210032,
          "regencyCode": 1210,
          "name": "SITINJO"
        },
        {
          "code": 1210040,
          "regencyCode": 1210,
          "name": "PARBULUAN"
        },
        {
          "code": 1210050,
          "regencyCode": 1210,
          "name": "SUMBUL"
        },
        {
          "code": 1210051,
          "regencyCode": 1210,
          "name": "SILAHI SABUNGAN"
        },
        {
          "code": 1210060,
          "regencyCode": 1210,
          "name": "SILIMA PUNGGA-PUNGGA"
        },
        {
          "code": 1210061,
          "regencyCode": 1210,
          "name": "LAE PARIRA"
        },
        {
          "code": 1210070,
          "regencyCode": 1210,
          "name": "SIEMPAT NEMPU"
        },
        {
          "code": 1210080,
          "regencyCode": 1210,
          "name": "SIEMPAT NEMPU HULU"
        },
        {
          "code": 1210090,
          "regencyCode": 1210,
          "name": "SIEMPAT NEMPU HILIR"
        },
        {
          "code": 1210100,
          "regencyCode": 1210,
          "name": "TIGA LINGGA"
        },
        {
          "code": 1210101,
          "regencyCode": 1210,
          "name": "GUNUNG SITEMBER"
        },
        {
          "code": 1210110,
          "regencyCode": 1210,
          "name": "PEGAGAN HILIR"
        },
        {
          "code": 1210120,
          "regencyCode": 1210,
          "name": "TANAH PINEM"
        },
        {
          "code": 1211010,
          "regencyCode": 1211,
          "name": "MARDINGDING"
        },
        {
          "code": 1211020,
          "regencyCode": 1211,
          "name": "LAUBALENG"
        },
        {
          "code": 1211030,
          "regencyCode": 1211,
          "name": "TIGA BINANGA"
        },
        {
          "code": 1211040,
          "regencyCode": 1211,
          "name": "JUHAR"
        },
        {
          "code": 1211050,
          "regencyCode": 1211,
          "name": "MUNTE"
        },
        {
          "code": 1211060,
          "regencyCode": 1211,
          "name": "KUTA BULUH"
        },
        {
          "code": 1211070,
          "regencyCode": 1211,
          "name": "PAYUNG"
        },
        {
          "code": 1211071,
          "regencyCode": 1211,
          "name": "TIGANDERKET"
        },
        {
          "code": 1211080,
          "regencyCode": 1211,
          "name": "SIMPANG EMPAT"
        },
        {
          "code": 1211081,
          "regencyCode": 1211,
          "name": "NAMAN TERAN"
        },
        {
          "code": 1211082,
          "regencyCode": 1211,
          "name": "MERDEKA"
        },
        {
          "code": 1211090,
          "regencyCode": 1211,
          "name": "KABANJAHE"
        },
        {
          "code": 1211100,
          "regencyCode": 1211,
          "name": "BERASTAGI"
        },
        {
          "code": 1211110,
          "regencyCode": 1211,
          "name": "TIGAPANAH"
        },
        {
          "code": 1211111,
          "regencyCode": 1211,
          "name": "DOLAT RAYAT"
        },
        {
          "code": 1211120,
          "regencyCode": 1211,
          "name": "MEREK"
        },
        {
          "code": 1211130,
          "regencyCode": 1211,
          "name": "BARUSJAHE"
        },
        {
          "code": 1212010,
          "regencyCode": 1212,
          "name": "GUNUNG MERIAH"
        },
        {
          "code": 1212020,
          "regencyCode": 1212,
          "name": "SINEMBAH TANJUNG MUDA HULU"
        },
        {
          "code": 1212030,
          "regencyCode": 1212,
          "name": "SIBOLANGIT"
        },
        {
          "code": 1212040,
          "regencyCode": 1212,
          "name": "KUTALIMBARU"
        },
        {
          "code": 1212050,
          "regencyCode": 1212,
          "name": "PANCUR BATU"
        },
        {
          "code": 1212060,
          "regencyCode": 1212,
          "name": "NAMO RAMBE"
        },
        {
          "code": 1212070,
          "regencyCode": 1212,
          "name": "BIRU-BIRU"
        },
        {
          "code": 1212080,
          "regencyCode": 1212,
          "name": "SINEMBAH TANJUNG MUDA HILIR"
        },
        {
          "code": 1212090,
          "regencyCode": 1212,
          "name": "BANGUN PURBA"
        },
        {
          "code": 1212190,
          "regencyCode": 1212,
          "name": "GALANG"
        },
        {
          "code": 1212200,
          "regencyCode": 1212,
          "name": "TANJUNG MORAWA"
        },
        {
          "code": 1212210,
          "regencyCode": 1212,
          "name": "PATUMBAK"
        },
        {
          "code": 1212220,
          "regencyCode": 1212,
          "name": "DELI TUA"
        },
        {
          "code": 1212230,
          "regencyCode": 1212,
          "name": "SUNGGAL"
        },
        {
          "code": 1212240,
          "regencyCode": 1212,
          "name": "HAMPARAN PERAK"
        },
        {
          "code": 1212250,
          "regencyCode": 1212,
          "name": "LABUHAN DELI"
        },
        {
          "code": 1212260,
          "regencyCode": 1212,
          "name": "PERCUT SEI TUAN"
        },
        {
          "code": 1212270,
          "regencyCode": 1212,
          "name": "BATANG KUIS"
        },
        {
          "code": 1212280,
          "regencyCode": 1212,
          "name": "PANTAI LABU"
        },
        {
          "code": 1212290,
          "regencyCode": 1212,
          "name": "BERINGIN"
        },
        {
          "code": 1212300,
          "regencyCode": 1212,
          "name": "LUBUK PAKAM"
        },
        {
          "code": 1212310,
          "regencyCode": 1212,
          "name": "PAGAR MERBAU"
        },
        {
          "code": 1213010,
          "regencyCode": 1213,
          "name": "BOHOROK"
        },
        {
          "code": 1213011,
          "regencyCode": 1213,
          "name": "SIRAPIT"
        },
        {
          "code": 1213020,
          "regencyCode": 1213,
          "name": "SALAPIAN"
        },
        {
          "code": 1213021,
          "regencyCode": 1213,
          "name": "KUTAMBARU"
        },
        {
          "code": 1213030,
          "regencyCode": 1213,
          "name": "SEI BINGAI"
        },
        {
          "code": 1213040,
          "regencyCode": 1213,
          "name": "KUALA"
        },
        {
          "code": 1213050,
          "regencyCode": 1213,
          "name": "SELESAI"
        },
        {
          "code": 1213060,
          "regencyCode": 1213,
          "name": "BINJAI"
        },
        {
          "code": 1213070,
          "regencyCode": 1213,
          "name": "STABAT"
        },
        {
          "code": 1213080,
          "regencyCode": 1213,
          "name": "WAMPU"
        },
        {
          "code": 1213090,
          "regencyCode": 1213,
          "name": "BATANG SERANGAN"
        },
        {
          "code": 1213100,
          "regencyCode": 1213,
          "name": "SAWIT SEBERANG"
        },
        {
          "code": 1213110,
          "regencyCode": 1213,
          "name": "PADANG TUALANG"
        },
        {
          "code": 1213120,
          "regencyCode": 1213,
          "name": "HINAI"
        },
        {
          "code": 1213130,
          "regencyCode": 1213,
          "name": "SECANGGANG"
        },
        {
          "code": 1213140,
          "regencyCode": 1213,
          "name": "TANJUNG PURA"
        },
        {
          "code": 1213150,
          "regencyCode": 1213,
          "name": "GEBANG"
        },
        {
          "code": 1213160,
          "regencyCode": 1213,
          "name": "BABALAN"
        },
        {
          "code": 1213170,
          "regencyCode": 1213,
          "name": "SEI LEPAN"
        },
        {
          "code": 1213180,
          "regencyCode": 1213,
          "name": "BRANDAN BARAT"
        },
        {
          "code": 1213190,
          "regencyCode": 1213,
          "name": "BESITANG"
        },
        {
          "code": 1213200,
          "regencyCode": 1213,
          "name": "PANGKALAN SUSU"
        },
        {
          "code": 1213201,
          "regencyCode": 1213,
          "name": "PEMATANG JAYA"
        },
        {
          "code": 1214010,
          "regencyCode": 1214,
          "name": "HIBALA"
        },
        {
          "code": 1214011,
          "regencyCode": 1214,
          "name": "TANAH MASA"
        },
        {
          "code": 1214020,
          "regencyCode": 1214,
          "name": "PULAU-PULAU BATU"
        },
        {
          "code": 1214021,
          "regencyCode": 1214,
          "name": "PULAU-PULAU BATU TIMUR"
        },
        {
          "code": 1214022,
          "regencyCode": 1214,
          "name": "SIMUK"
        },
        {
          "code": 1214023,
          "regencyCode": 1214,
          "name": "PULAU-PULAU BATU BARAT"
        },
        {
          "code": 1214024,
          "regencyCode": 1214,
          "name": "PULAU-PULAU BATU UTARA"
        },
        {
          "code": 1214030,
          "regencyCode": 1214,
          "name": "TELUK DALAM"
        },
        {
          "code": 1214031,
          "regencyCode": 1214,
          "name": "FANAYAMA"
        },
        {
          "code": 1214032,
          "regencyCode": 1214,
          "name": "TOMA"
        },
        {
          "code": 1214033,
          "regencyCode": 1214,
          "name": "MANIAMOLO"
        },
        {
          "code": 1214034,
          "regencyCode": 1214,
          "name": "MAZINO"
        },
        {
          "code": 1214035,
          "regencyCode": 1214,
          "name": "LUAHAGUNDRE MANIAMOLO"
        },
        {
          "code": 1214036,
          "regencyCode": 1214,
          "name": "ONOLALU"
        },
        {
          "code": 1214040,
          "regencyCode": 1214,
          "name": "AMANDRAYA"
        },
        {
          "code": 1214041,
          "regencyCode": 1214,
          "name": "ARAMO"
        },
        {
          "code": 1214042,
          "regencyCode": 1214,
          "name": "ULUSUSUA"
        },
        {
          "code": 1214050,
          "regencyCode": 1214,
          "name": "LAHUSA"
        },
        {
          "code": 1214051,
          "regencyCode": 1214,
          "name": "SIDUAORI"
        },
        {
          "code": 1214052,
          "regencyCode": 1214,
          "name": "SOMAMBAWA"
        },
        {
          "code": 1214060,
          "regencyCode": 1214,
          "name": "GOMO"
        },
        {
          "code": 1214061,
          "regencyCode": 1214,
          "name": "SUSUA"
        },
        {
          "code": 1214062,
          "regencyCode": 1214,
          "name": "MAZO"
        },
        {
          "code": 1214063,
          "regencyCode": 1214,
          "name": "UMBUNASI"
        },
        {
          "code": 1214064,
          "regencyCode": 1214,
          "name": "IDANOTAE"
        },
        {
          "code": 1214065,
          "regencyCode": 1214,
          "name": "ULUIDANOTAE"
        },
        {
          "code": 1214066,
          "regencyCode": 1214,
          "name": "BORONADU"
        },
        {
          "code": 1214070,
          "regencyCode": 1214,
          "name": "LOLOMATUA"
        },
        {
          "code": 1214071,
          "regencyCode": 1214,
          "name": "ULUNOYO"
        },
        {
          "code": 1214072,
          "regencyCode": 1214,
          "name": "HURUNA"
        },
        {
          "code": 1214080,
          "regencyCode": 1214,
          "name": "LOLOWA'U"
        },
        {
          "code": 1214081,
          "regencyCode": 1214,
          "name": "HILIMEGAI"
        },
        {
          "code": 1214082,
          "regencyCode": 1214,
          "name": "OOU"
        },
        {
          "code": 1214083,
          "regencyCode": 1214,
          "name": "ONOHAZUMBA"
        },
        {
          "code": 1214084,
          "regencyCode": 1214,
          "name": "HILISALAWAAHE"
        },
        {
          "code": 1215010,
          "regencyCode": 1215,
          "name": "PAKKAT"
        },
        {
          "code": 1215020,
          "regencyCode": 1215,
          "name": "ONAN GANJANG"
        },
        {
          "code": 1215030,
          "regencyCode": 1215,
          "name": "SIJAMA POLANG"
        },
        {
          "code": 1215040,
          "regencyCode": 1215,
          "name": "DOLOK SANGGUL"
        },
        {
          "code": 1215050,
          "regencyCode": 1215,
          "name": "LINTONG NIHUTA"
        },
        {
          "code": 1215060,
          "regencyCode": 1215,
          "name": "PARANGINAN"
        },
        {
          "code": 1215070,
          "regencyCode": 1215,
          "name": "BAKTI RAJA"
        },
        {
          "code": 1215080,
          "regencyCode": 1215,
          "name": "POLLUNG"
        },
        {
          "code": 1215090,
          "regencyCode": 1215,
          "name": "PARLILITAN"
        },
        {
          "code": 1215100,
          "regencyCode": 1215,
          "name": "TARA BINTANG"
        },
        {
          "code": 1216010,
          "regencyCode": 1216,
          "name": "SALAK"
        },
        {
          "code": 1216011,
          "regencyCode": 1216,
          "name": "SITELLU TALI URANG JEHE"
        },
        {
          "code": 1216012,
          "regencyCode": 1216,
          "name": "PAGINDAR"
        },
        {
          "code": 1216013,
          "regencyCode": 1216,
          "name": "SITELLU TALI URANG JULU"
        },
        {
          "code": 1216014,
          "regencyCode": 1216,
          "name": "PERGETTENG-GETTENG SENGKUT"
        },
        {
          "code": 1216020,
          "regencyCode": 1216,
          "name": "KERAJAAN"
        },
        {
          "code": 1216021,
          "regencyCode": 1216,
          "name": "TINADA"
        },
        {
          "code": 1216022,
          "regencyCode": 1216,
          "name": "SIEMPAT RUBE"
        },
        {
          "code": 1217010,
          "regencyCode": 1217,
          "name": "SIANJUR MULA MULA"
        },
        {
          "code": 1217020,
          "regencyCode": 1217,
          "name": "HARIAN"
        },
        {
          "code": 1217030,
          "regencyCode": 1217,
          "name": "SITIO-TIO"
        },
        {
          "code": 1217040,
          "regencyCode": 1217,
          "name": "ONAN RUNGGU"
        },
        {
          "code": 1217050,
          "regencyCode": 1217,
          "name": "NAINGGOLAN"
        },
        {
          "code": 1217060,
          "regencyCode": 1217,
          "name": "PALIPI"
        },
        {
          "code": 1217070,
          "regencyCode": 1217,
          "name": "RONGGUR NIHUTA"
        },
        {
          "code": 1217080,
          "regencyCode": 1217,
          "name": "PANGURURAN"
        },
        {
          "code": 1217090,
          "regencyCode": 1217,
          "name": "SIMANINDO"
        },
        {
          "code": 1218010,
          "regencyCode": 1218,
          "name": "KOTARIH"
        },
        {
          "code": 1218011,
          "regencyCode": 1218,
          "name": "SILINDA"
        },
        {
          "code": 1218012,
          "regencyCode": 1218,
          "name": "BINTANG BAYU"
        },
        {
          "code": 1218020,
          "regencyCode": 1218,
          "name": "DOLOK MASIHUL"
        },
        {
          "code": 1218021,
          "regencyCode": 1218,
          "name": "SERBAJADI"
        },
        {
          "code": 1218030,
          "regencyCode": 1218,
          "name": "SIPISPIS"
        },
        {
          "code": 1218040,
          "regencyCode": 1218,
          "name": "DOLOK MERAWAN"
        },
        {
          "code": 1218050,
          "regencyCode": 1218,
          "name": "TEBINGTINGGI"
        },
        {
          "code": 1218051,
          "regencyCode": 1218,
          "name": "TEBING SYAHBANDAR"
        },
        {
          "code": 1218060,
          "regencyCode": 1218,
          "name": "BANDAR KHALIPAH"
        },
        {
          "code": 1218070,
          "regencyCode": 1218,
          "name": "TANJUNG BERINGIN"
        },
        {
          "code": 1218080,
          "regencyCode": 1218,
          "name": "SEI RAMPAH"
        },
        {
          "code": 1218081,
          "regencyCode": 1218,
          "name": "SEI BAMBAN"
        },
        {
          "code": 1218090,
          "regencyCode": 1218,
          "name": "TELUK MENGKUDU"
        },
        {
          "code": 1218100,
          "regencyCode": 1218,
          "name": "PERBAUNGAN"
        },
        {
          "code": 1218101,
          "regencyCode": 1218,
          "name": "PEGAJAHAN"
        },
        {
          "code": 1218110,
          "regencyCode": 1218,
          "name": "PANTAI CERMIN"
        },
        {
          "code": 1219010,
          "regencyCode": 1219,
          "name": "SEI BALAI"
        },
        {
          "code": 1219020,
          "regencyCode": 1219,
          "name": "TANJUNG TIRAM"
        },
        {
          "code": 1219030,
          "regencyCode": 1219,
          "name": "TALAWI"
        },
        {
          "code": 1219040,
          "regencyCode": 1219,
          "name": "LIMAPULUH"
        },
        {
          "code": 1219050,
          "regencyCode": 1219,
          "name": "AIR PUTIH"
        },
        {
          "code": 1219060,
          "regencyCode": 1219,
          "name": "SEI SUKA"
        },
        {
          "code": 1219070,
          "regencyCode": 1219,
          "name": "MEDANG DERAS"
        },
        {
          "code": 1220010,
          "regencyCode": 1220,
          "name": "BATANG ONANG"
        },
        {
          "code": 1220020,
          "regencyCode": 1220,
          "name": "PADANG BOLAK JULU"
        },
        {
          "code": 1220030,
          "regencyCode": 1220,
          "name": "PORTIBI"
        },
        {
          "code": 1220040,
          "regencyCode": 1220,
          "name": "PADANG BOLAK"
        },
        {
          "code": 1220050,
          "regencyCode": 1220,
          "name": "SIMANGAMBAT"
        },
        {
          "code": 1220060,
          "regencyCode": 1220,
          "name": "HALONGONAN"
        },
        {
          "code": 1220070,
          "regencyCode": 1220,
          "name": "DOLOK"
        },
        {
          "code": 1220080,
          "regencyCode": 1220,
          "name": "DOLOK SIGOMPULON"
        },
        {
          "code": 1220090,
          "regencyCode": 1220,
          "name": "HULU SIHAPAS"
        },
        {
          "code": 1221010,
          "regencyCode": 1221,
          "name": "SOSOPAN"
        },
        {
          "code": 1221020,
          "regencyCode": 1221,
          "name": "ULU BARUMUN"
        },
        {
          "code": 1221030,
          "regencyCode": 1221,
          "name": "BARUMUN"
        },
        {
          "code": 1221031,
          "regencyCode": 1221,
          "name": "BARUMUN SELATAN"
        },
        {
          "code": 1221040,
          "regencyCode": 1221,
          "name": "LUBUK BARUMUN"
        },
        {
          "code": 1221050,
          "regencyCode": 1221,
          "name": "SOSA"
        },
        {
          "code": 1221060,
          "regencyCode": 1221,
          "name": "BATANG LUBU SUTAM"
        },
        {
          "code": 1221070,
          "regencyCode": 1221,
          "name": "HUTA RAJA TINGGI"
        },
        {
          "code": 1221080,
          "regencyCode": 1221,
          "name": "HURISTAK"
        },
        {
          "code": 1221090,
          "regencyCode": 1221,
          "name": "BARUMUN TENGAH"
        },
        {
          "code": 1221091,
          "regencyCode": 1221,
          "name": "AEK NABARA BARUMUN"
        },
        {
          "code": 1221092,
          "regencyCode": 1221,
          "name": "SIHAPAS BARUMUN"
        },
        {
          "code": 1222010,
          "regencyCode": 1222,
          "name": "SUNGAI KANAN"
        },
        {
          "code": 1222020,
          "regencyCode": 1222,
          "name": "TORGAMBA"
        },
        {
          "code": 1222030,
          "regencyCode": 1222,
          "name": "KOTA PINANG"
        },
        {
          "code": 1222040,
          "regencyCode": 1222,
          "name": "SILANGKITANG"
        },
        {
          "code": 1222050,
          "regencyCode": 1222,
          "name": "KAMPUNG RAKYAT"
        },
        {
          "code": 1223010,
          "regencyCode": 1223,
          "name": "NA IX-X"
        },
        {
          "code": 1223020,
          "regencyCode": 1223,
          "name": "MARBAU"
        },
        {
          "code": 1223030,
          "regencyCode": 1223,
          "name": "AEK KUO"
        },
        {
          "code": 1223040,
          "regencyCode": 1223,
          "name": "AEK NATAS"
        },
        {
          "code": 1223050,
          "regencyCode": 1223,
          "name": "KUALUH SELATAN"
        },
        {
          "code": 1223060,
          "regencyCode": 1223,
          "name": "KUALUH HILIR"
        },
        {
          "code": 1223070,
          "regencyCode": 1223,
          "name": "KUALUH HULU"
        },
        {
          "code": 1223080,
          "regencyCode": 1223,
          "name": "KUALUH LEIDONG"
        },
        {
          "code": 1224010,
          "regencyCode": 1224,
          "name": "TUGALA OYO"
        },
        {
          "code": 1224020,
          "regencyCode": 1224,
          "name": "ALASA"
        },
        {
          "code": 1224030,
          "regencyCode": 1224,
          "name": "ALASA TALU MUZOI"
        },
        {
          "code": 1224040,
          "regencyCode": 1224,
          "name": "NAMOHALU ESIWA"
        },
        {
          "code": 1224050,
          "regencyCode": 1224,
          "name": "SITOLU ORI"
        },
        {
          "code": 1224060,
          "regencyCode": 1224,
          "name": "TUHEMBERUA"
        },
        {
          "code": 1224070,
          "regencyCode": 1224,
          "name": "SAWO"
        },
        {
          "code": 1224080,
          "regencyCode": 1224,
          "name": "LOTU"
        },
        {
          "code": 1224090,
          "regencyCode": 1224,
          "name": "LAHEWA TIMUR"
        },
        {
          "code": 1224100,
          "regencyCode": 1224,
          "name": "AFULU"
        },
        {
          "code": 1224110,
          "regencyCode": 1224,
          "name": "LAHEWA"
        },
        {
          "code": 1225010,
          "regencyCode": 1225,
          "name": "SIROMBU"
        },
        {
          "code": 1225020,
          "regencyCode": 1225,
          "name": "LAHOMI"
        },
        {
          "code": 1225030,
          "regencyCode": 1225,
          "name": "ULU MORO O"
        },
        {
          "code": 1225040,
          "regencyCode": 1225,
          "name": "LOLOFITU MOI"
        },
        {
          "code": 1225050,
          "regencyCode": 1225,
          "name": "MANDREHE UTARA"
        },
        {
          "code": 1225060,
          "regencyCode": 1225,
          "name": "MANDREHE"
        },
        {
          "code": 1225070,
          "regencyCode": 1225,
          "name": "MANDREHE BARAT"
        },
        {
          "code": 1225080,
          "regencyCode": 1225,
          "name": "MORO O"
        },
        {
          "code": 1271010,
          "regencyCode": 1271,
          "name": "SIBOLGA UTARA"
        },
        {
          "code": 1271020,
          "regencyCode": 1271,
          "name": "SIBOLGA KOTA"
        },
        {
          "code": 1271030,
          "regencyCode": 1271,
          "name": "SIBOLGA SELATAN"
        },
        {
          "code": 1271031,
          "regencyCode": 1271,
          "name": "SIBOLGA SAMBAS"
        },
        {
          "code": 1272010,
          "regencyCode": 1272,
          "name": "DATUK BANDAR"
        },
        {
          "code": 1272011,
          "regencyCode": 1272,
          "name": "DATUK BANDAR TIMUR"
        },
        {
          "code": 1272020,
          "regencyCode": 1272,
          "name": "TANJUNG BALAI SELATAN"
        },
        {
          "code": 1272030,
          "regencyCode": 1272,
          "name": "TANJUNG BALAI UTARA"
        },
        {
          "code": 1272040,
          "regencyCode": 1272,
          "name": "SEI TUALANG RASO"
        },
        {
          "code": 1272050,
          "regencyCode": 1272,
          "name": "TELUK NIBUNG"
        },
        {
          "code": 1273010,
          "regencyCode": 1273,
          "name": "SIANTAR MARIHAT"
        },
        {
          "code": 1273011,
          "regencyCode": 1273,
          "name": "SIANTAR MARIMBUN"
        },
        {
          "code": 1273020,
          "regencyCode": 1273,
          "name": "SIANTAR SELATAN"
        },
        {
          "code": 1273030,
          "regencyCode": 1273,
          "name": "SIANTAR BARAT"
        },
        {
          "code": 1273040,
          "regencyCode": 1273,
          "name": "SIANTAR UTARA"
        },
        {
          "code": 1273050,
          "regencyCode": 1273,
          "name": "SIANTAR TIMUR"
        },
        {
          "code": 1273060,
          "regencyCode": 1273,
          "name": "SIANTAR MARTOBA"
        },
        {
          "code": 1273061,
          "regencyCode": 1273,
          "name": "SIANTAR SITALASARI"
        },
        {
          "code": 1274010,
          "regencyCode": 1274,
          "name": "PADANG HULU"
        },
        {
          "code": 1274011,
          "regencyCode": 1274,
          "name": "TEBING TINGGI KOTA"
        },
        {
          "code": 1274020,
          "regencyCode": 1274,
          "name": "RAMBUTAN"
        },
        {
          "code": 1274021,
          "regencyCode": 1274,
          "name": "BAJENIS"
        },
        {
          "code": 1274030,
          "regencyCode": 1274,
          "name": "PADANG HILIR"
        },
        {
          "code": 1275010,
          "regencyCode": 1275,
          "name": "MEDAN TUNTUNGAN"
        },
        {
          "code": 1275020,
          "regencyCode": 1275,
          "name": "MEDAN JOHOR"
        },
        {
          "code": 1275030,
          "regencyCode": 1275,
          "name": "MEDAN AMPLAS"
        },
        {
          "code": 1275040,
          "regencyCode": 1275,
          "name": "MEDAN DENAI"
        },
        {
          "code": 1275050,
          "regencyCode": 1275,
          "name": "MEDAN AREA"
        },
        {
          "code": 1275060,
          "regencyCode": 1275,
          "name": "MEDAN KOTA"
        },
        {
          "code": 1275070,
          "regencyCode": 1275,
          "name": "MEDAN MAIMUN"
        },
        {
          "code": 1275080,
          "regencyCode": 1275,
          "name": "MEDAN POLONIA"
        },
        {
          "code": 1275090,
          "regencyCode": 1275,
          "name": "MEDAN BARU"
        },
        {
          "code": 1275100,
          "regencyCode": 1275,
          "name": "MEDAN SELAYANG"
        },
        {
          "code": 1275110,
          "regencyCode": 1275,
          "name": "MEDAN SUNGGAL"
        },
        {
          "code": 1275120,
          "regencyCode": 1275,
          "name": "MEDAN HELVETIA"
        },
        {
          "code": 1275130,
          "regencyCode": 1275,
          "name": "MEDAN PETISAH"
        },
        {
          "code": 1275140,
          "regencyCode": 1275,
          "name": "MEDAN BARAT"
        },
        {
          "code": 1275150,
          "regencyCode": 1275,
          "name": "MEDAN TIMUR"
        },
        {
          "code": 1275160,
          "regencyCode": 1275,
          "name": "MEDAN PERJUANGAN"
        },
        {
          "code": 1275170,
          "regencyCode": 1275,
          "name": "MEDAN TEMBUNG"
        },
        {
          "code": 1275180,
          "regencyCode": 1275,
          "name": "MEDAN DELI"
        },
        {
          "code": 1275190,
          "regencyCode": 1275,
          "name": "MEDAN LABUHAN"
        },
        {
          "code": 1275200,
          "regencyCode": 1275,
          "name": "MEDAN MARELAN"
        },
        {
          "code": 1275210,
          "regencyCode": 1275,
          "name": "MEDAN BELAWAN"
        },
        {
          "code": 1276010,
          "regencyCode": 1276,
          "name": "BINJAI SELATAN"
        },
        {
          "code": 1276020,
          "regencyCode": 1276,
          "name": "BINJAI KOTA"
        },
        {
          "code": 1276030,
          "regencyCode": 1276,
          "name": "BINJAI TIMUR"
        },
        {
          "code": 1276040,
          "regencyCode": 1276,
          "name": "BINJAI UTARA"
        },
        {
          "code": 1276050,
          "regencyCode": 1276,
          "name": "BINJAI BARAT"
        },
        {
          "code": 1277010,
          "regencyCode": 1277,
          "name": "PADANGSIDIMPUAN TENGGARA"
        },
        {
          "code": 1277020,
          "regencyCode": 1277,
          "name": "PADANGSIDIMPUAN SELATAN"
        },
        {
          "code": 1277030,
          "regencyCode": 1277,
          "name": "PADANGSIDIMPUAN BATUNADUA"
        },
        {
          "code": 1277040,
          "regencyCode": 1277,
          "name": "PADANGSIDIMPUAN UTARA"
        },
        {
          "code": 1277050,
          "regencyCode": 1277,
          "name": "PADANGSIDIMPUAN HUTAIMBARU"
        },
        {
          "code": 1277051,
          "regencyCode": 1277,
          "name": "PADANGSIDIMPUAN ANGKOLA JULU"
        },
        {
          "code": 1278010,
          "regencyCode": 1278,
          "name": "GUNUNGSITOLI IDANOI"
        },
        {
          "code": 1278020,
          "regencyCode": 1278,
          "name": "GUNUNGSITOLI SELATAN"
        },
        {
          "code": 1278030,
          "regencyCode": 1278,
          "name": "GUNUNGSITOLI BARAT"
        },
        {
          "code": 1278040,
          "regencyCode": 1278,
          "name": "GUNUNG SITOLI"
        },
        {
          "code": 1278050,
          "regencyCode": 1278,
          "name": "GUNUNGSITOLI ALO OA"
        },
        {
          "code": 1278060,
          "regencyCode": 1278,
          "name": "GUNUNGSITOLI UTARA"
        },
        {
          "code": 1301011,
          "regencyCode": 1301,
          "name": "PAGAI SELATAN"
        },
        {
          "code": 1301012,
          "regencyCode": 1301,
          "name": "SIKAKAP"
        },
        {
          "code": 1301013,
          "regencyCode": 1301,
          "name": "PAGAI UTARA"
        },
        {
          "code": 1301021,
          "regencyCode": 1301,
          "name": "SIPORA SELATAN"
        },
        {
          "code": 1301022,
          "regencyCode": 1301,
          "name": "SIPORA UTARA"
        },
        {
          "code": 1301030,
          "regencyCode": 1301,
          "name": "SIBERUT SELATAN"
        },
        {
          "code": 1301031,
          "regencyCode": 1301,
          "name": "SEBERUT BARAT DAYA"
        },
        {
          "code": 1301032,
          "regencyCode": 1301,
          "name": "SIBERUT TENGAH"
        },
        {
          "code": 1301040,
          "regencyCode": 1301,
          "name": "SIBERUT UTARA"
        },
        {
          "code": 1301041,
          "regencyCode": 1301,
          "name": "SIBERUT BARAT"
        },
        {
          "code": 1302011,
          "regencyCode": 1302,
          "name": "SILAUT"
        },
        {
          "code": 1302012,
          "regencyCode": 1302,
          "name": "LUNANG"
        },
        {
          "code": 1302020,
          "regencyCode": 1302,
          "name": "BASA AMPEK BALAI TAPAN"
        },
        {
          "code": 1302021,
          "regencyCode": 1302,
          "name": "RANAH AMPEK HULU TAPAN"
        },
        {
          "code": 1302030,
          "regencyCode": 1302,
          "name": "PANCUNG SOAL"
        },
        {
          "code": 1302031,
          "regencyCode": 1302,
          "name": "AIRPURA"
        },
        {
          "code": 1302040,
          "regencyCode": 1302,
          "name": "LINGGO SARI BAGANTI"
        },
        {
          "code": 1302050,
          "regencyCode": 1302,
          "name": "RANAH PESISIR"
        },
        {
          "code": 1302060,
          "regencyCode": 1302,
          "name": "LENGAYANG"
        },
        {
          "code": 1302070,
          "regencyCode": 1302,
          "name": "SUTERA"
        },
        {
          "code": 1302080,
          "regencyCode": 1302,
          "name": "BATANG KAPAS"
        },
        {
          "code": 1302090,
          "regencyCode": 1302,
          "name": "IV JURAI"
        },
        {
          "code": 1302100,
          "regencyCode": 1302,
          "name": "BAYANG"
        },
        {
          "code": 1302101,
          "regencyCode": 1302,
          "name": "IV  NAGARI BAYANG UTARA"
        },
        {
          "code": 1302110,
          "regencyCode": 1302,
          "name": "KOTO XI TARUSAN"
        },
        {
          "code": 1303040,
          "regencyCode": 1303,
          "name": "PANTAI CERMIN"
        },
        {
          "code": 1303050,
          "regencyCode": 1303,
          "name": "LEMBAH GUMANTI"
        },
        {
          "code": 1303051,
          "regencyCode": 1303,
          "name": "HILIRAN GUMANTI"
        },
        {
          "code": 1303060,
          "regencyCode": 1303,
          "name": "PAYUNG SEKAKI"
        },
        {
          "code": 1303061,
          "regencyCode": 1303,
          "name": "TIGO LURAH"
        },
        {
          "code": 1303070,
          "regencyCode": 1303,
          "name": "LEMBANG JAYA"
        },
        {
          "code": 1303071,
          "regencyCode": 1303,
          "name": "DANAU KEMBAR"
        },
        {
          "code": 1303080,
          "regencyCode": 1303,
          "name": "GUNUNG TALANG"
        },
        {
          "code": 1303090,
          "regencyCode": 1303,
          "name": "BUKIT SUNDI"
        },
        {
          "code": 1303100,
          "regencyCode": 1303,
          "name": "IX KOTO SUNGAI LASI"
        },
        {
          "code": 1303110,
          "regencyCode": 1303,
          "name": "KUBUNG"
        },
        {
          "code": 1303120,
          "regencyCode": 1303,
          "name": "X KOTO DIATAS"
        },
        {
          "code": 1303130,
          "regencyCode": 1303,
          "name": "X KOTO SINGKARAK"
        },
        {
          "code": 1303140,
          "regencyCode": 1303,
          "name": "JUNJUNG SIRIH"
        },
        {
          "code": 1304050,
          "regencyCode": 1304,
          "name": "KAMANG BARU"
        },
        {
          "code": 1304060,
          "regencyCode": 1304,
          "name": "TANJUNG GADANG"
        },
        {
          "code": 1304070,
          "regencyCode": 1304,
          "name": "SIJUNJUNG"
        },
        {
          "code": 1304071,
          "regencyCode": 1304,
          "name": "LUBUK TAROK"
        },
        {
          "code": 1304080,
          "regencyCode": 1304,
          "name": "IV NAGARI"
        },
        {
          "code": 1304090,
          "regencyCode": 1304,
          "name": "KUPITAN"
        },
        {
          "code": 1304100,
          "regencyCode": 1304,
          "name": "KOTO TUJUH"
        },
        {
          "code": 1304110,
          "regencyCode": 1304,
          "name": "SUMPUR KUDUS"
        },
        {
          "code": 1305010,
          "regencyCode": 1305,
          "name": "SEPULUH KOTO"
        },
        {
          "code": 1305020,
          "regencyCode": 1305,
          "name": "BATIPUH"
        },
        {
          "code": 1305021,
          "regencyCode": 1305,
          "name": "BATIPUH SELATAN"
        },
        {
          "code": 1305030,
          "regencyCode": 1305,
          "name": "PARIANGAN"
        },
        {
          "code": 1305040,
          "regencyCode": 1305,
          "name": "RAMBATAN"
        },
        {
          "code": 1305050,
          "regencyCode": 1305,
          "name": "LIMA KAUM"
        },
        {
          "code": 1305060,
          "regencyCode": 1305,
          "name": "TANJUNG EMAS"
        },
        {
          "code": 1305070,
          "regencyCode": 1305,
          "name": "PADANG GANTING"
        },
        {
          "code": 1305080,
          "regencyCode": 1305,
          "name": "LINTAU BUO"
        },
        {
          "code": 1305081,
          "regencyCode": 1305,
          "name": "LINTAU BUO UTARA"
        },
        {
          "code": 1305090,
          "regencyCode": 1305,
          "name": "SUNGAYANG"
        },
        {
          "code": 1305100,
          "regencyCode": 1305,
          "name": "SUNGAI TARAB"
        },
        {
          "code": 1305110,
          "regencyCode": 1305,
          "name": "SALIMPAUNG"
        },
        {
          "code": 1305111,
          "regencyCode": 1305,
          "name": "TANJUNG BARU"
        },
        {
          "code": 1306010,
          "regencyCode": 1306,
          "name": "BATANG ANAI"
        },
        {
          "code": 1306020,
          "regencyCode": 1306,
          "name": "LUBUK ALUNG"
        },
        {
          "code": 1306021,
          "regencyCode": 1306,
          "name": "SINTUK TOBOH GADANG"
        },
        {
          "code": 1306030,
          "regencyCode": 1306,
          "name": "ULAKAN TAPAKIS"
        },
        {
          "code": 1306040,
          "regencyCode": 1306,
          "name": "NAN SABARIS"
        },
        {
          "code": 1306050,
          "regencyCode": 1306,
          "name": "2 X 11 ENAM LINGKUNG"
        },
        {
          "code": 1306051,
          "regencyCode": 1306,
          "name": "ENAM LINGKUNG"
        },
        {
          "code": 1306052,
          "regencyCode": 1306,
          "name": "2 X 11 KAYU TANAM"
        },
        {
          "code": 1306060,
          "regencyCode": 1306,
          "name": "VII KOTO SUNGAI SARIAK"
        },
        {
          "code": 1306061,
          "regencyCode": 1306,
          "name": "PATAMUAN"
        },
        {
          "code": 1306062,
          "regencyCode": 1306,
          "name": "PADANG SAGO"
        },
        {
          "code": 1306070,
          "regencyCode": 1306,
          "name": "V KOTO KP DALAM"
        },
        {
          "code": 1306071,
          "regencyCode": 1306,
          "name": "V KOTO TIMUR"
        },
        {
          "code": 1306080,
          "regencyCode": 1306,
          "name": "SUNGAI LIMAU"
        },
        {
          "code": 1306081,
          "regencyCode": 1306,
          "name": "BATANG GASAN"
        },
        {
          "code": 1306090,
          "regencyCode": 1306,
          "name": "SUNGAI GERINGGING"
        },
        {
          "code": 1306100,
          "regencyCode": 1306,
          "name": "IV KOTO AUR MALINTANG"
        },
        {
          "code": 1307010,
          "regencyCode": 1307,
          "name": "TANJUNG MUTIARA"
        },
        {
          "code": 1307020,
          "regencyCode": 1307,
          "name": "LUBUK BASUNG"
        },
        {
          "code": 1307021,
          "regencyCode": 1307,
          "name": "AMPEK NAGARI"
        },
        {
          "code": 1307030,
          "regencyCode": 1307,
          "name": "TANJUNG RAYA"
        },
        {
          "code": 1307040,
          "regencyCode": 1307,
          "name": "MATUR"
        },
        {
          "code": 1307050,
          "regencyCode": 1307,
          "name": "IV KOTO"
        },
        {
          "code": 1307051,
          "regencyCode": 1307,
          "name": "MALALAK"
        },
        {
          "code": 1307061,
          "regencyCode": 1307,
          "name": "BANUHAMPU"
        },
        {
          "code": 1307062,
          "regencyCode": 1307,
          "name": "SUNGAI PUA"
        },
        {
          "code": 1307070,
          "regencyCode": 1307,
          "name": "AMPEK ANGKEK"
        },
        {
          "code": 1307071,
          "regencyCode": 1307,
          "name": "CANDUANG"
        },
        {
          "code": 1307080,
          "regencyCode": 1307,
          "name": "BASO"
        },
        {
          "code": 1307090,
          "regencyCode": 1307,
          "name": "TILATANG KAMANG"
        },
        {
          "code": 1307091,
          "regencyCode": 1307,
          "name": "KAMANG MAGEK"
        },
        {
          "code": 1307100,
          "regencyCode": 1307,
          "name": "PALEMBAYAN"
        },
        {
          "code": 1307110,
          "regencyCode": 1307,
          "name": "PALUPUH"
        },
        {
          "code": 1308010,
          "regencyCode": 1308,
          "name": "PAYAKUMBUH"
        },
        {
          "code": 1308011,
          "regencyCode": 1308,
          "name": "AKABILURU"
        },
        {
          "code": 1308020,
          "regencyCode": 1308,
          "name": "LUAK"
        },
        {
          "code": 1308021,
          "regencyCode": 1308,
          "name": "LAREH SAGO HALABAN"
        },
        {
          "code": 1308022,
          "regencyCode": 1308,
          "name": "SITUJUAH LIMO NAGARI"
        },
        {
          "code": 1308030,
          "regencyCode": 1308,
          "name": "HARAU"
        },
        {
          "code": 1308040,
          "regencyCode": 1308,
          "name": "GUGUAK"
        },
        {
          "code": 1308041,
          "regencyCode": 1308,
          "name": "MUNGKA"
        },
        {
          "code": 1308050,
          "regencyCode": 1308,
          "name": "SULIKI"
        },
        {
          "code": 1308051,
          "regencyCode": 1308,
          "name": "BUKIK BARISAN"
        },
        {
          "code": 1308060,
          "regencyCode": 1308,
          "name": "GUNUANG OMEH"
        },
        {
          "code": 1308070,
          "regencyCode": 1308,
          "name": "KAPUR IX"
        },
        {
          "code": 1308080,
          "regencyCode": 1308,
          "name": "PANGKALAN KOTO BARU"
        },
        {
          "code": 1309070,
          "regencyCode": 1309,
          "name": "BONJOL"
        },
        {
          "code": 1309071,
          "regencyCode": 1309,
          "name": "TIGO NAGARI"
        },
        {
          "code": 1309072,
          "regencyCode": 1309,
          "name": "SIMPANG ALAHAN MATI"
        },
        {
          "code": 1309080,
          "regencyCode": 1309,
          "name": "LUBUK SIKAPING"
        },
        {
          "code": 1309100,
          "regencyCode": 1309,
          "name": "DUA KOTO"
        },
        {
          "code": 1309110,
          "regencyCode": 1309,
          "name": "PANTI"
        },
        {
          "code": 1309111,
          "regencyCode": 1309,
          "name": "PADANG GELUGUR"
        },
        {
          "code": 1309121,
          "regencyCode": 1309,
          "name": "RAO"
        },
        {
          "code": 1309122,
          "regencyCode": 1309,
          "name": "MAPAT TUNGGUL"
        },
        {
          "code": 1309123,
          "regencyCode": 1309,
          "name": "MAPAT TUNGGUL SELATAN"
        },
        {
          "code": 1309124,
          "regencyCode": 1309,
          "name": "RAO SELATAN"
        },
        {
          "code": 1309125,
          "regencyCode": 1309,
          "name": "RAO UTARA"
        },
        {
          "code": 1310010,
          "regencyCode": 1310,
          "name": "SANGIR"
        },
        {
          "code": 1310020,
          "regencyCode": 1310,
          "name": "SANGIR JUJUAN"
        },
        {
          "code": 1310021,
          "regencyCode": 1310,
          "name": "SANGIR BALAI JANGGO"
        },
        {
          "code": 1310030,
          "regencyCode": 1310,
          "name": "SANGIR BATANG HARI"
        },
        {
          "code": 1310040,
          "regencyCode": 1310,
          "name": "SUNGAI PAGU"
        },
        {
          "code": 1310041,
          "regencyCode": 1310,
          "name": "PAUAH DUO"
        },
        {
          "code": 1310050,
          "regencyCode": 1310,
          "name": "KOTO PARIK GADANG DIATEH"
        },
        {
          "code": 1311010,
          "regencyCode": 1311,
          "name": "SUNGAI RUMBAI"
        },
        {
          "code": 1311011,
          "regencyCode": 1311,
          "name": "KOTO BESAR"
        },
        {
          "code": 1311012,
          "regencyCode": 1311,
          "name": "ASAM JUJUHAN"
        },
        {
          "code": 1311020,
          "regencyCode": 1311,
          "name": "KOTO BARU"
        },
        {
          "code": 1311021,
          "regencyCode": 1311,
          "name": "KOTO SALAK"
        },
        {
          "code": 1311022,
          "regencyCode": 1311,
          "name": "TIUMANG"
        },
        {
          "code": 1311023,
          "regencyCode": 1311,
          "name": "PADANG LAWEH"
        },
        {
          "code": 1311030,
          "regencyCode": 1311,
          "name": "SITIUNG"
        },
        {
          "code": 1311031,
          "regencyCode": 1311,
          "name": "TIMPEH"
        },
        {
          "code": 1311040,
          "regencyCode": 1311,
          "name": "PULAU PUNJUNG"
        },
        {
          "code": 1311041,
          "regencyCode": 1311,
          "name": "IX KOTO"
        },
        {
          "code": 1312010,
          "regencyCode": 1312,
          "name": "SUNGAI BEREMAS"
        },
        {
          "code": 1312020,
          "regencyCode": 1312,
          "name": "RANAH BATAHAN"
        },
        {
          "code": 1312030,
          "regencyCode": 1312,
          "name": "KOTO BALINGKA"
        },
        {
          "code": 1312040,
          "regencyCode": 1312,
          "name": "SUNGAI AUR"
        },
        {
          "code": 1312050,
          "regencyCode": 1312,
          "name": "LEMBAH MALINTANG"
        },
        {
          "code": 1312060,
          "regencyCode": 1312,
          "name": "GUNUNG TULEH"
        },
        {
          "code": 1312070,
          "regencyCode": 1312,
          "name": "TALAMAU"
        },
        {
          "code": 1312080,
          "regencyCode": 1312,
          "name": "PASAMAN"
        },
        {
          "code": 1312090,
          "regencyCode": 1312,
          "name": "LUHAK NAN DUO"
        },
        {
          "code": 1312100,
          "regencyCode": 1312,
          "name": "SASAK RANAH PASISIE"
        },
        {
          "code": 1312110,
          "regencyCode": 1312,
          "name": "KINALI"
        },
        {
          "code": 1371010,
          "regencyCode": 1371,
          "name": "BUNGUS TELUK KABUNG"
        },
        {
          "code": 1371020,
          "regencyCode": 1371,
          "name": "LUBUK KILANGAN"
        },
        {
          "code": 1371030,
          "regencyCode": 1371,
          "name": "LUBUK BEGALUNG"
        },
        {
          "code": 1371040,
          "regencyCode": 1371,
          "name": "PADANG SELATAN"
        },
        {
          "code": 1371050,
          "regencyCode": 1371,
          "name": "PADANG TIMUR"
        },
        {
          "code": 1371060,
          "regencyCode": 1371,
          "name": "PADANG BARAT"
        },
        {
          "code": 1371070,
          "regencyCode": 1371,
          "name": "PADANG UTARA"
        },
        {
          "code": 1371080,
          "regencyCode": 1371,
          "name": "NANGGALO"
        },
        {
          "code": 1371090,
          "regencyCode": 1371,
          "name": "KURANJI"
        },
        {
          "code": 1371100,
          "regencyCode": 1371,
          "name": "PAUH"
        },
        {
          "code": 1371110,
          "regencyCode": 1371,
          "name": "KOTO TANGAH"
        },
        {
          "code": 1372010,
          "regencyCode": 1372,
          "name": "LUBUK SIKARAH"
        },
        {
          "code": 1372020,
          "regencyCode": 1372,
          "name": "TANJUNG HARAPAN"
        },
        {
          "code": 1373010,
          "regencyCode": 1373,
          "name": "SILUNGKANG"
        },
        {
          "code": 1373020,
          "regencyCode": 1373,
          "name": "LEMBAH SEGAR"
        },
        {
          "code": 1373030,
          "regencyCode": 1373,
          "name": "BARANGIN"
        },
        {
          "code": 1373040,
          "regencyCode": 1373,
          "name": "TALAWI"
        },
        {
          "code": 1374010,
          "regencyCode": 1374,
          "name": "PADANG PANJANG BARAT"
        },
        {
          "code": 1374020,
          "regencyCode": 1374,
          "name": "PADANG PANJANG TIMUR"
        },
        {
          "code": 1375010,
          "regencyCode": 1375,
          "name": "GUGUK PANJANG"
        },
        {
          "code": 1375020,
          "regencyCode": 1375,
          "name": "MANDIANGIN KOTO SELAYAN"
        },
        {
          "code": 1375030,
          "regencyCode": 1375,
          "name": "AUR BIRUGO TIGO BALEH"
        },
        {
          "code": 1376010,
          "regencyCode": 1376,
          "name": "PAYAKUMBUH BARAT"
        },
        {
          "code": 1376011,
          "regencyCode": 1376,
          "name": "PAYAKUMBUH SELATAN"
        },
        {
          "code": 1376020,
          "regencyCode": 1376,
          "name": "PAYAKUMBUH TIMUR"
        },
        {
          "code": 1376030,
          "regencyCode": 1376,
          "name": "PAYAKUMBUH UTARA"
        },
        {
          "code": 1376031,
          "regencyCode": 1376,
          "name": "LAMPOSI TIGO NAGORI"
        },
        {
          "code": 1377010,
          "regencyCode": 1377,
          "name": "PARIAMAN SELATAN"
        },
        {
          "code": 1377020,
          "regencyCode": 1377,
          "name": "PARIAMAN TENGAH"
        },
        {
          "code": 1377021,
          "regencyCode": 1377,
          "name": "PARIAMAN TIMUR"
        },
        {
          "code": 1377030,
          "regencyCode": 1377,
          "name": "PARIAMAN UTARA"
        },
        {
          "code": 1401010,
          "regencyCode": 1401,
          "name": "KUANTAN MUDIK"
        },
        {
          "code": 1401011,
          "regencyCode": 1401,
          "name": "HULU KUANTAN"
        },
        {
          "code": 1401012,
          "regencyCode": 1401,
          "name": "GUNUNG TOAR"
        },
        {
          "code": 1401013,
          "regencyCode": 1401,
          "name": "PUCUK RANTAU"
        },
        {
          "code": 1401020,
          "regencyCode": 1401,
          "name": "SINGINGI"
        },
        {
          "code": 1401021,
          "regencyCode": 1401,
          "name": "SINGINGI HILIR"
        },
        {
          "code": 1401030,
          "regencyCode": 1401,
          "name": "KUANTAN TENGAH"
        },
        {
          "code": 1401031,
          "regencyCode": 1401,
          "name": "SENTAJO RAYA"
        },
        {
          "code": 1401040,
          "regencyCode": 1401,
          "name": "BENAI"
        },
        {
          "code": 1401050,
          "regencyCode": 1401,
          "name": "KUANTAN HILIR"
        },
        {
          "code": 1401051,
          "regencyCode": 1401,
          "name": "PANGEAN"
        },
        {
          "code": 1401052,
          "regencyCode": 1401,
          "name": "LOGAS TANAH DARAT"
        },
        {
          "code": 1401053,
          "regencyCode": 1401,
          "name": "KUANTAN HILIR SEBERANG"
        },
        {
          "code": 1401060,
          "regencyCode": 1401,
          "name": "CERENTI"
        },
        {
          "code": 1401061,
          "regencyCode": 1401,
          "name": "INUMAN"
        },
        {
          "code": 1402010,
          "regencyCode": 1402,
          "name": "PERANAP"
        },
        {
          "code": 1402011,
          "regencyCode": 1402,
          "name": "BATANG PERANAP"
        },
        {
          "code": 1402020,
          "regencyCode": 1402,
          "name": "SEBERIDA"
        },
        {
          "code": 1402021,
          "regencyCode": 1402,
          "name": "BATANG CENAKU"
        },
        {
          "code": 1402022,
          "regencyCode": 1402,
          "name": "BATANG GANSAL"
        },
        {
          "code": 1402030,
          "regencyCode": 1402,
          "name": "KELAYANG"
        },
        {
          "code": 1402031,
          "regencyCode": 1402,
          "name": "RAKIT KULIM"
        },
        {
          "code": 1402040,
          "regencyCode": 1402,
          "name": "PASIR PENYU"
        },
        {
          "code": 1402041,
          "regencyCode": 1402,
          "name": "LIRIK"
        },
        {
          "code": 1402042,
          "regencyCode": 1402,
          "name": "SUNGAI LALA"
        },
        {
          "code": 1402043,
          "regencyCode": 1402,
          "name": "LUBUK BATU JAYA"
        },
        {
          "code": 1402050,
          "regencyCode": 1402,
          "name": "RENGAT BARAT"
        },
        {
          "code": 1402060,
          "regencyCode": 1402,
          "name": "RENGAT"
        },
        {
          "code": 1402061,
          "regencyCode": 1402,
          "name": "KUALA CENAKU"
        },
        {
          "code": 1403010,
          "regencyCode": 1403,
          "name": "KERITANG"
        },
        {
          "code": 1403011,
          "regencyCode": 1403,
          "name": "KEMUNING"
        },
        {
          "code": 1403020,
          "regencyCode": 1403,
          "name": "RETEH"
        },
        {
          "code": 1403021,
          "regencyCode": 1403,
          "name": "SUNGAI BATANG"
        },
        {
          "code": 1403030,
          "regencyCode": 1403,
          "name": "ENOK"
        },
        {
          "code": 1403040,
          "regencyCode": 1403,
          "name": "TANAH MERAH"
        },
        {
          "code": 1403050,
          "regencyCode": 1403,
          "name": "KUALA INDRAGIRI"
        },
        {
          "code": 1403051,
          "regencyCode": 1403,
          "name": "CONCONG"
        },
        {
          "code": 1403060,
          "regencyCode": 1403,
          "name": "TEMBILAHAN"
        },
        {
          "code": 1403061,
          "regencyCode": 1403,
          "name": "TEMBILAHAN HULU"
        },
        {
          "code": 1403070,
          "regencyCode": 1403,
          "name": "TEMPULING"
        },
        {
          "code": 1403071,
          "regencyCode": 1403,
          "name": "KEMPAS"
        },
        {
          "code": 1403080,
          "regencyCode": 1403,
          "name": "BATANG TUAKA"
        },
        {
          "code": 1403090,
          "regencyCode": 1403,
          "name": "GAUNG ANAK SERKA"
        },
        {
          "code": 1403100,
          "regencyCode": 1403,
          "name": "GAUNG"
        },
        {
          "code": 1403110,
          "regencyCode": 1403,
          "name": "MANDAH"
        },
        {
          "code": 1403120,
          "regencyCode": 1403,
          "name": "KATEMAN"
        },
        {
          "code": 1403121,
          "regencyCode": 1403,
          "name": "PELANGIRAN"
        },
        {
          "code": 1403122,
          "regencyCode": 1403,
          "name": "TELUK BELENGKONG"
        },
        {
          "code": 1403123,
          "regencyCode": 1403,
          "name": "PULAU BURUNG"
        },
        {
          "code": 1404010,
          "regencyCode": 1404,
          "name": "LANGGAM"
        },
        {
          "code": 1404011,
          "regencyCode": 1404,
          "name": "PANGKALAN KERINCI"
        },
        {
          "code": 1404012,
          "regencyCode": 1404,
          "name": "BANDAR SEIKIJANG"
        },
        {
          "code": 1404020,
          "regencyCode": 1404,
          "name": "PANGKALAN KURAS"
        },
        {
          "code": 1404021,
          "regencyCode": 1404,
          "name": "UKUI"
        },
        {
          "code": 1404022,
          "regencyCode": 1404,
          "name": "PANGKALAN LESUNG"
        },
        {
          "code": 1404030,
          "regencyCode": 1404,
          "name": "BUNUT"
        },
        {
          "code": 1404031,
          "regencyCode": 1404,
          "name": "PELALAWAN"
        },
        {
          "code": 1404032,
          "regencyCode": 1404,
          "name": "BANDAR PETALANGAN"
        },
        {
          "code": 1404040,
          "regencyCode": 1404,
          "name": "KUALA KAMPAR"
        },
        {
          "code": 1404041,
          "regencyCode": 1404,
          "name": "KERUMUTAN"
        },
        {
          "code": 1404042,
          "regencyCode": 1404,
          "name": "TELUK MERANTI"
        },
        {
          "code": 1405010,
          "regencyCode": 1405,
          "name": "MINAS"
        },
        {
          "code": 1405011,
          "regencyCode": 1405,
          "name": "SUNGAI MANDAU"
        },
        {
          "code": 1405012,
          "regencyCode": 1405,
          "name": "KANDIS"
        },
        {
          "code": 1405020,
          "regencyCode": 1405,
          "name": "SIAK"
        },
        {
          "code": 1405021,
          "regencyCode": 1405,
          "name": "KERINCI KANAN"
        },
        {
          "code": 1405022,
          "regencyCode": 1405,
          "name": "TUALANG"
        },
        {
          "code": 1405023,
          "regencyCode": 1405,
          "name": "DAYUN"
        },
        {
          "code": 1405024,
          "regencyCode": 1405,
          "name": "LUBUK DALAM"
        },
        {
          "code": 1405025,
          "regencyCode": 1405,
          "name": "KOTO GASIB"
        },
        {
          "code": 1405026,
          "regencyCode": 1405,
          "name": "MEMPURA"
        },
        {
          "code": 1405030,
          "regencyCode": 1405,
          "name": "SUNGAI APIT"
        },
        {
          "code": 1405031,
          "regencyCode": 1405,
          "name": "BUNGA RAYA"
        },
        {
          "code": 1405032,
          "regencyCode": 1405,
          "name": "SABAK AUH"
        },
        {
          "code": 1405033,
          "regencyCode": 1405,
          "name": "PUSAKO"
        },
        {
          "code": 1406010,
          "regencyCode": 1406,
          "name": "KAMPAR KIRI"
        },
        {
          "code": 1406011,
          "regencyCode": 1406,
          "name": "KAMPAR KIRI HULU"
        },
        {
          "code": 1406012,
          "regencyCode": 1406,
          "name": "KAMPAR KIRI HILIR"
        },
        {
          "code": 1406013,
          "regencyCode": 1406,
          "name": "GUNUNG SAHILAN"
        },
        {
          "code": 1406014,
          "regencyCode": 1406,
          "name": "KAMPAR KIRI TENGAH"
        },
        {
          "code": 1406020,
          "regencyCode": 1406,
          "name": "XIII KOTO KAMPAR"
        },
        {
          "code": 1406021,
          "regencyCode": 1406,
          "name": "KOTO KAMPAR HULU"
        },
        {
          "code": 1406030,
          "regencyCode": 1406,
          "name": "KUOK"
        },
        {
          "code": 1406031,
          "regencyCode": 1406,
          "name": "SALO"
        },
        {
          "code": 1406040,
          "regencyCode": 1406,
          "name": "TAPUNG"
        },
        {
          "code": 1406041,
          "regencyCode": 1406,
          "name": "TAPUNG HULU"
        },
        {
          "code": 1406042,
          "regencyCode": 1406,
          "name": "TAPUNG HILIR"
        },
        {
          "code": 1406050,
          "regencyCode": 1406,
          "name": "BANGKINANG KOTA"
        },
        {
          "code": 1406051,
          "regencyCode": 1406,
          "name": "BANGKINANG"
        },
        {
          "code": 1406060,
          "regencyCode": 1406,
          "name": "KAMPAR"
        },
        {
          "code": 1406061,
          "regencyCode": 1406,
          "name": "KAMPAR TIMUR"
        },
        {
          "code": 1406062,
          "regencyCode": 1406,
          "name": "RUMBIO JAYA"
        },
        {
          "code": 1406063,
          "regencyCode": 1406,
          "name": "KAMPAR UTARA"
        },
        {
          "code": 1406070,
          "regencyCode": 1406,
          "name": "TAMBANG"
        },
        {
          "code": 1406080,
          "regencyCode": 1406,
          "name": "SIAK HULU"
        },
        {
          "code": 1406081,
          "regencyCode": 1406,
          "name": "PERHENTIAN RAJA"
        },
        {
          "code": 1407010,
          "regencyCode": 1407,
          "name": "ROKAN IV KOTO"
        },
        {
          "code": 1407011,
          "regencyCode": 1407,
          "name": "PENDALIAN IV KOTO"
        },
        {
          "code": 1407020,
          "regencyCode": 1407,
          "name": "TANDUN"
        },
        {
          "code": 1407021,
          "regencyCode": 1407,
          "name": "KABUN"
        },
        {
          "code": 1407022,
          "regencyCode": 1407,
          "name": "UJUNG BATU"
        },
        {
          "code": 1407030,
          "regencyCode": 1407,
          "name": "RAMBAH SAMO"
        },
        {
          "code": 1407040,
          "regencyCode": 1407,
          "name": "RAMBAH"
        },
        {
          "code": 1407041,
          "regencyCode": 1407,
          "name": "RAMBAH HILIR"
        },
        {
          "code": 1407042,
          "regencyCode": 1407,
          "name": "BANGUN PURBA"
        },
        {
          "code": 1407050,
          "regencyCode": 1407,
          "name": "TAMBUSAI"
        },
        {
          "code": 1407051,
          "regencyCode": 1407,
          "name": "TAMBUSAI UTARA"
        },
        {
          "code": 1407060,
          "regencyCode": 1407,
          "name": "KEPENUHAN"
        },
        {
          "code": 1407061,
          "regencyCode": 1407,
          "name": "KEPENUHAN HULU"
        },
        {
          "code": 1407070,
          "regencyCode": 1407,
          "name": "KUNTO DARUSSALAM"
        },
        {
          "code": 1407071,
          "regencyCode": 1407,
          "name": "PAGARAN TAPAH DARUSSALAM"
        },
        {
          "code": 1407072,
          "regencyCode": 1407,
          "name": "BONAI DARUSSALAM"
        },
        {
          "code": 1408010,
          "regencyCode": 1408,
          "name": "MANDAU"
        },
        {
          "code": 1408011,
          "regencyCode": 1408,
          "name": "PINGGIR"
        },
        {
          "code": 1408020,
          "regencyCode": 1408,
          "name": "BUKIT BATU"
        },
        {
          "code": 1408021,
          "regencyCode": 1408,
          "name": "SIAK KECIL"
        },
        {
          "code": 1408030,
          "regencyCode": 1408,
          "name": "RUPAT"
        },
        {
          "code": 1408031,
          "regencyCode": 1408,
          "name": "RUPAT UTARA"
        },
        {
          "code": 1408040,
          "regencyCode": 1408,
          "name": "BENGKALIS"
        },
        {
          "code": 1408050,
          "regencyCode": 1408,
          "name": "BANTAN"
        },
        {
          "code": 1409010,
          "regencyCode": 1409,
          "name": "TANAH PUTIH"
        },
        {
          "code": 1409011,
          "regencyCode": 1409,
          "name": "PUJUD"
        },
        {
          "code": 1409012,
          "regencyCode": 1409,
          "name": "TANAH PUTIH TANJUNG MELAWAN"
        },
        {
          "code": 1409013,
          "regencyCode": 1409,
          "name": "RANTAU KOPAR"
        },
        {
          "code": 1409014,
          "regencyCode": 1409,
          "name": "TANJUNG MEDAN"
        },
        {
          "code": 1409020,
          "regencyCode": 1409,
          "name": "BAGAN SINEMBAH"
        },
        {
          "code": 1409021,
          "regencyCode": 1409,
          "name": "SIMPANG KANAN"
        },
        {
          "code": 1409022,
          "regencyCode": 1409,
          "name": "BAGAN SINEMBAH RAYA"
        },
        {
          "code": 1409023,
          "regencyCode": 1409,
          "name": "BALAI JAYA"
        },
        {
          "code": 1409030,
          "regencyCode": 1409,
          "name": "KUBU"
        },
        {
          "code": 1409031,
          "regencyCode": 1409,
          "name": "PASIR LIMAU KAPAS"
        },
        {
          "code": 1409032,
          "regencyCode": 1409,
          "name": "KUBU BABUSSALAM"
        },
        {
          "code": 1409040,
          "regencyCode": 1409,
          "name": "BANGKO"
        },
        {
          "code": 1409041,
          "regencyCode": 1409,
          "name": "SINABOI"
        },
        {
          "code": 1409042,
          "regencyCode": 1409,
          "name": "BATU HAMPAR"
        },
        {
          "code": 1409043,
          "regencyCode": 1409,
          "name": "PEKAITAN"
        },
        {
          "code": 1409050,
          "regencyCode": 1409,
          "name": "RIMBA MELINTANG"
        },
        {
          "code": 1409051,
          "regencyCode": 1409,
          "name": "BANGKO PUSAKO"
        },
        {
          "code": 1410010,
          "regencyCode": 1410,
          "name": "TEBING TINGGI BARAT"
        },
        {
          "code": 1410020,
          "regencyCode": 1410,
          "name": "TEBING TINGGI"
        },
        {
          "code": 1410021,
          "regencyCode": 1410,
          "name": "TEBING TINGGI TIMUR"
        },
        {
          "code": 1410030,
          "regencyCode": 1410,
          "name": "RANGSANG"
        },
        {
          "code": 1410031,
          "regencyCode": 1410,
          "name": "RANGSANG PESISIR"
        },
        {
          "code": 1410040,
          "regencyCode": 1410,
          "name": "RANGSANG BARAT"
        },
        {
          "code": 1410050,
          "regencyCode": 1410,
          "name": "MERBAU"
        },
        {
          "code": 1410051,
          "regencyCode": 1410,
          "name": "PULAU MERBAU"
        },
        {
          "code": 1410052,
          "regencyCode": 1410,
          "name": "TASIK PUTRI PUYU"
        },
        {
          "code": 1471010,
          "regencyCode": 1471,
          "name": "TAMPAN"
        },
        {
          "code": 1471011,
          "regencyCode": 1471,
          "name": "PAYUNG SEKAKI"
        },
        {
          "code": 1471020,
          "regencyCode": 1471,
          "name": "BUKIT RAYA"
        },
        {
          "code": 1471021,
          "regencyCode": 1471,
          "name": "MARPOYAN DAMAI"
        },
        {
          "code": 1471022,
          "regencyCode": 1471,
          "name": "TENAYAN RAYA"
        },
        {
          "code": 1471030,
          "regencyCode": 1471,
          "name": "LIMAPULUH"
        },
        {
          "code": 1471040,
          "regencyCode": 1471,
          "name": "SAIL"
        },
        {
          "code": 1471050,
          "regencyCode": 1471,
          "name": "PEKANBARU KOTA"
        },
        {
          "code": 1471060,
          "regencyCode": 1471,
          "name": "SUKAJADI"
        },
        {
          "code": 1471070,
          "regencyCode": 1471,
          "name": "SENAPELAN"
        },
        {
          "code": 1471080,
          "regencyCode": 1471,
          "name": "RUMBAI"
        },
        {
          "code": 1471081,
          "regencyCode": 1471,
          "name": "RUMBAI PESISIR"
        },
        {
          "code": 1473010,
          "regencyCode": 1473,
          "name": "BUKIT KAPUR"
        },
        {
          "code": 1473011,
          "regencyCode": 1473,
          "name": "MEDANG KAMPAI"
        },
        {
          "code": 1473012,
          "regencyCode": 1473,
          "name": "SUNGAI SEMBILAN"
        },
        {
          "code": 1473020,
          "regencyCode": 1473,
          "name": "DUMAI BARAT"
        },
        {
          "code": 1473021,
          "regencyCode": 1473,
          "name": "DUMAI SELATAN"
        },
        {
          "code": 1473030,
          "regencyCode": 1473,
          "name": "DUMAI TIMUR"
        },
        {
          "code": 1473031,
          "regencyCode": 1473,
          "name": "DUMAI KOTA"
        },
        {
          "code": 1501010,
          "regencyCode": 1501,
          "name": "GUNUNG RAYA"
        },
        {
          "code": 1501011,
          "regencyCode": 1501,
          "name": "BUKIT KERMAN"
        },
        {
          "code": 1501020,
          "regencyCode": 1501,
          "name": "BATANG MERANGIN"
        },
        {
          "code": 1501030,
          "regencyCode": 1501,
          "name": "KELILING DANAU"
        },
        {
          "code": 1501040,
          "regencyCode": 1501,
          "name": "DANAU KERINCI"
        },
        {
          "code": 1501050,
          "regencyCode": 1501,
          "name": "SITINJAU LAUT"
        },
        {
          "code": 1501070,
          "regencyCode": 1501,
          "name": "AIR HANGAT"
        },
        {
          "code": 1501071,
          "regencyCode": 1501,
          "name": "AIR HANGAT TIMUR"
        },
        {
          "code": 1501072,
          "regencyCode": 1501,
          "name": "DEPATI VII"
        },
        {
          "code": 1501073,
          "regencyCode": 1501,
          "name": "AIR HANGAT BARAT"
        },
        {
          "code": 1501080,
          "regencyCode": 1501,
          "name": "GUNUNG KERINCI"
        },
        {
          "code": 1501081,
          "regencyCode": 1501,
          "name": "SIULAK"
        },
        {
          "code": 1501082,
          "regencyCode": 1501,
          "name": "SIULAK MUKAI"
        },
        {
          "code": 1501090,
          "regencyCode": 1501,
          "name": "KAYU ARO"
        },
        {
          "code": 1501091,
          "regencyCode": 1501,
          "name": "GUNUNG TUJUH"
        },
        {
          "code": 1501092,
          "regencyCode": 1501,
          "name": "KAYU ARO BARAT"
        },
        {
          "code": 1502010,
          "regencyCode": 1502,
          "name": "JANGKAT"
        },
        {
          "code": 1502011,
          "regencyCode": 1502,
          "name": "SUNGAI TENANG"
        },
        {
          "code": 1502020,
          "regencyCode": 1502,
          "name": "MUARA SIAU"
        },
        {
          "code": 1502021,
          "regencyCode": 1502,
          "name": "LEMBAH MASURAI"
        },
        {
          "code": 1502022,
          "regencyCode": 1502,
          "name": "TIANG PUMPUNG"
        },
        {
          "code": 1502030,
          "regencyCode": 1502,
          "name": "PAMENANG"
        },
        {
          "code": 1502031,
          "regencyCode": 1502,
          "name": "PAMENANG BARAT"
        },
        {
          "code": 1502032,
          "regencyCode": 1502,
          "name": "RENAH PAMENANG"
        },
        {
          "code": 1502033,
          "regencyCode": 1502,
          "name": "PAMENANG SELATAN"
        },
        {
          "code": 1502040,
          "regencyCode": 1502,
          "name": "BANGKO"
        },
        {
          "code": 1502041,
          "regencyCode": 1502,
          "name": "BANGKO BARAT"
        },
        {
          "code": 1502042,
          "regencyCode": 1502,
          "name": "NALO TANTAN"
        },
        {
          "code": 1502043,
          "regencyCode": 1502,
          "name": "BATANG MASUMAI"
        },
        {
          "code": 1502050,
          "regencyCode": 1502,
          "name": "SUNGAI MANAU"
        },
        {
          "code": 1502051,
          "regencyCode": 1502,
          "name": "RENAH PEMBARAP"
        },
        {
          "code": 1502052,
          "regencyCode": 1502,
          "name": "PANGKALAN JAMBU"
        },
        {
          "code": 1502060,
          "regencyCode": 1502,
          "name": "TABIR"
        },
        {
          "code": 1502061,
          "regencyCode": 1502,
          "name": "TABIR ULU"
        },
        {
          "code": 1502062,
          "regencyCode": 1502,
          "name": "TABIR SELATAN"
        },
        {
          "code": 1502063,
          "regencyCode": 1502,
          "name": "TABIR ILIR"
        },
        {
          "code": 1502064,
          "regencyCode": 1502,
          "name": "TABIR TIMUR"
        },
        {
          "code": 1502065,
          "regencyCode": 1502,
          "name": "TABIR LINTAS"
        },
        {
          "code": 1502066,
          "regencyCode": 1502,
          "name": "MARGO TABIR"
        },
        {
          "code": 1502067,
          "regencyCode": 1502,
          "name": "TABIR BARAT"
        },
        {
          "code": 1503010,
          "regencyCode": 1503,
          "name": "BATANG ASAI"
        },
        {
          "code": 1503020,
          "regencyCode": 1503,
          "name": "LIMUN"
        },
        {
          "code": 1503021,
          "regencyCode": 1503,
          "name": "CERMIN NAN GEDANG"
        },
        {
          "code": 1503030,
          "regencyCode": 1503,
          "name": "PELAWAN"
        },
        {
          "code": 1503031,
          "regencyCode": 1503,
          "name": "SINGKUT"
        },
        {
          "code": 1503040,
          "regencyCode": 1503,
          "name": "SAROLANGUN"
        },
        {
          "code": 1503041,
          "regencyCode": 1503,
          "name": "BATHIN VIII"
        },
        {
          "code": 1503050,
          "regencyCode": 1503,
          "name": "PAUH"
        },
        {
          "code": 1503051,
          "regencyCode": 1503,
          "name": "AIR HITAM"
        },
        {
          "code": 1503060,
          "regencyCode": 1503,
          "name": "MANDIANGIN"
        },
        {
          "code": 1504010,
          "regencyCode": 1504,
          "name": "MERSAM"
        },
        {
          "code": 1504011,
          "regencyCode": 1504,
          "name": "MARO SEBO ULU"
        },
        {
          "code": 1504020,
          "regencyCode": 1504,
          "name": "BATIN XXIV"
        },
        {
          "code": 1504030,
          "regencyCode": 1504,
          "name": "MUARA TEMBESI"
        },
        {
          "code": 1504040,
          "regencyCode": 1504,
          "name": "MUARA BULIAN"
        },
        {
          "code": 1504041,
          "regencyCode": 1504,
          "name": "BAJUBANG"
        },
        {
          "code": 1504042,
          "regencyCode": 1504,
          "name": "MARO SEBO ILIR"
        },
        {
          "code": 1504050,
          "regencyCode": 1504,
          "name": "PEMAYUNG"
        },
        {
          "code": 1505010,
          "regencyCode": 1505,
          "name": "MESTONG"
        },
        {
          "code": 1505011,
          "regencyCode": 1505,
          "name": "SUNGAI BAHAR"
        },
        {
          "code": 1505012,
          "regencyCode": 1505,
          "name": "BAHAR SELATAN"
        },
        {
          "code": 1505013,
          "regencyCode": 1505,
          "name": "BAHAR UTARA"
        },
        {
          "code": 1505020,
          "regencyCode": 1505,
          "name": "KUMPEH ULU"
        },
        {
          "code": 1505021,
          "regencyCode": 1505,
          "name": "SUNGAI GELAM"
        },
        {
          "code": 1505030,
          "regencyCode": 1505,
          "name": "KUMPEH"
        },
        {
          "code": 1505040,
          "regencyCode": 1505,
          "name": "MARO SEBO"
        },
        {
          "code": 1505041,
          "regencyCode": 1505,
          "name": "TAMAN RAJO"
        },
        {
          "code": 1505050,
          "regencyCode": 1505,
          "name": "JAMBI LUAR KOTA"
        },
        {
          "code": 1505060,
          "regencyCode": 1505,
          "name": "SEKERNAN"
        },
        {
          "code": 1506010,
          "regencyCode": 1506,
          "name": "MENDAHARA"
        },
        {
          "code": 1506011,
          "regencyCode": 1506,
          "name": "MENDAHARA ULU"
        },
        {
          "code": 1506012,
          "regencyCode": 1506,
          "name": "GERAGAI"
        },
        {
          "code": 1506020,
          "regencyCode": 1506,
          "name": "DENDANG"
        },
        {
          "code": 1506031,
          "regencyCode": 1506,
          "name": "MUARA SABAK BARAT"
        },
        {
          "code": 1506032,
          "regencyCode": 1506,
          "name": "MUARA SABAK TIMUR"
        },
        {
          "code": 1506033,
          "regencyCode": 1506,
          "name": "KUALA JAMBI"
        },
        {
          "code": 1506040,
          "regencyCode": 1506,
          "name": "RANTAU RASAU"
        },
        {
          "code": 1506041,
          "regencyCode": 1506,
          "name": "BERBAK"
        },
        {
          "code": 1506050,
          "regencyCode": 1506,
          "name": "NIPAH PANJANG"
        },
        {
          "code": 1506060,
          "regencyCode": 1506,
          "name": "SADU"
        },
        {
          "code": 1507010,
          "regencyCode": 1507,
          "name": "TUNGKAL ULU"
        },
        {
          "code": 1507011,
          "regencyCode": 1507,
          "name": "MERLUNG"
        },
        {
          "code": 1507012,
          "regencyCode": 1507,
          "name": "BATANG ASAM"
        },
        {
          "code": 1507013,
          "regencyCode": 1507,
          "name": "TEBING TINGGI"
        },
        {
          "code": 1507014,
          "regencyCode": 1507,
          "name": "RENAH MENDALUH"
        },
        {
          "code": 1507015,
          "regencyCode": 1507,
          "name": "MUARA PAPALIK"
        },
        {
          "code": 1507020,
          "regencyCode": 1507,
          "name": "PENGABUAN"
        },
        {
          "code": 1507021,
          "regencyCode": 1507,
          "name": "SENYERANG"
        },
        {
          "code": 1507030,
          "regencyCode": 1507,
          "name": "TUNGKAL ILIR"
        },
        {
          "code": 1507031,
          "regencyCode": 1507,
          "name": "BRAM ITAM"
        },
        {
          "code": 1507032,
          "regencyCode": 1507,
          "name": "SEBERANG KOTA"
        },
        {
          "code": 1507040,
          "regencyCode": 1507,
          "name": "BETARA"
        },
        {
          "code": 1507041,
          "regencyCode": 1507,
          "name": "KUALA BETARA"
        },
        {
          "code": 1508010,
          "regencyCode": 1508,
          "name": "TEBO ILIR"
        },
        {
          "code": 1508011,
          "regencyCode": 1508,
          "name": "MUARA TABIR"
        },
        {
          "code": 1508020,
          "regencyCode": 1508,
          "name": "TEBO TENGAH"
        },
        {
          "code": 1508021,
          "regencyCode": 1508,
          "name": "SUMAY"
        },
        {
          "code": 1508022,
          "regencyCode": 1508,
          "name": "TENGAH ILIR"
        },
        {
          "code": 1508030,
          "regencyCode": 1508,
          "name": "RIMBO BUJANG"
        },
        {
          "code": 1508031,
          "regencyCode": 1508,
          "name": "RIMBO ULU"
        },
        {
          "code": 1508032,
          "regencyCode": 1508,
          "name": "RIMBO ILIR"
        },
        {
          "code": 1508040,
          "regencyCode": 1508,
          "name": "TEBO ULU"
        },
        {
          "code": 1508041,
          "regencyCode": 1508,
          "name": "VII KOTO"
        },
        {
          "code": 1508042,
          "regencyCode": 1508,
          "name": "SERAI SERUMPUN"
        },
        {
          "code": 1508043,
          "regencyCode": 1508,
          "name": "VII KOTO ILIR"
        },
        {
          "code": 1509010,
          "regencyCode": 1509,
          "name": "PELEPAT"
        },
        {
          "code": 1509011,
          "regencyCode": 1509,
          "name": "PELEPAT ILIR"
        },
        {
          "code": 1509021,
          "regencyCode": 1509,
          "name": "BATHIN II BABEKO"
        },
        {
          "code": 1509022,
          "regencyCode": 1509,
          "name": "RIMBO TENGAH"
        },
        {
          "code": 1509023,
          "regencyCode": 1509,
          "name": "BUNGO DANI"
        },
        {
          "code": 1509024,
          "regencyCode": 1509,
          "name": "PASAR MUARA BUNGO"
        },
        {
          "code": 1509025,
          "regencyCode": 1509,
          "name": "BATHIN III"
        },
        {
          "code": 1509030,
          "regencyCode": 1509,
          "name": "RANTAU PANDAN"
        },
        {
          "code": 1509031,
          "regencyCode": 1509,
          "name": "MUKO-MUKO BATHIN VII"
        },
        {
          "code": 1509032,
          "regencyCode": 1509,
          "name": "BATHIN III ULU"
        },
        {
          "code": 1509040,
          "regencyCode": 1509,
          "name": "TANAH SEPENGGAL"
        },
        {
          "code": 1509041,
          "regencyCode": 1509,
          "name": "TANAH SEPENGGAL LINTAS"
        },
        {
          "code": 1509050,
          "regencyCode": 1509,
          "name": "TANAH TUMBUH"
        },
        {
          "code": 1509051,
          "regencyCode": 1509,
          "name": "LIMBUR LUBUK MENGKUANG"
        },
        {
          "code": 1509052,
          "regencyCode": 1509,
          "name": "BATHIN II PELAYANG"
        },
        {
          "code": 1509060,
          "regencyCode": 1509,
          "name": "JUJUHAN"
        },
        {
          "code": 1509061,
          "regencyCode": 1509,
          "name": "JUJUHAN ILIR"
        },
        {
          "code": 1571010,
          "regencyCode": 1571,
          "name": "KOTA BARU"
        },
        {
          "code": 1571011,
          "regencyCode": 1571,
          "name": "ALAM BARAJO"
        },
        {
          "code": 1571020,
          "regencyCode": 1571,
          "name": "JAMBI SELATAN"
        },
        {
          "code": 1571021,
          "regencyCode": 1571,
          "name": "PAAL MERAH"
        },
        {
          "code": 1571030,
          "regencyCode": 1571,
          "name": "JELUTUNG"
        },
        {
          "code": 1571040,
          "regencyCode": 1571,
          "name": "PASAR JAMBI"
        },
        {
          "code": 1571050,
          "regencyCode": 1571,
          "name": "TELANAIPURA"
        },
        {
          "code": 1571051,
          "regencyCode": 1571,
          "name": "DANAU SIPIN"
        },
        {
          "code": 1571060,
          "regencyCode": 1571,
          "name": "DANAU TELUK"
        },
        {
          "code": 1571070,
          "regencyCode": 1571,
          "name": "PELAYANGAN"
        },
        {
          "code": 1571080,
          "regencyCode": 1571,
          "name": "JAMBI TIMUR"
        },
        {
          "code": 1572010,
          "regencyCode": 1572,
          "name": "TANAH KAMPUNG"
        },
        {
          "code": 1572020,
          "regencyCode": 1572,
          "name": "KUMUN DEBAI"
        },
        {
          "code": 1572030,
          "regencyCode": 1572,
          "name": "SUNGAI PENUH"
        },
        {
          "code": 1572031,
          "regencyCode": 1572,
          "name": "PONDOK TINGGGI"
        },
        {
          "code": 1572032,
          "regencyCode": 1572,
          "name": "SUNGAI BUNGKAL"
        },
        {
          "code": 1572040,
          "regencyCode": 1572,
          "name": "HAMPARAN RAWANG"
        },
        {
          "code": 1572050,
          "regencyCode": 1572,
          "name": "PESISIR BUKIT"
        },
        {
          "code": 1572051,
          "regencyCode": 1572,
          "name": "KOTO BARU"
        },
        {
          "code": 1601052,
          "regencyCode": 1601,
          "name": "LENGKITI"
        },
        {
          "code": 1601070,
          "regencyCode": 1601,
          "name": "SOSOH BUAY RAYAP"
        },
        {
          "code": 1601080,
          "regencyCode": 1601,
          "name": "PENGANDONAN"
        },
        {
          "code": 1601081,
          "regencyCode": 1601,
          "name": "SEMIDANG AJI"
        },
        {
          "code": 1601082,
          "regencyCode": 1601,
          "name": "ULU OGAN"
        },
        {
          "code": 1601083,
          "regencyCode": 1601,
          "name": "MUARA JAYA"
        },
        {
          "code": 1601090,
          "regencyCode": 1601,
          "name": "PENINJAUAN"
        },
        {
          "code": 1601091,
          "regencyCode": 1601,
          "name": "LUBUK BATANG"
        },
        {
          "code": 1601092,
          "regencyCode": 1601,
          "name": "SINAR PENINJAUAN"
        },
        {
          "code": 1601093,
          "regencyCode": 1601,
          "name": "KEDATON PENINJAUAN RAYA"
        },
        {
          "code": 1601130,
          "regencyCode": 1601,
          "name": "BATU RAJA TIMUR"
        },
        {
          "code": 1601131,
          "regencyCode": 1601,
          "name": "LUBUK RAJA"
        },
        {
          "code": 1601140,
          "regencyCode": 1601,
          "name": "BATU RAJA BARAT"
        },
        {
          "code": 1602010,
          "regencyCode": 1602,
          "name": "LEMPUING"
        },
        {
          "code": 1602011,
          "regencyCode": 1602,
          "name": "LEMPUING JAYA"
        },
        {
          "code": 1602020,
          "regencyCode": 1602,
          "name": "MESUJI"
        },
        {
          "code": 1602021,
          "regencyCode": 1602,
          "name": "SUNGAI MENANG"
        },
        {
          "code": 1602022,
          "regencyCode": 1602,
          "name": "MESUJI MAKMUR"
        },
        {
          "code": 1602023,
          "regencyCode": 1602,
          "name": "MESUJI RAYA"
        },
        {
          "code": 1602030,
          "regencyCode": 1602,
          "name": "TULUNG SELAPAN"
        },
        {
          "code": 1602031,
          "regencyCode": 1602,
          "name": "CENGAL"
        },
        {
          "code": 1602040,
          "regencyCode": 1602,
          "name": "PEDAMARAN"
        },
        {
          "code": 1602041,
          "regencyCode": 1602,
          "name": "PEDAMARAN TIMUR"
        },
        {
          "code": 1602050,
          "regencyCode": 1602,
          "name": "TANJUNG LUBUK"
        },
        {
          "code": 1602051,
          "regencyCode": 1602,
          "name": "TELUK GELAM"
        },
        {
          "code": 1602060,
          "regencyCode": 1602,
          "name": "KOTA KAYU AGUNG"
        },
        {
          "code": 1602120,
          "regencyCode": 1602,
          "name": "SIRAH PULAU PADANG"
        },
        {
          "code": 1602121,
          "regencyCode": 1602,
          "name": "JEJAWI"
        },
        {
          "code": 1602130,
          "regencyCode": 1602,
          "name": "PAMPANGAN"
        },
        {
          "code": 1602131,
          "regencyCode": 1602,
          "name": "PANGKALAN LAPAM"
        },
        {
          "code": 1602140,
          "regencyCode": 1602,
          "name": "AIR SUGIHAN"
        },
        {
          "code": 1603010,
          "regencyCode": 1603,
          "name": "SEMENDO DARAT LAUT"
        },
        {
          "code": 1603011,
          "regencyCode": 1603,
          "name": "SEMENDO DARAT ULU"
        },
        {
          "code": 1603012,
          "regencyCode": 1603,
          "name": "SEMENDO DARAT TENGAH"
        },
        {
          "code": 1603020,
          "regencyCode": 1603,
          "name": "TANJUNG AGUNG"
        },
        {
          "code": 1603031,
          "regencyCode": 1603,
          "name": "RAMBANG"
        },
        {
          "code": 1603032,
          "regencyCode": 1603,
          "name": "LUBAI"
        },
        {
          "code": 1603033,
          "regencyCode": 1603,
          "name": "LUBAI ULU"
        },
        {
          "code": 1603040,
          "regencyCode": 1603,
          "name": "LAWANG KIDUL"
        },
        {
          "code": 1603050,
          "regencyCode": 1603,
          "name": "MUARA ENIM"
        },
        {
          "code": 1603051,
          "regencyCode": 1603,
          "name": "UJAN MAS"
        },
        {
          "code": 1603060,
          "regencyCode": 1603,
          "name": "GUNUNG MEGANG"
        },
        {
          "code": 1603061,
          "regencyCode": 1603,
          "name": "BENAKAT"
        },
        {
          "code": 1603062,
          "regencyCode": 1603,
          "name": "BELIMBING"
        },
        {
          "code": 1603070,
          "regencyCode": 1603,
          "name": "RAMBANG DANGKU"
        },
        {
          "code": 1603090,
          "regencyCode": 1603,
          "name": "GELUMBANG"
        },
        {
          "code": 1603091,
          "regencyCode": 1603,
          "name": "LEMBAK"
        },
        {
          "code": 1603092,
          "regencyCode": 1603,
          "name": "SUNGAI ROTAN"
        },
        {
          "code": 1603093,
          "regencyCode": 1603,
          "name": "MUARA BELIDA"
        },
        {
          "code": 1603094,
          "regencyCode": 1603,
          "name": "KELEKAR"
        },
        {
          "code": 1603095,
          "regencyCode": 1603,
          "name": "BELIDA DARAT"
        },
        {
          "code": 1604011,
          "regencyCode": 1604,
          "name": "TANJUNG SAKTI PUMI"
        },
        {
          "code": 1604012,
          "regencyCode": 1604,
          "name": "TANJUNG SAKTI PUMU"
        },
        {
          "code": 1604040,
          "regencyCode": 1604,
          "name": "KOTA AGUNG"
        },
        {
          "code": 1604041,
          "regencyCode": 1604,
          "name": "MULAK ULU"
        },
        {
          "code": 1604042,
          "regencyCode": 1604,
          "name": "TANJUNG TEBAT"
        },
        {
          "code": 1604050,
          "regencyCode": 1604,
          "name": "PULAU PINANG"
        },
        {
          "code": 1604051,
          "regencyCode": 1604,
          "name": "PAGAR GUNUNG"
        },
        {
          "code": 1604052,
          "regencyCode": 1604,
          "name": "GUMAY ULU"
        },
        {
          "code": 1604060,
          "regencyCode": 1604,
          "name": "JARAI"
        },
        {
          "code": 1604061,
          "regencyCode": 1604,
          "name": "PAJAR BULAN"
        },
        {
          "code": 1604062,
          "regencyCode": 1604,
          "name": "MUARA PAYANG"
        },
        {
          "code": 1604063,
          "regencyCode": 1604,
          "name": "SUKAMERINDU"
        },
        {
          "code": 1604111,
          "regencyCode": 1604,
          "name": "KIKIM BARAT"
        },
        {
          "code": 1604112,
          "regencyCode": 1604,
          "name": "KIKIM TIMUR"
        },
        {
          "code": 1604113,
          "regencyCode": 1604,
          "name": "KIKIM SELATAN"
        },
        {
          "code": 1604114,
          "regencyCode": 1604,
          "name": "KIKIM TENGAH"
        },
        {
          "code": 1604120,
          "regencyCode": 1604,
          "name": "LAHAT"
        },
        {
          "code": 1604121,
          "regencyCode": 1604,
          "name": "GUMAY TALANG"
        },
        {
          "code": 1604122,
          "regencyCode": 1604,
          "name": "PSEKSU"
        },
        {
          "code": 1604131,
          "regencyCode": 1604,
          "name": "MERAPI BARAT"
        },
        {
          "code": 1604132,
          "regencyCode": 1604,
          "name": "MERAPI TIMUR"
        },
        {
          "code": 1604133,
          "regencyCode": 1604,
          "name": "MERAPI SELATAN"
        },
        {
          "code": 1605030,
          "regencyCode": 1605,
          "name": "SUKU TENGAH LAKITAN ULU"
        },
        {
          "code": 1605031,
          "regencyCode": 1605,
          "name": "SELANGIT"
        },
        {
          "code": 1605032,
          "regencyCode": 1605,
          "name": "SUMBER HARTA"
        },
        {
          "code": 1605040,
          "regencyCode": 1605,
          "name": "TUGUMULYO"
        },
        {
          "code": 1605041,
          "regencyCode": 1605,
          "name": "PURWODADI"
        },
        {
          "code": 1605050,
          "regencyCode": 1605,
          "name": "MUARA BELITI"
        },
        {
          "code": 1605051,
          "regencyCode": 1605,
          "name": "TIANG PUMPUNG KEPUNGUT"
        },
        {
          "code": 1605060,
          "regencyCode": 1605,
          "name": "JAYALOKA"
        },
        {
          "code": 1605061,
          "regencyCode": 1605,
          "name": "SUKA KARYA"
        },
        {
          "code": 1605070,
          "regencyCode": 1605,
          "name": "MUARA KELINGI"
        },
        {
          "code": 1605071,
          "regencyCode": 1605,
          "name": "BULANG TENGAH SUKU ULU"
        },
        {
          "code": 1605072,
          "regencyCode": 1605,
          "name": "TUAH NEGERI"
        },
        {
          "code": 1605080,
          "regencyCode": 1605,
          "name": "MUARA LAKITAN"
        },
        {
          "code": 1605090,
          "regencyCode": 1605,
          "name": "MEGANG SAKTI"
        },
        {
          "code": 1606010,
          "regencyCode": 1606,
          "name": "SANGA DESA"
        },
        {
          "code": 1606020,
          "regencyCode": 1606,
          "name": "BABAT TOMAN"
        },
        {
          "code": 1606021,
          "regencyCode": 1606,
          "name": "BATANGHARI LEKO"
        },
        {
          "code": 1606022,
          "regencyCode": 1606,
          "name": "PLAKAT TINGGI"
        },
        {
          "code": 1606023,
          "regencyCode": 1606,
          "name": "LAWANG WETAN"
        },
        {
          "code": 1606030,
          "regencyCode": 1606,
          "name": "SUNGAI KERUH"
        },
        {
          "code": 1606040,
          "regencyCode": 1606,
          "name": "SEKAYU"
        },
        {
          "code": 1606041,
          "regencyCode": 1606,
          "name": "LAIS"
        },
        {
          "code": 1606090,
          "regencyCode": 1606,
          "name": "SUNGAI LILIN"
        },
        {
          "code": 1606091,
          "regencyCode": 1606,
          "name": "KELUANG"
        },
        {
          "code": 1606092,
          "regencyCode": 1606,
          "name": "BABAT SUPAT"
        },
        {
          "code": 1606100,
          "regencyCode": 1606,
          "name": "BAYUNG LENCIR"
        },
        {
          "code": 1606101,
          "regencyCode": 1606,
          "name": "LALAN"
        },
        {
          "code": 1606102,
          "regencyCode": 1606,
          "name": "TUNGKAL JAYA"
        },
        {
          "code": 1607010,
          "regencyCode": 1607,
          "name": "RANTAU BAYUR"
        },
        {
          "code": 1607020,
          "regencyCode": 1607,
          "name": "BETUNG"
        },
        {
          "code": 1607021,
          "regencyCode": 1607,
          "name": "SUAK TAPEH"
        },
        {
          "code": 1607030,
          "regencyCode": 1607,
          "name": "PULAU RIMAU"
        },
        {
          "code": 1607031,
          "regencyCode": 1607,
          "name": "TUNGKAL ILIR"
        },
        {
          "code": 1607040,
          "regencyCode": 1607,
          "name": "BANYUASIN III"
        },
        {
          "code": 1607041,
          "regencyCode": 1607,
          "name": "SEMBAWA"
        },
        {
          "code": 1607050,
          "regencyCode": 1607,
          "name": "TALANG KELAPA"
        },
        {
          "code": 1607051,
          "regencyCode": 1607,
          "name": "TANJUNG LAGO"
        },
        {
          "code": 1607060,
          "regencyCode": 1607,
          "name": "BANYUASIN I"
        },
        {
          "code": 1607061,
          "regencyCode": 1607,
          "name": "AIR KUMBANG"
        },
        {
          "code": 1607070,
          "regencyCode": 1607,
          "name": "RAMBUTAN"
        },
        {
          "code": 1607080,
          "regencyCode": 1607,
          "name": "MUARA PADANG"
        },
        {
          "code": 1607081,
          "regencyCode": 1607,
          "name": "MUARA SUGIHAN"
        },
        {
          "code": 1607090,
          "regencyCode": 1607,
          "name": "MAKARTI JAYA"
        },
        {
          "code": 1607091,
          "regencyCode": 1607,
          "name": "AIR SALEH"
        },
        {
          "code": 1607100,
          "regencyCode": 1607,
          "name": "BANYUASIN II"
        },
        {
          "code": 1607110,
          "regencyCode": 1607,
          "name": "MUARA TELANG"
        },
        {
          "code": 1607111,
          "regencyCode": 1607,
          "name": "SUMBER MARGA TELANG"
        },
        {
          "code": 1608010,
          "regencyCode": 1608,
          "name": "MEKAKAU ILIR"
        },
        {
          "code": 1608020,
          "regencyCode": 1608,
          "name": "BANDING AGUNG"
        },
        {
          "code": 1608021,
          "regencyCode": 1608,
          "name": "WARKUK RANAU SELATAN"
        },
        {
          "code": 1608022,
          "regencyCode": 1608,
          "name": "BUAY PEMATANG RIBU RANAU TENGAH"
        },
        {
          "code": 1608030,
          "regencyCode": 1608,
          "name": "BUAY PEMACA"
        },
        {
          "code": 1608040,
          "regencyCode": 1608,
          "name": "SIMPANG"
        },
        {
          "code": 1608041,
          "regencyCode": 1608,
          "name": "BUANA PEMACA"
        },
        {
          "code": 1608050,
          "regencyCode": 1608,
          "name": "MUARADUA"
        },
        {
          "code": 1608051,
          "regencyCode": 1608,
          "name": "BUAY RAWAN"
        },
        {
          "code": 1608060,
          "regencyCode": 1608,
          "name": "BUAY SANDANG AJI"
        },
        {
          "code": 1608061,
          "regencyCode": 1608,
          "name": "TIGA DIHAJI"
        },
        {
          "code": 1608070,
          "regencyCode": 1608,
          "name": "BUAY RUNJUNG"
        },
        {
          "code": 1608071,
          "regencyCode": 1608,
          "name": "RUNJUNG AGUNG"
        },
        {
          "code": 1608080,
          "regencyCode": 1608,
          "name": "KISAM TINGGI"
        },
        {
          "code": 1608090,
          "regencyCode": 1608,
          "name": "MUARADUA KISAM"
        },
        {
          "code": 1608091,
          "regencyCode": 1608,
          "name": "KISAM ILIR"
        },
        {
          "code": 1608100,
          "regencyCode": 1608,
          "name": "PULAU BERINGIN"
        },
        {
          "code": 1608101,
          "regencyCode": 1608,
          "name": "SINDANG DANAU"
        },
        {
          "code": 1608102,
          "regencyCode": 1608,
          "name": "SUNGAI ARE"
        },
        {
          "code": 1609010,
          "regencyCode": 1609,
          "name": "MARTAPURA"
        },
        {
          "code": 1609011,
          "regencyCode": 1609,
          "name": "BUNGA MAYANG"
        },
        {
          "code": 1609012,
          "regencyCode": 1609,
          "name": "JAYA PURA"
        },
        {
          "code": 1609020,
          "regencyCode": 1609,
          "name": "BUAY PEMUKA PELIUNG"
        },
        {
          "code": 1609030,
          "regencyCode": 1609,
          "name": "BUAY MADANG"
        },
        {
          "code": 1609031,
          "regencyCode": 1609,
          "name": "BUAY MADANG TIMUR"
        },
        {
          "code": 1609032,
          "regencyCode": 1609,
          "name": "BUAY PEMUKA BANGSA RAJA"
        },
        {
          "code": 1609040,
          "regencyCode": 1609,
          "name": "MADANG SUKU II"
        },
        {
          "code": 1609041,
          "regencyCode": 1609,
          "name": "MADANG SUKU III"
        },
        {
          "code": 1609050,
          "regencyCode": 1609,
          "name": "MADANG SUKU I"
        },
        {
          "code": 1609051,
          "regencyCode": 1609,
          "name": "BELITANG MADANG RAYA"
        },
        {
          "code": 1609060,
          "regencyCode": 1609,
          "name": "BELITANG"
        },
        {
          "code": 1609061,
          "regencyCode": 1609,
          "name": "BELITANG JAYA"
        },
        {
          "code": 1609070,
          "regencyCode": 1609,
          "name": "BELITANG III"
        },
        {
          "code": 1609080,
          "regencyCode": 1609,
          "name": "BELITANG II"
        },
        {
          "code": 1609081,
          "regencyCode": 1609,
          "name": "BELITANG MULYA"
        },
        {
          "code": 1609090,
          "regencyCode": 1609,
          "name": "SEMENDAWAI SUKU III"
        },
        {
          "code": 1609091,
          "regencyCode": 1609,
          "name": "SEMENDAWAI TIMUR"
        },
        {
          "code": 1609100,
          "regencyCode": 1609,
          "name": "CEMPAKA"
        },
        {
          "code": 1609101,
          "regencyCode": 1609,
          "name": "SEMENDAWAI BARAT"
        },
        {
          "code": 1610010,
          "regencyCode": 1610,
          "name": "MUARA KUANG"
        },
        {
          "code": 1610011,
          "regencyCode": 1610,
          "name": "RAMBANG KUANG"
        },
        {
          "code": 1610012,
          "regencyCode": 1610,
          "name": "LUBUK KELIAT"
        },
        {
          "code": 1610020,
          "regencyCode": 1610,
          "name": "TANJUNG BATU"
        },
        {
          "code": 1610021,
          "regencyCode": 1610,
          "name": "PAYARAMAN"
        },
        {
          "code": 1610030,
          "regencyCode": 1610,
          "name": "RANTAU ALAI"
        },
        {
          "code": 1610031,
          "regencyCode": 1610,
          "name": "KANDIS"
        },
        {
          "code": 1610040,
          "regencyCode": 1610,
          "name": "TANJUNG RAJA"
        },
        {
          "code": 1610041,
          "regencyCode": 1610,
          "name": "RANTAU PANJANG"
        },
        {
          "code": 1610042,
          "regencyCode": 1610,
          "name": "SUNGAI PINANG"
        },
        {
          "code": 1610050,
          "regencyCode": 1610,
          "name": "PEMULUTAN"
        },
        {
          "code": 1610051,
          "regencyCode": 1610,
          "name": "PEMULUTAN SELATAN"
        },
        {
          "code": 1610052,
          "regencyCode": 1610,
          "name": "PEMULUTAN BARAT"
        },
        {
          "code": 1610060,
          "regencyCode": 1610,
          "name": "INDRALAYA"
        },
        {
          "code": 1610061,
          "regencyCode": 1610,
          "name": "INDRALAYA UTARA"
        },
        {
          "code": 1610062,
          "regencyCode": 1610,
          "name": "INDRALAYA SELATAN"
        },
        {
          "code": 1611010,
          "regencyCode": 1611,
          "name": "MUARA PINANG"
        },
        {
          "code": 1611020,
          "regencyCode": 1611,
          "name": "LINTANG KANAN"
        },
        {
          "code": 1611030,
          "regencyCode": 1611,
          "name": "PENDOPO"
        },
        {
          "code": 1611031,
          "regencyCode": 1611,
          "name": "PENDOPO BARAT"
        },
        {
          "code": 1611040,
          "regencyCode": 1611,
          "name": "PASEMAH AIR KERUH"
        },
        {
          "code": 1611050,
          "regencyCode": 1611,
          "name": "ULU MUSI"
        },
        {
          "code": 1611051,
          "regencyCode": 1611,
          "name": "SIKAP DALAM"
        },
        {
          "code": 1611060,
          "regencyCode": 1611,
          "name": "TALANG PADANG"
        },
        {
          "code": 1611070,
          "regencyCode": 1611,
          "name": "TEBING TINGGI"
        },
        {
          "code": 1611071,
          "regencyCode": 1611,
          "name": "SALING"
        },
        {
          "code": 1612010,
          "regencyCode": 1612,
          "name": "TALANG UBI"
        },
        {
          "code": 1612020,
          "regencyCode": 1612,
          "name": "TANAH ABANG"
        },
        {
          "code": 1612030,
          "regencyCode": 1612,
          "name": "ABAB"
        },
        {
          "code": 1612040,
          "regencyCode": 1612,
          "name": "PENUKAL"
        },
        {
          "code": 1612050,
          "regencyCode": 1612,
          "name": "PENUKAL UTARA"
        },
        {
          "code": 1613010,
          "regencyCode": 1613,
          "name": "ULU RAWAS"
        },
        {
          "code": 1613020,
          "regencyCode": 1613,
          "name": "KARANG JAYA"
        },
        {
          "code": 1613030,
          "regencyCode": 1613,
          "name": "RAWAS ULU"
        },
        {
          "code": 1613040,
          "regencyCode": 1613,
          "name": "RUPIT"
        },
        {
          "code": 1613050,
          "regencyCode": 1613,
          "name": "KARANG DAPO"
        },
        {
          "code": 1613060,
          "regencyCode": 1613,
          "name": "RAWAS ILIR"
        },
        {
          "code": 1613070,
          "regencyCode": 1613,
          "name": "NIBUNG"
        },
        {
          "code": 1671010,
          "regencyCode": 1671,
          "name": "ILIR BARAT II"
        },
        {
          "code": 1671011,
          "regencyCode": 1671,
          "name": "GANDUS"
        },
        {
          "code": 1671020,
          "regencyCode": 1671,
          "name": "SEBERANG ULU I"
        },
        {
          "code": 1671021,
          "regencyCode": 1671,
          "name": "KERTAPATI"
        },
        {
          "code": 1671030,
          "regencyCode": 1671,
          "name": "SEBERANG ULU II"
        },
        {
          "code": 1671031,
          "regencyCode": 1671,
          "name": "PLAJU"
        },
        {
          "code": 1671040,
          "regencyCode": 1671,
          "name": "ILIR BARAT I"
        },
        {
          "code": 1671041,
          "regencyCode": 1671,
          "name": "BUKIT KECIL"
        },
        {
          "code": 1671050,
          "regencyCode": 1671,
          "name": "ILIR TIMUR I"
        },
        {
          "code": 1671051,
          "regencyCode": 1671,
          "name": "KEMUNING"
        },
        {
          "code": 1671060,
          "regencyCode": 1671,
          "name": "ILIR TIMUR II"
        },
        {
          "code": 1671061,
          "regencyCode": 1671,
          "name": "KALIDONI"
        },
        {
          "code": 1671070,
          "regencyCode": 1671,
          "name": "SAKO"
        },
        {
          "code": 1671071,
          "regencyCode": 1671,
          "name": "SEMATANG BORANG"
        },
        {
          "code": 1671080,
          "regencyCode": 1671,
          "name": "SUKARAMI"
        },
        {
          "code": 1671081,
          "regencyCode": 1671,
          "name": "ALANG ALANG LEBAR"
        },
        {
          "code": 1672010,
          "regencyCode": 1672,
          "name": "RAMBANG KAPAK TENGAH"
        },
        {
          "code": 1672020,
          "regencyCode": 1672,
          "name": "PRABUMULIH TIMUR"
        },
        {
          "code": 1672021,
          "regencyCode": 1672,
          "name": "PRABUMULIH SELATAN"
        },
        {
          "code": 1672030,
          "regencyCode": 1672,
          "name": "PRABUMULIH BARAT"
        },
        {
          "code": 1672031,
          "regencyCode": 1672,
          "name": "PRABUMULIH UTARA"
        },
        {
          "code": 1672040,
          "regencyCode": 1672,
          "name": "CAMBAI"
        },
        {
          "code": 1673010,
          "regencyCode": 1673,
          "name": "DEMPO SELATAN"
        },
        {
          "code": 1673011,
          "regencyCode": 1673,
          "name": "DEMPO TENGAH"
        },
        {
          "code": 1673020,
          "regencyCode": 1673,
          "name": "DEMPO UTARA"
        },
        {
          "code": 1673030,
          "regencyCode": 1673,
          "name": "PAGAR ALAM SELATAN"
        },
        {
          "code": 1673040,
          "regencyCode": 1673,
          "name": "PAGAR ALAM UTARA"
        },
        {
          "code": 1674011,
          "regencyCode": 1674,
          "name": "LUBUK LINGGAU BARAT I"
        },
        {
          "code": 1674012,
          "regencyCode": 1674,
          "name": "LUBUK LINGGAU BARAT II"
        },
        {
          "code": 1674021,
          "regencyCode": 1674,
          "name": "LUBUK LINGGAU SELATAN I"
        },
        {
          "code": 1674022,
          "regencyCode": 1674,
          "name": "LUBUK LINGGAU SELATAN II"
        },
        {
          "code": 1674031,
          "regencyCode": 1674,
          "name": "LUBUK LINGGAU TIMUR I"
        },
        {
          "code": 1674032,
          "regencyCode": 1674,
          "name": "LUBUK LINGGAU TIMUR II"
        },
        {
          "code": 1674041,
          "regencyCode": 1674,
          "name": "LUBUK LINGGAU UTARA I"
        },
        {
          "code": 1674042,
          "regencyCode": 1674,
          "name": "LUBUK LINGGAU UTARA II"
        },
        {
          "code": 1701040,
          "regencyCode": 1701,
          "name": "MANNA"
        },
        {
          "code": 1701041,
          "regencyCode": 1701,
          "name": "KOTA MANNA"
        },
        {
          "code": 1701042,
          "regencyCode": 1701,
          "name": "KEDURANG"
        },
        {
          "code": 1701043,
          "regencyCode": 1701,
          "name": "BUNGA MAS"
        },
        {
          "code": 1701044,
          "regencyCode": 1701,
          "name": "PASAR MANNA"
        },
        {
          "code": 1701045,
          "regencyCode": 1701,
          "name": "KEDURANG ILIR"
        },
        {
          "code": 1701050,
          "regencyCode": 1701,
          "name": "SEGINIM"
        },
        {
          "code": 1701051,
          "regencyCode": 1701,
          "name": "AIR NIPIS"
        },
        {
          "code": 1701060,
          "regencyCode": 1701,
          "name": "PINO"
        },
        {
          "code": 1701061,
          "regencyCode": 1701,
          "name": "PINORAYA"
        },
        {
          "code": 1701062,
          "regencyCode": 1701,
          "name": "ULU MANNA"
        },
        {
          "code": 1702020,
          "regencyCode": 1702,
          "name": "KOTA PADANG"
        },
        {
          "code": 1702021,
          "regencyCode": 1702,
          "name": "SINDANG BELITI ILIR"
        },
        {
          "code": 1702030,
          "regencyCode": 1702,
          "name": "PADANG ULAK TANDING"
        },
        {
          "code": 1702031,
          "regencyCode": 1702,
          "name": "SINDANG KELINGI"
        },
        {
          "code": 1702032,
          "regencyCode": 1702,
          "name": "BINDU RIANG"
        },
        {
          "code": 1702033,
          "regencyCode": 1702,
          "name": "SINDANG BELITI ULU"
        },
        {
          "code": 1702034,
          "regencyCode": 1702,
          "name": "SINDANG DATARAN"
        },
        {
          "code": 1702040,
          "regencyCode": 1702,
          "name": "CURUP"
        },
        {
          "code": 1702041,
          "regencyCode": 1702,
          "name": "BERMANI ULU"
        },
        {
          "code": 1702042,
          "regencyCode": 1702,
          "name": "SELUPU REJANG"
        },
        {
          "code": 1702043,
          "regencyCode": 1702,
          "name": "CURUP SELATAN"
        },
        {
          "code": 1702044,
          "regencyCode": 1702,
          "name": "CURUP TENGAH"
        },
        {
          "code": 1702045,
          "regencyCode": 1702,
          "name": "BERMANI ULU RAYA"
        },
        {
          "code": 1702046,
          "regencyCode": 1702,
          "name": "CURUP UTARA"
        },
        {
          "code": 1702047,
          "regencyCode": 1702,
          "name": "CURUP TIMUR"
        },
        {
          "code": 1703010,
          "regencyCode": 1703,
          "name": "ENGGANO"
        },
        {
          "code": 1703050,
          "regencyCode": 1703,
          "name": "KERKAP"
        },
        {
          "code": 1703051,
          "regencyCode": 1703,
          "name": "AIR NAPAL"
        },
        {
          "code": 1703052,
          "regencyCode": 1703,
          "name": "AIR BESI"
        },
        {
          "code": 1703053,
          "regencyCode": 1703,
          "name": "HULU PALIK"
        },
        {
          "code": 1703054,
          "regencyCode": 1703,
          "name": "TANJUNG AGUNG PALIK"
        },
        {
          "code": 1703060,
          "regencyCode": 1703,
          "name": "ARGA MAKMUR"
        },
        {
          "code": 1703061,
          "regencyCode": 1703,
          "name": "ARMA JAYA"
        },
        {
          "code": 1703070,
          "regencyCode": 1703,
          "name": "LAIS"
        },
        {
          "code": 1703071,
          "regencyCode": 1703,
          "name": "BATIK NAU"
        },
        {
          "code": 1703072,
          "regencyCode": 1703,
          "name": "GIRI MULYA"
        },
        {
          "code": 1703073,
          "regencyCode": 1703,
          "name": "AIR PADANG"
        },
        {
          "code": 1703080,
          "regencyCode": 1703,
          "name": "PADANG JAYA"
        },
        {
          "code": 1703090,
          "regencyCode": 1703,
          "name": "KETAHUN"
        },
        {
          "code": 1703091,
          "regencyCode": 1703,
          "name": "NAPAL PUTIH"
        },
        {
          "code": 1703092,
          "regencyCode": 1703,
          "name": "ULOK KUPAI"
        },
        {
          "code": 1703093,
          "regencyCode": 1703,
          "name": "PINANG RAYA"
        },
        {
          "code": 1703100,
          "regencyCode": 1703,
          "name": "PUTRI HIJAU"
        },
        {
          "code": 1703101,
          "regencyCode": 1703,
          "name": "MARGA SAKTI SEBELAT"
        },
        {
          "code": 1704010,
          "regencyCode": 1704,
          "name": "NASAL"
        },
        {
          "code": 1704020,
          "regencyCode": 1704,
          "name": "MAJE"
        },
        {
          "code": 1704030,
          "regencyCode": 1704,
          "name": "KAUR SELATAN"
        },
        {
          "code": 1704031,
          "regencyCode": 1704,
          "name": "TETAP"
        },
        {
          "code": 1704040,
          "regencyCode": 1704,
          "name": "KAUR TENGAH"
        },
        {
          "code": 1704041,
          "regencyCode": 1704,
          "name": "LUAS"
        },
        {
          "code": 1704042,
          "regencyCode": 1704,
          "name": "MUARA SAHUNG"
        },
        {
          "code": 1704050,
          "regencyCode": 1704,
          "name": "KINAL"
        },
        {
          "code": 1704051,
          "regencyCode": 1704,
          "name": "SEMIDANG GUMAY"
        },
        {
          "code": 1704060,
          "regencyCode": 1704,
          "name": "TANJUNG KEMUNING"
        },
        {
          "code": 1704061,
          "regencyCode": 1704,
          "name": "KELAM TENGAH"
        },
        {
          "code": 1704070,
          "regencyCode": 1704,
          "name": "KAUR UTARA"
        },
        {
          "code": 1704071,
          "regencyCode": 1704,
          "name": "PADANG GUCI HILIR"
        },
        {
          "code": 1704072,
          "regencyCode": 1704,
          "name": "LUNGKANG KULE"
        },
        {
          "code": 1704073,
          "regencyCode": 1704,
          "name": "PADANG GUCI HULU"
        },
        {
          "code": 1705010,
          "regencyCode": 1705,
          "name": "SEMIDANG ALAS MARAS"
        },
        {
          "code": 1705020,
          "regencyCode": 1705,
          "name": "SEMIDANG ALAS"
        },
        {
          "code": 1705030,
          "regencyCode": 1705,
          "name": "TALO"
        },
        {
          "code": 1705031,
          "regencyCode": 1705,
          "name": "ILIR TALO"
        },
        {
          "code": 1705032,
          "regencyCode": 1705,
          "name": "TALO KECIL"
        },
        {
          "code": 1705033,
          "regencyCode": 1705,
          "name": "ULU TALO"
        },
        {
          "code": 1705040,
          "regencyCode": 1705,
          "name": "SELUMA"
        },
        {
          "code": 1705041,
          "regencyCode": 1705,
          "name": "SELUMA SELATAN"
        },
        {
          "code": 1705042,
          "regencyCode": 1705,
          "name": "SELUMA BARAT"
        },
        {
          "code": 1705043,
          "regencyCode": 1705,
          "name": "SELUMA TIMUR"
        },
        {
          "code": 1705044,
          "regencyCode": 1705,
          "name": "SELUMA UTARA"
        },
        {
          "code": 1705050,
          "regencyCode": 1705,
          "name": "SUKARAJA"
        },
        {
          "code": 1705051,
          "regencyCode": 1705,
          "name": "AIR PERIUKAN"
        },
        {
          "code": 1705052,
          "regencyCode": 1705,
          "name": "LUBUK SANDI"
        },
        {
          "code": 1706010,
          "regencyCode": 1706,
          "name": "IPUH"
        },
        {
          "code": 1706011,
          "regencyCode": 1706,
          "name": "AIR RAMI"
        },
        {
          "code": 1706012,
          "regencyCode": 1706,
          "name": "MALIN DEMAN"
        },
        {
          "code": 1706020,
          "regencyCode": 1706,
          "name": "PONDOK SUGUH"
        },
        {
          "code": 1706021,
          "regencyCode": 1706,
          "name": "SUNGAI RUMBAI"
        },
        {
          "code": 1706022,
          "regencyCode": 1706,
          "name": "TERAMANG JAYA"
        },
        {
          "code": 1706030,
          "regencyCode": 1706,
          "name": "TERAS TERUNJAM"
        },
        {
          "code": 1706031,
          "regencyCode": 1706,
          "name": "PENARIK"
        },
        {
          "code": 1706032,
          "regencyCode": 1706,
          "name": "SELAGAN RAYA"
        },
        {
          "code": 1706040,
          "regencyCode": 1706,
          "name": "KOTA MUKOMUKO"
        },
        {
          "code": 1706041,
          "regencyCode": 1706,
          "name": "AIR DIKIT"
        },
        {
          "code": 1706042,
          "regencyCode": 1706,
          "name": "XIV KOTO"
        },
        {
          "code": 1706050,
          "regencyCode": 1706,
          "name": "LUBUK PINANG"
        },
        {
          "code": 1706051,
          "regencyCode": 1706,
          "name": "AIR MANJUNTO"
        },
        {
          "code": 1706052,
          "regencyCode": 1706,
          "name": "V KOTO"
        },
        {
          "code": 1707010,
          "regencyCode": 1707,
          "name": "RIMBO PENGADANG"
        },
        {
          "code": 1707011,
          "regencyCode": 1707,
          "name": "TOPOS"
        },
        {
          "code": 1707020,
          "regencyCode": 1707,
          "name": "LEBONG SELATAN"
        },
        {
          "code": 1707021,
          "regencyCode": 1707,
          "name": "BINGIN KUNING"
        },
        {
          "code": 1707030,
          "regencyCode": 1707,
          "name": "LEBONG TENGAH"
        },
        {
          "code": 1707031,
          "regencyCode": 1707,
          "name": "LEBONG SAKTI"
        },
        {
          "code": 1707040,
          "regencyCode": 1707,
          "name": "LEBONG ATAS"
        },
        {
          "code": 1707041,
          "regencyCode": 1707,
          "name": "PADANG BANO"
        },
        {
          "code": 1707042,
          "regencyCode": 1707,
          "name": "PELABAI"
        },
        {
          "code": 1707050,
          "regencyCode": 1707,
          "name": "LEBONG UTARA"
        },
        {
          "code": 1707051,
          "regencyCode": 1707,
          "name": "AMEN"
        },
        {
          "code": 1707052,
          "regencyCode": 1707,
          "name": "URAM JAYA"
        },
        {
          "code": 1707053,
          "regencyCode": 1707,
          "name": "PINANG BELAPIS"
        },
        {
          "code": 1708010,
          "regencyCode": 1708,
          "name": "MUARA KEMUMU"
        },
        {
          "code": 1708020,
          "regencyCode": 1708,
          "name": "BERMANI ILIR"
        },
        {
          "code": 1708030,
          "regencyCode": 1708,
          "name": "SEBERANG MUSI"
        },
        {
          "code": 1708040,
          "regencyCode": 1708,
          "name": "TEBAT KARAI"
        },
        {
          "code": 1708050,
          "regencyCode": 1708,
          "name": "KEPAHIANG"
        },
        {
          "code": 1708060,
          "regencyCode": 1708,
          "name": "KABA WETAN"
        },
        {
          "code": 1708070,
          "regencyCode": 1708,
          "name": "UJAN MAS"
        },
        {
          "code": 1708080,
          "regencyCode": 1708,
          "name": "MERIGI"
        },
        {
          "code": 1709010,
          "regencyCode": 1709,
          "name": "TALANG EMPAT"
        },
        {
          "code": 1709020,
          "regencyCode": 1709,
          "name": "KARANG TINGGI"
        },
        {
          "code": 1709030,
          "regencyCode": 1709,
          "name": "TABA PENANJUNG"
        },
        {
          "code": 1709031,
          "regencyCode": 1709,
          "name": "MERIGI KELINDANG"
        },
        {
          "code": 1709040,
          "regencyCode": 1709,
          "name": "PAGAR JATI"
        },
        {
          "code": 1709041,
          "regencyCode": 1709,
          "name": "MERIGI SAKTI"
        },
        {
          "code": 1709050,
          "regencyCode": 1709,
          "name": "PONDOK KELAPA"
        },
        {
          "code": 1709051,
          "regencyCode": 1709,
          "name": "PONDOK KUBANG"
        },
        {
          "code": 1709060,
          "regencyCode": 1709,
          "name": "PEMATANG TIGA"
        },
        {
          "code": 1709061,
          "regencyCode": 1709,
          "name": "BANG HAJI"
        },
        {
          "code": 1771010,
          "regencyCode": 1771,
          "name": "SELEBAR"
        },
        {
          "code": 1771011,
          "regencyCode": 1771,
          "name": "KAMPUNG MELAYU"
        },
        {
          "code": 1771020,
          "regencyCode": 1771,
          "name": "GADING CEMPAKA"
        },
        {
          "code": 1771021,
          "regencyCode": 1771,
          "name": "RATU AGUNG"
        },
        {
          "code": 1771022,
          "regencyCode": 1771,
          "name": "RATU SAMBAN"
        },
        {
          "code": 1771023,
          "regencyCode": 1771,
          "name": "SINGARAN PATI"
        },
        {
          "code": 1771030,
          "regencyCode": 1771,
          "name": "TELUK SEGARA"
        },
        {
          "code": 1771031,
          "regencyCode": 1771,
          "name": "SUNGAI SERUT"
        },
        {
          "code": 1771040,
          "regencyCode": 1771,
          "name": "MUARA BANGKA HULU"
        },
        {
          "code": 1801040,
          "regencyCode": 1801,
          "name": "BALIK BUKIT"
        },
        {
          "code": 1801041,
          "regencyCode": 1801,
          "name": "SUKAU"
        },
        {
          "code": 1801042,
          "regencyCode": 1801,
          "name": "LUMBOK SEMINUNG"
        },
        {
          "code": 1801050,
          "regencyCode": 1801,
          "name": "BELALAU"
        },
        {
          "code": 1801051,
          "regencyCode": 1801,
          "name": "SEKINCAU"
        },
        {
          "code": 1801052,
          "regencyCode": 1801,
          "name": "SUOH"
        },
        {
          "code": 1801053,
          "regencyCode": 1801,
          "name": "BATU BRAK"
        },
        {
          "code": 1801054,
          "regencyCode": 1801,
          "name": "PAGAR DEWA"
        },
        {
          "code": 1801055,
          "regencyCode": 1801,
          "name": "BATU KETULIS"
        },
        {
          "code": 1801056,
          "regencyCode": 1801,
          "name": "BANDAR NEGERI SUOH"
        },
        {
          "code": 1801060,
          "regencyCode": 1801,
          "name": "SUMBER JAYA"
        },
        {
          "code": 1801061,
          "regencyCode": 1801,
          "name": "WAY TENONG"
        },
        {
          "code": 1801062,
          "regencyCode": 1801,
          "name": "GEDUNG SURIAN"
        },
        {
          "code": 1801063,
          "regencyCode": 1801,
          "name": "KEBUN TEBU"
        },
        {
          "code": 1801064,
          "regencyCode": 1801,
          "name": "AIR HITAM"
        },
        {
          "code": 1802010,
          "regencyCode": 1802,
          "name": "WONOSOBO"
        },
        {
          "code": 1802011,
          "regencyCode": 1802,
          "name": "SEMAKA"
        },
        {
          "code": 1802012,
          "regencyCode": 1802,
          "name": "BANDAR NEGERI SEMUONG"
        },
        {
          "code": 1802020,
          "regencyCode": 1802,
          "name": "KOTA AGUNG"
        },
        {
          "code": 1802021,
          "regencyCode": 1802,
          "name": "PEMATANG SAWA"
        },
        {
          "code": 1802022,
          "regencyCode": 1802,
          "name": "KOTA AGUNG TIMUR"
        },
        {
          "code": 1802023,
          "regencyCode": 1802,
          "name": "KOTA AGUNG BARAT"
        },
        {
          "code": 1802030,
          "regencyCode": 1802,
          "name": "PULAU PANGGUNG"
        },
        {
          "code": 1802031,
          "regencyCode": 1802,
          "name": "ULUBELU"
        },
        {
          "code": 1802032,
          "regencyCode": 1802,
          "name": "AIR NANINGAN"
        },
        {
          "code": 1802040,
          "regencyCode": 1802,
          "name": "TALANG PADANG"
        },
        {
          "code": 1802041,
          "regencyCode": 1802,
          "name": "SUMBEREJO"
        },
        {
          "code": 1802042,
          "regencyCode": 1802,
          "name": "GISTING"
        },
        {
          "code": 1802043,
          "regencyCode": 1802,
          "name": "GUNUNG ALIP"
        },
        {
          "code": 1802050,
          "regencyCode": 1802,
          "name": "PUGUNG"
        },
        {
          "code": 1802101,
          "regencyCode": 1802,
          "name": "BULOK"
        },
        {
          "code": 1802110,
          "regencyCode": 1802,
          "name": "CUKUH BALAK"
        },
        {
          "code": 1802111,
          "regencyCode": 1802,
          "name": "KELUMBAYAN"
        },
        {
          "code": 1802112,
          "regencyCode": 1802,
          "name": "LIMAU"
        },
        {
          "code": 1802113,
          "regencyCode": 1802,
          "name": "KELUMBAYAN BARAT"
        },
        {
          "code": 1803060,
          "regencyCode": 1803,
          "name": "NATAR"
        },
        {
          "code": 1803070,
          "regencyCode": 1803,
          "name": "JATI AGUNG"
        },
        {
          "code": 1803080,
          "regencyCode": 1803,
          "name": "TANJUNG BINTANG"
        },
        {
          "code": 1803081,
          "regencyCode": 1803,
          "name": "TANJUNG SARI"
        },
        {
          "code": 1803090,
          "regencyCode": 1803,
          "name": "KATIBUNG"
        },
        {
          "code": 1803091,
          "regencyCode": 1803,
          "name": "MERBAU MATARAM"
        },
        {
          "code": 1803092,
          "regencyCode": 1803,
          "name": "WAY SULAN"
        },
        {
          "code": 1803100,
          "regencyCode": 1803,
          "name": "SIDOMULYO"
        },
        {
          "code": 1803101,
          "regencyCode": 1803,
          "name": "CANDIPURO"
        },
        {
          "code": 1803102,
          "regencyCode": 1803,
          "name": "WAY PANJI"
        },
        {
          "code": 1803110,
          "regencyCode": 1803,
          "name": "KALIANDA"
        },
        {
          "code": 1803111,
          "regencyCode": 1803,
          "name": "RAJABASA"
        },
        {
          "code": 1803120,
          "regencyCode": 1803,
          "name": "PALAS"
        },
        {
          "code": 1803121,
          "regencyCode": 1803,
          "name": "SRAGI"
        },
        {
          "code": 1803130,
          "regencyCode": 1803,
          "name": "PENENGAHAN"
        },
        {
          "code": 1803131,
          "regencyCode": 1803,
          "name": "KETAPANG"
        },
        {
          "code": 1803132,
          "regencyCode": 1803,
          "name": "BAKAUHENI"
        },
        {
          "code": 1804010,
          "regencyCode": 1804,
          "name": "METRO KIBANG"
        },
        {
          "code": 1804020,
          "regencyCode": 1804,
          "name": "BATANGHARI"
        },
        {
          "code": 1804030,
          "regencyCode": 1804,
          "name": "SEKAMPUNG"
        },
        {
          "code": 1804040,
          "regencyCode": 1804,
          "name": "MARGATIGA"
        },
        {
          "code": 1804050,
          "regencyCode": 1804,
          "name": "SEKAMPUNG UDIK"
        },
        {
          "code": 1804060,
          "regencyCode": 1804,
          "name": "JABUNG"
        },
        {
          "code": 1804061,
          "regencyCode": 1804,
          "name": "PASIR SAKTI"
        },
        {
          "code": 1804062,
          "regencyCode": 1804,
          "name": "WAWAY KARYA"
        },
        {
          "code": 1804063,
          "regencyCode": 1804,
          "name": "MARGA SEKAMPUNG"
        },
        {
          "code": 1804070,
          "regencyCode": 1804,
          "name": "LABUHAN MARINGGAI"
        },
        {
          "code": 1804071,
          "regencyCode": 1804,
          "name": "MATARAM BARU"
        },
        {
          "code": 1804072,
          "regencyCode": 1804,
          "name": "BANDAR SRIBAWONO"
        },
        {
          "code": 1804073,
          "regencyCode": 1804,
          "name": "MELINTING"
        },
        {
          "code": 1804074,
          "regencyCode": 1804,
          "name": "GUNUNG PELINDUNG"
        },
        {
          "code": 1804080,
          "regencyCode": 1804,
          "name": "WAY JEPARA"
        },
        {
          "code": 1804081,
          "regencyCode": 1804,
          "name": "BRAJA SLEBAH"
        },
        {
          "code": 1804082,
          "regencyCode": 1804,
          "name": "LABUHAN RATU"
        },
        {
          "code": 1804090,
          "regencyCode": 1804,
          "name": "SUKADANA"
        },
        {
          "code": 1804091,
          "regencyCode": 1804,
          "name": "BUMI AGUNG"
        },
        {
          "code": 1804092,
          "regencyCode": 1804,
          "name": "BATANGHARI NUBAN"
        },
        {
          "code": 1804100,
          "regencyCode": 1804,
          "name": "PEKALONGAN"
        },
        {
          "code": 1804110,
          "regencyCode": 1804,
          "name": "RAMAN UTARA"
        },
        {
          "code": 1804120,
          "regencyCode": 1804,
          "name": "PURBOLINGGO"
        },
        {
          "code": 1804121,
          "regencyCode": 1804,
          "name": "WAY BUNGUR"
        },
        {
          "code": 1805010,
          "regencyCode": 1805,
          "name": "PADANG RATU"
        },
        {
          "code": 1805011,
          "regencyCode": 1805,
          "name": "SELAGAI LINGGA"
        },
        {
          "code": 1805012,
          "regencyCode": 1805,
          "name": "PUBIAN"
        },
        {
          "code": 1805013,
          "regencyCode": 1805,
          "name": "ANAK TUHA"
        },
        {
          "code": 1805014,
          "regencyCode": 1805,
          "name": "ANAK RATU AJI"
        },
        {
          "code": 1805020,
          "regencyCode": 1805,
          "name": "KALIREJO"
        },
        {
          "code": 1805021,
          "regencyCode": 1805,
          "name": "SENDANG AGUNG"
        },
        {
          "code": 1805030,
          "regencyCode": 1805,
          "name": "BANGUNREJO"
        },
        {
          "code": 1805040,
          "regencyCode": 1805,
          "name": "GUNUNG SUGIH"
        },
        {
          "code": 1805041,
          "regencyCode": 1805,
          "name": "BEKRI"
        },
        {
          "code": 1805042,
          "regencyCode": 1805,
          "name": "BUMI RATU NUBAN"
        },
        {
          "code": 1805050,
          "regencyCode": 1805,
          "name": "TRIMURJO"
        },
        {
          "code": 1805060,
          "regencyCode": 1805,
          "name": "PUNGGUR"
        },
        {
          "code": 1805061,
          "regencyCode": 1805,
          "name": "KOTA GAJAH"
        },
        {
          "code": 1805070,
          "regencyCode": 1805,
          "name": "SEPUTIH RAMAN"
        },
        {
          "code": 1805080,
          "regencyCode": 1805,
          "name": "TERBANGGI BESAR"
        },
        {
          "code": 1805081,
          "regencyCode": 1805,
          "name": "SEPUTIH AGUNG"
        },
        {
          "code": 1805082,
          "regencyCode": 1805,
          "name": "WAY PENGUBUAN"
        },
        {
          "code": 1805090,
          "regencyCode": 1805,
          "name": "TERUSAN NUNYAI"
        },
        {
          "code": 1805100,
          "regencyCode": 1805,
          "name": "SEPUTIH MATARAM"
        },
        {
          "code": 1805101,
          "regencyCode": 1805,
          "name": "BANDAR MATARAM"
        },
        {
          "code": 1805110,
          "regencyCode": 1805,
          "name": "SEPUTIH BANYAK"
        },
        {
          "code": 1805111,
          "regencyCode": 1805,
          "name": "WAY SEPUTIH"
        },
        {
          "code": 1805120,
          "regencyCode": 1805,
          "name": "RUMBIA"
        },
        {
          "code": 1805121,
          "regencyCode": 1805,
          "name": "BUMI NABUNG"
        },
        {
          "code": 1805122,
          "regencyCode": 1805,
          "name": "PUTRA RUMBIA"
        },
        {
          "code": 1805130,
          "regencyCode": 1805,
          "name": "SEPUTIH SURABAYA"
        },
        {
          "code": 1805131,
          "regencyCode": 1805,
          "name": "BANDAR SURABAYA"
        },
        {
          "code": 1806010,
          "regencyCode": 1806,
          "name": "BUKIT KEMUNING"
        },
        {
          "code": 1806011,
          "regencyCode": 1806,
          "name": "ABUNG TINGGI"
        },
        {
          "code": 1806020,
          "regencyCode": 1806,
          "name": "TANJUNG RAJA"
        },
        {
          "code": 1806030,
          "regencyCode": 1806,
          "name": "ABUNG BARAT"
        },
        {
          "code": 1806031,
          "regencyCode": 1806,
          "name": "ABUNG TENGAH"
        },
        {
          "code": 1806032,
          "regencyCode": 1806,
          "name": "ABUNG  KUNANG"
        },
        {
          "code": 1806033,
          "regencyCode": 1806,
          "name": "ABUNG PEKURUN"
        },
        {
          "code": 1806040,
          "regencyCode": 1806,
          "name": "KOTABUMI"
        },
        {
          "code": 1806041,
          "regencyCode": 1806,
          "name": "KOTABUMI UTARA"
        },
        {
          "code": 1806042,
          "regencyCode": 1806,
          "name": "KOTABUMI SELATAN"
        },
        {
          "code": 1806050,
          "regencyCode": 1806,
          "name": "ABUNG SELATAN"
        },
        {
          "code": 1806051,
          "regencyCode": 1806,
          "name": "ABUNG SEMULI"
        },
        {
          "code": 1806052,
          "regencyCode": 1806,
          "name": "BLAMBANGAN PAGAR"
        },
        {
          "code": 1806060,
          "regencyCode": 1806,
          "name": "ABUNG TIMUR"
        },
        {
          "code": 1806061,
          "regencyCode": 1806,
          "name": "ABUNG SURAKARTA"
        },
        {
          "code": 1806070,
          "regencyCode": 1806,
          "name": "SUNGKAI SELATAN"
        },
        {
          "code": 1806071,
          "regencyCode": 1806,
          "name": "MUARA SUNGKAI"
        },
        {
          "code": 1806072,
          "regencyCode": 1806,
          "name": "BUNGA MAYANG"
        },
        {
          "code": 1806073,
          "regencyCode": 1806,
          "name": "SUNGKAI  BARAT"
        },
        {
          "code": 1806074,
          "regencyCode": 1806,
          "name": "SUNGKAI JAYA"
        },
        {
          "code": 1806080,
          "regencyCode": 1806,
          "name": "SUNGKAI UTARA"
        },
        {
          "code": 1806081,
          "regencyCode": 1806,
          "name": "HULUSUNGKAI"
        },
        {
          "code": 1806082,
          "regencyCode": 1806,
          "name": "SUNGKAI TENGAH"
        },
        {
          "code": 1807010,
          "regencyCode": 1807,
          "name": "BANJIT"
        },
        {
          "code": 1807020,
          "regencyCode": 1807,
          "name": "BARADATU"
        },
        {
          "code": 1807021,
          "regencyCode": 1807,
          "name": "GUNUNG LABUHAN"
        },
        {
          "code": 1807030,
          "regencyCode": 1807,
          "name": "KASUI"
        },
        {
          "code": 1807031,
          "regencyCode": 1807,
          "name": "REBANG TANGKAS"
        },
        {
          "code": 1807040,
          "regencyCode": 1807,
          "name": "BLAMBANGAN UMPU"
        },
        {
          "code": 1807041,
          "regencyCode": 1807,
          "name": "WAY TUBA"
        },
        {
          "code": 1807042,
          "regencyCode": 1807,
          "name": "NEGERI AGUNG"
        },
        {
          "code": 1807050,
          "regencyCode": 1807,
          "name": "BAHUGA"
        },
        {
          "code": 1807051,
          "regencyCode": 1807,
          "name": "BUAY  BAHUGA"
        },
        {
          "code": 1807052,
          "regencyCode": 1807,
          "name": "BUMI AGUNG"
        },
        {
          "code": 1807060,
          "regencyCode": 1807,
          "name": "PAKUAN RATU"
        },
        {
          "code": 1807061,
          "regencyCode": 1807,
          "name": "NEGARA BATIN"
        },
        {
          "code": 1807062,
          "regencyCode": 1807,
          "name": "NEGERI BESAR"
        },
        {
          "code": 1808030,
          "regencyCode": 1808,
          "name": "BANJAR AGUNG"
        },
        {
          "code": 1808031,
          "regencyCode": 1808,
          "name": "BANJAR MARGO"
        },
        {
          "code": 1808032,
          "regencyCode": 1808,
          "name": "BANJAR BARU"
        },
        {
          "code": 1808040,
          "regencyCode": 1808,
          "name": "GEDUNG AJI"
        },
        {
          "code": 1808041,
          "regencyCode": 1808,
          "name": "PENAWAR AJI"
        },
        {
          "code": 1808042,
          "regencyCode": 1808,
          "name": "MERAKSA AJI"
        },
        {
          "code": 1808050,
          "regencyCode": 1808,
          "name": "MENGGALA"
        },
        {
          "code": 1808051,
          "regencyCode": 1808,
          "name": "PENAWAR TAMA"
        },
        {
          "code": 1808052,
          "regencyCode": 1808,
          "name": "RAWAJITU SELATAN"
        },
        {
          "code": 1808053,
          "regencyCode": 1808,
          "name": "GEDUNG MENENG"
        },
        {
          "code": 1808054,
          "regencyCode": 1808,
          "name": "RAWAJITU TIMUR"
        },
        {
          "code": 1808055,
          "regencyCode": 1808,
          "name": "RAWA PITU"
        },
        {
          "code": 1808056,
          "regencyCode": 1808,
          "name": "GEDUNG AJI BARU"
        },
        {
          "code": 1808057,
          "regencyCode": 1808,
          "name": "DENTE TELADAS"
        },
        {
          "code": 1808058,
          "regencyCode": 1808,
          "name": "MENGGALA TIMUR"
        },
        {
          "code": 1809010,
          "regencyCode": 1809,
          "name": "PUNDUH PIDADA"
        },
        {
          "code": 1809011,
          "regencyCode": 1809,
          "name": "MARGA PUNDUH"
        },
        {
          "code": 1809020,
          "regencyCode": 1809,
          "name": "PADANG CERMIN"
        },
        {
          "code": 1809021,
          "regencyCode": 1809,
          "name": "TELUK PANDAN"
        },
        {
          "code": 1809022,
          "regencyCode": 1809,
          "name": "WAY RATAI"
        },
        {
          "code": 1809030,
          "regencyCode": 1809,
          "name": "KEDONDONG"
        },
        {
          "code": 1809031,
          "regencyCode": 1809,
          "name": "WAY KHILAU"
        },
        {
          "code": 1809040,
          "regencyCode": 1809,
          "name": "WAY LIMA"
        },
        {
          "code": 1809050,
          "regencyCode": 1809,
          "name": "GEDUNG TATAAN"
        },
        {
          "code": 1809060,
          "regencyCode": 1809,
          "name": "NEGERI KATON"
        },
        {
          "code": 1809070,
          "regencyCode": 1809,
          "name": "TEGINENENG"
        },
        {
          "code": 1810010,
          "regencyCode": 1810,
          "name": "PARDASUKA"
        },
        {
          "code": 1810020,
          "regencyCode": 1810,
          "name": "AMBARAWA"
        },
        {
          "code": 1810030,
          "regencyCode": 1810,
          "name": "PAGELARAN"
        },
        {
          "code": 1810031,
          "regencyCode": 1810,
          "name": "PAGELARAN UTARA"
        },
        {
          "code": 1810040,
          "regencyCode": 1810,
          "name": "PRINGSEWU"
        },
        {
          "code": 1810050,
          "regencyCode": 1810,
          "name": "GADING REJO"
        },
        {
          "code": 1810060,
          "regencyCode": 1810,
          "name": "SUKOHARJO"
        },
        {
          "code": 1810070,
          "regencyCode": 1810,
          "name": "BANYUMAS"
        },
        {
          "code": 1810080,
          "regencyCode": 1810,
          "name": "ADI LUWIH"
        },
        {
          "code": 1811010,
          "regencyCode": 1811,
          "name": "WAY SERDANG"
        },
        {
          "code": 1811020,
          "regencyCode": 1811,
          "name": "SIMPANG PEMATANG"
        },
        {
          "code": 1811030,
          "regencyCode": 1811,
          "name": "PANCA JAYA"
        },
        {
          "code": 1811040,
          "regencyCode": 1811,
          "name": "TANJUNG RAYA"
        },
        {
          "code": 1811050,
          "regencyCode": 1811,
          "name": "MESUJI"
        },
        {
          "code": 1811060,
          "regencyCode": 1811,
          "name": "MESUJI TIMUR"
        },
        {
          "code": 1811070,
          "regencyCode": 1811,
          "name": "RAWAJITU UTARA"
        },
        {
          "code": 1812010,
          "regencyCode": 1812,
          "name": "TULANG BAWANG UDIK"
        },
        {
          "code": 1812020,
          "regencyCode": 1812,
          "name": "TUMI JAJAR"
        },
        {
          "code": 1812030,
          "regencyCode": 1812,
          "name": "TULANG BAWANG TENGAH"
        },
        {
          "code": 1812040,
          "regencyCode": 1812,
          "name": "PAGAR DEWA"
        },
        {
          "code": 1812050,
          "regencyCode": 1812,
          "name": "LAMBU KIBANG"
        },
        {
          "code": 1812060,
          "regencyCode": 1812,
          "name": "GUNUNG TERANG"
        },
        {
          "code": 1812070,
          "regencyCode": 1812,
          "name": "GUNUNG AGUNG"
        },
        {
          "code": 1812080,
          "regencyCode": 1812,
          "name": "WAY KENANGA"
        },
        {
          "code": 1813010,
          "regencyCode": 1813,
          "name": "LEMONG"
        },
        {
          "code": 1813020,
          "regencyCode": 1813,
          "name": "PESISIR UTARA"
        },
        {
          "code": 1813030,
          "regencyCode": 1813,
          "name": "PULAU PISANG"
        },
        {
          "code": 1813040,
          "regencyCode": 1813,
          "name": "KARYA PENGGAWA"
        },
        {
          "code": 1813050,
          "regencyCode": 1813,
          "name": "WAY KRUI"
        },
        {
          "code": 1813060,
          "regencyCode": 1813,
          "name": "PESISIR TENGAH"
        },
        {
          "code": 1813070,
          "regencyCode": 1813,
          "name": "KRUI SELATAN"
        },
        {
          "code": 1813080,
          "regencyCode": 1813,
          "name": "PESISIR SELATAN"
        },
        {
          "code": 1813090,
          "regencyCode": 1813,
          "name": "NGAMBUR"
        },
        {
          "code": 1813100,
          "regencyCode": 1813,
          "name": "BENGKUNAT"
        },
        {
          "code": 1813110,
          "regencyCode": 1813,
          "name": "BENGKUNAT BELIMBING"
        },
        {
          "code": 1871010,
          "regencyCode": 1871,
          "name": "TELUK BETUNG BARAT"
        },
        {
          "code": 1871011,
          "regencyCode": 1871,
          "name": "TELUKBETUNG TIMUR"
        },
        {
          "code": 1871020,
          "regencyCode": 1871,
          "name": "TELUK BETUNG SELATAN"
        },
        {
          "code": 1871021,
          "regencyCode": 1871,
          "name": "BUMI WARAS"
        },
        {
          "code": 1871030,
          "regencyCode": 1871,
          "name": "PANJANG"
        },
        {
          "code": 1871040,
          "regencyCode": 1871,
          "name": "TANJUNG KARANG TIMUR"
        },
        {
          "code": 1871041,
          "regencyCode": 1871,
          "name": "KEDAMAIAN"
        },
        {
          "code": 1871050,
          "regencyCode": 1871,
          "name": "TELUK BETUNG UTARA"
        },
        {
          "code": 1871060,
          "regencyCode": 1871,
          "name": "TANJUNG KARANG PUSAT"
        },
        {
          "code": 1871061,
          "regencyCode": 1871,
          "name": "ENGGAL"
        },
        {
          "code": 1871070,
          "regencyCode": 1871,
          "name": "TANJUNG KARANG BARAT"
        },
        {
          "code": 1871071,
          "regencyCode": 1871,
          "name": "KEMILING"
        },
        {
          "code": 1871072,
          "regencyCode": 1871,
          "name": "LANGKAPURA"
        },
        {
          "code": 1871080,
          "regencyCode": 1871,
          "name": "KEDATON"
        },
        {
          "code": 1871081,
          "regencyCode": 1871,
          "name": "RAJABASA"
        },
        {
          "code": 1871082,
          "regencyCode": 1871,
          "name": "TANJUNG SENANG"
        },
        {
          "code": 1871083,
          "regencyCode": 1871,
          "name": "LABUHAN RATU"
        },
        {
          "code": 1871090,
          "regencyCode": 1871,
          "name": "SUKARAME"
        },
        {
          "code": 1871091,
          "regencyCode": 1871,
          "name": "SUKABUMI"
        },
        {
          "code": 1871092,
          "regencyCode": 1871,
          "name": "WAY HALIM"
        },
        {
          "code": 1872011,
          "regencyCode": 1872,
          "name": "METRO SELATAN"
        },
        {
          "code": 1872012,
          "regencyCode": 1872,
          "name": "METRO BARAT"
        },
        {
          "code": 1872021,
          "regencyCode": 1872,
          "name": "METRO TIMUR"
        },
        {
          "code": 1872022,
          "regencyCode": 1872,
          "name": "METRO PUSAT"
        },
        {
          "code": 1872023,
          "regencyCode": 1872,
          "name": "METRO UTARA"
        },
        {
          "code": 1901070,
          "regencyCode": 1901,
          "name": "MENDO BARAT"
        },
        {
          "code": 1901080,
          "regencyCode": 1901,
          "name": "MERAWANG"
        },
        {
          "code": 1901081,
          "regencyCode": 1901,
          "name": "PUDING BESAR"
        },
        {
          "code": 1901090,
          "regencyCode": 1901,
          "name": "SUNGAI LIAT"
        },
        {
          "code": 1901091,
          "regencyCode": 1901,
          "name": "PEMALI"
        },
        {
          "code": 1901092,
          "regencyCode": 1901,
          "name": "BAKAM"
        },
        {
          "code": 1901130,
          "regencyCode": 1901,
          "name": "BELINYU"
        },
        {
          "code": 1901131,
          "regencyCode": 1901,
          "name": "RIAU SILIP"
        },
        {
          "code": 1902010,
          "regencyCode": 1902,
          "name": "MEMBALONG"
        },
        {
          "code": 1902060,
          "regencyCode": 1902,
          "name": "TANJUNG PANDAN"
        },
        {
          "code": 1902061,
          "regencyCode": 1902,
          "name": "BADAU"
        },
        {
          "code": 1902062,
          "regencyCode": 1902,
          "name": "SIJUK"
        },
        {
          "code": 1902063,
          "regencyCode": 1902,
          "name": "SELAT NASIK"
        },
        {
          "code": 1903010,
          "regencyCode": 1903,
          "name": "KELAPA"
        },
        {
          "code": 1903020,
          "regencyCode": 1903,
          "name": "TEMPILANG"
        },
        {
          "code": 1903030,
          "regencyCode": 1903,
          "name": "MENTOK"
        },
        {
          "code": 1903040,
          "regencyCode": 1903,
          "name": "SIMPANG TERITIP"
        },
        {
          "code": 1903050,
          "regencyCode": 1903,
          "name": "JEBUS"
        },
        {
          "code": 1903051,
          "regencyCode": 1903,
          "name": "PARITTIGA"
        },
        {
          "code": 1904010,
          "regencyCode": 1904,
          "name": "KOBA"
        },
        {
          "code": 1904011,
          "regencyCode": 1904,
          "name": "LUBUK BESAR"
        },
        {
          "code": 1904020,
          "regencyCode": 1904,
          "name": "PANGKALAN BARU"
        },
        {
          "code": 1904021,
          "regencyCode": 1904,
          "name": "NAMANG"
        },
        {
          "code": 1904030,
          "regencyCode": 1904,
          "name": "SUNGAI SELAN"
        },
        {
          "code": 1904040,
          "regencyCode": 1904,
          "name": "SIMPANG KATIS"
        },
        {
          "code": 1905010,
          "regencyCode": 1905,
          "name": "PAYUNG"
        },
        {
          "code": 1905011,
          "regencyCode": 1905,
          "name": "PULAU BESAR"
        },
        {
          "code": 1905020,
          "regencyCode": 1905,
          "name": "SIMPANG RIMBA"
        },
        {
          "code": 1905030,
          "regencyCode": 1905,
          "name": "TOBOALI"
        },
        {
          "code": 1905031,
          "regencyCode": 1905,
          "name": "TUKAK SADAI"
        },
        {
          "code": 1905040,
          "regencyCode": 1905,
          "name": "AIR GEGAS"
        },
        {
          "code": 1905050,
          "regencyCode": 1905,
          "name": "LEPAR PONGOK"
        },
        {
          "code": 1905051,
          "regencyCode": 1905,
          "name": "KEPULAUAN PONGOK"
        },
        {
          "code": 1906010,
          "regencyCode": 1906,
          "name": "DENDANG"
        },
        {
          "code": 1906011,
          "regencyCode": 1906,
          "name": "SIMPANG PESAK"
        },
        {
          "code": 1906020,
          "regencyCode": 1906,
          "name": "GANTUNG"
        },
        {
          "code": 1906021,
          "regencyCode": 1906,
          "name": "SIMPANG RENGGIANG"
        },
        {
          "code": 1906030,
          "regencyCode": 1906,
          "name": "MANGGAR"
        },
        {
          "code": 1906031,
          "regencyCode": 1906,
          "name": "DAMAR"
        },
        {
          "code": 1906040,
          "regencyCode": 1906,
          "name": "KELAPA KAMPIT"
        },
        {
          "code": 1971010,
          "regencyCode": 1971,
          "name": "RANGKUI"
        },
        {
          "code": 1971020,
          "regencyCode": 1971,
          "name": "BUKIT INTAN"
        },
        {
          "code": 1971021,
          "regencyCode": 1971,
          "name": "GIRIMAYA"
        },
        {
          "code": 1971030,
          "regencyCode": 1971,
          "name": "PANGKAL BALAM"
        },
        {
          "code": 1971031,
          "regencyCode": 1971,
          "name": "GABEK"
        },
        {
          "code": 1971040,
          "regencyCode": 1971,
          "name": "TAMAN SARI"
        },
        {
          "code": 1971041,
          "regencyCode": 1971,
          "name": "GERUNGGANG"
        },
        {
          "code": 2101010,
          "regencyCode": 2101,
          "name": "MORO"
        },
        {
          "code": 2101011,
          "regencyCode": 2101,
          "name": "DURAI"
        },
        {
          "code": 2101020,
          "regencyCode": 2101,
          "name": "KUNDUR"
        },
        {
          "code": 2101021,
          "regencyCode": 2101,
          "name": "KUNDUR UTARA"
        },
        {
          "code": 2101022,
          "regencyCode": 2101,
          "name": "KUNDUR BARAT"
        },
        {
          "code": 2101023,
          "regencyCode": 2101,
          "name": "UNGAR"
        },
        {
          "code": 2101024,
          "regencyCode": 2101,
          "name": "BELAT"
        },
        {
          "code": 2101030,
          "regencyCode": 2101,
          "name": "KARIMUN"
        },
        {
          "code": 2101031,
          "regencyCode": 2101,
          "name": "BURU"
        },
        {
          "code": 2101032,
          "regencyCode": 2101,
          "name": "MERAL"
        },
        {
          "code": 2101033,
          "regencyCode": 2101,
          "name": "TEBING"
        },
        {
          "code": 2101034,
          "regencyCode": 2101,
          "name": "MERAL BARAT"
        },
        {
          "code": 2102040,
          "regencyCode": 2102,
          "name": "TELUK BINTAN"
        },
        {
          "code": 2102050,
          "regencyCode": 2102,
          "name": "BINTAN UTARA"
        },
        {
          "code": 2102051,
          "regencyCode": 2102,
          "name": "TELUK SEBONG"
        },
        {
          "code": 2102052,
          "regencyCode": 2102,
          "name": "SERI KUALA LOBAM"
        },
        {
          "code": 2102060,
          "regencyCode": 2102,
          "name": "BINTAN TIMUR"
        },
        {
          "code": 2102061,
          "regencyCode": 2102,
          "name": "GUNUNG KIJANG"
        },
        {
          "code": 2102062,
          "regencyCode": 2102,
          "name": "MANTANG"
        },
        {
          "code": 2102063,
          "regencyCode": 2102,
          "name": "BINTAN PESISIR"
        },
        {
          "code": 2102064,
          "regencyCode": 2102,
          "name": "TOAPAYA"
        },
        {
          "code": 2102070,
          "regencyCode": 2102,
          "name": "TAMBELAN"
        },
        {
          "code": 2103030,
          "regencyCode": 2103,
          "name": "MIDAI"
        },
        {
          "code": 2103040,
          "regencyCode": 2103,
          "name": "BUNGURAN BARAT"
        },
        {
          "code": 2103041,
          "regencyCode": 2103,
          "name": "BUNGURAN UTARA"
        },
        {
          "code": 2103042,
          "regencyCode": 2103,
          "name": "PULAU LAUT"
        },
        {
          "code": 2103043,
          "regencyCode": 2103,
          "name": "PULAU TIGA"
        },
        {
          "code": 2103050,
          "regencyCode": 2103,
          "name": "BUNGURAN TIMUR"
        },
        {
          "code": 2103051,
          "regencyCode": 2103,
          "name": "BUNGURAN TIMUR LAUT"
        },
        {
          "code": 2103052,
          "regencyCode": 2103,
          "name": "BUNGURAN TENGAH"
        },
        {
          "code": 2103053,
          "regencyCode": 2103,
          "name": "BUNGURAN SELATAN"
        },
        {
          "code": 2103060,
          "regencyCode": 2103,
          "name": "SERASAN"
        },
        {
          "code": 2103061,
          "regencyCode": 2103,
          "name": "SUBI"
        },
        {
          "code": 2103062,
          "regencyCode": 2103,
          "name": "SERASAN TIMUR"
        },
        {
          "code": 2104010,
          "regencyCode": 2104,
          "name": "SINGKEP BARAT"
        },
        {
          "code": 2104011,
          "regencyCode": 2104,
          "name": "KEPULAUAN POSEK"
        },
        {
          "code": 2104020,
          "regencyCode": 2104,
          "name": "SINGKEP"
        },
        {
          "code": 2104021,
          "regencyCode": 2104,
          "name": "SINGKEP SELATAN"
        },
        {
          "code": 2104022,
          "regencyCode": 2104,
          "name": "SINGKEP PESISIR"
        },
        {
          "code": 2104030,
          "regencyCode": 2104,
          "name": "LINGGA"
        },
        {
          "code": 2104031,
          "regencyCode": 2104,
          "name": "SELAYAR"
        },
        {
          "code": 2104032,
          "regencyCode": 2104,
          "name": "LINGGA TIMUR"
        },
        {
          "code": 2104040,
          "regencyCode": 2104,
          "name": "LINGGA UTARA"
        },
        {
          "code": 2104050,
          "regencyCode": 2104,
          "name": "SENAYANG"
        },
        {
          "code": 2105010,
          "regencyCode": 2105,
          "name": "JEMAJA"
        },
        {
          "code": 2105020,
          "regencyCode": 2105,
          "name": "JEMAJA TIMUR"
        },
        {
          "code": 2105030,
          "regencyCode": 2105,
          "name": "SIANTAN SELATAN"
        },
        {
          "code": 2105040,
          "regencyCode": 2105,
          "name": "SIANTAN"
        },
        {
          "code": 2105050,
          "regencyCode": 2105,
          "name": "SIANTAN TIMUR"
        },
        {
          "code": 2105060,
          "regencyCode": 2105,
          "name": "SIANTAN TENGAH"
        },
        {
          "code": 2105070,
          "regencyCode": 2105,
          "name": "PALMATAK"
        },
        {
          "code": 2171010,
          "regencyCode": 2171,
          "name": "BELAKANG PADANG"
        },
        {
          "code": 2171020,
          "regencyCode": 2171,
          "name": "BULANG"
        },
        {
          "code": 2171030,
          "regencyCode": 2171,
          "name": "GALANG"
        },
        {
          "code": 2171040,
          "regencyCode": 2171,
          "name": "SEI BEDUK"
        },
        {
          "code": 2171041,
          "regencyCode": 2171,
          "name": "SAGULUNG"
        },
        {
          "code": 2171050,
          "regencyCode": 2171,
          "name": "NONGSA"
        },
        {
          "code": 2171051,
          "regencyCode": 2171,
          "name": "BATAM KOTA"
        },
        {
          "code": 2171060,
          "regencyCode": 2171,
          "name": "SEKUPANG"
        },
        {
          "code": 2171061,
          "regencyCode": 2171,
          "name": "BATU AJI"
        },
        {
          "code": 2171070,
          "regencyCode": 2171,
          "name": "LUBUK BAJA"
        },
        {
          "code": 2171080,
          "regencyCode": 2171,
          "name": "BATU AMPAR"
        },
        {
          "code": 2171081,
          "regencyCode": 2171,
          "name": "BENGKONG"
        },
        {
          "code": 2172010,
          "regencyCode": 2172,
          "name": "BUKIT BESTARI"
        },
        {
          "code": 2172020,
          "regencyCode": 2172,
          "name": "TANJUNGPINANG TIMUR"
        },
        {
          "code": 2172030,
          "regencyCode": 2172,
          "name": "TANJUNGPINANG KOTA"
        },
        {
          "code": 2172040,
          "regencyCode": 2172,
          "name": "TANJUNGPINANG BARAT"
        },
        {
          "code": 3101010,
          "regencyCode": 3101,
          "name": "KEPULAUAN SERIBU SELATAN"
        },
        {
          "code": 3101020,
          "regencyCode": 3101,
          "name": "KEPULAUAN SERIBU UTARA"
        },
        {
          "code": 3171010,
          "regencyCode": 3171,
          "name": "JAGAKARSA"
        },
        {
          "code": 3171020,
          "regencyCode": 3171,
          "name": "PASAR MINGGU"
        },
        {
          "code": 3171030,
          "regencyCode": 3171,
          "name": "CILANDAK"
        },
        {
          "code": 3171040,
          "regencyCode": 3171,
          "name": "PESANGGRAHAN"
        },
        {
          "code": 3171050,
          "regencyCode": 3171,
          "name": "KEBAYORAN LAMA"
        },
        {
          "code": 3171060,
          "regencyCode": 3171,
          "name": "KEBAYORAN BARU"
        },
        {
          "code": 3171070,
          "regencyCode": 3171,
          "name": "MAMPANG PRAPATAN"
        },
        {
          "code": 3171080,
          "regencyCode": 3171,
          "name": "PANCORAN"
        },
        {
          "code": 3171090,
          "regencyCode": 3171,
          "name": "TEBET"
        },
        {
          "code": 3171100,
          "regencyCode": 3171,
          "name": "SETIA BUDI"
        },
        {
          "code": 3172010,
          "regencyCode": 3172,
          "name": "PASAR REBO"
        },
        {
          "code": 3172020,
          "regencyCode": 3172,
          "name": "CIRACAS"
        },
        {
          "code": 3172030,
          "regencyCode": 3172,
          "name": "CIPAYUNG"
        },
        {
          "code": 3172040,
          "regencyCode": 3172,
          "name": "MAKASAR"
        },
        {
          "code": 3172050,
          "regencyCode": 3172,
          "name": "KRAMAT JATI"
        },
        {
          "code": 3172060,
          "regencyCode": 3172,
          "name": "JATINEGARA"
        },
        {
          "code": 3172070,
          "regencyCode": 3172,
          "name": "DUREN SAWIT"
        },
        {
          "code": 3172080,
          "regencyCode": 3172,
          "name": "CAKUNG"
        },
        {
          "code": 3172090,
          "regencyCode": 3172,
          "name": "PULO GADUNG"
        },
        {
          "code": 3172100,
          "regencyCode": 3172,
          "name": "MATRAMAN"
        },
        {
          "code": 3173010,
          "regencyCode": 3173,
          "name": "TANAH ABANG"
        },
        {
          "code": 3173020,
          "regencyCode": 3173,
          "name": "MENTENG"
        },
        {
          "code": 3173030,
          "regencyCode": 3173,
          "name": "SENEN"
        },
        {
          "code": 3173040,
          "regencyCode": 3173,
          "name": "JOHAR BARU"
        },
        {
          "code": 3173050,
          "regencyCode": 3173,
          "name": "CEMPAKA PUTIH"
        },
        {
          "code": 3173060,
          "regencyCode": 3173,
          "name": "KEMAYORAN"
        },
        {
          "code": 3173070,
          "regencyCode": 3173,
          "name": "SAWAH BESAR"
        },
        {
          "code": 3173080,
          "regencyCode": 3173,
          "name": "GAMBIR"
        },
        {
          "code": 3174010,
          "regencyCode": 3174,
          "name": "KEMBANGAN"
        },
        {
          "code": 3174020,
          "regencyCode": 3174,
          "name": "KEBON JERUK"
        },
        {
          "code": 3174030,
          "regencyCode": 3174,
          "name": "PALMERAH"
        },
        {
          "code": 3174040,
          "regencyCode": 3174,
          "name": "GROGOL PETAMBURAN"
        },
        {
          "code": 3174050,
          "regencyCode": 3174,
          "name": "TAMBORA"
        },
        {
          "code": 3174060,
          "regencyCode": 3174,
          "name": "TAMAN SARI"
        },
        {
          "code": 3174070,
          "regencyCode": 3174,
          "name": "CENGKARENG"
        },
        {
          "code": 3174080,
          "regencyCode": 3174,
          "name": "KALI DERES"
        },
        {
          "code": 3175010,
          "regencyCode": 3175,
          "name": "PENJARINGAN"
        },
        {
          "code": 3175020,
          "regencyCode": 3175,
          "name": "PADEMANGAN"
        },
        {
          "code": 3175030,
          "regencyCode": 3175,
          "name": "TANJUNG PRIOK"
        },
        {
          "code": 3175040,
          "regencyCode": 3175,
          "name": "KOJA"
        },
        {
          "code": 3175050,
          "regencyCode": 3175,
          "name": "KELAPA GADING"
        },
        {
          "code": 3175060,
          "regencyCode": 3175,
          "name": "CILINCING"
        },
        {
          "code": 3201010,
          "regencyCode": 3201,
          "name": "NANGGUNG"
        },
        {
          "code": 3201020,
          "regencyCode": 3201,
          "name": "LEUWILIANG"
        },
        {
          "code": 3201021,
          "regencyCode": 3201,
          "name": "LEUWISADENG"
        },
        {
          "code": 3201030,
          "regencyCode": 3201,
          "name": "PAMIJAHAN"
        },
        {
          "code": 3201040,
          "regencyCode": 3201,
          "name": "CIBUNGBULANG"
        },
        {
          "code": 3201050,
          "regencyCode": 3201,
          "name": "CIAMPEA"
        },
        {
          "code": 3201051,
          "regencyCode": 3201,
          "name": "TENJOLAYA"
        },
        {
          "code": 3201060,
          "regencyCode": 3201,
          "name": "DRAMAGA"
        },
        {
          "code": 3201070,
          "regencyCode": 3201,
          "name": "CIOMAS"
        },
        {
          "code": 3201071,
          "regencyCode": 3201,
          "name": "TAMANSARI"
        },
        {
          "code": 3201080,
          "regencyCode": 3201,
          "name": "CIJERUK"
        },
        {
          "code": 3201081,
          "regencyCode": 3201,
          "name": "CIGOMBONG"
        },
        {
          "code": 3201090,
          "regencyCode": 3201,
          "name": "CARINGIN"
        },
        {
          "code": 3201100,
          "regencyCode": 3201,
          "name": "CIAWI"
        },
        {
          "code": 3201110,
          "regencyCode": 3201,
          "name": "CISARUA"
        },
        {
          "code": 3201120,
          "regencyCode": 3201,
          "name": "MEGAMENDUNG"
        },
        {
          "code": 3201130,
          "regencyCode": 3201,
          "name": "SUKARAJA"
        },
        {
          "code": 3201140,
          "regencyCode": 3201,
          "name": "BABAKAN MADANG"
        },
        {
          "code": 3201150,
          "regencyCode": 3201,
          "name": "SUKAMAKMUR"
        },
        {
          "code": 3201160,
          "regencyCode": 3201,
          "name": "CARIU"
        },
        {
          "code": 3201161,
          "regencyCode": 3201,
          "name": "TANJUNGSARI"
        },
        {
          "code": 3201170,
          "regencyCode": 3201,
          "name": "JONGGOL"
        },
        {
          "code": 3201180,
          "regencyCode": 3201,
          "name": "CILEUNGSI"
        },
        {
          "code": 3201181,
          "regencyCode": 3201,
          "name": "KELAPA NUNGGAL"
        },
        {
          "code": 3201190,
          "regencyCode": 3201,
          "name": "GUNUNG PUTRI"
        },
        {
          "code": 3201200,
          "regencyCode": 3201,
          "name": "CITEUREUP"
        },
        {
          "code": 3201210,
          "regencyCode": 3201,
          "name": "CIBINONG"
        },
        {
          "code": 3201220,
          "regencyCode": 3201,
          "name": "BOJONG GEDE"
        },
        {
          "code": 3201221,
          "regencyCode": 3201,
          "name": "TAJUR HALANG"
        },
        {
          "code": 3201230,
          "regencyCode": 3201,
          "name": "KEMANG"
        },
        {
          "code": 3201231,
          "regencyCode": 3201,
          "name": "RANCA BUNGUR"
        },
        {
          "code": 3201240,
          "regencyCode": 3201,
          "name": "PARUNG"
        },
        {
          "code": 3201241,
          "regencyCode": 3201,
          "name": "CISEENG"
        },
        {
          "code": 3201250,
          "regencyCode": 3201,
          "name": "GUNUNG SINDUR"
        },
        {
          "code": 3201260,
          "regencyCode": 3201,
          "name": "RUMPIN"
        },
        {
          "code": 3201270,
          "regencyCode": 3201,
          "name": "CIGUDEG"
        },
        {
          "code": 3201271,
          "regencyCode": 3201,
          "name": "SUKAJAYA"
        },
        {
          "code": 3201280,
          "regencyCode": 3201,
          "name": "JASINGA"
        },
        {
          "code": 3201290,
          "regencyCode": 3201,
          "name": "TENJO"
        },
        {
          "code": 3201300,
          "regencyCode": 3201,
          "name": "PARUNG PANJANG"
        },
        {
          "code": 3202010,
          "regencyCode": 3202,
          "name": "CIEMAS"
        },
        {
          "code": 3202020,
          "regencyCode": 3202,
          "name": "CIRACAP"
        },
        {
          "code": 3202021,
          "regencyCode": 3202,
          "name": "WALURAN"
        },
        {
          "code": 3202030,
          "regencyCode": 3202,
          "name": "SURADE"
        },
        {
          "code": 3202031,
          "regencyCode": 3202,
          "name": "CIBITUNG"
        },
        {
          "code": 3202040,
          "regencyCode": 3202,
          "name": "JAMPANG KULON"
        },
        {
          "code": 3202041,
          "regencyCode": 3202,
          "name": "CIMANGGU"
        },
        {
          "code": 3202050,
          "regencyCode": 3202,
          "name": "KALI BUNDER"
        },
        {
          "code": 3202060,
          "regencyCode": 3202,
          "name": "TEGAL BULEUD"
        },
        {
          "code": 3202070,
          "regencyCode": 3202,
          "name": "CIDOLOG"
        },
        {
          "code": 3202080,
          "regencyCode": 3202,
          "name": "SAGARANTEN"
        },
        {
          "code": 3202081,
          "regencyCode": 3202,
          "name": "CIDADAP"
        },
        {
          "code": 3202082,
          "regencyCode": 3202,
          "name": "CURUGKEMBAR"
        },
        {
          "code": 3202090,
          "regencyCode": 3202,
          "name": "PABUARAN"
        },
        {
          "code": 3202100,
          "regencyCode": 3202,
          "name": "LENGKONG"
        },
        {
          "code": 3202110,
          "regencyCode": 3202,
          "name": "PALABUHANRATU"
        },
        {
          "code": 3202111,
          "regencyCode": 3202,
          "name": "SIMPENAN"
        },
        {
          "code": 3202120,
          "regencyCode": 3202,
          "name": "WARUNG KIARA"
        },
        {
          "code": 3202121,
          "regencyCode": 3202,
          "name": "BANTARGADUNG"
        },
        {
          "code": 3202130,
          "regencyCode": 3202,
          "name": "JAMPANG TENGAH"
        },
        {
          "code": 3202131,
          "regencyCode": 3202,
          "name": "PURABAYA"
        },
        {
          "code": 3202140,
          "regencyCode": 3202,
          "name": "CIKEMBAR"
        },
        {
          "code": 3202150,
          "regencyCode": 3202,
          "name": "NYALINDUNG"
        },
        {
          "code": 3202160,
          "regencyCode": 3202,
          "name": "GEGER BITUNG"
        },
        {
          "code": 3202170,
          "regencyCode": 3202,
          "name": "SUKARAJA"
        },
        {
          "code": 3202171,
          "regencyCode": 3202,
          "name": "KEBONPEDES"
        },
        {
          "code": 3202172,
          "regencyCode": 3202,
          "name": "CIREUNGHAS"
        },
        {
          "code": 3202173,
          "regencyCode": 3202,
          "name": "SUKALARANG"
        },
        {
          "code": 3202180,
          "regencyCode": 3202,
          "name": "SUKABUMI"
        },
        {
          "code": 3202190,
          "regencyCode": 3202,
          "name": "KADUDAMPIT"
        },
        {
          "code": 3202200,
          "regencyCode": 3202,
          "name": "CISAAT"
        },
        {
          "code": 3202201,
          "regencyCode": 3202,
          "name": "GUNUNGGURUH"
        },
        {
          "code": 3202210,
          "regencyCode": 3202,
          "name": "CIBADAK"
        },
        {
          "code": 3202211,
          "regencyCode": 3202,
          "name": "CICANTAYAN"
        },
        {
          "code": 3202212,
          "regencyCode": 3202,
          "name": "CARINGIN"
        },
        {
          "code": 3202220,
          "regencyCode": 3202,
          "name": "NAGRAK"
        },
        {
          "code": 3202221,
          "regencyCode": 3202,
          "name": "CIAMBAR"
        },
        {
          "code": 3202230,
          "regencyCode": 3202,
          "name": "CICURUG"
        },
        {
          "code": 3202240,
          "regencyCode": 3202,
          "name": "CIDAHU"
        },
        {
          "code": 3202250,
          "regencyCode": 3202,
          "name": "PARAKAN SALAK"
        },
        {
          "code": 3202260,
          "regencyCode": 3202,
          "name": "PARUNG KUDA"
        },
        {
          "code": 3202261,
          "regencyCode": 3202,
          "name": "BOJONG GENTENG"
        },
        {
          "code": 3202270,
          "regencyCode": 3202,
          "name": "KALAPA NUNGGAL"
        },
        {
          "code": 3202280,
          "regencyCode": 3202,
          "name": "CIKIDANG"
        },
        {
          "code": 3202290,
          "regencyCode": 3202,
          "name": "CISOLOK"
        },
        {
          "code": 3202291,
          "regencyCode": 3202,
          "name": "CIKAKAK"
        },
        {
          "code": 3202300,
          "regencyCode": 3202,
          "name": "KABANDUNGAN"
        },
        {
          "code": 3203010,
          "regencyCode": 3203,
          "name": "AGRABINTA"
        },
        {
          "code": 3203011,
          "regencyCode": 3203,
          "name": "LELES"
        },
        {
          "code": 3203020,
          "regencyCode": 3203,
          "name": "SINDANGBARANG"
        },
        {
          "code": 3203030,
          "regencyCode": 3203,
          "name": "CIDAUN"
        },
        {
          "code": 3203040,
          "regencyCode": 3203,
          "name": "NARINGGUL"
        },
        {
          "code": 3203050,
          "regencyCode": 3203,
          "name": "CIBINONG"
        },
        {
          "code": 3203051,
          "regencyCode": 3203,
          "name": "CIKADU"
        },
        {
          "code": 3203060,
          "regencyCode": 3203,
          "name": "TANGGEUNG"
        },
        {
          "code": 3203061,
          "regencyCode": 3203,
          "name": "PASIRKUDA"
        },
        {
          "code": 3203070,
          "regencyCode": 3203,
          "name": "KADUPANDAK"
        },
        {
          "code": 3203071,
          "regencyCode": 3203,
          "name": "CIJATI"
        },
        {
          "code": 3203080,
          "regencyCode": 3203,
          "name": "TAKOKAK"
        },
        {
          "code": 3203090,
          "regencyCode": 3203,
          "name": "SUKANAGARA"
        },
        {
          "code": 3203100,
          "regencyCode": 3203,
          "name": "PAGELARAN"
        },
        {
          "code": 3203110,
          "regencyCode": 3203,
          "name": "CAMPAKA"
        },
        {
          "code": 3203111,
          "regencyCode": 3203,
          "name": "CAMPAKA MULYA"
        },
        {
          "code": 3203120,
          "regencyCode": 3203,
          "name": "CIBEBER"
        },
        {
          "code": 3203130,
          "regencyCode": 3203,
          "name": "WARUNGKONDANG"
        },
        {
          "code": 3203131,
          "regencyCode": 3203,
          "name": "GEKBRONG"
        },
        {
          "code": 3203140,
          "regencyCode": 3203,
          "name": "CILAKU"
        },
        {
          "code": 3203150,
          "regencyCode": 3203,
          "name": "SUKALUYU"
        },
        {
          "code": 3203160,
          "regencyCode": 3203,
          "name": "BOJONGPICUNG"
        },
        {
          "code": 3203161,
          "regencyCode": 3203,
          "name": "HAURWANGI"
        },
        {
          "code": 3203170,
          "regencyCode": 3203,
          "name": "CIRANJANG"
        },
        {
          "code": 3203180,
          "regencyCode": 3203,
          "name": "MANDE"
        },
        {
          "code": 3203190,
          "regencyCode": 3203,
          "name": "KARANGTENGAH"
        },
        {
          "code": 3203200,
          "regencyCode": 3203,
          "name": "CIANJUR"
        },
        {
          "code": 3203210,
          "regencyCode": 3203,
          "name": "CUGENANG"
        },
        {
          "code": 3203220,
          "regencyCode": 3203,
          "name": "PACET"
        },
        {
          "code": 3203221,
          "regencyCode": 3203,
          "name": "CIPANAS"
        },
        {
          "code": 3203230,
          "regencyCode": 3203,
          "name": "SUKARESMI"
        },
        {
          "code": 3203240,
          "regencyCode": 3203,
          "name": "CIKALONGKULON"
        },
        {
          "code": 3204010,
          "regencyCode": 3204,
          "name": "CIWIDEY"
        },
        {
          "code": 3204011,
          "regencyCode": 3204,
          "name": "RANCABALI"
        },
        {
          "code": 3204020,
          "regencyCode": 3204,
          "name": "PASIRJAMBU"
        },
        {
          "code": 3204030,
          "regencyCode": 3204,
          "name": "CIMAUNG"
        },
        {
          "code": 3204040,
          "regencyCode": 3204,
          "name": "PANGALENGAN"
        },
        {
          "code": 3204050,
          "regencyCode": 3204,
          "name": "KERTASARI"
        },
        {
          "code": 3204060,
          "regencyCode": 3204,
          "name": "PACET"
        },
        {
          "code": 3204070,
          "regencyCode": 3204,
          "name": "IBUN"
        },
        {
          "code": 3204080,
          "regencyCode": 3204,
          "name": "PASEH"
        },
        {
          "code": 3204090,
          "regencyCode": 3204,
          "name": "CIKANCUNG"
        },
        {
          "code": 3204100,
          "regencyCode": 3204,
          "name": "CICALENGKA"
        },
        {
          "code": 3204101,
          "regencyCode": 3204,
          "name": "NAGREG"
        },
        {
          "code": 3204110,
          "regencyCode": 3204,
          "name": "RANCAEKEK"
        },
        {
          "code": 3204120,
          "regencyCode": 3204,
          "name": "MAJALAYA"
        },
        {
          "code": 3204121,
          "regencyCode": 3204,
          "name": "SOLOKAN JERUK"
        },
        {
          "code": 3204130,
          "regencyCode": 3204,
          "name": "CIPARAY"
        },
        {
          "code": 3204140,
          "regencyCode": 3204,
          "name": "BALEENDAH"
        },
        {
          "code": 3204150,
          "regencyCode": 3204,
          "name": "ARJASARI"
        },
        {
          "code": 3204160,
          "regencyCode": 3204,
          "name": "BANJARAN"
        },
        {
          "code": 3204161,
          "regencyCode": 3204,
          "name": "CANGKUANG"
        },
        {
          "code": 3204170,
          "regencyCode": 3204,
          "name": "PAMEUNGPEUK"
        },
        {
          "code": 3204180,
          "regencyCode": 3204,
          "name": "KATAPANG"
        },
        {
          "code": 3204190,
          "regencyCode": 3204,
          "name": "SOREANG"
        },
        {
          "code": 3204191,
          "regencyCode": 3204,
          "name": "KUTAWARINGIN"
        },
        {
          "code": 3204250,
          "regencyCode": 3204,
          "name": "MARGAASIH"
        },
        {
          "code": 3204260,
          "regencyCode": 3204,
          "name": "MARGAHAYU"
        },
        {
          "code": 3204270,
          "regencyCode": 3204,
          "name": "DAYEUHKOLOT"
        },
        {
          "code": 3204280,
          "regencyCode": 3204,
          "name": "BOJONGSOANG"
        },
        {
          "code": 3204290,
          "regencyCode": 3204,
          "name": "CILEUNYI"
        },
        {
          "code": 3204300,
          "regencyCode": 3204,
          "name": "CILENGKRANG"
        },
        {
          "code": 3204310,
          "regencyCode": 3204,
          "name": "CIMENYAN"
        },
        {
          "code": 3205010,
          "regencyCode": 3205,
          "name": "CISEWU"
        },
        {
          "code": 3205011,
          "regencyCode": 3205,
          "name": "CARINGIN"
        },
        {
          "code": 3205020,
          "regencyCode": 3205,
          "name": "TALEGONG"
        },
        {
          "code": 3205030,
          "regencyCode": 3205,
          "name": "BUNGBULANG"
        },
        {
          "code": 3205031,
          "regencyCode": 3205,
          "name": "MEKARMUKTI"
        },
        {
          "code": 3205040,
          "regencyCode": 3205,
          "name": "PAMULIHAN"
        },
        {
          "code": 3205050,
          "regencyCode": 3205,
          "name": "PAKENJENG"
        },
        {
          "code": 3205060,
          "regencyCode": 3205,
          "name": "CIKELET"
        },
        {
          "code": 3205070,
          "regencyCode": 3205,
          "name": "PAMEUNGPEUK"
        },
        {
          "code": 3205080,
          "regencyCode": 3205,
          "name": "CIBALONG"
        },
        {
          "code": 3205090,
          "regencyCode": 3205,
          "name": "CISOMPET"
        },
        {
          "code": 3205100,
          "regencyCode": 3205,
          "name": "PEUNDEUY"
        },
        {
          "code": 3205110,
          "regencyCode": 3205,
          "name": "SINGAJAYA"
        },
        {
          "code": 3205111,
          "regencyCode": 3205,
          "name": "CIHURIP"
        },
        {
          "code": 3205120,
          "regencyCode": 3205,
          "name": "CIKAJANG"
        },
        {
          "code": 3205130,
          "regencyCode": 3205,
          "name": "BANJARWANGI"
        },
        {
          "code": 3205140,
          "regencyCode": 3205,
          "name": "CILAWU"
        },
        {
          "code": 3205150,
          "regencyCode": 3205,
          "name": "BAYONGBONG"
        },
        {
          "code": 3205151,
          "regencyCode": 3205,
          "name": "CIGEDUG"
        },
        {
          "code": 3205160,
          "regencyCode": 3205,
          "name": "CISURUPAN"
        },
        {
          "code": 3205161,
          "regencyCode": 3205,
          "name": "SUKARESMI"
        },
        {
          "code": 3205170,
          "regencyCode": 3205,
          "name": "SAMARANG"
        },
        {
          "code": 3205171,
          "regencyCode": 3205,
          "name": "PASIRWANGI"
        },
        {
          "code": 3205181,
          "regencyCode": 3205,
          "name": "TAROGONG KIDUL"
        },
        {
          "code": 3205182,
          "regencyCode": 3205,
          "name": "TAROGONG KALER"
        },
        {
          "code": 3205190,
          "regencyCode": 3205,
          "name": "GARUT KOTA"
        },
        {
          "code": 3205200,
          "regencyCode": 3205,
          "name": "KARANGPAWITAN"
        },
        {
          "code": 3205210,
          "regencyCode": 3205,
          "name": "WANARAJA"
        },
        {
          "code": 3205211,
          "regencyCode": 3205,
          "name": "SUCINARAJA"
        },
        {
          "code": 3205212,
          "regencyCode": 3205,
          "name": "PANGATIKAN"
        },
        {
          "code": 3205220,
          "regencyCode": 3205,
          "name": "SUKAWENING"
        },
        {
          "code": 3205221,
          "regencyCode": 3205,
          "name": "KARANGTENGAH"
        },
        {
          "code": 3205230,
          "regencyCode": 3205,
          "name": "BANYURESMI"
        },
        {
          "code": 3205240,
          "regencyCode": 3205,
          "name": "LELES"
        },
        {
          "code": 3205250,
          "regencyCode": 3205,
          "name": "LEUWIGOONG"
        },
        {
          "code": 3205260,
          "regencyCode": 3205,
          "name": "CIBATU"
        },
        {
          "code": 3205261,
          "regencyCode": 3205,
          "name": "KERSAMANAH"
        },
        {
          "code": 3205270,
          "regencyCode": 3205,
          "name": "CIBIUK"
        },
        {
          "code": 3205280,
          "regencyCode": 3205,
          "name": "KADUNGORA"
        },
        {
          "code": 3205290,
          "regencyCode": 3205,
          "name": "BLUBUR LIMBANGAN"
        },
        {
          "code": 3205300,
          "regencyCode": 3205,
          "name": "SELAAWI"
        },
        {
          "code": 3205310,
          "regencyCode": 3205,
          "name": "MALANGBONG"
        },
        {
          "code": 3206010,
          "regencyCode": 3206,
          "name": "CIPATUJAH"
        },
        {
          "code": 3206020,
          "regencyCode": 3206,
          "name": "KARANGNUNGGAL"
        },
        {
          "code": 3206030,
          "regencyCode": 3206,
          "name": "CIKALONG"
        },
        {
          "code": 3206040,
          "regencyCode": 3206,
          "name": "PANCATENGAH"
        },
        {
          "code": 3206050,
          "regencyCode": 3206,
          "name": "CIKATOMAS"
        },
        {
          "code": 3206060,
          "regencyCode": 3206,
          "name": "CIBALONG"
        },
        {
          "code": 3206061,
          "regencyCode": 3206,
          "name": "PARUNGPONTENG"
        },
        {
          "code": 3206070,
          "regencyCode": 3206,
          "name": "BANTARKALONG"
        },
        {
          "code": 3206071,
          "regencyCode": 3206,
          "name": "BOJONGASIH"
        },
        {
          "code": 3206072,
          "regencyCode": 3206,
          "name": "CULAMEGA"
        },
        {
          "code": 3206080,
          "regencyCode": 3206,
          "name": "BOJONGGAMBIR"
        },
        {
          "code": 3206090,
          "regencyCode": 3206,
          "name": "SODONGHILIR"
        },
        {
          "code": 3206100,
          "regencyCode": 3206,
          "name": "TARAJU"
        },
        {
          "code": 3206110,
          "regencyCode": 3206,
          "name": "SALAWU"
        },
        {
          "code": 3206111,
          "regencyCode": 3206,
          "name": "PUSPAHIANG"
        },
        {
          "code": 3206120,
          "regencyCode": 3206,
          "name": "TANJUNGJAYA"
        },
        {
          "code": 3206130,
          "regencyCode": 3206,
          "name": "SUKARAJA"
        },
        {
          "code": 3206140,
          "regencyCode": 3206,
          "name": "SALOPA"
        },
        {
          "code": 3206141,
          "regencyCode": 3206,
          "name": "JATIWARAS"
        },
        {
          "code": 3206150,
          "regencyCode": 3206,
          "name": "CINEAM"
        },
        {
          "code": 3206151,
          "regencyCode": 3206,
          "name": "KARANGJAYA"
        },
        {
          "code": 3206160,
          "regencyCode": 3206,
          "name": "MANONJAYA"
        },
        {
          "code": 3206161,
          "regencyCode": 3206,
          "name": "GUNUNGTANJUNG"
        },
        {
          "code": 3206190,
          "regencyCode": 3206,
          "name": "SINGAPARNA"
        },
        {
          "code": 3206191,
          "regencyCode": 3206,
          "name": "SUKARAME"
        },
        {
          "code": 3206192,
          "regencyCode": 3206,
          "name": "MANGUNREJA"
        },
        {
          "code": 3206200,
          "regencyCode": 3206,
          "name": "CIGALONTANG"
        },
        {
          "code": 3206210,
          "regencyCode": 3206,
          "name": "LEUWISARI"
        },
        {
          "code": 3206211,
          "regencyCode": 3206,
          "name": "SARIWANGI"
        },
        {
          "code": 3206212,
          "regencyCode": 3206,
          "name": "PADAKEMBANG"
        },
        {
          "code": 3206221,
          "regencyCode": 3206,
          "name": "SUKARATU"
        },
        {
          "code": 3206230,
          "regencyCode": 3206,
          "name": "CISAYONG"
        },
        {
          "code": 3206231,
          "regencyCode": 3206,
          "name": "SUKAHENING"
        },
        {
          "code": 3206240,
          "regencyCode": 3206,
          "name": "RAJAPOLAH"
        },
        {
          "code": 3206250,
          "regencyCode": 3206,
          "name": "JAMANIS"
        },
        {
          "code": 3206260,
          "regencyCode": 3206,
          "name": "CIAWI"
        },
        {
          "code": 3206261,
          "regencyCode": 3206,
          "name": "KADIPATEN"
        },
        {
          "code": 3206270,
          "regencyCode": 3206,
          "name": "PAGERAGEUNG"
        },
        {
          "code": 3206271,
          "regencyCode": 3206,
          "name": "SUKARESIK"
        },
        {
          "code": 3207100,
          "regencyCode": 3207,
          "name": "BANJARSARI"
        },
        {
          "code": 3207110,
          "regencyCode": 3207,
          "name": "LAKBOK"
        },
        {
          "code": 3207111,
          "regencyCode": 3207,
          "name": "PURWADADI"
        },
        {
          "code": 3207120,
          "regencyCode": 3207,
          "name": "PAMARICAN"
        },
        {
          "code": 3207130,
          "regencyCode": 3207,
          "name": "CIDOLOG"
        },
        {
          "code": 3207140,
          "regencyCode": 3207,
          "name": "CIMARAGAS"
        },
        {
          "code": 3207150,
          "regencyCode": 3207,
          "name": "CIJEUNGJING"
        },
        {
          "code": 3207160,
          "regencyCode": 3207,
          "name": "CISAGA"
        },
        {
          "code": 3207170,
          "regencyCode": 3207,
          "name": "TAMBAKSARI"
        },
        {
          "code": 3207180,
          "regencyCode": 3207,
          "name": "RANCAH"
        },
        {
          "code": 3207190,
          "regencyCode": 3207,
          "name": "RAJADESA"
        },
        {
          "code": 3207200,
          "regencyCode": 3207,
          "name": "SUKADANA"
        },
        {
          "code": 3207210,
          "regencyCode": 3207,
          "name": "CIAMIS"
        },
        {
          "code": 3207211,
          "regencyCode": 3207,
          "name": "BAREGBEG"
        },
        {
          "code": 3207220,
          "regencyCode": 3207,
          "name": "CIKONENG"
        },
        {
          "code": 3207221,
          "regencyCode": 3207,
          "name": "SINDANGKASIH"
        },
        {
          "code": 3207230,
          "regencyCode": 3207,
          "name": "CIHAURBEUTI"
        },
        {
          "code": 3207240,
          "regencyCode": 3207,
          "name": "SADANANYA"
        },
        {
          "code": 3207250,
          "regencyCode": 3207,
          "name": "CIPAKU"
        },
        {
          "code": 3207260,
          "regencyCode": 3207,
          "name": "JATINAGARA"
        },
        {
          "code": 3207270,
          "regencyCode": 3207,
          "name": "PANAWANGAN"
        },
        {
          "code": 3207280,
          "regencyCode": 3207,
          "name": "KAWALI"
        },
        {
          "code": 3207281,
          "regencyCode": 3207,
          "name": "LUMBUNG"
        },
        {
          "code": 3207290,
          "regencyCode": 3207,
          "name": "PANJALU"
        },
        {
          "code": 3207291,
          "regencyCode": 3207,
          "name": "SUKAMANTRI"
        },
        {
          "code": 3207300,
          "regencyCode": 3207,
          "name": "PANUMBANGAN"
        },
        {
          "code": 3208010,
          "regencyCode": 3208,
          "name": "DARMA"
        },
        {
          "code": 3208020,
          "regencyCode": 3208,
          "name": "KADUGEDE"
        },
        {
          "code": 3208021,
          "regencyCode": 3208,
          "name": "NUSAHERANG"
        },
        {
          "code": 3208030,
          "regencyCode": 3208,
          "name": "CINIRU"
        },
        {
          "code": 3208031,
          "regencyCode": 3208,
          "name": "HANTARA"
        },
        {
          "code": 3208040,
          "regencyCode": 3208,
          "name": "SELAJAMBE"
        },
        {
          "code": 3208050,
          "regencyCode": 3208,
          "name": "SUBANG"
        },
        {
          "code": 3208051,
          "regencyCode": 3208,
          "name": "CILEBAK"
        },
        {
          "code": 3208060,
          "regencyCode": 3208,
          "name": "CIWARU"
        },
        {
          "code": 3208061,
          "regencyCode": 3208,
          "name": "KARANGKANCANA"
        },
        {
          "code": 3208070,
          "regencyCode": 3208,
          "name": "CIBINGBIN"
        },
        {
          "code": 3208071,
          "regencyCode": 3208,
          "name": "CIBEUREUM"
        },
        {
          "code": 3208080,
          "regencyCode": 3208,
          "name": "LURAGUNG"
        },
        {
          "code": 3208081,
          "regencyCode": 3208,
          "name": "CIMAHI"
        },
        {
          "code": 3208090,
          "regencyCode": 3208,
          "name": "CIDAHU"
        },
        {
          "code": 3208091,
          "regencyCode": 3208,
          "name": "KALIMANGGIS"
        },
        {
          "code": 3208100,
          "regencyCode": 3208,
          "name": "CIAWIGEBANG"
        },
        {
          "code": 3208101,
          "regencyCode": 3208,
          "name": "CIPICUNG"
        },
        {
          "code": 3208110,
          "regencyCode": 3208,
          "name": "LEBAKWANGI"
        },
        {
          "code": 3208111,
          "regencyCode": 3208,
          "name": "MALEBER"
        },
        {
          "code": 3208120,
          "regencyCode": 3208,
          "name": "GARAWANGI"
        },
        {
          "code": 3208121,
          "regencyCode": 3208,
          "name": "SINDANGAGUNG"
        },
        {
          "code": 3208130,
          "regencyCode": 3208,
          "name": "KUNINGAN"
        },
        {
          "code": 3208140,
          "regencyCode": 3208,
          "name": "CIGUGUR"
        },
        {
          "code": 3208150,
          "regencyCode": 3208,
          "name": "KRAMATMULYA"
        },
        {
          "code": 3208160,
          "regencyCode": 3208,
          "name": "JALAKSANA"
        },
        {
          "code": 3208161,
          "regencyCode": 3208,
          "name": "JAPARA"
        },
        {
          "code": 3208170,
          "regencyCode": 3208,
          "name": "CILIMUS"
        },
        {
          "code": 3208171,
          "regencyCode": 3208,
          "name": "CIGANDAMEKAR"
        },
        {
          "code": 3208180,
          "regencyCode": 3208,
          "name": "MANDIRANCAN"
        },
        {
          "code": 3208181,
          "regencyCode": 3208,
          "name": "PANCALANG"
        },
        {
          "code": 3208190,
          "regencyCode": 3208,
          "name": "PASAWAHAN"
        },
        {
          "code": 3209010,
          "regencyCode": 3209,
          "name": "WALED"
        },
        {
          "code": 3209011,
          "regencyCode": 3209,
          "name": "PASALEMAN"
        },
        {
          "code": 3209020,
          "regencyCode": 3209,
          "name": "CILEDUG"
        },
        {
          "code": 3209021,
          "regencyCode": 3209,
          "name": "PABUARAN"
        },
        {
          "code": 3209030,
          "regencyCode": 3209,
          "name": "LOSARI"
        },
        {
          "code": 3209031,
          "regencyCode": 3209,
          "name": "PABEDILAN"
        },
        {
          "code": 3209040,
          "regencyCode": 3209,
          "name": "BABAKAN"
        },
        {
          "code": 3209041,
          "regencyCode": 3209,
          "name": "GEBANG"
        },
        {
          "code": 3209050,
          "regencyCode": 3209,
          "name": "KARANGSEMBUNG"
        },
        {
          "code": 3209051,
          "regencyCode": 3209,
          "name": "KARANGWARENG"
        },
        {
          "code": 3209060,
          "regencyCode": 3209,
          "name": "LEMAHABANG"
        },
        {
          "code": 3209061,
          "regencyCode": 3209,
          "name": "SUSUKANLEBAK"
        },
        {
          "code": 3209070,
          "regencyCode": 3209,
          "name": "SEDONG"
        },
        {
          "code": 3209080,
          "regencyCode": 3209,
          "name": "ASTANAJAPURA"
        },
        {
          "code": 3209081,
          "regencyCode": 3209,
          "name": "PANGENAN"
        },
        {
          "code": 3209090,
          "regencyCode": 3209,
          "name": "MUNDU"
        },
        {
          "code": 3209100,
          "regencyCode": 3209,
          "name": "BEBER"
        },
        {
          "code": 3209101,
          "regencyCode": 3209,
          "name": "GREGED"
        },
        {
          "code": 3209111,
          "regencyCode": 3209,
          "name": "TALUN"
        },
        {
          "code": 3209120,
          "regencyCode": 3209,
          "name": "SUMBER"
        },
        {
          "code": 3209121,
          "regencyCode": 3209,
          "name": "DUKUPUNTANG"
        },
        {
          "code": 3209130,
          "regencyCode": 3209,
          "name": "PALIMANAN"
        },
        {
          "code": 3209140,
          "regencyCode": 3209,
          "name": "PLUMBON"
        },
        {
          "code": 3209141,
          "regencyCode": 3209,
          "name": "DEPOK"
        },
        {
          "code": 3209150,
          "regencyCode": 3209,
          "name": "WERU"
        },
        {
          "code": 3209151,
          "regencyCode": 3209,
          "name": "PLERED"
        },
        {
          "code": 3209161,
          "regencyCode": 3209,
          "name": "TENGAH TANI"
        },
        {
          "code": 3209162,
          "regencyCode": 3209,
          "name": "KEDAWUNG"
        },
        {
          "code": 3209171,
          "regencyCode": 3209,
          "name": "GUNUNGJATI"
        },
        {
          "code": 3209180,
          "regencyCode": 3209,
          "name": "KAPETAKAN"
        },
        {
          "code": 3209181,
          "regencyCode": 3209,
          "name": "SURANENGGALA"
        },
        {
          "code": 3209190,
          "regencyCode": 3209,
          "name": "KLANGENAN"
        },
        {
          "code": 3209191,
          "regencyCode": 3209,
          "name": "JAMBLANG"
        },
        {
          "code": 3209200,
          "regencyCode": 3209,
          "name": "ARJAWINANGUN"
        },
        {
          "code": 3209201,
          "regencyCode": 3209,
          "name": "PANGURAGAN"
        },
        {
          "code": 3209210,
          "regencyCode": 3209,
          "name": "CIWARINGIN"
        },
        {
          "code": 3209211,
          "regencyCode": 3209,
          "name": "GEMPOL"
        },
        {
          "code": 3209220,
          "regencyCode": 3209,
          "name": "SUSUKAN"
        },
        {
          "code": 3209230,
          "regencyCode": 3209,
          "name": "GEGESIK"
        },
        {
          "code": 3209231,
          "regencyCode": 3209,
          "name": "KALIWEDI"
        },
        {
          "code": 3210010,
          "regencyCode": 3210,
          "name": "LEMAHSUGIH"
        },
        {
          "code": 3210020,
          "regencyCode": 3210,
          "name": "BANTARUJEG"
        },
        {
          "code": 3210021,
          "regencyCode": 3210,
          "name": "MALAUSMA"
        },
        {
          "code": 3210030,
          "regencyCode": 3210,
          "name": "CIKIJING"
        },
        {
          "code": 3210031,
          "regencyCode": 3210,
          "name": "CINGAMBUL"
        },
        {
          "code": 3210040,
          "regencyCode": 3210,
          "name": "TALAGA"
        },
        {
          "code": 3210041,
          "regencyCode": 3210,
          "name": "BANJARAN"
        },
        {
          "code": 3210050,
          "regencyCode": 3210,
          "name": "ARGAPURA"
        },
        {
          "code": 3210060,
          "regencyCode": 3210,
          "name": "MAJA"
        },
        {
          "code": 3210070,
          "regencyCode": 3210,
          "name": "MAJALENGKA"
        },
        {
          "code": 3210080,
          "regencyCode": 3210,
          "name": "CIGASONG"
        },
        {
          "code": 3210090,
          "regencyCode": 3210,
          "name": "SUKAHAJI"
        },
        {
          "code": 3210091,
          "regencyCode": 3210,
          "name": "SINDANG"
        },
        {
          "code": 3210100,
          "regencyCode": 3210,
          "name": "RAJAGALUH"
        },
        {
          "code": 3210110,
          "regencyCode": 3210,
          "name": "SINDANGWANGI"
        },
        {
          "code": 3210120,
          "regencyCode": 3210,
          "name": "LEUWIMUNDING"
        },
        {
          "code": 3210130,
          "regencyCode": 3210,
          "name": "PALASAH"
        },
        {
          "code": 3210140,
          "regencyCode": 3210,
          "name": "JATIWANGI"
        },
        {
          "code": 3210150,
          "regencyCode": 3210,
          "name": "DAWUAN"
        },
        {
          "code": 3210151,
          "regencyCode": 3210,
          "name": "KASOKANDEL"
        },
        {
          "code": 3210160,
          "regencyCode": 3210,
          "name": "PANYINGKIRAN"
        },
        {
          "code": 3210170,
          "regencyCode": 3210,
          "name": "KADIPATEN"
        },
        {
          "code": 3210180,
          "regencyCode": 3210,
          "name": "KERTAJATI"
        },
        {
          "code": 3210190,
          "regencyCode": 3210,
          "name": "JATITUJUH"
        },
        {
          "code": 3210200,
          "regencyCode": 3210,
          "name": "LIGUNG"
        },
        {
          "code": 3210210,
          "regencyCode": 3210,
          "name": "SUMBERJAYA"
        },
        {
          "code": 3211010,
          "regencyCode": 3211,
          "name": "JATINANGOR"
        },
        {
          "code": 3211020,
          "regencyCode": 3211,
          "name": "CIMANGGUNG"
        },
        {
          "code": 3211030,
          "regencyCode": 3211,
          "name": "TANJUNGSARI"
        },
        {
          "code": 3211031,
          "regencyCode": 3211,
          "name": "SUKASARI"
        },
        {
          "code": 3211032,
          "regencyCode": 3211,
          "name": "PAMULIHAN"
        },
        {
          "code": 3211040,
          "regencyCode": 3211,
          "name": "RANCAKALONG"
        },
        {
          "code": 3211050,
          "regencyCode": 3211,
          "name": "SUMEDANG SELATAN"
        },
        {
          "code": 3211060,
          "regencyCode": 3211,
          "name": "SUMEDANG UTARA"
        },
        {
          "code": 3211061,
          "regencyCode": 3211,
          "name": "GANEAS"
        },
        {
          "code": 3211070,
          "regencyCode": 3211,
          "name": "SITURAJA"
        },
        {
          "code": 3211071,
          "regencyCode": 3211,
          "name": "CISITU"
        },
        {
          "code": 3211080,
          "regencyCode": 3211,
          "name": "DARMARAJA"
        },
        {
          "code": 3211090,
          "regencyCode": 3211,
          "name": "CIBUGEL"
        },
        {
          "code": 3211100,
          "regencyCode": 3211,
          "name": "WADO"
        },
        {
          "code": 3211101,
          "regencyCode": 3211,
          "name": "JATINUNGGAL"
        },
        {
          "code": 3211111,
          "regencyCode": 3211,
          "name": "JATIGEDE"
        },
        {
          "code": 3211120,
          "regencyCode": 3211,
          "name": "TOMO"
        },
        {
          "code": 3211130,
          "regencyCode": 3211,
          "name": "UJUNG JAYA"
        },
        {
          "code": 3211140,
          "regencyCode": 3211,
          "name": "CONGGEANG"
        },
        {
          "code": 3211150,
          "regencyCode": 3211,
          "name": "PASEH"
        },
        {
          "code": 3211160,
          "regencyCode": 3211,
          "name": "CIMALAKA"
        },
        {
          "code": 3211161,
          "regencyCode": 3211,
          "name": "CISARUA"
        },
        {
          "code": 3211170,
          "regencyCode": 3211,
          "name": "TANJUNGKERTA"
        },
        {
          "code": 3211171,
          "regencyCode": 3211,
          "name": "TANJUNGMEDAR"
        },
        {
          "code": 3211180,
          "regencyCode": 3211,
          "name": "BUAHDUA"
        },
        {
          "code": 3211181,
          "regencyCode": 3211,
          "name": "SURIAN"
        },
        {
          "code": 3212010,
          "regencyCode": 3212,
          "name": "HAURGEULIS"
        },
        {
          "code": 3212011,
          "regencyCode": 3212,
          "name": "GANTAR"
        },
        {
          "code": 3212020,
          "regencyCode": 3212,
          "name": "KROYA"
        },
        {
          "code": 3212030,
          "regencyCode": 3212,
          "name": "GABUSWETAN"
        },
        {
          "code": 3212040,
          "regencyCode": 3212,
          "name": "CIKEDUNG"
        },
        {
          "code": 3212041,
          "regencyCode": 3212,
          "name": "TERISI"
        },
        {
          "code": 3212050,
          "regencyCode": 3212,
          "name": "LELEA"
        },
        {
          "code": 3212060,
          "regencyCode": 3212,
          "name": "BANGODUA"
        },
        {
          "code": 3212061,
          "regencyCode": 3212,
          "name": "TUKDANA"
        },
        {
          "code": 3212070,
          "regencyCode": 3212,
          "name": "WIDASARI"
        },
        {
          "code": 3212080,
          "regencyCode": 3212,
          "name": "KERTASEMAYA"
        },
        {
          "code": 3212081,
          "regencyCode": 3212,
          "name": "SUKAGUMIWANG"
        },
        {
          "code": 3212090,
          "regencyCode": 3212,
          "name": "KRANGKENG"
        },
        {
          "code": 3212100,
          "regencyCode": 3212,
          "name": "KARANGAMPEL"
        },
        {
          "code": 3212101,
          "regencyCode": 3212,
          "name": "KEDOKAN BUNDER"
        },
        {
          "code": 3212110,
          "regencyCode": 3212,
          "name": "JUNTINYUAT"
        },
        {
          "code": 3212120,
          "regencyCode": 3212,
          "name": "SLIYEG"
        },
        {
          "code": 3212130,
          "regencyCode": 3212,
          "name": "JATIBARANG"
        },
        {
          "code": 3212140,
          "regencyCode": 3212,
          "name": "BALONGAN"
        },
        {
          "code": 3212150,
          "regencyCode": 3212,
          "name": "INDRAMAYU"
        },
        {
          "code": 3212160,
          "regencyCode": 3212,
          "name": "SINDANG"
        },
        {
          "code": 3212161,
          "regencyCode": 3212,
          "name": "CANTIGI"
        },
        {
          "code": 3212162,
          "regencyCode": 3212,
          "name": "PASEKAN"
        },
        {
          "code": 3212170,
          "regencyCode": 3212,
          "name": "LOHBENER"
        },
        {
          "code": 3212171,
          "regencyCode": 3212,
          "name": "ARAHAN"
        },
        {
          "code": 3212180,
          "regencyCode": 3212,
          "name": "LOSARANG"
        },
        {
          "code": 3212190,
          "regencyCode": 3212,
          "name": "KANDANGHAUR"
        },
        {
          "code": 3212200,
          "regencyCode": 3212,
          "name": "BONGAS"
        },
        {
          "code": 3212210,
          "regencyCode": 3212,
          "name": "ANJATAN"
        },
        {
          "code": 3212220,
          "regencyCode": 3212,
          "name": "SUKRA"
        },
        {
          "code": 3212221,
          "regencyCode": 3212,
          "name": "PATROL"
        },
        {
          "code": 3213010,
          "regencyCode": 3213,
          "name": "SAGALAHERANG"
        },
        {
          "code": 3213011,
          "regencyCode": 3213,
          "name": "SERANGPANJANG"
        },
        {
          "code": 3213020,
          "regencyCode": 3213,
          "name": "JALANCAGAK"
        },
        {
          "code": 3213021,
          "regencyCode": 3213,
          "name": "CIATER"
        },
        {
          "code": 3213030,
          "regencyCode": 3213,
          "name": "CISALAK"
        },
        {
          "code": 3213031,
          "regencyCode": 3213,
          "name": "KASOMALANG"
        },
        {
          "code": 3213040,
          "regencyCode": 3213,
          "name": "TANJUNGSIANG"
        },
        {
          "code": 3213050,
          "regencyCode": 3213,
          "name": "CIJAMBE"
        },
        {
          "code": 3213060,
          "regencyCode": 3213,
          "name": "CIBOGO"
        },
        {
          "code": 3213070,
          "regencyCode": 3213,
          "name": "SUBANG"
        },
        {
          "code": 3213080,
          "regencyCode": 3213,
          "name": "KALIJATI"
        },
        {
          "code": 3213081,
          "regencyCode": 3213,
          "name": "DAWUAN"
        },
        {
          "code": 3213090,
          "regencyCode": 3213,
          "name": "CIPEUNDEUY"
        },
        {
          "code": 3213100,
          "regencyCode": 3213,
          "name": "PABUARAN"
        },
        {
          "code": 3213110,
          "regencyCode": 3213,
          "name": "PATOKBEUSI"
        },
        {
          "code": 3213120,
          "regencyCode": 3213,
          "name": "PURWADADI"
        },
        {
          "code": 3213130,
          "regencyCode": 3213,
          "name": "CIKAUM"
        },
        {
          "code": 3213140,
          "regencyCode": 3213,
          "name": "PAGADEN"
        },
        {
          "code": 3213141,
          "regencyCode": 3213,
          "name": "PAGADEN BARAT"
        },
        {
          "code": 3213150,
          "regencyCode": 3213,
          "name": "CIPUNAGARA"
        },
        {
          "code": 3213160,
          "regencyCode": 3213,
          "name": "COMPRENG"
        },
        {
          "code": 3213170,
          "regencyCode": 3213,
          "name": "BINONG"
        },
        {
          "code": 3213171,
          "regencyCode": 3213,
          "name": "TAMBAKDAHAN"
        },
        {
          "code": 3213180,
          "regencyCode": 3213,
          "name": "CIASEM"
        },
        {
          "code": 3213190,
          "regencyCode": 3213,
          "name": "PAMANUKAN"
        },
        {
          "code": 3213191,
          "regencyCode": 3213,
          "name": "SUKASARI"
        },
        {
          "code": 3213200,
          "regencyCode": 3213,
          "name": "PUSAKANAGARA"
        },
        {
          "code": 3213201,
          "regencyCode": 3213,
          "name": "PUSAKAJAYA"
        },
        {
          "code": 3213210,
          "regencyCode": 3213,
          "name": "LEGONKULON"
        },
        {
          "code": 3213220,
          "regencyCode": 3213,
          "name": "BLANAKAN"
        },
        {
          "code": 3214010,
          "regencyCode": 3214,
          "name": "JATILUHUR"
        },
        {
          "code": 3214011,
          "regencyCode": 3214,
          "name": "SUKASARI"
        },
        {
          "code": 3214020,
          "regencyCode": 3214,
          "name": "MANIIS"
        },
        {
          "code": 3214030,
          "regencyCode": 3214,
          "name": "TEGAL WARU"
        },
        {
          "code": 3214040,
          "regencyCode": 3214,
          "name": "PLERED"
        },
        {
          "code": 3214050,
          "regencyCode": 3214,
          "name": "SUKATANI"
        },
        {
          "code": 3214060,
          "regencyCode": 3214,
          "name": "DARANGDAN"
        },
        {
          "code": 3214070,
          "regencyCode": 3214,
          "name": "BOJONG"
        },
        {
          "code": 3214080,
          "regencyCode": 3214,
          "name": "WANAYASA"
        },
        {
          "code": 3214081,
          "regencyCode": 3214,
          "name": "KIARAPEDES"
        },
        {
          "code": 3214090,
          "regencyCode": 3214,
          "name": "PASAWAHAN"
        },
        {
          "code": 3214091,
          "regencyCode": 3214,
          "name": "PONDOK SALAM"
        },
        {
          "code": 3214100,
          "regencyCode": 3214,
          "name": "PURWAKARTA"
        },
        {
          "code": 3214101,
          "regencyCode": 3214,
          "name": "BABAKANCIKAO"
        },
        {
          "code": 3214110,
          "regencyCode": 3214,
          "name": "CAMPAKA"
        },
        {
          "code": 3214111,
          "regencyCode": 3214,
          "name": "CIBATU"
        },
        {
          "code": 3214112,
          "regencyCode": 3214,
          "name": "BUNGURSARI"
        },
        {
          "code": 3215010,
          "regencyCode": 3215,
          "name": "PANGKALAN"
        },
        {
          "code": 3215011,
          "regencyCode": 3215,
          "name": "TEGALWARU"
        },
        {
          "code": 3215020,
          "regencyCode": 3215,
          "name": "CIAMPEL"
        },
        {
          "code": 3215031,
          "regencyCode": 3215,
          "name": "TELUKJAMBE TIMUR"
        },
        {
          "code": 3215032,
          "regencyCode": 3215,
          "name": "TELUKJAMBE BARAT"
        },
        {
          "code": 3215040,
          "regencyCode": 3215,
          "name": "KLARI"
        },
        {
          "code": 3215050,
          "regencyCode": 3215,
          "name": "CIKAMPEK"
        },
        {
          "code": 3215051,
          "regencyCode": 3215,
          "name": "PURWASARI"
        },
        {
          "code": 3215060,
          "regencyCode": 3215,
          "name": "TIRTAMULYA"
        },
        {
          "code": 3215070,
          "regencyCode": 3215,
          "name": "JATISARI"
        },
        {
          "code": 3215071,
          "regencyCode": 3215,
          "name": "BANYUSARI"
        },
        {
          "code": 3215072,
          "regencyCode": 3215,
          "name": "KOTABARU"
        },
        {
          "code": 3215081,
          "regencyCode": 3215,
          "name": "CILAMAYA WETAN"
        },
        {
          "code": 3215082,
          "regencyCode": 3215,
          "name": "CILAMAYA KULON"
        },
        {
          "code": 3215090,
          "regencyCode": 3215,
          "name": "LEMAHABANG"
        },
        {
          "code": 3215100,
          "regencyCode": 3215,
          "name": "TALAGASARI"
        },
        {
          "code": 3215111,
          "regencyCode": 3215,
          "name": "MAJALAYA"
        },
        {
          "code": 3215112,
          "regencyCode": 3215,
          "name": "KARAWANG TIMUR"
        },
        {
          "code": 3215113,
          "regencyCode": 3215,
          "name": "KARAWANG BARAT"
        },
        {
          "code": 3215120,
          "regencyCode": 3215,
          "name": "RAWAMERTA"
        },
        {
          "code": 3215130,
          "regencyCode": 3215,
          "name": "TEMPURAN"
        },
        {
          "code": 3215140,
          "regencyCode": 3215,
          "name": "KUTAWALUYA"
        },
        {
          "code": 3215150,
          "regencyCode": 3215,
          "name": "RENGASDENGKLOK"
        },
        {
          "code": 3215151,
          "regencyCode": 3215,
          "name": "JAYAKERTA"
        },
        {
          "code": 3215160,
          "regencyCode": 3215,
          "name": "PEDES"
        },
        {
          "code": 3215161,
          "regencyCode": 3215,
          "name": "CILEBAR"
        },
        {
          "code": 3215170,
          "regencyCode": 3215,
          "name": "CIBUAYA"
        },
        {
          "code": 3215180,
          "regencyCode": 3215,
          "name": "TIRTAJAYA"
        },
        {
          "code": 3215190,
          "regencyCode": 3215,
          "name": "BATUJAYA"
        },
        {
          "code": 3215200,
          "regencyCode": 3215,
          "name": "PAKISJAYA"
        },
        {
          "code": 3216010,
          "regencyCode": 3216,
          "name": "SETU"
        },
        {
          "code": 3216021,
          "regencyCode": 3216,
          "name": "SERANG BARU"
        },
        {
          "code": 3216022,
          "regencyCode": 3216,
          "name": "CIKARANG PUSAT"
        },
        {
          "code": 3216023,
          "regencyCode": 3216,
          "name": "CIKARANG SELATAN"
        },
        {
          "code": 3216030,
          "regencyCode": 3216,
          "name": "CIBARUSAH"
        },
        {
          "code": 3216031,
          "regencyCode": 3216,
          "name": "BOJONGMANGU"
        },
        {
          "code": 3216041,
          "regencyCode": 3216,
          "name": "CIKARANG TIMUR"
        },
        {
          "code": 3216050,
          "regencyCode": 3216,
          "name": "KEDUNGWARINGIN"
        },
        {
          "code": 3216061,
          "regencyCode": 3216,
          "name": "CIKARANG UTARA"
        },
        {
          "code": 3216062,
          "regencyCode": 3216,
          "name": "KARANGBAHAGIA"
        },
        {
          "code": 3216070,
          "regencyCode": 3216,
          "name": "CIBITUNG"
        },
        {
          "code": 3216071,
          "regencyCode": 3216,
          "name": "CIKARANG BARAT"
        },
        {
          "code": 3216081,
          "regencyCode": 3216,
          "name": "TAMBUN SELATAN"
        },
        {
          "code": 3216082,
          "regencyCode": 3216,
          "name": "TAMBUN UTARA"
        },
        {
          "code": 3216090,
          "regencyCode": 3216,
          "name": "BABELAN"
        },
        {
          "code": 3216100,
          "regencyCode": 3216,
          "name": "TARUMAJAYA"
        },
        {
          "code": 3216110,
          "regencyCode": 3216,
          "name": "TAMBELANG"
        },
        {
          "code": 3216111,
          "regencyCode": 3216,
          "name": "SUKAWANGI"
        },
        {
          "code": 3216120,
          "regencyCode": 3216,
          "name": "SUKATANI"
        },
        {
          "code": 3216121,
          "regencyCode": 3216,
          "name": "SUKAKARYA"
        },
        {
          "code": 3216130,
          "regencyCode": 3216,
          "name": "PEBAYURAN"
        },
        {
          "code": 3216140,
          "regencyCode": 3216,
          "name": "CABANGBUNGIN"
        },
        {
          "code": 3216150,
          "regencyCode": 3216,
          "name": "MUARA GEMBONG"
        },
        {
          "code": 3217010,
          "regencyCode": 3217,
          "name": "RONGGA"
        },
        {
          "code": 3217020,
          "regencyCode": 3217,
          "name": "GUNUNGHALU"
        },
        {
          "code": 3217030,
          "regencyCode": 3217,
          "name": "SINDANGKERTA"
        },
        {
          "code": 3217040,
          "regencyCode": 3217,
          "name": "CILILIN"
        },
        {
          "code": 3217050,
          "regencyCode": 3217,
          "name": "CIHAMPELAS"
        },
        {
          "code": 3217060,
          "regencyCode": 3217,
          "name": "CIPONGKOR"
        },
        {
          "code": 3217070,
          "regencyCode": 3217,
          "name": "BATUJAJAR"
        },
        {
          "code": 3217071,
          "regencyCode": 3217,
          "name": "SAGULING"
        },
        {
          "code": 3217080,
          "regencyCode": 3217,
          "name": "CIPATAT"
        },
        {
          "code": 3217090,
          "regencyCode": 3217,
          "name": "PADALARANG"
        },
        {
          "code": 3217100,
          "regencyCode": 3217,
          "name": "NGAMPRAH"
        },
        {
          "code": 3217110,
          "regencyCode": 3217,
          "name": "PARONGPONG"
        },
        {
          "code": 3217120,
          "regencyCode": 3217,
          "name": "LEMBANG"
        },
        {
          "code": 3217130,
          "regencyCode": 3217,
          "name": "CISARUA"
        },
        {
          "code": 3217140,
          "regencyCode": 3217,
          "name": "CIKALONG WETAN"
        },
        {
          "code": 3217150,
          "regencyCode": 3217,
          "name": "CIPEUNDEUY"
        },
        {
          "code": 3218010,
          "regencyCode": 3218,
          "name": "CIMERAK"
        },
        {
          "code": 3218020,
          "regencyCode": 3218,
          "name": "CIJULANG"
        },
        {
          "code": 3218030,
          "regencyCode": 3218,
          "name": "CIGUGUR"
        },
        {
          "code": 3218040,
          "regencyCode": 3218,
          "name": "LANGKAPLANCAR"
        },
        {
          "code": 3218050,
          "regencyCode": 3218,
          "name": "PARIGI"
        },
        {
          "code": 3218060,
          "regencyCode": 3218,
          "name": "SIDAMULIH"
        },
        {
          "code": 3218070,
          "regencyCode": 3218,
          "name": "PANGANDARAN"
        },
        {
          "code": 3218080,
          "regencyCode": 3218,
          "name": "KALIPUCANG"
        },
        {
          "code": 3218090,
          "regencyCode": 3218,
          "name": "PADAHERANG"
        },
        {
          "code": 3218100,
          "regencyCode": 3218,
          "name": "MANGUNJAYA"
        },
        {
          "code": 3271010,
          "regencyCode": 3271,
          "name": "BOGOR SELATAN"
        },
        {
          "code": 3271020,
          "regencyCode": 3271,
          "name": "BOGOR TIMUR"
        },
        {
          "code": 3271030,
          "regencyCode": 3271,
          "name": "BOGOR UTARA"
        },
        {
          "code": 3271040,
          "regencyCode": 3271,
          "name": "BOGOR TENGAH"
        },
        {
          "code": 3271050,
          "regencyCode": 3271,
          "name": "BOGOR BARAT"
        },
        {
          "code": 3271060,
          "regencyCode": 3271,
          "name": "TANAH SEREAL"
        },
        {
          "code": 3272010,
          "regencyCode": 3272,
          "name": "BAROS"
        },
        {
          "code": 3272011,
          "regencyCode": 3272,
          "name": "LEMBURSITU"
        },
        {
          "code": 3272012,
          "regencyCode": 3272,
          "name": "CIBEUREUM"
        },
        {
          "code": 3272020,
          "regencyCode": 3272,
          "name": "CITAMIANG"
        },
        {
          "code": 3272030,
          "regencyCode": 3272,
          "name": "WARUDOYONG"
        },
        {
          "code": 3272040,
          "regencyCode": 3272,
          "name": "GUNUNG PUYUH"
        },
        {
          "code": 3272050,
          "regencyCode": 3272,
          "name": "CIKOLE"
        },
        {
          "code": 3273010,
          "regencyCode": 3273,
          "name": "BANDUNG KULON"
        },
        {
          "code": 3273020,
          "regencyCode": 3273,
          "name": "BABAKAN CIPARAY"
        },
        {
          "code": 3273030,
          "regencyCode": 3273,
          "name": "BOJONGLOA KALER"
        },
        {
          "code": 3273040,
          "regencyCode": 3273,
          "name": "BOJONGLOA KIDUL"
        },
        {
          "code": 3273050,
          "regencyCode": 3273,
          "name": "ASTANAANYAR"
        },
        {
          "code": 3273060,
          "regencyCode": 3273,
          "name": "REGOL"
        },
        {
          "code": 3273070,
          "regencyCode": 3273,
          "name": "LENGKONG"
        },
        {
          "code": 3273080,
          "regencyCode": 3273,
          "name": "BANDUNG KIDUL"
        },
        {
          "code": 3273090,
          "regencyCode": 3273,
          "name": "BUAHBATU"
        },
        {
          "code": 3273100,
          "regencyCode": 3273,
          "name": "RANCASARI"
        },
        {
          "code": 3273101,
          "regencyCode": 3273,
          "name": "GEDEBAGE"
        },
        {
          "code": 3273110,
          "regencyCode": 3273,
          "name": "CIBIRU"
        },
        {
          "code": 3273111,
          "regencyCode": 3273,
          "name": "PANYILEUKAN"
        },
        {
          "code": 3273120,
          "regencyCode": 3273,
          "name": "UJUNG BERUNG"
        },
        {
          "code": 3273121,
          "regencyCode": 3273,
          "name": "CINAMBO"
        },
        {
          "code": 3273130,
          "regencyCode": 3273,
          "name": "ARCAMANIK"
        },
        {
          "code": 3273141,
          "regencyCode": 3273,
          "name": "ANTAPANI"
        },
        {
          "code": 3273142,
          "regencyCode": 3273,
          "name": "MANDALAJATI"
        },
        {
          "code": 3273150,
          "regencyCode": 3273,
          "name": "KIARACONDONG"
        },
        {
          "code": 3273160,
          "regencyCode": 3273,
          "name": "BATUNUNGGAL"
        },
        {
          "code": 3273170,
          "regencyCode": 3273,
          "name": "SUMUR BANDUNG"
        },
        {
          "code": 3273180,
          "regencyCode": 3273,
          "name": "ANDIR"
        },
        {
          "code": 3273190,
          "regencyCode": 3273,
          "name": "CICENDO"
        },
        {
          "code": 3273200,
          "regencyCode": 3273,
          "name": "BANDUNG WETAN"
        },
        {
          "code": 3273210,
          "regencyCode": 3273,
          "name": "CIBEUNYING KIDUL"
        },
        {
          "code": 3273220,
          "regencyCode": 3273,
          "name": "CIBEUNYING KALER"
        },
        {
          "code": 3273230,
          "regencyCode": 3273,
          "name": "COBLONG"
        },
        {
          "code": 3273240,
          "regencyCode": 3273,
          "name": "SUKAJADI"
        },
        {
          "code": 3273250,
          "regencyCode": 3273,
          "name": "SUKASARI"
        },
        {
          "code": 3273260,
          "regencyCode": 3273,
          "name": "CIDADAP"
        },
        {
          "code": 3274010,
          "regencyCode": 3274,
          "name": "HARJAMUKTI"
        },
        {
          "code": 3274020,
          "regencyCode": 3274,
          "name": "LEMAHWUNGKUK"
        },
        {
          "code": 3274030,
          "regencyCode": 3274,
          "name": "PEKALIPAN"
        },
        {
          "code": 3274040,
          "regencyCode": 3274,
          "name": "KESAMBI"
        },
        {
          "code": 3274050,
          "regencyCode": 3274,
          "name": "KEJAKSAN"
        },
        {
          "code": 3275010,
          "regencyCode": 3275,
          "name": "PONDOKGEDE"
        },
        {
          "code": 3275011,
          "regencyCode": 3275,
          "name": "JATISAMPURNA"
        },
        {
          "code": 3275012,
          "regencyCode": 3275,
          "name": "PONDOKMELATI"
        },
        {
          "code": 3275020,
          "regencyCode": 3275,
          "name": "JATIASIH"
        },
        {
          "code": 3275030,
          "regencyCode": 3275,
          "name": "BANTARGEBANG"
        },
        {
          "code": 3275031,
          "regencyCode": 3275,
          "name": "MUSTIKAJAYA"
        },
        {
          "code": 3275040,
          "regencyCode": 3275,
          "name": "BEKASI TIMUR"
        },
        {
          "code": 3275041,
          "regencyCode": 3275,
          "name": "RAWALUMBU"
        },
        {
          "code": 3275050,
          "regencyCode": 3275,
          "name": "BEKASI SELATAN"
        },
        {
          "code": 3275060,
          "regencyCode": 3275,
          "name": "BEKASI BARAT"
        },
        {
          "code": 3275061,
          "regencyCode": 3275,
          "name": "MEDAN SATRIA"
        },
        {
          "code": 3275070,
          "regencyCode": 3275,
          "name": "BEKASI UTARA"
        },
        {
          "code": 3276010,
          "regencyCode": 3276,
          "name": "SAWANGAN"
        },
        {
          "code": 3276011,
          "regencyCode": 3276,
          "name": "BOJONGSARI"
        },
        {
          "code": 3276020,
          "regencyCode": 3276,
          "name": "PANCORAN MAS"
        },
        {
          "code": 3276021,
          "regencyCode": 3276,
          "name": "CIPAYUNG"
        },
        {
          "code": 3276030,
          "regencyCode": 3276,
          "name": "SUKMA JAYA"
        },
        {
          "code": 3276031,
          "regencyCode": 3276,
          "name": "CILODONG"
        },
        {
          "code": 3276040,
          "regencyCode": 3276,
          "name": "CIMANGGIS"
        },
        {
          "code": 3276041,
          "regencyCode": 3276,
          "name": "TAPOS"
        },
        {
          "code": 3276050,
          "regencyCode": 3276,
          "name": "BEJI"
        },
        {
          "code": 3276060,
          "regencyCode": 3276,
          "name": "LIMO"
        },
        {
          "code": 3276061,
          "regencyCode": 3276,
          "name": "CINERE"
        },
        {
          "code": 3277010,
          "regencyCode": 3277,
          "name": "CIMAHI SELATAN"
        },
        {
          "code": 3277020,
          "regencyCode": 3277,
          "name": "CIMAHI TENGAH"
        },
        {
          "code": 3277030,
          "regencyCode": 3277,
          "name": "CIMAHI UTARA"
        },
        {
          "code": 3278010,
          "regencyCode": 3278,
          "name": "KAWALU"
        },
        {
          "code": 3278020,
          "regencyCode": 3278,
          "name": "TAMANSARI"
        },
        {
          "code": 3278030,
          "regencyCode": 3278,
          "name": "CIBEUREUM"
        },
        {
          "code": 3278031,
          "regencyCode": 3278,
          "name": "PURBARATU"
        },
        {
          "code": 3278040,
          "regencyCode": 3278,
          "name": "TAWANG"
        },
        {
          "code": 3278050,
          "regencyCode": 3278,
          "name": "CIHIDEUNG"
        },
        {
          "code": 3278060,
          "regencyCode": 3278,
          "name": "MANGKUBUMI"
        },
        {
          "code": 3278070,
          "regencyCode": 3278,
          "name": "INDIHIANG"
        },
        {
          "code": 3278071,
          "regencyCode": 3278,
          "name": "BUNGURSARI"
        },
        {
          "code": 3278080,
          "regencyCode": 3278,
          "name": "CIPEDES"
        },
        {
          "code": 3279010,
          "regencyCode": 3279,
          "name": "BANJAR"
        },
        {
          "code": 3279020,
          "regencyCode": 3279,
          "name": "PURWAHARJA"
        },
        {
          "code": 3279030,
          "regencyCode": 3279,
          "name": "PATARUMAN"
        },
        {
          "code": 3279040,
          "regencyCode": 3279,
          "name": "LANGENSARI"
        },
        {
          "code": 3301010,
          "regencyCode": 3301,
          "name": "DAYEUHLUHUR"
        },
        {
          "code": 3301020,
          "regencyCode": 3301,
          "name": "WANAREJA"
        },
        {
          "code": 3301030,
          "regencyCode": 3301,
          "name": "MAJENANG"
        },
        {
          "code": 3301040,
          "regencyCode": 3301,
          "name": "CIMANGGU"
        },
        {
          "code": 3301050,
          "regencyCode": 3301,
          "name": "KARANGPUCUNG"
        },
        {
          "code": 3301060,
          "regencyCode": 3301,
          "name": "CIPARI"
        },
        {
          "code": 3301070,
          "regencyCode": 3301,
          "name": "SIDAREJA"
        },
        {
          "code": 3301080,
          "regencyCode": 3301,
          "name": "KEDUNGREJA"
        },
        {
          "code": 3301090,
          "regencyCode": 3301,
          "name": "PATIMUAN"
        },
        {
          "code": 3301100,
          "regencyCode": 3301,
          "name": "GANDRUNGMANGU"
        },
        {
          "code": 3301110,
          "regencyCode": 3301,
          "name": "BANTARSARI"
        },
        {
          "code": 3301120,
          "regencyCode": 3301,
          "name": "KAWUNGANTEN"
        },
        {
          "code": 3301121,
          "regencyCode": 3301,
          "name": "KAMPUNG LAUT"
        },
        {
          "code": 3301130,
          "regencyCode": 3301,
          "name": "JERUKLEGI"
        },
        {
          "code": 3301140,
          "regencyCode": 3301,
          "name": "KESUGIHAN"
        },
        {
          "code": 3301150,
          "regencyCode": 3301,
          "name": "ADIPALA"
        },
        {
          "code": 3301160,
          "regencyCode": 3301,
          "name": "MAOS"
        },
        {
          "code": 3301170,
          "regencyCode": 3301,
          "name": "SAMPANG"
        },
        {
          "code": 3301180,
          "regencyCode": 3301,
          "name": "KROYA"
        },
        {
          "code": 3301190,
          "regencyCode": 3301,
          "name": "BINANGUN"
        },
        {
          "code": 3301200,
          "regencyCode": 3301,
          "name": "NUSAWUNGU"
        },
        {
          "code": 3301710,
          "regencyCode": 3301,
          "name": "CILACAP SELATAN"
        },
        {
          "code": 3301720,
          "regencyCode": 3301,
          "name": "CILACAP TENGAH"
        },
        {
          "code": 3301730,
          "regencyCode": 3301,
          "name": "CILACAP UTARA"
        },
        {
          "code": 3302010,
          "regencyCode": 3302,
          "name": "LUMBIR"
        },
        {
          "code": 3302020,
          "regencyCode": 3302,
          "name": "WANGON"
        },
        {
          "code": 3302030,
          "regencyCode": 3302,
          "name": "JATILAWANG"
        },
        {
          "code": 3302040,
          "regencyCode": 3302,
          "name": "RAWALO"
        },
        {
          "code": 3302050,
          "regencyCode": 3302,
          "name": "KEBASEN"
        },
        {
          "code": 3302060,
          "regencyCode": 3302,
          "name": "KEMRANJEN"
        },
        {
          "code": 3302070,
          "regencyCode": 3302,
          "name": "SUMPIUH"
        },
        {
          "code": 3302080,
          "regencyCode": 3302,
          "name": "TAMBAK"
        },
        {
          "code": 3302090,
          "regencyCode": 3302,
          "name": "SOMAGEDE"
        },
        {
          "code": 3302100,
          "regencyCode": 3302,
          "name": "KALIBAGOR"
        },
        {
          "code": 3302110,
          "regencyCode": 3302,
          "name": "BANYUMAS"
        },
        {
          "code": 3302120,
          "regencyCode": 3302,
          "name": "PATIKRAJA"
        },
        {
          "code": 3302130,
          "regencyCode": 3302,
          "name": "PURWOJATI"
        },
        {
          "code": 3302140,
          "regencyCode": 3302,
          "name": "AJIBARANG"
        },
        {
          "code": 3302150,
          "regencyCode": 3302,
          "name": "GUMELAR"
        },
        {
          "code": 3302160,
          "regencyCode": 3302,
          "name": "PEKUNCEN"
        },
        {
          "code": 3302170,
          "regencyCode": 3302,
          "name": "CILONGOK"
        },
        {
          "code": 3302180,
          "regencyCode": 3302,
          "name": "KARANGLEWAS"
        },
        {
          "code": 3302190,
          "regencyCode": 3302,
          "name": "KEDUNG BANTENG"
        },
        {
          "code": 3302200,
          "regencyCode": 3302,
          "name": "BATURRADEN"
        },
        {
          "code": 3302210,
          "regencyCode": 3302,
          "name": "SUMBANG"
        },
        {
          "code": 3302220,
          "regencyCode": 3302,
          "name": "KEMBARAN"
        },
        {
          "code": 3302230,
          "regencyCode": 3302,
          "name": "SOKARAJA"
        },
        {
          "code": 3302710,
          "regencyCode": 3302,
          "name": "PURWOKERTO SELATAN"
        },
        {
          "code": 3302720,
          "regencyCode": 3302,
          "name": "PURWOKERTO BARAT"
        },
        {
          "code": 3302730,
          "regencyCode": 3302,
          "name": "PURWOKERTO TIMUR"
        },
        {
          "code": 3302740,
          "regencyCode": 3302,
          "name": "PURWOKERTO UTARA"
        },
        {
          "code": 3303010,
          "regencyCode": 3303,
          "name": "KEMANGKON"
        },
        {
          "code": 3303020,
          "regencyCode": 3303,
          "name": "BUKATEJA"
        },
        {
          "code": 3303030,
          "regencyCode": 3303,
          "name": "KEJOBONG"
        },
        {
          "code": 3303040,
          "regencyCode": 3303,
          "name": "PENGADEGAN"
        },
        {
          "code": 3303050,
          "regencyCode": 3303,
          "name": "KALIGONDANG"
        },
        {
          "code": 3303060,
          "regencyCode": 3303,
          "name": "PURBALINGGA"
        },
        {
          "code": 3303070,
          "regencyCode": 3303,
          "name": "KALIMANAH"
        },
        {
          "code": 3303080,
          "regencyCode": 3303,
          "name": "PADAMARA"
        },
        {
          "code": 3303090,
          "regencyCode": 3303,
          "name": "KUTASARI"
        },
        {
          "code": 3303100,
          "regencyCode": 3303,
          "name": "BOJONGSARI"
        },
        {
          "code": 3303110,
          "regencyCode": 3303,
          "name": "MREBET"
        },
        {
          "code": 3303120,
          "regencyCode": 3303,
          "name": "BOBOTSARI"
        },
        {
          "code": 3303130,
          "regencyCode": 3303,
          "name": "KARANGREJA"
        },
        {
          "code": 3303131,
          "regencyCode": 3303,
          "name": "KARANGJAMBU"
        },
        {
          "code": 3303140,
          "regencyCode": 3303,
          "name": "KARANGANYAR"
        },
        {
          "code": 3303141,
          "regencyCode": 3303,
          "name": "KERTANEGARA"
        },
        {
          "code": 3303150,
          "regencyCode": 3303,
          "name": "KARANGMONCOL"
        },
        {
          "code": 3303160,
          "regencyCode": 3303,
          "name": "REMBANG"
        },
        {
          "code": 3304010,
          "regencyCode": 3304,
          "name": "SUSUKAN"
        },
        {
          "code": 3304020,
          "regencyCode": 3304,
          "name": "PURWAREJA KLAMPOK"
        },
        {
          "code": 3304030,
          "regencyCode": 3304,
          "name": "MANDIRAJA"
        },
        {
          "code": 3304040,
          "regencyCode": 3304,
          "name": "PURWANEGARA"
        },
        {
          "code": 3304050,
          "regencyCode": 3304,
          "name": "BAWANG"
        },
        {
          "code": 3304060,
          "regencyCode": 3304,
          "name": "BANJARNEGARA"
        },
        {
          "code": 3304061,
          "regencyCode": 3304,
          "name": "PAGEDONGAN"
        },
        {
          "code": 3304070,
          "regencyCode": 3304,
          "name": "SIGALUH"
        },
        {
          "code": 3304080,
          "regencyCode": 3304,
          "name": "MADUKARA"
        },
        {
          "code": 3304090,
          "regencyCode": 3304,
          "name": "BANJARMANGU"
        },
        {
          "code": 3304100,
          "regencyCode": 3304,
          "name": "WANADADI"
        },
        {
          "code": 3304110,
          "regencyCode": 3304,
          "name": "RAKIT"
        },
        {
          "code": 3304120,
          "regencyCode": 3304,
          "name": "PUNGGELAN"
        },
        {
          "code": 3304130,
          "regencyCode": 3304,
          "name": "KARANGKOBAR"
        },
        {
          "code": 3304140,
          "regencyCode": 3304,
          "name": "PAGENTAN"
        },
        {
          "code": 3304150,
          "regencyCode": 3304,
          "name": "PEJAWARAN"
        },
        {
          "code": 3304160,
          "regencyCode": 3304,
          "name": "BATUR"
        },
        {
          "code": 3304170,
          "regencyCode": 3304,
          "name": "WANAYASA"
        },
        {
          "code": 3304180,
          "regencyCode": 3304,
          "name": "KALIBENING"
        },
        {
          "code": 3304181,
          "regencyCode": 3304,
          "name": "PANDANARUM"
        },
        {
          "code": 3305010,
          "regencyCode": 3305,
          "name": "AYAH"
        },
        {
          "code": 3305020,
          "regencyCode": 3305,
          "name": "BUAYAN"
        },
        {
          "code": 3305030,
          "regencyCode": 3305,
          "name": "PURING"
        },
        {
          "code": 3305040,
          "regencyCode": 3305,
          "name": "PETANAHAN"
        },
        {
          "code": 3305050,
          "regencyCode": 3305,
          "name": "KLIRONG"
        },
        {
          "code": 3305060,
          "regencyCode": 3305,
          "name": "BULUSPESANTREN"
        },
        {
          "code": 3305070,
          "regencyCode": 3305,
          "name": "AMBAL"
        },
        {
          "code": 3305080,
          "regencyCode": 3305,
          "name": "MIRIT"
        },
        {
          "code": 3305081,
          "regencyCode": 3305,
          "name": "BONOROWO"
        },
        {
          "code": 3305090,
          "regencyCode": 3305,
          "name": "PREMBUN"
        },
        {
          "code": 3305091,
          "regencyCode": 3305,
          "name": "PADURESO"
        },
        {
          "code": 3305100,
          "regencyCode": 3305,
          "name": "KUTOWINANGUN"
        },
        {
          "code": 3305110,
          "regencyCode": 3305,
          "name": "ALIAN"
        },
        {
          "code": 3305111,
          "regencyCode": 3305,
          "name": "PONCOWARNO"
        },
        {
          "code": 3305120,
          "regencyCode": 3305,
          "name": "KEBUMEN"
        },
        {
          "code": 3305130,
          "regencyCode": 3305,
          "name": "PEJAGOAN"
        },
        {
          "code": 3305140,
          "regencyCode": 3305,
          "name": "SRUWENG"
        },
        {
          "code": 3305150,
          "regencyCode": 3305,
          "name": "ADIMULYO"
        },
        {
          "code": 3305160,
          "regencyCode": 3305,
          "name": "KUWARASAN"
        },
        {
          "code": 3305170,
          "regencyCode": 3305,
          "name": "ROWOKELE"
        },
        {
          "code": 3305180,
          "regencyCode": 3305,
          "name": "SEMPOR"
        },
        {
          "code": 3305190,
          "regencyCode": 3305,
          "name": "GOMBONG"
        },
        {
          "code": 3305200,
          "regencyCode": 3305,
          "name": "KARANGANYAR"
        },
        {
          "code": 3305210,
          "regencyCode": 3305,
          "name": "KARANGGAYAM"
        },
        {
          "code": 3305220,
          "regencyCode": 3305,
          "name": "SADANG"
        },
        {
          "code": 3305221,
          "regencyCode": 3305,
          "name": "KARANGSAMBUNG"
        },
        {
          "code": 3306010,
          "regencyCode": 3306,
          "name": "GRABAG"
        },
        {
          "code": 3306020,
          "regencyCode": 3306,
          "name": "NGOMBOL"
        },
        {
          "code": 3306030,
          "regencyCode": 3306,
          "name": "PURWODADI"
        },
        {
          "code": 3306040,
          "regencyCode": 3306,
          "name": "BAGELEN"
        },
        {
          "code": 3306050,
          "regencyCode": 3306,
          "name": "KALIGESING"
        },
        {
          "code": 3306060,
          "regencyCode": 3306,
          "name": "PURWOREJO"
        },
        {
          "code": 3306070,
          "regencyCode": 3306,
          "name": "BANYU URIP"
        },
        {
          "code": 3306080,
          "regencyCode": 3306,
          "name": "BAYAN"
        },
        {
          "code": 3306090,
          "regencyCode": 3306,
          "name": "KUTOARJO"
        },
        {
          "code": 3306100,
          "regencyCode": 3306,
          "name": "BUTUH"
        },
        {
          "code": 3306110,
          "regencyCode": 3306,
          "name": "PITURUH"
        },
        {
          "code": 3306120,
          "regencyCode": 3306,
          "name": "KEMIRI"
        },
        {
          "code": 3306130,
          "regencyCode": 3306,
          "name": "BRUNO"
        },
        {
          "code": 3306140,
          "regencyCode": 3306,
          "name": "GEBANG"
        },
        {
          "code": 3306150,
          "regencyCode": 3306,
          "name": "LOANO"
        },
        {
          "code": 3306160,
          "regencyCode": 3306,
          "name": "BENER"
        },
        {
          "code": 3307010,
          "regencyCode": 3307,
          "name": "WADASLINTANG"
        },
        {
          "code": 3307020,
          "regencyCode": 3307,
          "name": "KEPIL"
        },
        {
          "code": 3307030,
          "regencyCode": 3307,
          "name": "SAPURAN"
        },
        {
          "code": 3307031,
          "regencyCode": 3307,
          "name": "KALIBAWANG"
        },
        {
          "code": 3307040,
          "regencyCode": 3307,
          "name": "KALIWIRO"
        },
        {
          "code": 3307050,
          "regencyCode": 3307,
          "name": "LEKSONO"
        },
        {
          "code": 3307051,
          "regencyCode": 3307,
          "name": "SUKOHARJO"
        },
        {
          "code": 3307060,
          "regencyCode": 3307,
          "name": "SELOMERTO"
        },
        {
          "code": 3307070,
          "regencyCode": 3307,
          "name": "KALIKAJAR"
        },
        {
          "code": 3307080,
          "regencyCode": 3307,
          "name": "KERTEK"
        },
        {
          "code": 3307090,
          "regencyCode": 3307,
          "name": "WONOSOBO"
        },
        {
          "code": 3307100,
          "regencyCode": 3307,
          "name": "WATUMALANG"
        },
        {
          "code": 3307110,
          "regencyCode": 3307,
          "name": "MOJOTENGAH"
        },
        {
          "code": 3307120,
          "regencyCode": 3307,
          "name": "GARUNG"
        },
        {
          "code": 3307130,
          "regencyCode": 3307,
          "name": "KEJAJAR"
        },
        {
          "code": 3308010,
          "regencyCode": 3308,
          "name": "SALAMAN"
        },
        {
          "code": 3308020,
          "regencyCode": 3308,
          "name": "BOROBUDUR"
        },
        {
          "code": 3308030,
          "regencyCode": 3308,
          "name": "NGLUWAR"
        },
        {
          "code": 3308040,
          "regencyCode": 3308,
          "name": "SALAM"
        },
        {
          "code": 3308050,
          "regencyCode": 3308,
          "name": "SRUMBUNG"
        },
        {
          "code": 3308060,
          "regencyCode": 3308,
          "name": "DUKUN"
        },
        {
          "code": 3308070,
          "regencyCode": 3308,
          "name": "MUNTILAN"
        },
        {
          "code": 3308080,
          "regencyCode": 3308,
          "name": "MUNGKID"
        },
        {
          "code": 3308090,
          "regencyCode": 3308,
          "name": "SAWANGAN"
        },
        {
          "code": 3308100,
          "regencyCode": 3308,
          "name": "CANDIMULYO"
        },
        {
          "code": 3308110,
          "regencyCode": 3308,
          "name": "MERTOYUDAN"
        },
        {
          "code": 3308120,
          "regencyCode": 3308,
          "name": "TEMPURAN"
        },
        {
          "code": 3308130,
          "regencyCode": 3308,
          "name": "KAJORAN"
        },
        {
          "code": 3308140,
          "regencyCode": 3308,
          "name": "KALIANGKRIK"
        },
        {
          "code": 3308150,
          "regencyCode": 3308,
          "name": "BANDONGAN"
        },
        {
          "code": 3308160,
          "regencyCode": 3308,
          "name": "WINDUSARI"
        },
        {
          "code": 3308170,
          "regencyCode": 3308,
          "name": "SECANG"
        },
        {
          "code": 3308180,
          "regencyCode": 3308,
          "name": "TEGALREJO"
        },
        {
          "code": 3308190,
          "regencyCode": 3308,
          "name": "PAKIS"
        },
        {
          "code": 3308200,
          "regencyCode": 3308,
          "name": "GRABAG"
        },
        {
          "code": 3308210,
          "regencyCode": 3308,
          "name": "NGABLAK"
        },
        {
          "code": 3309010,
          "regencyCode": 3309,
          "name": "SELO"
        },
        {
          "code": 3309020,
          "regencyCode": 3309,
          "name": "AMPEL"
        },
        {
          "code": 3309030,
          "regencyCode": 3309,
          "name": "CEPOGO"
        },
        {
          "code": 3309040,
          "regencyCode": 3309,
          "name": "MUSUK"
        },
        {
          "code": 3309050,
          "regencyCode": 3309,
          "name": "BOYOLALI"
        },
        {
          "code": 3309060,
          "regencyCode": 3309,
          "name": "MOJOSONGO"
        },
        {
          "code": 3309070,
          "regencyCode": 3309,
          "name": "TERAS"
        },
        {
          "code": 3309080,
          "regencyCode": 3309,
          "name": "SAWIT"
        },
        {
          "code": 3309090,
          "regencyCode": 3309,
          "name": "BANYUDONO"
        },
        {
          "code": 3309100,
          "regencyCode": 3309,
          "name": "SAMBI"
        },
        {
          "code": 3309110,
          "regencyCode": 3309,
          "name": "NGEMPLAK"
        },
        {
          "code": 3309120,
          "regencyCode": 3309,
          "name": "NOGOSARI"
        },
        {
          "code": 3309130,
          "regencyCode": 3309,
          "name": "SIMO"
        },
        {
          "code": 3309140,
          "regencyCode": 3309,
          "name": "KARANGGEDE"
        },
        {
          "code": 3309150,
          "regencyCode": 3309,
          "name": "KLEGO"
        },
        {
          "code": 3309160,
          "regencyCode": 3309,
          "name": "ANDONG"
        },
        {
          "code": 3309170,
          "regencyCode": 3309,
          "name": "KEMUSU"
        },
        {
          "code": 3309180,
          "regencyCode": 3309,
          "name": "WONOSEGORO"
        },
        {
          "code": 3309190,
          "regencyCode": 3309,
          "name": "JUWANGI"
        },
        {
          "code": 3310010,
          "regencyCode": 3310,
          "name": "PRAMBANAN"
        },
        {
          "code": 3310020,
          "regencyCode": 3310,
          "name": "GANTIWARNO"
        },
        {
          "code": 3310030,
          "regencyCode": 3310,
          "name": "WEDI"
        },
        {
          "code": 3310040,
          "regencyCode": 3310,
          "name": "BAYAT"
        },
        {
          "code": 3310050,
          "regencyCode": 3310,
          "name": "CAWAS"
        },
        {
          "code": 3310060,
          "regencyCode": 3310,
          "name": "TRUCUK"
        },
        {
          "code": 3310070,
          "regencyCode": 3310,
          "name": "KALIKOTES"
        },
        {
          "code": 3310080,
          "regencyCode": 3310,
          "name": "KEBONARUM"
        },
        {
          "code": 3310090,
          "regencyCode": 3310,
          "name": "JOGONALAN"
        },
        {
          "code": 3310100,
          "regencyCode": 3310,
          "name": "MANISRENGGO"
        },
        {
          "code": 3310110,
          "regencyCode": 3310,
          "name": "KARANGNONGKO"
        },
        {
          "code": 3310120,
          "regencyCode": 3310,
          "name": "NGAWEN"
        },
        {
          "code": 3310130,
          "regencyCode": 3310,
          "name": "CEPER"
        },
        {
          "code": 3310140,
          "regencyCode": 3310,
          "name": "PEDAN"
        },
        {
          "code": 3310150,
          "regencyCode": 3310,
          "name": "KARANGDOWO"
        },
        {
          "code": 3310160,
          "regencyCode": 3310,
          "name": "JUWIRING"
        },
        {
          "code": 3310170,
          "regencyCode": 3310,
          "name": "WONOSARI"
        },
        {
          "code": 3310180,
          "regencyCode": 3310,
          "name": "DELANGGU"
        },
        {
          "code": 3310190,
          "regencyCode": 3310,
          "name": "POLANHARJO"
        },
        {
          "code": 3310200,
          "regencyCode": 3310,
          "name": "KARANGANOM"
        },
        {
          "code": 3310210,
          "regencyCode": 3310,
          "name": "TULUNG"
        },
        {
          "code": 3310220,
          "regencyCode": 3310,
          "name": "JATINOM"
        },
        {
          "code": 3310230,
          "regencyCode": 3310,
          "name": "KEMALANG"
        },
        {
          "code": 3310710,
          "regencyCode": 3310,
          "name": "KLATEN SELATAN"
        },
        {
          "code": 3310720,
          "regencyCode": 3310,
          "name": "KLATEN TENGAH"
        },
        {
          "code": 3310730,
          "regencyCode": 3310,
          "name": "KLATEN UTARA"
        },
        {
          "code": 3311010,
          "regencyCode": 3311,
          "name": "WERU"
        },
        {
          "code": 3311020,
          "regencyCode": 3311,
          "name": "BULU"
        },
        {
          "code": 3311030,
          "regencyCode": 3311,
          "name": "TAWANGSARI"
        },
        {
          "code": 3311040,
          "regencyCode": 3311,
          "name": "SUKOHARJO"
        },
        {
          "code": 3311050,
          "regencyCode": 3311,
          "name": "NGUTER"
        },
        {
          "code": 3311060,
          "regencyCode": 3311,
          "name": "BENDOSARI"
        },
        {
          "code": 3311070,
          "regencyCode": 3311,
          "name": "POLOKARTO"
        },
        {
          "code": 3311080,
          "regencyCode": 3311,
          "name": "MOJOLABAN"
        },
        {
          "code": 3311090,
          "regencyCode": 3311,
          "name": "GROGOL"
        },
        {
          "code": 3311100,
          "regencyCode": 3311,
          "name": "BAKI"
        },
        {
          "code": 3311110,
          "regencyCode": 3311,
          "name": "GATAK"
        },
        {
          "code": 3311120,
          "regencyCode": 3311,
          "name": "KARTASURA"
        },
        {
          "code": 3312010,
          "regencyCode": 3312,
          "name": "PRACIMANTORO"
        },
        {
          "code": 3312020,
          "regencyCode": 3312,
          "name": "PARANGGUPITO"
        },
        {
          "code": 3312030,
          "regencyCode": 3312,
          "name": "GIRITONTRO"
        },
        {
          "code": 3312040,
          "regencyCode": 3312,
          "name": "GIRIWOYO"
        },
        {
          "code": 3312050,
          "regencyCode": 3312,
          "name": "BATUWARNO"
        },
        {
          "code": 3312060,
          "regencyCode": 3312,
          "name": "KARANGTENGAH"
        },
        {
          "code": 3312070,
          "regencyCode": 3312,
          "name": "TIRTOMOYO"
        },
        {
          "code": 3312080,
          "regencyCode": 3312,
          "name": "NGUNTORONADI"
        },
        {
          "code": 3312090,
          "regencyCode": 3312,
          "name": "BATURETNO"
        },
        {
          "code": 3312100,
          "regencyCode": 3312,
          "name": "EROMOKO"
        },
        {
          "code": 3312110,
          "regencyCode": 3312,
          "name": "WURYANTORO"
        },
        {
          "code": 3312120,
          "regencyCode": 3312,
          "name": "MANYARAN"
        },
        {
          "code": 3312130,
          "regencyCode": 3312,
          "name": "SELOGIRI"
        },
        {
          "code": 3312140,
          "regencyCode": 3312,
          "name": "WONOGIRI"
        },
        {
          "code": 3312150,
          "regencyCode": 3312,
          "name": "NGADIROJO"
        },
        {
          "code": 3312160,
          "regencyCode": 3312,
          "name": "SIDOHARJO"
        },
        {
          "code": 3312170,
          "regencyCode": 3312,
          "name": "JATIROTO"
        },
        {
          "code": 3312180,
          "regencyCode": 3312,
          "name": "KISMANTORO"
        },
        {
          "code": 3312190,
          "regencyCode": 3312,
          "name": "PURWANTORO"
        },
        {
          "code": 3312200,
          "regencyCode": 3312,
          "name": "BULUKERTO"
        },
        {
          "code": 3312201,
          "regencyCode": 3312,
          "name": "PUHPELEM"
        },
        {
          "code": 3312210,
          "regencyCode": 3312,
          "name": "SLOGOHIMO"
        },
        {
          "code": 3312220,
          "regencyCode": 3312,
          "name": "JATISRONO"
        },
        {
          "code": 3312230,
          "regencyCode": 3312,
          "name": "JATIPURNO"
        },
        {
          "code": 3312240,
          "regencyCode": 3312,
          "name": "GIRIMARTO"
        },
        {
          "code": 3313010,
          "regencyCode": 3313,
          "name": "JATIPURO"
        },
        {
          "code": 3313020,
          "regencyCode": 3313,
          "name": "JATIYOSO"
        },
        {
          "code": 3313030,
          "regencyCode": 3313,
          "name": "JUMAPOLO"
        },
        {
          "code": 3313040,
          "regencyCode": 3313,
          "name": "JUMANTONO"
        },
        {
          "code": 3313050,
          "regencyCode": 3313,
          "name": "MATESIH"
        },
        {
          "code": 3313060,
          "regencyCode": 3313,
          "name": "TAWANGMANGU"
        },
        {
          "code": 3313070,
          "regencyCode": 3313,
          "name": "NGARGOYOSO"
        },
        {
          "code": 3313080,
          "regencyCode": 3313,
          "name": "KARANGPANDAN"
        },
        {
          "code": 3313090,
          "regencyCode": 3313,
          "name": "KARANGANYAR"
        },
        {
          "code": 3313100,
          "regencyCode": 3313,
          "name": "TASIKMADU"
        },
        {
          "code": 3313110,
          "regencyCode": 3313,
          "name": "JATEN"
        },
        {
          "code": 3313120,
          "regencyCode": 3313,
          "name": "COLOMADU"
        },
        {
          "code": 3313130,
          "regencyCode": 3313,
          "name": "GONDANGREJO"
        },
        {
          "code": 3313140,
          "regencyCode": 3313,
          "name": "KEBAKKRAMAT"
        },
        {
          "code": 3313150,
          "regencyCode": 3313,
          "name": "MOJOGEDANG"
        },
        {
          "code": 3313160,
          "regencyCode": 3313,
          "name": "KERJO"
        },
        {
          "code": 3313170,
          "regencyCode": 3313,
          "name": "JENAWI"
        },
        {
          "code": 3314010,
          "regencyCode": 3314,
          "name": "KALIJAMBE"
        },
        {
          "code": 3314020,
          "regencyCode": 3314,
          "name": "PLUPUH"
        },
        {
          "code": 3314030,
          "regencyCode": 3314,
          "name": "MASARAN"
        },
        {
          "code": 3314040,
          "regencyCode": 3314,
          "name": "KEDAWUNG"
        },
        {
          "code": 3314050,
          "regencyCode": 3314,
          "name": "SAMBIREJO"
        },
        {
          "code": 3314060,
          "regencyCode": 3314,
          "name": "GONDANG"
        },
        {
          "code": 3314070,
          "regencyCode": 3314,
          "name": "SAMBUNG MACAN"
        },
        {
          "code": 3314080,
          "regencyCode": 3314,
          "name": "NGRAMPAL"
        },
        {
          "code": 3314090,
          "regencyCode": 3314,
          "name": "KARANGMALANG"
        },
        {
          "code": 3314100,
          "regencyCode": 3314,
          "name": "SRAGEN"
        },
        {
          "code": 3314110,
          "regencyCode": 3314,
          "name": "SIDOHARJO"
        },
        {
          "code": 3314120,
          "regencyCode": 3314,
          "name": "TANON"
        },
        {
          "code": 3314130,
          "regencyCode": 3314,
          "name": "GEMOLONG"
        },
        {
          "code": 3314140,
          "regencyCode": 3314,
          "name": "MIRI"
        },
        {
          "code": 3314150,
          "regencyCode": 3314,
          "name": "SUMBERLAWANG"
        },
        {
          "code": 3314160,
          "regencyCode": 3314,
          "name": "MONDOKAN"
        },
        {
          "code": 3314170,
          "regencyCode": 3314,
          "name": "SUKODONO"
        },
        {
          "code": 3314180,
          "regencyCode": 3314,
          "name": "GESI"
        },
        {
          "code": 3314190,
          "regencyCode": 3314,
          "name": "TANGEN"
        },
        {
          "code": 3314200,
          "regencyCode": 3314,
          "name": "JENAR"
        },
        {
          "code": 3315010,
          "regencyCode": 3315,
          "name": "KEDUNGJATI"
        },
        {
          "code": 3315020,
          "regencyCode": 3315,
          "name": "KARANGRAYUNG"
        },
        {
          "code": 3315030,
          "regencyCode": 3315,
          "name": "PENAWANGAN"
        },
        {
          "code": 3315040,
          "regencyCode": 3315,
          "name": "TOROH"
        },
        {
          "code": 3315050,
          "regencyCode": 3315,
          "name": "GEYER"
        },
        {
          "code": 3315060,
          "regencyCode": 3315,
          "name": "PULOKULON"
        },
        {
          "code": 3315070,
          "regencyCode": 3315,
          "name": "KRADENAN"
        },
        {
          "code": 3315080,
          "regencyCode": 3315,
          "name": "GABUS"
        },
        {
          "code": 3315090,
          "regencyCode": 3315,
          "name": "NGARINGAN"
        },
        {
          "code": 3315100,
          "regencyCode": 3315,
          "name": "WIROSARI"
        },
        {
          "code": 3315110,
          "regencyCode": 3315,
          "name": "TAWANGHARJO"
        },
        {
          "code": 3315120,
          "regencyCode": 3315,
          "name": "GROBOGAN"
        },
        {
          "code": 3315130,
          "regencyCode": 3315,
          "name": "PURWODADI"
        },
        {
          "code": 3315140,
          "regencyCode": 3315,
          "name": "BRATI"
        },
        {
          "code": 3315150,
          "regencyCode": 3315,
          "name": "KLAMBU"
        },
        {
          "code": 3315160,
          "regencyCode": 3315,
          "name": "GODONG"
        },
        {
          "code": 3315170,
          "regencyCode": 3315,
          "name": "GUBUG"
        },
        {
          "code": 3315180,
          "regencyCode": 3315,
          "name": "TEGOWANU"
        },
        {
          "code": 3315190,
          "regencyCode": 3315,
          "name": "TANGGUNGHARJO"
        },
        {
          "code": 3316010,
          "regencyCode": 3316,
          "name": "JATI"
        },
        {
          "code": 3316020,
          "regencyCode": 3316,
          "name": "RANDUBLATUNG"
        },
        {
          "code": 3316030,
          "regencyCode": 3316,
          "name": "KRADENAN"
        },
        {
          "code": 3316040,
          "regencyCode": 3316,
          "name": "KEDUNGTUBAN"
        },
        {
          "code": 3316050,
          "regencyCode": 3316,
          "name": "CEPU"
        },
        {
          "code": 3316060,
          "regencyCode": 3316,
          "name": "SAMBONG"
        },
        {
          "code": 3316070,
          "regencyCode": 3316,
          "name": "JIKEN"
        },
        {
          "code": 3316080,
          "regencyCode": 3316,
          "name": "BOGOREJO"
        },
        {
          "code": 3316090,
          "regencyCode": 3316,
          "name": "JEPON"
        },
        {
          "code": 3316100,
          "regencyCode": 3316,
          "name": "KOTA BLORA"
        },
        {
          "code": 3316110,
          "regencyCode": 3316,
          "name": "BANJAREJO"
        },
        {
          "code": 3316120,
          "regencyCode": 3316,
          "name": "TUNJUNGAN"
        },
        {
          "code": 3316130,
          "regencyCode": 3316,
          "name": "JAPAH"
        },
        {
          "code": 3316140,
          "regencyCode": 3316,
          "name": "NGAWEN"
        },
        {
          "code": 3316150,
          "regencyCode": 3316,
          "name": "KUNDURAN"
        },
        {
          "code": 3316160,
          "regencyCode": 3316,
          "name": "TODANAN"
        },
        {
          "code": 3317010,
          "regencyCode": 3317,
          "name": "SUMBER"
        },
        {
          "code": 3317020,
          "regencyCode": 3317,
          "name": "BULU"
        },
        {
          "code": 3317030,
          "regencyCode": 3317,
          "name": "GUNEM"
        },
        {
          "code": 3317040,
          "regencyCode": 3317,
          "name": "SALE"
        },
        {
          "code": 3317050,
          "regencyCode": 3317,
          "name": "SARANG"
        },
        {
          "code": 3317060,
          "regencyCode": 3317,
          "name": "SEDAN"
        },
        {
          "code": 3317070,
          "regencyCode": 3317,
          "name": "PAMOTAN"
        },
        {
          "code": 3317080,
          "regencyCode": 3317,
          "name": "SULANG"
        },
        {
          "code": 3317090,
          "regencyCode": 3317,
          "name": "KALIORI"
        },
        {
          "code": 3317100,
          "regencyCode": 3317,
          "name": "REMBANG"
        },
        {
          "code": 3317110,
          "regencyCode": 3317,
          "name": "PANCUR"
        },
        {
          "code": 3317120,
          "regencyCode": 3317,
          "name": "KRAGAN"
        },
        {
          "code": 3317130,
          "regencyCode": 3317,
          "name": "SLUKE"
        },
        {
          "code": 3317140,
          "regencyCode": 3317,
          "name": "LASEM"
        },
        {
          "code": 3318010,
          "regencyCode": 3318,
          "name": "SUKOLILO"
        },
        {
          "code": 3318020,
          "regencyCode": 3318,
          "name": "KAYEN"
        },
        {
          "code": 3318030,
          "regencyCode": 3318,
          "name": "TAMBAKROMO"
        },
        {
          "code": 3318040,
          "regencyCode": 3318,
          "name": "WINONG"
        },
        {
          "code": 3318050,
          "regencyCode": 3318,
          "name": "PUCAKWANGI"
        },
        {
          "code": 3318060,
          "regencyCode": 3318,
          "name": "JAKEN"
        },
        {
          "code": 3318070,
          "regencyCode": 3318,
          "name": "BATANGAN"
        },
        {
          "code": 3318080,
          "regencyCode": 3318,
          "name": "JUWANA"
        },
        {
          "code": 3318090,
          "regencyCode": 3318,
          "name": "JAKENAN"
        },
        {
          "code": 3318100,
          "regencyCode": 3318,
          "name": "PATI"
        },
        {
          "code": 3318110,
          "regencyCode": 3318,
          "name": "GABUS"
        },
        {
          "code": 3318120,
          "regencyCode": 3318,
          "name": "MARGOREJO"
        },
        {
          "code": 3318130,
          "regencyCode": 3318,
          "name": "GEMBONG"
        },
        {
          "code": 3318140,
          "regencyCode": 3318,
          "name": "TLOGOWUNGU"
        },
        {
          "code": 3318150,
          "regencyCode": 3318,
          "name": "WEDARIJAKSA"
        },
        {
          "code": 3318160,
          "regencyCode": 3318,
          "name": "TRANGKIL"
        },
        {
          "code": 3318170,
          "regencyCode": 3318,
          "name": "MARGOYOSO"
        },
        {
          "code": 3318180,
          "regencyCode": 3318,
          "name": "GUNUNG WUNGKAL"
        },
        {
          "code": 3318190,
          "regencyCode": 3318,
          "name": "CLUWAK"
        },
        {
          "code": 3318200,
          "regencyCode": 3318,
          "name": "TAYU"
        },
        {
          "code": 3318210,
          "regencyCode": 3318,
          "name": "DUKUHSETI"
        },
        {
          "code": 3319010,
          "regencyCode": 3319,
          "name": "KALIWUNGU"
        },
        {
          "code": 3319020,
          "regencyCode": 3319,
          "name": "KOTA KUDUS"
        },
        {
          "code": 3319030,
          "regencyCode": 3319,
          "name": "JATI"
        },
        {
          "code": 3319040,
          "regencyCode": 3319,
          "name": "UNDAAN"
        },
        {
          "code": 3319050,
          "regencyCode": 3319,
          "name": "MEJOBO"
        },
        {
          "code": 3319060,
          "regencyCode": 3319,
          "name": "JEKULO"
        },
        {
          "code": 3319070,
          "regencyCode": 3319,
          "name": "BAE"
        },
        {
          "code": 3319080,
          "regencyCode": 3319,
          "name": "GEBOG"
        },
        {
          "code": 3319090,
          "regencyCode": 3319,
          "name": "DAWE"
        },
        {
          "code": 3320010,
          "regencyCode": 3320,
          "name": "KEDUNG"
        },
        {
          "code": 3320020,
          "regencyCode": 3320,
          "name": "PECANGAAN"
        },
        {
          "code": 3320021,
          "regencyCode": 3320,
          "name": "KALINYAMATAN"
        },
        {
          "code": 3320030,
          "regencyCode": 3320,
          "name": "WELAHAN"
        },
        {
          "code": 3320040,
          "regencyCode": 3320,
          "name": "MAYONG"
        },
        {
          "code": 3320050,
          "regencyCode": 3320,
          "name": "NALUMSARI"
        },
        {
          "code": 3320060,
          "regencyCode": 3320,
          "name": "BATEALIT"
        },
        {
          "code": 3320070,
          "regencyCode": 3320,
          "name": "TAHUNAN"
        },
        {
          "code": 3320080,
          "regencyCode": 3320,
          "name": "JEPARA"
        },
        {
          "code": 3320090,
          "regencyCode": 3320,
          "name": "MLONGGO"
        },
        {
          "code": 3320091,
          "regencyCode": 3320,
          "name": "PAKIS AJI"
        },
        {
          "code": 3320100,
          "regencyCode": 3320,
          "name": "BANGSRI"
        },
        {
          "code": 3320101,
          "regencyCode": 3320,
          "name": "KEMBANG"
        },
        {
          "code": 3320110,
          "regencyCode": 3320,
          "name": "KELING"
        },
        {
          "code": 3320111,
          "regencyCode": 3320,
          "name": "DONOROJO"
        },
        {
          "code": 3320120,
          "regencyCode": 3320,
          "name": "KARIMUNJAWA"
        },
        {
          "code": 3321010,
          "regencyCode": 3321,
          "name": "MRANGGEN"
        },
        {
          "code": 3321020,
          "regencyCode": 3321,
          "name": "KARANGAWEN"
        },
        {
          "code": 3321030,
          "regencyCode": 3321,
          "name": "GUNTUR"
        },
        {
          "code": 3321040,
          "regencyCode": 3321,
          "name": "SAYUNG"
        },
        {
          "code": 3321050,
          "regencyCode": 3321,
          "name": "KARANG TENGAH"
        },
        {
          "code": 3321060,
          "regencyCode": 3321,
          "name": "BONANG"
        },
        {
          "code": 3321070,
          "regencyCode": 3321,
          "name": "DEMAK"
        },
        {
          "code": 3321080,
          "regencyCode": 3321,
          "name": "WONOSALAM"
        },
        {
          "code": 3321090,
          "regencyCode": 3321,
          "name": "DEMPET"
        },
        {
          "code": 3321091,
          "regencyCode": 3321,
          "name": "KEBONAGUNG"
        },
        {
          "code": 3321100,
          "regencyCode": 3321,
          "name": "GAJAH"
        },
        {
          "code": 3321110,
          "regencyCode": 3321,
          "name": "KARANGANYAR"
        },
        {
          "code": 3321120,
          "regencyCode": 3321,
          "name": "MIJEN"
        },
        {
          "code": 3321130,
          "regencyCode": 3321,
          "name": "WEDUNG"
        },
        {
          "code": 3322010,
          "regencyCode": 3322,
          "name": "GETASAN"
        },
        {
          "code": 3322020,
          "regencyCode": 3322,
          "name": "TENGARAN"
        },
        {
          "code": 3322030,
          "regencyCode": 3322,
          "name": "SUSUKAN"
        },
        {
          "code": 3322031,
          "regencyCode": 3322,
          "name": "KALIWUNGU"
        },
        {
          "code": 3322040,
          "regencyCode": 3322,
          "name": "SURUH"
        },
        {
          "code": 3322050,
          "regencyCode": 3322,
          "name": "PABELAN"
        },
        {
          "code": 3322060,
          "regencyCode": 3322,
          "name": "TUNTANG"
        },
        {
          "code": 3322070,
          "regencyCode": 3322,
          "name": "BANYUBIRU"
        },
        {
          "code": 3322080,
          "regencyCode": 3322,
          "name": "JAMBU"
        },
        {
          "code": 3322090,
          "regencyCode": 3322,
          "name": "SUMOWONO"
        },
        {
          "code": 3322100,
          "regencyCode": 3322,
          "name": "AMBARAWA"
        },
        {
          "code": 3322101,
          "regencyCode": 3322,
          "name": "BANDUNGAN"
        },
        {
          "code": 3322110,
          "regencyCode": 3322,
          "name": "BAWEN"
        },
        {
          "code": 3322120,
          "regencyCode": 3322,
          "name": "BRINGIN"
        },
        {
          "code": 3322121,
          "regencyCode": 3322,
          "name": "BANCAK"
        },
        {
          "code": 3322130,
          "regencyCode": 3322,
          "name": "PRINGAPUS"
        },
        {
          "code": 3322140,
          "regencyCode": 3322,
          "name": "BERGAS"
        },
        {
          "code": 3322151,
          "regencyCode": 3322,
          "name": "UNGARAN BARAT"
        },
        {
          "code": 3322152,
          "regencyCode": 3322,
          "name": "UNGARAN TIMUR"
        },
        {
          "code": 3323010,
          "regencyCode": 3323,
          "name": "PARAKAN"
        },
        {
          "code": 3323011,
          "regencyCode": 3323,
          "name": "KLEDUNG"
        },
        {
          "code": 3323012,
          "regencyCode": 3323,
          "name": "BANSARI"
        },
        {
          "code": 3323020,
          "regencyCode": 3323,
          "name": "BULU"
        },
        {
          "code": 3323030,
          "regencyCode": 3323,
          "name": "TEMANGGUNG"
        },
        {
          "code": 3323031,
          "regencyCode": 3323,
          "name": "TLOGOMULYO"
        },
        {
          "code": 3323040,
          "regencyCode": 3323,
          "name": "TEMBARAK"
        },
        {
          "code": 3323041,
          "regencyCode": 3323,
          "name": "SELOPAMPANG"
        },
        {
          "code": 3323050,
          "regencyCode": 3323,
          "name": "KRANGGAN"
        },
        {
          "code": 3323060,
          "regencyCode": 3323,
          "name": "PRINGSURAT"
        },
        {
          "code": 3323070,
          "regencyCode": 3323,
          "name": "KALORAN"
        },
        {
          "code": 3323080,
          "regencyCode": 3323,
          "name": "KANDANGAN"
        },
        {
          "code": 3323090,
          "regencyCode": 3323,
          "name": "KEDU"
        },
        {
          "code": 3323100,
          "regencyCode": 3323,
          "name": "NGADIREJO"
        },
        {
          "code": 3323110,
          "regencyCode": 3323,
          "name": "JUMO"
        },
        {
          "code": 3323111,
          "regencyCode": 3323,
          "name": "GEMAWANG"
        },
        {
          "code": 3323120,
          "regencyCode": 3323,
          "name": "CANDIROTO"
        },
        {
          "code": 3323121,
          "regencyCode": 3323,
          "name": "BEJEN"
        },
        {
          "code": 3323130,
          "regencyCode": 3323,
          "name": "TRETEP"
        },
        {
          "code": 3323131,
          "regencyCode": 3323,
          "name": "WONOBOYO"
        },
        {
          "code": 3324010,
          "regencyCode": 3324,
          "name": "PLANTUNGAN"
        },
        {
          "code": 3324020,
          "regencyCode": 3324,
          "name": "SUKOREJO"
        },
        {
          "code": 3324030,
          "regencyCode": 3324,
          "name": "PAGERRUYUNG"
        },
        {
          "code": 3324040,
          "regencyCode": 3324,
          "name": "PATEAN"
        },
        {
          "code": 3324050,
          "regencyCode": 3324,
          "name": "SINGOROJO"
        },
        {
          "code": 3324060,
          "regencyCode": 3324,
          "name": "LIMBANGAN"
        },
        {
          "code": 3324070,
          "regencyCode": 3324,
          "name": "BOJA"
        },
        {
          "code": 3324080,
          "regencyCode": 3324,
          "name": "KALIWUNGU"
        },
        {
          "code": 3324081,
          "regencyCode": 3324,
          "name": "KALIWUNGU SELATAN"
        },
        {
          "code": 3324090,
          "regencyCode": 3324,
          "name": "BRANGSONG"
        },
        {
          "code": 3324100,
          "regencyCode": 3324,
          "name": "PEGANDON"
        },
        {
          "code": 3324101,
          "regencyCode": 3324,
          "name": "NGAMPEL"
        },
        {
          "code": 3324110,
          "regencyCode": 3324,
          "name": "GEMUH"
        },
        {
          "code": 3324111,
          "regencyCode": 3324,
          "name": "RINGINARUM"
        },
        {
          "code": 3324120,
          "regencyCode": 3324,
          "name": "WELERI"
        },
        {
          "code": 3324130,
          "regencyCode": 3324,
          "name": "ROWOSARI"
        },
        {
          "code": 3324140,
          "regencyCode": 3324,
          "name": "KANGKUNG"
        },
        {
          "code": 3324150,
          "regencyCode": 3324,
          "name": "CEPIRING"
        },
        {
          "code": 3324160,
          "regencyCode": 3324,
          "name": "PATEBON"
        },
        {
          "code": 3324170,
          "regencyCode": 3324,
          "name": "KOTA KENDAL"
        },
        {
          "code": 3325010,
          "regencyCode": 3325,
          "name": "WONOTUNGGAL"
        },
        {
          "code": 3325020,
          "regencyCode": 3325,
          "name": "BANDAR"
        },
        {
          "code": 3325030,
          "regencyCode": 3325,
          "name": "BLADO"
        },
        {
          "code": 3325040,
          "regencyCode": 3325,
          "name": "REBAN"
        },
        {
          "code": 3325050,
          "regencyCode": 3325,
          "name": "BAWANG"
        },
        {
          "code": 3325060,
          "regencyCode": 3325,
          "name": "TERSONO"
        },
        {
          "code": 3325070,
          "regencyCode": 3325,
          "name": "GRINGSING"
        },
        {
          "code": 3325080,
          "regencyCode": 3325,
          "name": "LIMPUNG"
        },
        {
          "code": 3325081,
          "regencyCode": 3325,
          "name": "BANYUPUTIH"
        },
        {
          "code": 3325090,
          "regencyCode": 3325,
          "name": "SUBAH"
        },
        {
          "code": 3325091,
          "regencyCode": 3325,
          "name": "PECALUNGAN"
        },
        {
          "code": 3325100,
          "regencyCode": 3325,
          "name": "TULIS"
        },
        {
          "code": 3325101,
          "regencyCode": 3325,
          "name": "KANDEMAN"
        },
        {
          "code": 3325110,
          "regencyCode": 3325,
          "name": "BATANG"
        },
        {
          "code": 3325120,
          "regencyCode": 3325,
          "name": "WARUNG ASEM"
        },
        {
          "code": 3326010,
          "regencyCode": 3326,
          "name": "KANDANGSERANG"
        },
        {
          "code": 3326020,
          "regencyCode": 3326,
          "name": "PANINGGARAN"
        },
        {
          "code": 3326030,
          "regencyCode": 3326,
          "name": "LEBAKBARANG"
        },
        {
          "code": 3326040,
          "regencyCode": 3326,
          "name": "PETUNGKRIONO"
        },
        {
          "code": 3326050,
          "regencyCode": 3326,
          "name": "TALUN"
        },
        {
          "code": 3326060,
          "regencyCode": 3326,
          "name": "DORO"
        },
        {
          "code": 3326070,
          "regencyCode": 3326,
          "name": "KARANGANYAR"
        },
        {
          "code": 3326080,
          "regencyCode": 3326,
          "name": "KAJEN"
        },
        {
          "code": 3326090,
          "regencyCode": 3326,
          "name": "KESESI"
        },
        {
          "code": 3326100,
          "regencyCode": 3326,
          "name": "SRAGI"
        },
        {
          "code": 3326101,
          "regencyCode": 3326,
          "name": "SIWALAN"
        },
        {
          "code": 3326110,
          "regencyCode": 3326,
          "name": "BOJONG"
        },
        {
          "code": 3326120,
          "regencyCode": 3326,
          "name": "WONOPRINGGO"
        },
        {
          "code": 3326130,
          "regencyCode": 3326,
          "name": "KEDUNGWUNI"
        },
        {
          "code": 3326131,
          "regencyCode": 3326,
          "name": "KARANGDADAP"
        },
        {
          "code": 3326140,
          "regencyCode": 3326,
          "name": "BUARAN"
        },
        {
          "code": 3326150,
          "regencyCode": 3326,
          "name": "TIRTO"
        },
        {
          "code": 3326160,
          "regencyCode": 3326,
          "name": "WIRADESA"
        },
        {
          "code": 3326161,
          "regencyCode": 3326,
          "name": "WONOKERTO"
        },
        {
          "code": 3327010,
          "regencyCode": 3327,
          "name": "MOGA"
        },
        {
          "code": 3327011,
          "regencyCode": 3327,
          "name": "WARUNGPRING"
        },
        {
          "code": 3327020,
          "regencyCode": 3327,
          "name": "PULOSARI"
        },
        {
          "code": 3327030,
          "regencyCode": 3327,
          "name": "BELIK"
        },
        {
          "code": 3327040,
          "regencyCode": 3327,
          "name": "WATUKUMPUL"
        },
        {
          "code": 3327050,
          "regencyCode": 3327,
          "name": "BODEH"
        },
        {
          "code": 3327060,
          "regencyCode": 3327,
          "name": "BANTARBOLANG"
        },
        {
          "code": 3327070,
          "regencyCode": 3327,
          "name": "RANDUDONGKAL"
        },
        {
          "code": 3327080,
          "regencyCode": 3327,
          "name": "PEMALANG"
        },
        {
          "code": 3327090,
          "regencyCode": 3327,
          "name": "TAMAN"
        },
        {
          "code": 3327100,
          "regencyCode": 3327,
          "name": "PETARUKAN"
        },
        {
          "code": 3327110,
          "regencyCode": 3327,
          "name": "AMPELGADING"
        },
        {
          "code": 3327120,
          "regencyCode": 3327,
          "name": "COMAL"
        },
        {
          "code": 3327130,
          "regencyCode": 3327,
          "name": "ULUJAMI"
        },
        {
          "code": 3328010,
          "regencyCode": 3328,
          "name": "MARGASARI"
        },
        {
          "code": 3328020,
          "regencyCode": 3328,
          "name": "BUMIJAWA"
        },
        {
          "code": 3328030,
          "regencyCode": 3328,
          "name": "BOJONG"
        },
        {
          "code": 3328040,
          "regencyCode": 3328,
          "name": "BALAPULANG"
        },
        {
          "code": 3328050,
          "regencyCode": 3328,
          "name": "PAGERBARANG"
        },
        {
          "code": 3328060,
          "regencyCode": 3328,
          "name": "LEBAKSIU"
        },
        {
          "code": 3328070,
          "regencyCode": 3328,
          "name": "JATINEGARA"
        },
        {
          "code": 3328080,
          "regencyCode": 3328,
          "name": "KEDUNG BANTENG"
        },
        {
          "code": 3328090,
          "regencyCode": 3328,
          "name": "PANGKAH"
        },
        {
          "code": 3328100,
          "regencyCode": 3328,
          "name": "SLAWI"
        },
        {
          "code": 3328110,
          "regencyCode": 3328,
          "name": "DUKUHWARU"
        },
        {
          "code": 3328120,
          "regencyCode": 3328,
          "name": "ADIWERNA"
        },
        {
          "code": 3328130,
          "regencyCode": 3328,
          "name": "DUKUHTURI"
        },
        {
          "code": 3328140,
          "regencyCode": 3328,
          "name": "TALANG"
        },
        {
          "code": 3328150,
          "regencyCode": 3328,
          "name": "TARUB"
        },
        {
          "code": 3328160,
          "regencyCode": 3328,
          "name": "KRAMAT"
        },
        {
          "code": 3328170,
          "regencyCode": 3328,
          "name": "SURADADI"
        },
        {
          "code": 3328180,
          "regencyCode": 3328,
          "name": "WARUREJA"
        },
        {
          "code": 3329010,
          "regencyCode": 3329,
          "name": "SALEM"
        },
        {
          "code": 3329020,
          "regencyCode": 3329,
          "name": "BANTARKAWUNG"
        },
        {
          "code": 3329030,
          "regencyCode": 3329,
          "name": "BUMIAYU"
        },
        {
          "code": 3329040,
          "regencyCode": 3329,
          "name": "PAGUYANGAN"
        },
        {
          "code": 3329050,
          "regencyCode": 3329,
          "name": "SIRAMPOG"
        },
        {
          "code": 3329060,
          "regencyCode": 3329,
          "name": "TONJONG"
        },
        {
          "code": 3329070,
          "regencyCode": 3329,
          "name": "LARANGAN"
        },
        {
          "code": 3329080,
          "regencyCode": 3329,
          "name": "KETANGGUNGAN"
        },
        {
          "code": 3329090,
          "regencyCode": 3329,
          "name": "BANJARHARJO"
        },
        {
          "code": 3329100,
          "regencyCode": 3329,
          "name": "LOSARI"
        },
        {
          "code": 3329110,
          "regencyCode": 3329,
          "name": "TANJUNG"
        },
        {
          "code": 3329120,
          "regencyCode": 3329,
          "name": "KERSANA"
        },
        {
          "code": 3329130,
          "regencyCode": 3329,
          "name": "BULAKAMBA"
        },
        {
          "code": 3329140,
          "regencyCode": 3329,
          "name": "WANASARI"
        },
        {
          "code": 3329150,
          "regencyCode": 3329,
          "name": "SONGGOM"
        },
        {
          "code": 3329160,
          "regencyCode": 3329,
          "name": "JATIBARANG"
        },
        {
          "code": 3329170,
          "regencyCode": 3329,
          "name": "BREBES"
        },
        {
          "code": 3371010,
          "regencyCode": 3371,
          "name": "MAGELANG SELATAN"
        },
        {
          "code": 3371011,
          "regencyCode": 3371,
          "name": "MAGELANG TENGAH"
        },
        {
          "code": 3371020,
          "regencyCode": 3371,
          "name": "MAGELANG UTARA"
        },
        {
          "code": 3372010,
          "regencyCode": 3372,
          "name": "LAWEYAN"
        },
        {
          "code": 3372020,
          "regencyCode": 3372,
          "name": "SERENGAN"
        },
        {
          "code": 3372030,
          "regencyCode": 3372,
          "name": "PASAR KLIWON"
        },
        {
          "code": 3372040,
          "regencyCode": 3372,
          "name": "JEBRES"
        },
        {
          "code": 3372050,
          "regencyCode": 3372,
          "name": "BANJARSARI"
        },
        {
          "code": 3373010,
          "regencyCode": 3373,
          "name": "ARGOMULYO"
        },
        {
          "code": 3373020,
          "regencyCode": 3373,
          "name": "TINGKIR"
        },
        {
          "code": 3373030,
          "regencyCode": 3373,
          "name": "SIDOMUKTI"
        },
        {
          "code": 3373040,
          "regencyCode": 3373,
          "name": "SIDOREJO"
        },
        {
          "code": 3374010,
          "regencyCode": 3374,
          "name": "MIJEN"
        },
        {
          "code": 3374020,
          "regencyCode": 3374,
          "name": "GUNUNG PATI"
        },
        {
          "code": 3374030,
          "regencyCode": 3374,
          "name": "BANYUMANIK"
        },
        {
          "code": 3374040,
          "regencyCode": 3374,
          "name": "GAJAH MUNGKUR"
        },
        {
          "code": 3374050,
          "regencyCode": 3374,
          "name": "SEMARANG SELATAN"
        },
        {
          "code": 3374060,
          "regencyCode": 3374,
          "name": "CANDISARI"
        },
        {
          "code": 3374070,
          "regencyCode": 3374,
          "name": "TEMBALANG"
        },
        {
          "code": 3374080,
          "regencyCode": 3374,
          "name": "PEDURUNGAN"
        },
        {
          "code": 3374090,
          "regencyCode": 3374,
          "name": "GENUK"
        },
        {
          "code": 3374100,
          "regencyCode": 3374,
          "name": "GAYAMSARI"
        },
        {
          "code": 3374110,
          "regencyCode": 3374,
          "name": "SEMARANG TIMUR"
        },
        {
          "code": 3374120,
          "regencyCode": 3374,
          "name": "SEMARANG UTARA"
        },
        {
          "code": 3374130,
          "regencyCode": 3374,
          "name": "SEMARANG TENGAH"
        },
        {
          "code": 3374140,
          "regencyCode": 3374,
          "name": "SEMARANG BARAT"
        },
        {
          "code": 3374150,
          "regencyCode": 3374,
          "name": "TUGU"
        },
        {
          "code": 3374160,
          "regencyCode": 3374,
          "name": "NGALIYAN"
        },
        {
          "code": 3375010,
          "regencyCode": 3375,
          "name": "PEKALONGAN BARAT"
        },
        {
          "code": 3375020,
          "regencyCode": 3375,
          "name": "PEKALONGAN TIMUR"
        },
        {
          "code": 3375030,
          "regencyCode": 3375,
          "name": "PEKALONGAN SELATAN"
        },
        {
          "code": 3375040,
          "regencyCode": 3375,
          "name": "PEKALONGAN UTARA"
        },
        {
          "code": 3376010,
          "regencyCode": 3376,
          "name": "TEGAL SELATAN"
        },
        {
          "code": 3376020,
          "regencyCode": 3376,
          "name": "TEGAL TIMUR"
        },
        {
          "code": 3376030,
          "regencyCode": 3376,
          "name": "TEGAL BARAT"
        },
        {
          "code": 3376040,
          "regencyCode": 3376,
          "name": "MARGADANA"
        },
        {
          "code": 3401010,
          "regencyCode": 3401,
          "name": "TEMON"
        },
        {
          "code": 3401020,
          "regencyCode": 3401,
          "name": "WATES"
        },
        {
          "code": 3401030,
          "regencyCode": 3401,
          "name": "PANJATAN"
        },
        {
          "code": 3401040,
          "regencyCode": 3401,
          "name": "GALUR"
        },
        {
          "code": 3401050,
          "regencyCode": 3401,
          "name": "LENDAH"
        },
        {
          "code": 3401060,
          "regencyCode": 3401,
          "name": "SENTOLO"
        },
        {
          "code": 3401070,
          "regencyCode": 3401,
          "name": "PENGASIH"
        },
        {
          "code": 3401080,
          "regencyCode": 3401,
          "name": "KOKAP"
        },
        {
          "code": 3401090,
          "regencyCode": 3401,
          "name": "GIRIMULYO"
        },
        {
          "code": 3401100,
          "regencyCode": 3401,
          "name": "NANGGULAN"
        },
        {
          "code": 3401110,
          "regencyCode": 3401,
          "name": "KALIBAWANG"
        },
        {
          "code": 3401120,
          "regencyCode": 3401,
          "name": "SAMIGALUH"
        },
        {
          "code": 3402010,
          "regencyCode": 3402,
          "name": "SRANDAKAN"
        },
        {
          "code": 3402020,
          "regencyCode": 3402,
          "name": "SANDEN"
        },
        {
          "code": 3402030,
          "regencyCode": 3402,
          "name": "KRETEK"
        },
        {
          "code": 3402040,
          "regencyCode": 3402,
          "name": "PUNDONG"
        },
        {
          "code": 3402050,
          "regencyCode": 3402,
          "name": "BAMBANG LIPURO"
        },
        {
          "code": 3402060,
          "regencyCode": 3402,
          "name": "PANDAK"
        },
        {
          "code": 3402070,
          "regencyCode": 3402,
          "name": "BANTUL"
        },
        {
          "code": 3402080,
          "regencyCode": 3402,
          "name": "JETIS"
        },
        {
          "code": 3402090,
          "regencyCode": 3402,
          "name": "IMOGIRI"
        },
        {
          "code": 3402100,
          "regencyCode": 3402,
          "name": "DLINGO"
        },
        {
          "code": 3402110,
          "regencyCode": 3402,
          "name": "PLERET"
        },
        {
          "code": 3402120,
          "regencyCode": 3402,
          "name": "PIYUNGAN"
        },
        {
          "code": 3402130,
          "regencyCode": 3402,
          "name": "BANGUNTAPAN"
        },
        {
          "code": 3402140,
          "regencyCode": 3402,
          "name": "SEWON"
        },
        {
          "code": 3402150,
          "regencyCode": 3402,
          "name": "KASIHAN"
        },
        {
          "code": 3402160,
          "regencyCode": 3402,
          "name": "PAJANGAN"
        },
        {
          "code": 3402170,
          "regencyCode": 3402,
          "name": "SEDAYU"
        },
        {
          "code": 3403010,
          "regencyCode": 3403,
          "name": "PANGGANG"
        },
        {
          "code": 3403011,
          "regencyCode": 3403,
          "name": "PURWOSARI"
        },
        {
          "code": 3403020,
          "regencyCode": 3403,
          "name": "PALIYAN"
        },
        {
          "code": 3403030,
          "regencyCode": 3403,
          "name": "SAPTO SARI"
        },
        {
          "code": 3403040,
          "regencyCode": 3403,
          "name": "TEPUS"
        },
        {
          "code": 3403041,
          "regencyCode": 3403,
          "name": "TANJUNGSARI"
        },
        {
          "code": 3403050,
          "regencyCode": 3403,
          "name": "RONGKOP"
        },
        {
          "code": 3403051,
          "regencyCode": 3403,
          "name": "GIRISUBO"
        },
        {
          "code": 3403060,
          "regencyCode": 3403,
          "name": "SEMANU"
        },
        {
          "code": 3403070,
          "regencyCode": 3403,
          "name": "PONJONG"
        },
        {
          "code": 3403080,
          "regencyCode": 3403,
          "name": "KARANGMOJO"
        },
        {
          "code": 3403090,
          "regencyCode": 3403,
          "name": "WONOSARI"
        },
        {
          "code": 3403100,
          "regencyCode": 3403,
          "name": "PLAYEN"
        },
        {
          "code": 3403110,
          "regencyCode": 3403,
          "name": "PATUK"
        },
        {
          "code": 3403120,
          "regencyCode": 3403,
          "name": "GEDANG SARI"
        },
        {
          "code": 3403130,
          "regencyCode": 3403,
          "name": "NGLIPAR"
        },
        {
          "code": 3403140,
          "regencyCode": 3403,
          "name": "NGAWEN"
        },
        {
          "code": 3403150,
          "regencyCode": 3403,
          "name": "SEMIN"
        },
        {
          "code": 3404010,
          "regencyCode": 3404,
          "name": "MOYUDAN"
        },
        {
          "code": 3404020,
          "regencyCode": 3404,
          "name": "MINGGIR"
        },
        {
          "code": 3404030,
          "regencyCode": 3404,
          "name": "SEYEGAN"
        },
        {
          "code": 3404040,
          "regencyCode": 3404,
          "name": "GODEAN"
        },
        {
          "code": 3404050,
          "regencyCode": 3404,
          "name": "GAMPING"
        },
        {
          "code": 3404060,
          "regencyCode": 3404,
          "name": "MLATI"
        },
        {
          "code": 3404070,
          "regencyCode": 3404,
          "name": "DEPOK"
        },
        {
          "code": 3404080,
          "regencyCode": 3404,
          "name": "BERBAH"
        },
        {
          "code": 3404090,
          "regencyCode": 3404,
          "name": "PRAMBANAN"
        },
        {
          "code": 3404100,
          "regencyCode": 3404,
          "name": "KALASAN"
        },
        {
          "code": 3404110,
          "regencyCode": 3404,
          "name": "NGEMPLAK"
        },
        {
          "code": 3404120,
          "regencyCode": 3404,
          "name": "NGAGLIK"
        },
        {
          "code": 3404130,
          "regencyCode": 3404,
          "name": "SLEMAN"
        },
        {
          "code": 3404140,
          "regencyCode": 3404,
          "name": "TEMPEL"
        },
        {
          "code": 3404150,
          "regencyCode": 3404,
          "name": "TURI"
        },
        {
          "code": 3404160,
          "regencyCode": 3404,
          "name": "PAKEM"
        },
        {
          "code": 3404170,
          "regencyCode": 3404,
          "name": "CANGKRINGAN"
        },
        {
          "code": 3471010,
          "regencyCode": 3471,
          "name": "MANTRIJERON"
        },
        {
          "code": 3471020,
          "regencyCode": 3471,
          "name": "KRATON"
        },
        {
          "code": 3471030,
          "regencyCode": 3471,
          "name": "MERGANGSAN"
        },
        {
          "code": 3471040,
          "regencyCode": 3471,
          "name": "UMBULHARJO"
        },
        {
          "code": 3471050,
          "regencyCode": 3471,
          "name": "KOTAGEDE"
        },
        {
          "code": 3471060,
          "regencyCode": 3471,
          "name": "GONDOKUSUMAN"
        },
        {
          "code": 3471070,
          "regencyCode": 3471,
          "name": "DANUREJAN"
        },
        {
          "code": 3471080,
          "regencyCode": 3471,
          "name": "PAKUALAMAN"
        },
        {
          "code": 3471090,
          "regencyCode": 3471,
          "name": "GONDOMANAN"
        },
        {
          "code": 3471100,
          "regencyCode": 3471,
          "name": "NGAMPILAN"
        },
        {
          "code": 3471110,
          "regencyCode": 3471,
          "name": "WIROBRAJAN"
        },
        {
          "code": 3471120,
          "regencyCode": 3471,
          "name": "GEDONG TENGEN"
        },
        {
          "code": 3471130,
          "regencyCode": 3471,
          "name": "JETIS"
        },
        {
          "code": 3471140,
          "regencyCode": 3471,
          "name": "TEGALREJO"
        },
        {
          "code": 3501010,
          "regencyCode": 3501,
          "name": "DONOROJO"
        },
        {
          "code": 3501020,
          "regencyCode": 3501,
          "name": "PUNUNG"
        },
        {
          "code": 3501030,
          "regencyCode": 3501,
          "name": "PRINGKUKU"
        },
        {
          "code": 3501040,
          "regencyCode": 3501,
          "name": "PACITAN"
        },
        {
          "code": 3501050,
          "regencyCode": 3501,
          "name": "KEBONAGUNG"
        },
        {
          "code": 3501060,
          "regencyCode": 3501,
          "name": "ARJOSARI"
        },
        {
          "code": 3501070,
          "regencyCode": 3501,
          "name": "NAWANGAN"
        },
        {
          "code": 3501080,
          "regencyCode": 3501,
          "name": "BANDAR"
        },
        {
          "code": 3501090,
          "regencyCode": 3501,
          "name": "TEGALOMBO"
        },
        {
          "code": 3501100,
          "regencyCode": 3501,
          "name": "TULAKAN"
        },
        {
          "code": 3501110,
          "regencyCode": 3501,
          "name": "NGADIROJO"
        },
        {
          "code": 3501120,
          "regencyCode": 3501,
          "name": "SUDIMORO"
        },
        {
          "code": 3502010,
          "regencyCode": 3502,
          "name": "NGRAYUN"
        },
        {
          "code": 3502020,
          "regencyCode": 3502,
          "name": "SLAHUNG"
        },
        {
          "code": 3502030,
          "regencyCode": 3502,
          "name": "BUNGKAL"
        },
        {
          "code": 3502040,
          "regencyCode": 3502,
          "name": "SAMBIT"
        },
        {
          "code": 3502050,
          "regencyCode": 3502,
          "name": "SAWOO"
        },
        {
          "code": 3502060,
          "regencyCode": 3502,
          "name": "SOOKO"
        },
        {
          "code": 3502061,
          "regencyCode": 3502,
          "name": "PUDAK"
        },
        {
          "code": 3502070,
          "regencyCode": 3502,
          "name": "PULUNG"
        },
        {
          "code": 3502080,
          "regencyCode": 3502,
          "name": "MLARAK"
        },
        {
          "code": 3502090,
          "regencyCode": 3502,
          "name": "SIMAN"
        },
        {
          "code": 3502100,
          "regencyCode": 3502,
          "name": "JETIS"
        },
        {
          "code": 3502110,
          "regencyCode": 3502,
          "name": "BALONG"
        },
        {
          "code": 3502120,
          "regencyCode": 3502,
          "name": "KAUMAN"
        },
        {
          "code": 3502130,
          "regencyCode": 3502,
          "name": "JAMBON"
        },
        {
          "code": 3502140,
          "regencyCode": 3502,
          "name": "BADEGAN"
        },
        {
          "code": 3502150,
          "regencyCode": 3502,
          "name": "SAMPUNG"
        },
        {
          "code": 3502160,
          "regencyCode": 3502,
          "name": "SUKOREJO"
        },
        {
          "code": 3502170,
          "regencyCode": 3502,
          "name": "PONOROGO"
        },
        {
          "code": 3502180,
          "regencyCode": 3502,
          "name": "BABADAN"
        },
        {
          "code": 3502190,
          "regencyCode": 3502,
          "name": "JENANGAN"
        },
        {
          "code": 3502200,
          "regencyCode": 3502,
          "name": "NGEBEL"
        },
        {
          "code": 3503010,
          "regencyCode": 3503,
          "name": "PANGGUL"
        },
        {
          "code": 3503020,
          "regencyCode": 3503,
          "name": "MUNJUNGAN"
        },
        {
          "code": 3503030,
          "regencyCode": 3503,
          "name": "WATULIMO"
        },
        {
          "code": 3503040,
          "regencyCode": 3503,
          "name": "KAMPAK"
        },
        {
          "code": 3503050,
          "regencyCode": 3503,
          "name": "DONGKO"
        },
        {
          "code": 3503060,
          "regencyCode": 3503,
          "name": "PULE"
        },
        {
          "code": 3503070,
          "regencyCode": 3503,
          "name": "KARANGAN"
        },
        {
          "code": 3503071,
          "regencyCode": 3503,
          "name": "SURUH"
        },
        {
          "code": 3503080,
          "regencyCode": 3503,
          "name": "GANDUSARI"
        },
        {
          "code": 3503090,
          "regencyCode": 3503,
          "name": "DURENAN"
        },
        {
          "code": 3503100,
          "regencyCode": 3503,
          "name": "POGALAN"
        },
        {
          "code": 3503110,
          "regencyCode": 3503,
          "name": "TRENGGALEK"
        },
        {
          "code": 3503120,
          "regencyCode": 3503,
          "name": "TUGU"
        },
        {
          "code": 3503130,
          "regencyCode": 3503,
          "name": "BENDUNGAN"
        },
        {
          "code": 3504010,
          "regencyCode": 3504,
          "name": "BESUKI"
        },
        {
          "code": 3504020,
          "regencyCode": 3504,
          "name": "BANDUNG"
        },
        {
          "code": 3504030,
          "regencyCode": 3504,
          "name": "PAKEL"
        },
        {
          "code": 3504040,
          "regencyCode": 3504,
          "name": "CAMPUR DARAT"
        },
        {
          "code": 3504050,
          "regencyCode": 3504,
          "name": "TANGGUNG GUNUNG"
        },
        {
          "code": 3504060,
          "regencyCode": 3504,
          "name": "KALIDAWIR"
        },
        {
          "code": 3504070,
          "regencyCode": 3504,
          "name": "PUCANG LABAN"
        },
        {
          "code": 3504080,
          "regencyCode": 3504,
          "name": "REJOTANGAN"
        },
        {
          "code": 3504090,
          "regencyCode": 3504,
          "name": "NGUNUT"
        },
        {
          "code": 3504100,
          "regencyCode": 3504,
          "name": "SUMBERGEMPOL"
        },
        {
          "code": 3504110,
          "regencyCode": 3504,
          "name": "BOYOLANGU"
        },
        {
          "code": 3504120,
          "regencyCode": 3504,
          "name": "TULUNGAGUNG"
        },
        {
          "code": 3504130,
          "regencyCode": 3504,
          "name": "KEDUNGWARU"
        },
        {
          "code": 3504140,
          "regencyCode": 3504,
          "name": "NGANTRU"
        },
        {
          "code": 3504150,
          "regencyCode": 3504,
          "name": "KARANGREJO"
        },
        {
          "code": 3504160,
          "regencyCode": 3504,
          "name": "KAUMAN"
        },
        {
          "code": 3504170,
          "regencyCode": 3504,
          "name": "GONDANG"
        },
        {
          "code": 3504180,
          "regencyCode": 3504,
          "name": "PAGER WOJO"
        },
        {
          "code": 3504190,
          "regencyCode": 3504,
          "name": "SENDANG"
        },
        {
          "code": 3505010,
          "regencyCode": 3505,
          "name": "BAKUNG"
        },
        {
          "code": 3505020,
          "regencyCode": 3505,
          "name": "WONOTIRTO"
        },
        {
          "code": 3505030,
          "regencyCode": 3505,
          "name": "PANGGUNGREJO"
        },
        {
          "code": 3505040,
          "regencyCode": 3505,
          "name": "WATES"
        },
        {
          "code": 3505050,
          "regencyCode": 3505,
          "name": "BINANGUN"
        },
        {
          "code": 3505060,
          "regencyCode": 3505,
          "name": "SUTOJAYAN"
        },
        {
          "code": 3505070,
          "regencyCode": 3505,
          "name": "KADEMANGAN"
        },
        {
          "code": 3505080,
          "regencyCode": 3505,
          "name": "KANIGORO"
        },
        {
          "code": 3505090,
          "regencyCode": 3505,
          "name": "TALUN"
        },
        {
          "code": 3505100,
          "regencyCode": 3505,
          "name": "SELOPURO"
        },
        {
          "code": 3505110,
          "regencyCode": 3505,
          "name": "KESAMBEN"
        },
        {
          "code": 3505120,
          "regencyCode": 3505,
          "name": "SELOREJO"
        },
        {
          "code": 3505130,
          "regencyCode": 3505,
          "name": "DOKO"
        },
        {
          "code": 3505140,
          "regencyCode": 3505,
          "name": "WLINGI"
        },
        {
          "code": 3505150,
          "regencyCode": 3505,
          "name": "GANDUSARI"
        },
        {
          "code": 3505160,
          "regencyCode": 3505,
          "name": "GARUM"
        },
        {
          "code": 3505170,
          "regencyCode": 3505,
          "name": "NGLEGOK"
        },
        {
          "code": 3505180,
          "regencyCode": 3505,
          "name": "SANANKULON"
        },
        {
          "code": 3505190,
          "regencyCode": 3505,
          "name": "PONGGOK"
        },
        {
          "code": 3505200,
          "regencyCode": 3505,
          "name": "SRENGAT"
        },
        {
          "code": 3505210,
          "regencyCode": 3505,
          "name": "WONODADI"
        },
        {
          "code": 3505220,
          "regencyCode": 3505,
          "name": "UDANAWU"
        },
        {
          "code": 3506010,
          "regencyCode": 3506,
          "name": "MOJO"
        },
        {
          "code": 3506020,
          "regencyCode": 3506,
          "name": "SEMEN"
        },
        {
          "code": 3506030,
          "regencyCode": 3506,
          "name": "NGADILUWIH"
        },
        {
          "code": 3506040,
          "regencyCode": 3506,
          "name": "KRAS"
        },
        {
          "code": 3506050,
          "regencyCode": 3506,
          "name": "RINGINREJO"
        },
        {
          "code": 3506060,
          "regencyCode": 3506,
          "name": "KANDAT"
        },
        {
          "code": 3506070,
          "regencyCode": 3506,
          "name": "WATES"
        },
        {
          "code": 3506080,
          "regencyCode": 3506,
          "name": "NGANCAR"
        },
        {
          "code": 3506090,
          "regencyCode": 3506,
          "name": "PLOSOKLATEN"
        },
        {
          "code": 3506100,
          "regencyCode": 3506,
          "name": "GURAH"
        },
        {
          "code": 3506110,
          "regencyCode": 3506,
          "name": "PUNCU"
        },
        {
          "code": 3506120,
          "regencyCode": 3506,
          "name": "KEPUNG"
        },
        {
          "code": 3506130,
          "regencyCode": 3506,
          "name": "KANDANGAN"
        },
        {
          "code": 3506140,
          "regencyCode": 3506,
          "name": "PARE"
        },
        {
          "code": 3506141,
          "regencyCode": 3506,
          "name": "BADAS"
        },
        {
          "code": 3506150,
          "regencyCode": 3506,
          "name": "KUNJANG"
        },
        {
          "code": 3506160,
          "regencyCode": 3506,
          "name": "PLEMAHAN"
        },
        {
          "code": 3506170,
          "regencyCode": 3506,
          "name": "PURWOASRI"
        },
        {
          "code": 3506180,
          "regencyCode": 3506,
          "name": "PAPAR"
        },
        {
          "code": 3506190,
          "regencyCode": 3506,
          "name": "PAGU"
        },
        {
          "code": 3506191,
          "regencyCode": 3506,
          "name": "KAYEN KIDUL"
        },
        {
          "code": 3506200,
          "regencyCode": 3506,
          "name": "GAMPENGREJO"
        },
        {
          "code": 3506201,
          "regencyCode": 3506,
          "name": "NGASEM"
        },
        {
          "code": 3506210,
          "regencyCode": 3506,
          "name": "BANYAKAN"
        },
        {
          "code": 3506220,
          "regencyCode": 3506,
          "name": "GROGOL"
        },
        {
          "code": 3506230,
          "regencyCode": 3506,
          "name": "TAROKAN"
        },
        {
          "code": 3507010,
          "regencyCode": 3507,
          "name": "DONOMULYO"
        },
        {
          "code": 3507020,
          "regencyCode": 3507,
          "name": "KALIPARE"
        },
        {
          "code": 3507030,
          "regencyCode": 3507,
          "name": "PAGAK"
        },
        {
          "code": 3507040,
          "regencyCode": 3507,
          "name": "BANTUR"
        },
        {
          "code": 3507050,
          "regencyCode": 3507,
          "name": "GEDANGAN"
        },
        {
          "code": 3507060,
          "regencyCode": 3507,
          "name": "SUMBERMANJING"
        },
        {
          "code": 3507070,
          "regencyCode": 3507,
          "name": "DAMPIT"
        },
        {
          "code": 3507080,
          "regencyCode": 3507,
          "name": "TIRTO YUDO"
        },
        {
          "code": 3507090,
          "regencyCode": 3507,
          "name": "AMPELGADING"
        },
        {
          "code": 3507100,
          "regencyCode": 3507,
          "name": "PONCOKUSUMO"
        },
        {
          "code": 3507110,
          "regencyCode": 3507,
          "name": "WAJAK"
        },
        {
          "code": 3507120,
          "regencyCode": 3507,
          "name": "TUREN"
        },
        {
          "code": 3507130,
          "regencyCode": 3507,
          "name": "BULULAWANG"
        },
        {
          "code": 3507140,
          "regencyCode": 3507,
          "name": "GONDANGLEGI"
        },
        {
          "code": 3507150,
          "regencyCode": 3507,
          "name": "PAGELARAN"
        },
        {
          "code": 3507160,
          "regencyCode": 3507,
          "name": "KEPANJEN"
        },
        {
          "code": 3507170,
          "regencyCode": 3507,
          "name": "SUMBER PUCUNG"
        },
        {
          "code": 3507180,
          "regencyCode": 3507,
          "name": "KROMENGAN"
        },
        {
          "code": 3507190,
          "regencyCode": 3507,
          "name": "NGAJUM"
        },
        {
          "code": 3507200,
          "regencyCode": 3507,
          "name": "WONOSARI"
        },
        {
          "code": 3507210,
          "regencyCode": 3507,
          "name": "WAGIR"
        },
        {
          "code": 3507220,
          "regencyCode": 3507,
          "name": "PAKISAJI"
        },
        {
          "code": 3507230,
          "regencyCode": 3507,
          "name": "TAJINAN"
        },
        {
          "code": 3507240,
          "regencyCode": 3507,
          "name": "TUMPANG"
        },
        {
          "code": 3507250,
          "regencyCode": 3507,
          "name": "PAKIS"
        },
        {
          "code": 3507260,
          "regencyCode": 3507,
          "name": "JABUNG"
        },
        {
          "code": 3507270,
          "regencyCode": 3507,
          "name": "LAWANG"
        },
        {
          "code": 3507280,
          "regencyCode": 3507,
          "name": "SINGOSARI"
        },
        {
          "code": 3507290,
          "regencyCode": 3507,
          "name": "KARANGPLOSO"
        },
        {
          "code": 3507300,
          "regencyCode": 3507,
          "name": "DAU"
        },
        {
          "code": 3507310,
          "regencyCode": 3507,
          "name": "PUJON"
        },
        {
          "code": 3507320,
          "regencyCode": 3507,
          "name": "NGANTANG"
        },
        {
          "code": 3507330,
          "regencyCode": 3507,
          "name": "KASEMBON"
        },
        {
          "code": 3508010,
          "regencyCode": 3508,
          "name": "TEMPURSARI"
        },
        {
          "code": 3508020,
          "regencyCode": 3508,
          "name": "PRONOJIWO"
        },
        {
          "code": 3508030,
          "regencyCode": 3508,
          "name": "CANDIPURO"
        },
        {
          "code": 3508040,
          "regencyCode": 3508,
          "name": "PASIRIAN"
        },
        {
          "code": 3508050,
          "regencyCode": 3508,
          "name": "TEMPEH"
        },
        {
          "code": 3508060,
          "regencyCode": 3508,
          "name": "LUMAJANG"
        },
        {
          "code": 3508061,
          "regencyCode": 3508,
          "name": "SUMBERSUKO"
        },
        {
          "code": 3508070,
          "regencyCode": 3508,
          "name": "TEKUNG"
        },
        {
          "code": 3508080,
          "regencyCode": 3508,
          "name": "KUNIR"
        },
        {
          "code": 3508090,
          "regencyCode": 3508,
          "name": "YOSOWILANGUN"
        },
        {
          "code": 3508100,
          "regencyCode": 3508,
          "name": "ROWOKANGKUNG"
        },
        {
          "code": 3508110,
          "regencyCode": 3508,
          "name": "JATIROTO"
        },
        {
          "code": 3508120,
          "regencyCode": 3508,
          "name": "RANDUAGUNG"
        },
        {
          "code": 3508130,
          "regencyCode": 3508,
          "name": "SUKODONO"
        },
        {
          "code": 3508140,
          "regencyCode": 3508,
          "name": "PADANG"
        },
        {
          "code": 3508150,
          "regencyCode": 3508,
          "name": "PASRUJAMBE"
        },
        {
          "code": 3508160,
          "regencyCode": 3508,
          "name": "SENDURO"
        },
        {
          "code": 3508170,
          "regencyCode": 3508,
          "name": "GUCIALIT"
        },
        {
          "code": 3508180,
          "regencyCode": 3508,
          "name": "KEDUNGJAJANG"
        },
        {
          "code": 3508190,
          "regencyCode": 3508,
          "name": "KLAKAH"
        },
        {
          "code": 3508200,
          "regencyCode": 3508,
          "name": "RANUYOSO"
        },
        {
          "code": 3509010,
          "regencyCode": 3509,
          "name": "KENCONG"
        },
        {
          "code": 3509020,
          "regencyCode": 3509,
          "name": "GUMUK MAS"
        },
        {
          "code": 3509030,
          "regencyCode": 3509,
          "name": "PUGER"
        },
        {
          "code": 3509040,
          "regencyCode": 3509,
          "name": "WULUHAN"
        },
        {
          "code": 3509050,
          "regencyCode": 3509,
          "name": "AMBULU"
        },
        {
          "code": 3509060,
          "regencyCode": 3509,
          "name": "TEMPUREJO"
        },
        {
          "code": 3509070,
          "regencyCode": 3509,
          "name": "SILO"
        },
        {
          "code": 3509080,
          "regencyCode": 3509,
          "name": "MAYANG"
        },
        {
          "code": 3509090,
          "regencyCode": 3509,
          "name": "MUMBULSARI"
        },
        {
          "code": 3509100,
          "regencyCode": 3509,
          "name": "JENGGAWAH"
        },
        {
          "code": 3509110,
          "regencyCode": 3509,
          "name": "AJUNG"
        },
        {
          "code": 3509120,
          "regencyCode": 3509,
          "name": "RAMBIPUJI"
        },
        {
          "code": 3509130,
          "regencyCode": 3509,
          "name": "BALUNG"
        },
        {
          "code": 3509140,
          "regencyCode": 3509,
          "name": "UMBULSARI"
        },
        {
          "code": 3509150,
          "regencyCode": 3509,
          "name": "SEMBORO"
        },
        {
          "code": 3509160,
          "regencyCode": 3509,
          "name": "JOMBANG"
        },
        {
          "code": 3509170,
          "regencyCode": 3509,
          "name": "SUMBER BARU"
        },
        {
          "code": 3509180,
          "regencyCode": 3509,
          "name": "TANGGUL"
        },
        {
          "code": 3509190,
          "regencyCode": 3509,
          "name": "BANGSALSARI"
        },
        {
          "code": 3509200,
          "regencyCode": 3509,
          "name": "PANTI"
        },
        {
          "code": 3509210,
          "regencyCode": 3509,
          "name": "SUKORAMBI"
        },
        {
          "code": 3509220,
          "regencyCode": 3509,
          "name": "ARJASA"
        },
        {
          "code": 3509230,
          "regencyCode": 3509,
          "name": "PAKUSARI"
        },
        {
          "code": 3509240,
          "regencyCode": 3509,
          "name": "KALISAT"
        },
        {
          "code": 3509250,
          "regencyCode": 3509,
          "name": "LEDOKOMBO"
        },
        {
          "code": 3509260,
          "regencyCode": 3509,
          "name": "SUMBERJAMBE"
        },
        {
          "code": 3509270,
          "regencyCode": 3509,
          "name": "SUKOWONO"
        },
        {
          "code": 3509280,
          "regencyCode": 3509,
          "name": "JELBUK"
        },
        {
          "code": 3509710,
          "regencyCode": 3509,
          "name": "KALIWATES"
        },
        {
          "code": 3509720,
          "regencyCode": 3509,
          "name": "SUMBERSARI"
        },
        {
          "code": 3509730,
          "regencyCode": 3509,
          "name": "PATRANG"
        },
        {
          "code": 3510010,
          "regencyCode": 3510,
          "name": "PESANGGARAN"
        },
        {
          "code": 3510011,
          "regencyCode": 3510,
          "name": "SILIRAGUNG"
        },
        {
          "code": 3510020,
          "regencyCode": 3510,
          "name": "BANGOREJO"
        },
        {
          "code": 3510030,
          "regencyCode": 3510,
          "name": "PURWOHARJO"
        },
        {
          "code": 3510040,
          "regencyCode": 3510,
          "name": "TEGALDLIMO"
        },
        {
          "code": 3510050,
          "regencyCode": 3510,
          "name": "MUNCAR"
        },
        {
          "code": 3510060,
          "regencyCode": 3510,
          "name": "CLURING"
        },
        {
          "code": 3510070,
          "regencyCode": 3510,
          "name": "GAMBIRAN"
        },
        {
          "code": 3510071,
          "regencyCode": 3510,
          "name": "TEGALSARI"
        },
        {
          "code": 3510080,
          "regencyCode": 3510,
          "name": "GLENMORE"
        },
        {
          "code": 3510090,
          "regencyCode": 3510,
          "name": "KALIBARU"
        },
        {
          "code": 3510100,
          "regencyCode": 3510,
          "name": "GENTENG"
        },
        {
          "code": 3510110,
          "regencyCode": 3510,
          "name": "SRONO"
        },
        {
          "code": 3510120,
          "regencyCode": 3510,
          "name": "ROGOJAMPI"
        },
        {
          "code": 3510130,
          "regencyCode": 3510,
          "name": "KABAT"
        },
        {
          "code": 3510140,
          "regencyCode": 3510,
          "name": "SINGOJURUH"
        },
        {
          "code": 3510150,
          "regencyCode": 3510,
          "name": "SEMPU"
        },
        {
          "code": 3510160,
          "regencyCode": 3510,
          "name": "SONGGON"
        },
        {
          "code": 3510170,
          "regencyCode": 3510,
          "name": "GLAGAH"
        },
        {
          "code": 3510171,
          "regencyCode": 3510,
          "name": "LICIN"
        },
        {
          "code": 3510180,
          "regencyCode": 3510,
          "name": "BANYUWANGI"
        },
        {
          "code": 3510190,
          "regencyCode": 3510,
          "name": "GIRI"
        },
        {
          "code": 3510200,
          "regencyCode": 3510,
          "name": "KALIPURO"
        },
        {
          "code": 3510210,
          "regencyCode": 3510,
          "name": "WONGSOREJO"
        },
        {
          "code": 3511010,
          "regencyCode": 3511,
          "name": "MAESAN"
        },
        {
          "code": 3511020,
          "regencyCode": 3511,
          "name": "GRUJUGAN"
        },
        {
          "code": 3511030,
          "regencyCode": 3511,
          "name": "TAMANAN"
        },
        {
          "code": 3511031,
          "regencyCode": 3511,
          "name": "JAMBESARI DARUS SHOLAH"
        },
        {
          "code": 3511040,
          "regencyCode": 3511,
          "name": "PUJER"
        },
        {
          "code": 3511050,
          "regencyCode": 3511,
          "name": "TLOGOSARI"
        },
        {
          "code": 3511060,
          "regencyCode": 3511,
          "name": "SUKOSARI"
        },
        {
          "code": 3511061,
          "regencyCode": 3511,
          "name": "SUMBER WRINGIN"
        },
        {
          "code": 3511070,
          "regencyCode": 3511,
          "name": "TAPEN"
        },
        {
          "code": 3511080,
          "regencyCode": 3511,
          "name": "WONOSARI"
        },
        {
          "code": 3511090,
          "regencyCode": 3511,
          "name": "TENGGARANG"
        },
        {
          "code": 3511100,
          "regencyCode": 3511,
          "name": "BONDOWOSO"
        },
        {
          "code": 3511110,
          "regencyCode": 3511,
          "name": "CURAH DAMI"
        },
        {
          "code": 3511111,
          "regencyCode": 3511,
          "name": "BINAKAL"
        },
        {
          "code": 3511120,
          "regencyCode": 3511,
          "name": "PAKEM"
        },
        {
          "code": 3511130,
          "regencyCode": 3511,
          "name": "WRINGIN"
        },
        {
          "code": 3511140,
          "regencyCode": 3511,
          "name": "TEGALAMPEL"
        },
        {
          "code": 3511141,
          "regencyCode": 3511,
          "name": "TAMAN KROCOK"
        },
        {
          "code": 3511150,
          "regencyCode": 3511,
          "name": "KLABANG"
        },
        {
          "code": 3511151,
          "regencyCode": 3511,
          "name": "SEMPOL"
        },
        {
          "code": 3511152,
          "regencyCode": 3511,
          "name": "BOTOLINGGO"
        },
        {
          "code": 3511160,
          "regencyCode": 3511,
          "name": "PRAJEKAN"
        },
        {
          "code": 3511170,
          "regencyCode": 3511,
          "name": "CERMEE"
        },
        {
          "code": 3512010,
          "regencyCode": 3512,
          "name": "SUMBERMALANG"
        },
        {
          "code": 3512020,
          "regencyCode": 3512,
          "name": "JATIBANTENG"
        },
        {
          "code": 3512030,
          "regencyCode": 3512,
          "name": "BANYUGLUGUR"
        },
        {
          "code": 3512040,
          "regencyCode": 3512,
          "name": "BESUKI"
        },
        {
          "code": 3512050,
          "regencyCode": 3512,
          "name": "SUBOH"
        },
        {
          "code": 3512060,
          "regencyCode": 3512,
          "name": "MLANDINGAN"
        },
        {
          "code": 3512070,
          "regencyCode": 3512,
          "name": "BUNGATAN"
        },
        {
          "code": 3512080,
          "regencyCode": 3512,
          "name": "KENDIT"
        },
        {
          "code": 3512090,
          "regencyCode": 3512,
          "name": "PANARUKAN"
        },
        {
          "code": 3512100,
          "regencyCode": 3512,
          "name": "SITUBONDO"
        },
        {
          "code": 3512110,
          "regencyCode": 3512,
          "name": "MANGARAN"
        },
        {
          "code": 3512120,
          "regencyCode": 3512,
          "name": "PANJI"
        },
        {
          "code": 3512130,
          "regencyCode": 3512,
          "name": "KAPONGAN"
        },
        {
          "code": 3512140,
          "regencyCode": 3512,
          "name": "ARJASA"
        },
        {
          "code": 3512150,
          "regencyCode": 3512,
          "name": "JANGKAR"
        },
        {
          "code": 3512160,
          "regencyCode": 3512,
          "name": "ASEMBAGUS"
        },
        {
          "code": 3512170,
          "regencyCode": 3512,
          "name": "BANYUPUTIH"
        },
        {
          "code": 3513010,
          "regencyCode": 3513,
          "name": "SUKAPURA"
        },
        {
          "code": 3513020,
          "regencyCode": 3513,
          "name": "SUMBER"
        },
        {
          "code": 3513030,
          "regencyCode": 3513,
          "name": "KURIPAN"
        },
        {
          "code": 3513040,
          "regencyCode": 3513,
          "name": "BANTARAN"
        },
        {
          "code": 3513050,
          "regencyCode": 3513,
          "name": "LECES"
        },
        {
          "code": 3513060,
          "regencyCode": 3513,
          "name": "TEGALSIWALAN"
        },
        {
          "code": 3513070,
          "regencyCode": 3513,
          "name": "BANYUANYAR"
        },
        {
          "code": 3513080,
          "regencyCode": 3513,
          "name": "TIRIS"
        },
        {
          "code": 3513090,
          "regencyCode": 3513,
          "name": "KRUCIL"
        },
        {
          "code": 3513100,
          "regencyCode": 3513,
          "name": "GADING"
        },
        {
          "code": 3513110,
          "regencyCode": 3513,
          "name": "PAKUNIRAN"
        },
        {
          "code": 3513120,
          "regencyCode": 3513,
          "name": "KOTAANYAR"
        },
        {
          "code": 3513130,
          "regencyCode": 3513,
          "name": "PAITON"
        },
        {
          "code": 3513140,
          "regencyCode": 3513,
          "name": "BESUK"
        },
        {
          "code": 3513150,
          "regencyCode": 3513,
          "name": "KRAKSAAN"
        },
        {
          "code": 3513160,
          "regencyCode": 3513,
          "name": "KREJENGAN"
        },
        {
          "code": 3513170,
          "regencyCode": 3513,
          "name": "PAJARAKAN"
        },
        {
          "code": 3513180,
          "regencyCode": 3513,
          "name": "MARON"
        },
        {
          "code": 3513190,
          "regencyCode": 3513,
          "name": "GENDING"
        },
        {
          "code": 3513200,
          "regencyCode": 3513,
          "name": "DRINGU"
        },
        {
          "code": 3513210,
          "regencyCode": 3513,
          "name": "WONOMERTO"
        },
        {
          "code": 3513220,
          "regencyCode": 3513,
          "name": "LUMBANG"
        },
        {
          "code": 3513230,
          "regencyCode": 3513,
          "name": "TONGAS"
        },
        {
          "code": 3513240,
          "regencyCode": 3513,
          "name": "SUMBERASIH"
        },
        {
          "code": 3514010,
          "regencyCode": 3514,
          "name": "PURWODADI"
        },
        {
          "code": 3514020,
          "regencyCode": 3514,
          "name": "TUTUR"
        },
        {
          "code": 3514030,
          "regencyCode": 3514,
          "name": "PUSPO"
        },
        {
          "code": 3514040,
          "regencyCode": 3514,
          "name": "TOSARI"
        },
        {
          "code": 3514050,
          "regencyCode": 3514,
          "name": "LUMBANG"
        },
        {
          "code": 3514060,
          "regencyCode": 3514,
          "name": "PASREPAN"
        },
        {
          "code": 3514070,
          "regencyCode": 3514,
          "name": "KEJAYAN"
        },
        {
          "code": 3514080,
          "regencyCode": 3514,
          "name": "WONOREJO"
        },
        {
          "code": 3514090,
          "regencyCode": 3514,
          "name": "PURWOSARI"
        },
        {
          "code": 3514100,
          "regencyCode": 3514,
          "name": "PRIGEN"
        },
        {
          "code": 3514110,
          "regencyCode": 3514,
          "name": "SUKOREJO"
        },
        {
          "code": 3514120,
          "regencyCode": 3514,
          "name": "PANDAAN"
        },
        {
          "code": 3514130,
          "regencyCode": 3514,
          "name": "GEMPOL"
        },
        {
          "code": 3514140,
          "regencyCode": 3514,
          "name": "BEJI"
        },
        {
          "code": 3514150,
          "regencyCode": 3514,
          "name": "BANGIL"
        },
        {
          "code": 3514160,
          "regencyCode": 3514,
          "name": "REMBANG"
        },
        {
          "code": 3514170,
          "regencyCode": 3514,
          "name": "KRATON"
        },
        {
          "code": 3514180,
          "regencyCode": 3514,
          "name": "POHJENTREK"
        },
        {
          "code": 3514190,
          "regencyCode": 3514,
          "name": "GONDANG WETAN"
        },
        {
          "code": 3514200,
          "regencyCode": 3514,
          "name": "REJOSO"
        },
        {
          "code": 3514210,
          "regencyCode": 3514,
          "name": "WINONGAN"
        },
        {
          "code": 3514220,
          "regencyCode": 3514,
          "name": "GRATI"
        },
        {
          "code": 3514230,
          "regencyCode": 3514,
          "name": "LEKOK"
        },
        {
          "code": 3514240,
          "regencyCode": 3514,
          "name": "NGULING"
        },
        {
          "code": 3515010,
          "regencyCode": 3515,
          "name": "TARIK"
        },
        {
          "code": 3515020,
          "regencyCode": 3515,
          "name": "PRAMBON"
        },
        {
          "code": 3515030,
          "regencyCode": 3515,
          "name": "KREMBUNG"
        },
        {
          "code": 3515040,
          "regencyCode": 3515,
          "name": "PORONG"
        },
        {
          "code": 3515050,
          "regencyCode": 3515,
          "name": "JABON"
        },
        {
          "code": 3515060,
          "regencyCode": 3515,
          "name": "TANGGULANGIN"
        },
        {
          "code": 3515070,
          "regencyCode": 3515,
          "name": "CANDI"
        },
        {
          "code": 3515080,
          "regencyCode": 3515,
          "name": "TULANGAN"
        },
        {
          "code": 3515090,
          "regencyCode": 3515,
          "name": "WONOAYU"
        },
        {
          "code": 3515100,
          "regencyCode": 3515,
          "name": "SUKODONO"
        },
        {
          "code": 3515110,
          "regencyCode": 3515,
          "name": "SIDOARJO"
        },
        {
          "code": 3515120,
          "regencyCode": 3515,
          "name": "BUDURAN"
        },
        {
          "code": 3515130,
          "regencyCode": 3515,
          "name": "SEDATI"
        },
        {
          "code": 3515140,
          "regencyCode": 3515,
          "name": "WARU"
        },
        {
          "code": 3515150,
          "regencyCode": 3515,
          "name": "GEDANGAN"
        },
        {
          "code": 3515160,
          "regencyCode": 3515,
          "name": "TAMAN"
        },
        {
          "code": 3515170,
          "regencyCode": 3515,
          "name": "KRIAN"
        },
        {
          "code": 3515180,
          "regencyCode": 3515,
          "name": "BALONG BENDO"
        },
        {
          "code": 3516010,
          "regencyCode": 3516,
          "name": "JATIREJO"
        },
        {
          "code": 3516020,
          "regencyCode": 3516,
          "name": "GONDANG"
        },
        {
          "code": 3516030,
          "regencyCode": 3516,
          "name": "PACET"
        },
        {
          "code": 3516040,
          "regencyCode": 3516,
          "name": "TRAWAS"
        },
        {
          "code": 3516050,
          "regencyCode": 3516,
          "name": "NGORO"
        },
        {
          "code": 3516060,
          "regencyCode": 3516,
          "name": "PUNGGING"
        },
        {
          "code": 3516070,
          "regencyCode": 3516,
          "name": "KUTOREJO"
        },
        {
          "code": 3516080,
          "regencyCode": 3516,
          "name": "MOJOSARI"
        },
        {
          "code": 3516090,
          "regencyCode": 3516,
          "name": "BANGSAL"
        },
        {
          "code": 3516091,
          "regencyCode": 3516,
          "name": "MOJOANYAR"
        },
        {
          "code": 3516100,
          "regencyCode": 3516,
          "name": "DLANGGU"
        },
        {
          "code": 3516110,
          "regencyCode": 3516,
          "name": "PURI"
        },
        {
          "code": 3516120,
          "regencyCode": 3516,
          "name": "TROWULAN"
        },
        {
          "code": 3516130,
          "regencyCode": 3516,
          "name": "SOOKO"
        },
        {
          "code": 3516140,
          "regencyCode": 3516,
          "name": "GEDEK"
        },
        {
          "code": 3516150,
          "regencyCode": 3516,
          "name": "KEMLAGI"
        },
        {
          "code": 3516160,
          "regencyCode": 3516,
          "name": "JETIS"
        },
        {
          "code": 3516170,
          "regencyCode": 3516,
          "name": "DAWAR BLANDONG"
        },
        {
          "code": 3517010,
          "regencyCode": 3517,
          "name": "BANDAR KEDUNG MULYO"
        },
        {
          "code": 3517020,
          "regencyCode": 3517,
          "name": "PERAK"
        },
        {
          "code": 3517030,
          "regencyCode": 3517,
          "name": "GUDO"
        },
        {
          "code": 3517040,
          "regencyCode": 3517,
          "name": "DIWEK"
        },
        {
          "code": 3517050,
          "regencyCode": 3517,
          "name": "NGORO"
        },
        {
          "code": 3517060,
          "regencyCode": 3517,
          "name": "MOJOWARNO"
        },
        {
          "code": 3517070,
          "regencyCode": 3517,
          "name": "BARENG"
        },
        {
          "code": 3517080,
          "regencyCode": 3517,
          "name": "WONOSALAM"
        },
        {
          "code": 3517090,
          "regencyCode": 3517,
          "name": "MOJOAGUNG"
        },
        {
          "code": 3517100,
          "regencyCode": 3517,
          "name": "SUMOBITO"
        },
        {
          "code": 3517110,
          "regencyCode": 3517,
          "name": "JOGO ROTO"
        },
        {
          "code": 3517120,
          "regencyCode": 3517,
          "name": "PETERONGAN"
        },
        {
          "code": 3517130,
          "regencyCode": 3517,
          "name": "JOMBANG"
        },
        {
          "code": 3517140,
          "regencyCode": 3517,
          "name": "MEGALUH"
        },
        {
          "code": 3517150,
          "regencyCode": 3517,
          "name": "TEMBELANG"
        },
        {
          "code": 3517160,
          "regencyCode": 3517,
          "name": "KESAMBEN"
        },
        {
          "code": 3517170,
          "regencyCode": 3517,
          "name": "KUDU"
        },
        {
          "code": 3517171,
          "regencyCode": 3517,
          "name": "NGUSIKAN"
        },
        {
          "code": 3517180,
          "regencyCode": 3517,
          "name": "PLOSO"
        },
        {
          "code": 3517190,
          "regencyCode": 3517,
          "name": "KABUH"
        },
        {
          "code": 3517200,
          "regencyCode": 3517,
          "name": "PLANDAAN"
        },
        {
          "code": 3518010,
          "regencyCode": 3518,
          "name": "SAWAHAN"
        },
        {
          "code": 3518020,
          "regencyCode": 3518,
          "name": "NGETOS"
        },
        {
          "code": 3518030,
          "regencyCode": 3518,
          "name": "BERBEK"
        },
        {
          "code": 3518040,
          "regencyCode": 3518,
          "name": "LOCERET"
        },
        {
          "code": 3518050,
          "regencyCode": 3518,
          "name": "PACE"
        },
        {
          "code": 3518060,
          "regencyCode": 3518,
          "name": "TANJUNGANOM"
        },
        {
          "code": 3518070,
          "regencyCode": 3518,
          "name": "PRAMBON"
        },
        {
          "code": 3518080,
          "regencyCode": 3518,
          "name": "NGRONGGOT"
        },
        {
          "code": 3518090,
          "regencyCode": 3518,
          "name": "KERTOSONO"
        },
        {
          "code": 3518100,
          "regencyCode": 3518,
          "name": "PATIANROWO"
        },
        {
          "code": 3518110,
          "regencyCode": 3518,
          "name": "BARON"
        },
        {
          "code": 3518120,
          "regencyCode": 3518,
          "name": "GONDANG"
        },
        {
          "code": 3518130,
          "regencyCode": 3518,
          "name": "SUKOMORO"
        },
        {
          "code": 3518140,
          "regencyCode": 3518,
          "name": "NGANJUK"
        },
        {
          "code": 3518150,
          "regencyCode": 3518,
          "name": "BAGOR"
        },
        {
          "code": 3518160,
          "regencyCode": 3518,
          "name": "WILANGAN"
        },
        {
          "code": 3518170,
          "regencyCode": 3518,
          "name": "REJOSO"
        },
        {
          "code": 3518180,
          "regencyCode": 3518,
          "name": "NGLUYU"
        },
        {
          "code": 3518190,
          "regencyCode": 3518,
          "name": "LENGKONG"
        },
        {
          "code": 3518200,
          "regencyCode": 3518,
          "name": "JATIKALEN"
        },
        {
          "code": 3519010,
          "regencyCode": 3519,
          "name": "KEBONSARI"
        },
        {
          "code": 3519020,
          "regencyCode": 3519,
          "name": "GEGER"
        },
        {
          "code": 3519030,
          "regencyCode": 3519,
          "name": "DOLOPO"
        },
        {
          "code": 3519040,
          "regencyCode": 3519,
          "name": "DAGANGAN"
        },
        {
          "code": 3519050,
          "regencyCode": 3519,
          "name": "WUNGU"
        },
        {
          "code": 3519060,
          "regencyCode": 3519,
          "name": "KARE"
        },
        {
          "code": 3519070,
          "regencyCode": 3519,
          "name": "GEMARANG"
        },
        {
          "code": 3519080,
          "regencyCode": 3519,
          "name": "SARADAN"
        },
        {
          "code": 3519090,
          "regencyCode": 3519,
          "name": "PILANGKENCENG"
        },
        {
          "code": 3519100,
          "regencyCode": 3519,
          "name": "MEJAYAN"
        },
        {
          "code": 3519110,
          "regencyCode": 3519,
          "name": "WONOASRI"
        },
        {
          "code": 3519120,
          "regencyCode": 3519,
          "name": "BALEREJO"
        },
        {
          "code": 3519130,
          "regencyCode": 3519,
          "name": "MADIUN"
        },
        {
          "code": 3519140,
          "regencyCode": 3519,
          "name": "SAWAHAN"
        },
        {
          "code": 3519150,
          "regencyCode": 3519,
          "name": "JIWAN"
        },
        {
          "code": 3520010,
          "regencyCode": 3520,
          "name": "PONCOL"
        },
        {
          "code": 3520020,
          "regencyCode": 3520,
          "name": "PARANG"
        },
        {
          "code": 3520030,
          "regencyCode": 3520,
          "name": "LEMBEYAN"
        },
        {
          "code": 3520040,
          "regencyCode": 3520,
          "name": "TAKERAN"
        },
        {
          "code": 3520041,
          "regencyCode": 3520,
          "name": "NGUNTORONADI"
        },
        {
          "code": 3520050,
          "regencyCode": 3520,
          "name": "KAWEDANAN"
        },
        {
          "code": 3520060,
          "regencyCode": 3520,
          "name": "MAGETAN"
        },
        {
          "code": 3520061,
          "regencyCode": 3520,
          "name": "NGARIBOYO"
        },
        {
          "code": 3520070,
          "regencyCode": 3520,
          "name": "PLAOSAN"
        },
        {
          "code": 3520071,
          "regencyCode": 3520,
          "name": "SIDOREJO"
        },
        {
          "code": 3520080,
          "regencyCode": 3520,
          "name": "PANEKAN"
        },
        {
          "code": 3520090,
          "regencyCode": 3520,
          "name": "SUKOMORO"
        },
        {
          "code": 3520100,
          "regencyCode": 3520,
          "name": "BENDO"
        },
        {
          "code": 3520110,
          "regencyCode": 3520,
          "name": "MAOSPATI"
        },
        {
          "code": 3520120,
          "regencyCode": 3520,
          "name": "KARANGREJO"
        },
        {
          "code": 3520121,
          "regencyCode": 3520,
          "name": "KARAS"
        },
        {
          "code": 3520130,
          "regencyCode": 3520,
          "name": "BARAT"
        },
        {
          "code": 3520131,
          "regencyCode": 3520,
          "name": "KARTOHARJO"
        },
        {
          "code": 3521010,
          "regencyCode": 3521,
          "name": "SINE"
        },
        {
          "code": 3521020,
          "regencyCode": 3521,
          "name": "NGRAMBE"
        },
        {
          "code": 3521030,
          "regencyCode": 3521,
          "name": "JOGOROGO"
        },
        {
          "code": 3521040,
          "regencyCode": 3521,
          "name": "KENDAL"
        },
        {
          "code": 3521050,
          "regencyCode": 3521,
          "name": "GENENG"
        },
        {
          "code": 3521051,
          "regencyCode": 3521,
          "name": "GERIH"
        },
        {
          "code": 3521060,
          "regencyCode": 3521,
          "name": "KWADUNGAN"
        },
        {
          "code": 3521070,
          "regencyCode": 3521,
          "name": "PANGKUR"
        },
        {
          "code": 3521080,
          "regencyCode": 3521,
          "name": "KARANGJATI"
        },
        {
          "code": 3521090,
          "regencyCode": 3521,
          "name": "BRINGIN"
        },
        {
          "code": 3521100,
          "regencyCode": 3521,
          "name": "PADAS"
        },
        {
          "code": 3521101,
          "regencyCode": 3521,
          "name": "KASREMAN"
        },
        {
          "code": 3521110,
          "regencyCode": 3521,
          "name": "NGAWI"
        },
        {
          "code": 3521120,
          "regencyCode": 3521,
          "name": "PARON"
        },
        {
          "code": 3521130,
          "regencyCode": 3521,
          "name": "KEDUNGGALAR"
        },
        {
          "code": 3521140,
          "regencyCode": 3521,
          "name": "PITU"
        },
        {
          "code": 3521150,
          "regencyCode": 3521,
          "name": "WIDODAREN"
        },
        {
          "code": 3521160,
          "regencyCode": 3521,
          "name": "MANTINGAN"
        },
        {
          "code": 3521170,
          "regencyCode": 3521,
          "name": "KARANGANYAR"
        },
        {
          "code": 3522010,
          "regencyCode": 3522,
          "name": "MARGOMULYO"
        },
        {
          "code": 3522020,
          "regencyCode": 3522,
          "name": "NGRAHO"
        },
        {
          "code": 3522030,
          "regencyCode": 3522,
          "name": "TAMBAKREJO"
        },
        {
          "code": 3522040,
          "regencyCode": 3522,
          "name": "NGAMBON"
        },
        {
          "code": 3522041,
          "regencyCode": 3522,
          "name": "SEKAR"
        },
        {
          "code": 3522050,
          "regencyCode": 3522,
          "name": "BUBULAN"
        },
        {
          "code": 3522051,
          "regencyCode": 3522,
          "name": "GONDANG"
        },
        {
          "code": 3522060,
          "regencyCode": 3522,
          "name": "TEMAYANG"
        },
        {
          "code": 3522070,
          "regencyCode": 3522,
          "name": "SUGIHWARAS"
        },
        {
          "code": 3522080,
          "regencyCode": 3522,
          "name": "KEDUNGADEM"
        },
        {
          "code": 3522090,
          "regencyCode": 3522,
          "name": "KEPOH BARU"
        },
        {
          "code": 3522100,
          "regencyCode": 3522,
          "name": "BAURENO"
        },
        {
          "code": 3522110,
          "regencyCode": 3522,
          "name": "KANOR"
        },
        {
          "code": 3522120,
          "regencyCode": 3522,
          "name": "SUMBEREJO"
        },
        {
          "code": 3522130,
          "regencyCode": 3522,
          "name": "BALEN"
        },
        {
          "code": 3522140,
          "regencyCode": 3522,
          "name": "SUKOSEWU"
        },
        {
          "code": 3522150,
          "regencyCode": 3522,
          "name": "KAPAS"
        },
        {
          "code": 3522160,
          "regencyCode": 3522,
          "name": "BOJONEGORO"
        },
        {
          "code": 3522170,
          "regencyCode": 3522,
          "name": "TRUCUK"
        },
        {
          "code": 3522180,
          "regencyCode": 3522,
          "name": "DANDER"
        },
        {
          "code": 3522190,
          "regencyCode": 3522,
          "name": "NGASEM"
        },
        {
          "code": 3522191,
          "regencyCode": 3522,
          "name": "GAYAM"
        },
        {
          "code": 3522200,
          "regencyCode": 3522,
          "name": "KALITIDU"
        },
        {
          "code": 3522210,
          "regencyCode": 3522,
          "name": "MALO"
        },
        {
          "code": 3522220,
          "regencyCode": 3522,
          "name": "PURWOSARI"
        },
        {
          "code": 3522230,
          "regencyCode": 3522,
          "name": "PADANGAN"
        },
        {
          "code": 3522240,
          "regencyCode": 3522,
          "name": "KASIMAN"
        },
        {
          "code": 3522241,
          "regencyCode": 3522,
          "name": "KEDEWAN"
        },
        {
          "code": 3523010,
          "regencyCode": 3523,
          "name": "KENDURUAN"
        },
        {
          "code": 3523020,
          "regencyCode": 3523,
          "name": "BANGILAN"
        },
        {
          "code": 3523030,
          "regencyCode": 3523,
          "name": "SENORI"
        },
        {
          "code": 3523040,
          "regencyCode": 3523,
          "name": "SINGGAHAN"
        },
        {
          "code": 3523050,
          "regencyCode": 3523,
          "name": "MONTONG"
        },
        {
          "code": 3523060,
          "regencyCode": 3523,
          "name": "PARENGAN"
        },
        {
          "code": 3523070,
          "regencyCode": 3523,
          "name": "SOKO"
        },
        {
          "code": 3523080,
          "regencyCode": 3523,
          "name": "RENGEL"
        },
        {
          "code": 3523081,
          "regencyCode": 3523,
          "name": "GRABAGAN"
        },
        {
          "code": 3523090,
          "regencyCode": 3523,
          "name": "PLUMPANG"
        },
        {
          "code": 3523100,
          "regencyCode": 3523,
          "name": "WIDANG"
        },
        {
          "code": 3523110,
          "regencyCode": 3523,
          "name": "PALANG"
        },
        {
          "code": 3523120,
          "regencyCode": 3523,
          "name": "SEMANDING"
        },
        {
          "code": 3523130,
          "regencyCode": 3523,
          "name": "TUBAN"
        },
        {
          "code": 3523140,
          "regencyCode": 3523,
          "name": "JENU"
        },
        {
          "code": 3523150,
          "regencyCode": 3523,
          "name": "MERAKURAK"
        },
        {
          "code": 3523160,
          "regencyCode": 3523,
          "name": "KEREK"
        },
        {
          "code": 3523170,
          "regencyCode": 3523,
          "name": "TAMBAKBOYO"
        },
        {
          "code": 3523180,
          "regencyCode": 3523,
          "name": "JATIROGO"
        },
        {
          "code": 3523190,
          "regencyCode": 3523,
          "name": "BANCAR"
        },
        {
          "code": 3524010,
          "regencyCode": 3524,
          "name": "SUKORAME"
        },
        {
          "code": 3524020,
          "regencyCode": 3524,
          "name": "BLULUK"
        },
        {
          "code": 3524030,
          "regencyCode": 3524,
          "name": "NGIMBANG"
        },
        {
          "code": 3524040,
          "regencyCode": 3524,
          "name": "SAMBENG"
        },
        {
          "code": 3524050,
          "regencyCode": 3524,
          "name": "MANTUP"
        },
        {
          "code": 3524060,
          "regencyCode": 3524,
          "name": "KEMBANGBAHU"
        },
        {
          "code": 3524070,
          "regencyCode": 3524,
          "name": "SUGIO"
        },
        {
          "code": 3524080,
          "regencyCode": 3524,
          "name": "KEDUNGPRING"
        },
        {
          "code": 3524090,
          "regencyCode": 3524,
          "name": "MODO"
        },
        {
          "code": 3524100,
          "regencyCode": 3524,
          "name": "BABAT"
        },
        {
          "code": 3524110,
          "regencyCode": 3524,
          "name": "PUCUK"
        },
        {
          "code": 3524120,
          "regencyCode": 3524,
          "name": "SUKODADI"
        },
        {
          "code": 3524130,
          "regencyCode": 3524,
          "name": "LAMONGAN"
        },
        {
          "code": 3524140,
          "regencyCode": 3524,
          "name": "TIKUNG"
        },
        {
          "code": 3524141,
          "regencyCode": 3524,
          "name": "SARIREJO"
        },
        {
          "code": 3524150,
          "regencyCode": 3524,
          "name": "DEKET"
        },
        {
          "code": 3524160,
          "regencyCode": 3524,
          "name": "GLAGAH"
        },
        {
          "code": 3524170,
          "regencyCode": 3524,
          "name": "KARANGBINANGUN"
        },
        {
          "code": 3524180,
          "regencyCode": 3524,
          "name": "TURI"
        },
        {
          "code": 3524190,
          "regencyCode": 3524,
          "name": "KALITENGAH"
        },
        {
          "code": 3524200,
          "regencyCode": 3524,
          "name": "KARANG GENENG"
        },
        {
          "code": 3524210,
          "regencyCode": 3524,
          "name": "SEKARAN"
        },
        {
          "code": 3524220,
          "regencyCode": 3524,
          "name": "MADURAN"
        },
        {
          "code": 3524230,
          "regencyCode": 3524,
          "name": "LAREN"
        },
        {
          "code": 3524240,
          "regencyCode": 3524,
          "name": "SOLOKURO"
        },
        {
          "code": 3524250,
          "regencyCode": 3524,
          "name": "PACIRAN"
        },
        {
          "code": 3524260,
          "regencyCode": 3524,
          "name": "BRONDONG"
        },
        {
          "code": 3525010,
          "regencyCode": 3525,
          "name": "WRINGINANOM"
        },
        {
          "code": 3525020,
          "regencyCode": 3525,
          "name": "DRIYOREJO"
        },
        {
          "code": 3525030,
          "regencyCode": 3525,
          "name": "KEDAMEAN"
        },
        {
          "code": 3525040,
          "regencyCode": 3525,
          "name": "MENGANTI"
        },
        {
          "code": 3525050,
          "regencyCode": 3525,
          "name": "CERME"
        },
        {
          "code": 3525060,
          "regencyCode": 3525,
          "name": "BENJENG"
        },
        {
          "code": 3525070,
          "regencyCode": 3525,
          "name": "BALONGPANGGANG"
        },
        {
          "code": 3525080,
          "regencyCode": 3525,
          "name": "DUDUKSAMPEYAN"
        },
        {
          "code": 3525090,
          "regencyCode": 3525,
          "name": "KEBOMAS"
        },
        {
          "code": 3525100,
          "regencyCode": 3525,
          "name": "GRESIK"
        },
        {
          "code": 3525110,
          "regencyCode": 3525,
          "name": "MANYAR"
        },
        {
          "code": 3525120,
          "regencyCode": 3525,
          "name": "BUNGAH"
        },
        {
          "code": 3525130,
          "regencyCode": 3525,
          "name": "SIDAYU"
        },
        {
          "code": 3525140,
          "regencyCode": 3525,
          "name": "DUKUN"
        },
        {
          "code": 3525150,
          "regencyCode": 3525,
          "name": "PANCENG"
        },
        {
          "code": 3525160,
          "regencyCode": 3525,
          "name": "UJUNGPANGKAH"
        },
        {
          "code": 3525170,
          "regencyCode": 3525,
          "name": "SANGKAPURA"
        },
        {
          "code": 3525180,
          "regencyCode": 3525,
          "name": "TAMBAK"
        },
        {
          "code": 3526010,
          "regencyCode": 3526,
          "name": "KAMAL"
        },
        {
          "code": 3526020,
          "regencyCode": 3526,
          "name": "LABANG"
        },
        {
          "code": 3526030,
          "regencyCode": 3526,
          "name": "KWANYAR"
        },
        {
          "code": 3526040,
          "regencyCode": 3526,
          "name": "MODUNG"
        },
        {
          "code": 3526050,
          "regencyCode": 3526,
          "name": "BLEGA"
        },
        {
          "code": 3526060,
          "regencyCode": 3526,
          "name": "KONANG"
        },
        {
          "code": 3526070,
          "regencyCode": 3526,
          "name": "GALIS"
        },
        {
          "code": 3526080,
          "regencyCode": 3526,
          "name": "TANAH MERAH"
        },
        {
          "code": 3526090,
          "regencyCode": 3526,
          "name": "TRAGAH"
        },
        {
          "code": 3526100,
          "regencyCode": 3526,
          "name": "SOCAH"
        },
        {
          "code": 3526110,
          "regencyCode": 3526,
          "name": "BANGKALAN"
        },
        {
          "code": 3526120,
          "regencyCode": 3526,
          "name": "BURNEH"
        },
        {
          "code": 3526130,
          "regencyCode": 3526,
          "name": "AROSBAYA"
        },
        {
          "code": 3526140,
          "regencyCode": 3526,
          "name": "GEGER"
        },
        {
          "code": 3526150,
          "regencyCode": 3526,
          "name": "KOKOP"
        },
        {
          "code": 3526160,
          "regencyCode": 3526,
          "name": "TANJUNGBUMI"
        },
        {
          "code": 3526170,
          "regencyCode": 3526,
          "name": "SEPULU"
        },
        {
          "code": 3526180,
          "regencyCode": 3526,
          "name": "KLAMPIS"
        },
        {
          "code": 3527010,
          "regencyCode": 3527,
          "name": "SRESEH"
        },
        {
          "code": 3527020,
          "regencyCode": 3527,
          "name": "TORJUN"
        },
        {
          "code": 3527021,
          "regencyCode": 3527,
          "name": "PANGARENGAN"
        },
        {
          "code": 3527030,
          "regencyCode": 3527,
          "name": "SAMPANG"
        },
        {
          "code": 3527040,
          "regencyCode": 3527,
          "name": "CAMPLONG"
        },
        {
          "code": 3527050,
          "regencyCode": 3527,
          "name": "OMBEN"
        },
        {
          "code": 3527060,
          "regencyCode": 3527,
          "name": "KEDUNGDUNG"
        },
        {
          "code": 3527070,
          "regencyCode": 3527,
          "name": "JRENGIK"
        },
        {
          "code": 3527080,
          "regencyCode": 3527,
          "name": "TAMBELANGAN"
        },
        {
          "code": 3527090,
          "regencyCode": 3527,
          "name": "BANYUATES"
        },
        {
          "code": 3527100,
          "regencyCode": 3527,
          "name": "ROBATAL"
        },
        {
          "code": 3527101,
          "regencyCode": 3527,
          "name": "KARANG PENANG"
        },
        {
          "code": 3527110,
          "regencyCode": 3527,
          "name": "KETAPANG"
        },
        {
          "code": 3527120,
          "regencyCode": 3527,
          "name": "SOKOBANAH"
        },
        {
          "code": 3528010,
          "regencyCode": 3528,
          "name": "TLANAKAN"
        },
        {
          "code": 3528020,
          "regencyCode": 3528,
          "name": "PADEMAWU"
        },
        {
          "code": 3528030,
          "regencyCode": 3528,
          "name": "GALIS"
        },
        {
          "code": 3528040,
          "regencyCode": 3528,
          "name": "LARANGAN"
        },
        {
          "code": 3528050,
          "regencyCode": 3528,
          "name": "PAMEKASAN"
        },
        {
          "code": 3528060,
          "regencyCode": 3528,
          "name": "PROPPO"
        },
        {
          "code": 3528070,
          "regencyCode": 3528,
          "name": "PALENGAAN"
        },
        {
          "code": 3528080,
          "regencyCode": 3528,
          "name": "PEGANTENAN"
        },
        {
          "code": 3528090,
          "regencyCode": 3528,
          "name": "KADUR"
        },
        {
          "code": 3528100,
          "regencyCode": 3528,
          "name": "PAKONG"
        },
        {
          "code": 3528110,
          "regencyCode": 3528,
          "name": "WARU"
        },
        {
          "code": 3528120,
          "regencyCode": 3528,
          "name": "BATU MARMAR"
        },
        {
          "code": 3528130,
          "regencyCode": 3528,
          "name": "PASEAN"
        },
        {
          "code": 3529010,
          "regencyCode": 3529,
          "name": "PRAGAAN"
        },
        {
          "code": 3529020,
          "regencyCode": 3529,
          "name": "BLUTO"
        },
        {
          "code": 3529030,
          "regencyCode": 3529,
          "name": "SARONGGI"
        },
        {
          "code": 3529040,
          "regencyCode": 3529,
          "name": "GILIGENTENG"
        },
        {
          "code": 3529050,
          "regencyCode": 3529,
          "name": "TALANGO"
        },
        {
          "code": 3529060,
          "regencyCode": 3529,
          "name": "KALIANGET"
        },
        {
          "code": 3529070,
          "regencyCode": 3529,
          "name": "KOTA SUMENEP"
        },
        {
          "code": 3529071,
          "regencyCode": 3529,
          "name": "BATUAN"
        },
        {
          "code": 3529080,
          "regencyCode": 3529,
          "name": "LENTENG"
        },
        {
          "code": 3529090,
          "regencyCode": 3529,
          "name": "GANDING"
        },
        {
          "code": 3529100,
          "regencyCode": 3529,
          "name": "GULUK GULUK"
        },
        {
          "code": 3529110,
          "regencyCode": 3529,
          "name": "PASONGSONGAN"
        },
        {
          "code": 3529120,
          "regencyCode": 3529,
          "name": "AMBUNTEN"
        },
        {
          "code": 3529130,
          "regencyCode": 3529,
          "name": "RUBARU"
        },
        {
          "code": 3529140,
          "regencyCode": 3529,
          "name": "DASUK"
        },
        {
          "code": 3529150,
          "regencyCode": 3529,
          "name": "MANDING"
        },
        {
          "code": 3529160,
          "regencyCode": 3529,
          "name": "BATUPUTIH"
        },
        {
          "code": 3529170,
          "regencyCode": 3529,
          "name": "GAPURA"
        },
        {
          "code": 3529180,
          "regencyCode": 3529,
          "name": "BATANG BATANG"
        },
        {
          "code": 3529190,
          "regencyCode": 3529,
          "name": "DUNGKEK"
        },
        {
          "code": 3529200,
          "regencyCode": 3529,
          "name": "NONGGUNONG"
        },
        {
          "code": 3529210,
          "regencyCode": 3529,
          "name": "GAYAM"
        },
        {
          "code": 3529220,
          "regencyCode": 3529,
          "name": "RAAS"
        },
        {
          "code": 3529230,
          "regencyCode": 3529,
          "name": "SAPEKEN"
        },
        {
          "code": 3529240,
          "regencyCode": 3529,
          "name": "ARJASA"
        },
        {
          "code": 3529241,
          "regencyCode": 3529,
          "name": "KANGAYAN"
        },
        {
          "code": 3529250,
          "regencyCode": 3529,
          "name": "MASALEMBU"
        },
        {
          "code": 3571010,
          "regencyCode": 3571,
          "name": "MOJOROTO"
        },
        {
          "code": 3571020,
          "regencyCode": 3571,
          "name": "KOTA KEDIRI"
        },
        {
          "code": 3571030,
          "regencyCode": 3571,
          "name": "PESANTREN"
        },
        {
          "code": 3572010,
          "regencyCode": 3572,
          "name": "SUKOREJO"
        },
        {
          "code": 3572020,
          "regencyCode": 3572,
          "name": "KEPANJENKIDUL"
        },
        {
          "code": 3572030,
          "regencyCode": 3572,
          "name": "SANANWETAN"
        },
        {
          "code": 3573010,
          "regencyCode": 3573,
          "name": "KEDUNGKANDANG"
        },
        {
          "code": 3573020,
          "regencyCode": 3573,
          "name": "SUKUN"
        },
        {
          "code": 3573030,
          "regencyCode": 3573,
          "name": "KLOJEN"
        },
        {
          "code": 3573040,
          "regencyCode": 3573,
          "name": "BLIMBING"
        },
        {
          "code": 3573050,
          "regencyCode": 3573,
          "name": "LOWOKWARU"
        },
        {
          "code": 3574010,
          "regencyCode": 3574,
          "name": "KADEMANGAN"
        },
        {
          "code": 3574011,
          "regencyCode": 3574,
          "name": "KEDOPOK"
        },
        {
          "code": 3574020,
          "regencyCode": 3574,
          "name": "WONOASIH"
        },
        {
          "code": 3574030,
          "regencyCode": 3574,
          "name": "MAYANGAN"
        },
        {
          "code": 3574031,
          "regencyCode": 3574,
          "name": "KANIGARAN"
        },
        {
          "code": 3575010,
          "regencyCode": 3575,
          "name": "GADINGREJO"
        },
        {
          "code": 3575020,
          "regencyCode": 3575,
          "name": "PURWOREJO"
        },
        {
          "code": 3575030,
          "regencyCode": 3575,
          "name": "BUGULKIDUL"
        },
        {
          "code": 3575031,
          "regencyCode": 3575,
          "name": "PANGGUNGREJO"
        },
        {
          "code": 3576010,
          "regencyCode": 3576,
          "name": "PRAJURIT KULON"
        },
        {
          "code": 3576020,
          "regencyCode": 3576,
          "name": "MAGERSARI"
        },
        {
          "code": 3577010,
          "regencyCode": 3577,
          "name": "MANGU HARJO"
        },
        {
          "code": 3577020,
          "regencyCode": 3577,
          "name": "TAMAN"
        },
        {
          "code": 3577030,
          "regencyCode": 3577,
          "name": "KARTOHARJO"
        },
        {
          "code": 3578010,
          "regencyCode": 3578,
          "name": "KARANG PILANG"
        },
        {
          "code": 3578020,
          "regencyCode": 3578,
          "name": "JAMBANGAN"
        },
        {
          "code": 3578030,
          "regencyCode": 3578,
          "name": "GAYUNGAN"
        },
        {
          "code": 3578040,
          "regencyCode": 3578,
          "name": "WONOCOLO"
        },
        {
          "code": 3578050,
          "regencyCode": 3578,
          "name": "TENGGILIS MEJOYO"
        },
        {
          "code": 3578060,
          "regencyCode": 3578,
          "name": "GUNUNG ANYAR"
        },
        {
          "code": 3578070,
          "regencyCode": 3578,
          "name": "RUNGKUT"
        },
        {
          "code": 3578080,
          "regencyCode": 3578,
          "name": "SUKOLILO"
        },
        {
          "code": 3578090,
          "regencyCode": 3578,
          "name": "MULYOREJO"
        },
        {
          "code": 3578100,
          "regencyCode": 3578,
          "name": "GUBENG"
        },
        {
          "code": 3578110,
          "regencyCode": 3578,
          "name": "WONOKROMO"
        },
        {
          "code": 3578120,
          "regencyCode": 3578,
          "name": "DUKUH PAKIS"
        },
        {
          "code": 3578130,
          "regencyCode": 3578,
          "name": "WIYUNG"
        },
        {
          "code": 3578140,
          "regencyCode": 3578,
          "name": "LAKARSANTRI"
        },
        {
          "code": 3578141,
          "regencyCode": 3578,
          "name": "SAMBIKEREP"
        },
        {
          "code": 3578150,
          "regencyCode": 3578,
          "name": "TANDES"
        },
        {
          "code": 3578160,
          "regencyCode": 3578,
          "name": "SUKO MANUNGGAL"
        },
        {
          "code": 3578170,
          "regencyCode": 3578,
          "name": "SAWAHAN"
        },
        {
          "code": 3578180,
          "regencyCode": 3578,
          "name": "TEGALSARI"
        },
        {
          "code": 3578190,
          "regencyCode": 3578,
          "name": "GENTENG"
        },
        {
          "code": 3578200,
          "regencyCode": 3578,
          "name": "TAMBAKSARI"
        },
        {
          "code": 3578210,
          "regencyCode": 3578,
          "name": "KENJERAN"
        },
        {
          "code": 3578211,
          "regencyCode": 3578,
          "name": "BULAK"
        },
        {
          "code": 3578220,
          "regencyCode": 3578,
          "name": "SIMOKERTO"
        },
        {
          "code": 3578230,
          "regencyCode": 3578,
          "name": "SEMAMPIR"
        },
        {
          "code": 3578240,
          "regencyCode": 3578,
          "name": "PABEAN CANTIAN"
        },
        {
          "code": 3578250,
          "regencyCode": 3578,
          "name": "BUBUTAN"
        },
        {
          "code": 3578260,
          "regencyCode": 3578,
          "name": "KREMBANGAN"
        },
        {
          "code": 3578270,
          "regencyCode": 3578,
          "name": "ASEMROWO"
        },
        {
          "code": 3578280,
          "regencyCode": 3578,
          "name": "BENOWO"
        },
        {
          "code": 3578281,
          "regencyCode": 3578,
          "name": "PAKAL"
        },
        {
          "code": 3579010,
          "regencyCode": 3579,
          "name": "BATU"
        },
        {
          "code": 3579020,
          "regencyCode": 3579,
          "name": "JUNREJO"
        },
        {
          "code": 3579030,
          "regencyCode": 3579,
          "name": "BUMIAJI"
        },
        {
          "code": 3601010,
          "regencyCode": 3601,
          "name": "SUMUR"
        },
        {
          "code": 3601020,
          "regencyCode": 3601,
          "name": "CIMANGGU"
        },
        {
          "code": 3601030,
          "regencyCode": 3601,
          "name": "CIBALIUNG"
        },
        {
          "code": 3601031,
          "regencyCode": 3601,
          "name": "CIBITUNG"
        },
        {
          "code": 3601040,
          "regencyCode": 3601,
          "name": "CIKEUSIK"
        },
        {
          "code": 3601050,
          "regencyCode": 3601,
          "name": "CIGEULIS"
        },
        {
          "code": 3601060,
          "regencyCode": 3601,
          "name": "PANIMBANG"
        },
        {
          "code": 3601061,
          "regencyCode": 3601,
          "name": "SOBANG"
        },
        {
          "code": 3601070,
          "regencyCode": 3601,
          "name": "MUNJUL"
        },
        {
          "code": 3601071,
          "regencyCode": 3601,
          "name": "ANGSANA"
        },
        {
          "code": 3601072,
          "regencyCode": 3601,
          "name": "SINDANGRESMI"
        },
        {
          "code": 3601080,
          "regencyCode": 3601,
          "name": "PICUNG"
        },
        {
          "code": 3601090,
          "regencyCode": 3601,
          "name": "BOJONG"
        },
        {
          "code": 3601100,
          "regencyCode": 3601,
          "name": "SAKETI"
        },
        {
          "code": 3601101,
          "regencyCode": 3601,
          "name": "CISATA"
        },
        {
          "code": 3601110,
          "regencyCode": 3601,
          "name": "PAGELARAN"
        },
        {
          "code": 3601111,
          "regencyCode": 3601,
          "name": "PATIA"
        },
        {
          "code": 3601112,
          "regencyCode": 3601,
          "name": "SUKARESMI"
        },
        {
          "code": 3601120,
          "regencyCode": 3601,
          "name": "LABUAN"
        },
        {
          "code": 3601121,
          "regencyCode": 3601,
          "name": "CARITA"
        },
        {
          "code": 3601130,
          "regencyCode": 3601,
          "name": "JIPUT"
        },
        {
          "code": 3601131,
          "regencyCode": 3601,
          "name": "CIKEDAL"
        },
        {
          "code": 3601140,
          "regencyCode": 3601,
          "name": "MENES"
        },
        {
          "code": 3601141,
          "regencyCode": 3601,
          "name": "PULOSARI"
        },
        {
          "code": 3601150,
          "regencyCode": 3601,
          "name": "MANDALAWANGI"
        },
        {
          "code": 3601160,
          "regencyCode": 3601,
          "name": "CIMANUK"
        },
        {
          "code": 3601161,
          "regencyCode": 3601,
          "name": "CIPEUCANG"
        },
        {
          "code": 3601170,
          "regencyCode": 3601,
          "name": "BANJAR"
        },
        {
          "code": 3601171,
          "regencyCode": 3601,
          "name": "KADUHEJO"
        },
        {
          "code": 3601172,
          "regencyCode": 3601,
          "name": "MEKARJAYA"
        },
        {
          "code": 3601180,
          "regencyCode": 3601,
          "name": "PANDEGLANG"
        },
        {
          "code": 3601181,
          "regencyCode": 3601,
          "name": "MAJASARI"
        },
        {
          "code": 3601190,
          "regencyCode": 3601,
          "name": "CADASARI"
        },
        {
          "code": 3601191,
          "regencyCode": 3601,
          "name": "KARANGTANJUNG"
        },
        {
          "code": 3601192,
          "regencyCode": 3601,
          "name": "KORONCONG"
        },
        {
          "code": 3602010,
          "regencyCode": 3602,
          "name": "MALINGPING"
        },
        {
          "code": 3602011,
          "regencyCode": 3602,
          "name": "WANASALAM"
        },
        {
          "code": 3602020,
          "regencyCode": 3602,
          "name": "PANGGARANGAN"
        },
        {
          "code": 3602021,
          "regencyCode": 3602,
          "name": "CIHARA"
        },
        {
          "code": 3602030,
          "regencyCode": 3602,
          "name": "BAYAH"
        },
        {
          "code": 3602031,
          "regencyCode": 3602,
          "name": "CILOGRANG"
        },
        {
          "code": 3602040,
          "regencyCode": 3602,
          "name": "CIBEBER"
        },
        {
          "code": 3602050,
          "regencyCode": 3602,
          "name": "CIJAKU"
        },
        {
          "code": 3602051,
          "regencyCode": 3602,
          "name": "CIGEMBLONG"
        },
        {
          "code": 3602060,
          "regencyCode": 3602,
          "name": "BANJARSARI"
        },
        {
          "code": 3602070,
          "regencyCode": 3602,
          "name": "CILELES"
        },
        {
          "code": 3602080,
          "regencyCode": 3602,
          "name": "GUNUNG KENCANA"
        },
        {
          "code": 3602090,
          "regencyCode": 3602,
          "name": "BOJONGMANIK"
        },
        {
          "code": 3602091,
          "regencyCode": 3602,
          "name": "CIRINTEN"
        },
        {
          "code": 3602100,
          "regencyCode": 3602,
          "name": "LEUWIDAMAR"
        },
        {
          "code": 3602110,
          "regencyCode": 3602,
          "name": "MUNCANG"
        },
        {
          "code": 3602111,
          "regencyCode": 3602,
          "name": "SOBANG"
        },
        {
          "code": 3602120,
          "regencyCode": 3602,
          "name": "CIPANAS"
        },
        {
          "code": 3602121,
          "regencyCode": 3602,
          "name": "LEBAKGEDONG"
        },
        {
          "code": 3602130,
          "regencyCode": 3602,
          "name": "SAJIRA"
        },
        {
          "code": 3602140,
          "regencyCode": 3602,
          "name": "CIMARGA"
        },
        {
          "code": 3602150,
          "regencyCode": 3602,
          "name": "CIKULUR"
        },
        {
          "code": 3602160,
          "regencyCode": 3602,
          "name": "WARUNGGUNUNG"
        },
        {
          "code": 3602170,
          "regencyCode": 3602,
          "name": "CIBADAK"
        },
        {
          "code": 3602180,
          "regencyCode": 3602,
          "name": "RANGKASBITUNG"
        },
        {
          "code": 3602181,
          "regencyCode": 3602,
          "name": "KALANGANYAR"
        },
        {
          "code": 3602190,
          "regencyCode": 3602,
          "name": "MAJA"
        },
        {
          "code": 3602191,
          "regencyCode": 3602,
          "name": "CURUGBITUNG"
        },
        {
          "code": 3603010,
          "regencyCode": 3603,
          "name": "CISOKA"
        },
        {
          "code": 3603011,
          "regencyCode": 3603,
          "name": "SOLEAR"
        },
        {
          "code": 3603020,
          "regencyCode": 3603,
          "name": "TIGARAKSA"
        },
        {
          "code": 3603021,
          "regencyCode": 3603,
          "name": "JAMBE"
        },
        {
          "code": 3603030,
          "regencyCode": 3603,
          "name": "CIKUPA"
        },
        {
          "code": 3603040,
          "regencyCode": 3603,
          "name": "PANONGAN"
        },
        {
          "code": 3603050,
          "regencyCode": 3603,
          "name": "CURUG"
        },
        {
          "code": 3603051,
          "regencyCode": 3603,
          "name": "KELAPA DUA"
        },
        {
          "code": 3603060,
          "regencyCode": 3603,
          "name": "LEGOK"
        },
        {
          "code": 3603070,
          "regencyCode": 3603,
          "name": "PAGEDANGAN"
        },
        {
          "code": 3603081,
          "regencyCode": 3603,
          "name": "CISAUK"
        },
        {
          "code": 3603120,
          "regencyCode": 3603,
          "name": "PASARKEMIS"
        },
        {
          "code": 3603121,
          "regencyCode": 3603,
          "name": "SINDANG JAYA"
        },
        {
          "code": 3603130,
          "regencyCode": 3603,
          "name": "BALARAJA"
        },
        {
          "code": 3603131,
          "regencyCode": 3603,
          "name": "JAYANTI"
        },
        {
          "code": 3603132,
          "regencyCode": 3603,
          "name": "SUKAMULYA"
        },
        {
          "code": 3603140,
          "regencyCode": 3603,
          "name": "KRESEK"
        },
        {
          "code": 3603141,
          "regencyCode": 3603,
          "name": "GUNUNG KALER"
        },
        {
          "code": 3603150,
          "regencyCode": 3603,
          "name": "KRONJO"
        },
        {
          "code": 3603151,
          "regencyCode": 3603,
          "name": "MEKAR BARU"
        },
        {
          "code": 3603160,
          "regencyCode": 3603,
          "name": "MAUK"
        },
        {
          "code": 3603161,
          "regencyCode": 3603,
          "name": "KEMIRI"
        },
        {
          "code": 3603162,
          "regencyCode": 3603,
          "name": "SUKADIRI"
        },
        {
          "code": 3603170,
          "regencyCode": 3603,
          "name": "RAJEG"
        },
        {
          "code": 3603180,
          "regencyCode": 3603,
          "name": "SEPATAN"
        },
        {
          "code": 3603181,
          "regencyCode": 3603,
          "name": "SEPATAN TIMUR"
        },
        {
          "code": 3603190,
          "regencyCode": 3603,
          "name": "PAKUHAJI"
        },
        {
          "code": 3603200,
          "regencyCode": 3603,
          "name": "TELUKNAGA"
        },
        {
          "code": 3603210,
          "regencyCode": 3603,
          "name": "KOSAMBI"
        },
        {
          "code": 3604010,
          "regencyCode": 3604,
          "name": "CINANGKA"
        },
        {
          "code": 3604020,
          "regencyCode": 3604,
          "name": "PADARINCANG"
        },
        {
          "code": 3604030,
          "regencyCode": 3604,
          "name": "CIOMAS"
        },
        {
          "code": 3604040,
          "regencyCode": 3604,
          "name": "PABUARAN"
        },
        {
          "code": 3604041,
          "regencyCode": 3604,
          "name": "GUNUNG SARI"
        },
        {
          "code": 3604050,
          "regencyCode": 3604,
          "name": "BAROS"
        },
        {
          "code": 3604060,
          "regencyCode": 3604,
          "name": "PETIR"
        },
        {
          "code": 3604061,
          "regencyCode": 3604,
          "name": "TUNJUNG TEJA"
        },
        {
          "code": 3604080,
          "regencyCode": 3604,
          "name": "CIKEUSAL"
        },
        {
          "code": 3604090,
          "regencyCode": 3604,
          "name": "PAMARAYAN"
        },
        {
          "code": 3604091,
          "regencyCode": 3604,
          "name": "BANDUNG"
        },
        {
          "code": 3604100,
          "regencyCode": 3604,
          "name": "JAWILAN"
        },
        {
          "code": 3604110,
          "regencyCode": 3604,
          "name": "KOPO"
        },
        {
          "code": 3604120,
          "regencyCode": 3604,
          "name": "CIKANDE"
        },
        {
          "code": 3604121,
          "regencyCode": 3604,
          "name": "KIBIN"
        },
        {
          "code": 3604130,
          "regencyCode": 3604,
          "name": "KRAGILAN"
        },
        {
          "code": 3604180,
          "regencyCode": 3604,
          "name": "WARINGINKURUNG"
        },
        {
          "code": 3604190,
          "regencyCode": 3604,
          "name": "MANCAK"
        },
        {
          "code": 3604200,
          "regencyCode": 3604,
          "name": "ANYAR"
        },
        {
          "code": 3604210,
          "regencyCode": 3604,
          "name": "BOJONEGARA"
        },
        {
          "code": 3604211,
          "regencyCode": 3604,
          "name": "PULO AMPEL"
        },
        {
          "code": 3604220,
          "regencyCode": 3604,
          "name": "KRAMATWATU"
        },
        {
          "code": 3604240,
          "regencyCode": 3604,
          "name": "CIRUAS"
        },
        {
          "code": 3604250,
          "regencyCode": 3604,
          "name": "PONTANG"
        },
        {
          "code": 3604251,
          "regencyCode": 3604,
          "name": "LEBAK WANGI"
        },
        {
          "code": 3604260,
          "regencyCode": 3604,
          "name": "CARENANG"
        },
        {
          "code": 3604261,
          "regencyCode": 3604,
          "name": "BINUANG"
        },
        {
          "code": 3604270,
          "regencyCode": 3604,
          "name": "TIRTAYASA"
        },
        {
          "code": 3604271,
          "regencyCode": 3604,
          "name": "TANARA"
        },
        {
          "code": 3671010,
          "regencyCode": 3671,
          "name": "CILEDUG"
        },
        {
          "code": 3671011,
          "regencyCode": 3671,
          "name": "LARANGAN"
        },
        {
          "code": 3671012,
          "regencyCode": 3671,
          "name": "KARANG TENGAH"
        },
        {
          "code": 3671020,
          "regencyCode": 3671,
          "name": "CIPONDOH"
        },
        {
          "code": 3671021,
          "regencyCode": 3671,
          "name": "PINANG"
        },
        {
          "code": 3671030,
          "regencyCode": 3671,
          "name": "TANGERANG"
        },
        {
          "code": 3671031,
          "regencyCode": 3671,
          "name": "KARAWACI"
        },
        {
          "code": 3671040,
          "regencyCode": 3671,
          "name": "JATI UWUNG"
        },
        {
          "code": 3671041,
          "regencyCode": 3671,
          "name": "CIBODAS"
        },
        {
          "code": 3671042,
          "regencyCode": 3671,
          "name": "PERIUK"
        },
        {
          "code": 3671050,
          "regencyCode": 3671,
          "name": "BATUCEPER"
        },
        {
          "code": 3671051,
          "regencyCode": 3671,
          "name": "NEGLASARI"
        },
        {
          "code": 3671060,
          "regencyCode": 3671,
          "name": "BENDA"
        },
        {
          "code": 3672010,
          "regencyCode": 3672,
          "name": "CIWANDAN"
        },
        {
          "code": 3672011,
          "regencyCode": 3672,
          "name": "CITANGKIL"
        },
        {
          "code": 3672020,
          "regencyCode": 3672,
          "name": "PULOMERAK"
        },
        {
          "code": 3672021,
          "regencyCode": 3672,
          "name": "PURWAKARTA"
        },
        {
          "code": 3672022,
          "regencyCode": 3672,
          "name": "GROGOL"
        },
        {
          "code": 3672030,
          "regencyCode": 3672,
          "name": "CILEGON"
        },
        {
          "code": 3672031,
          "regencyCode": 3672,
          "name": "JOMBANG"
        },
        {
          "code": 3672040,
          "regencyCode": 3672,
          "name": "CIBEBER"
        },
        {
          "code": 3673010,
          "regencyCode": 3673,
          "name": "CURUG"
        },
        {
          "code": 3673020,
          "regencyCode": 3673,
          "name": "WALANTAKA"
        },
        {
          "code": 3673030,
          "regencyCode": 3673,
          "name": "CIPOCOK JAYA"
        },
        {
          "code": 3673040,
          "regencyCode": 3673,
          "name": "SERANG"
        },
        {
          "code": 3673050,
          "regencyCode": 3673,
          "name": "TAKTAKAN"
        },
        {
          "code": 3673060,
          "regencyCode": 3673,
          "name": "KASEMEN"
        },
        {
          "code": 3674010,
          "regencyCode": 3674,
          "name": "SETU"
        },
        {
          "code": 3674020,
          "regencyCode": 3674,
          "name": "SERPONG"
        },
        {
          "code": 3674030,
          "regencyCode": 3674,
          "name": "PAMULANG"
        },
        {
          "code": 3674040,
          "regencyCode": 3674,
          "name": "CIPUTAT"
        },
        {
          "code": 3674050,
          "regencyCode": 3674,
          "name": "CIPUTAT TIMUR"
        },
        {
          "code": 3674060,
          "regencyCode": 3674,
          "name": "PONDOK AREN"
        },
        {
          "code": 3674070,
          "regencyCode": 3674,
          "name": "SERPONG UTARA"
        },
        {
          "code": 5101010,
          "regencyCode": 5101,
          "name": "MELAYA"
        },
        {
          "code": 5101020,
          "regencyCode": 5101,
          "name": "NEGARA"
        },
        {
          "code": 5101021,
          "regencyCode": 5101,
          "name": "JEMBRANA"
        },
        {
          "code": 5101030,
          "regencyCode": 5101,
          "name": "MENDOYO"
        },
        {
          "code": 5101040,
          "regencyCode": 5101,
          "name": "PEKUTATAN"
        },
        {
          "code": 5102010,
          "regencyCode": 5102,
          "name": "SELEMADEG"
        },
        {
          "code": 5102011,
          "regencyCode": 5102,
          "name": "SELEMADEG TIMUR"
        },
        {
          "code": 5102012,
          "regencyCode": 5102,
          "name": "SELEMADEG BARAT"
        },
        {
          "code": 5102020,
          "regencyCode": 5102,
          "name": "KERAMBITAN"
        },
        {
          "code": 5102030,
          "regencyCode": 5102,
          "name": "TABANAN"
        },
        {
          "code": 5102040,
          "regencyCode": 5102,
          "name": "KEDIRI"
        },
        {
          "code": 5102050,
          "regencyCode": 5102,
          "name": "MARGA"
        },
        {
          "code": 5102060,
          "regencyCode": 5102,
          "name": "BATURITI"
        },
        {
          "code": 5102070,
          "regencyCode": 5102,
          "name": "PENEBEL"
        },
        {
          "code": 5102080,
          "regencyCode": 5102,
          "name": "PUPUAN"
        },
        {
          "code": 5103010,
          "regencyCode": 5103,
          "name": "KUTA SELATAN"
        },
        {
          "code": 5103020,
          "regencyCode": 5103,
          "name": "KUTA"
        },
        {
          "code": 5103030,
          "regencyCode": 5103,
          "name": "KUTA UTARA"
        },
        {
          "code": 5103040,
          "regencyCode": 5103,
          "name": "MENGWI"
        },
        {
          "code": 5103050,
          "regencyCode": 5103,
          "name": "ABIANSEMAL"
        },
        {
          "code": 5103060,
          "regencyCode": 5103,
          "name": "PETANG"
        },
        {
          "code": 5104010,
          "regencyCode": 5104,
          "name": "SUKAWATI"
        },
        {
          "code": 5104020,
          "regencyCode": 5104,
          "name": "BLAHBATUH"
        },
        {
          "code": 5104030,
          "regencyCode": 5104,
          "name": "GIANYAR"
        },
        {
          "code": 5104040,
          "regencyCode": 5104,
          "name": "TAMPAKSIRING"
        },
        {
          "code": 5104050,
          "regencyCode": 5104,
          "name": "UBUD"
        },
        {
          "code": 5104060,
          "regencyCode": 5104,
          "name": "TEGALLALANG"
        },
        {
          "code": 5104070,
          "regencyCode": 5104,
          "name": "PAYANGAN"
        },
        {
          "code": 5105010,
          "regencyCode": 5105,
          "name": "NUSAPENIDA"
        },
        {
          "code": 5105020,
          "regencyCode": 5105,
          "name": "BANJARANGKAN"
        },
        {
          "code": 5105030,
          "regencyCode": 5105,
          "name": "KLUNGKUNG"
        },
        {
          "code": 5105040,
          "regencyCode": 5105,
          "name": "DAWAN"
        },
        {
          "code": 5106010,
          "regencyCode": 5106,
          "name": "SUSUT"
        },
        {
          "code": 5106020,
          "regencyCode": 5106,
          "name": "BANGLI"
        },
        {
          "code": 5106030,
          "regencyCode": 5106,
          "name": "TEMBUKU"
        },
        {
          "code": 5106040,
          "regencyCode": 5106,
          "name": "KINTAMANI"
        },
        {
          "code": 5107010,
          "regencyCode": 5107,
          "name": "RENDANG"
        },
        {
          "code": 5107020,
          "regencyCode": 5107,
          "name": "SIDEMEN"
        },
        {
          "code": 5107030,
          "regencyCode": 5107,
          "name": "MANGGIS"
        },
        {
          "code": 5107040,
          "regencyCode": 5107,
          "name": "KARANGASEM"
        },
        {
          "code": 5107050,
          "regencyCode": 5107,
          "name": "ABANG"
        },
        {
          "code": 5107060,
          "regencyCode": 5107,
          "name": "BEBANDEM"
        },
        {
          "code": 5107070,
          "regencyCode": 5107,
          "name": "SELAT"
        },
        {
          "code": 5107080,
          "regencyCode": 5107,
          "name": "KUBU"
        },
        {
          "code": 5108010,
          "regencyCode": 5108,
          "name": "GEROKGAK"
        },
        {
          "code": 5108020,
          "regencyCode": 5108,
          "name": "SERIRIT"
        },
        {
          "code": 5108030,
          "regencyCode": 5108,
          "name": "BUSUNGBIU"
        },
        {
          "code": 5108040,
          "regencyCode": 5108,
          "name": "BANJAR"
        },
        {
          "code": 5108050,
          "regencyCode": 5108,
          "name": "SUKASADA"
        },
        {
          "code": 5108060,
          "regencyCode": 5108,
          "name": "BULELENG"
        },
        {
          "code": 5108070,
          "regencyCode": 5108,
          "name": "SAWAN"
        },
        {
          "code": 5108080,
          "regencyCode": 5108,
          "name": "KUBUTAMBAHAN"
        },
        {
          "code": 5108090,
          "regencyCode": 5108,
          "name": "TEJAKULA"
        },
        {
          "code": 5171010,
          "regencyCode": 5171,
          "name": "DENPASAR SELATAN"
        },
        {
          "code": 5171020,
          "regencyCode": 5171,
          "name": "DENPASAR TIMUR"
        },
        {
          "code": 5171030,
          "regencyCode": 5171,
          "name": "DENPASAR BARAT"
        },
        {
          "code": 5171031,
          "regencyCode": 5171,
          "name": "DENPASAR UTARA"
        },
        {
          "code": 5201010,
          "regencyCode": 5201,
          "name": "SEKOTONG"
        },
        {
          "code": 5201011,
          "regencyCode": 5201,
          "name": "LEMBAR"
        },
        {
          "code": 5201020,
          "regencyCode": 5201,
          "name": "GERUNG"
        },
        {
          "code": 5201030,
          "regencyCode": 5201,
          "name": "LABU API"
        },
        {
          "code": 5201040,
          "regencyCode": 5201,
          "name": "KEDIRI"
        },
        {
          "code": 5201041,
          "regencyCode": 5201,
          "name": "KURIPAN"
        },
        {
          "code": 5201050,
          "regencyCode": 5201,
          "name": "NARMADA"
        },
        {
          "code": 5201051,
          "regencyCode": 5201,
          "name": "LINGSAR"
        },
        {
          "code": 5201060,
          "regencyCode": 5201,
          "name": "GUNUNG SARI"
        },
        {
          "code": 5201061,
          "regencyCode": 5201,
          "name": "BATU LAYAR"
        },
        {
          "code": 5202010,
          "regencyCode": 5202,
          "name": "PRAYA BARAT"
        },
        {
          "code": 5202011,
          "regencyCode": 5202,
          "name": "PRAYA BARAT DAYA"
        },
        {
          "code": 5202020,
          "regencyCode": 5202,
          "name": "PUJUT"
        },
        {
          "code": 5202030,
          "regencyCode": 5202,
          "name": "PRAYA TIMUR"
        },
        {
          "code": 5202040,
          "regencyCode": 5202,
          "name": "JANAPRIA"
        },
        {
          "code": 5202050,
          "regencyCode": 5202,
          "name": "KOPANG"
        },
        {
          "code": 5202060,
          "regencyCode": 5202,
          "name": "PRAYA"
        },
        {
          "code": 5202061,
          "regencyCode": 5202,
          "name": "PRAYA TENGAH"
        },
        {
          "code": 5202070,
          "regencyCode": 5202,
          "name": "JONGGAT"
        },
        {
          "code": 5202080,
          "regencyCode": 5202,
          "name": "PRINGGARATA"
        },
        {
          "code": 5202090,
          "regencyCode": 5202,
          "name": "BATUKLIANG"
        },
        {
          "code": 5202091,
          "regencyCode": 5202,
          "name": "BATUKLIANG UTARA"
        },
        {
          "code": 5203010,
          "regencyCode": 5203,
          "name": "KERUAK"
        },
        {
          "code": 5203011,
          "regencyCode": 5203,
          "name": "JEROWARU"
        },
        {
          "code": 5203020,
          "regencyCode": 5203,
          "name": "SAKRA"
        },
        {
          "code": 5203021,
          "regencyCode": 5203,
          "name": "SAKRA BARAT"
        },
        {
          "code": 5203022,
          "regencyCode": 5203,
          "name": "SAKRA TIMUR"
        },
        {
          "code": 5203030,
          "regencyCode": 5203,
          "name": "TERARA"
        },
        {
          "code": 5203031,
          "regencyCode": 5203,
          "name": "MONTONG GADING"
        },
        {
          "code": 5203040,
          "regencyCode": 5203,
          "name": "SIKUR"
        },
        {
          "code": 5203050,
          "regencyCode": 5203,
          "name": "MASBAGIK"
        },
        {
          "code": 5203051,
          "regencyCode": 5203,
          "name": "PRINGGASELA"
        },
        {
          "code": 5203060,
          "regencyCode": 5203,
          "name": "SUKAMULIA"
        },
        {
          "code": 5203061,
          "regencyCode": 5203,
          "name": "SURALAGA"
        },
        {
          "code": 5203070,
          "regencyCode": 5203,
          "name": "SELONG"
        },
        {
          "code": 5203071,
          "regencyCode": 5203,
          "name": "LABUHAN HAJI"
        },
        {
          "code": 5203080,
          "regencyCode": 5203,
          "name": "PRINGGABAYA"
        },
        {
          "code": 5203081,
          "regencyCode": 5203,
          "name": "SUELA"
        },
        {
          "code": 5203090,
          "regencyCode": 5203,
          "name": "AIKMEL"
        },
        {
          "code": 5203091,
          "regencyCode": 5203,
          "name": "WANASABA"
        },
        {
          "code": 5203092,
          "regencyCode": 5203,
          "name": "SEMBALUN"
        },
        {
          "code": 5203100,
          "regencyCode": 5203,
          "name": "SAMBELIA"
        },
        {
          "code": 5204020,
          "regencyCode": 5204,
          "name": "LUNYUK"
        },
        {
          "code": 5204021,
          "regencyCode": 5204,
          "name": "ORONG TELU"
        },
        {
          "code": 5204050,
          "regencyCode": 5204,
          "name": "ALAS"
        },
        {
          "code": 5204051,
          "regencyCode": 5204,
          "name": "ALAS BARAT"
        },
        {
          "code": 5204052,
          "regencyCode": 5204,
          "name": "BUER"
        },
        {
          "code": 5204061,
          "regencyCode": 5204,
          "name": "UTAN"
        },
        {
          "code": 5204062,
          "regencyCode": 5204,
          "name": "RHEE"
        },
        {
          "code": 5204070,
          "regencyCode": 5204,
          "name": "BATULANTEH"
        },
        {
          "code": 5204080,
          "regencyCode": 5204,
          "name": "SUMBAWA"
        },
        {
          "code": 5204081,
          "regencyCode": 5204,
          "name": "LABUHAN BADAS"
        },
        {
          "code": 5204082,
          "regencyCode": 5204,
          "name": "UNTER IWES"
        },
        {
          "code": 5204090,
          "regencyCode": 5204,
          "name": "MOYOHILIR"
        },
        {
          "code": 5204091,
          "regencyCode": 5204,
          "name": "MOYO UTARA"
        },
        {
          "code": 5204100,
          "regencyCode": 5204,
          "name": "MOYOHULU"
        },
        {
          "code": 5204110,
          "regencyCode": 5204,
          "name": "ROPANG"
        },
        {
          "code": 5204111,
          "regencyCode": 5204,
          "name": "LENANGGUAR"
        },
        {
          "code": 5204112,
          "regencyCode": 5204,
          "name": "LANTUNG"
        },
        {
          "code": 5204121,
          "regencyCode": 5204,
          "name": "LAPE"
        },
        {
          "code": 5204122,
          "regencyCode": 5204,
          "name": "LOPOK"
        },
        {
          "code": 5204130,
          "regencyCode": 5204,
          "name": "PLAMPANG"
        },
        {
          "code": 5204131,
          "regencyCode": 5204,
          "name": "LABANGKA"
        },
        {
          "code": 5204132,
          "regencyCode": 5204,
          "name": "MARONGE"
        },
        {
          "code": 5204140,
          "regencyCode": 5204,
          "name": "EMPANG"
        },
        {
          "code": 5204141,
          "regencyCode": 5204,
          "name": "TARANO"
        },
        {
          "code": 5205010,
          "regencyCode": 5205,
          "name": "HU'U"
        },
        {
          "code": 5205011,
          "regencyCode": 5205,
          "name": "PAJO"
        },
        {
          "code": 5205020,
          "regencyCode": 5205,
          "name": "DOMPU"
        },
        {
          "code": 5205030,
          "regencyCode": 5205,
          "name": "WOJA"
        },
        {
          "code": 5205040,
          "regencyCode": 5205,
          "name": "KILO"
        },
        {
          "code": 5205050,
          "regencyCode": 5205,
          "name": "KEMPO"
        },
        {
          "code": 5205051,
          "regencyCode": 5205,
          "name": "MANGGALEWA"
        },
        {
          "code": 5205060,
          "regencyCode": 5205,
          "name": "PEKAT"
        },
        {
          "code": 5206010,
          "regencyCode": 5206,
          "name": "MONTA"
        },
        {
          "code": 5206011,
          "regencyCode": 5206,
          "name": "PARADO"
        },
        {
          "code": 5206020,
          "regencyCode": 5206,
          "name": "BOLO"
        },
        {
          "code": 5206021,
          "regencyCode": 5206,
          "name": "MADA PANGGA"
        },
        {
          "code": 5206030,
          "regencyCode": 5206,
          "name": "WOHA"
        },
        {
          "code": 5206040,
          "regencyCode": 5206,
          "name": "BELO"
        },
        {
          "code": 5206041,
          "regencyCode": 5206,
          "name": "PALIBELO"
        },
        {
          "code": 5206050,
          "regencyCode": 5206,
          "name": "WAWO"
        },
        {
          "code": 5206051,
          "regencyCode": 5206,
          "name": "LANGGUDU"
        },
        {
          "code": 5206052,
          "regencyCode": 5206,
          "name": "LAMBITU"
        },
        {
          "code": 5206060,
          "regencyCode": 5206,
          "name": "SAPE"
        },
        {
          "code": 5206061,
          "regencyCode": 5206,
          "name": "LAMBU"
        },
        {
          "code": 5206070,
          "regencyCode": 5206,
          "name": "WERA"
        },
        {
          "code": 5206071,
          "regencyCode": 5206,
          "name": "AMBALAWI"
        },
        {
          "code": 5206080,
          "regencyCode": 5206,
          "name": "DONGGO"
        },
        {
          "code": 5206081,
          "regencyCode": 5206,
          "name": "SOROMANDI"
        },
        {
          "code": 5206090,
          "regencyCode": 5206,
          "name": "SANGGAR"
        },
        {
          "code": 5206091,
          "regencyCode": 5206,
          "name": "TAMBORA"
        },
        {
          "code": 5207010,
          "regencyCode": 5207,
          "name": "SEKONGKANG"
        },
        {
          "code": 5207020,
          "regencyCode": 5207,
          "name": "JEREWEH"
        },
        {
          "code": 5207021,
          "regencyCode": 5207,
          "name": "MALUK"
        },
        {
          "code": 5207030,
          "regencyCode": 5207,
          "name": "TALIWANG"
        },
        {
          "code": 5207031,
          "regencyCode": 5207,
          "name": "BRANG ENE"
        },
        {
          "code": 5207040,
          "regencyCode": 5207,
          "name": "BRANG REA"
        },
        {
          "code": 5207050,
          "regencyCode": 5207,
          "name": "SETELUK"
        },
        {
          "code": 5207051,
          "regencyCode": 5207,
          "name": "POTO TANO"
        },
        {
          "code": 5208010,
          "regencyCode": 5208,
          "name": "PEMENANG"
        },
        {
          "code": 5208020,
          "regencyCode": 5208,
          "name": "TANJUNG"
        },
        {
          "code": 5208030,
          "regencyCode": 5208,
          "name": "GANGGA"
        },
        {
          "code": 5208040,
          "regencyCode": 5208,
          "name": "KAYANGAN"
        },
        {
          "code": 5208050,
          "regencyCode": 5208,
          "name": "BAYAN"
        },
        {
          "code": 5271010,
          "regencyCode": 5271,
          "name": "AMPENAN"
        },
        {
          "code": 5271011,
          "regencyCode": 5271,
          "name": "SEKARBELA"
        },
        {
          "code": 5271020,
          "regencyCode": 5271,
          "name": "MATARAM"
        },
        {
          "code": 5271021,
          "regencyCode": 5271,
          "name": "SELAPARANG"
        },
        {
          "code": 5271030,
          "regencyCode": 5271,
          "name": "CAKRANEGARA"
        },
        {
          "code": 5271031,
          "regencyCode": 5271,
          "name": "SANDUBAYA"
        },
        {
          "code": 5272010,
          "regencyCode": 5272,
          "name": "RASANAE BARAT"
        },
        {
          "code": 5272011,
          "regencyCode": 5272,
          "name": "MPUNDA"
        },
        {
          "code": 5272020,
          "regencyCode": 5272,
          "name": "RASANAE TIMUR"
        },
        {
          "code": 5272021,
          "regencyCode": 5272,
          "name": "RABA"
        },
        {
          "code": 5272030,
          "regencyCode": 5272,
          "name": "ASAKOTA"
        },
        {
          "code": 5301021,
          "regencyCode": 5301,
          "name": "LAMBOYA"
        },
        {
          "code": 5301022,
          "regencyCode": 5301,
          "name": "WANOKAKA"
        },
        {
          "code": 5301023,
          "regencyCode": 5301,
          "name": "LABOYA BARAT"
        },
        {
          "code": 5301050,
          "regencyCode": 5301,
          "name": "LOLI"
        },
        {
          "code": 5301060,
          "regencyCode": 5301,
          "name": "KOTA WAIKABUBAK"
        },
        {
          "code": 5301072,
          "regencyCode": 5301,
          "name": "TANA RIGHU"
        },
        {
          "code": 5302010,
          "regencyCode": 5302,
          "name": "LEWA"
        },
        {
          "code": 5302011,
          "regencyCode": 5302,
          "name": "NGGAHA ORIANGU"
        },
        {
          "code": 5302012,
          "regencyCode": 5302,
          "name": "LEWA TIDAHU"
        },
        {
          "code": 5302013,
          "regencyCode": 5302,
          "name": "KATALA HAMU LINGU"
        },
        {
          "code": 5302020,
          "regencyCode": 5302,
          "name": "TABUNDUNG"
        },
        {
          "code": 5302021,
          "regencyCode": 5302,
          "name": "PINUPAHAR"
        },
        {
          "code": 5302030,
          "regencyCode": 5302,
          "name": "PABERIWAI"
        },
        {
          "code": 5302031,
          "regencyCode": 5302,
          "name": "KARERA"
        },
        {
          "code": 5302032,
          "regencyCode": 5302,
          "name": "MATAWAI LA PAWU"
        },
        {
          "code": 5302033,
          "regencyCode": 5302,
          "name": "KAHAUNGU ETI"
        },
        {
          "code": 5302034,
          "regencyCode": 5302,
          "name": "MAHU"
        },
        {
          "code": 5302035,
          "regencyCode": 5302,
          "name": "NGADU NGALA"
        },
        {
          "code": 5302040,
          "regencyCode": 5302,
          "name": "PAHUNGA LODU"
        },
        {
          "code": 5302041,
          "regencyCode": 5302,
          "name": "WULA WAIJELU"
        },
        {
          "code": 5302051,
          "regencyCode": 5302,
          "name": "RINDI"
        },
        {
          "code": 5302052,
          "regencyCode": 5302,
          "name": "UMALULU"
        },
        {
          "code": 5302060,
          "regencyCode": 5302,
          "name": "PANDAWAI"
        },
        {
          "code": 5302061,
          "regencyCode": 5302,
          "name": "KAMBATA MAPAMBUHANG"
        },
        {
          "code": 5302070,
          "regencyCode": 5302,
          "name": "KOTA WAINGAPU"
        },
        {
          "code": 5302071,
          "regencyCode": 5302,
          "name": "KAMBERA"
        },
        {
          "code": 5302080,
          "regencyCode": 5302,
          "name": "HAHARU"
        },
        {
          "code": 5302081,
          "regencyCode": 5302,
          "name": "KANATANG"
        },
        {
          "code": 5303100,
          "regencyCode": 5303,
          "name": "SEMAU"
        },
        {
          "code": 5303101,
          "regencyCode": 5303,
          "name": "SEMAU SELATAN"
        },
        {
          "code": 5303110,
          "regencyCode": 5303,
          "name": "KUPANG BARAT"
        },
        {
          "code": 5303111,
          "regencyCode": 5303,
          "name": "NEKAMESE"
        },
        {
          "code": 5303120,
          "regencyCode": 5303,
          "name": "KUPANG TENGAH"
        },
        {
          "code": 5303121,
          "regencyCode": 5303,
          "name": "TAEBENU"
        },
        {
          "code": 5303130,
          "regencyCode": 5303,
          "name": "AMARASI"
        },
        {
          "code": 5303131,
          "regencyCode": 5303,
          "name": "AMARASI BARAT"
        },
        {
          "code": 5303132,
          "regencyCode": 5303,
          "name": "AMARASI SELATAN"
        },
        {
          "code": 5303133,
          "regencyCode": 5303,
          "name": "AMARASI TIMUR"
        },
        {
          "code": 5303140,
          "regencyCode": 5303,
          "name": "KUPANG TIMUR"
        },
        {
          "code": 5303141,
          "regencyCode": 5303,
          "name": "AMABI OEFETO TIMUR"
        },
        {
          "code": 5303142,
          "regencyCode": 5303,
          "name": "AMABI OEFETO"
        },
        {
          "code": 5303150,
          "regencyCode": 5303,
          "name": "SULAMU"
        },
        {
          "code": 5303160,
          "regencyCode": 5303,
          "name": "FATULEU"
        },
        {
          "code": 5303161,
          "regencyCode": 5303,
          "name": "FATULEU TENGAH"
        },
        {
          "code": 5303162,
          "regencyCode": 5303,
          "name": "FATULEU BARAT"
        },
        {
          "code": 5303170,
          "regencyCode": 5303,
          "name": "TAKARI"
        },
        {
          "code": 5303180,
          "regencyCode": 5303,
          "name": "AMFOANG SELATAN"
        },
        {
          "code": 5303181,
          "regencyCode": 5303,
          "name": "AMFOANG BARAT DAYA"
        },
        {
          "code": 5303182,
          "regencyCode": 5303,
          "name": "AMFOANG TENGAH"
        },
        {
          "code": 5303190,
          "regencyCode": 5303,
          "name": "AMFOANG UTARA"
        },
        {
          "code": 5303191,
          "regencyCode": 5303,
          "name": "AMFOANG BARAT LAUT"
        },
        {
          "code": 5303192,
          "regencyCode": 5303,
          "name": "AMFOANG TIMUR"
        },
        {
          "code": 5304010,
          "regencyCode": 5304,
          "name": "MOLLO UTARA"
        },
        {
          "code": 5304011,
          "regencyCode": 5304,
          "name": "FATUMNASI"
        },
        {
          "code": 5304012,
          "regencyCode": 5304,
          "name": "TOBU"
        },
        {
          "code": 5304013,
          "regencyCode": 5304,
          "name": "NUNBENA"
        },
        {
          "code": 5304020,
          "regencyCode": 5304,
          "name": "MOLLO SELATAN"
        },
        {
          "code": 5304021,
          "regencyCode": 5304,
          "name": "POLEN"
        },
        {
          "code": 5304022,
          "regencyCode": 5304,
          "name": "MOLLO BARAT"
        },
        {
          "code": 5304023,
          "regencyCode": 5304,
          "name": "MOLLO TENGAH"
        },
        {
          "code": 5304030,
          "regencyCode": 5304,
          "name": "KOTA SOE"
        },
        {
          "code": 5304040,
          "regencyCode": 5304,
          "name": "AMANUBAN BARAT"
        },
        {
          "code": 5304041,
          "regencyCode": 5304,
          "name": "BATU PUTIH"
        },
        {
          "code": 5304042,
          "regencyCode": 5304,
          "name": "KUATNANA"
        },
        {
          "code": 5304050,
          "regencyCode": 5304,
          "name": "AMANUBAN SELATAN"
        },
        {
          "code": 5304051,
          "regencyCode": 5304,
          "name": "NOEBEBA"
        },
        {
          "code": 5304060,
          "regencyCode": 5304,
          "name": "KUAN FATU"
        },
        {
          "code": 5304061,
          "regencyCode": 5304,
          "name": "KUALIN"
        },
        {
          "code": 5304070,
          "regencyCode": 5304,
          "name": "AMANUBAN TENGAH"
        },
        {
          "code": 5304071,
          "regencyCode": 5304,
          "name": "KOLBANO"
        },
        {
          "code": 5304072,
          "regencyCode": 5304,
          "name": "OENINO"
        },
        {
          "code": 5304080,
          "regencyCode": 5304,
          "name": "AMANUBAN TIMUR"
        },
        {
          "code": 5304081,
          "regencyCode": 5304,
          "name": "FAUTMOLO"
        },
        {
          "code": 5304082,
          "regencyCode": 5304,
          "name": "FATUKOPA"
        },
        {
          "code": 5304090,
          "regencyCode": 5304,
          "name": "KIE"
        },
        {
          "code": 5304091,
          "regencyCode": 5304,
          "name": "KOT'OLIN"
        },
        {
          "code": 5304100,
          "regencyCode": 5304,
          "name": "AMANATUN SELATAN"
        },
        {
          "code": 5304101,
          "regencyCode": 5304,
          "name": "BOKING"
        },
        {
          "code": 5304102,
          "regencyCode": 5304,
          "name": "NUNKOLO"
        },
        {
          "code": 5304103,
          "regencyCode": 5304,
          "name": "NOEBANA"
        },
        {
          "code": 5304104,
          "regencyCode": 5304,
          "name": "SANTIAN"
        },
        {
          "code": 5304110,
          "regencyCode": 5304,
          "name": "AMANATUN UTARA"
        },
        {
          "code": 5304111,
          "regencyCode": 5304,
          "name": "TOIANAS"
        },
        {
          "code": 5304112,
          "regencyCode": 5304,
          "name": "KOKBAUN"
        },
        {
          "code": 5305010,
          "regencyCode": 5305,
          "name": "MIOMAFFO BARAT"
        },
        {
          "code": 5305011,
          "regencyCode": 5305,
          "name": "MIOMAFFO TENGAH"
        },
        {
          "code": 5305012,
          "regencyCode": 5305,
          "name": "MUSI"
        },
        {
          "code": 5305013,
          "regencyCode": 5305,
          "name": "MUTIS"
        },
        {
          "code": 5305020,
          "regencyCode": 5305,
          "name": "MIOMAFFO TIMUR"
        },
        {
          "code": 5305021,
          "regencyCode": 5305,
          "name": "NOEMUTI"
        },
        {
          "code": 5305022,
          "regencyCode": 5305,
          "name": "BIKOMI SELATAN"
        },
        {
          "code": 5305023,
          "regencyCode": 5305,
          "name": "BIKOMI TENGAH"
        },
        {
          "code": 5305024,
          "regencyCode": 5305,
          "name": "BIKOMI NILULAT"
        },
        {
          "code": 5305025,
          "regencyCode": 5305,
          "name": "BIKOMI UTARA"
        },
        {
          "code": 5305026,
          "regencyCode": 5305,
          "name": "NAIBENU"
        },
        {
          "code": 5305027,
          "regencyCode": 5305,
          "name": "NOEMUTI TIMUR"
        },
        {
          "code": 5305030,
          "regencyCode": 5305,
          "name": "KOTA KEFAMENANU"
        },
        {
          "code": 5305040,
          "regencyCode": 5305,
          "name": "INSANA"
        },
        {
          "code": 5305041,
          "regencyCode": 5305,
          "name": "INSANA UTARA"
        },
        {
          "code": 5305042,
          "regencyCode": 5305,
          "name": "INSANA BARAT"
        },
        {
          "code": 5305043,
          "regencyCode": 5305,
          "name": "INSANA TENGAH"
        },
        {
          "code": 5305044,
          "regencyCode": 5305,
          "name": "INSANA FAFINESU"
        },
        {
          "code": 5305050,
          "regencyCode": 5305,
          "name": "BIBOKI SELATAN"
        },
        {
          "code": 5305051,
          "regencyCode": 5305,
          "name": "BIBOKI TANPAH"
        },
        {
          "code": 5305052,
          "regencyCode": 5305,
          "name": "BIBOKI MOENLEU"
        },
        {
          "code": 5305060,
          "regencyCode": 5305,
          "name": "BIBOKI UTARA"
        },
        {
          "code": 5305061,
          "regencyCode": 5305,
          "name": "BIBOKI ANLEU"
        },
        {
          "code": 5305062,
          "regencyCode": 5305,
          "name": "BIBOKI FEOTLEU"
        },
        {
          "code": 5306032,
          "regencyCode": 5306,
          "name": "RAI MANUK"
        },
        {
          "code": 5306050,
          "regencyCode": 5306,
          "name": "TASIFETO BARAT"
        },
        {
          "code": 5306051,
          "regencyCode": 5306,
          "name": "KAKULUK MESAK"
        },
        {
          "code": 5306052,
          "regencyCode": 5306,
          "name": "NANAET DUBESI"
        },
        {
          "code": 5306060,
          "regencyCode": 5306,
          "name": "ATAMBUA"
        },
        {
          "code": 5306061,
          "regencyCode": 5306,
          "name": "ATAMBUA BARAT"
        },
        {
          "code": 5306062,
          "regencyCode": 5306,
          "name": "ATAMBUA SELATAN"
        },
        {
          "code": 5306070,
          "regencyCode": 5306,
          "name": "TASIFETO TIMUR"
        },
        {
          "code": 5306071,
          "regencyCode": 5306,
          "name": "RAIHAT"
        },
        {
          "code": 5306072,
          "regencyCode": 5306,
          "name": "LASIOLAT"
        },
        {
          "code": 5306080,
          "regencyCode": 5306,
          "name": "LAMAKNEN"
        },
        {
          "code": 5306081,
          "regencyCode": 5306,
          "name": "LAMAKNEN SELATAN"
        },
        {
          "code": 5307010,
          "regencyCode": 5307,
          "name": "PANTAR"
        },
        {
          "code": 5307011,
          "regencyCode": 5307,
          "name": "PANTAR BARAT"
        },
        {
          "code": 5307012,
          "regencyCode": 5307,
          "name": "PANTAR TIMUR"
        },
        {
          "code": 5307013,
          "regencyCode": 5307,
          "name": "PANTAR BARAT LAUT"
        },
        {
          "code": 5307014,
          "regencyCode": 5307,
          "name": "PANTAR TENGAH"
        },
        {
          "code": 5307020,
          "regencyCode": 5307,
          "name": "ALOR BARAT DAYA"
        },
        {
          "code": 5307021,
          "regencyCode": 5307,
          "name": "MATARU"
        },
        {
          "code": 5307030,
          "regencyCode": 5307,
          "name": "ALOR SELATAN"
        },
        {
          "code": 5307040,
          "regencyCode": 5307,
          "name": "ALOR TIMUR"
        },
        {
          "code": 5307041,
          "regencyCode": 5307,
          "name": "ALOR TIMUR LAUT"
        },
        {
          "code": 5307042,
          "regencyCode": 5307,
          "name": "PUREMAN"
        },
        {
          "code": 5307050,
          "regencyCode": 5307,
          "name": "TELUK MUTIARA"
        },
        {
          "code": 5307051,
          "regencyCode": 5307,
          "name": "KABOLA"
        },
        {
          "code": 5307060,
          "regencyCode": 5307,
          "name": "ALOR BARAT LAUT"
        },
        {
          "code": 5307061,
          "regencyCode": 5307,
          "name": "ALOR TENGAH UTARA"
        },
        {
          "code": 5307062,
          "regencyCode": 5307,
          "name": "PULAU PURA"
        },
        {
          "code": 5307063,
          "regencyCode": 5307,
          "name": "LEMBUR"
        },
        {
          "code": 5308010,
          "regencyCode": 5308,
          "name": "NAGAWUTUNG"
        },
        {
          "code": 5308011,
          "regencyCode": 5308,
          "name": "WULANDONI"
        },
        {
          "code": 5308020,
          "regencyCode": 5308,
          "name": "ATADEI"
        },
        {
          "code": 5308030,
          "regencyCode": 5308,
          "name": "ILE APE"
        },
        {
          "code": 5308031,
          "regencyCode": 5308,
          "name": "ILE APE TIMUR"
        },
        {
          "code": 5308040,
          "regencyCode": 5308,
          "name": "LEBATUKAN"
        },
        {
          "code": 5308050,
          "regencyCode": 5308,
          "name": "NUBATUKAN"
        },
        {
          "code": 5308060,
          "regencyCode": 5308,
          "name": "OMESURI"
        },
        {
          "code": 5308070,
          "regencyCode": 5308,
          "name": "BUYASARI"
        },
        {
          "code": 5309010,
          "regencyCode": 5309,
          "name": "WULANGGITANG"
        },
        {
          "code": 5309011,
          "regencyCode": 5309,
          "name": "TITEHENA"
        },
        {
          "code": 5309012,
          "regencyCode": 5309,
          "name": "ILEBURA"
        },
        {
          "code": 5309020,
          "regencyCode": 5309,
          "name": "TANJUNG BUNGA"
        },
        {
          "code": 5309021,
          "regencyCode": 5309,
          "name": "LEWO LEMA"
        },
        {
          "code": 5309030,
          "regencyCode": 5309,
          "name": "LARANTUKA"
        },
        {
          "code": 5309031,
          "regencyCode": 5309,
          "name": "ILE MANDIRI"
        },
        {
          "code": 5309032,
          "regencyCode": 5309,
          "name": "DEMON PAGONG"
        },
        {
          "code": 5309040,
          "regencyCode": 5309,
          "name": "SOLOR BARAT"
        },
        {
          "code": 5309041,
          "regencyCode": 5309,
          "name": "SOLOR SELATAN"
        },
        {
          "code": 5309050,
          "regencyCode": 5309,
          "name": "SOLOR TIMUR"
        },
        {
          "code": 5309060,
          "regencyCode": 5309,
          "name": "ADONARA BARAT"
        },
        {
          "code": 5309061,
          "regencyCode": 5309,
          "name": "WOTAN ULU MADO"
        },
        {
          "code": 5309062,
          "regencyCode": 5309,
          "name": "ADONARA TENGAH"
        },
        {
          "code": 5309070,
          "regencyCode": 5309,
          "name": "ADONARA TIMUR"
        },
        {
          "code": 5309071,
          "regencyCode": 5309,
          "name": "ILE BOLENG"
        },
        {
          "code": 5309072,
          "regencyCode": 5309,
          "name": "WITIHAMA"
        },
        {
          "code": 5309073,
          "regencyCode": 5309,
          "name": "KELUBAGOLIT"
        },
        {
          "code": 5309074,
          "regencyCode": 5309,
          "name": "ADONARA"
        },
        {
          "code": 5310010,
          "regencyCode": 5310,
          "name": "PAGA"
        },
        {
          "code": 5310011,
          "regencyCode": 5310,
          "name": "MEGO"
        },
        {
          "code": 5310012,
          "regencyCode": 5310,
          "name": "TANA WAWO"
        },
        {
          "code": 5310020,
          "regencyCode": 5310,
          "name": "LELA"
        },
        {
          "code": 5310030,
          "regencyCode": 5310,
          "name": "BOLA"
        },
        {
          "code": 5310031,
          "regencyCode": 5310,
          "name": "DORENG"
        },
        {
          "code": 5310032,
          "regencyCode": 5310,
          "name": "MAPITARA"
        },
        {
          "code": 5310040,
          "regencyCode": 5310,
          "name": "TALIBURA"
        },
        {
          "code": 5310041,
          "regencyCode": 5310,
          "name": "WAIGETE"
        },
        {
          "code": 5310042,
          "regencyCode": 5310,
          "name": "WAIBLAMA"
        },
        {
          "code": 5310050,
          "regencyCode": 5310,
          "name": "KEWAPANTE"
        },
        {
          "code": 5310051,
          "regencyCode": 5310,
          "name": "HEWOKLOANG"
        },
        {
          "code": 5310052,
          "regencyCode": 5310,
          "name": "KANGAE"
        },
        {
          "code": 5310061,
          "regencyCode": 5310,
          "name": "PALUE"
        },
        {
          "code": 5310062,
          "regencyCode": 5310,
          "name": "KOTING"
        },
        {
          "code": 5310063,
          "regencyCode": 5310,
          "name": "NELLE"
        },
        {
          "code": 5310070,
          "regencyCode": 5310,
          "name": "NITA"
        },
        {
          "code": 5310071,
          "regencyCode": 5310,
          "name": "MAGEPANDA"
        },
        {
          "code": 5310080,
          "regencyCode": 5310,
          "name": "ALOK"
        },
        {
          "code": 5310081,
          "regencyCode": 5310,
          "name": "ALOK BARAT"
        },
        {
          "code": 5310082,
          "regencyCode": 5310,
          "name": "ALOK TIMUR"
        },
        {
          "code": 5311010,
          "regencyCode": 5311,
          "name": "NANGAPANDA"
        },
        {
          "code": 5311011,
          "regencyCode": 5311,
          "name": "PULAU ENDE"
        },
        {
          "code": 5311012,
          "regencyCode": 5311,
          "name": "MAUKARO"
        },
        {
          "code": 5311020,
          "regencyCode": 5311,
          "name": "ENDE"
        },
        {
          "code": 5311030,
          "regencyCode": 5311,
          "name": "ENDE SELATAN"
        },
        {
          "code": 5311031,
          "regencyCode": 5311,
          "name": "ENDE TIMUR"
        },
        {
          "code": 5311032,
          "regencyCode": 5311,
          "name": "ENDE TENGAH"
        },
        {
          "code": 5311033,
          "regencyCode": 5311,
          "name": "ENDE UTARA"
        },
        {
          "code": 5311040,
          "regencyCode": 5311,
          "name": "NDONA"
        },
        {
          "code": 5311041,
          "regencyCode": 5311,
          "name": "NDONA TIMUR"
        },
        {
          "code": 5311050,
          "regencyCode": 5311,
          "name": "WOLOWARU"
        },
        {
          "code": 5311051,
          "regencyCode": 5311,
          "name": "WOLOJITA"
        },
        {
          "code": 5311052,
          "regencyCode": 5311,
          "name": "LIO TIMUR"
        },
        {
          "code": 5311053,
          "regencyCode": 5311,
          "name": "KELIMUTU"
        },
        {
          "code": 5311054,
          "regencyCode": 5311,
          "name": "NDORI"
        },
        {
          "code": 5311060,
          "regencyCode": 5311,
          "name": "MAUROLE"
        },
        {
          "code": 5311061,
          "regencyCode": 5311,
          "name": "KOTABARU"
        },
        {
          "code": 5311062,
          "regencyCode": 5311,
          "name": "DETUKELI"
        },
        {
          "code": 5311063,
          "regencyCode": 5311,
          "name": "LEPEMBUSU KELISOKE"
        },
        {
          "code": 5311070,
          "regencyCode": 5311,
          "name": "DETUSOKO"
        },
        {
          "code": 5311071,
          "regencyCode": 5311,
          "name": "WEWARIA"
        },
        {
          "code": 5312010,
          "regencyCode": 5312,
          "name": "AIMERE"
        },
        {
          "code": 5312011,
          "regencyCode": 5312,
          "name": "JEREBUU"
        },
        {
          "code": 5312012,
          "regencyCode": 5312,
          "name": "INERIE"
        },
        {
          "code": 5312020,
          "regencyCode": 5312,
          "name": "BAJAWA"
        },
        {
          "code": 5312030,
          "regencyCode": 5312,
          "name": "GOLEWA"
        },
        {
          "code": 5312031,
          "regencyCode": 5312,
          "name": "GOLEWA SELATAN"
        },
        {
          "code": 5312032,
          "regencyCode": 5312,
          "name": "GOLEWA BARAT"
        },
        {
          "code": 5312070,
          "regencyCode": 5312,
          "name": "BAJAWA UTARA"
        },
        {
          "code": 5312071,
          "regencyCode": 5312,
          "name": "SOA"
        },
        {
          "code": 5312080,
          "regencyCode": 5312,
          "name": "RIUNG"
        },
        {
          "code": 5312081,
          "regencyCode": 5312,
          "name": "RIUNG BARAT"
        },
        {
          "code": 5312082,
          "regencyCode": 5312,
          "name": "WOLOMEZE"
        },
        {
          "code": 5313040,
          "regencyCode": 5313,
          "name": "SATAR MESE"
        },
        {
          "code": 5313041,
          "regencyCode": 5313,
          "name": "SATAR MESE BARAT"
        },
        {
          "code": 5313042,
          "regencyCode": 5313,
          "name": "SATAR MESE UTARA"
        },
        {
          "code": 5313110,
          "regencyCode": 5313,
          "name": "LANGKE REMBONG"
        },
        {
          "code": 5313120,
          "regencyCode": 5313,
          "name": "RUTENG"
        },
        {
          "code": 5313121,
          "regencyCode": 5313,
          "name": "WAE RII"
        },
        {
          "code": 5313122,
          "regencyCode": 5313,
          "name": "LELAK"
        },
        {
          "code": 5313123,
          "regencyCode": 5313,
          "name": "RAHONG UTARA"
        },
        {
          "code": 5313130,
          "regencyCode": 5313,
          "name": "CIBAL"
        },
        {
          "code": 5313131,
          "regencyCode": 5313,
          "name": "CIBAL BARAT"
        },
        {
          "code": 5313140,
          "regencyCode": 5313,
          "name": "REOK"
        },
        {
          "code": 5313141,
          "regencyCode": 5313,
          "name": "REOK BARAT"
        },
        {
          "code": 5314010,
          "regencyCode": 5314,
          "name": "ROTE BARAT DAYA"
        },
        {
          "code": 5314020,
          "regencyCode": 5314,
          "name": "ROTE BARAT LAUT"
        },
        {
          "code": 5314030,
          "regencyCode": 5314,
          "name": "LOBALAIN"
        },
        {
          "code": 5314040,
          "regencyCode": 5314,
          "name": "ROTE TENGAH"
        },
        {
          "code": 5314041,
          "regencyCode": 5314,
          "name": "ROTE SELATAN"
        },
        {
          "code": 5314050,
          "regencyCode": 5314,
          "name": "PANTAI BARU"
        },
        {
          "code": 5314060,
          "regencyCode": 5314,
          "name": "ROTE TIMUR"
        },
        {
          "code": 5314061,
          "regencyCode": 5314,
          "name": "LANDU LEKO"
        },
        {
          "code": 5314070,
          "regencyCode": 5314,
          "name": "ROTE BARAT"
        },
        {
          "code": 5314071,
          "regencyCode": 5314,
          "name": "NDAO NUSE"
        },
        {
          "code": 5315010,
          "regencyCode": 5315,
          "name": "KOMODO"
        },
        {
          "code": 5315011,
          "regencyCode": 5315,
          "name": "BOLENG"
        },
        {
          "code": 5315020,
          "regencyCode": 5315,
          "name": "SANO NGGOANG"
        },
        {
          "code": 5315021,
          "regencyCode": 5315,
          "name": "MBELILING"
        },
        {
          "code": 5315030,
          "regencyCode": 5315,
          "name": "LEMBOR"
        },
        {
          "code": 5315031,
          "regencyCode": 5315,
          "name": "WELAK"
        },
        {
          "code": 5315032,
          "regencyCode": 5315,
          "name": "LEMBOR SELATAN"
        },
        {
          "code": 5315040,
          "regencyCode": 5315,
          "name": "KUWUS"
        },
        {
          "code": 5315041,
          "regencyCode": 5315,
          "name": "NDOSO"
        },
        {
          "code": 5315050,
          "regencyCode": 5315,
          "name": "MACANG PACAR"
        },
        {
          "code": 5316010,
          "regencyCode": 5316,
          "name": "KATIKUTANA"
        },
        {
          "code": 5316011,
          "regencyCode": 5316,
          "name": "KATIKUTANA SELATAN"
        },
        {
          "code": 5316020,
          "regencyCode": 5316,
          "name": "UMBU RATU NGGAY BARAT"
        },
        {
          "code": 5316030,
          "regencyCode": 5316,
          "name": "UMBU RATU NGGAY"
        },
        {
          "code": 5316040,
          "regencyCode": 5316,
          "name": "MAMBORO"
        },
        {
          "code": 5317010,
          "regencyCode": 5317,
          "name": "KODI BANGEDO"
        },
        {
          "code": 5317011,
          "regencyCode": 5317,
          "name": "KODI BALAGHAR"
        },
        {
          "code": 5317020,
          "regencyCode": 5317,
          "name": "KODI"
        },
        {
          "code": 5317030,
          "regencyCode": 5317,
          "name": "KODI UTARA"
        },
        {
          "code": 5317040,
          "regencyCode": 5317,
          "name": "WEWEWA SELATAN"
        },
        {
          "code": 5317050,
          "regencyCode": 5317,
          "name": "WEWEWA BARAT"
        },
        {
          "code": 5317060,
          "regencyCode": 5317,
          "name": "WEWEWA TIMUR"
        },
        {
          "code": 5317061,
          "regencyCode": 5317,
          "name": "WEWEWA TENGAH"
        },
        {
          "code": 5317070,
          "regencyCode": 5317,
          "name": "WEWEWA UTARA"
        },
        {
          "code": 5317080,
          "regencyCode": 5317,
          "name": "LOURA"
        },
        {
          "code": 5317081,
          "regencyCode": 5317,
          "name": "KOTA TAMBOLAKA"
        },
        {
          "code": 5318010,
          "regencyCode": 5318,
          "name": "MAUPONGGO"
        },
        {
          "code": 5318020,
          "regencyCode": 5318,
          "name": "KEO TENGAH"
        },
        {
          "code": 5318030,
          "regencyCode": 5318,
          "name": "NANGARORO"
        },
        {
          "code": 5318040,
          "regencyCode": 5318,
          "name": "BOAWAE"
        },
        {
          "code": 5318050,
          "regencyCode": 5318,
          "name": "AESESA SELATAN"
        },
        {
          "code": 5318060,
          "regencyCode": 5318,
          "name": "AESESA"
        },
        {
          "code": 5318070,
          "regencyCode": 5318,
          "name": "WOLOWAE"
        },
        {
          "code": 5319010,
          "regencyCode": 5319,
          "name": "BORONG"
        },
        {
          "code": 5319011,
          "regencyCode": 5319,
          "name": "RANA MESE"
        },
        {
          "code": 5319020,
          "regencyCode": 5319,
          "name": "KOTA KOMBA"
        },
        {
          "code": 5319030,
          "regencyCode": 5319,
          "name": "ELAR"
        },
        {
          "code": 5319031,
          "regencyCode": 5319,
          "name": "ELAR SELATAN"
        },
        {
          "code": 5319040,
          "regencyCode": 5319,
          "name": "SAMBI RAMPAS"
        },
        {
          "code": 5319050,
          "regencyCode": 5319,
          "name": "POCO RANAKA"
        },
        {
          "code": 5319051,
          "regencyCode": 5319,
          "name": "POCO RANAKA TIMUR"
        },
        {
          "code": 5319060,
          "regencyCode": 5319,
          "name": "LAMBA LEDA"
        },
        {
          "code": 5320010,
          "regencyCode": 5320,
          "name": "RAIJUA"
        },
        {
          "code": 5320020,
          "regencyCode": 5320,
          "name": "HAWU MEHARA"
        },
        {
          "code": 5320030,
          "regencyCode": 5320,
          "name": "SABU LIAE"
        },
        {
          "code": 5320040,
          "regencyCode": 5320,
          "name": "SABU BARAT"
        },
        {
          "code": 5320050,
          "regencyCode": 5320,
          "name": "SABU TENGAH"
        },
        {
          "code": 5320060,
          "regencyCode": 5320,
          "name": "SABU TIMUR"
        },
        {
          "code": 5321010,
          "regencyCode": 5321,
          "name": "WEWIKU"
        },
        {
          "code": 5321020,
          "regencyCode": 5321,
          "name": "MALAKA BARAT"
        },
        {
          "code": 5321030,
          "regencyCode": 5321,
          "name": "WELIMAN"
        },
        {
          "code": 5321040,
          "regencyCode": 5321,
          "name": "RINHAT"
        },
        {
          "code": 5321050,
          "regencyCode": 5321,
          "name": "IO KUFEU"
        },
        {
          "code": 5321060,
          "regencyCode": 5321,
          "name": "SASITA MEAN"
        },
        {
          "code": 5321070,
          "regencyCode": 5321,
          "name": "MALAKA TENGAH"
        },
        {
          "code": 5321080,
          "regencyCode": 5321,
          "name": "BOTIN LEOBELE"
        },
        {
          "code": 5321090,
          "regencyCode": 5321,
          "name": "LAEN MANEN"
        },
        {
          "code": 5321100,
          "regencyCode": 5321,
          "name": "MALAKA TIMUR"
        },
        {
          "code": 5321110,
          "regencyCode": 5321,
          "name": "KOBALIMA"
        },
        {
          "code": 5321120,
          "regencyCode": 5321,
          "name": "KOBALIMA TIMUR"
        },
        {
          "code": 5371010,
          "regencyCode": 5371,
          "name": "ALAK"
        },
        {
          "code": 5371020,
          "regencyCode": 5371,
          "name": "MAULAFA"
        },
        {
          "code": 5371030,
          "regencyCode": 5371,
          "name": "OEBOBO"
        },
        {
          "code": 5371031,
          "regencyCode": 5371,
          "name": "KOTA RAJA"
        },
        {
          "code": 5371040,
          "regencyCode": 5371,
          "name": "KELAPA LIMA"
        },
        {
          "code": 5371041,
          "regencyCode": 5371,
          "name": "KOTA LAMA"
        },
        {
          "code": 6101010,
          "regencyCode": 6101,
          "name": "SELAKAU"
        },
        {
          "code": 6101011,
          "regencyCode": 6101,
          "name": "SELAKAU TIMUR"
        },
        {
          "code": 6101020,
          "regencyCode": 6101,
          "name": "PEMANGKAT"
        },
        {
          "code": 6101021,
          "regencyCode": 6101,
          "name": "SEMPARUK"
        },
        {
          "code": 6101022,
          "regencyCode": 6101,
          "name": "SALATIGA"
        },
        {
          "code": 6101030,
          "regencyCode": 6101,
          "name": "TEBAS"
        },
        {
          "code": 6101031,
          "regencyCode": 6101,
          "name": "TEKARANG"
        },
        {
          "code": 6101040,
          "regencyCode": 6101,
          "name": "SAMBAS"
        },
        {
          "code": 6101041,
          "regencyCode": 6101,
          "name": "SUBAH"
        },
        {
          "code": 6101042,
          "regencyCode": 6101,
          "name": "SEBAWI"
        },
        {
          "code": 6101043,
          "regencyCode": 6101,
          "name": "SAJAD"
        },
        {
          "code": 6101050,
          "regencyCode": 6101,
          "name": "JAWAI"
        },
        {
          "code": 6101051,
          "regencyCode": 6101,
          "name": "JAWAI SELATAN"
        },
        {
          "code": 6101060,
          "regencyCode": 6101,
          "name": "TELUK KERAMAT"
        },
        {
          "code": 6101061,
          "regencyCode": 6101,
          "name": "GALING"
        },
        {
          "code": 6101062,
          "regencyCode": 6101,
          "name": "TANGARAN"
        },
        {
          "code": 6101070,
          "regencyCode": 6101,
          "name": "SEJANGKUNG"
        },
        {
          "code": 6101080,
          "regencyCode": 6101,
          "name": "SAJINGAN BESAR"
        },
        {
          "code": 6101090,
          "regencyCode": 6101,
          "name": "PALOH"
        },
        {
          "code": 6102010,
          "regencyCode": 6102,
          "name": "SUNGAI RAYA"
        },
        {
          "code": 6102011,
          "regencyCode": 6102,
          "name": "CAPKALA"
        },
        {
          "code": 6102012,
          "regencyCode": 6102,
          "name": "SUNGAI RAYA KEPULAUAN"
        },
        {
          "code": 6102030,
          "regencyCode": 6102,
          "name": "SAMALANTAN"
        },
        {
          "code": 6102031,
          "regencyCode": 6102,
          "name": "MONTERADO"
        },
        {
          "code": 6102032,
          "regencyCode": 6102,
          "name": "LEMBAH BAWANG"
        },
        {
          "code": 6102040,
          "regencyCode": 6102,
          "name": "BENGKAYANG"
        },
        {
          "code": 6102041,
          "regencyCode": 6102,
          "name": "TERIAK"
        },
        {
          "code": 6102042,
          "regencyCode": 6102,
          "name": "SUNGAI BETUNG"
        },
        {
          "code": 6102050,
          "regencyCode": 6102,
          "name": "LEDO"
        },
        {
          "code": 6102051,
          "regencyCode": 6102,
          "name": "SUTI SEMARANG"
        },
        {
          "code": 6102052,
          "regencyCode": 6102,
          "name": "LUMAR"
        },
        {
          "code": 6102060,
          "regencyCode": 6102,
          "name": "SANGGAU LEDO"
        },
        {
          "code": 6102061,
          "regencyCode": 6102,
          "name": "TUJUHBELAS"
        },
        {
          "code": 6102070,
          "regencyCode": 6102,
          "name": "SELUAS"
        },
        {
          "code": 6102080,
          "regencyCode": 6102,
          "name": "JAGOI BABANG"
        },
        {
          "code": 6102081,
          "regencyCode": 6102,
          "name": "SIDING"
        },
        {
          "code": 6103020,
          "regencyCode": 6103,
          "name": "SEBANGKI"
        },
        {
          "code": 6103030,
          "regencyCode": 6103,
          "name": "NGABANG"
        },
        {
          "code": 6103031,
          "regencyCode": 6103,
          "name": "JELIMPO"
        },
        {
          "code": 6103040,
          "regencyCode": 6103,
          "name": "SENGAH TEMILA"
        },
        {
          "code": 6103050,
          "regencyCode": 6103,
          "name": "MANDOR"
        },
        {
          "code": 6103060,
          "regencyCode": 6103,
          "name": "MENJALIN"
        },
        {
          "code": 6103070,
          "regencyCode": 6103,
          "name": "MEMPAWAH HULU"
        },
        {
          "code": 6103071,
          "regencyCode": 6103,
          "name": "SOMPAK"
        },
        {
          "code": 6103080,
          "regencyCode": 6103,
          "name": "MENYUKE"
        },
        {
          "code": 6103081,
          "regencyCode": 6103,
          "name": "BANYUKE HULU"
        },
        {
          "code": 6103090,
          "regencyCode": 6103,
          "name": "MERANTI"
        },
        {
          "code": 6103100,
          "regencyCode": 6103,
          "name": "KUALA BEHE"
        },
        {
          "code": 6103110,
          "regencyCode": 6103,
          "name": "AIR BESAR"
        },
        {
          "code": 6104080,
          "regencyCode": 6104,
          "name": "SIANTAN"
        },
        {
          "code": 6104081,
          "regencyCode": 6104,
          "name": "SEGEDONG"
        },
        {
          "code": 6104090,
          "regencyCode": 6104,
          "name": "SUNGAI PINYUH"
        },
        {
          "code": 6104091,
          "regencyCode": 6104,
          "name": "ANJONGAN"
        },
        {
          "code": 6104100,
          "regencyCode": 6104,
          "name": "MEMPAWAH HILIR"
        },
        {
          "code": 6104101,
          "regencyCode": 6104,
          "name": "MEMPAWAH TIMUR"
        },
        {
          "code": 6104110,
          "regencyCode": 6104,
          "name": "SUNGAI KUNYIT"
        },
        {
          "code": 6104120,
          "regencyCode": 6104,
          "name": "TOHO"
        },
        {
          "code": 6104121,
          "regencyCode": 6104,
          "name": "SADANIANG"
        },
        {
          "code": 6105010,
          "regencyCode": 6105,
          "name": "TOBA"
        },
        {
          "code": 6105020,
          "regencyCode": 6105,
          "name": "MELIAU"
        },
        {
          "code": 6105060,
          "regencyCode": 6105,
          "name": "KAPUAS"
        },
        {
          "code": 6105070,
          "regencyCode": 6105,
          "name": "MUKOK"
        },
        {
          "code": 6105120,
          "regencyCode": 6105,
          "name": "JANGKANG"
        },
        {
          "code": 6105130,
          "regencyCode": 6105,
          "name": "BONTI"
        },
        {
          "code": 6105140,
          "regencyCode": 6105,
          "name": "PARINDU"
        },
        {
          "code": 6105150,
          "regencyCode": 6105,
          "name": "TAYAN HILIR"
        },
        {
          "code": 6105160,
          "regencyCode": 6105,
          "name": "BALAI"
        },
        {
          "code": 6105170,
          "regencyCode": 6105,
          "name": "TAYAN HULU"
        },
        {
          "code": 6105180,
          "regencyCode": 6105,
          "name": "KEMBAYAN"
        },
        {
          "code": 6105190,
          "regencyCode": 6105,
          "name": "BEDUWAI"
        },
        {
          "code": 6105200,
          "regencyCode": 6105,
          "name": "NOYAN"
        },
        {
          "code": 6105210,
          "regencyCode": 6105,
          "name": "SEKAYAM"
        },
        {
          "code": 6105220,
          "regencyCode": 6105,
          "name": "ENTIKONG"
        },
        {
          "code": 6106010,
          "regencyCode": 6106,
          "name": "KENDAWANGAN"
        },
        {
          "code": 6106020,
          "regencyCode": 6106,
          "name": "MANIS MATA"
        },
        {
          "code": 6106030,
          "regencyCode": 6106,
          "name": "MARAU"
        },
        {
          "code": 6106031,
          "regencyCode": 6106,
          "name": "SINGKUP"
        },
        {
          "code": 6106032,
          "regencyCode": 6106,
          "name": "AIR UPAS"
        },
        {
          "code": 6106040,
          "regencyCode": 6106,
          "name": "JELAI HULU"
        },
        {
          "code": 6106050,
          "regencyCode": 6106,
          "name": "TUMBANG TITI"
        },
        {
          "code": 6106051,
          "regencyCode": 6106,
          "name": "PEMAHAN"
        },
        {
          "code": 6106052,
          "regencyCode": 6106,
          "name": "SUNGAI MELAYU RAYAK"
        },
        {
          "code": 6106060,
          "regencyCode": 6106,
          "name": "MATAN HILIR SELATAN"
        },
        {
          "code": 6106061,
          "regencyCode": 6106,
          "name": "BENUA KAYONG"
        },
        {
          "code": 6106070,
          "regencyCode": 6106,
          "name": "MATAN HILIR UTARA"
        },
        {
          "code": 6106071,
          "regencyCode": 6106,
          "name": "DELTA PAWAN"
        },
        {
          "code": 6106072,
          "regencyCode": 6106,
          "name": "MUARA PAWAN"
        },
        {
          "code": 6106090,
          "regencyCode": 6106,
          "name": "NANGA TAYAP"
        },
        {
          "code": 6106100,
          "regencyCode": 6106,
          "name": "SANDAI"
        },
        {
          "code": 6106101,
          "regencyCode": 6106,
          "name": "HULU SUNGAI"
        },
        {
          "code": 6106110,
          "regencyCode": 6106,
          "name": "SUNGAI LAUR"
        },
        {
          "code": 6106120,
          "regencyCode": 6106,
          "name": "SIMPANG HULU"
        },
        {
          "code": 6106121,
          "regencyCode": 6106,
          "name": "SIMPANG DUA"
        },
        {
          "code": 6107060,
          "regencyCode": 6107,
          "name": "SERAWAI"
        },
        {
          "code": 6107070,
          "regencyCode": 6107,
          "name": "AMBALAU"
        },
        {
          "code": 6107080,
          "regencyCode": 6107,
          "name": "KAYAN HULU"
        },
        {
          "code": 6107110,
          "regencyCode": 6107,
          "name": "SEPAUK"
        },
        {
          "code": 6107120,
          "regencyCode": 6107,
          "name": "TEMPUNAK"
        },
        {
          "code": 6107130,
          "regencyCode": 6107,
          "name": "SUNGAI TEBELIAN"
        },
        {
          "code": 6107140,
          "regencyCode": 6107,
          "name": "SINTANG"
        },
        {
          "code": 6107150,
          "regencyCode": 6107,
          "name": "DEDAI"
        },
        {
          "code": 6107160,
          "regencyCode": 6107,
          "name": "KAYAN HILIR"
        },
        {
          "code": 6107170,
          "regencyCode": 6107,
          "name": "KELAM PERMAI"
        },
        {
          "code": 6107180,
          "regencyCode": 6107,
          "name": "BINJAI HULU"
        },
        {
          "code": 6107190,
          "regencyCode": 6107,
          "name": "KETUNGAU HILIR"
        },
        {
          "code": 6107200,
          "regencyCode": 6107,
          "name": "KETUNGAU TENGAH"
        },
        {
          "code": 6107210,
          "regencyCode": 6107,
          "name": "KETUNGAU HULU"
        },
        {
          "code": 6108010,
          "regencyCode": 6108,
          "name": "SILAT HILIR"
        },
        {
          "code": 6108020,
          "regencyCode": 6108,
          "name": "SILAT HULU"
        },
        {
          "code": 6108030,
          "regencyCode": 6108,
          "name": "HULU GURUNG"
        },
        {
          "code": 6108040,
          "regencyCode": 6108,
          "name": "BUNUT HULU"
        },
        {
          "code": 6108050,
          "regencyCode": 6108,
          "name": "MENTEBAH"
        },
        {
          "code": 6108060,
          "regencyCode": 6108,
          "name": "BIKA"
        },
        {
          "code": 6108070,
          "regencyCode": 6108,
          "name": "KALIS"
        },
        {
          "code": 6108080,
          "regencyCode": 6108,
          "name": "PUTUSSIBAU SELATAN"
        },
        {
          "code": 6108090,
          "regencyCode": 6108,
          "name": "EMBALOH HILIR"
        },
        {
          "code": 6108100,
          "regencyCode": 6108,
          "name": "BUNUT HILIR"
        },
        {
          "code": 6108110,
          "regencyCode": 6108,
          "name": "BOYAN TANJUNG"
        },
        {
          "code": 6108120,
          "regencyCode": 6108,
          "name": "PENGKADAN"
        },
        {
          "code": 6108130,
          "regencyCode": 6108,
          "name": "JONGKONG"
        },
        {
          "code": 6108140,
          "regencyCode": 6108,
          "name": "SELIMBAU"
        },
        {
          "code": 6108150,
          "regencyCode": 6108,
          "name": "SUHAID"
        },
        {
          "code": 6108160,
          "regencyCode": 6108,
          "name": "SEBERUANG"
        },
        {
          "code": 6108170,
          "regencyCode": 6108,
          "name": "SEMITAU"
        },
        {
          "code": 6108180,
          "regencyCode": 6108,
          "name": "EMPANANG"
        },
        {
          "code": 6108190,
          "regencyCode": 6108,
          "name": "PURING KENCANA"
        },
        {
          "code": 6108200,
          "regencyCode": 6108,
          "name": "BADAU"
        },
        {
          "code": 6108210,
          "regencyCode": 6108,
          "name": "BATANG LUPAR"
        },
        {
          "code": 6108220,
          "regencyCode": 6108,
          "name": "EMBALOH HULU"
        },
        {
          "code": 6108230,
          "regencyCode": 6108,
          "name": "PUTUSSIBAU UTARA"
        },
        {
          "code": 6109010,
          "regencyCode": 6109,
          "name": "NANGA MAHAP"
        },
        {
          "code": 6109020,
          "regencyCode": 6109,
          "name": "NANGA TAMAN"
        },
        {
          "code": 6109030,
          "regencyCode": 6109,
          "name": "SEKADAU HULU"
        },
        {
          "code": 6109040,
          "regencyCode": 6109,
          "name": "SEKADAU HILIR"
        },
        {
          "code": 6109050,
          "regencyCode": 6109,
          "name": "BELITANG HILIR"
        },
        {
          "code": 6109060,
          "regencyCode": 6109,
          "name": "BELITANG"
        },
        {
          "code": 6109070,
          "regencyCode": 6109,
          "name": "BELITANG HULU"
        },
        {
          "code": 6110010,
          "regencyCode": 6110,
          "name": "SOKAN"
        },
        {
          "code": 6110020,
          "regencyCode": 6110,
          "name": "TANAH PINOH"
        },
        {
          "code": 6110021,
          "regencyCode": 6110,
          "name": "TANAH PINOH BARAT"
        },
        {
          "code": 6110030,
          "regencyCode": 6110,
          "name": "SAYAN"
        },
        {
          "code": 6110040,
          "regencyCode": 6110,
          "name": "BELIMBING"
        },
        {
          "code": 6110041,
          "regencyCode": 6110,
          "name": "BELIMBING HULU"
        },
        {
          "code": 6110050,
          "regencyCode": 6110,
          "name": "NANGA PINOH"
        },
        {
          "code": 6110051,
          "regencyCode": 6110,
          "name": "PINOH SELATAN"
        },
        {
          "code": 6110052,
          "regencyCode": 6110,
          "name": "PINOH UTARA"
        },
        {
          "code": 6110060,
          "regencyCode": 6110,
          "name": "ELLA HILIR"
        },
        {
          "code": 6110070,
          "regencyCode": 6110,
          "name": "MENUKUNG"
        },
        {
          "code": 6111010,
          "regencyCode": 6111,
          "name": "PULAU MAYA"
        },
        {
          "code": 6111011,
          "regencyCode": 6111,
          "name": "KEPULAUAN KARIMATA"
        },
        {
          "code": 6111020,
          "regencyCode": 6111,
          "name": "SUKADANA"
        },
        {
          "code": 6111030,
          "regencyCode": 6111,
          "name": "SIMPANG HILIR"
        },
        {
          "code": 6111040,
          "regencyCode": 6111,
          "name": "TELUK BATANG"
        },
        {
          "code": 6111050,
          "regencyCode": 6111,
          "name": "SEPONTI"
        },
        {
          "code": 6112010,
          "regencyCode": 6112,
          "name": "BATU AMPAR"
        },
        {
          "code": 6112020,
          "regencyCode": 6112,
          "name": "TERENTANG"
        },
        {
          "code": 6112030,
          "regencyCode": 6112,
          "name": "KUBU"
        },
        {
          "code": 6112040,
          "regencyCode": 6112,
          "name": "TELOK PA'KEDAI"
        },
        {
          "code": 6112050,
          "regencyCode": 6112,
          "name": "SUNGAI KAKAP"
        },
        {
          "code": 6112060,
          "regencyCode": 6112,
          "name": "RASAU JAYA"
        },
        {
          "code": 6112070,
          "regencyCode": 6112,
          "name": "SUNGAI RAYA"
        },
        {
          "code": 6112080,
          "regencyCode": 6112,
          "name": "SUNGAI AMBAWANG"
        },
        {
          "code": 6112090,
          "regencyCode": 6112,
          "name": "KUALA MANDOR-B"
        },
        {
          "code": 6171010,
          "regencyCode": 6171,
          "name": "PONTIANAK SELATAN"
        },
        {
          "code": 6171011,
          "regencyCode": 6171,
          "name": "PONTIANAK TENGGARA"
        },
        {
          "code": 6171020,
          "regencyCode": 6171,
          "name": "PONTIANAK TIMUR"
        },
        {
          "code": 6171030,
          "regencyCode": 6171,
          "name": "PONTIANAK BARAT"
        },
        {
          "code": 6171031,
          "regencyCode": 6171,
          "name": "PONTIANAK KOTA"
        },
        {
          "code": 6171040,
          "regencyCode": 6171,
          "name": "PONTIANAK UTARA"
        },
        {
          "code": 6172010,
          "regencyCode": 6172,
          "name": "SINGKAWANG SELATAN"
        },
        {
          "code": 6172020,
          "regencyCode": 6172,
          "name": "SINGKAWANG TIMUR"
        },
        {
          "code": 6172030,
          "regencyCode": 6172,
          "name": "SINGKAWANG UTARA"
        },
        {
          "code": 6172040,
          "regencyCode": 6172,
          "name": "SINGKAWANG BARAT"
        },
        {
          "code": 6172050,
          "regencyCode": 6172,
          "name": "SINGKAWANG TENGAH"
        },
        {
          "code": 6201040,
          "regencyCode": 6201,
          "name": "KOTAWARINGIN LAMA"
        },
        {
          "code": 6201050,
          "regencyCode": 6201,
          "name": "ARUT SELATAN"
        },
        {
          "code": 6201060,
          "regencyCode": 6201,
          "name": "KUMAI"
        },
        {
          "code": 6201061,
          "regencyCode": 6201,
          "name": "PANGKALAN BANTENG"
        },
        {
          "code": 6201062,
          "regencyCode": 6201,
          "name": "PANGKALAN LADA"
        },
        {
          "code": 6201070,
          "regencyCode": 6201,
          "name": "ARUT UTARA"
        },
        {
          "code": 6202020,
          "regencyCode": 6202,
          "name": "MENTAYA HILIR SELATAN"
        },
        {
          "code": 6202021,
          "regencyCode": 6202,
          "name": "TELUK SAMPIT"
        },
        {
          "code": 6202050,
          "regencyCode": 6202,
          "name": "PULAU HANAUT"
        },
        {
          "code": 6202060,
          "regencyCode": 6202,
          "name": "MENTAWA BARU/KETAPANG"
        },
        {
          "code": 6202061,
          "regencyCode": 6202,
          "name": "SERANAU"
        },
        {
          "code": 6202070,
          "regencyCode": 6202,
          "name": "MENTAYA HILIR UTARA"
        },
        {
          "code": 6202110,
          "regencyCode": 6202,
          "name": "KOTA BESI"
        },
        {
          "code": 6202111,
          "regencyCode": 6202,
          "name": "TELAWANG"
        },
        {
          "code": 6202120,
          "regencyCode": 6202,
          "name": "BAAMANG"
        },
        {
          "code": 6202190,
          "regencyCode": 6202,
          "name": "CEMPAGA"
        },
        {
          "code": 6202191,
          "regencyCode": 6202,
          "name": "CEMPAGA HULU"
        },
        {
          "code": 6202200,
          "regencyCode": 6202,
          "name": "PARENGGEAN"
        },
        {
          "code": 6202201,
          "regencyCode": 6202,
          "name": "TUALAN HULU"
        },
        {
          "code": 6202210,
          "regencyCode": 6202,
          "name": "MENTAYA HULU"
        },
        {
          "code": 6202211,
          "regencyCode": 6202,
          "name": "BUKIT SANTUAI"
        },
        {
          "code": 6202230,
          "regencyCode": 6202,
          "name": "ANTANG KALANG"
        },
        {
          "code": 6202231,
          "regencyCode": 6202,
          "name": "TELAGA ANTANG"
        },
        {
          "code": 6203020,
          "regencyCode": 6203,
          "name": "KAPUAS KUALA"
        },
        {
          "code": 6203021,
          "regencyCode": 6203,
          "name": "TAMBAN CATUR"
        },
        {
          "code": 6203030,
          "regencyCode": 6203,
          "name": "KAPUAS TIMUR"
        },
        {
          "code": 6203040,
          "regencyCode": 6203,
          "name": "SELAT"
        },
        {
          "code": 6203041,
          "regencyCode": 6203,
          "name": "BATAGUH"
        },
        {
          "code": 6203070,
          "regencyCode": 6203,
          "name": "BASARANG"
        },
        {
          "code": 6203080,
          "regencyCode": 6203,
          "name": "KAPUAS HILIR"
        },
        {
          "code": 6203090,
          "regencyCode": 6203,
          "name": "PULAU PETAK"
        },
        {
          "code": 6203100,
          "regencyCode": 6203,
          "name": "KAPUAS MURUNG"
        },
        {
          "code": 6203101,
          "regencyCode": 6203,
          "name": "DADAHUP"
        },
        {
          "code": 6203110,
          "regencyCode": 6203,
          "name": "KAPUAS BARAT"
        },
        {
          "code": 6203150,
          "regencyCode": 6203,
          "name": "MANTANGAI"
        },
        {
          "code": 6203160,
          "regencyCode": 6203,
          "name": "TIMPAH"
        },
        {
          "code": 6203170,
          "regencyCode": 6203,
          "name": "KAPUAS TENGAH"
        },
        {
          "code": 6203171,
          "regencyCode": 6203,
          "name": "PASAK TALAWANG"
        },
        {
          "code": 6203180,
          "regencyCode": 6203,
          "name": "KAPUAS HULU"
        },
        {
          "code": 6203181,
          "regencyCode": 6203,
          "name": "MANDAU TALAWANG"
        },
        {
          "code": 6204010,
          "regencyCode": 6204,
          "name": "JENAMAS"
        },
        {
          "code": 6204020,
          "regencyCode": 6204,
          "name": "DUSUN HILIR"
        },
        {
          "code": 6204030,
          "regencyCode": 6204,
          "name": "KARAU KUALA"
        },
        {
          "code": 6204040,
          "regencyCode": 6204,
          "name": "DUSUN SELATAN"
        },
        {
          "code": 6204050,
          "regencyCode": 6204,
          "name": "DUSUN UTARA"
        },
        {
          "code": 6204060,
          "regencyCode": 6204,
          "name": "GUNUNG BINTANG AWAI"
        },
        {
          "code": 6205010,
          "regencyCode": 6205,
          "name": "MONTALLAT"
        },
        {
          "code": 6205020,
          "regencyCode": 6205,
          "name": "GUNUNG TIMANG"
        },
        {
          "code": 6205030,
          "regencyCode": 6205,
          "name": "GUNUNG PUREI"
        },
        {
          "code": 6205040,
          "regencyCode": 6205,
          "name": "TEWEH TIMUR"
        },
        {
          "code": 6205050,
          "regencyCode": 6205,
          "name": "TEWEH TENGAH"
        },
        {
          "code": 6205051,
          "regencyCode": 6205,
          "name": "TEWEH  BARU"
        },
        {
          "code": 6205052,
          "regencyCode": 6205,
          "name": "TEWEH SELATAN"
        },
        {
          "code": 6205060,
          "regencyCode": 6205,
          "name": "LAHEI"
        },
        {
          "code": 6205061,
          "regencyCode": 6205,
          "name": "LAHEI BARAT"
        },
        {
          "code": 6206010,
          "regencyCode": 6206,
          "name": "JELAI"
        },
        {
          "code": 6206011,
          "regencyCode": 6206,
          "name": "PANTAI LUNCI"
        },
        {
          "code": 6206020,
          "regencyCode": 6206,
          "name": "SUKAMARA"
        },
        {
          "code": 6206030,
          "regencyCode": 6206,
          "name": "BALAI RIAM"
        },
        {
          "code": 6206031,
          "regencyCode": 6206,
          "name": "PERMATA KECUBUNG"
        },
        {
          "code": 6207010,
          "regencyCode": 6207,
          "name": "BULIK"
        },
        {
          "code": 6207011,
          "regencyCode": 6207,
          "name": "SEMATU JAYA"
        },
        {
          "code": 6207012,
          "regencyCode": 6207,
          "name": "MENTHOBI RAYA"
        },
        {
          "code": 6207013,
          "regencyCode": 6207,
          "name": "BULIK TIMUR"
        },
        {
          "code": 6207020,
          "regencyCode": 6207,
          "name": "LAMANDAU"
        },
        {
          "code": 6207021,
          "regencyCode": 6207,
          "name": "BELANTIKAN RAYA"
        },
        {
          "code": 6207030,
          "regencyCode": 6207,
          "name": "DELANG"
        },
        {
          "code": 6207031,
          "regencyCode": 6207,
          "name": "BATANGKAWA"
        },
        {
          "code": 6208010,
          "regencyCode": 6208,
          "name": "SERUYAN HILIR"
        },
        {
          "code": 6208011,
          "regencyCode": 6208,
          "name": "SERUYAN HILIR TIMUR"
        },
        {
          "code": 6208020,
          "regencyCode": 6208,
          "name": "DANAU SEMBULUH"
        },
        {
          "code": 6208021,
          "regencyCode": 6208,
          "name": "SERUYAN RAYA"
        },
        {
          "code": 6208030,
          "regencyCode": 6208,
          "name": "HANAU"
        },
        {
          "code": 6208031,
          "regencyCode": 6208,
          "name": "DANAU SELULUK"
        },
        {
          "code": 6208040,
          "regencyCode": 6208,
          "name": "SERUYAN TENGAH"
        },
        {
          "code": 6208041,
          "regencyCode": 6208,
          "name": "BATU AMPAR"
        },
        {
          "code": 6208050,
          "regencyCode": 6208,
          "name": "SERUYAN HULU"
        },
        {
          "code": 6208051,
          "regencyCode": 6208,
          "name": "SULING TAMBUN"
        },
        {
          "code": 6209010,
          "regencyCode": 6209,
          "name": "KATINGAN KUALA"
        },
        {
          "code": 6209020,
          "regencyCode": 6209,
          "name": "MENDAWAI"
        },
        {
          "code": 6209030,
          "regencyCode": 6209,
          "name": "KAMIPANG"
        },
        {
          "code": 6209040,
          "regencyCode": 6209,
          "name": "TASIK PAYAWAN"
        },
        {
          "code": 6209050,
          "regencyCode": 6209,
          "name": "KATINGAN HILIR"
        },
        {
          "code": 6209060,
          "regencyCode": 6209,
          "name": "TEWANG SANGALANG GARING"
        },
        {
          "code": 6209070,
          "regencyCode": 6209,
          "name": "PULAU MALAN"
        },
        {
          "code": 6209080,
          "regencyCode": 6209,
          "name": "KATINGAN TENGAH"
        },
        {
          "code": 6209090,
          "regencyCode": 6209,
          "name": "SANAMAN MANTIKEI"
        },
        {
          "code": 6209091,
          "regencyCode": 6209,
          "name": "PETAK MALAI"
        },
        {
          "code": 6209100,
          "regencyCode": 6209,
          "name": "MARIKIT"
        },
        {
          "code": 6209110,
          "regencyCode": 6209,
          "name": "KATINGAN HULU"
        },
        {
          "code": 6209111,
          "regencyCode": 6209,
          "name": "BUKIT RAYA"
        },
        {
          "code": 6210010,
          "regencyCode": 6210,
          "name": "KAHAYAN KUALA"
        },
        {
          "code": 6210011,
          "regencyCode": 6210,
          "name": "SEBANGAU KUALA"
        },
        {
          "code": 6210020,
          "regencyCode": 6210,
          "name": "PANDIH BATU"
        },
        {
          "code": 6210030,
          "regencyCode": 6210,
          "name": "MALIKU"
        },
        {
          "code": 6210040,
          "regencyCode": 6210,
          "name": "KAHAYAN HILIR"
        },
        {
          "code": 6210041,
          "regencyCode": 6210,
          "name": "JABIREN RAYA"
        },
        {
          "code": 6210050,
          "regencyCode": 6210,
          "name": "KAHAYAN TENGAH"
        },
        {
          "code": 6210060,
          "regencyCode": 6210,
          "name": "BANAMA TINGANG"
        },
        {
          "code": 6211010,
          "regencyCode": 6211,
          "name": "MANUHING"
        },
        {
          "code": 6211011,
          "regencyCode": 6211,
          "name": "MANUHING RAYA"
        },
        {
          "code": 6211020,
          "regencyCode": 6211,
          "name": "RUNGAN"
        },
        {
          "code": 6211021,
          "regencyCode": 6211,
          "name": "RUNGAN HULU"
        },
        {
          "code": 6211022,
          "regencyCode": 6211,
          "name": "RUNGAN BARAT"
        },
        {
          "code": 6211030,
          "regencyCode": 6211,
          "name": "SEPANG"
        },
        {
          "code": 6211031,
          "regencyCode": 6211,
          "name": "MIHING RAYA"
        },
        {
          "code": 6211040,
          "regencyCode": 6211,
          "name": "KURUN"
        },
        {
          "code": 6211050,
          "regencyCode": 6211,
          "name": "TEWAH"
        },
        {
          "code": 6211060,
          "regencyCode": 6211,
          "name": "KAHAYAN HULU UTARA"
        },
        {
          "code": 6211061,
          "regencyCode": 6211,
          "name": "DAMANG BATU"
        },
        {
          "code": 6211062,
          "regencyCode": 6211,
          "name": "MIRI MANASA"
        },
        {
          "code": 6212010,
          "regencyCode": 6212,
          "name": "BENUA LIMA"
        },
        {
          "code": 6212020,
          "regencyCode": 6212,
          "name": "DUSUN TIMUR"
        },
        {
          "code": 6212021,
          "regencyCode": 6212,
          "name": "PAJU EPAT"
        },
        {
          "code": 6212030,
          "regencyCode": 6212,
          "name": "AWANG"
        },
        {
          "code": 6212040,
          "regencyCode": 6212,
          "name": "PATANGKEP TUTUI"
        },
        {
          "code": 6212050,
          "regencyCode": 6212,
          "name": "DUSUN TENGAH"
        },
        {
          "code": 6212051,
          "regencyCode": 6212,
          "name": "RAREN BATUAH"
        },
        {
          "code": 6212052,
          "regencyCode": 6212,
          "name": "PAKU"
        },
        {
          "code": 6212053,
          "regencyCode": 6212,
          "name": "KARUSEN JANANG"
        },
        {
          "code": 6212060,
          "regencyCode": 6212,
          "name": "PEMATANG KARAU"
        },
        {
          "code": 6213010,
          "regencyCode": 6213,
          "name": "PERMATA INTAN"
        },
        {
          "code": 6213011,
          "regencyCode": 6213,
          "name": "SUNGAI BABUAT"
        },
        {
          "code": 6213020,
          "regencyCode": 6213,
          "name": "MURUNG"
        },
        {
          "code": 6213030,
          "regencyCode": 6213,
          "name": "LAUNG TUHUP"
        },
        {
          "code": 6213031,
          "regencyCode": 6213,
          "name": "BARITO TUHUP RAYA"
        },
        {
          "code": 6213040,
          "regencyCode": 6213,
          "name": "TANAH SIANG"
        },
        {
          "code": 6213041,
          "regencyCode": 6213,
          "name": "TANAH SIANG SELATAN"
        },
        {
          "code": 6213050,
          "regencyCode": 6213,
          "name": "SUMBER BARITO"
        },
        {
          "code": 6213051,
          "regencyCode": 6213,
          "name": "SERIBU RIAM"
        },
        {
          "code": 6213052,
          "regencyCode": 6213,
          "name": "UUT MURUNG"
        },
        {
          "code": 6271010,
          "regencyCode": 6271,
          "name": "PAHANDUT"
        },
        {
          "code": 6271011,
          "regencyCode": 6271,
          "name": "SABANGAU"
        },
        {
          "code": 6271012,
          "regencyCode": 6271,
          "name": "JEKAN RAYA"
        },
        {
          "code": 6271020,
          "regencyCode": 6271,
          "name": "BUKIT BATU"
        },
        {
          "code": 6271021,
          "regencyCode": 6271,
          "name": "RAKUMPIT"
        },
        {
          "code": 6301010,
          "regencyCode": 6301,
          "name": "PANYIPATAN"
        },
        {
          "code": 6301020,
          "regencyCode": 6301,
          "name": "TAKISUNG"
        },
        {
          "code": 6301030,
          "regencyCode": 6301,
          "name": "KURAU"
        },
        {
          "code": 6301031,
          "regencyCode": 6301,
          "name": "BUMI MAKMUR"
        },
        {
          "code": 6301040,
          "regencyCode": 6301,
          "name": "BATI - BATI"
        },
        {
          "code": 6301050,
          "regencyCode": 6301,
          "name": "TAMBANG ULANG"
        },
        {
          "code": 6301060,
          "regencyCode": 6301,
          "name": "PELAIHARI"
        },
        {
          "code": 6301061,
          "regencyCode": 6301,
          "name": "BAJUIN"
        },
        {
          "code": 6301070,
          "regencyCode": 6301,
          "name": "BATU AMPAR"
        },
        {
          "code": 6301080,
          "regencyCode": 6301,
          "name": "JORONG"
        },
        {
          "code": 6301090,
          "regencyCode": 6301,
          "name": "KINTAP"
        },
        {
          "code": 6302010,
          "regencyCode": 6302,
          "name": "PULAU SEMBILAN"
        },
        {
          "code": 6302020,
          "regencyCode": 6302,
          "name": "PULAU LAUT BARAT"
        },
        {
          "code": 6302021,
          "regencyCode": 6302,
          "name": "PULAU LAUT TANJUNG SELAYAR"
        },
        {
          "code": 6302030,
          "regencyCode": 6302,
          "name": "PULAU LAUT SELATAN"
        },
        {
          "code": 6302031,
          "regencyCode": 6302,
          "name": "PULAU LAUT KEPULAUAN"
        },
        {
          "code": 6302040,
          "regencyCode": 6302,
          "name": "PULAU LAUT TIMUR"
        },
        {
          "code": 6302050,
          "regencyCode": 6302,
          "name": "PULAU SEBUKU"
        },
        {
          "code": 6302060,
          "regencyCode": 6302,
          "name": "PULAU LAUT UTARA"
        },
        {
          "code": 6302061,
          "regencyCode": 6302,
          "name": "PULAU LAUT TENGAH"
        },
        {
          "code": 6302120,
          "regencyCode": 6302,
          "name": "KELUMPANG SELATAN"
        },
        {
          "code": 6302121,
          "regencyCode": 6302,
          "name": "KELUMPANG HILIR"
        },
        {
          "code": 6302130,
          "regencyCode": 6302,
          "name": "KELUMPANG HULU"
        },
        {
          "code": 6302140,
          "regencyCode": 6302,
          "name": "HAMPANG"
        },
        {
          "code": 6302150,
          "regencyCode": 6302,
          "name": "SUNGAI DURIAN"
        },
        {
          "code": 6302160,
          "regencyCode": 6302,
          "name": "KELUMPANG TENGAH"
        },
        {
          "code": 6302161,
          "regencyCode": 6302,
          "name": "KELUMPANG BARAT"
        },
        {
          "code": 6302170,
          "regencyCode": 6302,
          "name": "KELUMPANG UTARA"
        },
        {
          "code": 6302180,
          "regencyCode": 6302,
          "name": "PAMUKAN SELATAN"
        },
        {
          "code": 6302190,
          "regencyCode": 6302,
          "name": "SAMPANAHAN"
        },
        {
          "code": 6302200,
          "regencyCode": 6302,
          "name": "PAMUKAN UTARA"
        },
        {
          "code": 6302201,
          "regencyCode": 6302,
          "name": "PAMUKAN BARAT"
        },
        {
          "code": 6303010,
          "regencyCode": 6303,
          "name": "ALUH - ALUH"
        },
        {
          "code": 6303011,
          "regencyCode": 6303,
          "name": "BERUNTUNG BARU"
        },
        {
          "code": 6303020,
          "regencyCode": 6303,
          "name": "GAMBUT"
        },
        {
          "code": 6303030,
          "regencyCode": 6303,
          "name": "KERTAK HANYAR"
        },
        {
          "code": 6303031,
          "regencyCode": 6303,
          "name": "TATAH MAKMUR"
        },
        {
          "code": 6303040,
          "regencyCode": 6303,
          "name": "SUNGAI TABUK"
        },
        {
          "code": 6303050,
          "regencyCode": 6303,
          "name": "MARTAPURA"
        },
        {
          "code": 6303051,
          "regencyCode": 6303,
          "name": "MARTAPURA TIMUR"
        },
        {
          "code": 6303052,
          "regencyCode": 6303,
          "name": "MARTAPURA BARAT"
        },
        {
          "code": 6303060,
          "regencyCode": 6303,
          "name": "ASTAMBUL"
        },
        {
          "code": 6303070,
          "regencyCode": 6303,
          "name": "KARANG INTAN"
        },
        {
          "code": 6303080,
          "regencyCode": 6303,
          "name": "ARANIO"
        },
        {
          "code": 6303090,
          "regencyCode": 6303,
          "name": "SUNGAI PINANG"
        },
        {
          "code": 6303091,
          "regencyCode": 6303,
          "name": "PARAMASAN"
        },
        {
          "code": 6303100,
          "regencyCode": 6303,
          "name": "PENGARON"
        },
        {
          "code": 6303101,
          "regencyCode": 6303,
          "name": "SAMBUNG MAKMUR"
        },
        {
          "code": 6303110,
          "regencyCode": 6303,
          "name": "MATARAMAN"
        },
        {
          "code": 6303120,
          "regencyCode": 6303,
          "name": "SIMPANG EMPAT"
        },
        {
          "code": 6303121,
          "regencyCode": 6303,
          "name": "TELAGA BAUNTUNG"
        },
        {
          "code": 6304010,
          "regencyCode": 6304,
          "name": "TABUNGANEN"
        },
        {
          "code": 6304020,
          "regencyCode": 6304,
          "name": "TAMBAN"
        },
        {
          "code": 6304030,
          "regencyCode": 6304,
          "name": "MEKAR SARI"
        },
        {
          "code": 6304040,
          "regencyCode": 6304,
          "name": "ANJIR PASAR"
        },
        {
          "code": 6304050,
          "regencyCode": 6304,
          "name": "ANJIR MUARA"
        },
        {
          "code": 6304060,
          "regencyCode": 6304,
          "name": "ALALAK"
        },
        {
          "code": 6304070,
          "regencyCode": 6304,
          "name": "MANDASTANA"
        },
        {
          "code": 6304071,
          "regencyCode": 6304,
          "name": "JEJANGKIT"
        },
        {
          "code": 6304080,
          "regencyCode": 6304,
          "name": "BELAWANG"
        },
        {
          "code": 6304090,
          "regencyCode": 6304,
          "name": "WANARAYA"
        },
        {
          "code": 6304100,
          "regencyCode": 6304,
          "name": "BARAMBAI"
        },
        {
          "code": 6304110,
          "regencyCode": 6304,
          "name": "RANTAU BADAUH"
        },
        {
          "code": 6304120,
          "regencyCode": 6304,
          "name": "CERBON"
        },
        {
          "code": 6304130,
          "regencyCode": 6304,
          "name": "BAKUMPAI"
        },
        {
          "code": 6304140,
          "regencyCode": 6304,
          "name": "MARABAHAN"
        },
        {
          "code": 6304150,
          "regencyCode": 6304,
          "name": "TABUKAN"
        },
        {
          "code": 6304160,
          "regencyCode": 6304,
          "name": "KURIPAN"
        },
        {
          "code": 6305010,
          "regencyCode": 6305,
          "name": "BINUANG"
        },
        {
          "code": 6305011,
          "regencyCode": 6305,
          "name": "HATUNGUN"
        },
        {
          "code": 6305020,
          "regencyCode": 6305,
          "name": "TAPIN SELATAN"
        },
        {
          "code": 6305021,
          "regencyCode": 6305,
          "name": "SALAM BABARIS"
        },
        {
          "code": 6305030,
          "regencyCode": 6305,
          "name": "TAPIN TENGAH"
        },
        {
          "code": 6305040,
          "regencyCode": 6305,
          "name": "BUNGUR"
        },
        {
          "code": 6305050,
          "regencyCode": 6305,
          "name": "PIANI"
        },
        {
          "code": 6305060,
          "regencyCode": 6305,
          "name": "LOKPAIKAT"
        },
        {
          "code": 6305070,
          "regencyCode": 6305,
          "name": "TAPIN UTARA"
        },
        {
          "code": 6305080,
          "regencyCode": 6305,
          "name": "BAKARANGAN"
        },
        {
          "code": 6305090,
          "regencyCode": 6305,
          "name": "CANDI LARAS SELATAN"
        },
        {
          "code": 6305100,
          "regencyCode": 6305,
          "name": "CANDI LARAS UTARA"
        },
        {
          "code": 6306010,
          "regencyCode": 6306,
          "name": "PADANG BATUNG"
        },
        {
          "code": 6306020,
          "regencyCode": 6306,
          "name": "LOKSADO"
        },
        {
          "code": 6306030,
          "regencyCode": 6306,
          "name": "TELAGA LANGSAT"
        },
        {
          "code": 6306040,
          "regencyCode": 6306,
          "name": "ANGKINANG"
        },
        {
          "code": 6306050,
          "regencyCode": 6306,
          "name": "KANDANGAN"
        },
        {
          "code": 6306060,
          "regencyCode": 6306,
          "name": "SUNGAI RAYA"
        },
        {
          "code": 6306070,
          "regencyCode": 6306,
          "name": "SIMPUR"
        },
        {
          "code": 6306080,
          "regencyCode": 6306,
          "name": "KALUMPANG"
        },
        {
          "code": 6306090,
          "regencyCode": 6306,
          "name": "DAHA SELATAN"
        },
        {
          "code": 6306091,
          "regencyCode": 6306,
          "name": "DAHA BARAT"
        },
        {
          "code": 6306100,
          "regencyCode": 6306,
          "name": "DAHA UTARA"
        },
        {
          "code": 6307010,
          "regencyCode": 6307,
          "name": "HARUYAN"
        },
        {
          "code": 6307020,
          "regencyCode": 6307,
          "name": "BATU BENAWA"
        },
        {
          "code": 6307030,
          "regencyCode": 6307,
          "name": "HANTAKAN"
        },
        {
          "code": 6307040,
          "regencyCode": 6307,
          "name": "BATANG ALAI SELATAN"
        },
        {
          "code": 6307041,
          "regencyCode": 6307,
          "name": "BATANG ALAI TIMUR"
        },
        {
          "code": 6307050,
          "regencyCode": 6307,
          "name": "BARABAI"
        },
        {
          "code": 6307060,
          "regencyCode": 6307,
          "name": "LABUAN AMAS SELATAN"
        },
        {
          "code": 6307070,
          "regencyCode": 6307,
          "name": "LABUAN AMAS UTARA"
        },
        {
          "code": 6307080,
          "regencyCode": 6307,
          "name": "PANDAWAN"
        },
        {
          "code": 6307090,
          "regencyCode": 6307,
          "name": "BATANG ALAI UTARA"
        },
        {
          "code": 6307091,
          "regencyCode": 6307,
          "name": "LIMPASU"
        },
        {
          "code": 6308010,
          "regencyCode": 6308,
          "name": "DANAU PANGGANG"
        },
        {
          "code": 6308011,
          "regencyCode": 6308,
          "name": "PAMINGGIR"
        },
        {
          "code": 6308020,
          "regencyCode": 6308,
          "name": "BABIRIK"
        },
        {
          "code": 6308030,
          "regencyCode": 6308,
          "name": "SUNGAI PANDAN"
        },
        {
          "code": 6308031,
          "regencyCode": 6308,
          "name": "SUNGAI TABUKAN"
        },
        {
          "code": 6308040,
          "regencyCode": 6308,
          "name": "AMUNTAI SELATAN"
        },
        {
          "code": 6308050,
          "regencyCode": 6308,
          "name": "AMUNTAI TENGAH"
        },
        {
          "code": 6308060,
          "regencyCode": 6308,
          "name": "BANJANG"
        },
        {
          "code": 6308070,
          "regencyCode": 6308,
          "name": "AMUNTAI UTARA"
        },
        {
          "code": 6308071,
          "regencyCode": 6308,
          "name": "HAUR GADING"
        },
        {
          "code": 6309010,
          "regencyCode": 6309,
          "name": "BANUA LAWAS"
        },
        {
          "code": 6309020,
          "regencyCode": 6309,
          "name": "PUGAAN"
        },
        {
          "code": 6309030,
          "regencyCode": 6309,
          "name": "KELUA"
        },
        {
          "code": 6309040,
          "regencyCode": 6309,
          "name": "MUARA HARUS"
        },
        {
          "code": 6309050,
          "regencyCode": 6309,
          "name": "TANTA"
        },
        {
          "code": 6309060,
          "regencyCode": 6309,
          "name": "TANJUNG"
        },
        {
          "code": 6309070,
          "regencyCode": 6309,
          "name": "MURUNG PUDAK"
        },
        {
          "code": 6309080,
          "regencyCode": 6309,
          "name": "HARUAI"
        },
        {
          "code": 6309081,
          "regencyCode": 6309,
          "name": "BINTANG ARA"
        },
        {
          "code": 6309090,
          "regencyCode": 6309,
          "name": "UPAU"
        },
        {
          "code": 6309100,
          "regencyCode": 6309,
          "name": "MUARA UYA"
        },
        {
          "code": 6309110,
          "regencyCode": 6309,
          "name": "JARO"
        },
        {
          "code": 6310010,
          "regencyCode": 6310,
          "name": "KUSAN HILIR"
        },
        {
          "code": 6310020,
          "regencyCode": 6310,
          "name": "SUNGAI LOBAN"
        },
        {
          "code": 6310030,
          "regencyCode": 6310,
          "name": "SATUI"
        },
        {
          "code": 6310031,
          "regencyCode": 6310,
          "name": "ANGSANA"
        },
        {
          "code": 6310040,
          "regencyCode": 6310,
          "name": "KUSAN HULU"
        },
        {
          "code": 6310041,
          "regencyCode": 6310,
          "name": "KURANJI"
        },
        {
          "code": 6310050,
          "regencyCode": 6310,
          "name": "BATU LICIN"
        },
        {
          "code": 6310051,
          "regencyCode": 6310,
          "name": "KARANG BINTANG"
        },
        {
          "code": 6310052,
          "regencyCode": 6310,
          "name": "SIMPANG EMPAT"
        },
        {
          "code": 6310053,
          "regencyCode": 6310,
          "name": "MANTEWE"
        },
        {
          "code": 6311010,
          "regencyCode": 6311,
          "name": "LAMPIHONG"
        },
        {
          "code": 6311020,
          "regencyCode": 6311,
          "name": "BATU MANDI"
        },
        {
          "code": 6311030,
          "regencyCode": 6311,
          "name": "AWAYAN"
        },
        {
          "code": 6311031,
          "regencyCode": 6311,
          "name": "TEBING TINGGI"
        },
        {
          "code": 6311040,
          "regencyCode": 6311,
          "name": "PARINGIN"
        },
        {
          "code": 6311041,
          "regencyCode": 6311,
          "name": "PARINGIN SELATAN"
        },
        {
          "code": 6311050,
          "regencyCode": 6311,
          "name": "JUAI"
        },
        {
          "code": 6311060,
          "regencyCode": 6311,
          "name": "HALONG"
        },
        {
          "code": 6371010,
          "regencyCode": 6371,
          "name": "BANJARMASIN SELATAN"
        },
        {
          "code": 6371020,
          "regencyCode": 6371,
          "name": "BANJARMASIN TIMUR"
        },
        {
          "code": 6371030,
          "regencyCode": 6371,
          "name": "BANJARMASIN BARAT"
        },
        {
          "code": 6371031,
          "regencyCode": 6371,
          "name": "BANJARMASIN TENGAH"
        },
        {
          "code": 6371040,
          "regencyCode": 6371,
          "name": "BANJARMASIN UTARA"
        },
        {
          "code": 6372010,
          "regencyCode": 6372,
          "name": "LANDASAN ULIN"
        },
        {
          "code": 6372011,
          "regencyCode": 6372,
          "name": "LIANG ANGGANG"
        },
        {
          "code": 6372020,
          "regencyCode": 6372,
          "name": "CEMPAKA"
        },
        {
          "code": 6372031,
          "regencyCode": 6372,
          "name": "BANJAR BARU UTARA"
        },
        {
          "code": 6372032,
          "regencyCode": 6372,
          "name": "BANJAR BARU SELATAN"
        },
        {
          "code": 6401010,
          "regencyCode": 6401,
          "name": "BATU SOPANG"
        },
        {
          "code": 6401011,
          "regencyCode": 6401,
          "name": "MUARA SAMU"
        },
        {
          "code": 6401021,
          "regencyCode": 6401,
          "name": "BATU ENGAU"
        },
        {
          "code": 6401022,
          "regencyCode": 6401,
          "name": "TANJUNG HARAPAN"
        },
        {
          "code": 6401030,
          "regencyCode": 6401,
          "name": "PASIR BELENGKONG"
        },
        {
          "code": 6401040,
          "regencyCode": 6401,
          "name": "TANAH GROGOT"
        },
        {
          "code": 6401050,
          "regencyCode": 6401,
          "name": "KUARO"
        },
        {
          "code": 6401060,
          "regencyCode": 6401,
          "name": "LONG IKIS"
        },
        {
          "code": 6401070,
          "regencyCode": 6401,
          "name": "MUARA KOMAM"
        },
        {
          "code": 6401080,
          "regencyCode": 6401,
          "name": "LONG KALI"
        },
        {
          "code": 6402010,
          "regencyCode": 6402,
          "name": "BONGAN"
        },
        {
          "code": 6402020,
          "regencyCode": 6402,
          "name": "JEMPANG"
        },
        {
          "code": 6402030,
          "regencyCode": 6402,
          "name": "PENYINGGAHAN"
        },
        {
          "code": 6402040,
          "regencyCode": 6402,
          "name": "MUARA PAHU"
        },
        {
          "code": 6402041,
          "regencyCode": 6402,
          "name": "SILUQ NGURAI"
        },
        {
          "code": 6402050,
          "regencyCode": 6402,
          "name": "MUARA LAWA"
        },
        {
          "code": 6402051,
          "regencyCode": 6402,
          "name": "BENTIAN BESAR"
        },
        {
          "code": 6402060,
          "regencyCode": 6402,
          "name": "DAMAI"
        },
        {
          "code": 6402061,
          "regencyCode": 6402,
          "name": "NYUATAN"
        },
        {
          "code": 6402070,
          "regencyCode": 6402,
          "name": "BARONG TONGKOK"
        },
        {
          "code": 6402071,
          "regencyCode": 6402,
          "name": "LINGGANG BIGUNG"
        },
        {
          "code": 6402080,
          "regencyCode": 6402,
          "name": "MELAK"
        },
        {
          "code": 6402081,
          "regencyCode": 6402,
          "name": "SEKOLAQ DARAT"
        },
        {
          "code": 6402082,
          "regencyCode": 6402,
          "name": "MANOR BULATN"
        },
        {
          "code": 6402090,
          "regencyCode": 6402,
          "name": "LONG IRAM"
        },
        {
          "code": 6402091,
          "regencyCode": 6402,
          "name": "TERING"
        },
        {
          "code": 6403010,
          "regencyCode": 6403,
          "name": "SEMBOJA"
        },
        {
          "code": 6403020,
          "regencyCode": 6403,
          "name": "MUARA JAWA"
        },
        {
          "code": 6403030,
          "regencyCode": 6403,
          "name": "SANGA-SANGA"
        },
        {
          "code": 6403040,
          "regencyCode": 6403,
          "name": "LOA JANAN"
        },
        {
          "code": 6403050,
          "regencyCode": 6403,
          "name": "LOA KULU"
        },
        {
          "code": 6403060,
          "regencyCode": 6403,
          "name": "MUARA MUNTAI"
        },
        {
          "code": 6403070,
          "regencyCode": 6403,
          "name": "MUARA WIS"
        },
        {
          "code": 6403080,
          "regencyCode": 6403,
          "name": "KOTABANGUN"
        },
        {
          "code": 6403090,
          "regencyCode": 6403,
          "name": "TENGGARONG"
        },
        {
          "code": 6403100,
          "regencyCode": 6403,
          "name": "SEBULU"
        },
        {
          "code": 6403110,
          "regencyCode": 6403,
          "name": "TENGGARONG SEBERANG"
        },
        {
          "code": 6403120,
          "regencyCode": 6403,
          "name": "ANGGANA"
        },
        {
          "code": 6403130,
          "regencyCode": 6403,
          "name": "MUARA BADAK"
        },
        {
          "code": 6403140,
          "regencyCode": 6403,
          "name": "MARANG KAYU"
        },
        {
          "code": 6403150,
          "regencyCode": 6403,
          "name": "MUARA KAMAN"
        },
        {
          "code": 6403160,
          "regencyCode": 6403,
          "name": "KENOHAN"
        },
        {
          "code": 6403170,
          "regencyCode": 6403,
          "name": "KEMBANG JANGGUT"
        },
        {
          "code": 6403180,
          "regencyCode": 6403,
          "name": "TABANG"
        },
        {
          "code": 6404010,
          "regencyCode": 6404,
          "name": "MUARA ANCALONG"
        },
        {
          "code": 6404011,
          "regencyCode": 6404,
          "name": "BUSANG"
        },
        {
          "code": 6404012,
          "regencyCode": 6404,
          "name": "LONG MESANGAT"
        },
        {
          "code": 6404020,
          "regencyCode": 6404,
          "name": "MUARA WAHAU"
        },
        {
          "code": 6404021,
          "regencyCode": 6404,
          "name": "TELEN"
        },
        {
          "code": 6404022,
          "regencyCode": 6404,
          "name": "KONGBENG"
        },
        {
          "code": 6404030,
          "regencyCode": 6404,
          "name": "MUARA BENGKAL"
        },
        {
          "code": 6404031,
          "regencyCode": 6404,
          "name": "BATU AMPAR"
        },
        {
          "code": 6404040,
          "regencyCode": 6404,
          "name": "SANGATTA UTARA"
        },
        {
          "code": 6404041,
          "regencyCode": 6404,
          "name": "BENGALON"
        },
        {
          "code": 6404042,
          "regencyCode": 6404,
          "name": "TELUK PANDAN"
        },
        {
          "code": 6404043,
          "regencyCode": 6404,
          "name": "SANGATTA SELATAN"
        },
        {
          "code": 6404044,
          "regencyCode": 6404,
          "name": "RANTAU PULUNG"
        },
        {
          "code": 6404050,
          "regencyCode": 6404,
          "name": "SANGKULIRANG"
        },
        {
          "code": 6404051,
          "regencyCode": 6404,
          "name": "KALIORANG"
        },
        {
          "code": 6404052,
          "regencyCode": 6404,
          "name": "SANDARAN"
        },
        {
          "code": 6404053,
          "regencyCode": 6404,
          "name": "KAUBUN"
        },
        {
          "code": 6404054,
          "regencyCode": 6404,
          "name": "KARANGAN"
        },
        {
          "code": 6405010,
          "regencyCode": 6405,
          "name": "KELAY"
        },
        {
          "code": 6405020,
          "regencyCode": 6405,
          "name": "TALISAYAN"
        },
        {
          "code": 6405021,
          "regencyCode": 6405,
          "name": "TABALAR"
        },
        {
          "code": 6405030,
          "regencyCode": 6405,
          "name": "BIDUK BIDUK"
        },
        {
          "code": 6405040,
          "regencyCode": 6405,
          "name": "PULAU DERAWAN"
        },
        {
          "code": 6405041,
          "regencyCode": 6405,
          "name": "MARATUA"
        },
        {
          "code": 6405050,
          "regencyCode": 6405,
          "name": "SAMBALIUNG"
        },
        {
          "code": 6405060,
          "regencyCode": 6405,
          "name": "TANJUNG REDEB"
        },
        {
          "code": 6405070,
          "regencyCode": 6405,
          "name": "GUNUNG TABUR"
        },
        {
          "code": 6405080,
          "regencyCode": 6405,
          "name": "SEGAH"
        },
        {
          "code": 6405090,
          "regencyCode": 6405,
          "name": "TELUK BAYUR"
        },
        {
          "code": 6405100,
          "regencyCode": 6405,
          "name": "BATU PUTIH"
        },
        {
          "code": 6405110,
          "regencyCode": 6405,
          "name": "BIATAN"
        },
        {
          "code": 6409010,
          "regencyCode": 6409,
          "name": "BABULU"
        },
        {
          "code": 6409020,
          "regencyCode": 6409,
          "name": "WARU"
        },
        {
          "code": 6409030,
          "regencyCode": 6409,
          "name": "PENAJAM"
        },
        {
          "code": 6409040,
          "regencyCode": 6409,
          "name": "SEPAKU"
        },
        {
          "code": 6411010,
          "regencyCode": 6411,
          "name": "LAHAM"
        },
        {
          "code": 6411020,
          "regencyCode": 6411,
          "name": "LONG HUBUNG"
        },
        {
          "code": 6411030,
          "regencyCode": 6411,
          "name": "LONG BAGUN"
        },
        {
          "code": 6411040,
          "regencyCode": 6411,
          "name": "LONG PAHANGAI"
        },
        {
          "code": 6411050,
          "regencyCode": 6411,
          "name": "LONG APARI"
        },
        {
          "code": 6471010,
          "regencyCode": 6471,
          "name": "BALIKPAPAN SELATAN"
        },
        {
          "code": 6471011,
          "regencyCode": 6471,
          "name": "BALIKPAPAN KOTA"
        },
        {
          "code": 6471020,
          "regencyCode": 6471,
          "name": "BALIKPAPAN TIMUR"
        },
        {
          "code": 6471030,
          "regencyCode": 6471,
          "name": "BALIKPAPAN UTARA"
        },
        {
          "code": 6471040,
          "regencyCode": 6471,
          "name": "BALIKPAPAN TENGAH"
        },
        {
          "code": 6471050,
          "regencyCode": 6471,
          "name": "BALIKPAPAN BARAT"
        },
        {
          "code": 6472010,
          "regencyCode": 6472,
          "name": "PALARAN"
        },
        {
          "code": 6472020,
          "regencyCode": 6472,
          "name": "SAMARINDA ILIR"
        },
        {
          "code": 6472021,
          "regencyCode": 6472,
          "name": "SAMARINDA KOTA"
        },
        {
          "code": 6472022,
          "regencyCode": 6472,
          "name": "SAMBUTAN"
        },
        {
          "code": 6472030,
          "regencyCode": 6472,
          "name": "SAMARINDA SEBERANG"
        },
        {
          "code": 6472031,
          "regencyCode": 6472,
          "name": "LOA JANAN ILIR"
        },
        {
          "code": 6472040,
          "regencyCode": 6472,
          "name": "SUNGAI KUNJANG"
        },
        {
          "code": 6472050,
          "regencyCode": 6472,
          "name": "SAMARINDA ULU"
        },
        {
          "code": 6472060,
          "regencyCode": 6472,
          "name": "SAMARINDA UTARA"
        },
        {
          "code": 6472061,
          "regencyCode": 6472,
          "name": "SUNGAI PINANG"
        },
        {
          "code": 6474010,
          "regencyCode": 6474,
          "name": "BONTANG SELATAN"
        },
        {
          "code": 6474020,
          "regencyCode": 6474,
          "name": "BONTANG UTARA"
        },
        {
          "code": 6474030,
          "regencyCode": 6474,
          "name": "BONTANG BARAT"
        },
        {
          "code": 6501010,
          "regencyCode": 6501,
          "name": "SUNGAI BOH"
        },
        {
          "code": 6501020,
          "regencyCode": 6501,
          "name": "KAYAN SELATAN"
        },
        {
          "code": 6501030,
          "regencyCode": 6501,
          "name": "KAYAN HULU"
        },
        {
          "code": 6501040,
          "regencyCode": 6501,
          "name": "KAYAN HILIR"
        },
        {
          "code": 6501050,
          "regencyCode": 6501,
          "name": "PUJUNGAN"
        },
        {
          "code": 6501060,
          "regencyCode": 6501,
          "name": "BAHAU HULU"
        },
        {
          "code": 6501070,
          "regencyCode": 6501,
          "name": "SUNGAI TUBU"
        },
        {
          "code": 6501080,
          "regencyCode": 6501,
          "name": "MALINAU SELATAN HULU"
        },
        {
          "code": 6501090,
          "regencyCode": 6501,
          "name": "MALINAU SELATAN"
        },
        {
          "code": 6501100,
          "regencyCode": 6501,
          "name": "MALINAU SELATAN HILIR"
        },
        {
          "code": 6501110,
          "regencyCode": 6501,
          "name": "MENTARANG"
        },
        {
          "code": 6501120,
          "regencyCode": 6501,
          "name": "MENTARANG HULU"
        },
        {
          "code": 6501130,
          "regencyCode": 6501,
          "name": "MALINAU UTARA"
        },
        {
          "code": 6501140,
          "regencyCode": 6501,
          "name": "MALINAU BARAT"
        },
        {
          "code": 6501150,
          "regencyCode": 6501,
          "name": "MALINAU KOTA"
        },
        {
          "code": 6502010,
          "regencyCode": 6502,
          "name": "PESO"
        },
        {
          "code": 6502020,
          "regencyCode": 6502,
          "name": "PESO HILIR"
        },
        {
          "code": 6502030,
          "regencyCode": 6502,
          "name": "TANJUNG PALAS BARAT"
        },
        {
          "code": 6502040,
          "regencyCode": 6502,
          "name": "TANJUNG PALAS"
        },
        {
          "code": 6502050,
          "regencyCode": 6502,
          "name": "TANJUNG SELOR"
        },
        {
          "code": 6502060,
          "regencyCode": 6502,
          "name": "TANJUNG PALAS TIMUR"
        },
        {
          "code": 6502070,
          "regencyCode": 6502,
          "name": "TANJUNG PALAS TENGAH"
        },
        {
          "code": 6502080,
          "regencyCode": 6502,
          "name": "TANJUNG PALAS UTARA"
        },
        {
          "code": 6502090,
          "regencyCode": 6502,
          "name": "SEKATAK"
        },
        {
          "code": 6502100,
          "regencyCode": 6502,
          "name": "BUNYU"
        },
        {
          "code": 6503010,
          "regencyCode": 6503,
          "name": "MURUK RIAN"
        },
        {
          "code": 6503020,
          "regencyCode": 6503,
          "name": "SESAYAP"
        },
        {
          "code": 6503030,
          "regencyCode": 6503,
          "name": "BETAYAU"
        },
        {
          "code": 6503040,
          "regencyCode": 6503,
          "name": "SESAYAP HILIR"
        },
        {
          "code": 6503050,
          "regencyCode": 6503,
          "name": "TANA LIA"
        },
        {
          "code": 6504010,
          "regencyCode": 6504,
          "name": "KRAYAN SELATAN"
        },
        {
          "code": 6504020,
          "regencyCode": 6504,
          "name": "KRAYAN"
        },
        {
          "code": 6504030,
          "regencyCode": 6504,
          "name": "LUMBIS OGONG"
        },
        {
          "code": 6504040,
          "regencyCode": 6504,
          "name": "LUMBIS"
        },
        {
          "code": 6504050,
          "regencyCode": 6504,
          "name": "SEMBAKUNG ATULAI"
        },
        {
          "code": 6504060,
          "regencyCode": 6504,
          "name": "SEMBAKUNG"
        },
        {
          "code": 6504070,
          "regencyCode": 6504,
          "name": "SEBUKU"
        },
        {
          "code": 6504080,
          "regencyCode": 6504,
          "name": "TULIN ONSOI"
        },
        {
          "code": 6504090,
          "regencyCode": 6504,
          "name": "SEI MENGGARIS"
        },
        {
          "code": 6504100,
          "regencyCode": 6504,
          "name": "NUNUKAN"
        },
        {
          "code": 6504110,
          "regencyCode": 6504,
          "name": "NUNUKAN SELATAN"
        },
        {
          "code": 6504120,
          "regencyCode": 6504,
          "name": "SEBATIK BARAT"
        },
        {
          "code": 6504130,
          "regencyCode": 6504,
          "name": "SEBATIK"
        },
        {
          "code": 6504140,
          "regencyCode": 6504,
          "name": "SEBATIK TIMUR"
        },
        {
          "code": 6504150,
          "regencyCode": 6504,
          "name": "SEBATIK TENGAH"
        },
        {
          "code": 6504160,
          "regencyCode": 6504,
          "name": "SEBATIK UTARA"
        },
        {
          "code": 6571010,
          "regencyCode": 6571,
          "name": "TARAKAN TIMUR"
        },
        {
          "code": 6571020,
          "regencyCode": 6571,
          "name": "TARAKAN TENGAH"
        },
        {
          "code": 6571030,
          "regencyCode": 6571,
          "name": "TARAKAN BARAT"
        },
        {
          "code": 6571040,
          "regencyCode": 6571,
          "name": "TARAKAN UTARA"
        },
        {
          "code": 7101021,
          "regencyCode": 7101,
          "name": "DUMOGA BARAT"
        },
        {
          "code": 7101022,
          "regencyCode": 7101,
          "name": "DUMOGA UTARA"
        },
        {
          "code": 7101023,
          "regencyCode": 7101,
          "name": "DUMOGA TIMUR"
        },
        {
          "code": 7101024,
          "regencyCode": 7101,
          "name": "DUMOGA TENGAH"
        },
        {
          "code": 7101025,
          "regencyCode": 7101,
          "name": "DUMOGA TENGGARA"
        },
        {
          "code": 7101026,
          "regencyCode": 7101,
          "name": "DUMOGA"
        },
        {
          "code": 7101060,
          "regencyCode": 7101,
          "name": "LOLAYAN"
        },
        {
          "code": 7101081,
          "regencyCode": 7101,
          "name": "PASSI BARAT"
        },
        {
          "code": 7101082,
          "regencyCode": 7101,
          "name": "PASSI TIMUR"
        },
        {
          "code": 7101083,
          "regencyCode": 7101,
          "name": "BILALANG"
        },
        {
          "code": 7101090,
          "regencyCode": 7101,
          "name": "POIGAR"
        },
        {
          "code": 7101100,
          "regencyCode": 7101,
          "name": "BOLAANG"
        },
        {
          "code": 7101101,
          "regencyCode": 7101,
          "name": "BOLAANG TIMUR"
        },
        {
          "code": 7101110,
          "regencyCode": 7101,
          "name": "LOLAK"
        },
        {
          "code": 7101120,
          "regencyCode": 7101,
          "name": "SANGTOMBOLANG"
        },
        {
          "code": 7102091,
          "regencyCode": 7102,
          "name": "LANGOWAN TIMUR"
        },
        {
          "code": 7102092,
          "regencyCode": 7102,
          "name": "LANGOWAN BARAT"
        },
        {
          "code": 7102093,
          "regencyCode": 7102,
          "name": "LANGOWAN SELATAN"
        },
        {
          "code": 7102094,
          "regencyCode": 7102,
          "name": "LANGOWAN UTARA"
        },
        {
          "code": 7102110,
          "regencyCode": 7102,
          "name": "TOMPASO"
        },
        {
          "code": 7102111,
          "regencyCode": 7102,
          "name": "TOMPASO BARAT"
        },
        {
          "code": 7102120,
          "regencyCode": 7102,
          "name": "KAWANGKOAN"
        },
        {
          "code": 7102121,
          "regencyCode": 7102,
          "name": "KAWANGKOAN BARAT"
        },
        {
          "code": 7102122,
          "regencyCode": 7102,
          "name": "KAWANGKOAN UTARA"
        },
        {
          "code": 7102130,
          "regencyCode": 7102,
          "name": "SONDER"
        },
        {
          "code": 7102160,
          "regencyCode": 7102,
          "name": "TOMBARIRI"
        },
        {
          "code": 7102161,
          "regencyCode": 7102,
          "name": "TOMBARIRI TIMUR"
        },
        {
          "code": 7102170,
          "regencyCode": 7102,
          "name": "PINELENG"
        },
        {
          "code": 7102171,
          "regencyCode": 7102,
          "name": "TOMBULU"
        },
        {
          "code": 7102172,
          "regencyCode": 7102,
          "name": "MANDOLANG"
        },
        {
          "code": 7102190,
          "regencyCode": 7102,
          "name": "TONDANO BARAT"
        },
        {
          "code": 7102191,
          "regencyCode": 7102,
          "name": "TONDANO SELATAN"
        },
        {
          "code": 7102200,
          "regencyCode": 7102,
          "name": "REMBOKEN"
        },
        {
          "code": 7102210,
          "regencyCode": 7102,
          "name": "KAKAS"
        },
        {
          "code": 7102211,
          "regencyCode": 7102,
          "name": "KAKAS BARAT"
        },
        {
          "code": 7102220,
          "regencyCode": 7102,
          "name": "LEMBEAN TIMUR"
        },
        {
          "code": 7102230,
          "regencyCode": 7102,
          "name": "ERIS"
        },
        {
          "code": 7102240,
          "regencyCode": 7102,
          "name": "KOMBI"
        },
        {
          "code": 7102250,
          "regencyCode": 7102,
          "name": "TONDANO TIMUR"
        },
        {
          "code": 7102251,
          "regencyCode": 7102,
          "name": "TONDANO UTARA"
        },
        {
          "code": 7103040,
          "regencyCode": 7103,
          "name": "MANGANITU SELATAN"
        },
        {
          "code": 7103041,
          "regencyCode": 7103,
          "name": "TATOARENG"
        },
        {
          "code": 7103050,
          "regencyCode": 7103,
          "name": "TAMAKO"
        },
        {
          "code": 7103060,
          "regencyCode": 7103,
          "name": "TABUKAN SELATAN"
        },
        {
          "code": 7103061,
          "regencyCode": 7103,
          "name": "TABUKAN SELATAN TENGAH"
        },
        {
          "code": 7103062,
          "regencyCode": 7103,
          "name": "TABUKAN SELATAN TENGGARA"
        },
        {
          "code": 7103070,
          "regencyCode": 7103,
          "name": "TABUKAN TENGAH"
        },
        {
          "code": 7103080,
          "regencyCode": 7103,
          "name": "MANGANITU"
        },
        {
          "code": 7103090,
          "regencyCode": 7103,
          "name": "TAHUNA"
        },
        {
          "code": 7103091,
          "regencyCode": 7103,
          "name": "TAHUNA TIMUR"
        },
        {
          "code": 7103092,
          "regencyCode": 7103,
          "name": "TAHUNA BARAT"
        },
        {
          "code": 7103100,
          "regencyCode": 7103,
          "name": "TABUKAN UTARA"
        },
        {
          "code": 7103101,
          "regencyCode": 7103,
          "name": "NUSA TABUKAN"
        },
        {
          "code": 7103102,
          "regencyCode": 7103,
          "name": "KEPULAUAN MARORE"
        },
        {
          "code": 7103110,
          "regencyCode": 7103,
          "name": "KENDAHE"
        },
        {
          "code": 7104010,
          "regencyCode": 7104,
          "name": "KABARUAN"
        },
        {
          "code": 7104011,
          "regencyCode": 7104,
          "name": "DAMAU"
        },
        {
          "code": 7104020,
          "regencyCode": 7104,
          "name": "LIRUNG"
        },
        {
          "code": 7104021,
          "regencyCode": 7104,
          "name": "SALIBABU"
        },
        {
          "code": 7104022,
          "regencyCode": 7104,
          "name": "KALONGAN"
        },
        {
          "code": 7104023,
          "regencyCode": 7104,
          "name": "MORONGE"
        },
        {
          "code": 7104030,
          "regencyCode": 7104,
          "name": "MELONGUANE"
        },
        {
          "code": 7104031,
          "regencyCode": 7104,
          "name": "MELONGUANE TIMUR"
        },
        {
          "code": 7104040,
          "regencyCode": 7104,
          "name": "BEO"
        },
        {
          "code": 7104041,
          "regencyCode": 7104,
          "name": "BEO UTARA"
        },
        {
          "code": 7104042,
          "regencyCode": 7104,
          "name": "BEO SELATAN"
        },
        {
          "code": 7104050,
          "regencyCode": 7104,
          "name": "RAINIS"
        },
        {
          "code": 7104051,
          "regencyCode": 7104,
          "name": "TAMPA NA'MMA"
        },
        {
          "code": 7104052,
          "regencyCode": 7104,
          "name": "PULUTAN"
        },
        {
          "code": 7104060,
          "regencyCode": 7104,
          "name": "ESSANG"
        },
        {
          "code": 7104061,
          "regencyCode": 7104,
          "name": "ESSANG SELATAN"
        },
        {
          "code": 7104070,
          "regencyCode": 7104,
          "name": "GEMEH"
        },
        {
          "code": 7104080,
          "regencyCode": 7104,
          "name": "NANUSA"
        },
        {
          "code": 7104081,
          "regencyCode": 7104,
          "name": "MIANGAS"
        },
        {
          "code": 7105010,
          "regencyCode": 7105,
          "name": "MODOINDING"
        },
        {
          "code": 7105020,
          "regencyCode": 7105,
          "name": "TOMPASO BARU"
        },
        {
          "code": 7105021,
          "regencyCode": 7105,
          "name": "MAESAAN"
        },
        {
          "code": 7105070,
          "regencyCode": 7105,
          "name": "RANOYAPO"
        },
        {
          "code": 7105080,
          "regencyCode": 7105,
          "name": "MOTOLING"
        },
        {
          "code": 7105081,
          "regencyCode": 7105,
          "name": "KUMELEMBUAI"
        },
        {
          "code": 7105082,
          "regencyCode": 7105,
          "name": "MOTOLING BARAT"
        },
        {
          "code": 7105083,
          "regencyCode": 7105,
          "name": "MOTOLING TIMUR"
        },
        {
          "code": 7105090,
          "regencyCode": 7105,
          "name": "SINONSAYANG"
        },
        {
          "code": 7105100,
          "regencyCode": 7105,
          "name": "TENGA"
        },
        {
          "code": 7105111,
          "regencyCode": 7105,
          "name": "AMURANG"
        },
        {
          "code": 7105112,
          "regencyCode": 7105,
          "name": "AMURANG BARAT"
        },
        {
          "code": 7105113,
          "regencyCode": 7105,
          "name": "AMURANG TIMUR"
        },
        {
          "code": 7105120,
          "regencyCode": 7105,
          "name": "TARERAN"
        },
        {
          "code": 7105121,
          "regencyCode": 7105,
          "name": "SULTA"
        },
        {
          "code": 7105130,
          "regencyCode": 7105,
          "name": "TUMPAAN"
        },
        {
          "code": 7105131,
          "regencyCode": 7105,
          "name": "TATAPAAN"
        },
        {
          "code": 7106010,
          "regencyCode": 7106,
          "name": "KEMA"
        },
        {
          "code": 7106020,
          "regencyCode": 7106,
          "name": "KAUDITAN"
        },
        {
          "code": 7106030,
          "regencyCode": 7106,
          "name": "AIRMADIDI"
        },
        {
          "code": 7106040,
          "regencyCode": 7106,
          "name": "KALAWAT"
        },
        {
          "code": 7106050,
          "regencyCode": 7106,
          "name": "DIMEMBE"
        },
        {
          "code": 7106051,
          "regencyCode": 7106,
          "name": "TALAWAAN"
        },
        {
          "code": 7106060,
          "regencyCode": 7106,
          "name": "WORI"
        },
        {
          "code": 7106070,
          "regencyCode": 7106,
          "name": "LIKUPANG BARAT"
        },
        {
          "code": 7106080,
          "regencyCode": 7106,
          "name": "LIKUPANG TIMUR"
        },
        {
          "code": 7106081,
          "regencyCode": 7106,
          "name": "LIKUPANG SELATAN"
        },
        {
          "code": 7107010,
          "regencyCode": 7107,
          "name": "SANGKUB"
        },
        {
          "code": 7107020,
          "regencyCode": 7107,
          "name": "BINTAUNA"
        },
        {
          "code": 7107030,
          "regencyCode": 7107,
          "name": "BOLANG ITANG TIMUR"
        },
        {
          "code": 7107040,
          "regencyCode": 7107,
          "name": "BOLANG ITANG BARAT"
        },
        {
          "code": 7107050,
          "regencyCode": 7107,
          "name": "KAIDIPANG"
        },
        {
          "code": 7107060,
          "regencyCode": 7107,
          "name": "PINOGALUMAN"
        },
        {
          "code": 7108010,
          "regencyCode": 7108,
          "name": "BIARO"
        },
        {
          "code": 7108020,
          "regencyCode": 7108,
          "name": "TAGULANDANG SELATAN"
        },
        {
          "code": 7108030,
          "regencyCode": 7108,
          "name": "TAGULANDANG"
        },
        {
          "code": 7108040,
          "regencyCode": 7108,
          "name": "TAGULANDANG UTARA"
        },
        {
          "code": 7108050,
          "regencyCode": 7108,
          "name": "SIAU BARAT SELATAN"
        },
        {
          "code": 7108060,
          "regencyCode": 7108,
          "name": "SIAU TIMUR SELATAN"
        },
        {
          "code": 7108070,
          "regencyCode": 7108,
          "name": "SIAU BARAT"
        },
        {
          "code": 7108080,
          "regencyCode": 7108,
          "name": "SIAU TENGAH"
        },
        {
          "code": 7108090,
          "regencyCode": 7108,
          "name": "SIAU TIMUR"
        },
        {
          "code": 7108100,
          "regencyCode": 7108,
          "name": "SIAU BARAT UTARA"
        },
        {
          "code": 7109010,
          "regencyCode": 7109,
          "name": "RATATOTOK"
        },
        {
          "code": 7109020,
          "regencyCode": 7109,
          "name": "PUSOMAEN"
        },
        {
          "code": 7109030,
          "regencyCode": 7109,
          "name": "BELANG"
        },
        {
          "code": 7109040,
          "regencyCode": 7109,
          "name": "RATAHAN"
        },
        {
          "code": 7109041,
          "regencyCode": 7109,
          "name": "PASAN"
        },
        {
          "code": 7109042,
          "regencyCode": 7109,
          "name": "RATAHAN TIMUR"
        },
        {
          "code": 7109050,
          "regencyCode": 7109,
          "name": "TOMBATU"
        },
        {
          "code": 7109051,
          "regencyCode": 7109,
          "name": "TOMBATU TIMUR"
        },
        {
          "code": 7109052,
          "regencyCode": 7109,
          "name": "TOMBATU UTARA"
        },
        {
          "code": 7109060,
          "regencyCode": 7109,
          "name": "TOULUAAN"
        },
        {
          "code": 7109061,
          "regencyCode": 7109,
          "name": "TOULUAAN SELATAN"
        },
        {
          "code": 7109062,
          "regencyCode": 7109,
          "name": "SILIAN RAYA"
        },
        {
          "code": 7110010,
          "regencyCode": 7110,
          "name": "POSIGADAN"
        },
        {
          "code": 7110020,
          "regencyCode": 7110,
          "name": "BOLANG UKI"
        },
        {
          "code": 7110021,
          "regencyCode": 7110,
          "name": "HELUMO"
        },
        {
          "code": 7110030,
          "regencyCode": 7110,
          "name": "PINOLOSIAN"
        },
        {
          "code": 7110040,
          "regencyCode": 7110,
          "name": "PINOLOSIAN TENGAH"
        },
        {
          "code": 7110050,
          "regencyCode": 7110,
          "name": "PINOLOSIAN TIMUR"
        },
        {
          "code": 7111010,
          "regencyCode": 7111,
          "name": "NUANGAN"
        },
        {
          "code": 7111011,
          "regencyCode": 7111,
          "name": "MOTONGKAD"
        },
        {
          "code": 7111020,
          "regencyCode": 7111,
          "name": "TUTUYAN"
        },
        {
          "code": 7111030,
          "regencyCode": 7111,
          "name": "KOTABUNAN"
        },
        {
          "code": 7111040,
          "regencyCode": 7111,
          "name": "MODAYAG"
        },
        {
          "code": 7111041,
          "regencyCode": 7111,
          "name": "MOOAT"
        },
        {
          "code": 7111050,
          "regencyCode": 7111,
          "name": "MODAYAG BARAT"
        },
        {
          "code": 7171010,
          "regencyCode": 7171,
          "name": "MALALAYANG"
        },
        {
          "code": 7171020,
          "regencyCode": 7171,
          "name": "SARIO"
        },
        {
          "code": 7171021,
          "regencyCode": 7171,
          "name": "WANEA"
        },
        {
          "code": 7171030,
          "regencyCode": 7171,
          "name": "WENANG"
        },
        {
          "code": 7171031,
          "regencyCode": 7171,
          "name": "TIKALA"
        },
        {
          "code": 7171032,
          "regencyCode": 7171,
          "name": "PAAL DUA"
        },
        {
          "code": 7171040,
          "regencyCode": 7171,
          "name": "MAPANGET"
        },
        {
          "code": 7171051,
          "regencyCode": 7171,
          "name": "SINGKIL"
        },
        {
          "code": 7171052,
          "regencyCode": 7171,
          "name": "TUMINTING"
        },
        {
          "code": 7171053,
          "regencyCode": 7171,
          "name": "BUNAKEN"
        },
        {
          "code": 7171054,
          "regencyCode": 7171,
          "name": "BUNAKEN KEPULAUAN"
        },
        {
          "code": 7172010,
          "regencyCode": 7172,
          "name": "MADIDIR"
        },
        {
          "code": 7172011,
          "regencyCode": 7172,
          "name": "MATUARI"
        },
        {
          "code": 7172012,
          "regencyCode": 7172,
          "name": "GIRIAN"
        },
        {
          "code": 7172021,
          "regencyCode": 7172,
          "name": "LEMBEH SELATAN"
        },
        {
          "code": 7172022,
          "regencyCode": 7172,
          "name": "LEMBEH UTARA"
        },
        {
          "code": 7172030,
          "regencyCode": 7172,
          "name": "AERTEMBAGA"
        },
        {
          "code": 7172031,
          "regencyCode": 7172,
          "name": "MAESA"
        },
        {
          "code": 7172040,
          "regencyCode": 7172,
          "name": "RANOWULU"
        },
        {
          "code": 7173010,
          "regencyCode": 7173,
          "name": "TOMOHON SELATAN"
        },
        {
          "code": 7173020,
          "regencyCode": 7173,
          "name": "TOMOHON TENGAH"
        },
        {
          "code": 7173021,
          "regencyCode": 7173,
          "name": "TOMOHON TIMUR"
        },
        {
          "code": 7173022,
          "regencyCode": 7173,
          "name": "TOMOHON BARAT"
        },
        {
          "code": 7173030,
          "regencyCode": 7173,
          "name": "TOMOHON UTARA"
        },
        {
          "code": 7174010,
          "regencyCode": 7174,
          "name": "KOTAMOBAGU SELATAN"
        },
        {
          "code": 7174020,
          "regencyCode": 7174,
          "name": "KOTAMOBAGU TIMUR"
        },
        {
          "code": 7174030,
          "regencyCode": 7174,
          "name": "KOTAMOBAGU BARAT"
        },
        {
          "code": 7174040,
          "regencyCode": 7174,
          "name": "KOTAMOBAGU UTARA"
        },
        {
          "code": 7201030,
          "regencyCode": 7201,
          "name": "TOTIKUM"
        },
        {
          "code": 7201031,
          "regencyCode": 7201,
          "name": "TOTIKUM SELATAN"
        },
        {
          "code": 7201040,
          "regencyCode": 7201,
          "name": "TINANGKUNG"
        },
        {
          "code": 7201041,
          "regencyCode": 7201,
          "name": "TINANGKUNG SELATAN"
        },
        {
          "code": 7201042,
          "regencyCode": 7201,
          "name": "TINANGKUNG UTARA"
        },
        {
          "code": 7201050,
          "regencyCode": 7201,
          "name": "LIANG"
        },
        {
          "code": 7201051,
          "regencyCode": 7201,
          "name": "PELING TENGAH"
        },
        {
          "code": 7201060,
          "regencyCode": 7201,
          "name": "BULAGI"
        },
        {
          "code": 7201061,
          "regencyCode": 7201,
          "name": "BULAGI SELATAN"
        },
        {
          "code": 7201062,
          "regencyCode": 7201,
          "name": "BULAGI UTARA"
        },
        {
          "code": 7201070,
          "regencyCode": 7201,
          "name": "BUKO"
        },
        {
          "code": 7201071,
          "regencyCode": 7201,
          "name": "BUKO SELATAN"
        },
        {
          "code": 7202010,
          "regencyCode": 7202,
          "name": "TOILI"
        },
        {
          "code": 7202011,
          "regencyCode": 7202,
          "name": "TOILI BARAT"
        },
        {
          "code": 7202012,
          "regencyCode": 7202,
          "name": "MOILONG"
        },
        {
          "code": 7202020,
          "regencyCode": 7202,
          "name": "BATUI"
        },
        {
          "code": 7202021,
          "regencyCode": 7202,
          "name": "BATUI SELATAN"
        },
        {
          "code": 7202030,
          "regencyCode": 7202,
          "name": "BUNTA"
        },
        {
          "code": 7202031,
          "regencyCode": 7202,
          "name": "NUHON"
        },
        {
          "code": 7202032,
          "regencyCode": 7202,
          "name": "SIMPANG RAYA"
        },
        {
          "code": 7202040,
          "regencyCode": 7202,
          "name": "KINTOM"
        },
        {
          "code": 7202050,
          "regencyCode": 7202,
          "name": "LUWUK"
        },
        {
          "code": 7202051,
          "regencyCode": 7202,
          "name": "LUWUK TIMUR"
        },
        {
          "code": 7202052,
          "regencyCode": 7202,
          "name": "LUWUK UTARA"
        },
        {
          "code": 7202053,
          "regencyCode": 7202,
          "name": "LUWUK SELATAN"
        },
        {
          "code": 7202054,
          "regencyCode": 7202,
          "name": "NAMBO"
        },
        {
          "code": 7202060,
          "regencyCode": 7202,
          "name": "PAGIMANA"
        },
        {
          "code": 7202061,
          "regencyCode": 7202,
          "name": "BUALEMO"
        },
        {
          "code": 7202062,
          "regencyCode": 7202,
          "name": "LOBU"
        },
        {
          "code": 7202070,
          "regencyCode": 7202,
          "name": "LAMALA"
        },
        {
          "code": 7202071,
          "regencyCode": 7202,
          "name": "MASAMA"
        },
        {
          "code": 7202072,
          "regencyCode": 7202,
          "name": "MANTOH"
        },
        {
          "code": 7202080,
          "regencyCode": 7202,
          "name": "BALANTAK"
        },
        {
          "code": 7202081,
          "regencyCode": 7202,
          "name": "BALANTAK SELATAN"
        },
        {
          "code": 7202082,
          "regencyCode": 7202,
          "name": "BALANTAK UTARA"
        },
        {
          "code": 7203010,
          "regencyCode": 7203,
          "name": "MENUI KEPULAUAN"
        },
        {
          "code": 7203020,
          "regencyCode": 7203,
          "name": "BUNGKU SELATAN"
        },
        {
          "code": 7203021,
          "regencyCode": 7203,
          "name": "BAHODOPI"
        },
        {
          "code": 7203022,
          "regencyCode": 7203,
          "name": "BUNGKU PESISIR"
        },
        {
          "code": 7203030,
          "regencyCode": 7203,
          "name": "BUNGKU TENGAH"
        },
        {
          "code": 7203031,
          "regencyCode": 7203,
          "name": "BUNGKU TIMUR"
        },
        {
          "code": 7203040,
          "regencyCode": 7203,
          "name": "BUNGKU BARAT"
        },
        {
          "code": 7203041,
          "regencyCode": 7203,
          "name": "BUMI RAYA"
        },
        {
          "code": 7203042,
          "regencyCode": 7203,
          "name": "WITA PONDA"
        },
        {
          "code": 7204010,
          "regencyCode": 7204,
          "name": "PAMONA SELATAN"
        },
        {
          "code": 7204011,
          "regencyCode": 7204,
          "name": "PAMONA BARAT"
        },
        {
          "code": 7204012,
          "regencyCode": 7204,
          "name": "PAMONA TENGGARA"
        },
        {
          "code": 7204020,
          "regencyCode": 7204,
          "name": "LORE SELATAN"
        },
        {
          "code": 7204021,
          "regencyCode": 7204,
          "name": "LORE BARAT"
        },
        {
          "code": 7204030,
          "regencyCode": 7204,
          "name": "PAMONA PUSALEMBA"
        },
        {
          "code": 7204031,
          "regencyCode": 7204,
          "name": "PAMONA TIMUR"
        },
        {
          "code": 7204032,
          "regencyCode": 7204,
          "name": "PAMONA UTARA"
        },
        {
          "code": 7204040,
          "regencyCode": 7204,
          "name": "LORE UTARA"
        },
        {
          "code": 7204041,
          "regencyCode": 7204,
          "name": "LORE TENGAH"
        },
        {
          "code": 7204042,
          "regencyCode": 7204,
          "name": "LORE TIMUR"
        },
        {
          "code": 7204043,
          "regencyCode": 7204,
          "name": "LORE PEORE"
        },
        {
          "code": 7204050,
          "regencyCode": 7204,
          "name": "POSO PESISIR"
        },
        {
          "code": 7204051,
          "regencyCode": 7204,
          "name": "POSO PESISIR SELATAN"
        },
        {
          "code": 7204052,
          "regencyCode": 7204,
          "name": "POSO PESISIR UTARA"
        },
        {
          "code": 7204060,
          "regencyCode": 7204,
          "name": "LAGE"
        },
        {
          "code": 7204070,
          "regencyCode": 7204,
          "name": "POSO KOTA"
        },
        {
          "code": 7204071,
          "regencyCode": 7204,
          "name": "POSO KOTA UTARA"
        },
        {
          "code": 7204072,
          "regencyCode": 7204,
          "name": "POSO KOTA SELATAN"
        },
        {
          "code": 7205041,
          "regencyCode": 7205,
          "name": "RIO PAKAVA"
        },
        {
          "code": 7205051,
          "regencyCode": 7205,
          "name": "PINEMBANI"
        },
        {
          "code": 7205080,
          "regencyCode": 7205,
          "name": "BANAWA"
        },
        {
          "code": 7205081,
          "regencyCode": 7205,
          "name": "BANAWA SELATAN"
        },
        {
          "code": 7205082,
          "regencyCode": 7205,
          "name": "BANAWA TENGAH"
        },
        {
          "code": 7205090,
          "regencyCode": 7205,
          "name": "LABUAN"
        },
        {
          "code": 7205091,
          "regencyCode": 7205,
          "name": "TANANTOVEA"
        },
        {
          "code": 7205100,
          "regencyCode": 7205,
          "name": "SINDUE"
        },
        {
          "code": 7205101,
          "regencyCode": 7205,
          "name": "SINDUE TOMBUSABORA"
        },
        {
          "code": 7205102,
          "regencyCode": 7205,
          "name": "SINDUE TOBATA"
        },
        {
          "code": 7205120,
          "regencyCode": 7205,
          "name": "SIRENJA"
        },
        {
          "code": 7205130,
          "regencyCode": 7205,
          "name": "BALAESANG"
        },
        {
          "code": 7205131,
          "regencyCode": 7205,
          "name": "BALAESANG TANJUNG"
        },
        {
          "code": 7205140,
          "regencyCode": 7205,
          "name": "DAMPELAS"
        },
        {
          "code": 7205160,
          "regencyCode": 7205,
          "name": "SOJOL"
        },
        {
          "code": 7205161,
          "regencyCode": 7205,
          "name": "SOJOL UTARA"
        },
        {
          "code": 7206010,
          "regencyCode": 7206,
          "name": "DAMPAL SELATAN"
        },
        {
          "code": 7206020,
          "regencyCode": 7206,
          "name": "DAMPAL UTARA"
        },
        {
          "code": 7206030,
          "regencyCode": 7206,
          "name": "DONDO"
        },
        {
          "code": 7206031,
          "regencyCode": 7206,
          "name": "OGODEIDE"
        },
        {
          "code": 7206032,
          "regencyCode": 7206,
          "name": "BASIDONDO"
        },
        {
          "code": 7206040,
          "regencyCode": 7206,
          "name": "BAOLAN"
        },
        {
          "code": 7206041,
          "regencyCode": 7206,
          "name": "LAMPASIO"
        },
        {
          "code": 7206050,
          "regencyCode": 7206,
          "name": "GALANG"
        },
        {
          "code": 7206060,
          "regencyCode": 7206,
          "name": "TOLITOLI UTARA"
        },
        {
          "code": 7206061,
          "regencyCode": 7206,
          "name": "DAKO PAMEAN"
        },
        {
          "code": 7207010,
          "regencyCode": 7207,
          "name": "LAKEA"
        },
        {
          "code": 7207011,
          "regencyCode": 7207,
          "name": "BIAU"
        },
        {
          "code": 7207012,
          "regencyCode": 7207,
          "name": "KARAMAT"
        },
        {
          "code": 7207020,
          "regencyCode": 7207,
          "name": "MOMUNU"
        },
        {
          "code": 7207021,
          "regencyCode": 7207,
          "name": "TILOAN"
        },
        {
          "code": 7207030,
          "regencyCode": 7207,
          "name": "BOKAT"
        },
        {
          "code": 7207031,
          "regencyCode": 7207,
          "name": "BUKAL"
        },
        {
          "code": 7207040,
          "regencyCode": 7207,
          "name": "BUNOBOGU"
        },
        {
          "code": 7207041,
          "regencyCode": 7207,
          "name": "GADUNG"
        },
        {
          "code": 7207050,
          "regencyCode": 7207,
          "name": "PALELEH"
        },
        {
          "code": 7207051,
          "regencyCode": 7207,
          "name": "PALELEH BARAT"
        },
        {
          "code": 7208010,
          "regencyCode": 7208,
          "name": "SAUSU"
        },
        {
          "code": 7208011,
          "regencyCode": 7208,
          "name": "TORUE"
        },
        {
          "code": 7208012,
          "regencyCode": 7208,
          "name": "BALINGGI"
        },
        {
          "code": 7208020,
          "regencyCode": 7208,
          "name": "PARIGI"
        },
        {
          "code": 7208021,
          "regencyCode": 7208,
          "name": "PARIGI SELATAN"
        },
        {
          "code": 7208022,
          "regencyCode": 7208,
          "name": "PARIGI BARAT"
        },
        {
          "code": 7208023,
          "regencyCode": 7208,
          "name": "PARIGI UTARA"
        },
        {
          "code": 7208024,
          "regencyCode": 7208,
          "name": "PARIGI TENGAH"
        },
        {
          "code": 7208030,
          "regencyCode": 7208,
          "name": "AMPIBABO"
        },
        {
          "code": 7208031,
          "regencyCode": 7208,
          "name": "KASIMBAR"
        },
        {
          "code": 7208032,
          "regencyCode": 7208,
          "name": "TORIBULU"
        },
        {
          "code": 7208033,
          "regencyCode": 7208,
          "name": "SINIU"
        },
        {
          "code": 7208040,
          "regencyCode": 7208,
          "name": "TINOMBO"
        },
        {
          "code": 7208041,
          "regencyCode": 7208,
          "name": "TINOMBO SELATAN"
        },
        {
          "code": 7208042,
          "regencyCode": 7208,
          "name": "SIDOAN"
        },
        {
          "code": 7208050,
          "regencyCode": 7208,
          "name": "TOMINI"
        },
        {
          "code": 7208051,
          "regencyCode": 7208,
          "name": "MEPANGA"
        },
        {
          "code": 7208052,
          "regencyCode": 7208,
          "name": "PALASA"
        },
        {
          "code": 7208060,
          "regencyCode": 7208,
          "name": "MOUTONG"
        },
        {
          "code": 7208061,
          "regencyCode": 7208,
          "name": "BOLANO LAMBUNU"
        },
        {
          "code": 7208062,
          "regencyCode": 7208,
          "name": "TAOPA"
        },
        {
          "code": 7208063,
          "regencyCode": 7208,
          "name": "BOLANO"
        },
        {
          "code": 7208064,
          "regencyCode": 7208,
          "name": "ONGKA MALINO"
        },
        {
          "code": 7209010,
          "regencyCode": 7209,
          "name": "TOJO BARAT"
        },
        {
          "code": 7209020,
          "regencyCode": 7209,
          "name": "TOJO"
        },
        {
          "code": 7209030,
          "regencyCode": 7209,
          "name": "ULUBONGKA"
        },
        {
          "code": 7209040,
          "regencyCode": 7209,
          "name": "AMPANA TETE"
        },
        {
          "code": 7209050,
          "regencyCode": 7209,
          "name": "AMPANA KOTA"
        },
        {
          "code": 7209051,
          "regencyCode": 7209,
          "name": "RATOLINDO"
        },
        {
          "code": 7209060,
          "regencyCode": 7209,
          "name": "UNA - UNA"
        },
        {
          "code": 7209061,
          "regencyCode": 7209,
          "name": "BATUDAKA"
        },
        {
          "code": 7209070,
          "regencyCode": 7209,
          "name": "TOGEAN"
        },
        {
          "code": 7209080,
          "regencyCode": 7209,
          "name": "WALEA KEPULAUAN"
        },
        {
          "code": 7209081,
          "regencyCode": 7209,
          "name": "WALEA BESAR"
        },
        {
          "code": 7209082,
          "regencyCode": 7209,
          "name": "TALATAKO"
        },
        {
          "code": 7210010,
          "regencyCode": 7210,
          "name": "PIPIKORO"
        },
        {
          "code": 7210020,
          "regencyCode": 7210,
          "name": "KULAWI SELATAN"
        },
        {
          "code": 7210030,
          "regencyCode": 7210,
          "name": "KULAWI"
        },
        {
          "code": 7210040,
          "regencyCode": 7210,
          "name": "LINDU"
        },
        {
          "code": 7210050,
          "regencyCode": 7210,
          "name": "NOKILALAKI"
        },
        {
          "code": 7210060,
          "regencyCode": 7210,
          "name": "PALOLO"
        },
        {
          "code": 7210070,
          "regencyCode": 7210,
          "name": "GUMBASA"
        },
        {
          "code": 7210080,
          "regencyCode": 7210,
          "name": "DOLO SELATAN"
        },
        {
          "code": 7210090,
          "regencyCode": 7210,
          "name": "DOLO BARAT"
        },
        {
          "code": 7210100,
          "regencyCode": 7210,
          "name": "TANAMBULAVA"
        },
        {
          "code": 7210110,
          "regencyCode": 7210,
          "name": "DOLO"
        },
        {
          "code": 7210120,
          "regencyCode": 7210,
          "name": "SIGI BIROMARU"
        },
        {
          "code": 7210130,
          "regencyCode": 7210,
          "name": "MARAWOLA"
        },
        {
          "code": 7210140,
          "regencyCode": 7210,
          "name": "MARAWOLA BARAT"
        },
        {
          "code": 7210150,
          "regencyCode": 7210,
          "name": "KINOVARO"
        },
        {
          "code": 7211010,
          "regencyCode": 7211,
          "name": "BANGKURUNG"
        },
        {
          "code": 7211020,
          "regencyCode": 7211,
          "name": "LABOBO"
        },
        {
          "code": 7211030,
          "regencyCode": 7211,
          "name": "BANGGAI UTARA"
        },
        {
          "code": 7211040,
          "regencyCode": 7211,
          "name": "BANGGAI"
        },
        {
          "code": 7211050,
          "regencyCode": 7211,
          "name": "BANGGAI TENGAH"
        },
        {
          "code": 7211060,
          "regencyCode": 7211,
          "name": "BANGGAI SELATAN"
        },
        {
          "code": 7211070,
          "regencyCode": 7211,
          "name": "BOKAN KEPULAUAN"
        },
        {
          "code": 7212010,
          "regencyCode": 7212,
          "name": "MORI ATAS"
        },
        {
          "code": 7212020,
          "regencyCode": 7212,
          "name": "LEMBO"
        },
        {
          "code": 7212030,
          "regencyCode": 7212,
          "name": "LEMBO RAYA"
        },
        {
          "code": 7212040,
          "regencyCode": 7212,
          "name": "PETASIA TIMUR"
        },
        {
          "code": 7212050,
          "regencyCode": 7212,
          "name": "PETASIA"
        },
        {
          "code": 7212060,
          "regencyCode": 7212,
          "name": "PETASIA BARAT"
        },
        {
          "code": 7212070,
          "regencyCode": 7212,
          "name": "MORI UTARA"
        },
        {
          "code": 7212080,
          "regencyCode": 7212,
          "name": "SOYO JAYA"
        },
        {
          "code": 7212090,
          "regencyCode": 7212,
          "name": "BUNGKU UTARA"
        },
        {
          "code": 7212100,
          "regencyCode": 7212,
          "name": "MAMOSALATO"
        },
        {
          "code": 7271010,
          "regencyCode": 7271,
          "name": "PALU BARAT"
        },
        {
          "code": 7271011,
          "regencyCode": 7271,
          "name": "TATANGA"
        },
        {
          "code": 7271012,
          "regencyCode": 7271,
          "name": "ULUJADI"
        },
        {
          "code": 7271020,
          "regencyCode": 7271,
          "name": "PALU SELATAN"
        },
        {
          "code": 7271030,
          "regencyCode": 7271,
          "name": "PALU TIMUR"
        },
        {
          "code": 7271031,
          "regencyCode": 7271,
          "name": "MANTIKULORE"
        },
        {
          "code": 7271040,
          "regencyCode": 7271,
          "name": "PALU UTARA"
        },
        {
          "code": 7271041,
          "regencyCode": 7271,
          "name": "TAWAELI"
        },
        {
          "code": 7301010,
          "regencyCode": 7301,
          "name": "PASIMARANNU"
        },
        {
          "code": 7301011,
          "regencyCode": 7301,
          "name": "PASILAMBENA"
        },
        {
          "code": 7301020,
          "regencyCode": 7301,
          "name": "PASIMASSUNGGU"
        },
        {
          "code": 7301021,
          "regencyCode": 7301,
          "name": "TAKABONERATE"
        },
        {
          "code": 7301022,
          "regencyCode": 7301,
          "name": "PASIMASSUNGGU TIMUR"
        },
        {
          "code": 7301030,
          "regencyCode": 7301,
          "name": "BONTOSIKUYU"
        },
        {
          "code": 7301040,
          "regencyCode": 7301,
          "name": "BONTOHARU"
        },
        {
          "code": 7301041,
          "regencyCode": 7301,
          "name": "BENTENG"
        },
        {
          "code": 7301042,
          "regencyCode": 7301,
          "name": "BONTOMANAI"
        },
        {
          "code": 7301050,
          "regencyCode": 7301,
          "name": "BONTOMATENE"
        },
        {
          "code": 7301051,
          "regencyCode": 7301,
          "name": "BUKI"
        },
        {
          "code": 7302010,
          "regencyCode": 7302,
          "name": "GANTARANG"
        },
        {
          "code": 7302020,
          "regencyCode": 7302,
          "name": "UJUNG BULU"
        },
        {
          "code": 7302021,
          "regencyCode": 7302,
          "name": "UJUNG LOE"
        },
        {
          "code": 7302030,
          "regencyCode": 7302,
          "name": "BONTO BAHARI"
        },
        {
          "code": 7302040,
          "regencyCode": 7302,
          "name": "BONTOTIRO"
        },
        {
          "code": 7302050,
          "regencyCode": 7302,
          "name": "HERO LANGE-LANGE"
        },
        {
          "code": 7302060,
          "regencyCode": 7302,
          "name": "KAJANG"
        },
        {
          "code": 7302070,
          "regencyCode": 7302,
          "name": "BULUKUMPA"
        },
        {
          "code": 7302080,
          "regencyCode": 7302,
          "name": "RILAU ALE"
        },
        {
          "code": 7302090,
          "regencyCode": 7302,
          "name": "KINDANG"
        },
        {
          "code": 7303010,
          "regencyCode": 7303,
          "name": "BISSAPPU"
        },
        {
          "code": 7303011,
          "regencyCode": 7303,
          "name": "ULUERE"
        },
        {
          "code": 7303012,
          "regencyCode": 7303,
          "name": "SINOA"
        },
        {
          "code": 7303020,
          "regencyCode": 7303,
          "name": "BANTAENG"
        },
        {
          "code": 7303021,
          "regencyCode": 7303,
          "name": "EREMERASA"
        },
        {
          "code": 7303030,
          "regencyCode": 7303,
          "name": "TOMPOBULU"
        },
        {
          "code": 7303031,
          "regencyCode": 7303,
          "name": "PA'JUKUKANG"
        },
        {
          "code": 7303032,
          "regencyCode": 7303,
          "name": "GANTARANGKEKE"
        },
        {
          "code": 7304010,
          "regencyCode": 7304,
          "name": "BANGKALA"
        },
        {
          "code": 7304011,
          "regencyCode": 7304,
          "name": "BANGKALA BARAT"
        },
        {
          "code": 7304020,
          "regencyCode": 7304,
          "name": "TAMALATEA"
        },
        {
          "code": 7304021,
          "regencyCode": 7304,
          "name": "BONTORAMBA"
        },
        {
          "code": 7304030,
          "regencyCode": 7304,
          "name": "BINAMU"
        },
        {
          "code": 7304031,
          "regencyCode": 7304,
          "name": "TURATEA"
        },
        {
          "code": 7304040,
          "regencyCode": 7304,
          "name": "BATANG"
        },
        {
          "code": 7304041,
          "regencyCode": 7304,
          "name": "ARUNGKEKE"
        },
        {
          "code": 7304042,
          "regencyCode": 7304,
          "name": "TAROWANG"
        },
        {
          "code": 7304050,
          "regencyCode": 7304,
          "name": "KELARA"
        },
        {
          "code": 7304051,
          "regencyCode": 7304,
          "name": "RUMBIA"
        },
        {
          "code": 7305010,
          "regencyCode": 7305,
          "name": "MANGARA BOMBANG"
        },
        {
          "code": 7305020,
          "regencyCode": 7305,
          "name": "MAPPAKASUNGGU"
        },
        {
          "code": 7305021,
          "regencyCode": 7305,
          "name": "SANROBONE"
        },
        {
          "code": 7305030,
          "regencyCode": 7305,
          "name": "POLOMBANGKENG SELATAN"
        },
        {
          "code": 7305031,
          "regencyCode": 7305,
          "name": "PATTALLASSANG"
        },
        {
          "code": 7305040,
          "regencyCode": 7305,
          "name": "POLOMBANGKENG UTARA"
        },
        {
          "code": 7305050,
          "regencyCode": 7305,
          "name": "GALESONG SELATAN"
        },
        {
          "code": 7305051,
          "regencyCode": 7305,
          "name": "GALESONG"
        },
        {
          "code": 7305060,
          "regencyCode": 7305,
          "name": "GALESONG UTARA"
        },
        {
          "code": 7306010,
          "regencyCode": 7306,
          "name": "BONTONOMPO"
        },
        {
          "code": 7306011,
          "regencyCode": 7306,
          "name": "BONTONOMPO SELATAN"
        },
        {
          "code": 7306020,
          "regencyCode": 7306,
          "name": "BAJENG"
        },
        {
          "code": 7306021,
          "regencyCode": 7306,
          "name": "BAJENG BARAT"
        },
        {
          "code": 7306030,
          "regencyCode": 7306,
          "name": "PALLANGGA"
        },
        {
          "code": 7306031,
          "regencyCode": 7306,
          "name": "BAROMBONG"
        },
        {
          "code": 7306040,
          "regencyCode": 7306,
          "name": "SOMBA OPU"
        },
        {
          "code": 7306050,
          "regencyCode": 7306,
          "name": "BONTOMARANNU"
        },
        {
          "code": 7306051,
          "regencyCode": 7306,
          "name": "PATTALLASSANG"
        },
        {
          "code": 7306060,
          "regencyCode": 7306,
          "name": "PARANGLOE"
        },
        {
          "code": 7306061,
          "regencyCode": 7306,
          "name": "MANUJU"
        },
        {
          "code": 7306070,
          "regencyCode": 7306,
          "name": "TINGGIMONCONG"
        },
        {
          "code": 7306071,
          "regencyCode": 7306,
          "name": "TOMBOLO PAO"
        },
        {
          "code": 7306072,
          "regencyCode": 7306,
          "name": "PARIGI"
        },
        {
          "code": 7306080,
          "regencyCode": 7306,
          "name": "BUNGAYA"
        },
        {
          "code": 7306081,
          "regencyCode": 7306,
          "name": "BONTOLEMPANGAN"
        },
        {
          "code": 7306090,
          "regencyCode": 7306,
          "name": "TOMPOBULU"
        },
        {
          "code": 7306091,
          "regencyCode": 7306,
          "name": "BIRINGBULU"
        },
        {
          "code": 7307010,
          "regencyCode": 7307,
          "name": "SINJAI BARAT"
        },
        {
          "code": 7307020,
          "regencyCode": 7307,
          "name": "SINJAI BORONG"
        },
        {
          "code": 7307030,
          "regencyCode": 7307,
          "name": "SINJAI SELATAN"
        },
        {
          "code": 7307040,
          "regencyCode": 7307,
          "name": "TELLU LIMPOE"
        },
        {
          "code": 7307050,
          "regencyCode": 7307,
          "name": "SINJAI TIMUR"
        },
        {
          "code": 7307060,
          "regencyCode": 7307,
          "name": "SINJAI TENGAH"
        },
        {
          "code": 7307070,
          "regencyCode": 7307,
          "name": "SINJAI UTARA"
        },
        {
          "code": 7307080,
          "regencyCode": 7307,
          "name": "BULUPODDO"
        },
        {
          "code": 7307090,
          "regencyCode": 7307,
          "name": "PULAU SEMBILAN"
        },
        {
          "code": 7308010,
          "regencyCode": 7308,
          "name": "MANDAI"
        },
        {
          "code": 7308011,
          "regencyCode": 7308,
          "name": "MONCONGLOE"
        },
        {
          "code": 7308020,
          "regencyCode": 7308,
          "name": "MAROS BARU"
        },
        {
          "code": 7308021,
          "regencyCode": 7308,
          "name": "MARUSU"
        },
        {
          "code": 7308022,
          "regencyCode": 7308,
          "name": "TURIKALE"
        },
        {
          "code": 7308023,
          "regencyCode": 7308,
          "name": "LAU"
        },
        {
          "code": 7308030,
          "regencyCode": 7308,
          "name": "BONTOA"
        },
        {
          "code": 7308040,
          "regencyCode": 7308,
          "name": "BANTIMURUNG"
        },
        {
          "code": 7308041,
          "regencyCode": 7308,
          "name": "SIMBANG"
        },
        {
          "code": 7308050,
          "regencyCode": 7308,
          "name": "TANRALILI"
        },
        {
          "code": 7308051,
          "regencyCode": 7308,
          "name": "TOMPU BULU"
        },
        {
          "code": 7308060,
          "regencyCode": 7308,
          "name": "CAMBA"
        },
        {
          "code": 7308061,
          "regencyCode": 7308,
          "name": "CENRANA"
        },
        {
          "code": 7308070,
          "regencyCode": 7308,
          "name": "MALLAWA"
        },
        {
          "code": 7309010,
          "regencyCode": 7309,
          "name": "LIUKANG TANGAYA"
        },
        {
          "code": 7309020,
          "regencyCode": 7309,
          "name": "LIUKANG KALMAS"
        },
        {
          "code": 7309030,
          "regencyCode": 7309,
          "name": "LIUKANG TUPABBIRING"
        },
        {
          "code": 7309031,
          "regencyCode": 7309,
          "name": "LIUKANG TUPABBIRING UTARA"
        },
        {
          "code": 7309040,
          "regencyCode": 7309,
          "name": "PANGKAJENE"
        },
        {
          "code": 7309041,
          "regencyCode": 7309,
          "name": "MINASATENE"
        },
        {
          "code": 7309050,
          "regencyCode": 7309,
          "name": "BALOCCI"
        },
        {
          "code": 7309051,
          "regencyCode": 7309,
          "name": "TONDONG TALLASA"
        },
        {
          "code": 7309060,
          "regencyCode": 7309,
          "name": "BUNGORO"
        },
        {
          "code": 7309070,
          "regencyCode": 7309,
          "name": "LABAKKANG"
        },
        {
          "code": 7309080,
          "regencyCode": 7309,
          "name": "MA'RANG"
        },
        {
          "code": 7309091,
          "regencyCode": 7309,
          "name": "SEGERI"
        },
        {
          "code": 7309092,
          "regencyCode": 7309,
          "name": "MANDALLE"
        },
        {
          "code": 7310010,
          "regencyCode": 7310,
          "name": "TANETE RIAJA"
        },
        {
          "code": 7310011,
          "regencyCode": 7310,
          "name": "PUJANANTING"
        },
        {
          "code": 7310020,
          "regencyCode": 7310,
          "name": "TANETE RILAU"
        },
        {
          "code": 7310030,
          "regencyCode": 7310,
          "name": "BARRU"
        },
        {
          "code": 7310040,
          "regencyCode": 7310,
          "name": "SOPPENG RIAJA"
        },
        {
          "code": 7310041,
          "regencyCode": 7310,
          "name": "BALUSU"
        },
        {
          "code": 7310050,
          "regencyCode": 7310,
          "name": "MALLUSETASI"
        },
        {
          "code": 7311010,
          "regencyCode": 7311,
          "name": "BONTOCANI"
        },
        {
          "code": 7311020,
          "regencyCode": 7311,
          "name": "KAHU"
        },
        {
          "code": 7311030,
          "regencyCode": 7311,
          "name": "KAJUARA"
        },
        {
          "code": 7311040,
          "regencyCode": 7311,
          "name": "SALOMEKKO"
        },
        {
          "code": 7311050,
          "regencyCode": 7311,
          "name": "TONRA"
        },
        {
          "code": 7311060,
          "regencyCode": 7311,
          "name": "PATIMPENG"
        },
        {
          "code": 7311070,
          "regencyCode": 7311,
          "name": "LIBURENG"
        },
        {
          "code": 7311080,
          "regencyCode": 7311,
          "name": "MARE"
        },
        {
          "code": 7311090,
          "regencyCode": 7311,
          "name": "SIBULUE"
        },
        {
          "code": 7311100,
          "regencyCode": 7311,
          "name": "CINA"
        },
        {
          "code": 7311110,
          "regencyCode": 7311,
          "name": "BAREBBO"
        },
        {
          "code": 7311120,
          "regencyCode": 7311,
          "name": "PONRE"
        },
        {
          "code": 7311130,
          "regencyCode": 7311,
          "name": "LAPPARIAJA"
        },
        {
          "code": 7311140,
          "regencyCode": 7311,
          "name": "LAMURU"
        },
        {
          "code": 7311141,
          "regencyCode": 7311,
          "name": "TELLU LIMPOE"
        },
        {
          "code": 7311150,
          "regencyCode": 7311,
          "name": "BENGO"
        },
        {
          "code": 7311160,
          "regencyCode": 7311,
          "name": "ULAWENG"
        },
        {
          "code": 7311170,
          "regencyCode": 7311,
          "name": "PALAKKA"
        },
        {
          "code": 7311180,
          "regencyCode": 7311,
          "name": "AWANGPONE"
        },
        {
          "code": 7311190,
          "regencyCode": 7311,
          "name": "TELLU SIATTINGE"
        },
        {
          "code": 7311200,
          "regencyCode": 7311,
          "name": "AMALI"
        },
        {
          "code": 7311210,
          "regencyCode": 7311,
          "name": "AJANGALE"
        },
        {
          "code": 7311220,
          "regencyCode": 7311,
          "name": "DUA BOCCOE"
        },
        {
          "code": 7311230,
          "regencyCode": 7311,
          "name": "CENRANA"
        },
        {
          "code": 7311710,
          "regencyCode": 7311,
          "name": "TANETE RIATTANG BARAT"
        },
        {
          "code": 7311720,
          "regencyCode": 7311,
          "name": "TANETE RIATTANG"
        },
        {
          "code": 7311730,
          "regencyCode": 7311,
          "name": "TANETE RIATTANG TIMUR"
        },
        {
          "code": 7312010,
          "regencyCode": 7312,
          "name": "MARIO RIWAWO"
        },
        {
          "code": 7312020,
          "regencyCode": 7312,
          "name": "LALABATA"
        },
        {
          "code": 7312030,
          "regencyCode": 7312,
          "name": "LILI RIAJA"
        },
        {
          "code": 7312031,
          "regencyCode": 7312,
          "name": "GANRA"
        },
        {
          "code": 7312032,
          "regencyCode": 7312,
          "name": "CITTA"
        },
        {
          "code": 7312040,
          "regencyCode": 7312,
          "name": "LILI RILAU"
        },
        {
          "code": 7312050,
          "regencyCode": 7312,
          "name": "DONRI DONRI"
        },
        {
          "code": 7312060,
          "regencyCode": 7312,
          "name": "MARIO RIAWA"
        },
        {
          "code": 7313010,
          "regencyCode": 7313,
          "name": "SABBANG PARU"
        },
        {
          "code": 7313020,
          "regencyCode": 7313,
          "name": "TEMPE"
        },
        {
          "code": 7313030,
          "regencyCode": 7313,
          "name": "PAMMANA"
        },
        {
          "code": 7313040,
          "regencyCode": 7313,
          "name": "BOLA"
        },
        {
          "code": 7313050,
          "regencyCode": 7313,
          "name": "TAKKALALLA"
        },
        {
          "code": 7313060,
          "regencyCode": 7313,
          "name": "SAJOANGING"
        },
        {
          "code": 7313061,
          "regencyCode": 7313,
          "name": "PENRANG"
        },
        {
          "code": 7313070,
          "regencyCode": 7313,
          "name": "MAJAULENG"
        },
        {
          "code": 7313080,
          "regencyCode": 7313,
          "name": "TANA SITOLO"
        },
        {
          "code": 7313090,
          "regencyCode": 7313,
          "name": "BELAWA"
        },
        {
          "code": 7313100,
          "regencyCode": 7313,
          "name": "MANIANG PAJO"
        },
        {
          "code": 7313101,
          "regencyCode": 7313,
          "name": "GILIRENG"
        },
        {
          "code": 7313110,
          "regencyCode": 7313,
          "name": "KEERA"
        },
        {
          "code": 7313120,
          "regencyCode": 7313,
          "name": "PITUMPANUA"
        },
        {
          "code": 7314010,
          "regencyCode": 7314,
          "name": "PANCA LAUTANG"
        },
        {
          "code": 7314020,
          "regencyCode": 7314,
          "name": "TELLULIMPO E"
        },
        {
          "code": 7314030,
          "regencyCode": 7314,
          "name": "WATANG PULU"
        },
        {
          "code": 7314040,
          "regencyCode": 7314,
          "name": "BARANTI"
        },
        {
          "code": 7314050,
          "regencyCode": 7314,
          "name": "PANCA RIJANG"
        },
        {
          "code": 7314051,
          "regencyCode": 7314,
          "name": "KULO"
        },
        {
          "code": 7314060,
          "regencyCode": 7314,
          "name": "MARITENGNGAE"
        },
        {
          "code": 7314061,
          "regencyCode": 7314,
          "name": "WATANG SIDENRENG"
        },
        {
          "code": 7314070,
          "regencyCode": 7314,
          "name": "PITU RIAWA"
        },
        {
          "code": 7314080,
          "regencyCode": 7314,
          "name": "DUAPITUE"
        },
        {
          "code": 7314081,
          "regencyCode": 7314,
          "name": "PITU RIASE"
        },
        {
          "code": 7315010,
          "regencyCode": 7315,
          "name": "SUPPA"
        },
        {
          "code": 7315020,
          "regencyCode": 7315,
          "name": "MATTIROSOMPE"
        },
        {
          "code": 7315021,
          "regencyCode": 7315,
          "name": "LANRISANG"
        },
        {
          "code": 7315030,
          "regencyCode": 7315,
          "name": "MATTIRO BULU"
        },
        {
          "code": 7315040,
          "regencyCode": 7315,
          "name": "WATANG SAWITTO"
        },
        {
          "code": 7315041,
          "regencyCode": 7315,
          "name": "PALETEANG"
        },
        {
          "code": 7315042,
          "regencyCode": 7315,
          "name": "TIROANG"
        },
        {
          "code": 7315050,
          "regencyCode": 7315,
          "name": "PATAMPANUA"
        },
        {
          "code": 7315060,
          "regencyCode": 7315,
          "name": "CEMPA"
        },
        {
          "code": 7315070,
          "regencyCode": 7315,
          "name": "DUAMPANUA"
        },
        {
          "code": 7315071,
          "regencyCode": 7315,
          "name": "BATULAPPA"
        },
        {
          "code": 7315080,
          "regencyCode": 7315,
          "name": "LEMBANG"
        },
        {
          "code": 7316010,
          "regencyCode": 7316,
          "name": "MAIWA"
        },
        {
          "code": 7316011,
          "regencyCode": 7316,
          "name": "BUNGIN"
        },
        {
          "code": 7316020,
          "regencyCode": 7316,
          "name": "ENREKANG"
        },
        {
          "code": 7316021,
          "regencyCode": 7316,
          "name": "CENDANA"
        },
        {
          "code": 7316030,
          "regencyCode": 7316,
          "name": "BARAKA"
        },
        {
          "code": 7316031,
          "regencyCode": 7316,
          "name": "BUNTU BATU"
        },
        {
          "code": 7316040,
          "regencyCode": 7316,
          "name": "ANGGERAJA"
        },
        {
          "code": 7316041,
          "regencyCode": 7316,
          "name": "MALUA"
        },
        {
          "code": 7316050,
          "regencyCode": 7316,
          "name": "ALLA"
        },
        {
          "code": 7316051,
          "regencyCode": 7316,
          "name": "CURIO"
        },
        {
          "code": 7316052,
          "regencyCode": 7316,
          "name": "MASALLE"
        },
        {
          "code": 7316053,
          "regencyCode": 7316,
          "name": "BAROKO"
        },
        {
          "code": 7317010,
          "regencyCode": 7317,
          "name": "LAROMPONG"
        },
        {
          "code": 7317011,
          "regencyCode": 7317,
          "name": "LAROMPONG SELATAN"
        },
        {
          "code": 7317020,
          "regencyCode": 7317,
          "name": "SULI"
        },
        {
          "code": 7317021,
          "regencyCode": 7317,
          "name": "SULI BARAT"
        },
        {
          "code": 7317030,
          "regencyCode": 7317,
          "name": "BELOPA"
        },
        {
          "code": 7317031,
          "regencyCode": 7317,
          "name": "KAMANRE"
        },
        {
          "code": 7317032,
          "regencyCode": 7317,
          "name": "BELOPA UTARA"
        },
        {
          "code": 7317040,
          "regencyCode": 7317,
          "name": "BAJO"
        },
        {
          "code": 7317041,
          "regencyCode": 7317,
          "name": "BAJO BARAT"
        },
        {
          "code": 7317050,
          "regencyCode": 7317,
          "name": "BASSESANGTEMPE"
        },
        {
          "code": 7317051,
          "regencyCode": 7317,
          "name": "LATIMOJONG"
        },
        {
          "code": 7317052,
          "regencyCode": 7317,
          "name": "BASSESANGTEMPE UTARA"
        },
        {
          "code": 7317060,
          "regencyCode": 7317,
          "name": "BUPON"
        },
        {
          "code": 7317061,
          "regencyCode": 7317,
          "name": "PONRANG"
        },
        {
          "code": 7317062,
          "regencyCode": 7317,
          "name": "PONRANG SELATAN"
        },
        {
          "code": 7317070,
          "regencyCode": 7317,
          "name": "BUA"
        },
        {
          "code": 7317080,
          "regencyCode": 7317,
          "name": "WALENRANG"
        },
        {
          "code": 7317081,
          "regencyCode": 7317,
          "name": "WALENRANG TIMUR"
        },
        {
          "code": 7317090,
          "regencyCode": 7317,
          "name": "LAMASI"
        },
        {
          "code": 7317091,
          "regencyCode": 7317,
          "name": "WALENRANG UTARA"
        },
        {
          "code": 7317092,
          "regencyCode": 7317,
          "name": "WALENRANG BARAT"
        },
        {
          "code": 7317093,
          "regencyCode": 7317,
          "name": "LAMASI TIMUR"
        },
        {
          "code": 7318010,
          "regencyCode": 7318,
          "name": "BONGGAKARADENG"
        },
        {
          "code": 7318011,
          "regencyCode": 7318,
          "name": "SIMBUANG"
        },
        {
          "code": 7318012,
          "regencyCode": 7318,
          "name": "RANO"
        },
        {
          "code": 7318013,
          "regencyCode": 7318,
          "name": "MAPPAK"
        },
        {
          "code": 7318020,
          "regencyCode": 7318,
          "name": "MENGKENDEK"
        },
        {
          "code": 7318021,
          "regencyCode": 7318,
          "name": "GANDANG BATU SILANAN"
        },
        {
          "code": 7318030,
          "regencyCode": 7318,
          "name": "SANGALLA"
        },
        {
          "code": 7318031,
          "regencyCode": 7318,
          "name": "SANGALA SELATAN"
        },
        {
          "code": 7318032,
          "regencyCode": 7318,
          "name": "SANGALLA UTARA"
        },
        {
          "code": 7318040,
          "regencyCode": 7318,
          "name": "MAKALE"
        },
        {
          "code": 7318041,
          "regencyCode": 7318,
          "name": "MAKALE SELATAN"
        },
        {
          "code": 7318042,
          "regencyCode": 7318,
          "name": "MAKALE UTARA"
        },
        {
          "code": 7318050,
          "regencyCode": 7318,
          "name": "SALUPUTTI"
        },
        {
          "code": 7318051,
          "regencyCode": 7318,
          "name": "BITTUANG"
        },
        {
          "code": 7318052,
          "regencyCode": 7318,
          "name": "REMBON"
        },
        {
          "code": 7318053,
          "regencyCode": 7318,
          "name": "MASANDA"
        },
        {
          "code": 7318054,
          "regencyCode": 7318,
          "name": "MALIMBONG BALEPE"
        },
        {
          "code": 7318061,
          "regencyCode": 7318,
          "name": "RANTETAYO"
        },
        {
          "code": 7318067,
          "regencyCode": 7318,
          "name": "KURRA"
        },
        {
          "code": 7322010,
          "regencyCode": 7322,
          "name": "SABBANG"
        },
        {
          "code": 7322020,
          "regencyCode": 7322,
          "name": "BAEBUNTA"
        },
        {
          "code": 7322030,
          "regencyCode": 7322,
          "name": "MALANGKE"
        },
        {
          "code": 7322031,
          "regencyCode": 7322,
          "name": "MALANGKE BARAT"
        },
        {
          "code": 7322040,
          "regencyCode": 7322,
          "name": "SUKAMAJU"
        },
        {
          "code": 7322050,
          "regencyCode": 7322,
          "name": "BONE-BONE"
        },
        {
          "code": 7322051,
          "regencyCode": 7322,
          "name": "TANA LILI"
        },
        {
          "code": 7322120,
          "regencyCode": 7322,
          "name": "MASAMBA"
        },
        {
          "code": 7322121,
          "regencyCode": 7322,
          "name": "MAPPEDECENG"
        },
        {
          "code": 7322122,
          "regencyCode": 7322,
          "name": "RAMPI"
        },
        {
          "code": 7322130,
          "regencyCode": 7322,
          "name": "LIMBONG"
        },
        {
          "code": 7322131,
          "regencyCode": 7322,
          "name": "SEKO"
        },
        {
          "code": 7325010,
          "regencyCode": 7325,
          "name": "BURAU"
        },
        {
          "code": 7325020,
          "regencyCode": 7325,
          "name": "WOTU"
        },
        {
          "code": 7325030,
          "regencyCode": 7325,
          "name": "TOMONI"
        },
        {
          "code": 7325031,
          "regencyCode": 7325,
          "name": "TOMONI TIMUR"
        },
        {
          "code": 7325040,
          "regencyCode": 7325,
          "name": "ANGKONA"
        },
        {
          "code": 7325050,
          "regencyCode": 7325,
          "name": "MALILI"
        },
        {
          "code": 7325060,
          "regencyCode": 7325,
          "name": "TOWUTI"
        },
        {
          "code": 7325070,
          "regencyCode": 7325,
          "name": "NUHA"
        },
        {
          "code": 7325071,
          "regencyCode": 7325,
          "name": "WASUPONDA"
        },
        {
          "code": 7325080,
          "regencyCode": 7325,
          "name": "MANGKUTANA"
        },
        {
          "code": 7325081,
          "regencyCode": 7325,
          "name": "KALAENA"
        },
        {
          "code": 7326010,
          "regencyCode": 7326,
          "name": "SOPAI"
        },
        {
          "code": 7326020,
          "regencyCode": 7326,
          "name": "KESU"
        },
        {
          "code": 7326030,
          "regencyCode": 7326,
          "name": "SANGGALANGI"
        },
        {
          "code": 7326040,
          "regencyCode": 7326,
          "name": "BUNTAO"
        },
        {
          "code": 7326050,
          "regencyCode": 7326,
          "name": "RANTEBUA"
        },
        {
          "code": 7326060,
          "regencyCode": 7326,
          "name": "NANGGALA"
        },
        {
          "code": 7326070,
          "regencyCode": 7326,
          "name": "TONDON"
        },
        {
          "code": 7326080,
          "regencyCode": 7326,
          "name": "TALLUNGLIPU"
        },
        {
          "code": 7326090,
          "regencyCode": 7326,
          "name": "RANTEPAO"
        },
        {
          "code": 7326100,
          "regencyCode": 7326,
          "name": "TIKALA"
        },
        {
          "code": 7326110,
          "regencyCode": 7326,
          "name": "SESEAN"
        },
        {
          "code": 7326120,
          "regencyCode": 7326,
          "name": "BALUSU"
        },
        {
          "code": 7326130,
          "regencyCode": 7326,
          "name": "SA'DAN"
        },
        {
          "code": 7326140,
          "regencyCode": 7326,
          "name": "BENGKELEKILA"
        },
        {
          "code": 7326150,
          "regencyCode": 7326,
          "name": "SESEAN SULOARA"
        },
        {
          "code": 7326160,
          "regencyCode": 7326,
          "name": "KAPALA PITU"
        },
        {
          "code": 7326170,
          "regencyCode": 7326,
          "name": "DENDE PIONGAN NAPO"
        },
        {
          "code": 7326180,
          "regencyCode": 7326,
          "name": "AWAN RANTE KARUA"
        },
        {
          "code": 7326190,
          "regencyCode": 7326,
          "name": "RINDINGALO"
        },
        {
          "code": 7326200,
          "regencyCode": 7326,
          "name": "BUNTU PEPASAN"
        },
        {
          "code": 7326210,
          "regencyCode": 7326,
          "name": "BARUPPU"
        },
        {
          "code": 7371010,
          "regencyCode": 7371,
          "name": "MARISO"
        },
        {
          "code": 7371020,
          "regencyCode": 7371,
          "name": "MAMAJANG"
        },
        {
          "code": 7371030,
          "regencyCode": 7371,
          "name": "TAMALATE"
        },
        {
          "code": 7371031,
          "regencyCode": 7371,
          "name": "RAPPOCINI"
        },
        {
          "code": 7371040,
          "regencyCode": 7371,
          "name": "MAKASSAR"
        },
        {
          "code": 7371050,
          "regencyCode": 7371,
          "name": "UJUNG PANDANG"
        },
        {
          "code": 7371060,
          "regencyCode": 7371,
          "name": "WAJO"
        },
        {
          "code": 7371070,
          "regencyCode": 7371,
          "name": "BONTOALA"
        },
        {
          "code": 7371080,
          "regencyCode": 7371,
          "name": "UJUNG TANAH"
        },
        {
          "code": 7371090,
          "regencyCode": 7371,
          "name": "TALLO"
        },
        {
          "code": 7371100,
          "regencyCode": 7371,
          "name": "PANAKKUKANG"
        },
        {
          "code": 7371101,
          "regencyCode": 7371,
          "name": "MANGGALA"
        },
        {
          "code": 7371110,
          "regencyCode": 7371,
          "name": "BIRING KANAYA"
        },
        {
          "code": 7371111,
          "regencyCode": 7371,
          "name": "TAMALANREA"
        },
        {
          "code": 7372010,
          "regencyCode": 7372,
          "name": "BACUKIKI"
        },
        {
          "code": 7372011,
          "regencyCode": 7372,
          "name": "BACUKIKI BARAT"
        },
        {
          "code": 7372020,
          "regencyCode": 7372,
          "name": "UJUNG"
        },
        {
          "code": 7372030,
          "regencyCode": 7372,
          "name": "SOREANG"
        },
        {
          "code": 7373010,
          "regencyCode": 7373,
          "name": "WARA SELATAN"
        },
        {
          "code": 7373011,
          "regencyCode": 7373,
          "name": "SENDANA"
        },
        {
          "code": 7373020,
          "regencyCode": 7373,
          "name": "WARA"
        },
        {
          "code": 7373021,
          "regencyCode": 7373,
          "name": "WARA TIMUR"
        },
        {
          "code": 7373022,
          "regencyCode": 7373,
          "name": "MUNGKAJANG"
        },
        {
          "code": 7373030,
          "regencyCode": 7373,
          "name": "WARA UTARA"
        },
        {
          "code": 7373031,
          "regencyCode": 7373,
          "name": "BARA"
        },
        {
          "code": 7373040,
          "regencyCode": 7373,
          "name": "TELLUWANUA"
        },
        {
          "code": 7373041,
          "regencyCode": 7373,
          "name": "WARA BARAT"
        },
        {
          "code": 7401050,
          "regencyCode": 7401,
          "name": "LASALIMU"
        },
        {
          "code": 7401051,
          "regencyCode": 7401,
          "name": "LASALIMU SELATAN"
        },
        {
          "code": 7401052,
          "regencyCode": 7401,
          "name": "SIONTAPINA"
        },
        {
          "code": 7401060,
          "regencyCode": 7401,
          "name": "PASAR WAJO"
        },
        {
          "code": 7401061,
          "regencyCode": 7401,
          "name": "WOLOWA"
        },
        {
          "code": 7401062,
          "regencyCode": 7401,
          "name": "WABULA"
        },
        {
          "code": 7401110,
          "regencyCode": 7401,
          "name": "KAPONTORI"
        },
        {
          "code": 7402010,
          "regencyCode": 7402,
          "name": "TONGKUNO"
        },
        {
          "code": 7402011,
          "regencyCode": 7402,
          "name": "TONGKUNO SELATAN"
        },
        {
          "code": 7402020,
          "regencyCode": 7402,
          "name": "PARIGI"
        },
        {
          "code": 7402021,
          "regencyCode": 7402,
          "name": "BONE"
        },
        {
          "code": 7402022,
          "regencyCode": 7402,
          "name": "MAROBO"
        },
        {
          "code": 7402030,
          "regencyCode": 7402,
          "name": "KABAWO"
        },
        {
          "code": 7402031,
          "regencyCode": 7402,
          "name": "KABANGKA"
        },
        {
          "code": 7402032,
          "regencyCode": 7402,
          "name": "KONTUKOWUNA"
        },
        {
          "code": 7402061,
          "regencyCode": 7402,
          "name": "KONTUNAGA"
        },
        {
          "code": 7402062,
          "regencyCode": 7402,
          "name": "WATOPUTE"
        },
        {
          "code": 7402070,
          "regencyCode": 7402,
          "name": "KATOBU"
        },
        {
          "code": 7402071,
          "regencyCode": 7402,
          "name": "LOHIA"
        },
        {
          "code": 7402072,
          "regencyCode": 7402,
          "name": "DURUKA"
        },
        {
          "code": 7402073,
          "regencyCode": 7402,
          "name": "BATALAIWORU"
        },
        {
          "code": 7402080,
          "regencyCode": 7402,
          "name": "NAPABALANO"
        },
        {
          "code": 7402081,
          "regencyCode": 7402,
          "name": "LASALEPA"
        },
        {
          "code": 7402083,
          "regencyCode": 7402,
          "name": "TOWEA"
        },
        {
          "code": 7402090,
          "regencyCode": 7402,
          "name": "WAKORUMBA SELATAN"
        },
        {
          "code": 7402091,
          "regencyCode": 7402,
          "name": "PASIR PUTIH"
        },
        {
          "code": 7402092,
          "regencyCode": 7402,
          "name": "PASI KOLAGA"
        },
        {
          "code": 7402111,
          "regencyCode": 7402,
          "name": "MALIGANO"
        },
        {
          "code": 7402112,
          "regencyCode": 7402,
          "name": "BATUKARA"
        },
        {
          "code": 7403090,
          "regencyCode": 7403,
          "name": "SOROPIA"
        },
        {
          "code": 7403091,
          "regencyCode": 7403,
          "name": "LALONGGASUMEETO"
        },
        {
          "code": 7403100,
          "regencyCode": 7403,
          "name": "SAMPARA"
        },
        {
          "code": 7403101,
          "regencyCode": 7403,
          "name": "BONDOALA"
        },
        {
          "code": 7403102,
          "regencyCode": 7403,
          "name": "BESULUTU"
        },
        {
          "code": 7403103,
          "regencyCode": 7403,
          "name": "KAPOIALA"
        },
        {
          "code": 7403104,
          "regencyCode": 7403,
          "name": "ANGGALOMOARE"
        },
        {
          "code": 7403105,
          "regencyCode": 7403,
          "name": "MOROSI"
        },
        {
          "code": 7403130,
          "regencyCode": 7403,
          "name": "LAMBUYA"
        },
        {
          "code": 7403131,
          "regencyCode": 7403,
          "name": "UEPAI"
        },
        {
          "code": 7403132,
          "regencyCode": 7403,
          "name": "PURIALA"
        },
        {
          "code": 7403133,
          "regencyCode": 7403,
          "name": "ONEMBUTE"
        },
        {
          "code": 7403140,
          "regencyCode": 7403,
          "name": "PONDIDAHA"
        },
        {
          "code": 7403141,
          "regencyCode": 7403,
          "name": "WONGGEDUKU"
        },
        {
          "code": 7403142,
          "regencyCode": 7403,
          "name": "AMONGGEDO"
        },
        {
          "code": 7403143,
          "regencyCode": 7403,
          "name": "WONGGEDUKU BARAT"
        },
        {
          "code": 7403150,
          "regencyCode": 7403,
          "name": "WAWOTOBI"
        },
        {
          "code": 7403151,
          "regencyCode": 7403,
          "name": "MELUHU"
        },
        {
          "code": 7403152,
          "regencyCode": 7403,
          "name": "KONAWE"
        },
        {
          "code": 7403170,
          "regencyCode": 7403,
          "name": "UNAAHA"
        },
        {
          "code": 7403171,
          "regencyCode": 7403,
          "name": "ANGGABERI"
        },
        {
          "code": 7403180,
          "regencyCode": 7403,
          "name": "ABUKI"
        },
        {
          "code": 7403181,
          "regencyCode": 7403,
          "name": "LATOMA"
        },
        {
          "code": 7403182,
          "regencyCode": 7403,
          "name": "TONGAUNA"
        },
        {
          "code": 7403183,
          "regencyCode": 7403,
          "name": "ASINUA"
        },
        {
          "code": 7403184,
          "regencyCode": 7403,
          "name": "PADANGGUNI"
        },
        {
          "code": 7403185,
          "regencyCode": 7403,
          "name": "TONGAUNA UTARA"
        },
        {
          "code": 7403193,
          "regencyCode": 7403,
          "name": "ROUTA"
        },
        {
          "code": 7404010,
          "regencyCode": 7404,
          "name": "WATUBANGGA"
        },
        {
          "code": 7404011,
          "regencyCode": 7404,
          "name": "TANGGETADA"
        },
        {
          "code": 7404012,
          "regencyCode": 7404,
          "name": "TOARI"
        },
        {
          "code": 7404013,
          "regencyCode": 7404,
          "name": "POLINGGONA"
        },
        {
          "code": 7404020,
          "regencyCode": 7404,
          "name": "POMALAA"
        },
        {
          "code": 7404030,
          "regencyCode": 7404,
          "name": "WUNDULAKO"
        },
        {
          "code": 7404031,
          "regencyCode": 7404,
          "name": "BAULA"
        },
        {
          "code": 7404060,
          "regencyCode": 7404,
          "name": "KOLAKA"
        },
        {
          "code": 7404061,
          "regencyCode": 7404,
          "name": "LATAMBAGA"
        },
        {
          "code": 7404070,
          "regencyCode": 7404,
          "name": "WOLO"
        },
        {
          "code": 7404071,
          "regencyCode": 7404,
          "name": "SAMATURU"
        },
        {
          "code": 7404072,
          "regencyCode": 7404,
          "name": "IWOIMENDAA"
        },
        {
          "code": 7405010,
          "regencyCode": 7405,
          "name": "TINANGGEA"
        },
        {
          "code": 7405011,
          "regencyCode": 7405,
          "name": "LALEMBUU"
        },
        {
          "code": 7405020,
          "regencyCode": 7405,
          "name": "ANDOOLO"
        },
        {
          "code": 7405021,
          "regencyCode": 7405,
          "name": "BUKE"
        },
        {
          "code": 7405022,
          "regencyCode": 7405,
          "name": "ANDOOLO BARAT"
        },
        {
          "code": 7405030,
          "regencyCode": 7405,
          "name": "PALANGGA"
        },
        {
          "code": 7405031,
          "regencyCode": 7405,
          "name": "PALANGGA SELATAN"
        },
        {
          "code": 7405032,
          "regencyCode": 7405,
          "name": "BAITO"
        },
        {
          "code": 7405040,
          "regencyCode": 7405,
          "name": "LAINEA"
        },
        {
          "code": 7405041,
          "regencyCode": 7405,
          "name": "LAEYA"
        },
        {
          "code": 7405050,
          "regencyCode": 7405,
          "name": "KOLONO"
        },
        {
          "code": 7405051,
          "regencyCode": 7405,
          "name": "KOLONO TIMUR"
        },
        {
          "code": 7405060,
          "regencyCode": 7405,
          "name": "LAONTI"
        },
        {
          "code": 7405070,
          "regencyCode": 7405,
          "name": "MORAMO"
        },
        {
          "code": 7405071,
          "regencyCode": 7405,
          "name": "MORAMO UTARA"
        },
        {
          "code": 7405080,
          "regencyCode": 7405,
          "name": "KONDA"
        },
        {
          "code": 7405081,
          "regencyCode": 7405,
          "name": "WOLASI"
        },
        {
          "code": 7405090,
          "regencyCode": 7405,
          "name": "RANOMEETO"
        },
        {
          "code": 7405091,
          "regencyCode": 7405,
          "name": "RANOMEETO BARAT"
        },
        {
          "code": 7405100,
          "regencyCode": 7405,
          "name": "LANDONO"
        },
        {
          "code": 7405101,
          "regencyCode": 7405,
          "name": "MOWILA"
        },
        {
          "code": 7405102,
          "regencyCode": 7405,
          "name": "SABULAKOA"
        },
        {
          "code": 7405110,
          "regencyCode": 7405,
          "name": "ANGATA"
        },
        {
          "code": 7405111,
          "regencyCode": 7405,
          "name": "BENUA"
        },
        {
          "code": 7405112,
          "regencyCode": 7405,
          "name": "BASALA"
        },
        {
          "code": 7406010,
          "regencyCode": 7406,
          "name": "KABAENA"
        },
        {
          "code": 7406011,
          "regencyCode": 7406,
          "name": "KABAENA UTARA"
        },
        {
          "code": 7406012,
          "regencyCode": 7406,
          "name": "KABAENA SELATAN"
        },
        {
          "code": 7406013,
          "regencyCode": 7406,
          "name": "KABAENA BARAT"
        },
        {
          "code": 7406020,
          "regencyCode": 7406,
          "name": "KABAENA TIMUR"
        },
        {
          "code": 7406021,
          "regencyCode": 7406,
          "name": "KABAENA TENGAH"
        },
        {
          "code": 7406030,
          "regencyCode": 7406,
          "name": "RUMBIA"
        },
        {
          "code": 7406031,
          "regencyCode": 7406,
          "name": "MATA OLEO"
        },
        {
          "code": 7406032,
          "regencyCode": 7406,
          "name": "KEP. MASALOKA RAYA"
        },
        {
          "code": 7406033,
          "regencyCode": 7406,
          "name": "RUMBIA TENGAH"
        },
        {
          "code": 7406040,
          "regencyCode": 7406,
          "name": "RAROWATU"
        },
        {
          "code": 7406041,
          "regencyCode": 7406,
          "name": "RAROWATU UTARA"
        },
        {
          "code": 7406042,
          "regencyCode": 7406,
          "name": "MATA USU"
        },
        {
          "code": 7406043,
          "regencyCode": 7406,
          "name": "LANTARI JAYA"
        },
        {
          "code": 7406050,
          "regencyCode": 7406,
          "name": "POLEANG TIMUR"
        },
        {
          "code": 7406051,
          "regencyCode": 7406,
          "name": "POLEANG UTARA"
        },
        {
          "code": 7406052,
          "regencyCode": 7406,
          "name": "POLEANG SELATAN"
        },
        {
          "code": 7406053,
          "regencyCode": 7406,
          "name": "POLEANG TENGGARA"
        },
        {
          "code": 7406060,
          "regencyCode": 7406,
          "name": "POLEANG"
        },
        {
          "code": 7406061,
          "regencyCode": 7406,
          "name": "POLEANG BARAT"
        },
        {
          "code": 7406062,
          "regencyCode": 7406,
          "name": "TONTONUNU"
        },
        {
          "code": 7406063,
          "regencyCode": 7406,
          "name": "POLEANG TENGAH"
        },
        {
          "code": 7407010,
          "regencyCode": 7407,
          "name": "BINONGKO"
        },
        {
          "code": 7407011,
          "regencyCode": 7407,
          "name": "TOGO BINONGKO"
        },
        {
          "code": 7407020,
          "regencyCode": 7407,
          "name": "TOMIA"
        },
        {
          "code": 7407021,
          "regencyCode": 7407,
          "name": "TOMIA TIMUR"
        },
        {
          "code": 7407030,
          "regencyCode": 7407,
          "name": "KALEDUPA"
        },
        {
          "code": 7407031,
          "regencyCode": 7407,
          "name": "KALEDUPA SELATAN"
        },
        {
          "code": 7407040,
          "regencyCode": 7407,
          "name": "WANGI-WANGI"
        },
        {
          "code": 7407050,
          "regencyCode": 7407,
          "name": "WANGI-WANGI SELATAN"
        },
        {
          "code": 7408010,
          "regencyCode": 7408,
          "name": "RANTEANGIN"
        },
        {
          "code": 7408011,
          "regencyCode": 7408,
          "name": "LAMBAI"
        },
        {
          "code": 7408012,
          "regencyCode": 7408,
          "name": "WAWO"
        },
        {
          "code": 7408020,
          "regencyCode": 7408,
          "name": "LASUSUA"
        },
        {
          "code": 7408021,
          "regencyCode": 7408,
          "name": "KATOI"
        },
        {
          "code": 7408030,
          "regencyCode": 7408,
          "name": "KODEOHA"
        },
        {
          "code": 7408031,
          "regencyCode": 7408,
          "name": "TIWU"
        },
        {
          "code": 7408040,
          "regencyCode": 7408,
          "name": "NGAPA"
        },
        {
          "code": 7408041,
          "regencyCode": 7408,
          "name": "WATUNOHU"
        },
        {
          "code": 7408050,
          "regencyCode": 7408,
          "name": "PAKUE"
        },
        {
          "code": 7408051,
          "regencyCode": 7408,
          "name": "PAKUE UTARA"
        },
        {
          "code": 7408052,
          "regencyCode": 7408,
          "name": "PAKUE TENGAH"
        },
        {
          "code": 7408060,
          "regencyCode": 7408,
          "name": "BATU PUTIH"
        },
        {
          "code": 7408061,
          "regencyCode": 7408,
          "name": "POREHU"
        },
        {
          "code": 7408062,
          "regencyCode": 7408,
          "name": "TOLALA"
        },
        {
          "code": 7409100,
          "regencyCode": 7409,
          "name": "BONEGUNU"
        },
        {
          "code": 7409101,
          "regencyCode": 7409,
          "name": "KAMBOWA"
        },
        {
          "code": 7409110,
          "regencyCode": 7409,
          "name": "WAKORUMBA"
        },
        {
          "code": 7409120,
          "regencyCode": 7409,
          "name": "KULISUSU"
        },
        {
          "code": 7409121,
          "regencyCode": 7409,
          "name": "KULISUSU BARAT"
        },
        {
          "code": 7409122,
          "regencyCode": 7409,
          "name": "KULISUSU UTARA"
        },
        {
          "code": 7410010,
          "regencyCode": 7410,
          "name": "SAWA"
        },
        {
          "code": 7410011,
          "regencyCode": 7410,
          "name": "MOTUI"
        },
        {
          "code": 7410020,
          "regencyCode": 7410,
          "name": "LEMBO"
        },
        {
          "code": 7410030,
          "regencyCode": 7410,
          "name": "LASOLO"
        },
        {
          "code": 7410040,
          "regencyCode": 7410,
          "name": "MOLAWE"
        },
        {
          "code": 7410050,
          "regencyCode": 7410,
          "name": "ASERA"
        },
        {
          "code": 7410051,
          "regencyCode": 7410,
          "name": "ANDOWIA"
        },
        {
          "code": 7410052,
          "regencyCode": 7410,
          "name": "OHEO"
        },
        {
          "code": 7410060,
          "regencyCode": 7410,
          "name": "LANGGIKIMA"
        },
        {
          "code": 7410070,
          "regencyCode": 7410,
          "name": "WIWIRANO"
        },
        {
          "code": 7411010,
          "regencyCode": 7411,
          "name": "AERE"
        },
        {
          "code": 7411020,
          "regencyCode": 7411,
          "name": "LAMBANDIA"
        },
        {
          "code": 7411030,
          "regencyCode": 7411,
          "name": "POLI-POLIA"
        },
        {
          "code": 7411040,
          "regencyCode": 7411,
          "name": "DANGIA"
        },
        {
          "code": 7411050,
          "regencyCode": 7411,
          "name": "LADONGI"
        },
        {
          "code": 7411060,
          "regencyCode": 7411,
          "name": "LOEA"
        },
        {
          "code": 7411070,
          "regencyCode": 7411,
          "name": "TIRAWUTA"
        },
        {
          "code": 7411080,
          "regencyCode": 7411,
          "name": "LALOLAE"
        },
        {
          "code": 7411090,
          "regencyCode": 7411,
          "name": "MOWEWE"
        },
        {
          "code": 7411100,
          "regencyCode": 7411,
          "name": "TINONDO"
        },
        {
          "code": 7411110,
          "regencyCode": 7411,
          "name": "ULUIWOI"
        },
        {
          "code": 7411120,
          "regencyCode": 7411,
          "name": "UEESI"
        },
        {
          "code": 7412010,
          "regencyCode": 7412,
          "name": "WAWONII TENGGARA"
        },
        {
          "code": 7412020,
          "regencyCode": 7412,
          "name": "WAWONII TIMUR"
        },
        {
          "code": 7412030,
          "regencyCode": 7412,
          "name": "WAWONII TIMUR LAUT"
        },
        {
          "code": 7412040,
          "regencyCode": 7412,
          "name": "WAWONII UTARA"
        },
        {
          "code": 7412050,
          "regencyCode": 7412,
          "name": "WAWONII SELATAN"
        },
        {
          "code": 7412060,
          "regencyCode": 7412,
          "name": "WAWONII TENGAH"
        },
        {
          "code": 7412070,
          "regencyCode": 7412,
          "name": "WAWONII BARAT"
        },
        {
          "code": 7413010,
          "regencyCode": 7413,
          "name": "TIWORO KEPULAUAN"
        },
        {
          "code": 7413020,
          "regencyCode": 7413,
          "name": "MAGINTI"
        },
        {
          "code": 7413030,
          "regencyCode": 7413,
          "name": "TIWORO TENGAH"
        },
        {
          "code": 7413040,
          "regencyCode": 7413,
          "name": "TIWORO SELATAN"
        },
        {
          "code": 7413050,
          "regencyCode": 7413,
          "name": "TIWORO UTARA"
        },
        {
          "code": 7413060,
          "regencyCode": 7413,
          "name": "LAWA"
        },
        {
          "code": 7413070,
          "regencyCode": 7413,
          "name": "SAWERIGADI"
        },
        {
          "code": 7413080,
          "regencyCode": 7413,
          "name": "BARANGKA"
        },
        {
          "code": 7413090,
          "regencyCode": 7413,
          "name": "WA DAGA"
        },
        {
          "code": 7413100,
          "regencyCode": 7413,
          "name": "KUSAMBI"
        },
        {
          "code": 7413110,
          "regencyCode": 7413,
          "name": "NAPANO KUSAMBI"
        },
        {
          "code": 7414010,
          "regencyCode": 7414,
          "name": "TALAGA RAYA"
        },
        {
          "code": 7414020,
          "regencyCode": 7414,
          "name": "MAWASANGKA"
        },
        {
          "code": 7414030,
          "regencyCode": 7414,
          "name": "MAWASANGKA TENGAH"
        },
        {
          "code": 7414040,
          "regencyCode": 7414,
          "name": "MAWASANGKA TIMUR"
        },
        {
          "code": 7414050,
          "regencyCode": 7414,
          "name": "LAKUDO"
        },
        {
          "code": 7414060,
          "regencyCode": 7414,
          "name": "GU"
        },
        {
          "code": 7414070,
          "regencyCode": 7414,
          "name": "SANGIA WAMBULU"
        },
        {
          "code": 7415010,
          "regencyCode": 7415,
          "name": "BATU ATAS"
        },
        {
          "code": 7415020,
          "regencyCode": 7415,
          "name": "LAPANDEWA"
        },
        {
          "code": 7415030,
          "regencyCode": 7415,
          "name": "SAMPOLAWA"
        },
        {
          "code": 7415040,
          "regencyCode": 7415,
          "name": "BATAUGA"
        },
        {
          "code": 7415050,
          "regencyCode": 7415,
          "name": "SIOMPU BARAT"
        },
        {
          "code": 7415060,
          "regencyCode": 7415,
          "name": "SIOMPU"
        },
        {
          "code": 7415070,
          "regencyCode": 7415,
          "name": "KADATUA"
        },
        {
          "code": 7471010,
          "regencyCode": 7471,
          "name": "MANDONGA"
        },
        {
          "code": 7471011,
          "regencyCode": 7471,
          "name": "BARUGA"
        },
        {
          "code": 7471012,
          "regencyCode": 7471,
          "name": "PUUWATU"
        },
        {
          "code": 7471013,
          "regencyCode": 7471,
          "name": "KADIA"
        },
        {
          "code": 7471014,
          "regencyCode": 7471,
          "name": "WUA-WUA"
        },
        {
          "code": 7471020,
          "regencyCode": 7471,
          "name": "POASIA"
        },
        {
          "code": 7471021,
          "regencyCode": 7471,
          "name": "ABELI"
        },
        {
          "code": 7471022,
          "regencyCode": 7471,
          "name": "KAMBU"
        },
        {
          "code": 7471030,
          "regencyCode": 7471,
          "name": "KENDARI"
        },
        {
          "code": 7471031,
          "regencyCode": 7471,
          "name": "KENDARI BARAT"
        },
        {
          "code": 7472010,
          "regencyCode": 7472,
          "name": "BETOAMBARI"
        },
        {
          "code": 7472011,
          "regencyCode": 7472,
          "name": "MURHUM"
        },
        {
          "code": 7472012,
          "regencyCode": 7472,
          "name": "BATUPOARO"
        },
        {
          "code": 7472020,
          "regencyCode": 7472,
          "name": "WOLIO"
        },
        {
          "code": 7472021,
          "regencyCode": 7472,
          "name": "KOKALUKUNA"
        },
        {
          "code": 7472030,
          "regencyCode": 7472,
          "name": "SORAWOLIO"
        },
        {
          "code": 7472040,
          "regencyCode": 7472,
          "name": "BUNGI"
        },
        {
          "code": 7472041,
          "regencyCode": 7472,
          "name": "LEA-LEA"
        },
        {
          "code": 7501031,
          "regencyCode": 7501,
          "name": "MANANGGU"
        },
        {
          "code": 7501040,
          "regencyCode": 7501,
          "name": "TILAMUTA"
        },
        {
          "code": 7501041,
          "regencyCode": 7501,
          "name": "DULUPI"
        },
        {
          "code": 7501042,
          "regencyCode": 7501,
          "name": "BOTUMOITO"
        },
        {
          "code": 7501050,
          "regencyCode": 7501,
          "name": "PAGUYAMAN"
        },
        {
          "code": 7501051,
          "regencyCode": 7501,
          "name": "WONOSARI"
        },
        {
          "code": 7501052,
          "regencyCode": 7501,
          "name": "PAGUYAMAN PANTAI"
        },
        {
          "code": 7502010,
          "regencyCode": 7502,
          "name": "BATUDAA PANTAI"
        },
        {
          "code": 7502011,
          "regencyCode": 7502,
          "name": "BILUHU"
        },
        {
          "code": 7502020,
          "regencyCode": 7502,
          "name": "BATUDAA"
        },
        {
          "code": 7502021,
          "regencyCode": 7502,
          "name": "BONGOMEME"
        },
        {
          "code": 7502022,
          "regencyCode": 7502,
          "name": "TABONGO"
        },
        {
          "code": 7502023,
          "regencyCode": 7502,
          "name": "DUNGALIYO"
        },
        {
          "code": 7502030,
          "regencyCode": 7502,
          "name": "TIBAWA"
        },
        {
          "code": 7502031,
          "regencyCode": 7502,
          "name": "PULUBALA"
        },
        {
          "code": 7502040,
          "regencyCode": 7502,
          "name": "BOLIYOHUTO"
        },
        {
          "code": 7502041,
          "regencyCode": 7502,
          "name": "MOOTILANGO"
        },
        {
          "code": 7502042,
          "regencyCode": 7502,
          "name": "TOLANGOHULA"
        },
        {
          "code": 7502043,
          "regencyCode": 7502,
          "name": "ASPARAGA"
        },
        {
          "code": 7502044,
          "regencyCode": 7502,
          "name": "BILATO"
        },
        {
          "code": 7502070,
          "regencyCode": 7502,
          "name": "LIMBOTO"
        },
        {
          "code": 7502071,
          "regencyCode": 7502,
          "name": "LIMBOTO BARAT"
        },
        {
          "code": 7502080,
          "regencyCode": 7502,
          "name": "TELAGA"
        },
        {
          "code": 7502081,
          "regencyCode": 7502,
          "name": "TELAGA BIRU"
        },
        {
          "code": 7502082,
          "regencyCode": 7502,
          "name": "TILANGO"
        },
        {
          "code": 7502083,
          "regencyCode": 7502,
          "name": "TELAGA JAYA"
        },
        {
          "code": 7503010,
          "regencyCode": 7503,
          "name": "POPAYATO"
        },
        {
          "code": 7503011,
          "regencyCode": 7503,
          "name": "POPAYATO BARAT"
        },
        {
          "code": 7503012,
          "regencyCode": 7503,
          "name": "POPAYATO TIMUR"
        },
        {
          "code": 7503020,
          "regencyCode": 7503,
          "name": "LEMITO"
        },
        {
          "code": 7503021,
          "regencyCode": 7503,
          "name": "WANGGARASI"
        },
        {
          "code": 7503030,
          "regencyCode": 7503,
          "name": "MARISA"
        },
        {
          "code": 7503031,
          "regencyCode": 7503,
          "name": "PATILANGGIO"
        },
        {
          "code": 7503032,
          "regencyCode": 7503,
          "name": "BUNTULIA"
        },
        {
          "code": 7503033,
          "regencyCode": 7503,
          "name": "DUHIADAA"
        },
        {
          "code": 7503040,
          "regencyCode": 7503,
          "name": "RANDANGAN"
        },
        {
          "code": 7503041,
          "regencyCode": 7503,
          "name": "TALUDITI"
        },
        {
          "code": 7503050,
          "regencyCode": 7503,
          "name": "PAGUAT"
        },
        {
          "code": 7503051,
          "regencyCode": 7503,
          "name": "DENGILO"
        },
        {
          "code": 7504010,
          "regencyCode": 7504,
          "name": "TAPA"
        },
        {
          "code": 7504011,
          "regencyCode": 7504,
          "name": "BULANGO UTARA"
        },
        {
          "code": 7504012,
          "regencyCode": 7504,
          "name": "BULANGO SELATAN"
        },
        {
          "code": 7504013,
          "regencyCode": 7504,
          "name": "BULANGO TIMUR"
        },
        {
          "code": 7504014,
          "regencyCode": 7504,
          "name": "BULANGO ULU"
        },
        {
          "code": 7504020,
          "regencyCode": 7504,
          "name": "KABILA"
        },
        {
          "code": 7504021,
          "regencyCode": 7504,
          "name": "BOTU PINGGE"
        },
        {
          "code": 7504022,
          "regencyCode": 7504,
          "name": "TILONGKABILA"
        },
        {
          "code": 7504030,
          "regencyCode": 7504,
          "name": "SUWAWA"
        },
        {
          "code": 7504031,
          "regencyCode": 7504,
          "name": "SUWAWA SELATAN"
        },
        {
          "code": 7504032,
          "regencyCode": 7504,
          "name": "SUWAWA TIMUR"
        },
        {
          "code": 7504033,
          "regencyCode": 7504,
          "name": "SUWAWA TENGAH"
        },
        {
          "code": 7504034,
          "regencyCode": 7504,
          "name": "PINOGU"
        },
        {
          "code": 7504040,
          "regencyCode": 7504,
          "name": "BONEPANTAI"
        },
        {
          "code": 7504041,
          "regencyCode": 7504,
          "name": "KABILA BONE"
        },
        {
          "code": 7504042,
          "regencyCode": 7504,
          "name": "BONE RAYA"
        },
        {
          "code": 7504043,
          "regencyCode": 7504,
          "name": "BONE"
        },
        {
          "code": 7504044,
          "regencyCode": 7504,
          "name": "BULAWA"
        },
        {
          "code": 7505010,
          "regencyCode": 7505,
          "name": "ATINGGOLA"
        },
        {
          "code": 7505011,
          "regencyCode": 7505,
          "name": "GENTUMA RAYA"
        },
        {
          "code": 7505020,
          "regencyCode": 7505,
          "name": "KWANDANG"
        },
        {
          "code": 7505021,
          "regencyCode": 7505,
          "name": "TOMILITO"
        },
        {
          "code": 7505022,
          "regencyCode": 7505,
          "name": "PONELO KEPULAUAN"
        },
        {
          "code": 7505030,
          "regencyCode": 7505,
          "name": "ANGGREK"
        },
        {
          "code": 7505031,
          "regencyCode": 7505,
          "name": "MONANO"
        },
        {
          "code": 7505040,
          "regencyCode": 7505,
          "name": "SUMALATA"
        },
        {
          "code": 7505041,
          "regencyCode": 7505,
          "name": "SUMALATA TIMUR"
        },
        {
          "code": 7505050,
          "regencyCode": 7505,
          "name": "TOLINGGULA"
        },
        {
          "code": 7505051,
          "regencyCode": 7505,
          "name": "BIAU"
        },
        {
          "code": 7571010,
          "regencyCode": 7571,
          "name": "KOTA BARAT"
        },
        {
          "code": 7571011,
          "regencyCode": 7571,
          "name": "DUNGINGI"
        },
        {
          "code": 7571020,
          "regencyCode": 7571,
          "name": "KOTA SELATAN"
        },
        {
          "code": 7571021,
          "regencyCode": 7571,
          "name": "KOTA TIMUR"
        },
        {
          "code": 7571022,
          "regencyCode": 7571,
          "name": "HULONTHALANGI"
        },
        {
          "code": 7571023,
          "regencyCode": 7571,
          "name": "DUMBO RAYA"
        },
        {
          "code": 7571030,
          "regencyCode": 7571,
          "name": "KOTA UTARA"
        },
        {
          "code": 7571031,
          "regencyCode": 7571,
          "name": "KOTA TENGAH"
        },
        {
          "code": 7571032,
          "regencyCode": 7571,
          "name": "SIPATANA"
        },
        {
          "code": 7601010,
          "regencyCode": 7601,
          "name": "BANGGAE"
        },
        {
          "code": 7601011,
          "regencyCode": 7601,
          "name": "BANGGAE TIMUR"
        },
        {
          "code": 7601020,
          "regencyCode": 7601,
          "name": "PAMBOANG"
        },
        {
          "code": 7601030,
          "regencyCode": 7601,
          "name": "SENDANA"
        },
        {
          "code": 7601031,
          "regencyCode": 7601,
          "name": "TAMMERODO"
        },
        {
          "code": 7601033,
          "regencyCode": 7601,
          "name": "TUBO SENDANA"
        },
        {
          "code": 7601040,
          "regencyCode": 7601,
          "name": "MALUNDA"
        },
        {
          "code": 7601041,
          "regencyCode": 7601,
          "name": "ULUMANDA"
        },
        {
          "code": 7602010,
          "regencyCode": 7602,
          "name": "TINAMBUNG"
        },
        {
          "code": 7602011,
          "regencyCode": 7602,
          "name": "BALANIPA"
        },
        {
          "code": 7602012,
          "regencyCode": 7602,
          "name": "LIMBORO"
        },
        {
          "code": 7602020,
          "regencyCode": 7602,
          "name": "TUBBI TARAMANU"
        },
        {
          "code": 7602021,
          "regencyCode": 7602,
          "name": "ALU"
        },
        {
          "code": 7602030,
          "regencyCode": 7602,
          "name": "CAMPALAGIAN"
        },
        {
          "code": 7602031,
          "regencyCode": 7602,
          "name": "LUYO"
        },
        {
          "code": 7602040,
          "regencyCode": 7602,
          "name": "WONOMULYO"
        },
        {
          "code": 7602041,
          "regencyCode": 7602,
          "name": "MAPILLI"
        },
        {
          "code": 7602042,
          "regencyCode": 7602,
          "name": "TAPANGO"
        },
        {
          "code": 7602043,
          "regencyCode": 7602,
          "name": "MATAKALI"
        },
        {
          "code": 7602044,
          "regencyCode": 7602,
          "name": "B U L O"
        },
        {
          "code": 7602050,
          "regencyCode": 7602,
          "name": "POLEWALI"
        },
        {
          "code": 7602051,
          "regencyCode": 7602,
          "name": "BINUANG"
        },
        {
          "code": 7602052,
          "regencyCode": 7602,
          "name": "ANREAPI"
        },
        {
          "code": 7602061,
          "regencyCode": 7602,
          "name": "MATANGNGA"
        },
        {
          "code": 7603010,
          "regencyCode": 7603,
          "name": "SUMARORONG"
        },
        {
          "code": 7603020,
          "regencyCode": 7603,
          "name": "MESSAWA"
        },
        {
          "code": 7603030,
          "regencyCode": 7603,
          "name": "PANA"
        },
        {
          "code": 7603031,
          "regencyCode": 7603,
          "name": "NOSU"
        },
        {
          "code": 7603040,
          "regencyCode": 7603,
          "name": "TABANG"
        },
        {
          "code": 7603050,
          "regencyCode": 7603,
          "name": "MAMASA"
        },
        {
          "code": 7603060,
          "regencyCode": 7603,
          "name": "TANDUK KALUA"
        },
        {
          "code": 7603061,
          "regencyCode": 7603,
          "name": "BALLA"
        },
        {
          "code": 7603070,
          "regencyCode": 7603,
          "name": "SESENAPADANG"
        },
        {
          "code": 7603071,
          "regencyCode": 7603,
          "name": "TAWALIAN"
        },
        {
          "code": 7603080,
          "regencyCode": 7603,
          "name": "MAMBI"
        },
        {
          "code": 7603081,
          "regencyCode": 7603,
          "name": "BAMBANG"
        },
        {
          "code": 7603082,
          "regencyCode": 7603,
          "name": "RANTEBULAHAN TIMUR"
        },
        {
          "code": 7603083,
          "regencyCode": 7603,
          "name": "MEHALAAN"
        },
        {
          "code": 7603090,
          "regencyCode": 7603,
          "name": "ARALLE"
        },
        {
          "code": 7603091,
          "regencyCode": 7603,
          "name": "BUNTU MALANGKA"
        },
        {
          "code": 7603100,
          "regencyCode": 7603,
          "name": "TABULAHAN"
        },
        {
          "code": 7604010,
          "regencyCode": 7604,
          "name": "TAPALANG"
        },
        {
          "code": 7604011,
          "regencyCode": 7604,
          "name": "TAPALANG BARAT"
        },
        {
          "code": 7604020,
          "regencyCode": 7604,
          "name": "MAMUJU"
        },
        {
          "code": 7604022,
          "regencyCode": 7604,
          "name": "SIMBORO"
        },
        {
          "code": 7604023,
          "regencyCode": 7604,
          "name": "BALABALAKANG"
        },
        {
          "code": 7604030,
          "regencyCode": 7604,
          "name": "KALUKKU"
        },
        {
          "code": 7604031,
          "regencyCode": 7604,
          "name": "PAPALANG"
        },
        {
          "code": 7604032,
          "regencyCode": 7604,
          "name": "SAMPAGA"
        },
        {
          "code": 7604033,
          "regencyCode": 7604,
          "name": "TOMMO"
        },
        {
          "code": 7604040,
          "regencyCode": 7604,
          "name": "KALUMPANG"
        },
        {
          "code": 7604041,
          "regencyCode": 7604,
          "name": "BONEHAU"
        },
        {
          "code": 7605010,
          "regencyCode": 7605,
          "name": "SARUDU"
        },
        {
          "code": 7605011,
          "regencyCode": 7605,
          "name": "DAPURANG"
        },
        {
          "code": 7605012,
          "regencyCode": 7605,
          "name": "DURIPOKU"
        },
        {
          "code": 7605020,
          "regencyCode": 7605,
          "name": "BARAS"
        },
        {
          "code": 7605021,
          "regencyCode": 7605,
          "name": "BULU TABA"
        },
        {
          "code": 7605022,
          "regencyCode": 7605,
          "name": "LARIANG"
        },
        {
          "code": 7605030,
          "regencyCode": 7605,
          "name": "PASANGKAYU"
        },
        {
          "code": 7605031,
          "regencyCode": 7605,
          "name": "TIKKE RAYA"
        },
        {
          "code": 7605032,
          "regencyCode": 7605,
          "name": "PEDONGGA"
        },
        {
          "code": 7605040,
          "regencyCode": 7605,
          "name": "BAMBALAMOTU"
        },
        {
          "code": 7605041,
          "regencyCode": 7605,
          "name": "BAMBAIRA"
        },
        {
          "code": 7605042,
          "regencyCode": 7605,
          "name": "SARJO"
        },
        {
          "code": 7606010,
          "regencyCode": 7606,
          "name": "PANGALE"
        },
        {
          "code": 7606020,
          "regencyCode": 7606,
          "name": "BUDONG-BUDONG"
        },
        {
          "code": 7606030,
          "regencyCode": 7606,
          "name": "TOBADAK"
        },
        {
          "code": 7606040,
          "regencyCode": 7606,
          "name": "TOPOYO"
        },
        {
          "code": 7606050,
          "regencyCode": 7606,
          "name": "KAROSSA"
        },
        {
          "code": 8101040,
          "regencyCode": 8101,
          "name": "TANIMBAR SELATAN"
        },
        {
          "code": 8101041,
          "regencyCode": 8101,
          "name": "WER TAMRIAN"
        },
        {
          "code": 8101042,
          "regencyCode": 8101,
          "name": "WER MAKTIAN"
        },
        {
          "code": 8101043,
          "regencyCode": 8101,
          "name": "SELARU"
        },
        {
          "code": 8101050,
          "regencyCode": 8101,
          "name": "TANIMBAR UTARA"
        },
        {
          "code": 8101051,
          "regencyCode": 8101,
          "name": "YARU"
        },
        {
          "code": 8101052,
          "regencyCode": 8101,
          "name": "WUAR LABOBAR"
        },
        {
          "code": 8101053,
          "regencyCode": 8101,
          "name": "NIRUNMAS"
        },
        {
          "code": 8101054,
          "regencyCode": 8101,
          "name": "KORMOMOLIN"
        },
        {
          "code": 8101055,
          "regencyCode": 8101,
          "name": "MOLU MARU"
        },
        {
          "code": 8102010,
          "regencyCode": 8102,
          "name": "KEI KECIL"
        },
        {
          "code": 8102012,
          "regencyCode": 8102,
          "name": "KEI KECIL BARAT"
        },
        {
          "code": 8102013,
          "regencyCode": 8102,
          "name": "KEI KECIL TIMUR"
        },
        {
          "code": 8102014,
          "regencyCode": 8102,
          "name": "HOAT SORBAY"
        },
        {
          "code": 8102015,
          "regencyCode": 8102,
          "name": "MANYEUW"
        },
        {
          "code": 8102016,
          "regencyCode": 8102,
          "name": "KEI KECIL TIMUR SELATAN"
        },
        {
          "code": 8102020,
          "regencyCode": 8102,
          "name": "KEI BESAR"
        },
        {
          "code": 8102021,
          "regencyCode": 8102,
          "name": "KEI BESAR UTARA TIMUR"
        },
        {
          "code": 8102022,
          "regencyCode": 8102,
          "name": "KEI BESAR SELATAN"
        },
        {
          "code": 8102023,
          "regencyCode": 8102,
          "name": "KEI BESAR UTARA BARAT"
        },
        {
          "code": 8102024,
          "regencyCode": 8102,
          "name": "KEI BESAR SELATAN BARAT"
        },
        {
          "code": 8103010,
          "regencyCode": 8103,
          "name": "BANDA"
        },
        {
          "code": 8103040,
          "regencyCode": 8103,
          "name": "TEHORU"
        },
        {
          "code": 8103041,
          "regencyCode": 8103,
          "name": "TELUTIH"
        },
        {
          "code": 8103050,
          "regencyCode": 8103,
          "name": "AMAHAI"
        },
        {
          "code": 8103051,
          "regencyCode": 8103,
          "name": "KOTA MASOHI"
        },
        {
          "code": 8103052,
          "regencyCode": 8103,
          "name": "TELUK ELPAPUTIH"
        },
        {
          "code": 8103060,
          "regencyCode": 8103,
          "name": "TEON NILA SERUA"
        },
        {
          "code": 8103080,
          "regencyCode": 8103,
          "name": "SAPARUA"
        },
        {
          "code": 8103081,
          "regencyCode": 8103,
          "name": "NUSALAUT"
        },
        {
          "code": 8103082,
          "regencyCode": 8103,
          "name": "SAPARUA TIMUR"
        },
        {
          "code": 8103090,
          "regencyCode": 8103,
          "name": "P. HARUKU"
        },
        {
          "code": 8103100,
          "regencyCode": 8103,
          "name": "SALAHUTU"
        },
        {
          "code": 8103110,
          "regencyCode": 8103,
          "name": "LEIHITU"
        },
        {
          "code": 8103111,
          "regencyCode": 8103,
          "name": "LEIHITU BARAT"
        },
        {
          "code": 8103140,
          "regencyCode": 8103,
          "name": "SERAM UTARA"
        },
        {
          "code": 8103141,
          "regencyCode": 8103,
          "name": "SERAM UTARA BARAT"
        },
        {
          "code": 8103142,
          "regencyCode": 8103,
          "name": "SERAM UTARA TIMUR KOBI"
        },
        {
          "code": 8103143,
          "regencyCode": 8103,
          "name": "SERAM UTARA TIMUR SETI"
        },
        {
          "code": 8104020,
          "regencyCode": 8104,
          "name": "NAMLEA"
        },
        {
          "code": 8104021,
          "regencyCode": 8104,
          "name": "WAEAPO"
        },
        {
          "code": 8104022,
          "regencyCode": 8104,
          "name": "WAPLAU"
        },
        {
          "code": 8104023,
          "regencyCode": 8104,
          "name": "BATA BUAL"
        },
        {
          "code": 8104024,
          "regencyCode": 8104,
          "name": "TELUK KAIELY"
        },
        {
          "code": 8104025,
          "regencyCode": 8104,
          "name": "WAELATA"
        },
        {
          "code": 8104026,
          "regencyCode": 8104,
          "name": "LOLONG GUBA"
        },
        {
          "code": 8104027,
          "regencyCode": 8104,
          "name": "LILIALY"
        },
        {
          "code": 8104030,
          "regencyCode": 8104,
          "name": "AIR BUAYA"
        },
        {
          "code": 8104031,
          "regencyCode": 8104,
          "name": "FENA LEISELA"
        },
        {
          "code": 8105010,
          "regencyCode": 8105,
          "name": "ARU SELATAN"
        },
        {
          "code": 8105011,
          "regencyCode": 8105,
          "name": "ARU SELATAN TIMUR"
        },
        {
          "code": 8105012,
          "regencyCode": 8105,
          "name": "ARU SELATAN UTARA"
        },
        {
          "code": 8105020,
          "regencyCode": 8105,
          "name": "ARU TENGAH"
        },
        {
          "code": 8105021,
          "regencyCode": 8105,
          "name": "ARU TENGAH TIMUR"
        },
        {
          "code": 8105022,
          "regencyCode": 8105,
          "name": "ARU TENGAH SELATAN"
        },
        {
          "code": 8105030,
          "regencyCode": 8105,
          "name": "PULAU-PULAU ARU"
        },
        {
          "code": 8105031,
          "regencyCode": 8105,
          "name": "ARU UTARA"
        },
        {
          "code": 8105032,
          "regencyCode": 8105,
          "name": "ARU UTARA TIMUR BATULEY"
        },
        {
          "code": 8105033,
          "regencyCode": 8105,
          "name": "SIR-SIR"
        },
        {
          "code": 8106010,
          "regencyCode": 8106,
          "name": "HUAMUAL BELAKANG"
        },
        {
          "code": 8106011,
          "regencyCode": 8106,
          "name": "KEPULAUAN MANIPA"
        },
        {
          "code": 8106020,
          "regencyCode": 8106,
          "name": "SERAM BARAT"
        },
        {
          "code": 8106021,
          "regencyCode": 8106,
          "name": "HUAMUAL"
        },
        {
          "code": 8106030,
          "regencyCode": 8106,
          "name": "KAIRATU"
        },
        {
          "code": 8106031,
          "regencyCode": 8106,
          "name": "KAIRATU BARAT"
        },
        {
          "code": 8106032,
          "regencyCode": 8106,
          "name": "INAMOSOL"
        },
        {
          "code": 8106033,
          "regencyCode": 8106,
          "name": "AMALATU"
        },
        {
          "code": 8106034,
          "regencyCode": 8106,
          "name": "ELPAPUTIH"
        },
        {
          "code": 8106040,
          "regencyCode": 8106,
          "name": "TANIWEL"
        },
        {
          "code": 8106041,
          "regencyCode": 8106,
          "name": "TANIWEL TIMUR"
        },
        {
          "code": 8107010,
          "regencyCode": 8107,
          "name": "PULAU GOROM"
        },
        {
          "code": 8107011,
          "regencyCode": 8107,
          "name": "WAKATE"
        },
        {
          "code": 8107012,
          "regencyCode": 8107,
          "name": "TEOR"
        },
        {
          "code": 8107013,
          "regencyCode": 8107,
          "name": "GOROM TIMUR"
        },
        {
          "code": 8107014,
          "regencyCode": 8107,
          "name": "PULAU PANJANG"
        },
        {
          "code": 8107020,
          "regencyCode": 8107,
          "name": "SERAM TIMUR"
        },
        {
          "code": 8107021,
          "regencyCode": 8107,
          "name": "TUTUK TOLU"
        },
        {
          "code": 8107022,
          "regencyCode": 8107,
          "name": "KILMURY"
        },
        {
          "code": 8107023,
          "regencyCode": 8107,
          "name": "LIAN VITU"
        },
        {
          "code": 8107024,
          "regencyCode": 8107,
          "name": "KIAN DARAT"
        },
        {
          "code": 8107030,
          "regencyCode": 8107,
          "name": "WERINAMA"
        },
        {
          "code": 8107031,
          "regencyCode": 8107,
          "name": "SIWALALAT"
        },
        {
          "code": 8107040,
          "regencyCode": 8107,
          "name": "BULA"
        },
        {
          "code": 8107041,
          "regencyCode": 8107,
          "name": "BULA BARAT"
        },
        {
          "code": 8107042,
          "regencyCode": 8107,
          "name": "TELUK WARU"
        },
        {
          "code": 8108010,
          "regencyCode": 8108,
          "name": "WETAR"
        },
        {
          "code": 8108011,
          "regencyCode": 8108,
          "name": "WETAR BARAT"
        },
        {
          "code": 8108012,
          "regencyCode": 8108,
          "name": "WETAR UTARA"
        },
        {
          "code": 8108013,
          "regencyCode": 8108,
          "name": "WETAR TIMUR"
        },
        {
          "code": 8108020,
          "regencyCode": 8108,
          "name": "PP. TERSELATAN"
        },
        {
          "code": 8108021,
          "regencyCode": 8108,
          "name": "KISAR UTARA"
        },
        {
          "code": 8108022,
          "regencyCode": 8108,
          "name": "KEPULAUAN ROMANG"
        },
        {
          "code": 8108030,
          "regencyCode": 8108,
          "name": "LETTI"
        },
        {
          "code": 8108041,
          "regencyCode": 8108,
          "name": "MOA"
        },
        {
          "code": 8108042,
          "regencyCode": 8108,
          "name": "LAKOR"
        },
        {
          "code": 8108050,
          "regencyCode": 8108,
          "name": "DAMER"
        },
        {
          "code": 8108060,
          "regencyCode": 8108,
          "name": "MDONA HIERA"
        },
        {
          "code": 8108070,
          "regencyCode": 8108,
          "name": "PP. BABAR"
        },
        {
          "code": 8108071,
          "regencyCode": 8108,
          "name": "PULAU WETANG"
        },
        {
          "code": 8108080,
          "regencyCode": 8108,
          "name": "BABAR TIMUR"
        },
        {
          "code": 8108081,
          "regencyCode": 8108,
          "name": "PULAU MASELA"
        },
        {
          "code": 8108082,
          "regencyCode": 8108,
          "name": "DAWELOR DAWERA"
        },
        {
          "code": 8109010,
          "regencyCode": 8109,
          "name": "KEPALA MADAN"
        },
        {
          "code": 8109020,
          "regencyCode": 8109,
          "name": "LEKSULA"
        },
        {
          "code": 8109021,
          "regencyCode": 8109,
          "name": "FENA FAFAN"
        },
        {
          "code": 8109030,
          "regencyCode": 8109,
          "name": "NAMROLE"
        },
        {
          "code": 8109040,
          "regencyCode": 8109,
          "name": "WAISAMA"
        },
        {
          "code": 8109050,
          "regencyCode": 8109,
          "name": "AMBALAU"
        },
        {
          "code": 8171010,
          "regencyCode": 8171,
          "name": "NUSANIWE"
        },
        {
          "code": 8171020,
          "regencyCode": 8171,
          "name": "SIRIMAU"
        },
        {
          "code": 8171021,
          "regencyCode": 8171,
          "name": "LEITIMUR SELATAN"
        },
        {
          "code": 8171030,
          "regencyCode": 8171,
          "name": "TELUK AMBON BAGUALA"
        },
        {
          "code": 8171031,
          "regencyCode": 8171,
          "name": "TELUK AMBON"
        },
        {
          "code": 8172010,
          "regencyCode": 8172,
          "name": "PP. KUR"
        },
        {
          "code": 8172011,
          "regencyCode": 8172,
          "name": "KUR SELATAN"
        },
        {
          "code": 8172020,
          "regencyCode": 8172,
          "name": "TAYANDO TAM"
        },
        {
          "code": 8172030,
          "regencyCode": 8172,
          "name": "PULAU DULLAH UTARA"
        },
        {
          "code": 8172040,
          "regencyCode": 8172,
          "name": "PULAU DULLAH SELATAN"
        },
        {
          "code": 8201090,
          "regencyCode": 8201,
          "name": "JAILOLO"
        },
        {
          "code": 8201091,
          "regencyCode": 8201,
          "name": "JAILOLO SELATAN"
        },
        {
          "code": 8201100,
          "regencyCode": 8201,
          "name": "SAHU"
        },
        {
          "code": 8201101,
          "regencyCode": 8201,
          "name": "SAHU TIMUR"
        },
        {
          "code": 8201130,
          "regencyCode": 8201,
          "name": "IBU"
        },
        {
          "code": 8201131,
          "regencyCode": 8201,
          "name": "IBU SELATAN"
        },
        {
          "code": 8201132,
          "regencyCode": 8201,
          "name": "TABARU"
        },
        {
          "code": 8201140,
          "regencyCode": 8201,
          "name": "LOLODA"
        },
        {
          "code": 8202030,
          "regencyCode": 8202,
          "name": "WEDA"
        },
        {
          "code": 8202031,
          "regencyCode": 8202,
          "name": "WEDA SELATAN"
        },
        {
          "code": 8202032,
          "regencyCode": 8202,
          "name": "WEDA UTARA"
        },
        {
          "code": 8202033,
          "regencyCode": 8202,
          "name": "WEDA TENGAH"
        },
        {
          "code": 8202034,
          "regencyCode": 8202,
          "name": "WEDA TIMUR"
        },
        {
          "code": 8202041,
          "regencyCode": 8202,
          "name": "PULAU GEBE"
        },
        {
          "code": 8202042,
          "regencyCode": 8202,
          "name": "PATANI"
        },
        {
          "code": 8202043,
          "regencyCode": 8202,
          "name": "PATANI UTARA"
        },
        {
          "code": 8202044,
          "regencyCode": 8202,
          "name": "PATANI BARAT"
        },
        {
          "code": 8202045,
          "regencyCode": 8202,
          "name": "PATANI TIMUR"
        },
        {
          "code": 8203010,
          "regencyCode": 8203,
          "name": "SULA BESI BARAT"
        },
        {
          "code": 8203011,
          "regencyCode": 8203,
          "name": "SULABESI SELATAN"
        },
        {
          "code": 8203020,
          "regencyCode": 8203,
          "name": "SANANA"
        },
        {
          "code": 8203021,
          "regencyCode": 8203,
          "name": "SULA BESI TENGAH"
        },
        {
          "code": 8203022,
          "regencyCode": 8203,
          "name": "SULABESI TIMUR"
        },
        {
          "code": 8203023,
          "regencyCode": 8203,
          "name": "SANANA UTARA"
        },
        {
          "code": 8203030,
          "regencyCode": 8203,
          "name": "MANGOLI TIMUR"
        },
        {
          "code": 8203031,
          "regencyCode": 8203,
          "name": "MANGOLI TENGAH"
        },
        {
          "code": 8203032,
          "regencyCode": 8203,
          "name": "MANGOLI UTARA TIMUR"
        },
        {
          "code": 8203040,
          "regencyCode": 8203,
          "name": "MANGOLI BARAT"
        },
        {
          "code": 8203041,
          "regencyCode": 8203,
          "name": "MANGOLI UTARA"
        },
        {
          "code": 8203042,
          "regencyCode": 8203,
          "name": "MANGOLI SELATAN"
        },
        {
          "code": 8204010,
          "regencyCode": 8204,
          "name": "OBI SELATAN"
        },
        {
          "code": 8204020,
          "regencyCode": 8204,
          "name": "OBI"
        },
        {
          "code": 8204021,
          "regencyCode": 8204,
          "name": "OBI BARAT"
        },
        {
          "code": 8204022,
          "regencyCode": 8204,
          "name": "OBI TIMUR"
        },
        {
          "code": 8204023,
          "regencyCode": 8204,
          "name": "OBI UTARA"
        },
        {
          "code": 8204030,
          "regencyCode": 8204,
          "name": "BACAN"
        },
        {
          "code": 8204031,
          "regencyCode": 8204,
          "name": "MANDIOLI SELATAN"
        },
        {
          "code": 8204032,
          "regencyCode": 8204,
          "name": "MANDIOLI UTARA"
        },
        {
          "code": 8204033,
          "regencyCode": 8204,
          "name": "BACAN SELATAN"
        },
        {
          "code": 8204034,
          "regencyCode": 8204,
          "name": "BATANG LOMANG"
        },
        {
          "code": 8204040,
          "regencyCode": 8204,
          "name": "BACAN TIMUR"
        },
        {
          "code": 8204041,
          "regencyCode": 8204,
          "name": "BACAN TIMUR SELATAN"
        },
        {
          "code": 8204042,
          "regencyCode": 8204,
          "name": "BACAN TIMUR TENGAH"
        },
        {
          "code": 8204050,
          "regencyCode": 8204,
          "name": "BACAN BARAT"
        },
        {
          "code": 8204051,
          "regencyCode": 8204,
          "name": "KASIRUTA BARAT"
        },
        {
          "code": 8204052,
          "regencyCode": 8204,
          "name": "KASIRUTA TIMUR"
        },
        {
          "code": 8204053,
          "regencyCode": 8204,
          "name": "BACAN BARAT UTARA"
        },
        {
          "code": 8204060,
          "regencyCode": 8204,
          "name": "KAYOA"
        },
        {
          "code": 8204061,
          "regencyCode": 8204,
          "name": "KAYOA BARAT"
        },
        {
          "code": 8204062,
          "regencyCode": 8204,
          "name": "KAYOA SELATAN"
        },
        {
          "code": 8204063,
          "regencyCode": 8204,
          "name": "KAYOA UTARA"
        },
        {
          "code": 8204070,
          "regencyCode": 8204,
          "name": "PULAU MAKIAN"
        },
        {
          "code": 8204071,
          "regencyCode": 8204,
          "name": "MAKIAN BARAT"
        },
        {
          "code": 8204080,
          "regencyCode": 8204,
          "name": "GANE BARAT"
        },
        {
          "code": 8204081,
          "regencyCode": 8204,
          "name": "GANE BARAT SELATAN"
        },
        {
          "code": 8204082,
          "regencyCode": 8204,
          "name": "GANE BARAT UTARA"
        },
        {
          "code": 8204083,
          "regencyCode": 8204,
          "name": "KEPULAUAN JORONGA"
        },
        {
          "code": 8204090,
          "regencyCode": 8204,
          "name": "GANE TIMUR"
        },
        {
          "code": 8204091,
          "regencyCode": 8204,
          "name": "GANE TIMUR TENGAH"
        },
        {
          "code": 8204092,
          "regencyCode": 8204,
          "name": "GANE TIMUR SELATAN"
        },
        {
          "code": 8205010,
          "regencyCode": 8205,
          "name": "MALIFUT"
        },
        {
          "code": 8205011,
          "regencyCode": 8205,
          "name": "KAO TELUK"
        },
        {
          "code": 8205020,
          "regencyCode": 8205,
          "name": "KAO"
        },
        {
          "code": 8205021,
          "regencyCode": 8205,
          "name": "KAO BARAT"
        },
        {
          "code": 8205022,
          "regencyCode": 8205,
          "name": "KAO UTARA"
        },
        {
          "code": 8205030,
          "regencyCode": 8205,
          "name": "TOBELO SELATAN"
        },
        {
          "code": 8205031,
          "regencyCode": 8205,
          "name": "TOBELO BARAT"
        },
        {
          "code": 8205032,
          "regencyCode": 8205,
          "name": "TOBELO TIMUR"
        },
        {
          "code": 8205040,
          "regencyCode": 8205,
          "name": "TOBELO"
        },
        {
          "code": 8205041,
          "regencyCode": 8205,
          "name": "TOBELO TENGAH"
        },
        {
          "code": 8205042,
          "regencyCode": 8205,
          "name": "TOBELO UTARA"
        },
        {
          "code": 8205050,
          "regencyCode": 8205,
          "name": "GALELA"
        },
        {
          "code": 8205051,
          "regencyCode": 8205,
          "name": "GALELA SELATAN"
        },
        {
          "code": 8205052,
          "regencyCode": 8205,
          "name": "GALELA BARAT"
        },
        {
          "code": 8205053,
          "regencyCode": 8205,
          "name": "GALELA UTARA"
        },
        {
          "code": 8205060,
          "regencyCode": 8205,
          "name": "LOLODA UTARA"
        },
        {
          "code": 8205061,
          "regencyCode": 8205,
          "name": "LOLODA KEPULAUAN"
        },
        {
          "code": 8206010,
          "regencyCode": 8206,
          "name": "MABA SELATAN"
        },
        {
          "code": 8206011,
          "regencyCode": 8206,
          "name": "KOTA MABA"
        },
        {
          "code": 8206020,
          "regencyCode": 8206,
          "name": "WASILE SELATAN"
        },
        {
          "code": 8206030,
          "regencyCode": 8206,
          "name": "WASILE"
        },
        {
          "code": 8206031,
          "regencyCode": 8206,
          "name": "WASILE TIMUR"
        },
        {
          "code": 8206032,
          "regencyCode": 8206,
          "name": "WASILE TENGAH"
        },
        {
          "code": 8206033,
          "regencyCode": 8206,
          "name": "WASILE UTARA"
        },
        {
          "code": 8206040,
          "regencyCode": 8206,
          "name": "MABA"
        },
        {
          "code": 8206041,
          "regencyCode": 8206,
          "name": "MABA TENGAH"
        },
        {
          "code": 8206042,
          "regencyCode": 8206,
          "name": "MABA UTARA"
        },
        {
          "code": 8207010,
          "regencyCode": 8207,
          "name": "MOROTAI SELATAN"
        },
        {
          "code": 8207020,
          "regencyCode": 8207,
          "name": "MOROTAI TIMUR"
        },
        {
          "code": 8207030,
          "regencyCode": 8207,
          "name": "MOROTAI SELATAN BARAT"
        },
        {
          "code": 8207040,
          "regencyCode": 8207,
          "name": "MOROTAI JAYA"
        },
        {
          "code": 8207050,
          "regencyCode": 8207,
          "name": "MOROTAI UTARA"
        },
        {
          "code": 8208010,
          "regencyCode": 8208,
          "name": "TALIABU BARAT"
        },
        {
          "code": 8208020,
          "regencyCode": 8208,
          "name": "TALIABU SELATAN"
        },
        {
          "code": 8208030,
          "regencyCode": 8208,
          "name": "TABONA"
        },
        {
          "code": 8208040,
          "regencyCode": 8208,
          "name": "TALIABU TIMUR SELATAN"
        },
        {
          "code": 8208050,
          "regencyCode": 8208,
          "name": "TALIABU TIMUR"
        },
        {
          "code": 8208060,
          "regencyCode": 8208,
          "name": "TALIABU UTARA"
        },
        {
          "code": 8208070,
          "regencyCode": 8208,
          "name": "LEDE"
        },
        {
          "code": 8208080,
          "regencyCode": 8208,
          "name": "TALIABU BARAT LAUT"
        },
        {
          "code": 8271010,
          "regencyCode": 8271,
          "name": "PULAU TERNATE"
        },
        {
          "code": 8271011,
          "regencyCode": 8271,
          "name": "MOTI"
        },
        {
          "code": 8271012,
          "regencyCode": 8271,
          "name": "PULAU BATANG DUA"
        },
        {
          "code": 8271013,
          "regencyCode": 8271,
          "name": "PULAU HIRI"
        },
        {
          "code": 8271020,
          "regencyCode": 8271,
          "name": "TERNATE SELATAN"
        },
        {
          "code": 8271021,
          "regencyCode": 8271,
          "name": "TERNATE TENGAH"
        },
        {
          "code": 8271030,
          "regencyCode": 8271,
          "name": "TERNATE UTARA"
        },
        {
          "code": 8272010,
          "regencyCode": 8272,
          "name": "TIDORE SELATAN"
        },
        {
          "code": 8272020,
          "regencyCode": 8272,
          "name": "TIDORE UTARA"
        },
        {
          "code": 8272030,
          "regencyCode": 8272,
          "name": "TIDORE"
        },
        {
          "code": 8272031,
          "regencyCode": 8272,
          "name": "TIDORE TIMUR"
        },
        {
          "code": 8272040,
          "regencyCode": 8272,
          "name": "OBA"
        },
        {
          "code": 8272041,
          "regencyCode": 8272,
          "name": "OBA SELATAN"
        },
        {
          "code": 8272050,
          "regencyCode": 8272,
          "name": "OBA UTARA"
        },
        {
          "code": 8272051,
          "regencyCode": 8272,
          "name": "OBA TENGAH"
        },
        {
          "code": 9101050,
          "regencyCode": 9101,
          "name": "FAKFAK TIMUR"
        },
        {
          "code": 9101051,
          "regencyCode": 9101,
          "name": "KARAS"
        },
        {
          "code": 9101052,
          "regencyCode": 9101,
          "name": "FAKFAK TIMUR TENGAH"
        },
        {
          "code": 9101060,
          "regencyCode": 9101,
          "name": "FAKFAK"
        },
        {
          "code": 9101061,
          "regencyCode": 9101,
          "name": "FAKFAK TENGAH"
        },
        {
          "code": 9101062,
          "regencyCode": 9101,
          "name": "PARIWARI"
        },
        {
          "code": 9101070,
          "regencyCode": 9101,
          "name": "FAKFAK BARAT"
        },
        {
          "code": 9101071,
          "regencyCode": 9101,
          "name": "WARTUTIN"
        },
        {
          "code": 9101080,
          "regencyCode": 9101,
          "name": "KOKAS"
        },
        {
          "code": 9101081,
          "regencyCode": 9101,
          "name": "TELUK PATIPI"
        },
        {
          "code": 9101082,
          "regencyCode": 9101,
          "name": "KRAMONGMONGGA"
        },
        {
          "code": 9101083,
          "regencyCode": 9101,
          "name": "BOMBERAY"
        },
        {
          "code": 9101084,
          "regencyCode": 9101,
          "name": "ARGUNI"
        },
        {
          "code": 9101085,
          "regencyCode": 9101,
          "name": "MBAHAMDANDARA"
        },
        {
          "code": 9101086,
          "regencyCode": 9101,
          "name": "FURWAGI"
        },
        {
          "code": 9101087,
          "regencyCode": 9101,
          "name": "KAYAUNI"
        },
        {
          "code": 9101088,
          "regencyCode": 9101,
          "name": "TOMAGE"
        },
        {
          "code": 9102010,
          "regencyCode": 9102,
          "name": "BURUWAY"
        },
        {
          "code": 9102020,
          "regencyCode": 9102,
          "name": "TELUK ARGUNI"
        },
        {
          "code": 9102021,
          "regencyCode": 9102,
          "name": "TELUK ARGUNI BAWAH"
        },
        {
          "code": 9102030,
          "regencyCode": 9102,
          "name": "KAIMANA"
        },
        {
          "code": 9102031,
          "regencyCode": 9102,
          "name": "KAMBRAU"
        },
        {
          "code": 9102040,
          "regencyCode": 9102,
          "name": "TELUK ETNA"
        },
        {
          "code": 9102041,
          "regencyCode": 9102,
          "name": "YAMOR"
        },
        {
          "code": 9103010,
          "regencyCode": 9103,
          "name": "NAIKERE"
        },
        {
          "code": 9103020,
          "regencyCode": 9103,
          "name": "WONDIBOY"
        },
        {
          "code": 9103021,
          "regencyCode": 9103,
          "name": "RASIEY"
        },
        {
          "code": 9103022,
          "regencyCode": 9103,
          "name": "KURI WAMESA"
        },
        {
          "code": 9103030,
          "regencyCode": 9103,
          "name": "WASIOR"
        },
        {
          "code": 9103040,
          "regencyCode": 9103,
          "name": "DUAIRI"
        },
        {
          "code": 9103041,
          "regencyCode": 9103,
          "name": "ROON"
        },
        {
          "code": 9103050,
          "regencyCode": 9103,
          "name": "WINDESI"
        },
        {
          "code": 9103051,
          "regencyCode": 9103,
          "name": "NIKIWAR"
        },
        {
          "code": 9103060,
          "regencyCode": 9103,
          "name": "WAMESA"
        },
        {
          "code": 9103061,
          "regencyCode": 9103,
          "name": "ROSWAR"
        },
        {
          "code": 9103070,
          "regencyCode": 9103,
          "name": "RUMBERPON"
        },
        {
          "code": 9103071,
          "regencyCode": 9103,
          "name": "SOUG JAYA"
        },
        {
          "code": 9104010,
          "regencyCode": 9104,
          "name": "FAFURWAR"
        },
        {
          "code": 9104020,
          "regencyCode": 9104,
          "name": "BABO"
        },
        {
          "code": 9104021,
          "regencyCode": 9104,
          "name": "SUMURI"
        },
        {
          "code": 9104022,
          "regencyCode": 9104,
          "name": "AROBA"
        },
        {
          "code": 9104023,
          "regencyCode": 9104,
          "name": "KAITARO"
        },
        {
          "code": 9104030,
          "regencyCode": 9104,
          "name": "KURI"
        },
        {
          "code": 9104040,
          "regencyCode": 9104,
          "name": "WAMESA"
        },
        {
          "code": 9104050,
          "regencyCode": 9104,
          "name": "BINTUNI"
        },
        {
          "code": 9104051,
          "regencyCode": 9104,
          "name": "MANIMERI"
        },
        {
          "code": 9104052,
          "regencyCode": 9104,
          "name": "TUHIBA"
        },
        {
          "code": 9104053,
          "regencyCode": 9104,
          "name": "DATARAN BEIMES"
        },
        {
          "code": 9104060,
          "regencyCode": 9104,
          "name": "TEMBUNI"
        },
        {
          "code": 9104070,
          "regencyCode": 9104,
          "name": "ARANDAY"
        },
        {
          "code": 9104071,
          "regencyCode": 9104,
          "name": "KAMUNDAN"
        },
        {
          "code": 9104072,
          "regencyCode": 9104,
          "name": "TOMU"
        },
        {
          "code": 9104073,
          "regencyCode": 9104,
          "name": "WERIAGAR"
        },
        {
          "code": 9104080,
          "regencyCode": 9104,
          "name": "MOSKONA SELATAN"
        },
        {
          "code": 9104081,
          "regencyCode": 9104,
          "name": "MEYADO"
        },
        {
          "code": 9104082,
          "regencyCode": 9104,
          "name": "MOSKONA BARAT"
        },
        {
          "code": 9104090,
          "regencyCode": 9104,
          "name": "MERDEY"
        },
        {
          "code": 9104091,
          "regencyCode": 9104,
          "name": "BISCOOP"
        },
        {
          "code": 9104092,
          "regencyCode": 9104,
          "name": "MASYETA"
        },
        {
          "code": 9104100,
          "regencyCode": 9104,
          "name": "MOSKONA UTARA"
        },
        {
          "code": 9104101,
          "regencyCode": 9104,
          "name": "MOSKONA TIMUR"
        },
        {
          "code": 9105110,
          "regencyCode": 9105,
          "name": "WARMARE"
        },
        {
          "code": 9105120,
          "regencyCode": 9105,
          "name": "PRAFI"
        },
        {
          "code": 9105141,
          "regencyCode": 9105,
          "name": "MANOKWARI BARAT"
        },
        {
          "code": 9105142,
          "regencyCode": 9105,
          "name": "MANOKWARI TIMUR"
        },
        {
          "code": 9105143,
          "regencyCode": 9105,
          "name": "MANOKWARI UTARA"
        },
        {
          "code": 9105144,
          "regencyCode": 9105,
          "name": "MANOKWARI SELATAN"
        },
        {
          "code": 9105146,
          "regencyCode": 9105,
          "name": "TANAH RUBU"
        },
        {
          "code": 9105170,
          "regencyCode": 9105,
          "name": "MASNI"
        },
        {
          "code": 9105171,
          "regencyCode": 9105,
          "name": "SIDEY"
        },
        {
          "code": 9106010,
          "regencyCode": 9106,
          "name": "INANWATAN"
        },
        {
          "code": 9106011,
          "regencyCode": 9106,
          "name": "METEMANI"
        },
        {
          "code": 9106020,
          "regencyCode": 9106,
          "name": "KOKODA"
        },
        {
          "code": 9106021,
          "regencyCode": 9106,
          "name": "KAIS"
        },
        {
          "code": 9106022,
          "regencyCode": 9106,
          "name": "KOKODA UTARA"
        },
        {
          "code": 9106023,
          "regencyCode": 9106,
          "name": "KAIS DARAT"
        },
        {
          "code": 9106060,
          "regencyCode": 9106,
          "name": "MOSWAREN"
        },
        {
          "code": 9106070,
          "regencyCode": 9106,
          "name": "TEMINABUAN"
        },
        {
          "code": 9106071,
          "regencyCode": 9106,
          "name": "SEREMUK"
        },
        {
          "code": 9106072,
          "regencyCode": 9106,
          "name": "WAYER"
        },
        {
          "code": 9106073,
          "regencyCode": 9106,
          "name": "KONDA"
        },
        {
          "code": 9106074,
          "regencyCode": 9106,
          "name": "SAIFI"
        },
        {
          "code": 9106080,
          "regencyCode": 9106,
          "name": "SAWIAT"
        },
        {
          "code": 9106081,
          "regencyCode": 9106,
          "name": "FOKOUR"
        },
        {
          "code": 9106082,
          "regencyCode": 9106,
          "name": "SALKMA"
        },
        {
          "code": 9107060,
          "regencyCode": 9107,
          "name": "MORAID"
        },
        {
          "code": 9107061,
          "regencyCode": 9107,
          "name": "KLASO"
        },
        {
          "code": 9107100,
          "regencyCode": 9107,
          "name": "MAKBON"
        },
        {
          "code": 9107101,
          "regencyCode": 9107,
          "name": "KLAYILI"
        },
        {
          "code": 9107110,
          "regencyCode": 9107,
          "name": "BERAUR"
        },
        {
          "code": 9107111,
          "regencyCode": 9107,
          "name": "KLAMONO"
        },
        {
          "code": 9107112,
          "regencyCode": 9107,
          "name": "KLABOT"
        },
        {
          "code": 9107113,
          "regencyCode": 9107,
          "name": "KLAWAK"
        },
        {
          "code": 9107120,
          "regencyCode": 9107,
          "name": "SALAWATI"
        },
        {
          "code": 9107121,
          "regencyCode": 9107,
          "name": "MAYAMUK"
        },
        {
          "code": 9107122,
          "regencyCode": 9107,
          "name": "SALAWATI TIMUR"
        },
        {
          "code": 9107130,
          "regencyCode": 9107,
          "name": "SEGET"
        },
        {
          "code": 9107131,
          "regencyCode": 9107,
          "name": "SEGUN"
        },
        {
          "code": 9107132,
          "regencyCode": 9107,
          "name": "SALAWATI SELATAN"
        },
        {
          "code": 9107170,
          "regencyCode": 9107,
          "name": "AIMAS"
        },
        {
          "code": 9107171,
          "regencyCode": 9107,
          "name": "MARIAT"
        },
        {
          "code": 9107172,
          "regencyCode": 9107,
          "name": "SORONG"
        },
        {
          "code": 9107180,
          "regencyCode": 9107,
          "name": "SAYOSA"
        },
        {
          "code": 9107181,
          "regencyCode": 9107,
          "name": "MAUDUS"
        },
        {
          "code": 9108011,
          "regencyCode": 9108,
          "name": "MISOOL SELATAN"
        },
        {
          "code": 9108012,
          "regencyCode": 9108,
          "name": "MISOOL BARAT"
        },
        {
          "code": 9108020,
          "regencyCode": 9108,
          "name": "MISOOL"
        },
        {
          "code": 9108021,
          "regencyCode": 9108,
          "name": "KOFIAU"
        },
        {
          "code": 9108022,
          "regencyCode": 9108,
          "name": "MISOOL TIMUR"
        },
        {
          "code": 9108023,
          "regencyCode": 9108,
          "name": "KEPULAUAN SEMBILAN"
        },
        {
          "code": 9108031,
          "regencyCode": 9108,
          "name": "SALAWATI UTARA"
        },
        {
          "code": 9108033,
          "regencyCode": 9108,
          "name": "SALAWATI TENGAH"
        },
        {
          "code": 9108034,
          "regencyCode": 9108,
          "name": "SALAWATI BARAT"
        },
        {
          "code": 9108035,
          "regencyCode": 9108,
          "name": "BATANTA SELATAN"
        },
        {
          "code": 9108036,
          "regencyCode": 9108,
          "name": "BATANTA UTARA"
        },
        {
          "code": 9108040,
          "regencyCode": 9108,
          "name": "WAIGEO SELATAN"
        },
        {
          "code": 9108041,
          "regencyCode": 9108,
          "name": "TELUK MAYALIBIT"
        },
        {
          "code": 9108042,
          "regencyCode": 9108,
          "name": "MEOS MANSAR"
        },
        {
          "code": 9108043,
          "regencyCode": 9108,
          "name": "KOTA WAISAI"
        },
        {
          "code": 9108044,
          "regencyCode": 9108,
          "name": "TIPLOL MAYALIBIT"
        },
        {
          "code": 9108050,
          "regencyCode": 9108,
          "name": "WAIGEO BARAT"
        },
        {
          "code": 9108051,
          "regencyCode": 9108,
          "name": "WAIGEO BARAT KEPULAUAN"
        },
        {
          "code": 9108060,
          "regencyCode": 9108,
          "name": "WAIGEO UTARA"
        },
        {
          "code": 9108061,
          "regencyCode": 9108,
          "name": "WARWARBOMI"
        },
        {
          "code": 9108062,
          "regencyCode": 9108,
          "name": "SUPNIN"
        },
        {
          "code": 9108070,
          "regencyCode": 9108,
          "name": "KEPULAUAN AYAU"
        },
        {
          "code": 9108071,
          "regencyCode": 9108,
          "name": "AYAU"
        },
        {
          "code": 9108080,
          "regencyCode": 9108,
          "name": "WAIGEO TIMUR"
        },
        {
          "code": 9109010,
          "regencyCode": 9109,
          "name": "FEF"
        },
        {
          "code": 9109011,
          "regencyCode": 9109,
          "name": "SYUJAK"
        },
        {
          "code": 9109020,
          "regencyCode": 9109,
          "name": "MIYAH"
        },
        {
          "code": 9109030,
          "regencyCode": 9109,
          "name": "ABUN"
        },
        {
          "code": 9109040,
          "regencyCode": 9109,
          "name": "KWOOR"
        },
        {
          "code": 9109050,
          "regencyCode": 9109,
          "name": "SAUSAPOR"
        },
        {
          "code": 9109060,
          "regencyCode": 9109,
          "name": "YEMBUN"
        },
        {
          "code": 9109070,
          "regencyCode": 9109,
          "name": "KEBAR"
        },
        {
          "code": 9109080,
          "regencyCode": 9109,
          "name": "SENOPI"
        },
        {
          "code": 9109090,
          "regencyCode": 9109,
          "name": "AMBERBAKEN"
        },
        {
          "code": 9109100,
          "regencyCode": 9109,
          "name": "MUBARNI / ARFU"
        },
        {
          "code": 9110010,
          "regencyCode": 9110,
          "name": "AITINYO BARAT/ATHABU"
        },
        {
          "code": 9110011,
          "regencyCode": 9110,
          "name": "AYAMARU SELATAN JAYA"
        },
        {
          "code": 9110020,
          "regencyCode": 9110,
          "name": "AITINYO"
        },
        {
          "code": 9110021,
          "regencyCode": 9110,
          "name": "AITINYO TENGAH"
        },
        {
          "code": 9110030,
          "regencyCode": 9110,
          "name": "AIFAT SELATAN"
        },
        {
          "code": 9110031,
          "regencyCode": 9110,
          "name": "AIFAT TIMUR SELATAN"
        },
        {
          "code": 9110040,
          "regencyCode": 9110,
          "name": "AIFAT"
        },
        {
          "code": 9110050,
          "regencyCode": 9110,
          "name": "AITINYO UTARA"
        },
        {
          "code": 9110051,
          "regencyCode": 9110,
          "name": "AITINYO RAYA"
        },
        {
          "code": 9110060,
          "regencyCode": 9110,
          "name": "AYAMARU TIMUR"
        },
        {
          "code": 9110061,
          "regencyCode": 9110,
          "name": "AYAMARU TIMUR SELATAN"
        },
        {
          "code": 9110070,
          "regencyCode": 9110,
          "name": "AYAMARU"
        },
        {
          "code": 9110071,
          "regencyCode": 9110,
          "name": "AYAMARU SELATAN"
        },
        {
          "code": 9110072,
          "regencyCode": 9110,
          "name": "AYAMARU JAYA"
        },
        {
          "code": 9110073,
          "regencyCode": 9110,
          "name": "AYAMARU TENGAH"
        },
        {
          "code": 9110074,
          "regencyCode": 9110,
          "name": "AYAMARU BARAT"
        },
        {
          "code": 9110080,
          "regencyCode": 9110,
          "name": "AYAMARU UTARA"
        },
        {
          "code": 9110081,
          "regencyCode": 9110,
          "name": "AYAMARU UTARA TIMUR"
        },
        {
          "code": 9110090,
          "regencyCode": 9110,
          "name": "MARE"
        },
        {
          "code": 9110091,
          "regencyCode": 9110,
          "name": "MARE SELATAN"
        },
        {
          "code": 9110100,
          "regencyCode": 9110,
          "name": "AIFAT UTARA"
        },
        {
          "code": 9110110,
          "regencyCode": 9110,
          "name": "AIFAT TIMUR"
        },
        {
          "code": 9110111,
          "regencyCode": 9110,
          "name": "AIFAT TIMUR TENGAH"
        },
        {
          "code": 9110112,
          "regencyCode": 9110,
          "name": "AIFAT TIMUR JAUH"
        },
        {
          "code": 9111010,
          "regencyCode": 9111,
          "name": "TAHOTA"
        },
        {
          "code": 9111020,
          "regencyCode": 9111,
          "name": "DATARAN ISIM"
        },
        {
          "code": 9111030,
          "regencyCode": 9111,
          "name": "NENEI"
        },
        {
          "code": 9111040,
          "regencyCode": 9111,
          "name": "MOMI WAREN"
        },
        {
          "code": 9111050,
          "regencyCode": 9111,
          "name": "RANSIKI"
        },
        {
          "code": 9111060,
          "regencyCode": 9111,
          "name": "ORANSBARI"
        },
        {
          "code": 9112010,
          "regencyCode": 9112,
          "name": "DIDOHU"
        },
        {
          "code": 9112020,
          "regencyCode": 9112,
          "name": "SURUREY"
        },
        {
          "code": 9112030,
          "regencyCode": 9112,
          "name": "ANGGI GIDA"
        },
        {
          "code": 9112040,
          "regencyCode": 9112,
          "name": "MEMBEY"
        },
        {
          "code": 9112050,
          "regencyCode": 9112,
          "name": "ANGGI"
        },
        {
          "code": 9112060,
          "regencyCode": 9112,
          "name": "TAIGE"
        },
        {
          "code": 9112070,
          "regencyCode": 9112,
          "name": "HINGK"
        },
        {
          "code": 9112080,
          "regencyCode": 9112,
          "name": "MENYAMBOUW"
        },
        {
          "code": 9112090,
          "regencyCode": 9112,
          "name": "CATUBOUW"
        },
        {
          "code": 9112100,
          "regencyCode": 9112,
          "name": "TESTEGA"
        },
        {
          "code": 9171010,
          "regencyCode": 9171,
          "name": "SORONG BARAT"
        },
        {
          "code": 9171011,
          "regencyCode": 9171,
          "name": "SORONG KEPULAUAN"
        },
        {
          "code": 9171012,
          "regencyCode": 9171,
          "name": "MALADUM MES"
        },
        {
          "code": 9171020,
          "regencyCode": 9171,
          "name": "SORONG TIMUR"
        },
        {
          "code": 9171021,
          "regencyCode": 9171,
          "name": "SORONG UTARA"
        },
        {
          "code": 9171022,
          "regencyCode": 9171,
          "name": "SORONG"
        },
        {
          "code": 9171023,
          "regencyCode": 9171,
          "name": "SORONG MANOI"
        },
        {
          "code": 9171024,
          "regencyCode": 9171,
          "name": "KLAURUNG"
        },
        {
          "code": 9171025,
          "regencyCode": 9171,
          "name": "MALAIMSIMSA"
        },
        {
          "code": 9171026,
          "regencyCode": 9171,
          "name": "SORONG KOTA"
        },
        {
          "code": 9401010,
          "regencyCode": 9401,
          "name": "KIMAAM"
        },
        {
          "code": 9401011,
          "regencyCode": 9401,
          "name": "WAAN"
        },
        {
          "code": 9401012,
          "regencyCode": 9401,
          "name": "TABONJI"
        },
        {
          "code": 9401013,
          "regencyCode": 9401,
          "name": "ILWAYAB"
        },
        {
          "code": 9401020,
          "regencyCode": 9401,
          "name": "OKABA"
        },
        {
          "code": 9401021,
          "regencyCode": 9401,
          "name": "TUBANG"
        },
        {
          "code": 9401022,
          "regencyCode": 9401,
          "name": "NGGUTI"
        },
        {
          "code": 9401023,
          "regencyCode": 9401,
          "name": "KAPTEL"
        },
        {
          "code": 9401030,
          "regencyCode": 9401,
          "name": "KURIK"
        },
        {
          "code": 9401031,
          "regencyCode": 9401,
          "name": "MALIND"
        },
        {
          "code": 9401032,
          "regencyCode": 9401,
          "name": "ANIMHA"
        },
        {
          "code": 9401040,
          "regencyCode": 9401,
          "name": "MERAUKE"
        },
        {
          "code": 9401041,
          "regencyCode": 9401,
          "name": "SEMANGGA"
        },
        {
          "code": 9401042,
          "regencyCode": 9401,
          "name": "TANAH MIRING"
        },
        {
          "code": 9401043,
          "regencyCode": 9401,
          "name": "JAGEBOB"
        },
        {
          "code": 9401044,
          "regencyCode": 9401,
          "name": "SOTA"
        },
        {
          "code": 9401045,
          "regencyCode": 9401,
          "name": "NAUKENJERAI"
        },
        {
          "code": 9401050,
          "regencyCode": 9401,
          "name": "MUTING"
        },
        {
          "code": 9401051,
          "regencyCode": 9401,
          "name": "ELIGOBEL"
        },
        {
          "code": 9401052,
          "regencyCode": 9401,
          "name": "ULILIN"
        },
        {
          "code": 9402110,
          "regencyCode": 9402,
          "name": "WAMENA"
        },
        {
          "code": 9402111,
          "regencyCode": 9402,
          "name": "ASOLOKOBAL"
        },
        {
          "code": 9402112,
          "regencyCode": 9402,
          "name": "WALELAGAMA"
        },
        {
          "code": 9402113,
          "regencyCode": 9402,
          "name": "TRIKORA"
        },
        {
          "code": 9402114,
          "regencyCode": 9402,
          "name": "NAPUA"
        },
        {
          "code": 9402115,
          "regencyCode": 9402,
          "name": "WALAIK"
        },
        {
          "code": 9402116,
          "regencyCode": 9402,
          "name": "WOUMA"
        },
        {
          "code": 9402117,
          "regencyCode": 9402,
          "name": "WALESI"
        },
        {
          "code": 9402118,
          "regencyCode": 9402,
          "name": "ASOTIPO"
        },
        {
          "code": 9402119,
          "regencyCode": 9402,
          "name": "MAIMA"
        },
        {
          "code": 9402120,
          "regencyCode": 9402,
          "name": "HUBIKOSI"
        },
        {
          "code": 9402121,
          "regencyCode": 9402,
          "name": "PELEBAGA"
        },
        {
          "code": 9402122,
          "regencyCode": 9402,
          "name": "IBELE"
        },
        {
          "code": 9402123,
          "regencyCode": 9402,
          "name": "TAILAREK"
        },
        {
          "code": 9402124,
          "regencyCode": 9402,
          "name": "HUBIKIAK"
        },
        {
          "code": 9402180,
          "regencyCode": 9402,
          "name": "ASOLOGAIMA"
        },
        {
          "code": 9402181,
          "regencyCode": 9402,
          "name": "MUSATFAK"
        },
        {
          "code": 9402182,
          "regencyCode": 9402,
          "name": "SILO KARNO DOGA"
        },
        {
          "code": 9402183,
          "regencyCode": 9402,
          "name": "PYRAMID"
        },
        {
          "code": 9402184,
          "regencyCode": 9402,
          "name": "MULIAMA"
        },
        {
          "code": 9402185,
          "regencyCode": 9402,
          "name": "WAME"
        },
        {
          "code": 9402190,
          "regencyCode": 9402,
          "name": "KURULU"
        },
        {
          "code": 9402191,
          "regencyCode": 9402,
          "name": "USILIMO"
        },
        {
          "code": 9402192,
          "regencyCode": 9402,
          "name": "WITA WAYA"
        },
        {
          "code": 9402193,
          "regencyCode": 9402,
          "name": "LIBAREK"
        },
        {
          "code": 9402194,
          "regencyCode": 9402,
          "name": "WADANGKU"
        },
        {
          "code": 9402195,
          "regencyCode": 9402,
          "name": "PISUGI"
        },
        {
          "code": 9402220,
          "regencyCode": 9402,
          "name": "BOLAKME"
        },
        {
          "code": 9402221,
          "regencyCode": 9402,
          "name": "WOLLO"
        },
        {
          "code": 9402222,
          "regencyCode": 9402,
          "name": "YALENGGA"
        },
        {
          "code": 9402223,
          "regencyCode": 9402,
          "name": "TAGIME"
        },
        {
          "code": 9402224,
          "regencyCode": 9402,
          "name": "MOLAGALOME"
        },
        {
          "code": 9402225,
          "regencyCode": 9402,
          "name": "TAGINERI"
        },
        {
          "code": 9402226,
          "regencyCode": 9402,
          "name": "BUGI"
        },
        {
          "code": 9402227,
          "regencyCode": 9402,
          "name": "BPIRI"
        },
        {
          "code": 9402228,
          "regencyCode": 9402,
          "name": "KORAGI"
        },
        {
          "code": 9402611,
          "regencyCode": 9402,
          "name": "ITLAY HASIGE"
        },
        {
          "code": 9402612,
          "regencyCode": 9402,
          "name": "SIEPKOSI"
        },
        {
          "code": 9402614,
          "regencyCode": 9402,
          "name": "POPUGOBA"
        },
        {
          "code": 9403080,
          "regencyCode": 9403,
          "name": "KAUREH"
        },
        {
          "code": 9403081,
          "regencyCode": 9403,
          "name": "AIRU"
        },
        {
          "code": 9403082,
          "regencyCode": 9403,
          "name": "YAPSI"
        },
        {
          "code": 9403140,
          "regencyCode": 9403,
          "name": "KEMTUK"
        },
        {
          "code": 9403150,
          "regencyCode": 9403,
          "name": "KEMTUK GRESI"
        },
        {
          "code": 9403151,
          "regencyCode": 9403,
          "name": "GRESI SELATAN"
        },
        {
          "code": 9403160,
          "regencyCode": 9403,
          "name": "NIMBORAN"
        },
        {
          "code": 9403161,
          "regencyCode": 9403,
          "name": "NIMBORAN TIMUR / NAMBLONG"
        },
        {
          "code": 9403170,
          "regencyCode": 9403,
          "name": "NIMBOKRANG"
        },
        {
          "code": 9403180,
          "regencyCode": 9403,
          "name": "UNURUM GUAY"
        },
        {
          "code": 9403200,
          "regencyCode": 9403,
          "name": "DEMTA"
        },
        {
          "code": 9403201,
          "regencyCode": 9403,
          "name": "YOKARI"
        },
        {
          "code": 9403210,
          "regencyCode": 9403,
          "name": "DEPAPRE"
        },
        {
          "code": 9403211,
          "regencyCode": 9403,
          "name": "RAVENIRARA"
        },
        {
          "code": 9403220,
          "regencyCode": 9403,
          "name": "SENTANI BARAT"
        },
        {
          "code": 9403221,
          "regencyCode": 9403,
          "name": "WAIBU"
        },
        {
          "code": 9403230,
          "regencyCode": 9403,
          "name": "SENTANI"
        },
        {
          "code": 9403231,
          "regencyCode": 9403,
          "name": "EBUNGFAU"
        },
        {
          "code": 9403240,
          "regencyCode": 9403,
          "name": "SENTANI TIMUR"
        },
        {
          "code": 9404050,
          "regencyCode": 9404,
          "name": "UWAPA"
        },
        {
          "code": 9404051,
          "regencyCode": 9404,
          "name": "MENOU"
        },
        {
          "code": 9404052,
          "regencyCode": 9404,
          "name": "DIPA"
        },
        {
          "code": 9404060,
          "regencyCode": 9404,
          "name": "YAUR"
        },
        {
          "code": 9404061,
          "regencyCode": 9404,
          "name": "TELUK UMAR"
        },
        {
          "code": 9404070,
          "regencyCode": 9404,
          "name": "WANGGAR"
        },
        {
          "code": 9404071,
          "regencyCode": 9404,
          "name": "NABIRE BARAT"
        },
        {
          "code": 9404080,
          "regencyCode": 9404,
          "name": "NABIRE"
        },
        {
          "code": 9404081,
          "regencyCode": 9404,
          "name": "TELUK KIMI"
        },
        {
          "code": 9404090,
          "regencyCode": 9404,
          "name": "NAPAN"
        },
        {
          "code": 9404091,
          "regencyCode": 9404,
          "name": "MAKIMI"
        },
        {
          "code": 9404092,
          "regencyCode": 9404,
          "name": "WAPOGA"
        },
        {
          "code": 9404093,
          "regencyCode": 9404,
          "name": "KEPULAUAN MOORA"
        },
        {
          "code": 9404100,
          "regencyCode": 9404,
          "name": "SIRIWO"
        },
        {
          "code": 9404110,
          "regencyCode": 9404,
          "name": "YARO"
        },
        {
          "code": 9408040,
          "regencyCode": 9408,
          "name": "YAPEN TIMUR"
        },
        {
          "code": 9408041,
          "regencyCode": 9408,
          "name": "PANTURA YAPEN"
        },
        {
          "code": 9408042,
          "regencyCode": 9408,
          "name": "TELUK AMPIMOI"
        },
        {
          "code": 9408043,
          "regencyCode": 9408,
          "name": "RAIMBAWI"
        },
        {
          "code": 9408044,
          "regencyCode": 9408,
          "name": "PULAU KURUDU"
        },
        {
          "code": 9408050,
          "regencyCode": 9408,
          "name": "ANGKAISERA"
        },
        {
          "code": 9408051,
          "regencyCode": 9408,
          "name": "KEP. AMBAI"
        },
        {
          "code": 9408052,
          "regencyCode": 9408,
          "name": "YAWAKUKAT"
        },
        {
          "code": 9408060,
          "regencyCode": 9408,
          "name": "YAPEN SELATAN"
        },
        {
          "code": 9408061,
          "regencyCode": 9408,
          "name": "KOSIWO"
        },
        {
          "code": 9408062,
          "regencyCode": 9408,
          "name": "ANATAUREI"
        },
        {
          "code": 9408070,
          "regencyCode": 9408,
          "name": "YAPEN BARAT"
        },
        {
          "code": 9408071,
          "regencyCode": 9408,
          "name": "WONAWA"
        },
        {
          "code": 9408072,
          "regencyCode": 9408,
          "name": "PULAU YERUI"
        },
        {
          "code": 9408080,
          "regencyCode": 9408,
          "name": "POOM"
        },
        {
          "code": 9408081,
          "regencyCode": 9408,
          "name": "WINDESI"
        },
        {
          "code": 9409010,
          "regencyCode": 9409,
          "name": "NUMFOR BARAT"
        },
        {
          "code": 9409011,
          "regencyCode": 9409,
          "name": "ORKERI"
        },
        {
          "code": 9409020,
          "regencyCode": 9409,
          "name": "NUMFOR TIMUR"
        },
        {
          "code": 9409021,
          "regencyCode": 9409,
          "name": "BRUYADORI"
        },
        {
          "code": 9409022,
          "regencyCode": 9409,
          "name": "POIRU"
        },
        {
          "code": 9409030,
          "regencyCode": 9409,
          "name": "PADAIDO"
        },
        {
          "code": 9409031,
          "regencyCode": 9409,
          "name": "AIMANDO PADAIDO"
        },
        {
          "code": 9409040,
          "regencyCode": 9409,
          "name": "BIAK TIMUR"
        },
        {
          "code": 9409041,
          "regencyCode": 9409,
          "name": "ORIDEK"
        },
        {
          "code": 9409050,
          "regencyCode": 9409,
          "name": "BIAK KOTA"
        },
        {
          "code": 9409060,
          "regencyCode": 9409,
          "name": "SAMOFA"
        },
        {
          "code": 9409070,
          "regencyCode": 9409,
          "name": "YENDIDORI"
        },
        {
          "code": 9409080,
          "regencyCode": 9409,
          "name": "BIAK UTARA"
        },
        {
          "code": 9409081,
          "regencyCode": 9409,
          "name": "ANDEY"
        },
        {
          "code": 9409090,
          "regencyCode": 9409,
          "name": "WARSA"
        },
        {
          "code": 9409091,
          "regencyCode": 9409,
          "name": "YAWOSI"
        },
        {
          "code": 9409092,
          "regencyCode": 9409,
          "name": "BONDIFUAR"
        },
        {
          "code": 9409100,
          "regencyCode": 9409,
          "name": "BIAK BARAT"
        },
        {
          "code": 9409101,
          "regencyCode": 9409,
          "name": "SWANDIWE"
        },
        {
          "code": 9410030,
          "regencyCode": 9410,
          "name": "PANIAI TIMUR"
        },
        {
          "code": 9410031,
          "regencyCode": 9410,
          "name": "YATAMO"
        },
        {
          "code": 9410032,
          "regencyCode": 9410,
          "name": "KEBO"
        },
        {
          "code": 9410040,
          "regencyCode": 9410,
          "name": "BIBIDA"
        },
        {
          "code": 9410041,
          "regencyCode": 9410,
          "name": "DUMADAMA"
        },
        {
          "code": 9410070,
          "regencyCode": 9410,
          "name": "ARADIDE"
        },
        {
          "code": 9410071,
          "regencyCode": 9410,
          "name": "EKADIDE"
        },
        {
          "code": 9410080,
          "regencyCode": 9410,
          "name": "PANIAI BARAT"
        },
        {
          "code": 9410081,
          "regencyCode": 9410,
          "name": "SIRIWO"
        },
        {
          "code": 9410090,
          "regencyCode": 9410,
          "name": "BOGOBAIDA"
        },
        {
          "code": 9411040,
          "regencyCode": 9411,
          "name": "FAWI"
        },
        {
          "code": 9411041,
          "regencyCode": 9411,
          "name": "DAGAI"
        },
        {
          "code": 9411042,
          "regencyCode": 9411,
          "name": "KIYAGE"
        },
        {
          "code": 9411050,
          "regencyCode": 9411,
          "name": "MULIA"
        },
        {
          "code": 9411053,
          "regencyCode": 9411,
          "name": "YAMBI"
        },
        {
          "code": 9411054,
          "regencyCode": 9411,
          "name": "ILAMBURAWI"
        },
        {
          "code": 9411055,
          "regencyCode": 9411,
          "name": "MUARA"
        },
        {
          "code": 9411056,
          "regencyCode": 9411,
          "name": "PAGALEME"
        },
        {
          "code": 9411057,
          "regencyCode": 9411,
          "name": "GURAGE"
        },
        {
          "code": 9411058,
          "regencyCode": 9411,
          "name": "IRIMULI"
        },
        {
          "code": 9411060,
          "regencyCode": 9411,
          "name": "ILU"
        },
        {
          "code": 9411061,
          "regencyCode": 9411,
          "name": "TORERE"
        },
        {
          "code": 9411063,
          "regencyCode": 9411,
          "name": "YAMONERI"
        },
        {
          "code": 9411064,
          "regencyCode": 9411,
          "name": "WAEGI"
        },
        {
          "code": 9411065,
          "regencyCode": 9411,
          "name": "NUME"
        },
        {
          "code": 9411066,
          "regencyCode": 9411,
          "name": "NIOGA"
        },
        {
          "code": 9411067,
          "regencyCode": 9411,
          "name": "GUBUME"
        },
        {
          "code": 9411068,
          "regencyCode": 9411,
          "name": "TAGANOMBAK"
        },
        {
          "code": 9411070,
          "regencyCode": 9411,
          "name": "TINGGINAMBUT"
        },
        {
          "code": 9411071,
          "regencyCode": 9411,
          "name": "KALOME"
        },
        {
          "code": 9411072,
          "regencyCode": 9411,
          "name": "WANWI"
        },
        {
          "code": 9411080,
          "regencyCode": 9411,
          "name": "MEWOLUK"
        },
        {
          "code": 9411081,
          "regencyCode": 9411,
          "name": "LUMO"
        },
        {
          "code": 9411082,
          "regencyCode": 9411,
          "name": "MOLANIKIME"
        },
        {
          "code": 9411090,
          "regencyCode": 9411,
          "name": "YAMO"
        },
        {
          "code": 9411091,
          "regencyCode": 9411,
          "name": "DOKOME"
        },
        {
          "code": 9412010,
          "regencyCode": 9412,
          "name": "MIMIKA BARAT"
        },
        {
          "code": 9412011,
          "regencyCode": 9412,
          "name": "MIMIKA BARAT JAUH"
        },
        {
          "code": 9412012,
          "regencyCode": 9412,
          "name": "MIMIKA BARAT TENGAH"
        },
        {
          "code": 9412013,
          "regencyCode": 9412,
          "name": "AMAR"
        },
        {
          "code": 9412020,
          "regencyCode": 9412,
          "name": "MIMIKA TIMUR"
        },
        {
          "code": 9412021,
          "regencyCode": 9412,
          "name": "MIMIKA TENGAH"
        },
        {
          "code": 9412022,
          "regencyCode": 9412,
          "name": "MIMIKA TIMUR JAUH"
        },
        {
          "code": 9412030,
          "regencyCode": 9412,
          "name": "MIMIKA BARU"
        },
        {
          "code": 9412031,
          "regencyCode": 9412,
          "name": "KUALA KENCANA"
        },
        {
          "code": 9412032,
          "regencyCode": 9412,
          "name": "TEMBAGAPURA"
        },
        {
          "code": 9412033,
          "regencyCode": 9412,
          "name": "WANIA"
        },
        {
          "code": 9412034,
          "regencyCode": 9412,
          "name": "IWAKA"
        },
        {
          "code": 9412035,
          "regencyCode": 9412,
          "name": "KWAMKI NARAMA"
        },
        {
          "code": 9412040,
          "regencyCode": 9412,
          "name": "AGIMUGA"
        },
        {
          "code": 9412041,
          "regencyCode": 9412,
          "name": "JILA"
        },
        {
          "code": 9412042,
          "regencyCode": 9412,
          "name": "JITA"
        },
        {
          "code": 9412043,
          "regencyCode": 9412,
          "name": "ALAMA"
        },
        {
          "code": 9412044,
          "regencyCode": 9412,
          "name": "HOYA"
        },
        {
          "code": 9413010,
          "regencyCode": 9413,
          "name": "JAIR"
        },
        {
          "code": 9413011,
          "regencyCode": 9413,
          "name": "SUBUR"
        },
        {
          "code": 9413013,
          "regencyCode": 9413,
          "name": "KIA"
        },
        {
          "code": 9413020,
          "regencyCode": 9413,
          "name": "MINDIPTANA"
        },
        {
          "code": 9413021,
          "regencyCode": 9413,
          "name": "INIYANDIT"
        },
        {
          "code": 9413022,
          "regencyCode": 9413,
          "name": "KOMBUT"
        },
        {
          "code": 9413023,
          "regencyCode": 9413,
          "name": "SESNUK"
        },
        {
          "code": 9413030,
          "regencyCode": 9413,
          "name": "MANDOBO"
        },
        {
          "code": 9413031,
          "regencyCode": 9413,
          "name": "FOFI"
        },
        {
          "code": 9413032,
          "regencyCode": 9413,
          "name": "ARIMOP"
        },
        {
          "code": 9413040,
          "regencyCode": 9413,
          "name": "KOUH"
        },
        {
          "code": 9413041,
          "regencyCode": 9413,
          "name": "BOMAKIA"
        },
        {
          "code": 9413042,
          "regencyCode": 9413,
          "name": "FIRIWAGE"
        },
        {
          "code": 9413043,
          "regencyCode": 9413,
          "name": "MANGGELUM"
        },
        {
          "code": 9413044,
          "regencyCode": 9413,
          "name": "YANIRUMA"
        },
        {
          "code": 9413045,
          "regencyCode": 9413,
          "name": "KAWAGIT"
        },
        {
          "code": 9413046,
          "regencyCode": 9413,
          "name": "KOMBAY"
        },
        {
          "code": 9413050,
          "regencyCode": 9413,
          "name": "WAROPKO"
        },
        {
          "code": 9413051,
          "regencyCode": 9413,
          "name": "AMBATKWI"
        },
        {
          "code": 9413052,
          "regencyCode": 9413,
          "name": "NINATI"
        },
        {
          "code": 9414010,
          "regencyCode": 9414,
          "name": "NAMBIOMAN BAPAI"
        },
        {
          "code": 9414011,
          "regencyCode": 9414,
          "name": "MINYAMUR"
        },
        {
          "code": 9414020,
          "regencyCode": 9414,
          "name": "EDERA"
        },
        {
          "code": 9414021,
          "regencyCode": 9414,
          "name": "VENAHA"
        },
        {
          "code": 9414022,
          "regencyCode": 9414,
          "name": "SYAHCAME"
        },
        {
          "code": 9414023,
          "regencyCode": 9414,
          "name": "BAMGI"
        },
        {
          "code": 9414024,
          "regencyCode": 9414,
          "name": "YAKOMI"
        },
        {
          "code": 9414030,
          "regencyCode": 9414,
          "name": "OBAA"
        },
        {
          "code": 9414031,
          "regencyCode": 9414,
          "name": "PASSUE"
        },
        {
          "code": 9414040,
          "regencyCode": 9414,
          "name": "HAJU"
        },
        {
          "code": 9414050,
          "regencyCode": 9414,
          "name": "ASSUE"
        },
        {
          "code": 9414060,
          "regencyCode": 9414,
          "name": "CITAKMITAK"
        },
        {
          "code": 9414061,
          "regencyCode": 9414,
          "name": "KAIBAR"
        },
        {
          "code": 9414062,
          "regencyCode": 9414,
          "name": "PASSUE BAWAH"
        },
        {
          "code": 9414063,
          "regencyCode": 9414,
          "name": "TI-ZAIN"
        },
        {
          "code": 9415010,
          "regencyCode": 9415,
          "name": "PANTAI KASUARI"
        },
        {
          "code": 9415011,
          "regencyCode": 9415,
          "name": "KOPAY"
        },
        {
          "code": 9415012,
          "regencyCode": 9415,
          "name": "DER KOUMUR"
        },
        {
          "code": 9415013,
          "regencyCode": 9415,
          "name": "SAFAN"
        },
        {
          "code": 9415020,
          "regencyCode": 9415,
          "name": "FAYIT"
        },
        {
          "code": 9415030,
          "regencyCode": 9415,
          "name": "ATSY"
        },
        {
          "code": 9415031,
          "regencyCode": 9415,
          "name": "SIRETS"
        },
        {
          "code": 9415032,
          "regencyCode": 9415,
          "name": "AYIP"
        },
        {
          "code": 9415033,
          "regencyCode": 9415,
          "name": "BECTBAMU"
        },
        {
          "code": 9415040,
          "regencyCode": 9415,
          "name": "SUATOR"
        },
        {
          "code": 9415041,
          "regencyCode": 9415,
          "name": "KOLF BRAZA"
        },
        {
          "code": 9415050,
          "regencyCode": 9415,
          "name": "AKAT"
        },
        {
          "code": 9415051,
          "regencyCode": 9415,
          "name": "JETSY"
        },
        {
          "code": 9415060,
          "regencyCode": 9415,
          "name": "AGATS"
        },
        {
          "code": 9415070,
          "regencyCode": 9415,
          "name": "SAWA ERMA"
        },
        {
          "code": 9415071,
          "regencyCode": 9415,
          "name": "SURU-SURU"
        },
        {
          "code": 9415072,
          "regencyCode": 9415,
          "name": "UNIR SIRAU"
        },
        {
          "code": 9415073,
          "regencyCode": 9415,
          "name": "JOERAT"
        },
        {
          "code": 9415074,
          "regencyCode": 9415,
          "name": "PULAU TIGA"
        },
        {
          "code": 9416010,
          "regencyCode": 9416,
          "name": "KURIMA"
        },
        {
          "code": 9416011,
          "regencyCode": 9416,
          "name": "MUSAIK"
        },
        {
          "code": 9416013,
          "regencyCode": 9416,
          "name": "DEKAI"
        },
        {
          "code": 9416014,
          "regencyCode": 9416,
          "name": "OBIO"
        },
        {
          "code": 9416015,
          "regencyCode": 9416,
          "name": "PASEMA"
        },
        {
          "code": 9416016,
          "regencyCode": 9416,
          "name": "AMUMA"
        },
        {
          "code": 9416017,
          "regencyCode": 9416,
          "name": "SURU-SURU"
        },
        {
          "code": 9416018,
          "regencyCode": 9416,
          "name": "WUSAMA"
        },
        {
          "code": 9416019,
          "regencyCode": 9416,
          "name": "SILIMO"
        },
        {
          "code": 9416020,
          "regencyCode": 9416,
          "name": "NINIA"
        },
        {
          "code": 9416021,
          "regencyCode": 9416,
          "name": "HOLUWON"
        },
        {
          "code": 9416022,
          "regencyCode": 9416,
          "name": "LOLAT"
        },
        {
          "code": 9416023,
          "regencyCode": 9416,
          "name": "LANGDA"
        },
        {
          "code": 9416024,
          "regencyCode": 9416,
          "name": "BOMELA"
        },
        {
          "code": 9416025,
          "regencyCode": 9416,
          "name": "SUNTAMON"
        },
        {
          "code": 9416026,
          "regencyCode": 9416,
          "name": "SOBAHAM"
        },
        {
          "code": 9416027,
          "regencyCode": 9416,
          "name": "KORUPUN"
        },
        {
          "code": 9416028,
          "regencyCode": 9416,
          "name": "SELA"
        },
        {
          "code": 9416029,
          "regencyCode": 9416,
          "name": "KWELAMDUA"
        },
        {
          "code": 9416030,
          "regencyCode": 9416,
          "name": "ANGGRUK"
        },
        {
          "code": 9416031,
          "regencyCode": 9416,
          "name": "PANGGEMA"
        },
        {
          "code": 9416032,
          "regencyCode": 9416,
          "name": "WALMA"
        },
        {
          "code": 9416033,
          "regencyCode": 9416,
          "name": "KOSAREK"
        },
        {
          "code": 9416034,
          "regencyCode": 9416,
          "name": "UBAHAK"
        },
        {
          "code": 9416035,
          "regencyCode": 9416,
          "name": "NALCA"
        },
        {
          "code": 9416036,
          "regencyCode": 9416,
          "name": "PULDAMA"
        },
        {
          "code": 9416037,
          "regencyCode": 9416,
          "name": "NIPSAN"
        },
        {
          "code": 9416041,
          "regencyCode": 9416,
          "name": "SAMENAGE"
        },
        {
          "code": 9416042,
          "regencyCode": 9416,
          "name": "TANGMA"
        },
        {
          "code": 9416043,
          "regencyCode": 9416,
          "name": "SOBA"
        },
        {
          "code": 9416044,
          "regencyCode": 9416,
          "name": "MUGI"
        },
        {
          "code": 9416045,
          "regencyCode": 9416,
          "name": "YOGOSEM"
        },
        {
          "code": 9416046,
          "regencyCode": 9416,
          "name": "KAYO"
        },
        {
          "code": 9416047,
          "regencyCode": 9416,
          "name": "SUMO"
        },
        {
          "code": 9416048,
          "regencyCode": 9416,
          "name": "HOGIO"
        },
        {
          "code": 9416049,
          "regencyCode": 9416,
          "name": "UKHA"
        },
        {
          "code": 9416051,
          "regencyCode": 9416,
          "name": "WERIMA"
        },
        {
          "code": 9416052,
          "regencyCode": 9416,
          "name": "SOLOIKMA"
        },
        {
          "code": 9416053,
          "regencyCode": 9416,
          "name": "SERADALA"
        },
        {
          "code": 9416054,
          "regencyCode": 9416,
          "name": "KABIANGGAMA"
        },
        {
          "code": 9416055,
          "regencyCode": 9416,
          "name": "KWIKMA"
        },
        {
          "code": 9416056,
          "regencyCode": 9416,
          "name": "HILIPUK"
        },
        {
          "code": 9416057,
          "regencyCode": 9416,
          "name": "YAHULIAMBUT"
        },
        {
          "code": 9416058,
          "regencyCode": 9416,
          "name": "HEREAPINI"
        },
        {
          "code": 9416059,
          "regencyCode": 9416,
          "name": "UBALIHI"
        },
        {
          "code": 9416061,
          "regencyCode": 9416,
          "name": "TALAMBO"
        },
        {
          "code": 9416062,
          "regencyCode": 9416,
          "name": "PRONGGOLI"
        },
        {
          "code": 9416063,
          "regencyCode": 9416,
          "name": "ENDOMEN"
        },
        {
          "code": 9416065,
          "regencyCode": 9416,
          "name": "KONA"
        },
        {
          "code": 9416066,
          "regencyCode": 9416,
          "name": "DURAM"
        },
        {
          "code": 9416067,
          "regencyCode": 9416,
          "name": "DIRWEMNA"
        },
        {
          "code": 9417010,
          "regencyCode": 9417,
          "name": "IWUR"
        },
        {
          "code": 9417011,
          "regencyCode": 9417,
          "name": "KAWOR"
        },
        {
          "code": 9417012,
          "regencyCode": 9417,
          "name": "TARUP"
        },
        {
          "code": 9417013,
          "regencyCode": 9417,
          "name": "AWINBON"
        },
        {
          "code": 9417020,
          "regencyCode": 9417,
          "name": "OKSIBIL"
        },
        {
          "code": 9417021,
          "regencyCode": 9417,
          "name": "PEPERA"
        },
        {
          "code": 9417022,
          "regencyCode": 9417,
          "name": "ALEMSOM"
        },
        {
          "code": 9417023,
          "regencyCode": 9417,
          "name": "SERAMBAKON"
        },
        {
          "code": 9417024,
          "regencyCode": 9417,
          "name": "KOLOMDOL"
        },
        {
          "code": 9417025,
          "regencyCode": 9417,
          "name": "OKSOP"
        },
        {
          "code": 9417026,
          "regencyCode": 9417,
          "name": "OK BAPE"
        },
        {
          "code": 9417027,
          "regencyCode": 9417,
          "name": "OK AON"
        },
        {
          "code": 9417030,
          "regencyCode": 9417,
          "name": "BORME"
        },
        {
          "code": 9417031,
          "regencyCode": 9417,
          "name": "BIME"
        },
        {
          "code": 9417032,
          "regencyCode": 9417,
          "name": "EPUMEK"
        },
        {
          "code": 9417033,
          "regencyCode": 9417,
          "name": "WEIME"
        },
        {
          "code": 9417034,
          "regencyCode": 9417,
          "name": "PAMEK"
        },
        {
          "code": 9417035,
          "regencyCode": 9417,
          "name": "NONGME"
        },
        {
          "code": 9417036,
          "regencyCode": 9417,
          "name": "BATANI"
        },
        {
          "code": 9417040,
          "regencyCode": 9417,
          "name": "OKBI"
        },
        {
          "code": 9417041,
          "regencyCode": 9417,
          "name": "ABOY"
        },
        {
          "code": 9417042,
          "regencyCode": 9417,
          "name": "OKBAB"
        },
        {
          "code": 9417043,
          "regencyCode": 9417,
          "name": "TEIRAPLU"
        },
        {
          "code": 9417044,
          "regencyCode": 9417,
          "name": "YEFTA"
        },
        {
          "code": 9417050,
          "regencyCode": 9417,
          "name": "KIWIROK"
        },
        {
          "code": 9417051,
          "regencyCode": 9417,
          "name": "KIWIROK TIMUR"
        },
        {
          "code": 9417052,
          "regencyCode": 9417,
          "name": "OKSEBANG"
        },
        {
          "code": 9417053,
          "regencyCode": 9417,
          "name": "OKHIKA"
        },
        {
          "code": 9417054,
          "regencyCode": 9417,
          "name": "OKLIP"
        },
        {
          "code": 9417055,
          "regencyCode": 9417,
          "name": "OKSAMOL"
        },
        {
          "code": 9417056,
          "regencyCode": 9417,
          "name": "OKBEMTA"
        },
        {
          "code": 9417060,
          "regencyCode": 9417,
          "name": "BATOM"
        },
        {
          "code": 9417061,
          "regencyCode": 9417,
          "name": "MURKIM"
        },
        {
          "code": 9417062,
          "regencyCode": 9417,
          "name": "MOFINOP"
        },
        {
          "code": 9418010,
          "regencyCode": 9418,
          "name": "KANGGIME"
        },
        {
          "code": 9418011,
          "regencyCode": 9418,
          "name": "WONIKI"
        },
        {
          "code": 9418012,
          "regencyCode": 9418,
          "name": "NABUNAGE"
        },
        {
          "code": 9418013,
          "regencyCode": 9418,
          "name": "GILUBANDU"
        },
        {
          "code": 9418014,
          "regencyCode": 9418,
          "name": "WAKUO"
        },
        {
          "code": 9418015,
          "regencyCode": 9418,
          "name": "AWEKU"
        },
        {
          "code": 9418016,
          "regencyCode": 9418,
          "name": "BOGONUK"
        },
        {
          "code": 9418020,
          "regencyCode": 9418,
          "name": "KARUBAGA"
        },
        {
          "code": 9418021,
          "regencyCode": 9418,
          "name": "GOYAGE"
        },
        {
          "code": 9418022,
          "regencyCode": 9418,
          "name": "WUNIN"
        },
        {
          "code": 9418023,
          "regencyCode": 9418,
          "name": "KONDAGA"
        },
        {
          "code": 9418024,
          "regencyCode": 9418,
          "name": "NELAWI"
        },
        {
          "code": 9418025,
          "regencyCode": 9418,
          "name": "KUARI"
        },
        {
          "code": 9418026,
          "regencyCode": 9418,
          "name": "LIANOGOMA"
        },
        {
          "code": 9418027,
          "regencyCode": 9418,
          "name": "BIUK"
        },
        {
          "code": 9418030,
          "regencyCode": 9418,
          "name": "BOKONDINI"
        },
        {
          "code": 9418031,
          "regencyCode": 9418,
          "name": "BOKONERI"
        },
        {
          "code": 9418032,
          "regencyCode": 9418,
          "name": "BEWANI"
        },
        {
          "code": 9418040,
          "regencyCode": 9418,
          "name": "KEMBU"
        },
        {
          "code": 9418041,
          "regencyCode": 9418,
          "name": "WINA"
        },
        {
          "code": 9418042,
          "regencyCode": 9418,
          "name": "UMAGI"
        },
        {
          "code": 9418043,
          "regencyCode": 9418,
          "name": "PANAGA"
        },
        {
          "code": 9418044,
          "regencyCode": 9418,
          "name": "POGANERI"
        },
        {
          "code": 9418045,
          "regencyCode": 9418,
          "name": "KAMBONERI"
        },
        {
          "code": 9418046,
          "regencyCode": 9418,
          "name": "AIR GARAM"
        },
        {
          "code": 9418047,
          "regencyCode": 9418,
          "name": "DOW"
        },
        {
          "code": 9418048,
          "regencyCode": 9418,
          "name": "WARI / TAIYEVE"
        },
        {
          "code": 9418049,
          "regencyCode": 9418,
          "name": "EGIAM"
        },
        {
          "code": 9418051,
          "regencyCode": 9418,
          "name": "NUNGGAWI"
        },
        {
          "code": 9418060,
          "regencyCode": 9418,
          "name": "KUBU"
        },
        {
          "code": 9418061,
          "regencyCode": 9418,
          "name": "ANAWI"
        },
        {
          "code": 9418062,
          "regencyCode": 9418,
          "name": "WUGI"
        },
        {
          "code": 9418070,
          "regencyCode": 9418,
          "name": "GEYA"
        },
        {
          "code": 9418071,
          "regencyCode": 9418,
          "name": "WENAM"
        },
        {
          "code": 9418080,
          "regencyCode": 9418,
          "name": "NUMBA"
        },
        {
          "code": 9418081,
          "regencyCode": 9418,
          "name": "KAI"
        },
        {
          "code": 9418090,
          "regencyCode": 9418,
          "name": "DUNDU"
        },
        {
          "code": 9418100,
          "regencyCode": 9418,
          "name": "GUNDAGI"
        },
        {
          "code": 9418110,
          "regencyCode": 9418,
          "name": "TIMORI"
        },
        {
          "code": 9418121,
          "regencyCode": 9418,
          "name": "YUNERI"
        },
        {
          "code": 9418125,
          "regencyCode": 9418,
          "name": "TAGIME"
        },
        {
          "code": 9418126,
          "regencyCode": 9418,
          "name": "DANIME"
        },
        {
          "code": 9418127,
          "regencyCode": 9418,
          "name": "YUKO"
        },
        {
          "code": 9418541,
          "regencyCode": 9418,
          "name": "TELENGGEME"
        },
        {
          "code": 9418542,
          "regencyCode": 9418,
          "name": "GIKA"
        },
        {
          "code": 9418543,
          "regencyCode": 9418,
          "name": "TAGINERI"
        },
        {
          "code": 9419021,
          "regencyCode": 9419,
          "name": "PANTAI TIMUR BAGIAN BARAT"
        },
        {
          "code": 9419022,
          "regencyCode": 9419,
          "name": "PANTAI TIMUR"
        },
        {
          "code": 9419024,
          "regencyCode": 9419,
          "name": "SUNGAI BIRI"
        },
        {
          "code": 9419031,
          "regencyCode": 9419,
          "name": "BONGGO"
        },
        {
          "code": 9419032,
          "regencyCode": 9419,
          "name": "BONGGO TIMUR"
        },
        {
          "code": 9419033,
          "regencyCode": 9419,
          "name": "BONGGO BARAT"
        },
        {
          "code": 9419040,
          "regencyCode": 9419,
          "name": "TOR ATAS"
        },
        {
          "code": 9419041,
          "regencyCode": 9419,
          "name": "ISMARI"
        },
        {
          "code": 9419050,
          "regencyCode": 9419,
          "name": "SARMI"
        },
        {
          "code": 9419051,
          "regencyCode": 9419,
          "name": "SARMI TIMUR"
        },
        {
          "code": 9419052,
          "regencyCode": 9419,
          "name": "SARMI SELATAN"
        },
        {
          "code": 9419053,
          "regencyCode": 9419,
          "name": "SOBEY"
        },
        {
          "code": 9419054,
          "regencyCode": 9419,
          "name": "MUARA TOR"
        },
        {
          "code": 9419055,
          "regencyCode": 9419,
          "name": "VERKAM"
        },
        {
          "code": 9419060,
          "regencyCode": 9419,
          "name": "PANTAI BARAT"
        },
        {
          "code": 9419061,
          "regencyCode": 9419,
          "name": "APAWER HULU"
        },
        {
          "code": 9419062,
          "regencyCode": 9419,
          "name": "APAWER HILIR"
        },
        {
          "code": 9419063,
          "regencyCode": 9419,
          "name": "APAWER TENGAH"
        },
        {
          "code": 9420010,
          "regencyCode": 9420,
          "name": "WEB"
        },
        {
          "code": 9420011,
          "regencyCode": 9420,
          "name": "TOWE"
        },
        {
          "code": 9420012,
          "regencyCode": 9420,
          "name": "YAFFI"
        },
        {
          "code": 9420020,
          "regencyCode": 9420,
          "name": "SENGGI"
        },
        {
          "code": 9420021,
          "regencyCode": 9420,
          "name": "KAISENAR"
        },
        {
          "code": 9420030,
          "regencyCode": 9420,
          "name": "WARIS"
        },
        {
          "code": 9420040,
          "regencyCode": 9420,
          "name": "ARSO"
        },
        {
          "code": 9420041,
          "regencyCode": 9420,
          "name": "ARSO TIMUR"
        },
        {
          "code": 9420042,
          "regencyCode": 9420,
          "name": "ARSO BARAT"
        },
        {
          "code": 9420043,
          "regencyCode": 9420,
          "name": "MANNEM"
        },
        {
          "code": 9420050,
          "regencyCode": 9420,
          "name": "SKANTO"
        },
        {
          "code": 9426010,
          "regencyCode": 9426,
          "name": "WAROPEN BAWAH"
        },
        {
          "code": 9426011,
          "regencyCode": 9426,
          "name": "INGGERUS"
        },
        {
          "code": 9426012,
          "regencyCode": 9426,
          "name": "UREI FAISEI"
        },
        {
          "code": 9426013,
          "regencyCode": 9426,
          "name": "OUDATE"
        },
        {
          "code": 9426014,
          "regencyCode": 9426,
          "name": "WAPOGA"
        },
        {
          "code": 9426020,
          "regencyCode": 9426,
          "name": "MASIREI"
        },
        {
          "code": 9426021,
          "regencyCode": 9426,
          "name": "RISEI SAYATI"
        },
        {
          "code": 9426022,
          "regencyCode": 9426,
          "name": "DEMBA"
        },
        {
          "code": 9426023,
          "regencyCode": 9426,
          "name": "SOYOI MAMBAI"
        },
        {
          "code": 9426024,
          "regencyCode": 9426,
          "name": "WONTI"
        },
        {
          "code": 9426030,
          "regencyCode": 9426,
          "name": "WALANI"
        },
        {
          "code": 9426040,
          "regencyCode": 9426,
          "name": "KIRIHI"
        },
        {
          "code": 9427010,
          "regencyCode": 9427,
          "name": "SUPIORI SELATAN"
        },
        {
          "code": 9427011,
          "regencyCode": 9427,
          "name": "KEPULAUAN ARURI"
        },
        {
          "code": 9427020,
          "regencyCode": 9427,
          "name": "SUPIORI UTARA"
        },
        {
          "code": 9427021,
          "regencyCode": 9427,
          "name": "SUPIORI BARAT"
        },
        {
          "code": 9427030,
          "regencyCode": 9427,
          "name": "SUPIORI TIMUR"
        },
        {
          "code": 9428030,
          "regencyCode": 9428,
          "name": "WAROPEN ATAS"
        },
        {
          "code": 9428031,
          "regencyCode": 9428,
          "name": "BENUKI"
        },
        {
          "code": 9428032,
          "regencyCode": 9428,
          "name": "SAWAI"
        },
        {
          "code": 9428040,
          "regencyCode": 9428,
          "name": "MAMBERAMO ILIR"
        },
        {
          "code": 9428050,
          "regencyCode": 9428,
          "name": "MAMBERAMO TENGAH"
        },
        {
          "code": 9428051,
          "regencyCode": 9428,
          "name": "IWASO"
        },
        {
          "code": 9428060,
          "regencyCode": 9428,
          "name": "MAMBERAMO TENGAH TIMUR"
        },
        {
          "code": 9428070,
          "regencyCode": 9428,
          "name": "ROFAER"
        },
        {
          "code": 9428080,
          "regencyCode": 9428,
          "name": "MAMBERAMO ULU"
        },
        {
          "code": 9429010,
          "regencyCode": 9429,
          "name": "WOSAK"
        },
        {
          "code": 9429020,
          "regencyCode": 9429,
          "name": "KENYAM"
        },
        {
          "code": 9429030,
          "regencyCode": 9429,
          "name": "GESELMA"
        },
        {
          "code": 9429040,
          "regencyCode": 9429,
          "name": "MAPENDUMA"
        },
        {
          "code": 9429050,
          "regencyCode": 9429,
          "name": "MUGI"
        },
        {
          "code": 9429060,
          "regencyCode": 9429,
          "name": "YIGI"
        },
        {
          "code": 9429070,
          "regencyCode": 9429,
          "name": "MBUWA"
        },
        {
          "code": 9429080,
          "regencyCode": 9429,
          "name": "GEAREK"
        },
        {
          "code": 9430010,
          "regencyCode": 9430,
          "name": "MAKKI"
        },
        {
          "code": 9430011,
          "regencyCode": 9430,
          "name": "GUPURA"
        },
        {
          "code": 9430012,
          "regencyCode": 9430,
          "name": "KOLAWA"
        },
        {
          "code": 9430013,
          "regencyCode": 9430,
          "name": "GELOK BEAM"
        },
        {
          "code": 9430020,
          "regencyCode": 9430,
          "name": "PIRIME"
        },
        {
          "code": 9430021,
          "regencyCode": 9430,
          "name": "BUGUK GONA"
        },
        {
          "code": 9430022,
          "regencyCode": 9430,
          "name": "MILIMBO"
        },
        {
          "code": 9430023,
          "regencyCode": 9430,
          "name": "GOLLO"
        },
        {
          "code": 9430024,
          "regencyCode": 9430,
          "name": "WIRINGGABUT"
        },
        {
          "code": 9430030,
          "regencyCode": 9430,
          "name": "TIOM"
        },
        {
          "code": 9430031,
          "regencyCode": 9430,
          "name": "NOGI"
        },
        {
          "code": 9430032,
          "regencyCode": 9430,
          "name": "MOKONI"
        },
        {
          "code": 9430033,
          "regencyCode": 9430,
          "name": "NINAME"
        },
        {
          "code": 9430034,
          "regencyCode": 9430,
          "name": "YIGINUA"
        },
        {
          "code": 9430040,
          "regencyCode": 9430,
          "name": "BALINGGA"
        },
        {
          "code": 9430041,
          "regencyCode": 9430,
          "name": "BALINGGA BARAT"
        },
        {
          "code": 9430042,
          "regencyCode": 9430,
          "name": "BRUWA"
        },
        {
          "code": 9430050,
          "regencyCode": 9430,
          "name": "KUYAWAGE"
        },
        {
          "code": 9430051,
          "regencyCode": 9430,
          "name": "WANO BARAT"
        },
        {
          "code": 9430060,
          "regencyCode": 9430,
          "name": "MALAGAINERI"
        },
        {
          "code": 9430061,
          "regencyCode": 9430,
          "name": "MELAGAI"
        },
        {
          "code": 9430070,
          "regencyCode": 9430,
          "name": "TIOMNERI"
        },
        {
          "code": 9430071,
          "regencyCode": 9430,
          "name": "WEREKA"
        },
        {
          "code": 9430080,
          "regencyCode": 9430,
          "name": "DIMBA"
        },
        {
          "code": 9430081,
          "regencyCode": 9430,
          "name": "KELULOME"
        },
        {
          "code": 9430090,
          "regencyCode": 9430,
          "name": "GAMELIA"
        },
        {
          "code": 9430091,
          "regencyCode": 9430,
          "name": "KARU"
        },
        {
          "code": 9430092,
          "regencyCode": 9430,
          "name": "YILUK"
        },
        {
          "code": 9430093,
          "regencyCode": 9430,
          "name": "GUNA"
        },
        {
          "code": 9430100,
          "regencyCode": 9430,
          "name": "POGA"
        },
        {
          "code": 9430101,
          "regencyCode": 9430,
          "name": "MUARA"
        },
        {
          "code": 9431010,
          "regencyCode": 9431,
          "name": "KOBAKMA"
        },
        {
          "code": 9431020,
          "regencyCode": 9431,
          "name": "ILUGWA"
        },
        {
          "code": 9431030,
          "regencyCode": 9431,
          "name": "KELILA"
        },
        {
          "code": 9431040,
          "regencyCode": 9431,
          "name": "ERAGAYAM"
        },
        {
          "code": 9431050,
          "regencyCode": 9431,
          "name": "MEGAMBILIS"
        },
        {
          "code": 9432010,
          "regencyCode": 9432,
          "name": "WELAREK"
        },
        {
          "code": 9432020,
          "regencyCode": 9432,
          "name": "APALAPSILI"
        },
        {
          "code": 9432030,
          "regencyCode": 9432,
          "name": "ABENAHO"
        },
        {
          "code": 9432040,
          "regencyCode": 9432,
          "name": "ELELIM"
        },
        {
          "code": 9432050,
          "regencyCode": 9432,
          "name": "BENAWA"
        },
        {
          "code": 9433010,
          "regencyCode": 9433,
          "name": "AGADUGUME"
        },
        {
          "code": 9433020,
          "regencyCode": 9433,
          "name": "GOME"
        },
        {
          "code": 9433030,
          "regencyCode": 9433,
          "name": "ILAGA"
        },
        {
          "code": 9433040,
          "regencyCode": 9433,
          "name": "SINAK"
        },
        {
          "code": 9433050,
          "regencyCode": 9433,
          "name": "POGOMA"
        },
        {
          "code": 9433060,
          "regencyCode": 9433,
          "name": "WANGBE"
        },
        {
          "code": 9433070,
          "regencyCode": 9433,
          "name": "BEOGA"
        },
        {
          "code": 9433080,
          "regencyCode": 9433,
          "name": "DOUFO"
        },
        {
          "code": 9434010,
          "regencyCode": 9434,
          "name": "SUKIKAI SELATAN"
        },
        {
          "code": 9434020,
          "regencyCode": 9434,
          "name": "PIYAIYE"
        },
        {
          "code": 9434030,
          "regencyCode": 9434,
          "name": "MAPIA BARAT"
        },
        {
          "code": 9434040,
          "regencyCode": 9434,
          "name": "MAPIA TENGAH"
        },
        {
          "code": 9434050,
          "regencyCode": 9434,
          "name": "MAPIA"
        },
        {
          "code": 9434060,
          "regencyCode": 9434,
          "name": "DOGIYAI"
        },
        {
          "code": 9434070,
          "regencyCode": 9434,
          "name": "KAMU SELATAN"
        },
        {
          "code": 9434080,
          "regencyCode": 9434,
          "name": "KAMU"
        },
        {
          "code": 9434090,
          "regencyCode": 9434,
          "name": "KAMU TIMUR"
        },
        {
          "code": 9434100,
          "regencyCode": 9434,
          "name": "KAMU UTARA"
        },
        {
          "code": 9435010,
          "regencyCode": 9435,
          "name": "HOMEYO"
        },
        {
          "code": 9435020,
          "regencyCode": 9435,
          "name": "SUGAPA"
        },
        {
          "code": 9435030,
          "regencyCode": 9435,
          "name": "HITADIPA"
        },
        {
          "code": 9435040,
          "regencyCode": 9435,
          "name": "AGISIGA"
        },
        {
          "code": 9435050,
          "regencyCode": 9435,
          "name": "BIANDOGA"
        },
        {
          "code": 9435060,
          "regencyCode": 9435,
          "name": "WANDAI"
        },
        {
          "code": 9436010,
          "regencyCode": 9436,
          "name": "KAPIRAYA"
        },
        {
          "code": 9436020,
          "regencyCode": 9436,
          "name": "TIGI BARAT"
        },
        {
          "code": 9436030,
          "regencyCode": 9436,
          "name": "TIGI"
        },
        {
          "code": 9436040,
          "regencyCode": 9436,
          "name": "TIGI TIMUR"
        },
        {
          "code": 9436050,
          "regencyCode": 9436,
          "name": "BOWOBADO"
        },
        {
          "code": 9471010,
          "regencyCode": 9471,
          "name": "MUARA TAMI"
        },
        {
          "code": 9471020,
          "regencyCode": 9471,
          "name": "ABEPURA"
        },
        {
          "code": 9471021,
          "regencyCode": 9471,
          "name": "HERAM"
        },
        {
          "code": 9471030,
          "regencyCode": 9471,
          "name": "JAYAPURA SELATAN"
        },
        {
          "code": 9471040,
          "regencyCode": 9471,
          "name": "JAYAPURA UTARA"
        }
      ]
    )
  }
}
