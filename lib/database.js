import{resolve,dirname as _0x23c5ce}from'path';import _0x1cd7e4,{existsSync,readFileSync}from'fs';const {promises:fs}=_0x1cd7e4;class Database{constructor(_0xfcec66,..._0x4e1ed3){this['file']=resolve(_0xfcec66),this['logger']=console,this['_load'](),this['_jsonargs']=_0x4e1ed3,this['_state']=![],this['_queue']=[],this['_interval']=setInterval(async()=>{!this['_state']&&this['_queue']&&this['_queue'][0x0]&&(this['_state']=!![],await this[this['_queue']['shift']()]()['catch'](this['logger']['error']),this['_state']=![]);},0x3e8);}get['data'](){return this['_data'];}set['data'](_0x16355e){this['_data']=_0x16355e,this['save']();}['load'](){this['_queue']['push']('_load');}['save'](){this['_queue']['push']('_save');}['_load'](){try{return this['_data']=existsSync(this['file'])?JSON['parse'](readFileSync(this['file'])):{};}catch(_0x22de25){return this['logger']['error'](_0x22de25),this['_data']={};}}async['_save'](){const _0x400061=_0x23c5ce(this['file']);if(!existsSync(_0x400061))await fs['mkdir'](_0x400061,{'recursive':!![]});return await fs['writeFile'](this['file'],JSON['stringify'](this['_data'],...this['_jsonargs'])),this['file'];}}export default Database;