# UNESCO WHOMP Map Builder

![UNESCO WHOMP Map Builder template screenshot](/screenshot.png 'UNESCO WHOMP Map Builder template screenshot')

> Template for UNESCO WHOMP based on the [WRI MapBuilder](https://github.com/wri/gfw-mapbuilder) application and ArcGIS Online.

## Development

### Getting Started

Before you can begin, make sure you have [node.js](https://nodejs.org/en/) version 18.
Or you can also use [NVM](https://github.com/nvm-sh/nvm) instead.

Install all the javascript dependencies.

```shell
yarn install
```

Start the server and then the app will be served at [http://localhost:8080](http://localhost:8080).

```shell
npm start
```

### Generating a build

> You will need node.js installed for these steps

Run the following command to generate a build to the `dist` directory.

```shell
yarn build
```

## App configuration

The instructions and documentation about how to configure the app are in [docs/configuration.md](docs/configuration.md) file.

### Quick add new layers

In the `resources.js` file you can add new layers to the map. The layers are defined in the `layers` array inside each group on the layerPanel attribute. The layers and groups are ordered by the `order` attribute being order 1 first in the layer panel than order 2. Minimum order should be 1. Take into account that currently we have different layers for the same data on different languages. Don't use the same order for two different layers. The most used types on the app are:

- `arcgis`: for webmap layers coming from Esri
- `remoteDataLayer`: Layers coming from GFW PRODUCTION API (production-api.globalforestwatch)
- `flagship` GFW metadata layers coming from Resource Watch API (api.resourcewatch.org)

Important: The Arcgis layers not defined in the `resources.js` file will be displayed on the Custom layer group in the order defined on the Esri webmap.

## Deployment

The app uses GH sites, and it's already configured to make a automatically deployment once a PR or commit is merged to the `main` branch. This automatization is set up using GH actions.
