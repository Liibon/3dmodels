import { ModelGenerator } from './generator';
import { exportToGLTF } from './exporters/gltfExporter';
import { AbstractModel } from './models';
import { loadPresets } from './utils/presetLoader';

async function main() {
    const presets = await loadPresets();
    const modelGenerator = new ModelGenerator();

    const models = presets.map(preset => modelGenerator.generateModel(preset));

    models.forEach(model => {
        const gltfData = exportToGLTF(model);
        // Save or use the GLTF data as needed
    });

    console.log('Abstract models generated and exported successfully.');
}

main().catch(error => {
    console.error('Error during model generation:', error);
});