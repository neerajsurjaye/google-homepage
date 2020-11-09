let search = document.querySelector("#srcBtn");
let inp = document.querySelector(".inp");
let languages = document.querySelector(".languages");
let searchText = "";
let finalURL;
let fin_lang = "lang_en"
let language_val = 0;


search.addEventListener('click' , fnSearch);

function fnSearch(){
      searchText = inp.value;
      searchText = searchText.replace(" " , "+");
      console.log(searchText + " " + fin_lang);
      finalURL = new URL(`https://www.google.com/search?q=${searchText}&lr=${fin_lang}`);
      window.open(finalURL , "_self");
      
}


languages.addEventListener("click" , fnLanguage);
function fnLanguage(e){
   language_val = parseInt(e.target.dataset.ln);
   fin_lang="lang_";
   if(language_val == 0){
      fin_lang = fin_lang + "en";
   }else if(language_val == 1){
      fin_lang = fin_lang + "hi";
   }else if(language_val == 2){
      fin_lang = fin_lang + "fr";
   }else if(language_val == 3){
      fin_lang = fin_lang + "de";
   }else if(language_val == 4){
      fin_lang = fin_lang + "ru";
   }

   if(fin_lang == "lang_"){
      fin_lang = "lang_en";
   }

}