class ekwipunekMenager {
    constructor() {
        const otwieranieKart = new cardOpen();
        const mapWrapper = new locationWrapper();
        this.setupCalculatePA();
    }

    setupCalculatePA() {
        const ekwipunekButton = document.querySelector('button.select_page[data-page="game_ekw"]');

        if (ekwipunekButton) {
            ekwipunekButton.addEventListener('click', () => {
                console.log("Przycisk Ekwipunek kliknięty.");
                this.createOrUpdatePADisplay();
            });
        } else {
            console.error("Nie znaleziono przycisku Ekwipunek!");
        }
    }

    createOrUpdatePADisplay() {
        const titleDiv = document.querySelector("#page_game_ekw > div.title");
        if (!titleDiv) return;

        let paDiv = document.getElementById("pa_display");

        if (!paDiv) {
            paDiv = document.createElement("div");
            paDiv.id = "pa_display";
            paDiv.innerText = `POSIADANE PA: OBLICZ`;
            paDiv.style.display = "inline-block";
            paDiv.style.color = "lightblue";
            paDiv.style.fontSize = "16px";
            paDiv.style.fontWeight = "bold";
            paDiv.style.cursor = "pointer";
            paDiv.style.position = "relative";
            paDiv.style.left = "40%";
            titleDiv.appendChild(paDiv);
            paDiv.addEventListener("click", () => {
                console.log("Obliczanie PA rozpoczęte...");
                new calculatePA();
            });
        }
    }
}

class cardOpen {
    constructor() {
        $("body").on("click", '#ekw_page_items div[data-base_item_id="1784"]', () => {
            $("#ekw_menu_use").one("click", () => { 
                setTimeout(() => {
                    $(`<button class="btn_small_gold otwieranie_kart" style="margin-right:4ch;">X100 OPEN</button>`).insertBefore("#kom_con > div > div.content > div:nth-child(1) > button.option.btn_small_gold");
                }, 500);
            });
        });
        $("body").on("click", '.otwieranie_kart', () => {
            let upperLimit = parseInt(document.querySelector("#item_am").value, 10);
            if (!isNaN(upperLimit) && upperLimit > 0) {
                for (let i = 0; i < upperLimit; i++) {
                    setTimeout(() => {
                        let cards = $(`#ekw_page_items div[data-base_item_id="1784"]`);
                        let cards_id = parseInt(cards.attr("data-item_id"));
                        GAME.socket.emit('ga',{a: 12, type: 14, iid: cards_id, page: GAME.ekw_page, page2: GAME.ekw_page2, am: '100'});
                    }, i * 2000);
                }
            } else {
                console.error("Wartość #item_am nie jest poprawną liczbą lub jest mniejsza niż 1.");
            }
        });     
    }
}

class calculatePA {
    constructor() {
        this.calculateFinalNumber().catch(error => {
            console.error("Błąd podczas obliczania PA:", error);
        });
    }

