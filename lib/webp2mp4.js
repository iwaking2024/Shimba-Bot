import _0x3c3d0d from'node-fetch';import{FormData,Blob}from'formdata-node';import{JSDOM}from'jsdom';async function webp2mp4(_0x5415ef){const _0x33ee85=new FormData(),_0x138ab6=typeof _0x5415ef==='string'&&/https?:\/\//['test'](_0x5415ef),_0x6166ed=!_0x138ab6&&new Blob([_0x5415ef['toArrayBuffer']()]);_0x33ee85['append']('new-image-url',_0x138ab6?_0x6166ed:''),_0x33ee85['append']('new-image',_0x138ab6?'':_0x6166ed,'image.webp');const _0x592169=await _0x3c3d0d('https://s6.ezgif.com/webp-to-mp4',{'method':'POST','body':_0x33ee85}),_0x11b1a4=await _0x592169['text'](),{document:_0x4e39d0}=new JSDOM(_0x11b1a4)['window'],_0xe438ed=new FormData(),_0x248d3e={};for(const _0xbc5ef3 of _0x4e39d0['querySelectorAll']('form\x20input[name]')){_0x248d3e[_0xbc5ef3['name']]=_0xbc5ef3['value'],_0xe438ed['append'](_0xbc5ef3['name'],_0xbc5ef3['value']);}const _0x4ce8a6=await _0x3c3d0d('https://ezgif.com/webp-to-mp4/'+_0x248d3e['file'],{'method':'POST','body':_0xe438ed}),_0x412602=await _0x4ce8a6['text'](),{document:_0x1c58c4}=new JSDOM(_0x412602)['window'];return new URL(_0x1c58c4['querySelector']('div#output\x20>\x20p.outfile\x20>\x20video\x20>\x20source')['src'],_0x4ce8a6['url'])['toString']();}async function webp2png(_0xa7afb1){const _0x2ccb18=new FormData(),_0x41fd89=typeof _0xa7afb1==='string'&&/https?:\/\//['test'](_0xa7afb1),_0x5a7a66=!_0x41fd89&&new Blob([_0xa7afb1['toArrayBuffer']()]);_0x2ccb18['append']('new-image-url',_0x41fd89?_0x5a7a66:''),_0x2ccb18['append']('new-image',_0x41fd89?'':_0x5a7a66,'image.webp');const _0x5b87a7=await _0x3c3d0d('https://s6.ezgif.com/webp-to-png',{'method':'POST','body':_0x2ccb18}),_0x3c69b4=await _0x5b87a7['text'](),{document:_0x45f441}=new JSDOM(_0x3c69b4)['window'],_0xb481d8=new FormData(),_0x3e8626={};for(const _0x402513 of _0x45f441['querySelectorAll']('form\x20input[name]')){_0x3e8626[_0x402513['name']]=_0x402513['value'],_0xb481d8['append'](_0x402513['name'],_0x402513['value']);}const _0x597b7f=await _0x3c3d0d('https://ezgif.com/webp-to-png/'+_0x3e8626['file'],{'method':'POST','body':_0xb481d8}),_0x1bc8e1=await _0x597b7f['text'](),{document:_0x465ad1}=new JSDOM(_0x1bc8e1)['window'];return new URL(_0x465ad1['querySelector']('div#output\x20>\x20p.outfile\x20>\x20img')['src'],_0x597b7f['url'])['toString']();}export{webp2mp4,webp2png};