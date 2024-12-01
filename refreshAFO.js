niech lastTimestamp = Date.now();
niech isRunning = false;
niech refreshInterval;

funkcja checkRefresh() {
    const currentTimestamp = Date.now();

    jeśli (bieżący znacznik czasu - ostatni znacznik czasu > 15000 && isRunning) {
        ostatni znacznik czasu = bieżący znacznik czasu;

        const linkElement = document.querySelector('.qlink.load_afo');
        jeśli (element_linku) {
            linkElement.click();
            isRunning = fałsz;

			ustawCzasOkres(() => {
				const selectedOption = document.getElementById('actionSelect').value;
				przełącznik (selectedOption) {
					sprawa 'Kody':
						// Akcje związane z kodem
						wykonajAkcjeKodu();
						przerwa;
					sprawa 'PVP':
						// Akcje związane z PVP
						wykonaj AkcjePvp()
							.następnie(() => {
								zwróć arenaAndAbyss();
							});
						przerwa;
					przypadek 'PVM':
						// Działania związane z PVM
						wykonajPvmActions();
						przerwa;
					przypadek 'Listy':
						// Wyświetl listę powiązanych działań
						wykonajListActions();
						przerwa;
					sprawa 'Wyprawy':
						autoekspedycje();
						przerwa;                                     
					sprawa 'Zbierajka':
						// Inne powiązane działania
						wykonajInneAkcje();
						przerwa;			
					domyślny:
						przerwa;
				}
			(2000);
        }
    }
}

funkcja toggleScript() {
    jestUruchomiony = !jestUruchomiony;

    jeśli (jestUruchomione) {
        window.localStorage.setItem('isRunning', 'true');
        odświeżInterwał = ustawInterwał(() => {
            sprawdźOdśwież();
        }, 1000);

    } w przeciwnym razie {
        window.localStorage.setItem('isRunning', 'false');
        clearInterval(odświeżInterwał);
    }

    zaktualizujTekstPrzycisku();
}

funkcja updateButtonText() {
    const controlButton = document.getElementById('toggleButton');
    jeśli (przycisk_kontrolny) {
        controlButton.textContent = isRunning ? 'Odśwież Afo Stop' : 'Odśwież Afo Start';
    }
}

funkcja createControlButton() {
    const controlButton = document.createElement('button');
    controlButton.id = 'toggleButton';
    controlButton.textContent = isRunning ? 'Odśwież Afo Stop' : 'Odśwież Afo Start';
    controlButton.style.position = 'stały';
    controlButton.style.top = '36px';
    przycisk_kontroli.style.prawy = '10px';
    controlButton.style.background = '#333';
    controlButton.style.zIndex = '9999';
    controlButton.style.width = '150px';
    controlButton.style.padding = '1px';
    controlButton.style.borderRadius = '5px';
    controlButton.style.borderStyle = 'solid';
    controlButton.style.borderWidth = '5px 6px 5px 6px';
    controlButton.style.display = 'blok';
    controlButton.style.userSelect = 'brak';
    controlButton.style.color = 'złoty';
    controlButton.style.borderColor = 'rgba(0,0,0,0.9)';
    controlButton.addEventListener('kliknij', () => {
        przełączScript();
    });
    dokument.body.appendChild(controlButton);

    const selectContainer = document.createElement('div');
    selectContainer.style.position = 'stały';
    wybierzKontener.style.top = '73px';
    selectContainer.style.right = '10px';
    wybierzContainer.style.background = '#333';
    selectContainer.style.zIndex = '9999';
    selectContainer.style.width = '150px';
    selectContainer.style.padding = '1px';
    selectContainer.style.borderRadius = '5px';
    selectContainer.style.borderStyle = 'solid';
    selectContainer.style.borderWidth = '5px 6px 5px 6px';
    selectContainer.style.display = 'blok';
    selectContainer.style.userSelect = 'brak';
    wybierzContainer.style.color = 'rgba(0,0,0,0.9)';

    const actionSelect = document.createElement('select');
    actionSelect.id = 'actionSelect';
    actionSelect.style.color = 'gold'; // Ustaw początkowy kolor czcionki na złoty
    actionSelect.style.background = '#333333';
    actionSelect.style.border = 'brak';
    actionSelect.style.width = '100%';
    actionSelect.style.height = '100%';
    actionSelect.style.padding = '5px';
    actionSelect.style.fontSize = '12px';
    actionSelect.style.fontWeight = 'pogrubiony';

    // Pobierz wybraną opcję z pamięci lokalnej, jeśli jest dostępna
    const savedOption = window.localStorage.getItem('selectedOption');

    // Dodanie nasłuchiwacza zdarzeń w celu zmiany koloru wybranej opcji
    actionSelect.addEventListener('change', funkcja() {
        const selectedOption = this.options[this.selectedIndex];
        selectedOption.style.color = 'złoty';
        dla (let i = 0; i < this.options.length; i++) {
            jeśli (i !== this.selectedIndex) {
                this.options[i].style.color = 'biały';
            }
        }
        // Zapisz wybraną opcję w pamięci lokalnej
        window.localStorage.setItem('selectedOption', selectedOption.value);
    });

    const opcje = ['Kody', 'PVP', 'PVM', 'Listy', 'Wyprawy', 'Zbierajka'];
    opcje.forEach(opcja => {
        const optionElement = document.createElement('opcja');
        optionElement.value = opcja;
        optionElement.textContent = opcja;
        // Ustaw wybrany atrybut, jeśli opcja pasuje do opcji zapisanej w pamięci lokalnej
        jeśli (zapisana opcja === opcja) {
            optionElement.selected = prawda;
            optionElement.style.color = 'gold'; // Ustaw kolor czcionki na złoty dla zapisanej opcji
        }
        actionSelect.appendChild(element opcji);
    });

    selectContainer.appendChild(actionSelect);
    dokument.body.appendChild(selectContainer);
}

funkcja performCodeActions() {
    niech ghButtonElement = document.querySelector('.gh_button.gh_code');
    niech codeButtonElement = document.querySelector('.code_button.code_code');
    niech codeButtonAccElement = document.querySelector('.code_button.code_acc');
    niech codeButtonSubElement = document.querySelector('.code_button.code_zast');
    jeśli (ghButtonElement && codeButtonElement) {
        ustawCzasOkres(() => {
            ghButtonElement.click();
            ustawCzasOkres(() => {
                codeButtonElement.click();
                ustawCzasOkres(() => {
                    codeButtonAccElement.click();
                    ustawCzasOkres(() => {
                        codeButtonSubElement.click();
                   (2000);
                (2000);
            (2000);
        (2000);
    }
}

funkcja performPvpActions() {
    zwróć nową obietnicę((rozwiąż, odrzuć) => {
        niech ghButtonElement = document.querySelector('.gh_button.gh_pvp');
        niech codeButtonElement = document.querySelector('.pvp_button.pvp_pvp');
        jeśli (ghButtonElement && codeButtonElement) {
            ustawCzasOkres(() => {
                GRA.page_switch('mapa_gry');
                ustawCzasOkres(() => {
                    ghButtonElement.click();
                    ustawCzasOkres(() => {
                        codeButtonElement.click();
                        rozstrzygać();
                    (2000);
                }, 1000);
            (2000);
        } w przeciwnym razie {
            reject(new Error('Nie znaleziono jednego lub obu przycisków'));
        }
    });
}

funkcja arenaAndAbyss() {
    zwróć nową obietnicę((rozwiąż, odrzuć) => {
        ustawTimeout(funkcja() {
            przycisk var = document.querySelector('.qlink.manage_auto_arena');
            jeśli (przycisk) {
                przycisk.kliknij();
                ustawTimeout(funkcja() {
                    var abyssButton = document.querySelector('.qlink.manage_auto_abyss');
                    jeśli (przycisk otchłani) {
                        abyssButton.click();
                        rozstrzygać();
                    } w przeciwnym razie {
                        odrzuć(nowy Błąd('Nie znaleziono przycisku Otchłań'));
                    }
                }, 700);
            } w przeciwnym razie {
                odrzuć(nowy Błąd('Nie znaleziono przycisku Areny'));
            }
        }, 1500);
    });
}



funkcja selectSavedSpawners() {
    const selectedSpawners = JSON.parse(localStorage.getItem('selectedSpawners')) || [];
    niech indeks = 0;
    const intervalId = ustawInterwał(() => {
        jeśli (indeks >= selectedSpawners.length) {
            clearInterval(interwałId);
            powrót;
        }
        const spawnerId = selectedSpawners[indeks];
        const spawner = document.getElementById(spawnerId);
        jeśli (spawner) {
            spawner.click();
        }
        indeks++;
    }, 800);
}

funkcja saveSelectedSpawners() {
    const wybraneSpawners = [];
    const spawners = document.querySelectorAll('[id^="kws_spawner_ignore_"]');
    spawners.forEach(spawner => {
        jeśli (spawner.checked) {
            selectedSpawners.push(spawner.id);
        }
    });
    localStorage.setItem('selectedSpawners', JSON.stringify(selectedSpawners));
}

funkcja performPvmActions() {
    const ghRespButton = document.querySelector('.gh_button.gh_resp');
    jeśli (ghRespButton) {
        ustawCzasOkres(() => {
            ghRespButton.click();
            ustawCzasOkres(() => {
                const respButton = document.querySelector('.resp_button.resp_resp');
                jeśli (przycisk odpowiedzi) {
                    GRA.page_switch('mapa_gry');
                    ustawCzasOkres(() => {
                        respButton.click();
                        wybierzZapisaneSpawnery();
                        const spawners = document.querySelectorAll('[id^="kws_spawner_ignore_"]');
                        spawners.forEach(spawner => {
                            spawner.addEventListener('change', saveSelectedSpawners);
                        });
                    }, 2500);
                }
            }, 2500);
        }, 2500);
    }
}
funkcja autoekspedycje() {
  ustawTimeout(funkcja() {
    przycisk var = document.querySelector('.qlink.sideIcons.manage_autoExpeditions');
    jeśli (przycisk) {
      przycisk.kliknij();
    }
  }, 10000);
}

funkcja performListActions() {
    const ghLpvmButton = document.querySelector('.gh_button.gh_lpvm');
    jeśli (ghLpvmButton) {
        ustawCzasOkres(() => {
            ghLpvmButton.kliknij();
            ustawCzasOkres(() => {
                const lpvmUBotton = document.querySelector('.lpvm_button.lpvm_u');
                jeśli (lpvmUBotton) {
                    lpvmUBotton.click();
                    ustawCzasOkres(() => {
                        // Wykonaj GAME.page_switch('game_map');
                        GRA.page_switch('mapa_gry');
                        ustawCzasOkres(() => {
                            const lpvmLpvmButton = document.querySelector('.lpvm_button.lpvm_lpvm');
                            jeśli (lpvmLpvmButton) {
                                lpvmLpvmButton.kliknij();
                            }
                        (2000);
                    (2000);
                }
            (2000);
        (2000);
    }
}





funkcja performOtherActions() {
    const ghResButton = document.querySelector('.gh_button.gh_res');
    jeśli (ghResButton) {
        ustawCzasOkres(() => {
            ghResButton.click();
            ustawCzasOkres(() => {
                // Wykonaj GAME.page_switch('game_map');
                GRA.page_switch('mapa_gry');
                ustawCzasOkres(() => {
                    const resButton = document.querySelector('.res_button.res_res');
                    jeśli (przycisk) {
                        resButton.click();
                    }
                (2000);
            (2000);
        (2000);
    }
}

utwórzPrzyciskKontrolny();

const runningStateFromStorage = window.localStorage.getItem('isRunning');
jeśli (runningStateFromStorage === 'true') {
    przełączScript();
}