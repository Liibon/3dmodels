#!/bin/bash

# This script automates the process of baking metadata into the generated models.

# Define the input directory containing the models
MODEL_DIR="./data/models"

# Define the output directory for the baked metadata
OUTPUT_DIR="./data/metadata/baked"

# Create the output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# Loop through each model file in the model directory
for model_file in "$MODEL_DIR"/*; do
    # Extract the model name without the extension
    model_name=$(basename "$model_file" .gltf)

    # Define the output metadata file
    metadata_file="$OUTPUT_DIR/${model_name}_metadata.json"

    # Generate metadata (this is a placeholder, replace with actual metadata generation logic)
    echo "Generating metadata for $model_name..."
    echo "{" > "$metadata_file"
    echo "  \"name\": \"$model_name\"," >> "$metadata_file"
    echo "  \"description\": \"Abstract model generated for project.\"," >> "$metadata_file"
    echo "  \"version\": \"1.0\"," >> "$metadata_file"
    echo "  \"author\": \"Your Name\"" >> "$metadata_file"
    echo "}" >> "$metadata_file"

    echo "Metadata for $model_name baked into $metadata_file"
done

echo "Metadata baking process completed."