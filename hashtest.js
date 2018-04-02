var cnUtil = require('cryptonote-util');

var v0_in = "6162756e64616e732063617574656c61206e6f6e206e6f636574";
var v0_r = "722fa8ccd594d40e4a41f3822734304c8d5eff7e1b528408e2229da38ba553c4";
var v0_in_c = new Buffer(v0_in, 'hex');
var v0_out_c = cnUtil.cn_slowhash_variant(v0_in_c, 0);
var v0_out = v0_out_c.toString('hex');

console.log("V0", v0_r, v0_out, v0_r === v0_out);

var v1_in = "37a636d7dafdf259b7287eddca2f58099e98619d2f99bdb8969d7b14498102cc065201c8be90bd777323f449848b215d2977c92c4c1c2da36ab46b2e389689ed97c18fec08cd3b03235c5e4c62a37ad88c7b67932495a71090e85dd4020a9300";
var v1_r = "613e638505ba1fd05f428d5c9f8e08f8165614342dac419adc6a47dce257eb3e";
var v1_in_c = new Buffer(v1_in, 'hex');
var v1_out_c = cnUtil.cn_slowhash_variant(v1_in_c, 1);
var v1_out = v1_out_c.toString('hex');

console.log("V1", v1_r, v1_out, v1_r === v1_out);

var v2_in = "38274c97c45a172cfc97679870422e3a1ab0784960c60514d816271415c306ee3a3ed1a77e31f6a885c3cb";
var v2_r = "070302c3a36668f598490352309e02bd58feae14284c7fcddbd5fc569b362df8";
var v2_in_c = new Buffer(v2_in, 'hex');
var v2_out_c = cnUtil.cn_slowhash_variant(v2_in_c, 2);
var v2_out = v2_out_c.toString('hex');

console.log("V2", v2_r, v2_out, v2_r === v2_out);

var v3_in = "38274c97c45a172cfc97679870422e3a1ab0784960c60514d816271415c306ee3a3ed1a77e31f6a885c3cb";
var v3_r = "aac15d4b8025c46b37253b7c8328fce6d2e4b396ffe8403ebc4b72e74c2366a6";
var v3_in_c = new Buffer(v3_in, 'hex');
var v3_out_c = cnUtil.cn_slowhash_variant(v3_in_c, 3);
var v3_out = v3_out_c.toString('hex');

console.log("V3", v3_r, v3_out, v3_r === v3_out);
