klasa ballReset {
    konstruktor() {
        ta.synergy = 6;
        this.hasStarted = fałsz;
        this.bonsCombinations = [];
        this.css = ` #ballResetPanel { pozycja: bezwzględna; góra: 35px; prawa: 10px; indeks z: 9999999; szerokość: 445px; wypełnienie: 5px; tło: #303131bd; obramowanie: pełne #ffffff7a 1px; promień obramowania: 5px; wyświetlanie: brak; wybór użytkownika: brak; } #ballResetPanel .controller { wyświetlanie: elastyczne; kierunek elastyczności: kolumna; wyrównanie elementów: rozciągnięcie; margines dolny: 2px; } #ballResetPanel .controller przycisk { grubość czcionki: pogrubienie; obramowanie: pełne czarne 1px; kursor: wskaźnik; } #ballResetPanel .controller przycisk.zielony { tło: limonkowy; kolor: czarny !ważne; } #ballResetPanel .controller przycisk.czerwony { tło: czerwony; kolor: czarny !ważne; } #ballResetPanel .controller button:first-child { border-bottom:none; background: #afd4f5; } #ballResetPanel .controller button:disabled { opacity: 1; background: gray; cursor: not-allowed; } #ballResetPanel .ballCombination { background: #dfdfdc5c; padding: 5px; margin-bottom: 2px; } #ballResetPanel .ballCombination .combinationID { text-align: center; background: black; color: white; font-weight: bolder; font-size: 16px; padding: 1px; margin-bottom: 2px; } #ballResetPanel .ballCombination select { margin-bottom: 2px; background: #ffffff99; border: solid #6f6f6f 1px; border-radius: 5px; color: black; } #ballResetPanel .ballCombination wybierz:last-child { margin-bottom: 0px; } `;
        this.innerHTML = ` <div id="ballResetPanel"> <div class="controller"> <button class="addCombination">DODAJ NOWĄ KOMBINACJĘ</button> <button class="startSearching green">WYPRÓBUJ</button> </div> <div class="combinations">${this.bonsCombination(1)</div> </div> `;
        
        $("body").append(`<style>${this.css</style>${this.innerHTML}`);
        $("body").on("kliknij", "#ballResetPanel .addCombination", () => {
            niech lastID = parseInt($(".ballCombination:last").attr("kombinacja"));
            ostatnieID++;
            $(".combinations").append(this.bonsCombination(lastID));
        });
        $("body").on("click", "#ballResetPanel .startSearching", () => {
            ten.kontroler();
        });
        $("body").on("kliknij", `button[data-option="ss_page"][data-page="resetuj"]`, () => {
            GRA.completeProgress = () => {
                var res = postęp gry;
                przełącznik (res.a) {
                    przypadek 45:
                        jeśli (res.ball) {
                            GRA.parseData(55, res);
                            jeśli (this.hasStarted) {
                                to.wyszukaj(res);
                            }
                        }
                        przerwa;
                }
                usuń GAME.progress;
            }
            jeśli(document.querySelector("#ss_name") i document.querySelector("#ss_name").textContent.trim() != "Anielska Kula Energii"){
            $("#ballResetPanel").show();
        }
        });
        $("body").on("click", `button[data-option="ss_page"][data-page="upgrade"], #soulstone_interface .closeicon`, () => {
            jeśli (this.hasStarted) {
                $("#ballResetPanel .startSearching").click();
            }
            $('.ss_stats tr').css("tło", "przezroczyste");
            $("#ballResetPanel").hide();
            $("#ss_page_reset").hide();
        });
    }
    kontroler() {
        jeśli (this.hasStarted) {
            this.hasStarted = fałsz;
            $(".startSearching").removeClass("czerwony").addClass("zielony").html("SZUKAJ");
            $(".ballCombination select").prop("wyłączone", false);
            $(".addCombination").prop("wyłączone", false);
        } w przeciwnym razie {
            this.hasStarted = prawda;
            to.szukaj();
            $(".startSearching").removeClass("zielony").addClass("czerwony").html("STOP");
            $(".ballCombination select").prop("wyłączone", prawda);
            $(".addCombination").prop("wyłączone", prawda);
        }
    }
    szukaj(res = false) {
        jeśli (this.hasStarted) {
            this.bonsCombinations = this.prepareCombinations();
            jeśli (res) {
                this.ballActualBons = this.prepareBallBons(res);
            } w przeciwnym razie {
                this.ballActualBons = [0]
            }
            jeśli (!this.compare(this.ballActualBons, this.bonsCombinations)) {
                GRA.socket.emit('ga', {
                    a: 45,
                    typ: 1,
                    oferta: GAME.ball_id
                });
            } w przeciwnym razie {
                $(".startSearching").click();
            }
        }
    }
    porównaj(wzorzec, inne) {
        const patternCounts = this.countOccurrences(wzorzec);
        dla (let i = 0; i < others.length; i++) {
            const inny = inni[i];
            const otherCounts = this.countOccurrences(inne);
            niech isValid = true;
            dla (const [liczba, liczba] obiektu.wpisy(inneliczby)) {
                jeśli (!wzorcoweLiczby[liczba] || wzorcoweLiczby[liczba] < liczba) {
                    isValid = false;
                    przerwa;
                }
            }
            jeśli (isValid) {
                zwróć wartość true;
            }
        }
        zwróć fałsz;
    }
    policzWystąpienia(tablica) {
        const liczba = {};
        dla (const liczba tablic) {
            liczba[liczba] = (liczba[liczba] || 0) + 1;
        }
        liczba zwrotów;
    }
    przygotujBons(res)BallBons {
        niech ball = res.ball;
        niech bony = [];
        $('.ss_stats tr').css("tło", "przezroczyste");
        for (var s = 1; s <= 9; s++) {
            jeśli (piłka['stat' + s] && this.bonsCombinations.some(tablica => tablica.includes(piłka['stat' + s]))) {
                bons.push(piłka['stat' + s]);
                $('#stat' + s + '_bon').parent().css("tło", "#80008075");
            }
        }
        bony zwrotne;
    }
    przygotujKombinacje() {
        niech kombinacje = [];
        $(".ballCombination").each((indeks, element) => {
            niech kombinacja = [];
            $(element).find("select").each((idx, sel) => {
                stała wartość = parseInt($(sel).val());
                jeśli (wartość > 0) {
                    combination.push(wartość);
                }
            });
            jeśli (długość kombinacji > 0) {
                kombinacje.push(kombinacja);
            }
        });
        kombinacje zwrotne;
    }
    kombinacjabons(c) {
        niech innerHTML = `<div class="ballCombination" combination="${c}"><div class="combinationID">Kombinacja #${c}}`;
        dla (let i = 0; i < this.synergy; i++) {
            internalHTML += `${this.listOfBons(c)}`;
        }
        innerHTML += "</div>";
        zwróć innerHTML;
    }
    listabonów() {
        niech innerHTML = ` <select> <option value="0">Brak</option> `;
        this.allBons().forEach((obiekt) => {
            internalHTML += `<opcja wartość="${obiekt.id}">${obiekt.bonus</option>`;
        });
        innerHTML += `</select>`;
        zwróć innerHTML;
    }
    wszystkie Bons() {
        powrót [{
            identyfikator: 13,
            bonus: '% do awarii'
        }, {
            identyfikator: 14,
            bonus: '% do zmniejszenia limitu'
        }, {
            identyfikator: 15,
            premia: '% wykonywania treningu'
        }, {
            identyfikator: 16,
            bonus: '% doświadczenia'
        }, {
            identyfikator: 17,
            bonus: '% czy szanse na trafienie krytyczne'
        }, {
            identyfikator: 18,
            bonus: '% do obniżenia szans na otrzymanie trafienia podstawowego'
        }, {
            identyfikator: 51,
            bonus: '% dotrzymania od technika'
        }, {
            identyfikator: 52,
            bonus: '% ograniczenia od technika'
        }, {
            identyfikator: 53,
            bonus: '% do ryzyka na moc z walk PvM'
        }, {
            identyfikator: 54,
            bonus: '% do ilości mocy z walk PvM'
        }, {
            identyfikator: 55,
            premia: '% szans na wykonanie przedmiotu z walk PvM'
        }, {
            identyfikator: 56,
            bonus: 'minut(a) krótkie wyprawy'
        }, {
            identyfikator: 57,
            bonus: '% do szansy na wyprawy'
        }, {
            identyfikator: 58,
            bonus: '% do szansy na ulepszenie przez'
        }, {
            identyfikator: 59,
            bonus: '% szans na połączenie'
        }, {
            identyfikator: 60,
            bonus: '% do ryzyka od trafień krytycznych'
        }, {
            identyfikator: 61,
            bonus: '% ograniczenia trafień krytycznych'
        }, {
            identyfikator: 62,
            bonus: '% mocy za wygrane walki wojenne'
        }, {
            identyfikator: 63,
            bonus: '% do specjalnego podpaleń'
        }, {
            identyfikator: 64,
            bonus: '% do specjalnego krwawienia'
        }, {
            identyfikator: 65,
            bonus: '% do pokonania na podpalenia'
        }, {
            identyfikator: 66,
            premia: '% robi odporność na krwawienia'
        }, {
            identyfikator: 67,
            bonus: '% do szans na wynik PSK'
        }, {
            identyfikator: 68,
            bonus: '% punktów PvP za wygrane walki'
        }, {
            identyfikator: 69,
            bonus: '% do szans na 3x więcej punktów PvP za wygrane walki'
        }, {
            identyfikator: 70,
            bonus: '% do szansy na 3x więcej doświadczenia za wygrane walki PvM'
        }, {
            identyfikator: 71,
            bonus: '% do mocy za skompletowanie SK'
        }, {
            identyfikator: 72,
            bonus: '% do mocy za skompletowanie PSK'
        }, {
            identyfikator: 73,
            premia: „minut(y) do czasu trwania postępowania”
        }, {
            identyfikator: 74,
            bonus: '% do szansy na spotkanie legendarnych potworów'
        }, {
            identyfikator: 75,
            bonus: 'minuta(y) czasu odnowienia między walkami PvP'
        }, {
            identyfikator: 76,
            premia: '% pośrednie własne'
        }, {
            identyfikator: 77,
            premia: „% wyników końcowych”
        }, {
            identyfikator: 78,
            bonus: '% do szans na trafienie Niebieskiego Senzu'
        }, {
            identyfikator: 79,
            premia: '% zmarłego od podpaleń'
        }, {
            identyfikator: 80,
            premia: „% osoby chorej od krwawienia”
        }, {
            identyfikator: 81,
            bonus: '% czy szanse na Scoutera'
        }, {
            identyfikator: 91,
            bonus: '% do wtajemniczenia'
        }, {
            identyfikator: 99,
            bonus: '% większy limit dziennych niebieskich senzu'
        }, {
            identyfikator: 139,
            premia: '% dodawanych ilości uzyskanych w wyniku'
        }, {
            identyfikator: 140,
            bonus: '% do straty Punktów Akcji'
        }, {
            identyfikator: 154,
            bonus: '% do sławy za walki w wojnach imperiaów'
        }, {
            identyfikator: 160,
            bonus: '% do boskiego atrybutu przewodniego'
        }, {
            identyfikator: 163,
            bonus: '% więcej Boskiej Ki za CSK'
        }, {
            identyfikator: 171,
            bonus: '% do max Punktów Akcji'
        }];
    }
}

