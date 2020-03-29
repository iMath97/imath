module.exports = function(config){

    config.addPassthroughCopy("src/js");
    config.addPassthroughCopy("src/css");

    return {
        passthroughFileCopy: true,
        dir:{
            input: "src",
            output: "_site"
        }
    };
};