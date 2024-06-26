export default {
  webmap: '0e163aaf5a15423a94ebfa1945dfc328',
  title: 'World Heritage Online Map Platform',
  subtitle: '',
  logoUrl: '',
  logoLinkUrl: '',
  aboutLinkUrl: '',
  downloadLinkUrl: '',
  printServiceUrl: 'https://gis.forest-atlas.org/server/rest/services/print/ExportWebMap/GPServer/Export%20Web%20Map',
  maskServiceUrl: '',
  mapThemeIds: '',
  mapThemes: '',
  narrative: '',
  hideHeader: true,
  hideFooter: false,
  includeMyGFWLogin: false,
  navLinksInNewTab: false,
  customColorTheme: '#0077D4',
  language: 'en',
  useAlternativeLanguage: true,
  alternativeWebmap: 'a180fa4dbd154ce28f39bc1ac72a557f',
  alternativeLanguage: 'fr',
  alternativeLanguageTitle: 'Plateforme de cartes en ligne du patrimoine mondial',
  alternativeLanguageSubtitle: '',
  alternativeMapThemes: '',
  alternativeNarrative: '',
  alternativeWebmapMenuName: 'Custom layers',
  initialExtent: {
    x: null,
    y: null,
    z: null,
  },
  includeDocumentsTab: false,
  iso: '',
  viirsFires: true,
  intactForests: true,
  primaryForests: true,
  forma: false,
  aboveGroundBiomass: true,
  landCover: true,
  mangroves: false,
  sadAlerts: false,
  gladAlerts: true,
  gfwIntegratedAlertLayer: true,
  recentImagery: true,
  carbonSequence: true,
  carbonEmissions: true,
  treeCoverHeight: true,
  treeCover: true,
  treeCoverGain: true,
  treeCoverLoss: true,
  tropicalTreeCover: true,
  treeMosaicLandscapes: false,
  forestCarbonGrossRemovals: true,
  forestCarbonGrossEmissions: true,
  forestCarbonNetFlux: true,
  umdLandCover: true,
  drySpells: true,
  airQuality: true,
  windSpeed: true,
  webmapMenuName: 'Custom Layers',
  sharinghost: 'https://www.arcgis.com',
  analyticsCode: '',
  includeCartoTemplateLayers: false,
  cartoUser: 'wri-01',
  cartoTemplateId: 'tpl_07c315f8_c13e_11e4_b457_0e8dde98a187',
  cartoApiKey: 'your key here',
  cartoGroupLabel: {
    en: 'Carto Layers',
    fr: 'Carto Layers',
  },
  disabledAnalysisModules: [], //'VIIRS_FIRES', 'GLAD_ALERTS', 'TC_LOSS', 'IFL', 'LCC'
  layerPanel: {
    GROUP_WORLD_HERITAGE: {
      order: 1,
      groupType: 'default',
      label: {
        en: 'UNESCO designated sites',
        fr: "Sites désignés par l'UNESCO",
      },
      layers: [
        {
          id: '18c58986620-layer-2',
          order: 1,
          type: 'arcgis',
        },
        {
          id: '18c58986622-layer-3',
          order: 2,
          type: 'arcgis',
        },
        {
          id: '18c58986623-layer-4',
          order: 3,
          type: 'arcgis',
        },
        {
          id: 'Biorphere_Reserve__points__6751',
          order: 4,
          type: 'arcgis',
        },
        {
          id: '19030fdbe22-layer-40',
          order: 5,
          type: 'arcgis',
        },
        {
          id: 'UNESCO_Geoparks_5830',
          order: 6,
          type: 'arcgis',
        },
        
        {
          id: 'Biosphere_Reserves_core_zones_5709',
          order: 7,
          type: 'arcgis',
        },
        {
          id: 'Biosphere_Reserves_core_zones_4517',
          order: 8,
          type: 'arcgis',
        },
        {
          id: 'Biosphere_Reserves_buffer_zones_3999',
          order: 9,
          type: 'arcgis',
        },
        {
          id: 'Biosphere_Reserves_buffer_zones_3999',
          order: 10,
          type: 'arcgis',
        },
        {
          id: 'Biosphere_Reserves_buffer_zones_6834',
          order: 11,
          type: 'arcgis',
        },
        {
          id: 'Biosphere_Reserves_transition_zones_5814',
          order: 12,
          type: 'arcgis',
        },
        {
          id: 'Biosphere_Reserves_transition_zones_8545',
          order: 13,
          type: 'arcgis',
        },
        {
          id: 'UNESCO_Geoparks_2369',
          order: 14,
          type: 'arcgis',
        },
      ],
    },
    GROUP_NEAR_REAL_TIME: {
      order: 2,
      groupType: 'default',
      label: {
        en: 'Near Real Time',
        fr: 'Temps quasi reel',
      },
      layers: [
        {
          // Tracked fishing activity
          id: '18c58b78fc5-layer-13',
          order: 1,
          type: 'arcgis',
        },
        {
          // Coral bleaching alerts
          id: 'Coral_Reef_Stations_7587',
          order: 2,
          type: 'arcgis',
        },
        {
          // Coral bleaching alerts FR
          id: '18ef6da2ad3-layer-41',
          order: 2,
          type: 'arcgis',
        },
        // {
        // ???? Not in map
        //   id: '18c58a3f1ff-layer-5',
        //   order: 2,
        //   type: 'arcgis',
        // },
        {
          // Recent earthquakes
          id: '18ef1943aad-layer-40',
          order: 3,
          type: 'arcgis',
        },
        {
          // Recent earthquakes FR
          id: 'USGS_Seismic_Data_v1_8734',
          order: 3,
          type: 'arcgis',
        },
        {
          // Vegetation Health Index
          id: 'VHI_D_8647',
          order: 4,
          type: 'arcgis',
        },
        {
          // Vegetation Health Index FR
          id: 'VHI_D_2446',
          order: 4,
          type: 'arcgis',
        },
        {
          id: 'TREE_COVER_LOSS',
          order: 10,
          type: 'remoteDataLayer',
          uuid: '2aed67b3-3643-40d3-9c1e-8af9afb5d9e2',
        },
        {
          id: 'GFW_INTEGRATED_ALERTS',
          order: 8,
          type: 'remoteDataLayer',
          uuid: 'bd58f25d-d3bb-4d59-9daa-cecddd27d9f4',
          groupId: 'GROUP_LCD',
        },
        {
          id: 'VIIRS_ACTIVE_FIRES',
          order: 7,
          type: 'remoteDataLayer',
          uuid: '6d316908-92c8-4f95-8598-f2a0c72786af',
        },
        {
          id: 'GFSR_3hour_6782',
          order: 5,
          type: 'arcgis',
        },
        {
          id: 'SPEI_v1_recent_23',
          order: 6,
          type: 'arcgis',
        },
        {
          id: 'GFSR_3hour_8103',
          order: 7,
          type: 'arcgis',
        },
        {
          id: 'SPEI_v1_recent_5336',
          order: 8,
          type: 'arcgis',
        },
        {
          id: 'AIR_QUALITY_CUSTOM',
          groupId: 'GROUP_NEAR_REAL_TIME',
          order: 9,
          type: 'flagship',
          origin: 'gfw-api',
          layerType: 'base-tile-layer',
          uuid: '1a08810f-34a4-4c53-8a37-6782d0ab6dec',
          label: {
            en: 'Air Quality (next-day forecast)',
            fr: 'Qualité de l’air (prévision)',
          },
          sublabel: {
            en: 'Forecasted PM2.5 (µg/m3)',
            fr: 'Prévision PM2.5 (µg/m³)',
          },
        },
        {
          id: '18c58bb3d40-layer-18',
          order: 13,
          type: 'arcgis',
        },
        {
          id: '18c58bb3d41-layer-19',
          order: 14,
          type: 'arcgis',
        },
        {
          id: '18c58bb3d42-layer-20',
          order: 15,
          type: 'arcgis',
        },
        {
          id: '18c58bb3d42-layer-21',
          order: 16,
          type: 'arcgis',
        },
        {
          id: '18c58bb3d43-layer-22',
          order: 17,
          type: 'arcgis',
        },
        {
          id: '18c58bb3d43-layer-23',
          order: 18,
          type: 'arcgis',
        },
        {
          id: '18c58bb3d44-layer-24',
          order: 19,
          type: 'arcgis',
        },
        {
          id: '18c58bb3d45-layer-25',
          order: 20,
          type: 'arcgis',
        },
        {
          id: '18c58bb3d45-layer-26',
          order: 21,
          type: 'arcgis',
        },
        {
          id: '18c58bb3d46-layer-27',
          order: 22,
          type: 'arcgis',
        },
        {
          id: '18c58bb3d47-layer-28',
          order: 23,
          type: 'arcgis',
        },
        {
          id: '18c58b9718a-layer-15',
          order: 24,
          type: 'arcgis',
        },
        {
          id: '18c58b9718b-layer-16',
          order: 25,
          type: 'arcgis',
        },
        {
          id: '18c58b1f83e-layer-7',
          order: 27,
          type: 'arcgis',
        },
        {
          id: '18c58b1f840-layer-8',
          order: 28,
          type: 'arcgis',
        },
        {
          id: '18c58b1f840-layer-9',
          order: 29,
          type: 'arcgis',
        },
        {
          id: '18c58b1f841-layer-10',
          order: 32,
          type: 'arcgis',
        },
        {
          id: '18c58b1f841-layer-11',
          order: 31,
          type: 'arcgis',
        },
      ],
    },
    GROUP_PROTECTION_AND_MANAGEMENT: {
      order: 3,
      groupType: 'default',
      label: {
        en: 'Protection and Management',
        fr: 'Protection et gestion',
      },
      layers: [
        {
          id: '18c58bf0c0e-layer-38',
          order: 1,
          type: 'arcgis',
        },
        {
          id: '18c58bf06a5-layer-37',
          order: 2,
          type: 'arcgis',
        },
        {
          id: '18c58bd4502-layer-34',
          order: 3,
          type: 'arcgis',
        },
        {
          id: '18c58bd4502-layer-35',
          order: 4,
          type: 'arcgis',
        },
      ],
    },
    GROUP_NATURAL_VALUES: {
      order: 4,
      groupType: 'default',
      label: {
        en: 'Natural Values',
        fr: 'Valeurs naturelles',
      },
      layers: [
        {
          // Glaciated Areas
          id: 'Glaciated_Areas_3800',
          order: 1,
          origin: 'arcgis',
        },
        {
          // Glaciated Areas FR
          id: 'Glaciated_Areas_6249',
          order: 1,
          type: 'arcgis',
        },
        {
          // ????
          id: '18c58c6ee07-layer-42',
          order: 6,
          type: 'arcgis',
        },
        {
          // ????
          id: '18c5900c801-layer-67',
          order: 7,
          type: 'arcgis',
        },
        {
          // ????
          id: '18c58cd02d5-layer-49',
          order: 8,
          type: 'arcgis',
        },
        {
          // ????
          id: '18c58ccc1cb-layer-48',
          order: 9,
          type: 'arcgis',
        },
        {
          // ????
          id: '18c58cae831-layer-46',
          order: 10,
          type: 'arcgis',
        },
        {
          // ????
          id: '18c58cae396-layer-45',
          order: 11,
          type: 'arcgis',
        },
        {
          // ????
          id: '18c58c9d49e-layer-44',
          order: 12,
          type: 'arcgis',
        },
        {
          // Mangroves
          id: '18c58c83da9-layer-43',
          order: 13,
          type: 'arcgis',
        },
        {
          // Terrestrial species richness
          id: '18fe3c6457d-layer-51',
          order: 14,
          type: 'arcgis',
        },
        {
          // Terrestrial species richness FR
          id: 'Terrestrial_species_richness_3076',
          order: 14,
          type: 'arcgis',
        },
        {
          // Terrestrial threatened species
          id: '18fe3adc785-layer-51',
          order: 15,
          type: 'arcgis',
        },
        {
          // Terrestrial threatened species FR
          id: '18fe3b519f4-layer-40',
          order: 15,
          type: 'arcgis',
        },
        {
          // Marine species richness
          id: '18fe2b070c6-layer-51',
          order: 16,
          type: 'arcgis',
        },
        {
          // Marine species richness FR
          id: 'OBIS_Marine_biodiversity_richness_6349',
          order: 16,
          type: 'arcgis',
        },
        {
          // Marine threatened species
          id: 'OBIS_Marine_biodiversity_richness_5696',
          order: 17,
          type: 'arcgis',
        },
        {
          // Marine threatened species FR
          id: '18fe792a926-layer-41',
          order: 17,
          type: 'arcgis',
        },
      ],
    },
    GROUP_CLIMATE: {
      groupType: 'default',
      order: 5,
      label: {
        en: 'Climate',
        fr: 'Climat',
        es: 'Clima',
        pt: 'Clima',
        id: 'Iklim',
        zh: '气候',
        ka: 'კლიმატი',
        hy: 'Կլիմա',
        az: 'İqlim',
        nl: 'Klimaat',
      },
      layers: [
        {
          id: 'FOREST_CARBON_NET_FLUX',
          order: 7,
          type: 'remoteDataLayer',
          uuid: 'bd768c4b-f5f8-47f9-b6a0-5bb6078f0fac',
          label: {
            en: 'Forest greenhouse gas emissions / sequestration. ',
            fr: 'Émissions / séquestration de gaz à effet de serre dans les forêts',
          },
        },
        {
          id: 'CARBON_SEQ',
          order: 8,
          type: 'remoteDataLayer',
          uuid: 'e7208398-0acd-4f73-a824-c4fe1e356e0c',
        },
        {
          id: 'CORAL_BLEACHING_RISK_CUSTOM',
          groupId: 'GROUP_CLIMATE',
          order: 9,
          type: 'flagship',
          origin: 'gfw-api',
          layerType: 'base-tile-layer',
          uuid: '61c8acc0-753a-473d-9b70-b9690497b31f',
          label: {
            en: 'Projected Coral Bleaching',
            fr: 'Blanchiment projeté des coraux',
          },
          sublabel: {
            en: 'Onset year of annual events under the RCP 8.5 scenario',
            fr: 'Année d’apparition des événements annuels dans le cadre du scénario RCP 8.5',
          },
        },
        {
          //  Biomass carbon (above and below ground)
          id: 'World_Biomass_Carbon_8621',
          order: 10,
          type: 'arcgis',
          sublabel: {
            en: 'Darker tones of green = higher levels of carbon storage.',
            fr: 'Tons de vert plus foncés = niveaux plus élevés de stockage de carbone.',
          },
        },
        {
          //  Biomass carbon (above and below ground) FR
          id: 'World_Biomass_Carbon_1594',
          order: 11,
          type: 'arcgis',
          sublabel: {
            en: 'Darker tones of green = higher levels of carbon storage.',
            fr: 'Tons de vert plus foncés = niveaux plus élevés de stockage de carbone.',
          },
        },
        // {
        //   // ???? Not in map
        //   id: '18c58d7ee0c-layer-50',
        //   order: 1,
        //   type: 'arcgis',
        // },
        {
          // Sea level trend
          id: '18c58dcc81e-layer-51',
          order: 12,
          type: 'arcgis',
        },
        {
          // Total annual precipitation
          id: 'TotalAnnualPrecipitation_6611',
          order: 13,
          type: 'arcgis',
        },
        {
          // Total annual precipitation FR
          id: 'TotalAnnualPrecipitation_3229',
          order: 13,
          type: 'arcgis',
        },
        {
          // Projected precipitation change by 2050
          id: 'Change_TempPre2050_9714',
          order: 15,
          type: 'arcgis',
        },
        {
          // Projected precipitation change by 2050 FR
          id: '18ef6f7fa13-layer-37',
          order: 16,
          type: 'arcgis',
        },
        {
          // Annual mean temperature
          id: 'Annual_Temp_6938',
          order: 17,
          type: 'arcgis',
        },
        {
          // Annual mean temperature FR
          id: 'Annual_Temp_7381',
          order: 18,
          type: 'arcgis',
        },
        {
          // Projected temperature change by 2050
          id: 'Change_Temp2050_7022',
          order: 19,
          type: 'arcgis',
        },
        {
          // Projected temperature change by 2050 FR
          id: '18ef6f7b72f-layer-36',
          order: 19,
          type: 'arcgis',
        },
      ],
    },
    GROUP_SOCIOECONOMIC: {
      order: 6,
      groupType: 'default',
      label: {
        en: 'Socioeconomic',
        fr: 'Socioéconomique',
      },
      layers: [
        {
          id: 'GDP_CUSTOM',
          groupId: 'GROUP_SOCIOECONOMIC',
          order: 9,
          type: 'flagship',
          origin: 'gfw-api',
          layerType: 'base-tile-layer',
          uuid: '59c4d394-f5a2-459d-a1a2-2a19e4823244',
          label: {
            en: 'Gross Domestic Product (GDP)',
            fr: 'Produit intérieur brut (PIB)',
          },
          sublabel: {
            en: 'USD, millions, 2011',
            fr: 'USD, millions, 2011',
          },
        },
        {
          id: 'UMD_LAND_COVER',
          order: 10,
          type: 'remoteDataLayer',
          uuid: 'f22e0529-d398-4ccc-b943-e62d420fea89',
        },
        {
          id: 'WIND_SPEED',
          order: 11,
          type: 'remoteDataLayer',
          uuid: '9fa60bd9-0643-4d0a-a569-0036e902d1f9',
          label: {
            en: 'Wind speed potential at 50m (m/s)',
            fr: 'Vitesse potentielle du vent à 50 m (m/s)',
          },
        },
        {
          id: 'WATER_STRESS_CUSTOM',
          groupId: 'GROUP_SOCIOECONOMIC',
          order: 18,
          type: 'flagship',
          origin: 'gfw-api',
          layerType: 'base-tile-layer',
          uuid: 'fdf06d8c-72e9-48a7-80f1-27bd5f19342c',
          label: {
            en: 'Water Stress',
            fr: 'Stress Hydrique',
          },
        },
        {
          // Total yearly tourism visits (2019)
          id: 'Conventional_Statistics_and_Big_Data_to_Map_Global_Tourism_Destinations_Before_COVID_5661',
          order: 20,
          type: 'arcgis',
        },
        {
          // Total yearly tourism visits (2019) FR
          id: 'Conventional_Statistics_and_Big_Data_to_Map_Global_Tourism_Destinations_Before_COVID_5680',
          order: 20,
          type: 'arcgis',
        },
      ],
    },
    GROUP_THREATS_AND_RISKS: {
      order: 7,
      groupType: 'default',
      label: {
        en: 'Threats and Risks',
        fr: 'Menaces et risques',
      },
      layers: [
        {
          id: 'PROJECTED_WATER_STRESS_CUSTOM',
          groupId: 'GROUP_THREATS_AND_RISKS',
          order: 9,
          type: 'flagship',
          origin: 'gfw-api',
          layerType: 'base-tile-layer',
          uuid: '90992233-36d7-45f9-97db-0ccf28275285',
          label: {
            en: 'Projected Change in Water Stress by 2030',
            fr: 'Stress hydrique projeté (2030)',
          },
          sublabel: {
            en: 'Business as usual scenario',
            fr: 'Scénario du statu quo',
          },
        },
        {
          id: 'RIVERINE_FLOOD_RISK_CUSTOM',
          groupId: 'GROUP_THREATS_AND_RISKS',
          order: 12,
          type: 'flagship',
          origin: 'gfw-api',
          layerType: 'base-tile-layer',
          uuid: '2a652430-f94c-4185-b1ad-fae38502dfd2',
          label: {
            en: 'Riverine Flood Risk',
            fr: "Risque d'inondation des cours d'eau",
          },
        },
        {
          id: 'DROUGHT_RISK_CUSTOM',
          groupId: 'GROUP_THREATS_AND_RISKS',
          order: 11,
          type: 'flagship',
          origin: 'gfw-api',
          layerType: 'base-tile-layer',
          uuid: 'cf0bd43a-529b-4c46-8f95-927279608ba7',
          label: {
            en: 'Drought Risk',
            fr: 'Risque de sécheresse',
          },
        },
        {
          id: 'COASTAL_FLOOD_RISK_STRESS_CUSTOM',
          groupId: 'GROUP_THREATS_AND_RISKS',
          order: 12,
          type: 'flagship',
          origin: 'gfw-api',
          layerType: 'base-tile-layer',
          uuid: '8f355cf2-bfbd-4692-8e23-a5c689fa02d7',
          label: {
            en: 'Coastal Flood Risk',
            fr: "Risque d'inondation côtière",
          },
        },
        {
          id: '18c58f281b8-layer-61',
          order: 1,
          type: 'arcgis',
        },
        {
          id: '18c58eaed6d-layer-57',
          order: 2,
          type: 'arcgis',
        },
        {
          id: '18c58e9d446-layer-56',
          order: 3,
          type: 'arcgis',
        },
        {
          id: '18c58e80282-layer-55',
          order: 4,
          type: 'arcgis',
        },
        {
          id: '18c58e6fcdb-layer-54',
          order: 5,
          type: 'arcgis',
        },
        {
          id: '18c58fa310b-layer-64',
          order: 6,
          type: 'arcgis',
        },
        {
          id: '18c58f6c14a-layer-62',
          order: 7,
          type: 'arcgis',
        },
      ],
    },
    GROUP_WEBMAP: {
      order: 8,
      label: {},
      layers: [],
    },
    GROUP_IMAGERY: {
      groupType: 'imagery',
      order: 9,
      label: {
        en: 'Recent Imagery',
        fr: 'Imagerie récente',
        es: 'Recent Imagery',
        pt: 'Recent Imagery',
        id: 'Recent Imagery',
        zh: 'Recent Imagery',
        ka: 'Recent Imagery',
      },
      layers: [
        {
          order: 1,
          id: 'RECENT_IMAGERY',
          type: 'imagery',
          technicalName: 'recent_satellite_imagery',
          visible: false,
          label: {
            en: 'Recent Imagery',
            fr: 'Imagerie récente',
            es: 'Recent Imagery',
            pt: 'Recent Imagery',
            id: 'Recent Imagery',
            zh: 'Recent Imagery',
            ka: 'Recent Imagery',
          },
          dynamicSublabel: {
            en: '({DATE_TIME}, {CLOUD_COVERAGE}% cloud coverage, {INSTRUMENT})',
            fr: '({DATE_TIME}, {CLOUD_COVERAGE}% cloud coverage, {INSTRUMENT})',
            es: '({DATE_TIME}, {CLOUD_COVERAGE}% cloud coverage, {INSTRUMENT})',
            pt: '({DATE_TIME}, {CLOUD_COVERAGE}% cloud coverage, {INSTRUMENT})',
            id: '({DATE_TIME}, {CLOUD_COVERAGE}% cloud coverage, {INSTRUMENT})',
            zh: '({DATE_TIME}, {CLOUD_COVERAGE}% cloud coverage, {INSTRUMENT})',
            ka: '({DATE_TIME}, {CLOUD_COVERAGE}% cloud coverage, {INSTRUMENT})',
          },
        },
      ],
    },
    GROUP_CUSTOM_BASEMAP: {
      order: 10,
      groupType: 'default',
      label: {
        en: 'Basemap',
        fr: 'Fond de carte',
      },
      layers: [
        {
          // Light Gray Canvas
          id: '18c590636fa-layer-69',
          order: 14,
          type: 'arcgis',
        },
        {
          // Dark Gray Canvas
          id: '18c59090835-layer-73',
          order: 15,
          type: 'arcgis',
        },
        {
          // Topographic
          id: '18c5907c5ac-layer-71',
          order: 16,
          type: 'arcgis',
        },
        {
          // Streets
          id: '18c5906db15-layer-70',
          order: 17,
          type: 'arcgis',
        },
        {
          // White background FR
          id: '18ec2e49a69-layer-38',
          order: 18,
          type: 'arcgis',
        },
        {
          // White background
          id: '18ec2e2d84a-layer-42',
          order: 19,
          type: 'arcgis',
        },
        // {
        //   // ????
        //   id: '18c590868ad-layer-72',
        //   order: 20,
        //   type: 'arcgis',
        // },
        // {
        //   // ????
        //   id: '18c590528da-layer-68',
        //   order: 21,
        //   type: 'arcgis',
        // },
      ],
    },
    GROUP_BASEMAP: {
      groupType: 'basemap',
      order: 200,
      label: {
        en: 'Basemap (hidden)',
        fr: 'Basemap',
        es: 'Basemap',
        pt: 'Basemap',
        id: 'Basemap',
        zh: 'Basemap',
        ka: 'საბაზო რუკა',
      },
      layers: [],
    },
    extraLayers: [
      {
        id: 'MASK',
        type: 'dynamic',
        order: 10000,
        url: 'https://gis.forest-atlas.org/server/rest/services/country_masks/country_mask_global/MapServer',
        opacity: 0.35,
        layerIds: [0],
      },
      {
        id: 'LEGEND_LAYER',
        type: 'dynamic',
        url: 'https://gis-gfw.wri.org/arcgis/rest/services/legends/MapServer',
        visible: false,
        opacity: 0,
        layerIds: [],
      },
      {
        id: 'USER_FEATURES',
        type: 'graphic',
        visible: true,
      },
    ],
  },
};

