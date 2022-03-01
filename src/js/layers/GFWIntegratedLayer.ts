//@ts-nocheck
import PNG from 'png-ts';
import { loadModules } from 'esri-loader';

export const createGFWIntegratedLayer = async () => {
  const [BaseTileLayer] = await loadModules(['esri/layers/BaseTileLayer']);

  return BaseTileLayer.createSubclass({
    getTileUrl: function(level, row, column) {
      return this.urlTemplate
        .replace('{z}', level)
        .replace('{x}', column)
        .replace('{y}', row);
    },
    fetchTile: function(level, row, column) {
      const url = this.getTileUrl(level, row, column);
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      const width = this.tileInfo.size[0];
      const height = this.tileInfo.size[0];
      canvas.width = width;
      canvas.height = height;

      return this.fetchTileArrayBuffer(url).then(r => {
        const data = new Uint8Array(r);
        const png = new PNG(data);
        const pngImage = PNG.load(png.data, canvas);
        const iData = context.createImageData(width, height);
        const pixels = pngImage.decodePixels();
        iData.data.set(this.processData(pixels));
        context.putImageData(iData, 0, 0);
        return canvas;
      });
    },
    fetchTileArrayBuffer: async function(url) {
      const response = await fetch(url);
      return response.arrayBuffer();
    },
    processData: function(data) {
      for (let i = 0; i < data.length; i += 4) {
        const slice = [data[i], data[i + 1], data[i + 2], data[i + 3]];
        data[i + 3] = 92;
        data[i]; // R
        data[i + 1]; // G
        data[i + 2]; // B
      }
      return data;
    }
  });
};
