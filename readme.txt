WeatherForecast 1.0
======================
Autor: Jan Hejtman / www.janhejtman.cz / e-mail: jan.hejtman@seznam.cz / datum: 3. 3. 2021
======================

Toto je pouze textový formát. Popis včetně obrázku najdete v souboru "readme.docx"

A  Stručný popis
B  Instalace
C  Uživatelské prostředí
D  Doplňující informace
======================

A  Stručný popis
Aplikace pro zobrazení venkovní teploty pro aktuální den a následujících 5 dní.
Teplotní hodnoty získané dle aktuální polohy zařízení nebo je lze vyhledat manuálně.

Ukázka aplikace: 
https://weatherforecast-jh.netlify.app
<<<<<<< HEAD
nebo
http://janhejtman.cz/weatherforecast/index.html
=======

=======
>>>>>>> db8672c0837dbf43b3070b8f65419f20b6192ed8

B  Instalace
1) Aplikaci umístíme do požadované stránky vložením:
-------------------------------------------------------------------
<section id="weather-forecast-1" role="weather-forecast"></section>
-------------------------------------------------------------------

2) Do javascriptového souboru (musí mít atribut type="module", 
např. <script type="module" src="js/index.js"></script> ), 
který pracuje na stránce s naším modulem vložíme:
-------------------------------------------------------------------
import { loadWeatherForecast } from "../modules/weatherForecast/main.js";
loadWeatherForecast();
-------------------------------------------------------------------
3) Pokud bude nutné změnit zdroje dat aplikace (API či lokálních souborů), 
provedeme změny v souboru "config.js" umístěného v adresáři "weatherForecast"

4) POZOR: Pokud budou soubory aplikace umístěné v jiné adresářové struktuře,
musíme změnit cestu:
a) k souboru "main.js" viz bod 2)
b) cestu "path" k lokalním zdrojům dat (citiesEndpoint, countriesEndpoint) a css. viz bod 3)


C.  Uživatelské prostředí

Aplikace se skládá z bloků:
1)	Vyhledávací pole
2)	Teplota pro aktuální den pro danou lokaci
3)	Předpověď pro následujících 5 dní

Chování:

Geolokace
Při načtení se aplikace dotáže uživatele o získání jeho polohy pomocí geolokace. 
Pokud je geolokace v prohlížeči uživatelem zakázána nebo ji prohlížeč nepodporuje, pokusí se aplikace získat přibližnou polohu pomocí IP lokace 
(v1.0: https://extreme-ip-lookup.com/ )
Získáné geografické souřadnice pak použije k získání dat předpovědi teplot pomocí API (v1.0: https://openweathermap.org/ )
 
Vyhledávání lokality
Pokud budeme chtít zobrazit teplotu a předpověď v jiné lokalitě, zadáme název lokality do vyhledávacího pole.
Pokud neznáme přesný název lokality, zadáme první písmeno a můžeme využít našeptávač.

Responzivní design
Aplikace je responsivní pro zobrazení jak na mobilních telefonech, tak na desktopových počítačích.

UI podle aktuální teploty
Uživatelské prostředí reaguje na změnu aktuální teploty.
Pro teploty menší než 0 °C zobrazí prostředí do ledové modré.
Pro teploty v rozmezí 0 °C – 14 °C v neutrální levandulové.
Pro teploty 15 °C a více v teplé broskvové barvě.
 

D  Doplňující informace

Pokud zadáme lokalitu, pro kterou není předpověď, informaci sdělí aplikace uživateli pomocí textu pod vyhledávacím polem.
Vyhledávací pole je ošetřeno proti zadání škodlivého kódu.
Našeptávač se zobrazí po načtení dat z lokálního souboru (velikost cca 20 MB). Data se stahují na pozadí. Během této doby lze bez čekání vyhledávat, ale bez možnosti našeptávače, 

Podpora prohlížečů
Aplikace podporuje moderní prohlížeče Google Chrome, Mozilla Firefox, Microsoft Edge.

Zdrojový kód aplikace
Aplikace napsána pomocí značkovacího jazyka HTML5 a využití stylů CSS3 (SASS). Interaktivita pomocí programovacího jazyka Javascript.
Struktura se skládá z logických bloků, mezi které patří komponenty Head, Search, Current, Forecast. Ty jsou pak součástí bloku moduleStructure. Díky rozdělení na menší bloky, je zdrojový kód udržovatelný a přehlednější.
Objektový orientovaný přístup je využitý v definování tříd CSS stylů k jednotlivým komponentám. Styly pak nejsou vázány na přesný HTML element. Pokud tedy dojde k nahrazení HTML elementu za jiný, stačí aplikovat příslušnou CSS třídu a nemusí se zasahovat do zdrojového souboru CSS.
Během zpracování dat, využíváme utilit jako:
•	převod unixového formátu data na lokální jazyk dle nastavení prohlížeče uživatele
•	převod ISO kódu země na její název
•	při vyhledávání je použit regular expresion a Unicode Normalization Form pro odstranění diakritiky či filtrace škodlivého kódu

Závěrem
Aplikace vznikla jako pracovní úkol v rámci přijímacího řízení. Je zde velký prostor na zdokonalení mnoha částí a funkcí, které lze v budoucnu doplnit. 




