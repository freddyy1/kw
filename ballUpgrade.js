klasa ballUpgrade {
    konstruktor() {
        this.upgradeAllText = 'Ulepszaj wszystkie';
        this.stopText = 'STOP';
        this.waitingForResponse = false;
        this.bonusy = [];
        to.synergy = parseInt($("#ss_synergy_lvl").html());
        this.hasStarted = fałsz;
        $("body").on("kliknij", `button[data-option="ss_page"][data-page="upgrade"]`, () => {
            this.showCheckboxes();
            this.showUpgradeAllButton();
        });
        $("body").on("kliknij", `button[data-option="ss_page"][data-page="resetuj"], #soulstone_interface .closeicon`, () => {
            jeśli (this.hasStarted) {
                this.stopUpgrading();
            }
            this.hidePola wyboru();
            this.hideUpgradeAllButton();
        });
        $("body").on("kliknij", `button[data-option="ss_upgrade_all"]`, () => {
            ten.kontroler();
        });
    }

    kontroler() {
        jeśli (this.hasStarted) {
            this.hasStarted = fałsz;
            this.stopUpgrading();
        } w przeciwnym razie {
            this.hasStarted = prawda;
            this.startUpgrading();
        }
        this.switchCheckboxesState();
        ten.tekstprzyciskuprzełącznika();
    }

    rozpocznijaktualizację() {
        jeśli (this.hasStarted) {
            GRA.completeProgress = () => {
                var res = postęp gry;
                przełącznik (res.a) {
                    przypadek 45:
                        jeśli (res.ball) {
                            GRA.parseData(55, res);
                            jeśli (this.hasStarted) {
                                jeśli(this.waitingForResponse) {
                                    this.waitingForResponse = false;
                                }
                                to.uaktualnienie();
                            }
                        }
                        przerwa;
                }
                usuń GAME.progress;
            }
            this.bonusy = [];
            to.uaktualnienie();
        }
    }

    zatrzymajaktualizację() {
        GRA.completeProgress = () => {
            var res = postęp gry;
            przełącznik (res.a) {
                przypadek 45:
                    jeśli (res.ball) {
                        GRA.parseData(55, res);
                    }
                    przerwa;
            }
            usuń GAME.progress;
        }

        this.waitingForResponse = false;

        jeśli (this.hasStarted) {
            ten.kontroler()
        }
    }

    aktualizacja() {
        jeśli(this.waitingForResponse) {
            powrót;
        }

        this.rateUpgrade();
    }

    wyślijUpgrade() {
        GAME.emitOrder({ a: 45, typ: 3, licytacja: GAME.ball_id });
        this.waitingForResponse = true;
    }

    rateUpgrade() {
        var powinienAcceptUpgrade = false;
        this.markBonuses();
        shouldAcceptUpgrade = this.evaluateBonuses();
        jeśli (powinienAcceptUpgrade) {
            GAME.emitOrder({ a: 45, typ: 5, licytacja: GAME.ball_id });
        }

        setTimeout(this.sendUpgrade, shouldAcceptUpgrade ? 300 : 0);
    }

    zaznaczBonkusy() {
        this.bonusy = [];
        $('.ball_stats.stat_page tr[id]:not([style*="display: none"])').each((wartość, indeks, tablica) => {
            this.bonuses.push($(`#bon${wartość + 1}_upgrade`)[0].checked);
        }, Ten);

        niech allUnchecked = this.bonuses.every((wartość, indeks, tablica) => {
            wartość == fałsz;
        }, Ten);

        jeśli(wszystkieNiezaznaczone) {
            this.stopUpgrading
        }
    }

    OceńBonusy() {
        suma zmiennej = 0;
        this.bonuses.forEach((powinien zawierać, indeks, tablica) => {
            jeśli(powinienZawierać) {
                suma += parseFloat($(`#ss_change_${index+1}`).text());
            }
        }, Ten);

        suma zwrotna >= 0;
    }

    pokażpola wyboru() {
        $('.ball_stats.stat_page tr[id]:not([style*="display: none"])').each(funkcja (indeks) {
            $(`#stat${index + 1}_bon`).after(`<input type="checkbox" id="bon${index + 1}_upgrade" value=${index + 1}>`);
        });
    }

    przełączStan pól wyboru() {
        $(".ball_stats.stat_page wejście[typ=pole wyboru]").each((indeks) => {
            $(`#bon${index + 1}_upgrade`).prop('disabled', this.hasStarted);
        });
    }

    ukryjpola wyboru() {
        $(".ball_stats.stat_page wejście[typ=pole wyboru]").each((indeks) => {
            $(`#bon${index + 1}_upgrade`).remove();
        });
    }

    pokażUaktualnijWszystkiePrzyciski() {
        $("#ss_page_upgrade > button").after('<button class="newBtn option" data-option="ss_upgrade_all">Ulepsz wszystkie</button>');
    }

    switchButtonText() {
        $('#ss_page_upgrade button[data-option="ss_upgrade_all"]').html(`${this.hasStarted ? this.stopText : this.upgradeAllText}`);
    }

    ukryjUaktualnijWszystkiePrzyciski() {
        $('#ss_page_upgrade przycisk[data-option="ss_upgrade_all"]').remove();
    }
}
