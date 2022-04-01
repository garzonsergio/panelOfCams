import React from "react";

const url = "https://siata.gov.co/ultimasFotosCamaras/";

const linksCams = [
  "ultimacam_visible_viva_envigado_hacia_itagui.jpg",
  "ultimacam_visible_viva_envigado.jpg",
  "ultimacam_visible_prueba_torre.jpg",
  "ultimacam_visible_itagui.jpg",
  "ultimacam_visible_eafit.jpg",
  "ultimacam_visible_colegio_lusitania.jpg",
  "ultimacam_visible_ciudadela_la_vida.jpg",
  "ultimacam_visible_aeroparque.jpg",
  "ultimacam_visible_JEG_bello.jpg",
  "ultimacam_terminal_norte.jpg",
  "ultimacam_termica_viva_envigado_hacia_itagui.jpg",
  "ultimacam_termica_viva_envigado.jpg",
  "ultimacam_termica_tres_cruces.jpg",
  "ultimacam_termica_prueba_torre.jpg",
  "ultimacam_termica_parque_tres_aguas.jpg",
  "ultimacam_termica_itagui.jpg",
  "ultimacam_termica_eafit.jpg",
  "ultimacam_termica_colegio_lusitania.jpg",
  "ultimacam_termica_ciudadela_la_vida.jpg",
  "ultimacam_termica_aeroparque.jpg",
  "ultimacam_termica_JEG_bello.jpg",
  "ultimacam_socavacion_metro_acevedo.jpg",
  "ultimacam_puente_musicos.jpg",
  "ultimacam_nivel_puente_fundadores.jpg",
  "ultimacam_nivel_picacha_aguas_frias.jpg",
  "ultimacam_nivel_la_raya.jpg",
  "ultimacam_nivel_la_asuncion.jpg",
  "ultimacam_nivel_iguana.jpg",
  "ultimacam_nivel_hatillo.jpg",
  "ultimacam_nivel_el_indio.jpg",
  "ultimacam_nivel_eafit.jpg",
  "ultimacam_nivel_argos.jpg",
  "ultimacam_monitoreo_metro_estrella.jpg",
  "ultimacam_ituango_sub_estacion_500.jpg",
  "ultimacam_ituango_embalse.jpg",
  "ultimacam_ituango_descarga.jpg",
  "ultimacam_incendio_parque_de_las_aguas_sur.jpg",
  "ultimacam_incendio_parque_de_las_aguas_norte.jpg",
  "ultimacam_incendio_parque_3_aguas_oriente.jpg",
  "ultimacam_incendio_parque_3_aguas_noroccidente.jpg",
  "ultimacam_incendio_megacolegio_paris.jpg",
  "ultimacam_incendio_la_estrella.jpg",
  "ultimacam_incendio_copacabana.jpg",
  "ultimacam_incendio_ciudadela_la_vida_copacabana.jpg",
  "ultimacam_incendio_cerro_tres_cruces.jpg",
  "ultimacam_incendio_alcaldia_la_estrella.jpg",
  "ultimacam_estructural_animalx-palmas2.jpg",
  "ultimacam_estructural_animalx-palmas.jpg",
  "ultimacam_deslizamiento_villatina.jpg",
  "ultimacam_deslizamiento_tierra_amarilla.jpg",
  "ultimacam_deslizamiento_sancristobal.jpg",
  "ultimacam_deslizamiento_san_antonio_montanita.jpg",
  "ultimacam_deslizamiento_rodeo_alto.jpg",
  "ultimacam_deslizamiento_potrerito_2.jpg",
  "ultimacam_deslizamiento_potrerito_1.jpg",
  "ultimacam_deslizamiento_pan_de_azucar.jpg",
  "ultimacam_deslizamiento_palmitas.jpg",
  "ultimacam_deslizamiento_palmas_carulla.jpg",
  "ultimacam_deslizamiento_metro_acevedo.jpg",
  "ultimacam_deslizamiento_las_salinas_caldas.jpg",
  "ultimacam_deslizamiento_la_raya_2.jpg",
  "ultimacam_deslizamiento_la_raya.jpg",
  "ultimacam_deslizamiento_la_primavera.jpg",
  "ultimacam_deslizamiento_la-valeria.jpg",
  "ultimacam_deslizamiento_jerico_3.jpg",
  "ultimacam_deslizamiento_jerico_2.jpg",
  "ultimacam_deslizamiento_jerico.jpg",
  "ultimacam_deslizamiento_hatillo.jpg",
  "ultimacam_deslizamiento_el_salado.jpg",
  "ultimacam_deslizamiento_el_pacifico.jpg",
  "ultimacam_deslizamiento_edificio_rodeo_alto.jpg",
  "ultimacam_deslizamiento_copacabana_el_vivero.jpg",
  "ultimacam_deslizamiento_cabuyal_sabaneta.jpg",
  "ultimacam_deslizamiento_bermejala.jpg",
  "ultimacam_deslizamiento_andalucia.jpg",
  "ultimacam_deslizamiento_ajizal_itagui.jpg",
  "ultimacam_dep_suramericana.jpg",
  "ultimacam_dep_san_juan_con_80.jpg",
  "ultimacam_dep_san_juan.jpg",
  "ultimacam_dep_feria_ganado.jpg",
  "ultimacam_dep_bulerias.jpg",
  "ultimacam_conteo_vehicular_girardota.jpg",
  "ultimacam_color_pis.jpg",
  "ultimacam_color_33.jpg",
  "ultimacam_capa_limite_santo_domingo.jpg",
  "ultimacam_capa_limite_la_estrella.jpg",
  "ultimacam_bomberos_san_antonio_2.jpg",
  "ultimacam_bomberos_san_antonio.jpg",
  "ultimacam_bomberos_sabaneta.jpg",
  "ultimacam_ancon_sur.jpg",
  "ultimacam_FishEye_Sabaneta.jpg",
  "ultimacam_FishEye_SIATA.jpg",
  "ultimacam_FishEye_La_Estrella.jpg",
  "ultimacam_FishEye_Itagui.jpg",
  "ultimacam_FishEye_Girardota.jpg",
  "ultimacam_FishEye_EAFIT.jpg",
  "ultimacam_FishEye_Copacabana.jpg",
  "ultimacam_FishEye_Bello.jpg",
  "ultimacam_FishEye_Aula_Ambiental.jpg",
  "ultimacam_FishEye_Alcaldia_La_Estrella.jpg",
  "ultimacam_FishEye_Aeroparque.jpg",
  "ultimacam_FishEye_AMVA.jpg",
  "ultimacam_99_SAN_NICOLAS_nororiente.jpg",
  "ultimacam_98_SAN_NICOLAS_suroriente.jpg",
  "ultimacam_97_RADAR.jpg",
  "ultimacam_96_RADAR.jpg",
  "ultimacam_89_TORRESIATA_occidente.jpg",
  "ultimacam_88_TORRESIATA_noroccidente.jpg",
  "ultimacam_86_TORRESIATA_nororiente.jpg",
  "ultimacam_82_TORRESIATA_suroriente.jpg",
  "ultimacam_81_TORRESIATA_oriente.jpg",
  "ultimacam_099_NIVEL.jpg",
];

function typeOfCams(camRoute) {
  if (camRoute.includes("_nivel_")) {
    return "nivel";
  } else if (
    camRoute.includes("_deslizamiento") ||
    camRoute.includes("_socavacion")
  ) {
    return "deslizamiento";
  } else if (camRoute.includes("_incendio_")) {
    return "incendio";
  } else {
    return "cielo";
  }
}

function camsDetails(array) {
  let cams = [];
  for (let i = 0; i < array.length; i++) {
    let allCams = cams.push({
      route: `${url}${array[i]}`,
      typeOfCam: typeOfCams(array[i]),
    });
  }
  return cams;
}

const camsSiata = camsDetails(linksCams);

function FilteredCams(props) {
  return (
    <React.Fragment>
      {camsSiata.filter((cam) => cam.typeOfCam === props.typeCam)}
    </React.Fragment>
  );
}

export { camsSiata };
export { FilteredCams };
