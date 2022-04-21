const url = "https://siata.gov.co/ultimasFotosCamaras/";

const linksCamsAMVA = [
  "ultimacam_FishEye_AMVA.jpg",
  "ultimacam_FishEye_Aula_Ambiental.jpg",
  "ultimacam_FishEye_Aeroparque.jpg",
  "ultimacam_FishEye_EAFIT.jpg",
  "ultimacam_FishEye_SIATA.jpg",
  "ultimacam_capa_limite_santo_domingo.jpg",
  "ultimacam_89_TORRESIATA_occidente.jpg",
  "ultimacam_81_TORRESIATA_oriente.jpg",
  "ultimacam_88_TORRESIATA_noroccidente.jpg",
  "ultimacam_82_TORRESIATA_suroriente.jpg",
  "ultimacam_deslizamiento_rodeo_alto.jpg",
  "ultimacam_deslizamiento_edificio_rodeo_alto.jpg",
  "ultimacam_deslizamiento_palmas_carulla.jpg",
  "ultimacam_deslizamiento_el_pacifico.jpg",
  "ultimacam_deslizamiento_metro_acevedo.jpg",
  "ultimacam_deslizamiento_villatina.jpg",
  "ultimacam_deslizamiento_bermejala.jpg",
  "ultimacam_socavacion_metro_acevedo.jpg",
  "ultimacam_nivel_el_indio.jpg",
  "ultimacam_estructural_animalx-palmas.jpg",
  "ultimacam_estructural_animalx-palmas2.jpg",
  "ultimacam_termica_eafit.jpg",
  "ultimacam_visible_eafit.jpg",
  "ultimacam_visible_prueba_torre.jpg",
  "ultimacam_termica_tres_cruces.jpg",
  "ultimacam_incendio_cerro_tres_cruces.jpg",
  "ultimacam_termica_prueba_torre.jpg",
  "ultimacam_visible_aeroparque.jpg",
  "ultimacam_termica_aeroparque.jpg",
  "ultimacam_86_TORRESIATA_nororiente.jpg",
  "ultimacam_termica_colegio_lusitania.jpg",
  "ultimacam_visible_colegio_lusitania.jpg",
  "ultimacam_099_NIVEL.jpg",
  "ultimacam_puente_musicos.jpg",
  "ultimacam_dep_san_juan.jpg",
  "ultimacam_dep_suramericana.jpg",
  "ultimacam_terminal_norte.jpg",
  "ultimacam_dep_bulerias.jpg",
  "ultimacam_color_33.jpg",
  "ultimacam_dep_feria_ganado.jpg",
  "ultimacam_dep_san_juan_con_80.jpg",
  "ultimacam_nivel_eafit.jpg",
  "ultimacam_nivel_iguana.jpg",
  "ultimacam_nivel_picacha_aguas_frias.jpg",
];

const titleFilter = (title) =>
  title
    .replace("ultimacam_", "")
    .replace(".jpg", "")
    .replaceAll("_", " ")
    .toLowerCase();

function camsDetails(array) {
  let cams = [];
  for (let i = 0; i < array.length; i++) {
    if (i < 10) {
      cams.push({
        route: `${url}${array[i]}`,
        typeOfCam: "cielo",
        nameOfCam: `${titleFilter(array[i])}`,
      });
    } else if (i < 21) {
      cams.push({
        route: `${url}${array[i]}`,
        typeOfCam: "movimientos de masa",
        nameOfCam: `${titleFilter(array[i])}`,
      });
    } else if (i < 32) {
      cams.push({
        route: `${url}${array[i]}`,
        typeOfCam: "incendio",
        nameOfCam: `${titleFilter(array[i])}`,
      });
    } else if (i > 31) {
      cams.push({
        route: `${url}${array[i]}`,
        typeOfCam: "nivel",
        nameOfCam: `${titleFilter(array[i])}`,
      });
    }
  }

  return cams;
}

const camsSiata = camsDetails(linksCamsAMVA);

export { camsSiata };