// OUTDATED GROUPS
// in GROUP_CLIMATE:
// {
//   id: 'CARBON_SEQ',
//   order: 1,
//   type: 'remoteDataLayer',
//   uuid: 'e7208398-0acd-4f73-a824-c4fe1e356e0c',
// },
// {
//   id: 'DRY_SPELLS',
//   order: 3,
//   type: 'remoteDataLayer',
//   uuid: '41936f95-094b-4ad9-8b8a-70fc159bd0ba',
// },
// {
//   id: 'AIR_QUALITY',
//   order: 3,
//   type: 'remoteDataLayer',
//   uuid: '67d8aed9-8eb3-4396-99a4-f0eee7295226',
// },
// {
//   id: 'FOREST_CARBON_GROSS_REMOVALS',
//   order: 6,
//   type: 'remoteDataLayer',
//   uuid: '79010c83-e62e-4744-96ed-130736daa651', // layer id
// },
// {
//   id: 'FOREST_CARBON_GROSS_EMISSIONS',
//   order: 7,
//   type: 'remoteDataLayer',
//   uuid: '0b45cb69-6432-449f-af38-25cdcda85d55',
// },

// IN GROUP_SOCIOECONOMIC:
// {
//   id: '18c5ced2b0f-layer-61',
//   order: 7,
//   type: 'arcgis',
// },
// {
//   id: 'sdei_global_annual_avg_pm2_5_2001_2010_image_service_7231',
//   order: 8,
//   type: 'arcgis',
// },
// {
//   id: 'sdei_global_annual_avg_pm2_5_2001_2010_image_service_6238',
//   order: 9,
//   type: 'arcgis',
// },

