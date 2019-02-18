const fs = require('fs');
const path = require('path');

const dirName = process.argv.reverse()[0];

const distPath = path.resolve(__dirname, dirName);

function exist (name) {
  try {
    fs.accessSync(name);
  } catch (e) {
    return false;
  }
  return true;
}

function writeToFile (path, data) {
  fs.writeFileSync(path, data, 'utf8');
}

if (exist(distPath)) {
  console.log(`page: ${dirName} is exist!`);
  return;
}

fs.mkdirSync(distPath);

const vueStr = `<template>
  <div class="${dirName}-page">
  
  </div>
</template>
<script>
export default {
  data () {
    return {
      
    };
  },
  methods: {
    
  }
};
</script>
<style lang="less" scoped>
  .${dirName}-page{
      
  }    
</style>
<style lang="less">
  .${dirName}-page{
      
  } 
</style>
`;
writeToFile(path.resolve(distPath, './index.vue'), vueStr);
