class EmbedServer {
    private embedTitle: string | null;
    private embedDescription: string | null;
    private embedColor: number;

    /**
     * Funkcja do ustawiania tytułu embeda.
     * @param text Tytuł embeda. Ustawienie null zakończy się brakiem tytułu.
     * @returns Zwraca element, by ułatwić szybkość pisania.
     */
    public setTitle(text: string | null): EmbedServer {
        this.embedTitle = text;
        return this;
    };

    /**
     * Funkcja do ustawiania opisu embeda.
     * @param text Opis embeda. Ustawienie null zakończy się brakiem opisu.
     * @returns Zwraca element, by ułatwić szybkość pisania.
     */
    public setDescription(text: string | null): EmbedServer {
        this.embedDescription = text;
        return this;
    };

    /**
     * Funkcja do ustawiania koloru embeda.
     * @param color Kolor embeda. Można korzystać z palety EmbedColors.
     * @returns Zwraca element, by ułatwić szybkość pisania.
     */
    public setColor(color: number): EmbedServer {
        this.embedColor = color;
        return this;
    };

    /**
     * Funkcja od pobierania embeda w notacji JSON.
     * @returns Zwraca obiekt JSON, gotowy do wysłania na kanał Discord.
     */
    public getEmbed() {
        return {
            color: this.embedColor,

            title: this.embedTitle,
            description: this.embedDescription,
        };
    };
};

export { EmbedServer };