    async calculateFinalNumber() {
        const initialPA = parseInt(document.querySelector("#char_pa_max").innerText.replace(/\s+/g, ''), 10);
        let finalNumber = initialPA;

        const itemStacks = await this.getItemStacks([1244, 1242, 1259, 1473, 1260, 1472, 1243, 1471, 1494, 1493, 1492, 1489, 1485, 1484, 1483]);

        finalNumber += itemStacks[1244] * 100;
        finalNumber += itemStacks[1242] * 2000;
        finalNumber += itemStacks[1259] * 5000 + (initialPA * 0.03);
        finalNumber += itemStacks[1473] * 5000 + (initialPA * 0.03);
        finalNumber += itemStacks[1260] * 10000 + (initialPA * 0.15);
        finalNumber += itemStacks[1472] * 10000 + (initialPA * 0.15);
        finalNumber += itemStacks[1243] * initialPA;
        finalNumber += itemStacks[1471] * initialPA;
        finalNumber += (itemStacks[1489] * 5000 + (initialPA * 0.03)) * 20;
        finalNumber += (itemStacks[1489] * 10000 + (initialPA * 0.15)) * 3;
        finalNumber += (itemStacks[1494] * 10000 + (initialPA * 0.15)) * 3;
        finalNumber += (itemStacks[1493] * 10000 + (initialPA * 0.15)) * 3;
        finalNumber += (itemStacks[1492] * 10000 + (initialPA * 0.15)) * 3;
        finalNumber += (itemStacks[1485] * 10000 + (initialPA * 0.15)) * 3;
        finalNumber += (itemStacks[1483] * 10000 + (initialPA * 0.15)) * 3;
        finalNumber += (itemStacks[1484] * 10000 + (initialPA * 0.15)) * 3;
        finalNumber += (itemStacks[1484] * initialPA) * 4;

        this.updatePA(GAME.dots(finalNumber));
        console.log("MAX PA:" + initialPA + " Łączna ilość:" + finalNumber);
    }

    async getItemStacks(itemIds) {
        const stacks = {};
        itemIds.forEach(id => stacks[id] = 0);
        const pages = [
            { page: 0, page2: 0 },
            { page: 0, page2: 1 },
            { page: 0, page2: 2 }
        ];
        for (let page of pages) {
            await GAME.socket.emit('ga', { a: 12, page: page.page, page2: page.page2, used: 1 });
            await new Promise(resolve => setTimeout(resolve, 1500));
            itemIds.forEach(itemId => {
                const itemElement = document.querySelector(`#ekw_page_items [data-base_item_id="${itemId}"]`);
                if (itemElement) {
                    const stack = parseInt(itemElement.getAttribute('data-stack'), 10) || 0;
                    stacks[itemId] += stack;
                }
            });
        }
        console.log(stacks);
        return stacks;
    }

