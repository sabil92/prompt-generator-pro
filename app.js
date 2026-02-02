const DB = {

location: [
"pedesaan",
"trotoar pinggir jalan kota",
"di luar rumah gubuk",
"di dalam rumah gubuk",
"di samping rumah gubuk"
],

weather: [
"cerah berawan",
"malam berkabut",
"hujan ringan",
"angin kencang"
],

time: [
"siang hari",
"sore hari",
"malam hari",
"subuh berkabut"
],

mood: [
"sunyi emosional",
"tegang mencekam",
"hangat nostalgik",
"dramatis intens"
],

shot: [
"extreme close up",
"close up",
"medium shot",
"wide cinematic shot"
],

angle: [
"low angle",
"high angle",
"eye level",
"dutch angle dramatis"
],

movement: [
"slow tracking cinematic",
"handheld realistis",
"zoom pelan dramatis",
"static shot"
],

focus: [
"shallow depth of field",
"deep focus",
"soft cinematic blur"
],

quality: [
"8K ultra HD",
"4K cinematic",
"masterpiece quality",
"ultra detail",
"hyper realistic"
],

ratio: [
"9:16 vertical",
"16:9 landscape",
"1:1 square"
]

};

function fillDB(){
for(let key in DB){
const el = document.getElementById(key);
DB[key].forEach(item=>{
const opt = document.createElement("option");
opt.text = item;
el.add(opt);
});
}
}
fillDB();

function generate(){

const loc = location.value;
const wea = weather.value;
const tim = time.value;
const moo = mood.value;
const sho = shot.value;
const ang = angle.value;
const mov = movement.value;
const foc = focus.value;
const qua = quality.value;
const rat = ratio.value;

result.value = `
PRIORITAS REFERENSI GAMBAR:
Karakter harus sangat mirip dengan gambar referensi. Pertahankan struktur wajah, proporsi tubuh, pose, dan identitas visual. Jangan mendesain ulang karakter.

DESKRIPSI ADEGAN:
(isi adegan otomatis atau manual)

Dialog (bahasa Indonesia, nada tenang datar)

DETAIL KARAKTER 1:
Penampilan: sesuai gambar referensi
Pakaian: tekstur kotor realistis
Ekspresi: tenang dan datar

DETAIL KARAKTER 2:
Penampilan: sesuai gambar referensi
Pakaian: tekstur kotor realistis
Ekspresi: tenang dan datar

DETAIL KARAKTER 3:
Penampilan: sesuai gambar referensi
Pakaian: tekstur kotor realistis
Ekspresi: tenang dan datar

LINGKUNGAN:
Lokasi: ${loc}
Cuaca: ${wea}
Waktu: ${tim}
Suasana: ${moo}

KAMERA SINEMATIK:
Jenis shot: ${sho}
Sudut kamera: ${ang}
Gerakan kamera: ${mov}
Kedalaman fokus: ${foc}

KUALITAS OUTPUT:
${qua}
${rat}
`;
}
function fillDB(){
for(let key in DB){
const el = document.getElementById(key);
if(!el) continue;
DB[key].forEach(item=>{
const opt = document.createElement("option");
opt.text = item;
el.add(opt);
});
}
}

fillDB();
function generate(){

const loc = location.value;
const wea = weather.value;
const cam = camera.value;
const qua = quality.value;
const rat = ratio.value;

result.value = `
LOKASI: ${loc}
CUACA: ${wea}
KAMERA: ${cam}
KUALITAS: ${qua}
RASIO: ${rat}
`;
