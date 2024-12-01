klasa KwsCharactersManager {
    konstruktor() {
        console.log("KWS: nowy menedżer postaci...");
        te.znaki = [];
        this.currentCharacterId = 0;
        ten.bieżącyIndeks = 0;
    }
    ustawCurrentCharacterId(charId) {
        console.log("KWS: menedżer znaków, ustaw bieżący charId = %s", charId);
        this.currentCharacterId = charId;
        this.currentIndex = this.characters.findIndex((wartość, indeks, tablica) => {
            wartość zwracana == charId;
        });
    }
    pobierzNextCharId() {
        jeśli (this.characters.length == 1) {
            console.log("KWS: następny charID to ten charID, tylko jeden char");
            zwróć this.currentCharacterId;
        }

        zmienna returnCharId;

        jeśli (this.currentIndex == this.characters.length - 1) {
            returnCharId = this.characters[0];
        } w przeciwnym razie {
            returnCharId = this.characters[this.currentIndex + 1];
        }

        this.setCurrentCharacterId(zwróćCharId);

        console.log("KWS: pobierz następny charID = %s", returnCharId);
        zwróć returnCharId;
    }
    pobierzPoprzedniCharId() {
        jeśli (this.characters.length == 1) {
            console.log("KWS: poprzedni charID to ten charID, tylko jeden char");
            zwróć this.currentCharacterId;
        }

        zmienna returnCharId;

        jeśli (this.currentIndex == 0) {
            returnCharId = this.characters[this.characters.length - 1];
        } w przeciwnym razie {
            returnCharId = this.characters[this.currentIndex - 1];
        }

        this.setCurrentCharacterId(zwróćCharId);
        
        console.log("KWS: pobierz poprzedni charID = %s", returnCharId);
        zwróć returnCharId;
    }
}

funkcja getCharacters() {
    var allCharacters = [...$("li[data-option=select_char]")];
    jeśli (długość wszystkich znaków == 0) {
        console.log("KWS: nie wykryto listy znaków, spróbuj za 200 ms...");
        ustawTimeout(pobierzZnaki, 200);
    } w przeciwnym razie {
        console.log("KWS: wykryto listę znaków, zapisuję...");
        var kwsCharactersManager = nowy KwsCharactersManager();
        allCharacters.forEach((element, indeks, tablica) => {
            kwsCharactersManager.characters.push(element.getAttribute("data-char_id"));
        });
        kwsLocalCharacters = Menedżer znaków kws;
    }
}

var kwsLocalCharacters = niezdefiniowane;
pobierzZnaki();