    updatePA(finalNumber) {
        const paDiv = document.getElementById("pa_display");
        if (paDiv) {
            paDiv.innerText = `POSIADANE PA: ${finalNumber}`;
        }
    }





let lastTimestamp = Date.now();
let isRunning = false;
let refreshInterval;

function checkRefresh() {
    const currentTimestamp = Date.now();

    if (currentTimestamp - lastTimestamp > 15000 && isRunning) {
        lastTimestamp = currentTimestamp;

        const linkElement = document.querySelector('.qlink.load_afo');
        if (linkElement) {
            linkElement.click();
            isRunning = false;

			setTimeout(() => {
				const selectedOption = document.getElementById('actionSelect').value;
				switch (selectedOption) {
					case 'Kody':
						// Code related actions
						performCodeActions();
						break;
					case 'PVP':
						// PVP related actions
						performPvpActions()
							.then(() => {
								return arenaAndAbyss();
							});
						break;
					case 'PVM':
						// PVM related actions
						performPvmActions();
						break;
					case 'Listy':
						// List related actions
						performListActions();
						break;
					case 'Wyprawy':
						autoexpeditions();
						break;                                     
					case 'Zbierajka':
						// Other related actions
						performOtherActions();
						break;			
					default:
						break;
				}
			}, 2000);
        }
    }
}

function toggleScript() {
    isRunning = !isRunning;

    if (isRunning) {
        window.localStorage.setItem('isRunning', 'true');
        refreshInterval = setInterval(() => {
            checkRefresh();
        }, 1000);

    } else {
        window.localStorage.setItem('isRunning', 'false');
        clearInterval(refreshInterval);
    }

    updateButtonText();
}

function updateButtonText() {
    const controlButton = document.getElementById('toggleButton');
    if (controlButton) {
        controlButton.textContent = isRunning ? 'Refresh Afo Stop' : 'Refresh Afo Start';
    }
}

function createControlButton() {
    const controlButton = document.createElement('button');
    controlButton.id = 'toggleButton';
    controlButton.textContent = isRunning ? 'Refresh Afo Stop' : 'Refresh Afo Start';
    controlButton.style.position = 'fixed';
    controlButton.style.top = '36px';
    controlButton.style.right = '10px';
    controlButton.style.background = '#333';
    controlButton.style.zIndex = '9999';
    controlButton.style.width = '150px'; 
    controlButton.style.padding = '1px';
    controlButton.style.borderRadius = '5px';
    controlButton.style.borderStyle = 'solid';
    controlButton.style.borderWidth = '5px 6px 5px 6px';
    controlButton.style.display = 'block';
    controlButton.style.userSelect = 'none';
    controlButton.style.color = 'gold'; 
    controlButton.style.borderColor = 'rgba(0,0,0,0.9)'; 
    controlButton.addEventListener('click', () => {
        toggleScript();
    });
    document.body.appendChild(controlButton);

    const selectContainer = document.createElement('div');
    selectContainer.style.position = 'fixed';
    selectContainer.style.top = '73px';
    selectContainer.style.right = '10px';
    selectContainer.style.background = '#333';
    selectContainer.style.zIndex = '9999';
    selectContainer.style.width = '150px'; 
    selectContainer.style.padding = '1px';
    selectContainer.style.borderRadius = '5px';
    selectContainer.style.borderStyle = 'solid';
    selectContainer.style.borderWidth = '5px 6px 5px 6px';
    selectContainer.style.display = 'block';
    selectContainer.style.userSelect = 'none';
    selectContainer.style.color = 'rgba(0,0,0,0.9)'; 

    const actionSelect = document.createElement('select');
    actionSelect.id = 'actionSelect';
    actionSelect.style.color = 'gold'; // Set initial font color to gold
    actionSelect.style.background = '#333333';
    actionSelect.style.border = 'none';
    actionSelect.style.width = '100%';
    actionSelect.style.height = '100%';
    actionSelect.style.padding = '5px';
    actionSelect.style.fontSize = '12px';
    actionSelect.style.fontWeight = 'bold';

    // Retrieve the selected option from local storage, if available
    const savedOption = window.localStorage.getItem('selectedOption');

    // Adding event listener to change the color of the selected option
    actionSelect.addEventListener('change', function() {
        const selectedOption = this.options[this.selectedIndex];
        selectedOption.style.color = 'gold';
        for (let i = 0; i < this.options.length; i++) {
            if (i !== this.selectedIndex) {
                this.options[i].style.color = 'white';
            }
        }
        // Store the selected option in local storage
        window.localStorage.setItem('selectedOption', selectedOption.value);
    });

    const options = ['Kody', 'PVP', 'PVM', 'Listy', 'Wyprawy', 'Zbierajka'];
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        // Set the selected attribute if the option matches the saved option in local storage
        if (savedOption === option) {
            optionElement.selected = true;
            optionElement.style.color = 'gold'; // Set font color to gold for the saved option
        }
        actionSelect.appendChild(optionElement);
    });

    selectContainer.appendChild(actionSelect);
    document.body.appendChild(selectContainer);
}

