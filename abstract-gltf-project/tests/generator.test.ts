import { ModelGenerator } from '../src/generator';
import { AbstractModel } from '../src/models';

describe('ModelGenerator', () => {
    let modelGenerator: ModelGenerator;

    beforeEach(() => {
        modelGenerator = new ModelGenerator();
    });

    test('should generate a model with default parameters', () => {
        const model = modelGenerator.generateModel();
        expect(model).toBeInstanceOf(AbstractModel);
        expect(model).toHaveProperty('geometry');
        expect(model).toHaveProperty('material');
    });

    test('should apply a preset correctly', () => {
        const preset = { /* define a sample preset here */ };
        const model = modelGenerator.generateModel();
        modelGenerator.applyPreset(model, preset);
        expect(model).toMatchObject(preset);
    });

    test('should generate multiple models', () => {
        const models = modelGenerator.generateModel(5);
        expect(models.length).toBe(5);
        models.forEach(model => {
            expect(model).toBeInstanceOf(AbstractModel);
        });
    });
});