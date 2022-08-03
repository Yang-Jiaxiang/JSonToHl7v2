const configJson = require("./configHl7.json");

module.exports = function Json2Hl7(inputJson) {
    const version = inputJson.Version;
    //配置文件讀取
    configJson.map((item) => {
        if (item.version === version) {
            getJsonValue(item.data);
        }
    });

    //讀取配置文件segment
    function getJsonValue(versonData) {
        versonData.map((item) => {
            compileHl7(item.segment, item.value);
        });
    }

    //配置JSON&輸入JSON交叉比對
    function compileHl7(segment, data) {
        //初始化Hl7text 並設定segment
        var Hl7text = segment;

        //配置Json Data迴圈
        data.map((item) => {
            var itemname = "";
            //配置Json Data若是object 則為segment
            if (typeof item === "string") {
                itemname = item;
            } else if (typeof item === "object") {
                itemname = item.segment;
            }
            //判斷inputJson是否有值
            if (inputJson[segment][itemname]) {
                //判斷是否有第二層
                if (typeof inputJson[segment][itemname] === "object") {
                    //初始化第二層
                    Hl7text += "|";
                    inputJson[segment][itemname].map((item2, index) => {
                        //第二層第1個值
                        if (index === 0) {
                            Hl7text += item2.value;
                        } else {
                            Hl7text += "^" + item2.value;
                        }
                    });
                } else {
                    Hl7text += "|" + inputJson[segment][itemname];
                }
            } else {
                Hl7text += `|`;
            }
        });
        console.log(Hl7text);
    }
};
