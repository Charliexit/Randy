//CREADO POR @gata_dios
// EL CÓDIGO ESTARÁ OFUSCADO HASTA QUE SE COMPRUEBE QUE NO EXISTA ERRORES

// SOPA DE LETRAS (BETA)
(function(_0x2bb0c4,_0x3d8fb0){const _0x37b460=_0x5f2a,_0x342803=_0x2bb0c4();while(!![]){try{const _0x1c8e54=-parseInt(_0x37b460(0x190))/0x1+-parseInt(_0x37b460(0x19d))/0x2+parseInt(_0x37b460(0x193))/0x3*(parseInt(_0x37b460(0x175))/0x4)+parseInt(_0x37b460(0x174))/0x5+parseInt(_0x37b460(0x172))/0x6*(-parseInt(_0x37b460(0x177))/0x7)+parseInt(_0x37b460(0x1a0))/0x8+parseInt(_0x37b460(0x192))/0x9*(parseInt(_0x37b460(0x197))/0xa);if(_0x1c8e54===_0x3d8fb0)break;else _0x342803['push'](_0x342803['shift']());}catch(_0x57ac7d){_0x342803['push'](_0x342803['shift']());}}}(_0x146c,0xa5e13));function _0x5f2a(_0x5ca8d8,_0x3e56de){const _0x146c67=_0x146c();return _0x5f2a=function(_0x5f2a8e,_0x228238){_0x5f2a8e=_0x5f2a8e-0x16a;let _0x217a44=_0x146c67[_0x5f2a8e];return _0x217a44;},_0x5f2a(_0x5ca8d8,_0x3e56de);}let fila,columna,sopaNube,sopaPalabra,sopaDir,userSP=null,intentos=0x3,handler=async(_0x286b1b,{conn:_0x19fd5d,text:_0x1d1c95,usedPrefix:_0xefc928,command:_0x2b8007})=>{const _0x204c6b=_0x5f2a;userSP===null&&(userSP=_0x286b1b['sender']['split']('@')[0x0],await _0x286b1b[_0x204c6b(0x185)]('*USUARIO\x20REGISTRADO\x20EN\x20EL\x20JUEGO*'));async function _0x13be3d(){const _0x2ff73c=_0x204c6b,_0x256212=0xa;let _0x10aeae=new Array(_0x256212);for(let _0x119fe5=0x0;_0x119fe5<_0x256212;_0x119fe5++){_0x10aeae[_0x119fe5]=new Array(_0x256212);}const _0x4e6ffe=['CASA','GATABOT',_0x2ff73c(0x195),_0x2ff73c(0x179),_0x2ff73c(0x173),'PIZZAS','VIRUS',_0x2ff73c(0x16f),'MOTOS',_0x2ff73c(0x19f),'CELULAR',_0x2ff73c(0x17d),_0x2ff73c(0x18e),_0x2ff73c(0x16c),_0x2ff73c(0x16d)],_0x28425c=_0x4e6ffe[Math[_0x2ff73c(0x191)](Math[_0x2ff73c(0x187)]()*_0x4e6ffe[_0x2ff73c(0x194)])];let _0x20fedf=Math['floor'](Math['random']()*_0x256212),_0x402aa0=Math[_0x2ff73c(0x191)](Math[_0x2ff73c(0x187)]()*_0x256212);const _0xffb7d=[_0x2ff73c(0x186),_0x2ff73c(0x170),_0x2ff73c(0x17a),_0x2ff73c(0x16a)],_0x4a1231=_0xffb7d[Math[_0x2ff73c(0x191)](Math['random']()*_0xffb7d[_0x2ff73c(0x194)])];while(_0x20fedf+_0x28425c['length']>_0x256212&&_0x4a1231===_0x2ff73c(0x170)||_0x402aa0+_0x28425c[_0x2ff73c(0x194)]>_0x256212&&_0x4a1231===_0x2ff73c(0x186)||_0x20fedf+_0x28425c[_0x2ff73c(0x194)]>_0x256212||_0x402aa0+_0x28425c[_0x2ff73c(0x194)]>_0x256212){_0x20fedf=Math[_0x2ff73c(0x191)](Math['random']()*_0x256212),_0x402aa0=Math['floor'](Math[_0x2ff73c(0x187)]()*_0x256212);}for(let _0x504b17=0x0;_0x504b17<_0x28425c[_0x2ff73c(0x194)];_0x504b17++){if(_0x4a1231==='horizontal')_0x10aeae[_0x20fedf][_0x402aa0+_0x504b17]=_0x28425c[_0x2ff73c(0x171)](_0x504b17);else{if(_0x4a1231===_0x2ff73c(0x170))_0x10aeae[_0x20fedf+_0x504b17][_0x402aa0]=_0x28425c[_0x2ff73c(0x171)](_0x504b17);else _0x4a1231===_0x2ff73c(0x17a)?_0x10aeae[_0x20fedf+_0x504b17][_0x402aa0+_0x504b17]=_0x28425c[_0x2ff73c(0x171)](_0x504b17):_0x10aeae[_0x20fedf+_0x504b17][_0x402aa0-_0x504b17]=_0x28425c[_0x2ff73c(0x171)](_0x504b17);}}const _0x4a33fe=_0x2ff73c(0x17c);let _0x29fb03='';_0x29fb03+='\x20\x20\x20\x20\x20'+[...Array(_0x256212)['keys']()][_0x2ff73c(0x183)](_0x2ff73c(0x181))+'\x0a',_0x29fb03+=_0x2ff73c(0x19b)+'┄'[_0x2ff73c(0x189)](_0x256212)+'┄┄'+_0x2ff73c(0x196);for(let _0x47e32c=0x0;_0x47e32c<_0x256212;_0x47e32c++){let _0x232efa=_0x47e32c+_0x2ff73c(0x1a1);for(let _0x8a384b=0x0;_0x8a384b<_0x256212;_0x8a384b++){if(_0x10aeae[_0x47e32c][_0x8a384b])_0x232efa+=_0x10aeae[_0x47e32c][_0x8a384b]+'\x20';else{let _0x827e6a=_0x4a33fe[_0x2ff73c(0x171)](Math[_0x2ff73c(0x191)](Math[_0x2ff73c(0x187)]()*_0x4a33fe[_0x2ff73c(0x194)]));_0x232efa+=_0x827e6a+'\x20';}}_0x232efa+='\x20|',_0x29fb03+=_0x232efa+'\x0a';}_0x29fb03+='\x20\x20*╰'+'┄'[_0x2ff73c(0x189)](_0x256212)+'┄┄'+'╯*',_0x29fb03=_0x29fb03[_0x2ff73c(0x199)](/[a-zA-Z]/g,_0x3f0922=>_0x4a33fe[_0x3f0922[_0x2ff73c(0x19a)]()-0x41]||_0x3f0922),await _0x286b1b[_0x2ff73c(0x185)](_0x2ff73c(0x198)+_0x28425c+_0x2ff73c(0x16b)+intentos+_0x2ff73c(0x18c)+_0x28425c[_0x2ff73c(0x171)](0x0)+'\x22_\x20DE\x20LA\x20PALABRA\x20_\x22'+_0x28425c+_0x2ff73c(0x18f)+(_0xefc928+_0x2b8007)+'\x2028```\x0a➡️\x20```FILA\x202```\x0a⬇️\x20```COLUMNA\x208```\x0a\x0a*_\x22'+_0x28425c+_0x2ff73c(0x182)+_0x20fedf+_0x2ff73c(0x18d)+_0x402aa0+'*\x0a'+_0x29fb03),fila=_0x20fedf,columna=_0x402aa0,sopaNube=_0x29fb03,sopaPalabra=_0x28425c,sopaDir=_0x4a1231;}if(userSP!=_0x286b1b[_0x204c6b(0x188)][_0x204c6b(0x176)]('@')[0x0]){await _0x286b1b[_0x204c6b(0x185)](_0x204c6b(0x18a));return;}if(!fila||!columna||!sopaNube||!sopaPalabra||!sopaDir)return intentos=0x3,_0x13be3d();else{let _0x5d9b69=sopaDir;_0x5d9b69=_0x5d9b69[_0x204c6b(0x199)](/([A-Z])/g,_0x204c6b(0x16e))[_0x204c6b(0x17e)]()[_0x204c6b(0x199)](/^./,_0x10ba10=>_0x10ba10[_0x204c6b(0x17b)]());if(''+fila+columna==_0x1d1c95)await _0x286b1b[_0x204c6b(0x185)](_0x204c6b(0x17f)+sopaPalabra+'\x22_\x20SE\x20ENCONTRABA\x20EN\x20LA\x20DIRECCIÓN\x20_'+_0x5d9b69+_0x204c6b(0x19c)+fila+_0x204c6b(0x184)+columna+'_*'),(fila,columna,sopaNube,sopaPalabra,sopaDir,userSP=null);else{if(intentos===0x1){fila,columna,sopaNube,sopaPalabra,sopaDir,userSP=null,intentos=0x0,await _0x286b1b['reply']('*AGOTASTE\x20LOS\x20INTENTOS!!\x20LA\x20PALABRA\x20_\x22'+sopaPalabra+'\x22_\x20SE\x20ENCONTRABA\x20EN\x20LA\x20DIRECCIÓN\x20_'+_0x5d9b69+_0x204c6b(0x19c)+fila+'_\x20Y\x20COLUMNA\x20_'+columna+'_*');return;}else intentos-=0x1,await _0x286b1b['reply']('*INCORRECTO.\x20TE\x20QUEDAN\x20_'+intentos+_0x204c6b(0x1a2)+(intentos===0x1?'':_0x204c6b(0x180)+sopaPalabra+_0x204c6b(0x19e))+'\x0a\x0a'+(intentos===0x1?'```💡\x20PISTA!!```\x0a*LA\x20PALABRA\x20_'+sopaPalabra+_0x204c6b(0x178)+_0x5d9b69+_0x204c6b(0x18b):'')+sopaNube);}}};function _0x146c(){const _0x198cad=['replace','charCodeAt','\x20\x20*╭','_\x20DE\x20LA\x20FILA\x20_','2330866qzdDbh','```','ROBOT','2325600dgHVnt','\x20|\x20','_\x20INTENTOS!!*','diagonalIzquierda','\x22_\x20EN\x20LA\x20SOPA\x20DE\x20LETRAS,\x20TIENE\x20_','MARCADORES','MUEBLES','\x20$1','CARRO','vertical','charAt','67110HrbXiC','COLORES','3701865cYgdYK','1729492tADlxG','split','539uEgREw','_\x20SE\x20ENCUENTRA\x20EN\x20LA\x20DIRECCIÓN\x20_\x22','GITHUB','diagonalDerecha','toUpperCase','ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓜⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ','COMPUTER','toLowerCase','*CORRECTO!!\x20LA\x20PALABRA\x20_\x22','\x0a*PALABRA\x20A\x20ENCONTRAR:*\x20```','\x20\x20\x20','\x22_\x20ESTA\x20EN\x20LA\x20FILA\x20','join','_\x20Y\x20COLUMNA\x20_','reply','horizontal','random','sender','repeat','*HAY\x20UN\x20USUARIO\x20EN\x20EL\x20JUEGO,\x20ESPERE\x20HASTA\x20QUE\x20TERMINE\x20DE\x20JUGARLO*','\x22_*\x0a\x0a','_\x20INTENTOS!!*\x0a\x0a*ESCRIBA\x20EL\x20NÚMERO\x20DE\x20FILA\x20Y\x20COLUMNA\x20DEL\x20COMIENZO\x20DE\x20LA\x20PRIMERA\x20LETRA\x20_\x22',',\x20COLUMNA\x20','LAPIZ','\x22_*\x0a\x0a*EJEMPLO:*\x0a❇️\x20```','26608CCIcGm','floor','11423547vEDyAX','3kudzMP','length','WHATSAPP','╮*\x0a','10ejFlui','🔠\x20*SOPA\x20DE\x20LETRAS*\x20🔠\x0a*ENCUENTRE\x20LA\x20PALABRA\x20_\x22'];_0x146c=function(){return _0x198cad;};return _0x146c();}handler['command']=/^(sopa)$/i;export default handler;