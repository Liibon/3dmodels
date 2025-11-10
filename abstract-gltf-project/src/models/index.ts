export class AbstractModel {
    constructor(public id: string, public properties: Record<string, any>) {}

    public getId(): string {
        return this.id;
    }

    public getProperties(): Record<string, any> {
        return this.properties;
    }
}

export class SphereModel extends AbstractModel {
    constructor(id: string, public radius: number) {
        super(id, { type: 'sphere', radius });
    }
}

export class CubeModel extends AbstractModel {
    constructor(id: string, public size: number) {
        super(id, { type: 'cube', size });
    }
}

export class CustomModel extends AbstractModel {
    constructor(id: string, properties: Record<string, any>) {
        super(id, properties);
    }
}