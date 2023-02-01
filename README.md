# Project

Exemplo aplicativo React Native Logistica

expo init nome_do_aplicativo

expo login

expo start

expo start --android

npm install -g expo-cli

expo init Project

cd Project

expo start

## React Navigation

npm install @react-navigation/native
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install @react-navigation/stack

## BACKEND

npm install express --save

npm install cors --save

## SEQUELIZE

npm install --save sequelize

npm install --save mysql2

npm install --save sequelize-cli

npx sequelize-cli init

npx nodemon [seu arquivo]

Criar tabelas
npx sequelize-cli model:generate --name User --attributes name:string,password:string

npx sequelize-cli model:generate --name Tracking --attributes code:string,local:string,userId:integer

npx sequelize-cli model:generate --name Product --attributes name:string,trackingId:integer

## RUN MIGRATES

npx sequelize-cli db:migrate
