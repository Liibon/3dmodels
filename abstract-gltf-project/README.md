# Abstract GLTF Project

This project is designed to generate abstract 3D models and export them in the GLTF format. The focus is on creating unique, non-boxy, and visually appealing assets that can be used in various applications.

## Project Structure

- **.devcontainer/**: Contains configuration files for the development container.
  - `devcontainer.json`: Configuration settings for the development environment.
  - `Dockerfile`: Defines the Docker image used for the development container.

- **src/**: The source code for the application.
  - `index.ts`: Entry point for the application, coordinating model generation.
  - `generator.ts`: Contains the `ModelGenerator` class for creating abstract models.
  - **models/**: Contains model definitions.
    - `index.ts`: Exports various model classes.
  - **exporters/**: Handles exporting models.
    - `gltfExporter.ts`: Function to convert models to GLTF format.
  - **utils/**: Utility functions for the project.
    - `math.ts`: Mathematical operations used in model generation.

- **tools/**: Contains scripts and tools for the project.
  - **scripts/**: Automation scripts.
    - `bake-metadata.sh`: Automates the process of baking metadata into models.
  - **mesh-tools/**: Documentation for mesh tools.
    - `README.md`: Usage and functionality of mesh tools.

- **data/**: Contains data files for presets and metadata.
  - **presets/**: Predefined settings for model generation.
    - `abstract-presets.json`: JSON file with model generation presets.
  - **metadata/**: Metadata schema.
    - `schema.json`: Defines the schema for model metadata.

- **notebooks/**: Jupyter notebooks for experimentation.
  - `exploration.ipynb`: Notebook for exploratory data analysis.

- **tests/**: Unit tests for the application.
  - `generator.test.ts`: Tests for the `ModelGenerator` class.

- **.gitignore**: Specifies files to ignore in Git.

- **package.json**: npm configuration file with dependencies and scripts.

- **tsconfig.json**: TypeScript configuration file.

- **Dockerfile**: Defines the Docker image for production.

- **docker-compose.yml**: Configuration for multi-container applications.

- **LICENSE**: Licensing information for the project.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd abstract-gltf-project
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Open the project in a development container (if using VS Code):
   - Use the command palette to select "Remote-Containers: Reopen in Container".

4. Run the application:
   ```
   npm start
   ```

## Usage

- Use the `ModelGenerator` class to create abstract models.
- Export models using the `exportToGLTF` function.
- Modify presets in `abstract-presets.json` to customize model generation.

## Contribution Guidelines

Contributions are welcome! Please submit a pull request with your changes. Make sure to include tests for any new features or bug fixes.