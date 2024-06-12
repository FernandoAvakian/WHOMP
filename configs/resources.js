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
  // layers added in Arcgis Online, map id layer with the group id
  webmapLayerGroupsMap: {
    // GROUP_WORLD_HERITAGE
    '18c58986620-layer-2': 'GROUP_WORLD_HERITAGE',
    '18c58986622-layer-3': 'GROUP_WORLD_HERITAGE',
    '18c58986623-layer-4': 'GROUP_WORLD_HERITAGE',

    // GROUP_NEAR_REAL_TIME
    '18c58a3f1ff-layer-5': 'GROUP_NEAR_REAL_TIME',
    GFSR_3hour_6782: 'GROUP_NEAR_REAL_TIME',
    SPEI_v1_recent_23: 'GROUP_NEAR_REAL_TIME',
    GFSR_3hour_8103: 'GROUP_NEAR_REAL_TIME',
    SPEI_v1_recent_5336: 'GROUP_NEAR_REAL_TIME',
    Coral_Reef_Stations_7587: 'GROUP_NEAR_REAL_TIME', // Coral Bleaching alerts
    '18ef6da2ad3-layer-41': 'GROUP_NEAR_REAL_TIME', // Coral Bleaching alerts FR
    '18ef1943aad-layer-40': 'GROUP_NEAR_REAL_TIME', // Recent earthquakes
    USGS_Seismic_Data_v1_8734: 'GROUP_NEAR_REAL_TIME', // Recent earthquakes FR
    VHI_D_8647: 'GROUP_NEAR_REAL_TIME', // Vegetation Health Index
    VHI_D_2446: 'GROUP_NEAR_REAL_TIME', // Vegetation Health Index FR
    '18c58bb3d40-layer-18': 'GROUP_NEAR_REAL_TIME',
    '18c58bb3d41-layer-19': 'GROUP_NEAR_REAL_TIME',
    '18c58bb3d42-layer-20': 'GROUP_NEAR_REAL_TIME',
    '18c58bb3d42-layer-21': 'GROUP_NEAR_REAL_TIME',
    '18c58bb3d43-layer-22': 'GROUP_NEAR_REAL_TIME',
    '18c58bb3d43-layer-23': 'GROUP_NEAR_REAL_TIME',
    '18c58bb3d44-layer-24': 'GROUP_NEAR_REAL_TIME',
    '18c58bb3d45-layer-25': 'GROUP_NEAR_REAL_TIME',
    '18c58bb3d45-layer-26': 'GROUP_NEAR_REAL_TIME',
    '18c58bb3d46-layer-27': 'GROUP_NEAR_REAL_TIME',
    '18c58bb3d47-layer-28': 'GROUP_NEAR_REAL_TIME',
    '18c58b9718a-layer-15': 'GROUP_NEAR_REAL_TIME',
    '18c58b9718b-layer-16': 'GROUP_NEAR_REAL_TIME',
    '18c58b78fc5-layer-13': 'GROUP_NEAR_REAL_TIME',
    '18c58b1f83e-layer-7': 'GROUP_NEAR_REAL_TIME',
    '18c58b1f840-layer-8': 'GROUP_NEAR_REAL_TIME',
    '18c58b1f840-layer-9': 'GROUP_NEAR_REAL_TIME',
    '18c58b1f841-layer-10': 'GROUP_NEAR_REAL_TIME',
    '18c58b1f841-layer-11': 'GROUP_NEAR_REAL_TIME',

    // GROUP_PROTECTION_AND_MANAGEMENT
    '18c58bf0c0e-layer-38': 'GROUP_PROTECTION_AND_MANAGEMENT',
    '18c58bf06a5-layer-37': 'GROUP_PROTECTION_AND_MANAGEMENT',
    '18c58bd4502-layer-34': 'GROUP_PROTECTION_AND_MANAGEMENT',
    '18c58bd4502-layer-35': 'GROUP_PROTECTION_AND_MANAGEMENT',

    // GROUP_NATURAL_VALUES
    Glaciated_Areas_3800: 'GROUP_NATURAL_VALUES', // Glaciated Areas
    Glaciated_Areas_6249: 'GROUP_NATURAL_VALUES', // Glaciated Areas FR
    '18fe3c6457d-layer-51': 'GROUP_NATURAL_VALUES', // Terrestrial species richness
    Terrestrial_species_richness_3076: 'GROUP_NATURAL_VALUES', // Terrestrial species richness FR
    '18fe3adc785-layer-51': 'GROUP_NATURAL_VALUES', // Terrestrial threatened species
    '18fe3b519f4-layer-40': 'GROUP_NATURAL_VALUES', // Terrestrial threatened species FR
    '18fe2b070c6-layer-51': 'GROUP_NATURAL_VALUES', // Marine species richness
    OBIS_Marine_biodiversity_richness_6349: 'GROUP_NATURAL_VALUES', // Marine species richness FR
    OBIS_Marine_biodiversity_richness_5696: 'GROUP_NATURAL_VALUES', // Marine threatened species
    '18fe792a926-layer-41': 'GROUP_NATURAL_VALUES', // Marine threatened species FR
    '18c58c6ee07-layer-42': 'GROUP_NATURAL_VALUES',
    '18c5900c801-layer-67': 'GROUP_NATURAL_VALUES',
    '18c58cd02d5-layer-49': 'GROUP_NATURAL_VALUES',
    '18c58ccc1cb-layer-48': 'GROUP_NATURAL_VALUES',
    '18c58cae831-layer-46': 'GROUP_NATURAL_VALUES',
    '18c58cae396-layer-45': 'GROUP_NATURAL_VALUES',
    '18c58c9d49e-layer-44': 'GROUP_NATURAL_VALUES',
    '18c58c83da9-layer-43': 'GROUP_NATURAL_VALUES',

    // GROUP_CLIMATE
    '18c58d7ee0c-layer-50': 'GROUP_CLIMATE',
    '18c58dcc81e-layer-51': 'GROUP_CLIMATE',
    TotalAnnualPrecipitation_6611: 'GROUP_CLIMATE', // Total annual precipitation
    TotalAnnualPrecipitation_3229: 'GROUP_CLIMATE', // Total annual precipitation FR
    Change_TempPre2050_9714: 'GROUP_CLIMATE', // Projected precipitation change by 2050
    '18ef6f7fa13-layer-37': 'GROUP_CLIMATE', // Projected precipitation change by 2050 FR
    Annual_Temp_6938: 'GROUP_CLIMATE', // Annual mean temperature
    Annual_Temp_738: 'GROUP_CLIMATE', // Annual mean temperature FR
    Change_Temp2050_7022: 'GROUP_CLIMATE', // Projected temperature change by 2050
    '18ef6f7b72f-layer-36': 'GROUP_CLIMATE', // Projected temperature change by 2050 FR

    // GROUP_SOCIOECONOMIC
    '18c5ced2b0f-layer-61': 'GROUP_SOCIOECONOMIC',
    sdei_global_annual_avg_pm2_5_2001_2010_image_service_7231: 'GROUP_SOCIOECONOMIC',
    sdei_global_annual_avg_pm2_5_2001_2010_image_service_6238: 'GROUP_SOCIOECONOMIC',
    Conventional_Statistics_and_Big_Data_to_Map_Global_Tourism_Destinations_Before_COVID_5661: 'GROUP_SOCIOECONOMIC', // Total yearly tourists
    Conventional_Statistics_and_Big_Data_to_Map_Global_Tourism_Destinations_Before_COVID_5680: 'GROUP_SOCIOECONOMIC', // Total yearly tourists FR

    // GROUP_THREATS_AND_RISKS
    '18c58f281b8-layer-61': 'GROUP_THREATS_AND_RISKS',
    '18c58eaed6d-layer-57': 'GROUP_THREATS_AND_RISKS',
    '18c58e9d446-layer-56': 'GROUP_THREATS_AND_RISKS',
    '18c58e80282-layer-55': 'GROUP_THREATS_AND_RISKS',
    '18c58e6fcdb-layer-54': 'GROUP_THREATS_AND_RISKS',
    '18c58fa310b-layer-64': 'GROUP_THREATS_AND_RISKS',
    '18c58f6c14a-layer-62': 'GROUP_THREATS_AND_RISKS',

    // GROUP_CUSTOM_BASEMAP
    '18c59090835-layer-73': 'GROUP_CUSTOM_BASEMAP', // Dark Gray Canvas
    '18c5907c5ac-layer-71': 'GROUP_CUSTOM_BASEMAP', // Topographic
    '18c5906db15-layer-70': 'GROUP_CUSTOM_BASEMAP', // Streets
    '18c590636fa-layer-69': 'GROUP_CUSTOM_BASEMAP', // Light Gray Canvas
    '18ec2e2d84a-layer-42': 'GROUP_CUSTOM_BASEMAP', // White background
    '18ec2e49a69-layer-38': 'GROUP_CUSTOM_BASEMAP', // White background FR
    '18c590868ad-layer-72': 'GROUP_CUSTOM_BASEMAP', // ????
    '18c590528da-layer-68': 'GROUP_CUSTOM_BASEMAP', // ????
  },
  layerPanel: {
    GROUP_WEBMAP: {
      order: 8,
      label: {},
      layers: [],
    },
    GROUP_WORLD_HERITAGE: {
      order: 1,
      groupType: 'default',
      label: {
        en: 'UNESCO designated sites',
        fr: "Sites désignés par l'UNESCO",
      },
      layers: [],
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
          id: 'TREE_COVER_LOSS',
          order: 1,
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
      ],
    },
    GROUP_PROTECTION_AND_MANAGEMENT: {
      order: 3,
      groupType: 'default',
      label: {
        en: 'Protection and Management',
        fr: 'Protection et gestion',
      },
      layers: [],
    },
    GROUP_NATURAL_VALUES: {
      order: 4,
      groupType: 'default',
      label: {
        en: 'Natural Values',
        fr: 'Valeurs naturelles',
      },
      layers: [],
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
          id: 'WATER_STRESS_CUSTOM',
          groupId: 'GROUP_SOCIOECONOMIC',
          order: 9,
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
          id: 'WIND_SPEED',
          order: 11,
          type: 'remoteDataLayer',
          uuid: '9fa60bd9-0643-4d0a-a569-0036e902d1f9',
          label: {
            en: 'Wind speed potential to Wind Speed Potential at 50m (m/s)',
            fr: 'Vitesse potentielle du vent à 50 m (m/s)',
          },
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
          order: 10,
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
        {
          id: 'FOREST_CARBON_NET_FLUX',
          order: 8,
          type: 'remoteDataLayer',
          uuid: 'bd768c4b-f5f8-47f9-b6a0-5bb6078f0fac',
          label: {
            en: 'Forest greenhouse gas emissions / sequestration. ',
            fr: 'Émissions / séquestration de gaz à effet de serre dans les forêts',
          },
        },
        {
          id: 'CARBON_SEQ',
          order: 9,
          type: 'remoteDataLayer',
          uuid: 'e7208398-0acd-4f73-a824-c4fe1e356e0c',
        },
        {
          id: 'CORAL_BLEACHING_RISK_CUSTOM',
          groupId: 'GROUP_CLIMATE',
          order: 10,
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
      ],
    },
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
    GROUP_CUSTOM_BASEMAP: {
      order: 10,
      groupType: 'default',
      label: {
        en: 'Basemap',
        fr: 'Fond de carte',
      },
      layers: [],
    },
    GROUP_IMAGERY: {
      groupType: 'imagery',
      order: 8,
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