// GROUP_LCD: {
//   groupType: 'default',
//   order: 8,
//   label: {
//     en: 'Land Cover Dynamics',
//     fr: 'Evolution de la couverture des sols',
//     es: 'Dinámica de la Cobertura del Suelo',
//     pt: 'Dinâmica de cobertura da terra ',
//     id: 'Land Cover Dynamics',
//     zh: '土地覆盖动态数据',
//     ka: 'მიწის საფარის დინამიკა',
//   },
//   layers: [
//     {
//       id: 'TREE_COVER_LOSS',
//       order: 1,
//       type: 'remoteDataLayer',
//       uuid: '2aed67b3-3643-40d3-9c1e-8af9afb5d9e2',
//     },
//     {
//       id: 'TREE_COVER_GAIN',
//       order: 2,
//       type: 'remoteDataLayer',
//       uuid: 'cb016f17-f12d-463a-9dc2-aabcf5db566c',
//     },
//     {
//       id: 'IMAZON_SAD',
//       order: 3,
//       type: 'remoteDataLayer',
//       uuid: '3e9e86ae-e38d-4c59-8484-c8214ca5186a',
//     },
//     {
//       id: 'FORMA_ALERTS',
//       order: 4,
//       type: 'remoteDataLayer',
//       uuid: '56aa7e57-0ac4-446c-a82d-7713904b17c3',
//     },
//     {
//       id: 'GLAD_ALERTS',
//       order: 5,
//       type: 'remoteDataLayer',
//       uuid: '356f862b-3e70-493a-997b-dc2a193410e9',
//     },
//     {
//       id: 'TERRA_I_ALERTS',
//       order: 6,
//       type: 'remoteDataLayer',
//       uuid: '1fc7b0c5-259a-4685-8665-b2f1ed3f808f',
//     },
//     {
//       id: 'VIIRS_ACTIVE_FIRES',
//       order: 7,
//       type: 'remoteDataLayer',
//       uuid: '6d316908-92c8-4f95-8598-f2a0c72786af',
//     },
//     {
//       id: 'GFW_INTEGRATED_ALERTS',
//       order: 8,
//       type: 'remoteDataLayer',
//       uuid: 'bd58f25d-d3bb-4d59-9daa-cecddd27d9f4',
//       groupId: 'GROUP_LCD',
//     },
//     {
//       id: 'GLAD_S2_ALERTS',
//       order: 9,
//       type: 'remoteDataLayer',
//       uuid: '3b869953-48c4-48d0-8023-5c64a311f3dd',
//       groupId: 'GROUP_LCD',
//     },
//     {
//       id: 'RADD_ALERTS',
//       order: 10,
//       type: 'remoteDataLayer',
//       uuid: '440e53d0-36b3-47ad-993a-1c2018c3942c',
//       groupId: 'GROUP_LCD',
//     },
//   ],
// },
// GROUP_LC: {
//   groupType: 'default',
//   order: 9,
//   label: {
//     en: 'Land Cover',
//     fr: 'Couverture des sols',
//     es: 'Cobertura terrestre',
//     pt: 'Cobertura do Solo',
//     id: 'Land Cover',
//     zh: '土地覆盖',
//     ka: 'მიწის საფარი',
//   },
//   layers: [
//     {
//       id: 'IFL',
//       order: 1,
//       type: 'remoteDataLayer',
//       uuid: '5f815a7d-457e-4eae-a8e5-8864a60696ad',
//     },
//     {
//       id: 'PRIMARY_FORESTS',
//       order: 2,
//       type: 'remoteDataLayer',
//       uuid: 'edffb745-e523-462d-ad1e-3052006a3dbc',
//     },
//     {
//       id: 'AG_BIOMASS',
//       order: 3,
//       type: 'remoteDataLayer',
//       uuid: '04526d47-f3f5-4f76-a939-e5f7861fd085',
//     },
//     {
//       id: 'TREE_COVER',
//       order: 4,
//       type: 'remoteDataLayer',
//       uuid: '2569adca-ef87-42c4-a153-57c5e8ba0ef7',
//     },
//     {
//       id: 'LAND_COVER',
//       order: 5,
//       type: 'remoteDataLayer',
//       uuid: 'b8d3f175-0565-443f-839a-49eb890a4b3d',
//     },
//     {
//       id: 'UMD_LAND_COVER',
//       order: 6,
//       type: 'remoteDataLayer',
//       uuid: 'f22e0529-d398-4ccc-b943-e62d420fea89',
//     },
//     {
//       id: 'TREE_COVER_HEIGHT',
//       order: 7,
//       type: 'remoteDataLayer',
//       uuid: '2a83effa-f8be-425b-9766-502e65525861',
//     },
//     {
//       id: 'TREES_MOSAIC_LANDSCAPES',
//       order: 8,
//       type: 'remoteDataLayer',
//       uuid: '9e0c1e1e-a0a3-457f-a373-4104820f7a50',
//     },
//     {
//       id: 'TROPICAL_TREE_COVER',
//       order: 9,
//       type: 'remoteDataLayer',
//       uuid: 'b9183eca-84ed-48ed-83d5-a146a6e2a079',
//     },
//   ],
// },