klasa pet_bonch {
    konstruktor() {
        to.petCSS = `
            #bonusMenu {wyświetlanie: brak; pozycja: absolutna; góra: 80px; prawa: 5px; wypełnienie: 10px; tło: rgba(48, 49, 49, 0.8); obramowanie: pełne #ffffff7a 1px; promień obramowania: 5px; indeks z: 10;}
            #bonusMenu div {kolor: #ffffff; rozmiar czcionki: 16px; grubość czcionki: pogrubiona; margines dolny: 10px; wyrównanie tekstu: do środka; }
            #bonusMenu wybierz {margines: 5px 0; tło: #ffffff99; obramowanie: pełne #6f6f6f 1px; promień obramowania: 5px; kolor: czarny; wyświetlanie: blok; szerokość: 100%;}
            .startButton {wyświetlacz: blok; margines: 8px auto;}
            .stopButton {wyświetlanie: blok; margines: 8px auto; margines-dolny: 1ch;}`;
        ten.petHTML = `
            <div id="bonusMenu">
                <div><b>Wybierz bonus:</b></div>
                ${this.generateBonusSelects(4)}
                <div><b>Wybierz ID Peta:</b></div>
                <select id="petIdSelect">${this.generatePetOptions()</select>
                <button class="newBtn startButton">Rozpocznij</button>
                <button class="newBtn stopButton">ZAMKNIJ</button>
            </div>`;
        this.isPetBonchActive = false;
        this.petInterval = null;

        to.inicjalizuj();
    }

    zainicjuj() {
        to.attachButtonEvent();
        this.attachStartEvent();
        this.attachStopEvent();
    }

    generujBonusSelects(liczba) {
        niech opcje = `
            <option value="0">Hamulec</option>
            <option value="1">% do siły</option>
            <option value="2">% do szybkości</option>
            <option value="3">% do wytrzymałości</option>
            <option value="4">% do siły woli</option>
            <option value="5">% energii ki</option>
            <option value="6">% do wszystkich statystyk</option>
            <option value="7">% do treningu treningu</option>
            <option value="8">% do rezultatu treningu</option>
            <option value="9">% do szansy na podwójnie skuteczny bonus za ulepszenie treningu</option>
            <option value="10">% do max Punktów Akcji</option>
            <option value="11"> do pozostałościu Punktów Akcji</option>
            <option value="12">% do przyrostu punktów Akcji</option>
            <option value="13">% do doświadczenia</option>
            <option value="14">% do szans na wykonanie przedmiotu z walk PvM</option>
            <option value="15">% do ilości mocy z walk PvM</option>
            <option value="16">% szans na walkę z walką PvM</option>
            <option value="17">% do mocy za skompletowanie SK</option>
            <option value="18">% do mocy za skompletowanie PSK</option>
            <option value="19">% mocy za wygrane walki wojenne</option>
            <option value="20">% do odbioru</option>
            <option value="21">% do odbiornika od technika</option>
            <option value="22">% do utraty trafień krytycznych</option>
            <option value="23">% do zmniejszenia ograniczenia</option>
            <option value="24">% ograniczenia ograniczenia od technika</option>
            <option value="25">% redukcji szans na uzyskanie trafienia podstawowego</option>
            <option value="26">% ograniczenia utraty trafień krytycznych</option>
            <option value="27">% szans na trafienie bezpłatne</option>
            <option value="28">% zwiększa ryzyko krwawienia</option>
            <option value="29">% do usuwania krwawień</option>
            <option value="30">% do pokonania na podpalenia</option>
            <option value="31">% do specjalnego podpalenia</option>
        `;
        niech wybierze = "";
        dla (let i = 0; i < liczba; i++) {
            wybiera += `<select>${opcje}</select>`;
        }
        zwróć wybiera;
    }

    generujOpcjeZwierząt() {
        niech opcje = '';
        dla (let i = 1; i <= 100; i++) {
            opcje += `<option value="${i}">Zwierzak ${i</option>`;
        }
        opcje zwrotu;
    }

    dołączZdarzeniePrzycisku() {
        $("body").on("kliknij", 'przycisk[data-option="pet_bonch"]', () => {
            jeśli (!$("#bonusMenu").length) {
                $("body").append(`<style>${this.petCSS}</style>${this.petHTML}`);
            }

            ustawCzasOkres(() => {
                jeśli ($(".pet-number").length === 0) {
                    const petItems = document.querySelectorAll('.petItem');
                    petItems.forEach((petItem, index) => {
                        const numberLabel = document.createElement('div');
                        numberLabel.classList.add('numer-zwierzaka');
                        numberLabel.textContent = `Zwierzę #${index + 1}`;
                        numberLabel.style.fontWeight = 'pogrubiony';
                        numberLabel.style.marginBottom = '5px';
                        petItem.prepend(liczbaEtykiet);
                    });
                }
                this.isPetBonchActive = false;
                $("#bonusMenu").toggle();
            }, 333);
        });
    }

    dołączStartEvent() {
        $("body").on("kliknij", '.startButton', () => {
            this.isPetBonchActive = prawda;
            const selectedOptions = Array.from($('#bonusMenu select').not('#petIdSelect'))
                .mapa(wybierz => {
                    const value = select.value;
                    const optionText = select.options[select.selectedIndex].text;
                    wartość zwracana !== "0" ? optionText : null;
                })
                .filter(opcja => opcja !== null);

            const checkAndSendData = () => {
                const container = document.querySelector("#kom_con > div > div.content > div");
                const greenTextValues ​​= Array.from(container.querySelectorAll("b.green")).map(el => {
                    powrót el.nextRodzeństwo ? el.nextSibling.textContent.trim() : "";
                });

                const allMatch = selectedOptions.every(opcja => greenTextValues.includes(opcja));
                const iloscKarmy = parseInt($("#ilosc_karm").text(), 10);

                jeśli (iloscKarmy === 0) {
                    this.isPetBonchActive = false;
                    console.log("Brak Karmy.");
                }

                jeśli (this.isPetBonchActive) {
                    jeśli (wszystkie dopasowania) {
                        console.log("Wszystkie wartości wybrane spośród:", wybraneOpcje);
                        clearInterval(ten.petInterval);
                        this.isPetBonchActive = false;
                    } w przeciwnym razie {
                        console.log("Brak pełnego dopasowania, ponawiam próbę...");
                        const petId = $('#petIdSelect').val();
                        const button = document.querySelector(`#pet_list > div:nth-child(${petId}) > div.rightSide > div > button:nth-child(2)`);
                        const petId2 = przycisk.getAttribute("data-pet");
                        GRA.socket.emit('ga', { a: 43, typ: 7, zwierzak: petId2 });
                        kom_clear();
                    }
                } w przeciwnym razie {
                    clearInterval(ten.petInterval);
                }
            };

            this.petInterval = setInterval(checkAndSendData, 2000);
        });
    }

    dołączStopEvent() {
        $("body").on("kliknij", '.stopButton', () => {
            $("#bonusMenu").hide();
            this.isPetBonchActive = false;
        });
    }
}

        klasa anielskaResetuj {
            konstruktor() {
                to.anielskaCSS = `
                    #AnielskaMenu {wyświetlanie: brak; pozycja: absolutna; góra: 80px; prawa: 5px; wypełnienie: 10px; tło: rgba(48, 49, 49, 0.8); obramowanie: pełne #ffffff7a 1px; promień obramowania: 5px; indeks z: 10;}
                    #AnielskaMenu div {kolor: #ffffff; rozmiar czcionki: 16px; grubość czcionki: pogrubiona; margines dolny: 10px; wyrównanie tekstu: do środka; }
                    #AnielskaMenu wybierz {margines: 5px 0; margines dolny: 2ch; tło: #ffffff99; obramowanie: pełne #6f6f6f 1px; promień obramowania: 5px; kolor: czarny; wyświetlanie: blok; szerokość: 100%;}
                    .startAnielska {wyświetlacz: blok; margines: 8px auto;}
                    .stopAnielska {wyświetlanie: blok; margines: 8px auto; margines-dolny: 1ch;}`;
                to.anielskaHTML = `
                    <div id="AnielskaMenu">
                        <div><b>Wybierz ustawienia Anielskiej Kuli:</b></div>
                        ${this.generateAnielskaSelects(5)}
                        <button class="newBtn startAnielska">Start</button>
                        <button class="newBtn stopAnielska">ZAMKNIJ</button>
                    </div>`;
                this.isAnielskaActive = false;
                this.anielskaInterval = null;
        
                to.inicjalizuj();
            }
        
            zainicjuj() {
                this.attachResetEvent();
                this.attachStartEvent();
                this.attachStopEvent();
            }
        
            generujAnielskaSelects(liczba){
                niech opcje = `<option value="0">Brak</option>
                 <option value="1">10% do boskiego atrybutu przewodniego</option>
                 <option value="2">15% do boskiego atrybutu przewodniego</option>
                 <option value="3">150% doświadczenia</option>
                 <option value="4">200% doświadczenia</option>
                 <option value="5">150% treningu treningu</option>
                 <option value="6">200% treningu treningu</option>
                 <option value="7">75% mocy z walk PvM</option>
                 <option value="8">100% mocy z walk PvM</option>
                 <option value="9">75% dodawanych do ilości kryształów</option>
                 <option value="10">100% do ilości uzyskanych kryształów przeznaczonych</option>
                 <option value="11">30% do maks. Punktów Akcji</option>
                 <option value="12">35% do max Punktów Akcji</option>
                 <option value="13">40% do uzupełnienia</option>
                 <option value="14">45% do uzupełnienia</option>
                 <option value="15">40% do odbiornika od technika</option>
                 <option value="16">45% do odbiornika od technika</option>
                 <option value="17">30% do przyrostu punktów Akcji</option>
                 <option value="18">35% do przyrostu punktów Akcji</option>
                 <option value="19">40% do ograniczenia ograniczenia</option>
                 <option value="20">45% do ograniczenia ograniczenia</option>
                 <option value="21">40% do sławy za walkę w wojnach imperiów</option>
                 <option value="22">45% do sławy za walkę w wojnach imperiów</option>
                 <option value="23">15% zrób ryzyko na 3x więcej doświadczenia za wygrane walki PvM</option>
                 <option value="24">20% na ryzyko na 3x więcej doświadczenia za wygrane walki PvM</option>
                 <option value="25">9% szans na połączenie</option>
                 <option value="26">12% szans na połączenie</option>
                 <option value="27">9% to szansa na spotkanie legendarnych potworów</option>
                 <option value="28">12% to szansa na spotkanie legendarnych potworów</option>
                 <option value="29">9% szans na ulepszenie</option>
                 <option value="30">12% to szansa na ulepszenie</option>
                 <option value="31">9% szans na wykonanie przedmiotu z walk PvM</option>
                 <option value="32">12% to szanse na wynik z walk PvM</option>
                 <option value="33">9% to szanse na wynik PSK</option>
                 <option value="34">12% to szanse na wynik PSK</option>
                 <option value="35">3% to szansa na wynik CSK</option>
                 <option value="36">5% szans na wynik CSK</option>
                 <option value="37">15% do wtajemniczenia</option>
                 <option value="38">20% do wtajemniczenia</option>
                 <option value="39">40% ograniczenia odbiornika od technika</option>
                 <option value="40">45% ograniczenia odbiornika od technika</option>
                 <option value="41">9% szans na moc z walką PvM</option>
                 <option value="42">12% na ryzyko na moc z walk PvM</option>
                 <option value="43">10% większego limitu dziennego Niebieskich Senzu</option>
                 <option value="44">15% większego limitu dziennego Niebieskich Senzu</option>
                 <option value="45">4% większego mnożnika SSJ</option>
                 <option value="46">6% większego mnożnika SSJ</option>
                 <option value="47">10% redukcji skutków czasowych</option>
                 <option value="48">12% redukcji skutków czasowych</option>
                 <option value="49">75 minut do czasu trwania Błogosławieństw</option>
                 <option value="50">100 minut do czasu trwania Błogosławieństw</option>
                 <option value="51">12 minut(y) czasu odnowienia między walkami PvP</option>
                 <option value="52">15 minut(y) czasu odnowienia między walkami PvP</option>
                 <option value="53">50% większej ilości boskiego atrybutu przewodniego z walk PvM</option>
                 <option value="54">60% większej ilości boskiego atrybutu przewodniego z walk PvM</option>
                 <option value="55">2% stanowi szansę na ulepszenie każdego M-borna</option>
                 <option value="56">4% stanowi szansę na ulepszenie każdego M-borna</option>
                 <option value="57">5% do rezultatu treningu</option>
                 <option value="58">10% do rezultatu treningu</option>
                 <option value="59">2% do szansy na podwójnie skuteczny bonus za ulepszenie treningu</option>
                 <option value="60">3% do szansy na podwójnie skuteczny bonus za ulepszenie treningu</option>
                 <option value="61">3% większa szansa na boski atrybut bohatera podczas walk PvM</option>
                 <option value="62">5% większej szansy na boski atrybut bohatera podczas walk PvM</option>
                 <option value="63">5% do wszystkich statystyk</option>
                 <option value="64">10% % do wszystkich statystyk</option>
                 <option value="65">4% większa szansa na pomyślne zebranie zasobu</option>
                 <option value="66">6% większej szansy na pomyślne zebranie zasobu</option>
                 `;
                niech wybierze = '';
                dla (let i = 0; i < liczba; i++) {
                    wybiera += `<select>${opcje}</select>`;
                }
                zwróć wybiera;
            }
        
            dołączResetEvent() {
                $("body").on("kliknij", 'przycisk[data-option="ss_page"][data-page="resetuj"]', () => {
                    jeśli (document.querySelector("#ss_name") && document.querySelector("#ss_name").textContent.trim() === "Anielska Kula Energii") {
                        jeśli ($("#ballResetPanel").length) {
                            ustawCzasOkres(() => {
                                document.querySelector("#ballResetPanel").style.display = "brak";
                            }, 500);
                        }
                        if (!$("#AnielskaMenu").length) {
                            $("body").append(`<style>${this.anielskaCSS</style>${this.anielskaHTML}`);
                            console.log("#AnielskaMenu Wczytano.");
                        }
                        ustawCzasOkres(() => {
                            this.isAnielskaActive = false;
                            $("#AnielskaMenu").toggle();
                        }, 333);
                    }
                });
            }
        
            dołączStartEvent() {
                $("body").on("kliknij", '.startAnielska', () => {
                    this.isAnielskaActive = prawda;
                    const selectedOptions2 = Array.from($('#AnielskaMenu select'))
                        .mapa(wybierz => {
                            const value = select.value;
                            const optionText = select.options[select.selectedIndex].text;
                            jeśli (wartość !== "0" && parseInt(wartość, 10) % 2 !== 0) {
                                const nextEvenValue = parseInt(wartość, 10) + 1;
                                const nextEvenText = wybierz.opcje[wybierz.selectedIndex + 1]?.tekst;
                                zwróć [tekst_opcji, następny_tekst_parzysty].filtr(Boolean);
                            }
                            wartość zwracana !== "0" ? [tekst_opcji] : null;
                        })
                        .filter(opcja => opcja !== null);
        
                    const checkAndSendData2 = () => {
                        const table = document.querySelector("table.ss_stats");
                        const statBonValues ​​= Array.from(table.querySelectorAll("td[id^='stat'][id$='_bon']"))
                            .map(td => td.zawartośćtekstowa.trim())
                            .filter(wartość => wartość !== "");
        
                        const statValValues ​​= Array.from(table.querySelectorAll("b[id^='stat'][id$='_val']"))
                            .map(b => b.zawartośćtekstowa.trim())
                            .filter(wartość => wartość !== "");
        
                        const combinedValues ​​= statValValues.map((val, index) => `${val}${statBonValues[index]}`);
                        console.log(wartościpołączone);
                        console.log(selectedOptions2);
        
                        const toCheck = selectedOptions2.filter(opcje => {
                            zwróć !options.some(opcja => combinedValues.includes(opcja));
                        });
        
                        jeśli (toCheck.length === 0) {
                            jeśli (this.isAnielskaActive) {
                                console.log("Wszystkie wartości wybrane spośród:", wybraneOpcje2);
                                clearInterval(this.anielskaInterval);
                            } w przeciwnym razie {
                                clearInterval(this.anielskaInterval);
                            }
                        } w przeciwnym razie {
                            console.log("Brak pełnego dopasowania, ponawiam próbę...");
                            GRA.socket.emit('ga', { a: 45, typ: 1, licytacja: GRA.ball_id });
                        }
                    };
        
                    this.anielskaInterval = setInterval(checkAndSendData2, 1500);
                });
            }
        
            dołączStopEvent() {
                $("body").on("kliknij", '.stopAnielska', () => {
                    $("#AnielskaMenu").hide();
                    this.isAnielskaActive = false;
                    clearInterval(this.anielskaInterval);
                });
            }
        }