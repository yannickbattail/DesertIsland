#!/bin/bash

rm -Rf temp_dir
rm DesertIsland.zip
mkdir temp_dir

mkdir temp_dir/fal
cp index.html temp_dir/fal/
cp *.js temp_dir/fal/
cp -R images temp_dir/fal/
cp -R styles temp_dir/fal/

cp incrementum-ludus/json3.min.js temp_dir/

mkdir temp_dir/Engine
cp incrementum-ludus/Engine/*.js temp_dir/Engine/
mkdir temp_dir/Engine/implementations
cp incrementum-ludus/Engine/implementations/*.js temp_dir/Engine/implementations/

mkdir temp_dir/NodeUpdate
cp incrementum-ludus/NodeUpdate/NodeUpdate.js temp_dir/NodeUpdate/

cd temp_dir
7z a DesertIsland.zip ./
cd ..

rm -Rf temp_dir