function performCodeActions() {
    let ghButtonElement = document.querySelector('.gh_button.gh_code');
    let codeButtonElement = document.querySelector('.code_button.code_code');
    let codeButtonAccElement = document.querySelector('.code_button.code_acc');
    let codeButtonSubElement = document.querySelector('.code_button.code_zast');
    if (ghButtonElement && codeButtonElement) {
        setTimeout(() => {
            ghButtonElement.click();
            setTimeout(() => {
                codeButtonElement.click();
                setTimeout(() => {
                    codeButtonAccElement.click();
                    setTimeout(() => {
                        codeButtonSubElement.click();
                   }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);
    }
}

function performPvpActions() {
    return new Promise((resolve, reject) => {
        let ghButtonElement = document.querySelector('.gh_button.gh_pvp');
        let codeButtonElement = document.querySelector('.pvp_button.pvp_pvp');
        if (ghButtonElement && codeButtonElement) {
            setTimeout(() => {
                GAME.page_switch('game_map');
                setTimeout(() => {
                    ghButtonElement.click(); 
                    setTimeout(() => {
                        codeButtonElement.click();
                        resolve();
                    }, 2000);
                }, 1000);
            }, 2000);
        } else {
            reject(new Error('One or both buttons not found'));
        }
    });
}

function arenaAndAbyss() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            var button = document.querySelector('.qlink.manage_auto_arena');
            if (button) {
                button.click();
                setTimeout(function() {
                    var abyssButton = document.querySelector('.qlink.manage_auto_abyss');
                    if (abyssButton) {
                        abyssButton.click();
                        resolve(); 
                    } else {
                        reject(new Error('Abyss button not found'));
                    }
                }, 700);
            } else {
                reject(new Error('Arena button not found'));
            }
        }, 1500);
    });
}



function selectSavedSpawners() {
    const selectedSpawners = JSON.parse(localStorage.getItem('selectedSpawners')) || [];
    let index = 0;
    const intervalId = setInterval(() => {
        if (index >= selectedSpawners.length) {
            clearInterval(intervalId);
            return;
        }
        const spawnerId = selectedSpawners[index];
        const spawner = document.getElementById(spawnerId);
        if (spawner) {
            spawner.click(); 
        }
        index++;
    }, 800);
}

function saveSelectedSpawners() {
    const selectedSpawners = [];
    const spawners = document.querySelectorAll('[id^="kws_spawner_ignore_"]');
    spawners.forEach(spawner => {
        if (spawner.checked) {
            selectedSpawners.push(spawner.id);
        }
    });
    localStorage.setItem('selectedSpawners', JSON.stringify(selectedSpawners));
}

function performPvmActions() {
    const ghRespButton = document.querySelector('.gh_button.gh_resp');
    if (ghRespButton) {
        setTimeout(() => {
            ghRespButton.click();
            setTimeout(() => {
                const respButton = document.querySelector('.resp_button.resp_resp');
                if (respButton) {
                    GAME.page_switch('game_map');
                    setTimeout(() => {
                        respButton.click();
                        selectSavedSpawners();
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
function autoexpeditions() {
  setTimeout(function() {
    var button = document.querySelector('.qlink.sideIcons.manage_autoExpeditions');
    if (button) {
      button.click();
    }
  }, 10000);
}

function performListActions() {
    const ghLpvmButton = document.querySelector('.gh_button.gh_lpvm');
    if (ghLpvmButton) {
        setTimeout(() => {
            ghLpvmButton.click();
            setTimeout(() => {
                const lpvmUButton = document.querySelector('.lpvm_button.lpvm_u');
                if (lpvmUButton) {
                    lpvmUButton.click();
                    setTimeout(() => {
                        // Execute GAME.page_switch('game_map');
                        GAME.page_switch('game_map');
                        setTimeout(() => {
                            const lpvmLpvmButton = document.querySelector('.lpvm_button.lpvm_lpvm');
                            if (lpvmLpvmButton) {
                                lpvmLpvmButton.click();
                            }
                        }, 2000);
                    }, 2000);
                }
            }, 2000);
        }, 2000);
    }
}





function performOtherActions() {
    const ghResButton = document.querySelector('.gh_button.gh_res');
    if (ghResButton) {
        setTimeout(() => {
            ghResButton.click();
            setTimeout(() => {
                // Execute GAME.page_switch('game_map');
                GAME.page_switch('game_map');
                setTimeout(() => {
                    const resButton = document.querySelector('.res_button.res_res');
                    if (resButton) {
                        resButton.click();
                    }
                }, 2000);
            }, 2000);
        }, 2000);
    }
}

createControlButton();

const runningStateFromStorage = window.localStorage.getItem('isRunning');
if (runningStateFromStorage === 'true') {
    toggleScript();
}
